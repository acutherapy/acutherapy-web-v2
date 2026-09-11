import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseAnonKey) 
    ? createClient(supabaseUrl, supabaseAnonKey) 
    : null;

const requestAttempts = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const DAILY_RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000;
const DAILY_RATE_LIMIT_MAX_REQUESTS = 10;

function isPlausibleName(value) {
    if (typeof value !== 'string') return false;
    const name = value.trim();
    return name.length >= 2 && name.length <= 80 && /[A-Za-z\u4e00-\u9fff]/.test(name) && !/[A-Za-z]{14,}/.test(name.replace(/\s/g, ''));
}

function normalizeUsPhone(value) {
    if (typeof value !== 'string') return false;
    const digits = value.replace(/\D/g, '');
    const normalized = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
    if (!/^\d{10}$/.test(normalized) || /^[01]/.test(normalized)) return null;
    return `+1${normalized}`;
}

function isRateLimited(ip) {
    const now = Date.now();
    const recent = (requestAttempts.get(ip) || []).filter((time) => now - time < DAILY_RATE_LIMIT_WINDOW_MS);
    const attemptsInTenMinutes = recent.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
    if (attemptsInTenMinutes.length >= RATE_LIMIT_MAX_REQUESTS || recent.length >= DAILY_RATE_LIMIT_MAX_REQUESTS) return true;
    recent.push(now);
    requestAttempts.set(ip, recent);
    return false;
}

