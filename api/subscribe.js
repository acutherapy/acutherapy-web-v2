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
    dominant: "Dominant Element",
    deficient: "Deficient Element",
    action_report: "View My Full Interactive Report & Life Cycle ➔",
    action_book: "Book a Clinic Appointment with Dr. David Cai ➔",
    footer: "This assessment is based on traditional Chinese medicine elements and Huangdi Neijing cycles. For a precise medical diagnosis and custom acupuncture plan, we recommend scheduling an in-person pulse diagnosis.",
    signature: "The AcuTherapy Clinics Medical Team"
  },
  ja: {
    subject: "✨ あなたの五行エネルギー诊断书＆お守り壁纸 - AcuTherapy Clinics",
    greeting: "亲爱なる",
    intro: "AcuTherapy Clinics の东洋医学体质＆生命周期テストを完了していただき、ありがとうございます！诊断书が完成しました：",
    dominant: "横位な属性",
    deficient: "不足するエネルギー",
    action_report: "完全版レポート＆生命リズムを表示する ➔",
    action_book: "デビッド・ツァイ医师の鍼灸面诊を予約する ➔",
    footer: "この诊断は传统中医学の阴阳五行说に基づいています。より详细な临床诊断とパーソナライズ鍼灸治疗を受けるには、直接の対面诊疗をご予約ください。",
    signature: "AcuTherapy Clinics 医疗チーム"
  }
};


