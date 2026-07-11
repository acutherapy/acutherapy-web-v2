import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseAnonKey) 
    ? createClient(supabaseUrl, supabaseAnonKey) 
    : null;

const emailTemplates = {
  zh: {
    subject: "✨ 您的五行能量分析报告与护身符壁纸 - AcuTherapy Clinics",
    greeting: "尊敬的",
    intro: "感谢您完成 AcuTherapy Clinics 的中医体质与生命周期测试！您的身心能量分析报告已就绪：",
    dominant: "主导能量（先天强项）",
    deficient: "偏弱能量（先天弱项）",
    action_report: "查看我的完整能量报告与生命节律 ➔",
    action_book: "在线预约 David Cai 医生门诊治疗 ➔",
    footer: "本测试结果基于传统天干地支数理与黄帝内经经典，如需更精准的临床诊断与针对性针灸治疗，建议预约蔡医生面诊进行脉诊评估。",
    signature: "AcuTherapy Clinics 医疗团队"
  },
  en: {
    subject: "✨ Your Personalized Five Elements Energy Profile & Talisman - AcuTherapy Clinics",
    greeting: "Dear",
    intro: "Thank you for completing the TCM Constitution & Life Cycle Assessment with AcuTherapy Clinics! Your body & mind energy charter is ready:",
    dominant: "Dominant Archetype",
    deficient: "Deficient Element",
    action_report: "View My Full Interactive Report & Life Cycle ➔",
    action_book: "Book a Clinic Appointment with Dr. David Cai ➔",
    footer: "This assessment is based on traditional Chinese medicine elements and Huangdi Neijing cycles. For a precise medical diagnosis and custom acupuncture plan, we recommend scheduling an in-person pulse diagnosis.",
    signature: "The AcuTherapy Clinics Medical Team"
  },
  ja: {
    subject: "✨ あなたの五行エネルギー診断書＆お守り壁紙 - AcuTherapy Clinics",
    greeting: "親愛なる",
    intro: "AcuTherapy Clinics の東洋医学体質＆生命周期テストを完了していただき、ありがとうございます！診断書が完成しました：",
    dominant: "優位な属性",
    deficient: "不足するエネルギー",
    action_report: "完全版レポート＆生命リズムを表示する ➔",
    action_book: "デビッド・ツァイ医師の鍼灸面診を予約する ➔",
    footer: "この診断は伝統中医学の陰陽五行説に基づいています。より詳細な臨床診断とパーソナライズ鍼灸治療を受けるには、直接の対面診療をご予約ください。",
    signature: "AcuTherapy Clinics 医療チーム"
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, dob, tob, gender, symptoms, dominant, deficient, lang } = req.body;

    // 1. Insert into Supabase leads table
    if (supabase) {
      try {
        const symptomsStr = Array.isArray(symptoms) ? symptoms.join(', ') : symptoms || 'None';
        await supabase
          .from('leads')
          .insert({
            name: name || 'TCM Quiz User',
            email: email,
            phone: 'N/A',
            condition: `[TCM Quiz] Dominant: ${dominant}, Deficient: ${deficient}, Symptoms: ${symptomsStr}, DOB: ${dob}, TOB: ${tob}`,
            location: 'Honolulu',
            preferred_contact: 'Email',
            status: 'NEW',
            source: 'QUIZ'
          });
      } catch (dbErr) {
        console.error('Supabase Quiz Lead Insertion Error:', dbErr);
      }
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Resend API key not configured' });
    }

    const resend = new Resend(apiKey);
    const text = emailTemplates[lang || 'en'] || emailTemplates.en;

    // Build URL back to report
    const encodedName = encodeURIComponent(name || '');
    const reportUrl = `https://acutherapy.com/constitution-test?lang=${lang}&email=${email}&name=${encodedName}&gender=${gender}&dob=${dob}&tob=${tob}&symptoms=${encodeURIComponent(JSON.stringify(symptoms))}&unlocked=true`;

    const htmlContent = `
      <div style="font-family: sans-serif; background-color: #F8FAFC; color: #0F172A; max-width: 600px; margin: 0 auto; padding: 40px 24px; border: 1px solid #E2E8F0; border-radius: 16px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <span style="font-size: 11px; font-weight: bold; letter-spacing: 0.15em; color: #2563EB; text-transform: uppercase;">ACUTHERAPY CLINICS</span>
          <h2 style="font-size: 20px; font-weight: 900; margin: 5px 0 0 0; color: #0F172A;">${text.subject.split(' - ')[0]}</h2>
        </div>

        <div style="font-size: 14px; line-height: 1.6; color: #334155;">
          <p>${text.greeting} <strong>${name}</strong>,</p>
          <p>${text.intro}</p>

          <div style="background-color: #F1F5F9; border-left: 4px solid #2563EB; padding: 15px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0;"><strong>📊 ${text.dominant}：</strong> <span style="font-size: 16px; font-weight: bold; color: #1E293B;">${dominant}</span></p>
            <p style="margin: 0;"><strong>📉 ${text.deficient}：</strong> <span style="font-size: 16px; font-weight: bold; color: #2563EB;">${deficient}</span></p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${reportUrl}" target="_blank" style="background-color: #2563EB; color: #FFFFFF; text-decoration: none; padding: 12px 24px; font-size: 13px; font-weight: bold; border-radius: 8px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);">
              ${text.action_report}
            </a>
          </div>

          <div style="text-align: center; margin: 15px 0 30px 0;">
            <a href="https://acutherapy.com/book-appointment" target="_blank" style="background-color: #0F172A; color: #FFFFFF; text-decoration: none; padding: 12px 24px; font-size: 13px; font-weight: bold; border-radius: 8px; display: inline-block;">
              ${text.action_book}
            </a>
          </div>

          <p style="font-size: 11px; color: #64748B; border-top: 1px solid #E2E8F0; padding-top: 20px; margin-top: 30px;">
            ${text.footer}
          </p>

          <p style="font-size: 12px; font-weight: bold; color: #475569; margin-top: 20px;">
            ${text.signature}<br/>
            <a href="https://acutherapy.com" style="color: #2563EB; text-decoration: none;">acutherapy.com</a>
          </p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'AcuTherapy Clinics <onboarding@resend.dev>',
      to: [email],
      replyTo: 'leyzax@gmail.com',
      subject: text.subject,
      html: htmlContent
    });

    if (error) {
      console.error('Resend send error:', error);
      return res.status(400).json({ error: error.message });
    }

    // Also send an admin notification email to the clinic owner
    try {
      await resend.emails.send({
        from: 'AcuTherapy Clinics <onboarding@resend.dev>',
        to: ['leyzax@gmail.com'],
        subject: `📧 [TCM Quiz] New Lead: ${name} (${dominant}/${deficient})`,
        html: `
          <h3>New Lead Registered from Five Elements Quiz</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Dominant Element:</strong> ${dominant}</li>
            <li><strong>Deficient Element:</strong> ${deficient}</li>
            <li><strong>DOB:</strong> ${dob}</li>
            <li><strong>TOB:</strong> ${tob}</li>
            <li><strong>Language:</strong> ${lang}</li>
            <li><strong>Symptoms:</strong> ${Array.isArray(symptoms) ? symptoms.join(', ') : symptoms || 'None'}</li>
          </ul>
        `
      });
    } catch (e) {
      console.error('Admin notification email failed:', e);
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('Subscription error:', err);
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}