async function verifyTurnstile(token, ip) {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret || !token) return false;
    const form = new URLSearchParams({ secret, response: token });
    if (ip) form.set('remoteip', ip);
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: form.toString(),
    });
    const result = await response.json();
    return result.success === true;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { name, email, phone, reason, location, contactMethod = 'Phone', turnstileToken, website, formStartedAt } = req.body || {};
        const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
        const normalizedPhone = normalizeUsPhone(phone);
        const elapsed = Date.now() - Number(formStartedAt);

        // Stop bad requests here, before they can write a lead or send any Resend email.
        if (website || !Number.isFinite(elapsed) || elapsed < 2500 || !isPlausibleName(name) || !normalizedPhone || (email && !/^\S+@\S+\.\S+$/.test(email))) {
            return res.status(400).json({ error: 'We could not verify this appointment request. Please try again.' });
        }
        if (isRateLimited(ip)) {
            return res.status(429).json({ error: 'Too many requests. Please try again shortly.' });
        }
        if (!(await verifyTurnstile(turnstileToken, ip))) {
            return res.status(400).json({ error: 'Please complete the security check and try again.' });
        }

        // Treat a second request for the same phone within 24 hours as already received.
        // It returns success so a patient who double-clicks does not see an alarming error.
        if (supabase) {
            const yesterday = new Date(Date.now() - DAILY_RATE_LIMIT_WINDOW_MS).toISOString();
            const { data: existingLead, error: duplicateError } = await supabase
                .from('leads')
                .select('id')
                .eq('phone', normalizedPhone)
                .gte('created_at', yesterday)
                .limit(1)
                .maybeSingle();
            if (duplicateError) console.error('Duplicate lead check error:', duplicateError);
            if (existingLead) return res.status(200).json({ success: true, duplicate: true });
        }

        // Insert lead into Supabase if client is initialized
        if (supabase) {
            try {
                const { error: dbError } = await supabase
                    .from('leads')
                    .insert({
                        name,
                        phone: normalizedPhone,
                        email,
                        condition: reason,
                        location,
                        preferred_contact: contactMethod,
                        status: 'NEW',
                        source: 'WEBSITE'
                    });
                
                if (dbError) {
                    console.error('Supabase DB Insert Error:', dbError);
                }
            } catch (dbErr) {
                console.error('Supabase Client Error:', dbErr);
            }
        }

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'Resend API key not configured' });
        }

        const resend = new Resend(apiKey);

        // 1. Send Notification to Clinic
        const { data: adminData, error: adminError } = await resend.emails.send({
            from: 'AcuTherapy Website <onboarding@resend.dev>',
            to: ['leyzax@gmail.com'],
            replyTo: email || 'leyzax@gmail.com',
            subject: `[Website Appointment] New Patient Request: ${name}`,
            html: `
                <h2>New Appointment Request</h2>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                
                <h3>1. Client Info</h3>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Preferred Contact:</strong> <span style="color: #0d9488; font-weight: bold;">${contactMethod}</span></li>
                </ul>

                <h3>2. Appointment Details</h3>
                <ul>
                    <li><strong>Location:</strong> ${location || 'No Preference'}</li>
                    <li><strong>Reason/Symptoms:</strong> ${reason || 'N/A'}</li>
                </ul>
                
                <br/>
                <p style="color: #666; font-size: 12px;">Sent from AcuTherapy Website (Vite SPA Version)</p>
            `,
        });

        if (adminError) {
            console.error('Resend Admin Error:', adminError);
            return res.status(400).json({ error: adminError.message });
        }

        // 2. Send Confirmation to User
        if (email) {
            try {
                let userSendResult = await resend.emails.send({
                    from: 'AcuTherapy Clinics <info@acutherapy.com>',
                    to: [email],
                    replyTo: 'leyzax@gmail.com',
                    subject: `We received your appointment request`,
                    html: `
                        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2 style="color: #0d9488;">Appointment Request Received</h2>
                            <p>Dear ${name},</p>
                            <p>Thank you for choosing AcuTherapy Clinics. We have received your request for an appointment.</p>
                            
                            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                <p style="margin: 0 0 10px 0;"><strong>Your Details:</strong></p>
                                <ul style="margin: 0; padding-left: 20px;">
                                    <li><strong>Phone:</strong> ${phone}</li>
                                    <li><strong>Reason:</strong> ${reason || 'N/A'}</li>
                                    <li><strong>Preferred Contact:</strong> ${contactMethod}</li>
                                </ul>
                            </div>

                            <p>Our team will review your request and contact you shortly via <strong>${contactMethod}</strong> to schedule your specific time slot.</p>
                            <br/>
                            <p>Warm regards,</p>
                            <p>The AcuTherapy Team</p>
                            <p><a href="https://acutherapy.com" style="color: #0d9488;">acutherapy.com</a></p>
                        </div>
                    `,
                });

                // Sandbox fallback if domain fails or is not verified
                if (userSendResult.error && (userSendResult.error.message.includes('not verified') || userSendResult.error.message.includes('verify a domain'))) {
                    await resend.emails.send({
                        from: 'AcuTherapy Clinics <onboarding@resend.dev>',
                        to: ['leyzax@gmail.com'],
                        replyTo: 'leyzax@gmail.com',
                        subject: `[Sandbox Fallback] We received your appointment request`,
                        html: `
                            <div style="background-color: #FEF3C7; border: 1px solid #F59E0B; color: #92400E; padding: 12px; border-radius: 8px; margin-bottom: 20px; font-size: 12px;">
                              ⚠️ <strong>Sandbox Mode Fallback:</strong> original recipient: <strong>${email}</strong>
                            </div>
                            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                                <h2 style="color: #0d9488;">Appointment Request Received</h2>
                                <p>Dear ${name},</p>
                                <p>Thank you for choosing AcuTherapy Clinics. We have received your request for an appointment.</p>
                                
                                <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                    <p style="margin: 0 0 10px 0;"><strong>Your Details:</strong></p>
                                    <ul style="margin: 0; padding-left: 20px;">
                                        <li><strong>Phone:</strong> ${phone}</li>
                                        <li><strong>Reason:</strong> ${reason || 'N/A'}</li>
                                        <li><strong>Preferred Contact:</strong> ${contactMethod}</li>
                                    </ul>
                                </div>

                                <p>Our team will review your request and contact you shortly via <strong>${contactMethod}</strong> to schedule your specific time slot.</p>
                                <br/>
                                <p>Warm regards,</p>
                                <p>The AcuTherapy Team</p>
                                <p><a href="https://acutherapy.com" style="color: #0d9488;">acutherapy.com</a></p>
                            </div>
                        `,
                    });
                }
            } catch (err) {
                console.error('Resend fallback send error:', err);
            }
        }

        return res.status(200).json({ success: true, data: adminData });

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