const symptomReflections = {
  zh: {
    A: `• <strong>关于心神与压力调理</strong>：您勾选了“脑子转个不停、难以静下来”的身心感受。中医认为这对应“心火亢盛”或“肝郁化火”，易耗伤心血。David Cai 医生建议日常多按压<strong>神门穴</strong>和<strong>内关穴</strong>以安定心神。在临床治疗上，针灸能显著放松紧绷的植物神经，让身体重新找回宁静。`,
    B: `• <strong>关于睡眠与深度休息</strong>：您勾选了“睡眠很轻、易醒、觉得累”的感受。在五行中，这常由“水火不济”（心肾不交）引起。建议睡前用温水泡脚，并揉按足底<strong>涌泉穴</strong>和足踝<strong>三阴交穴</strong>以引火归元。配合临床针灸，可有效调节夜间褪黑素，助您深度熟睡。`,
    C: `• <strong>关于消化与脾胃能量</strong>：您勾选了“敏感胀气、吃点东西就肚子胀”的感受。脾胃为“土”，是能量运化的枢纽。建议少食生冷，每日按揉膝盖下方的<strong>足三里穴</strong>和上腹的<strong>中脘穴</strong>。临床上，针灸能显著调和胃气、促进胃肠蠕动，快速消除饱胀感。`,
    D: `• <strong>关于肩颈与经络酸痛</strong>：您勾选了“身体发紧、肩颈酸痛绷紧”的感受。中医常讲“通则不痛，痛则不通”。这代表局部经络气血受阻。建议平时注意避风保暖，多点按手部<strong>合谷穴</strong>与肩部<strong>肩井穴</strong>。临床针灸结合火罐，能迅速松解深层肌肉粘连，消除阻滞。`,
    E: `• <strong>关于慢性疲劳与精力</strong>：您勾选了“身体没电、容易疲倦力不从心”的感受。这说明元气与肾精有所透支。日常切忌过度劳累，建议点按或热敷小腹的<strong>气海穴</strong>和腰部的<strong>肾俞穴</strong>。临床针对性灸疗与针刺，能强壮脾肾，帮您重新“充电”恢复精力。`,
    none: `• <strong>未病防范与气血调和</strong>：您目前没有明显的身体慢性痛点。中医的最高境界在于“治未病”。David Cai 医生建议您结合四季更替进行预防性针灸经络调理，帮助机体保持阴阳平衡，培元固本，延缓自然衰老。`
  },
  en: {
    A: `• <strong>Mind & Stress Relief</strong>: You noted feeling a racing mind or finding it hard to quiet your thoughts. In TCM, this indicates unanchored Heart Spirit or Liver Qi stagnation. We suggest massaging <strong>Shenmen (HT7)</strong> and <strong>Neiguan (PC6)</strong> daily. In the clinic, target acupuncture helps soothe your overactive nervous system.`,
    B: `• <strong>Sleep & Deep Rest</strong>: You noted being a light sleeper, easily awoken, or waking up tired. This is often caused by a lack of communication between the Heart (Fire) and Kidneys (Water). We recommend soaking your feet in warm water before bed and massaging <strong>Yongquan (KI1)</strong> and <strong>Sanyinjiao (SP6)</strong>. Acupuncture helps regulate sleep cycles.`,
    C: `• <strong>Digestive & Spleen Care</strong>: You noted sensitive stomach or bloating after eating. Spleen-Earth is the source of post-natal vitality. Avoid cold foods and massage <strong>Zusanli (ST36)</strong> and <strong>Zhongwan (CV12)</strong> daily. Clinical acupuncture regulates gut motility and quickly relieves post-meal bloating.`,
    D: `• <strong>Stiffness & Pain Relief</strong>: You noted body stiffness or tight neck and shoulders. In TCM, pain is a block in Qi and Blood circulation. Keep warm and massage <strong>Hegu (LI4)</strong> and <strong>Jianjing (GB21)</strong>. Target acupuncture combined with cupping relaxes deep tissue and restores blood circulation.`,
    E: `• <strong>Energy & Fatigue Recovery</strong>: You noted running on low battery or chronically drained. This points to depleted Qi and Kidney essence. Avoid late nights or exhausting workouts, and massage <strong>Qihai (CV6)</strong> and <strong>Shenshu (BL23)</strong>. Target clinical acupuncture helps rebuild your energy reservoir.`,
    none: `• <strong>Preventative Wellness</strong>: You have no active chronic symptoms. In TCM, the highest form of medicine is preventative care. Dr. Cai recommends seasonal meridian tuning to maintain balance, boost immunity, and promote longevity.`
  },
  ja: {
    A: `• <strong>脳疲労と心のケア</strong>：「考えすぎて頭が休まらない、焦りを感じる」とお答えいただきました。これは自律神経の過緊張や気滞を意味します。日常ケアとして、手首の「神門」や「内関」のツボを揉んでください。臨床鍼灸治療では、交感神経を落ち着かせ、心を穏やかにします。`,
    B: `• <strong>睡眠と睡眠リズムの調律</strong>：「眠りが浅い、夜中に目が覚める、または朝起きた時にスッキリしない」とお答えいただきました。心身の陰陽バランスの乱れが原因です。就寝前の足湯と、足裏の「湧泉」や足首の「三陰交」のマッサージが効果的です。鍼治療で深い眠りをサポートします。`,
    C: `• <strong>脾胃（消化器系）と消化ケア</strong>：「食欲にムラがある、または食べると胃もたれやお腹の張りを感じやすい」とお答えいただきました。冷たいものを避け、膝の下の「足三里」やみぞおちの「中脘」を刺激してください。鍼治療は胃腸の働きを高め、お腹の張りを素早く解消します。`,
    D: `• <strong>体のこわばりと痛みの緩和</strong>：「肩や首のコリが抜けない、体が強張る、またはすっきりしない鈍痛がある」とお答えいただきました。気血の滞りが痛みを引き起こしています。冷えを防ぎ、「合谷」や肩の「肩井」をほぐしましょう。鍼とカッピングにより、こわばりを素早く緩めます。`,
    E: `• <strong>慢性疲労とエネルギーの充電</strong>：「常に体が重だるい、やる気が出ない、またはエネルギー不足を感じる」とお答えいただきました。心身の元気が消耗しています。夜更かしを避け、下腹部の「気海」や腰の「腎兪」を温めてください。鍼治療やお灸は、元気の回復に非常に効果的です。`,
    none: `• <strong>未病の予防と養生ケア</strong>：現在、特に目立った不調はありません。東洋医学の基本は「未病を防ぐ」ことです。季節の変わり目に定期的な鍼灸ケアを行うことで、気血を調和させ、自己免疫力を高め、健康的な長寿を維持できます。`
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

    // 🔮 Load the default unified Resend API Key (re_6fqHG5zx... owned by leyzax@gmail.com)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Resend API key not configured' });
    }

    const resend = new Resend(apiKey);
    const text = emailTemplates[lang || 'en'] || emailTemplates.en;

    // Build URL back to report
    const encodedName = encodeURIComponent(name || '');
    const reportUrl = `https://acutherapy.com/constitution-test?lang=${lang}&email=${email}&name=${encodedName}&gender=${gender}&dob=${dob}&tob=${tob}&symptoms=${encodeURIComponent(JSON.stringify(symptoms))}&unlocked=true`;

    // Generate personalized symptoms reflection list for the email
    let symptomBlocksHtml = '';
    const activeReflections = symptomReflections[lang || 'en'] || symptomReflections.en;
    
    // Normalize symptoms
    let activeSymptoms = [];
    if (typeof symptoms === 'string') {
      try {
        activeSymptoms = JSON.parse(symptoms);
      } catch (e) {
        activeSymptoms = symptoms.split(',').map(s => s.trim());
      }
    } else if (Array.isArray(symptoms)) {
      activeSymptoms = symptoms;
    }

    if (activeSymptoms && activeSymptoms.length > 0 && !activeSymptoms.includes('none')) {
      symptomBlocksHtml += `<div style="background-color: #F8FAFC; border: 1px dashed #CBD5E1; padding: 16px; border-radius: 12px; margin: 20px 0;">
        <h4 style="margin: 0 0 10px 0; font-size: 13px; font-weight: 800; color: #1E293B; text-transform: uppercase; border-bottom: 2px solid #E2E8F0; padding-bottom: 6px;">🩺 身心对症分析与建议 / PERSONALIZED WELLNESS INSIGHTS</h4>
        <div style="font-size: 12px; line-height: 1.7; color: #475569; display: flex; flex-direction: column; gap: 10px;">`;
      
      activeSymptoms.forEach(code => {
        if (activeReflections[code]) {
          symptomBlocksHtml += `<p style="margin: 0; margin-bottom: 8px;">${activeReflections[code]}</p>`;
        }
      });
      
      symptomBlocksHtml += `</div></div>`;
    } else {
      symptomBlocksHtml += `<div style="background-color: #F8FAFC; border: 1px dashed #CBD5E1; padding: 16px; border-radius: 12px; margin: 20px 0;">
        <h4 style="margin: 0 0 10px 0; font-size: 13px; font-weight: 800; color: #1E293B; text-transform: uppercase; border-bottom: 2px solid #E2E8F0; padding-bottom: 6px;">🩺 身心对症分析与建议 / WELLNESS INSIGHTS</h4>
        <p style="margin: 0; font-size: 12px; line-height: 1.7; color: #475569;">${activeReflections.none}</p>
      </div>`;
    }

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

          ${symptomBlocksHtml}

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

    // 🔮 Self-healing email sender logic
    let sendResult = null;
    let fallbackUsed = false;
    const replyToEmail = 'services@acutherapy.com';

    try {
      // 1. First attempt: Send from custom domain (info@acutherapy.com) to the user's input email
      sendResult = await resend.emails.send({
        from: 'AcuTherapy Clinics <info@acutherapy.com>',
        to: [email],
        replyTo: replyToEmail,
        subject: text.subject,
        html: htmlContent
      });

      // If it failed because domain is not verified, catch it and fallback to sandbox destinations
      if (sendResult.error && (sendResult.error.message.includes('not verified') || sendResult.error.message.includes('verify a domain') || sendResult.error.message.includes('from address'))) {
        fallbackUsed = true;
        console.warn('Custom domain acutherapy.com is not verified. Triggering dual-recipient sandbox fallback...');
        
        const warningHeader = `<div style="background-color: #FEF3C7; border: 1px solid #F59E0B; color: #92400E; padding: 12px; border-radius: 8px; margin-bottom: 20px; font-size: 12px;">
          ⚠️ <strong>开发测试提示 / Sandbox Mode:</strong><br/>
          由于您的 Resend 账户中尚未验证 <strong>acutherapy.com</strong> 域名，系统自动启用沙盒模式，将原本发往 <strong>${email}</strong> 的邮件投递到了您的验证所有者邮箱。<br/>
          <em>(要开启全球用户真实投递，请前往 resend.com/domains 验证您的 acutherapy.com 域名并配置 MX 记录。)</em>
        </div>`;

        // 🔮 Channel A: Try sending to services@acutherapy.com (owner of the new key)
        try {
          const res1 = await resend.emails.send({
            from: 'AcuTherapy Clinics <onboarding@resend.dev>',
            to: ['services@acutherapy.com'],
            replyTo: replyToEmail,
            subject: `[Test Sandbox] ${text.subject}`,
            html: warningHeader + htmlContent
          });
          if (!res1.error) {
            console.log('Sandbox fallback to services@acutherapy.com succeeded');
            sendResult = res1;
          }
        } catch (e1) {
          console.error('Sandbox fallback to services@acutherapy.com failed:', e1);
        }

        // 🔮 Channel B: Try sending to leyzax@gmail.com (owner of the old key)
        try {
          const res2 = await resend.emails.send({
            from: 'AcuTherapy Clinics <onboarding@resend.dev>',
            to: ['leyzax@gmail.com'],
            replyTo: replyToEmail,
            subject: `[Test Sandbox] ${text.subject}`,
            html: warningHeader + htmlContent
          });
          if (!res2.error) {
            console.log('Sandbox fallback to leyzax@gmail.com succeeded');
            sendResult = res2;
          }
        } catch (e2) {
          console.error('Sandbox fallback to leyzax@gmail.com failed:', e2);
        }
      }
    } catch (sendErr) {
      fallbackUsed = true;
      console.error('Initial send crashed. Triggering last-resort fallback:', sendErr);
      
      // Last resort fallback
      sendResult = await resend.emails.send({
        from: 'AcuTherapy Clinics <onboarding@resend.dev>',
        to: ['services@acutherapy.com'],
        replyTo: replyToEmail,
        subject: `[Sandbox Fallback] ${text.subject}`,
        html: `<p style="color:red;"><strong>Exception Fallback:</strong> ${sendErr.message}</p>` + htmlContent
      });
    }

    if (sendResult.error) {
      console.error('Resend final failure:', sendResult.error);
      return res.status(400).json({ error: sendResult.error.message });
    }

    // Also send an admin notification email to the clinic owner (to: leyzax@gmail.com, replyTo: services@acutherapy.com)
    try {
      const adminHtml = `
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
      `;

      if (fallbackUsed) {
        // In sandbox mode, send notification to both potential verified owners
        try {
          await resend.emails.send({
            from: 'AcuTherapy Clinics <onboarding@resend.dev>',
            to: ['services@acutherapy.com'],
            replyTo: replyToEmail,
            subject: `📧 [TCM Quiz] New Lead: ${name} (${dominant}/${deficient})`,
            html: adminHtml
          });
        } catch (e) {}

        try {
          await resend.emails.send({
            from: 'AcuTherapy Clinics <onboarding@resend.dev>',
            to: ['leyzax@gmail.com'],
            replyTo: replyToEmail,
            subject: `📧 [TCM Quiz] New Lead: ${name} (${dominant}/${deficient})`,
            html: adminHtml
          });
        } catch (e) {}
      } else {
        // If domain is verified, send standard notification directly to leyzax@gmail.com
        await resend.emails.send({
          from: 'AcuTherapy Clinics <info@acutherapy.com>',
          to: ['leyzax@gmail.com'],
          replyTo: replyToEmail,
          subject: `📧 [TCM Quiz] New Lead: ${name} (${dominant}/${deficient})`,
          html: adminHtml
        });
      }
    } catch (e) {
      console.error('Admin notification email failed:', e);
    }

    return res.status(200).json({ success: true, data: sendResult.data, fallbackUsed });
  } catch (err) {
    console.error('Subscription error:', err);
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}
