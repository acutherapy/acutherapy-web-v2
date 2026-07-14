import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseAnonKey) 
    ? createClient(supabaseUrl, supabaseAnonKey) 
    : null;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { name, email, phone, reason, location, contactMethod = 'Phone' } = req.body;

        // Insert lead into Supabase if client is initialized
        if (supabase) {
            try {
                const { error: dbError } = await supabase
                    .from('leads')
                    .insert({
                        name,
                        phone,
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
