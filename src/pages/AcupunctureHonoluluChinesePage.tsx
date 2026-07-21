import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, } from "lucide-react";

export default function AcupunctureHonoluluChinesePage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/acupuncture-honolulu-chinese" />
        <title>檀香山针灸诊所，中医痛症与工伤车祸理疗专家 | AcuTherapy Clinics</title>
        <meta name="description" content="Dr. David Cai (蔡医生) 在夏威夷檀香山拥有30年中医针灸临床经验，专精各类痛症、车祸后遗症、坐骨神经痛及运动损伤。接受各大医疗保险。" />
        
        <meta property="og:title" content="檀香山针灸 (Acupuncture Honolulu) | 夏威夷正宗中医诊所" />
        <meta property="og:description" content="檀香山/夏威夷华人首选针灸中医诊所。Dr. David Cai 提供专业的背痛、坐骨神经痛及车祸理赔治疗。可预约当日看诊，接受大多数医疗保险。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acutherapy.com/acupuncture-honolulu-chinese" />
        <meta property="og:image" content="https://acutherapy.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "AcuTherapy Clinics",
            "logo": "https://acutherapy.com/logo.png",
            "image": "https://acutherapy.com/images/dr-david-cai-portrait.jpg",
            "url": "https://acutherapy.com",
            "description": "Premier medical acupuncture and pain management clinics in Honolulu and Aiea, led by Dr. David Cai.",
            "department": [
              {
                "@type": "MedicalClinic",
                "name": "AcuTherapy Clinics - Honolulu (Liliha)",
                "telephone": "+1-808-528-7177",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1650 Liliha St, Suite 208",
                  "addressLocality": "Honolulu",
                  "addressRegion": "HI",
                  "postalCode": "96817",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 21.321289,
                  "longitude": -157.860155
                },
                "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      "opens": "09:00",
                      "closes": "13:00"
                    }
                ]
              },
              {
                "@type": "MedicalClinic",
                "name": "AcuTherapy Clinics - Aiea / Pearl City",
                "telephone": "+1-808-452-1900",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "98-211 Pali Momi St, Suite 604",
                  "addressLocality": "Aiea",
                  "addressRegion": "HI",
                  "postalCode": "96701",
                  "addressCountry": "US"
                },
                "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      "opens": "09:00",
                      "closes": "17:00"
                    }
                ]
              }
            ],
            "medicalSpecialty": [
              "Acupuncture",
              "PainManagement"
            ]
          }
          `}
        </script>
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/images/acupuncture-honolulu-chinese-clinic.jpg"
            alt="檀香山针灸治疗环境与患者放松体验"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm backdrop-blur-sm">
              <ShieldCheck size={16} /> <span>100% No-Fault PIP Insurance Accepted</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-200 border border-teal-500/30 font-medium text-sm backdrop-blur-sm">
              <span>Accepts HMSA, Kaiser, UHA, HMAA, Medicare UHC, Auto PIP, Workers' Comp &amp; VA</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">檀香山针灸（Acupuncture Honolulu Chinese）—中医针灸与疼痛调理指南</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">在檀香山（Honolulu），针灸可用于缓解疼痛、减轻压力并支持身体恢复。根据不同情况，治疗效果可能逐步显现。本文将帮助您了解针灸的作用、适用人群以及在夏威夷的就诊流程。</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">

          <article className="md:col-span-8">

            <p className="text-[18px] font-semibold text-slate-800 mb-6 leading-relaxed">
              <strong>对于在夏威夷的华人来说，针灸是一种结合传统中医理念与现代治疗需求的自然疗法。在 Acutherapy Clinics，治疗重点通常放在缓解肌肉紧张、改善血液循环以及支持身体的自我恢复能力。治疗效果因人而异，通常需要根据具体情况制定个性化方案。</strong>
            </p>

            <figure className="mb-12">
              <img 
                src="/images/acupuncture-honolulu-chinese-clinic.jpg" 
                alt="檀香山针灸治疗环境与患者放松体验" 
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic text-center">
                展示檀香山针灸诊所的专业环境和治疗过程，体现放松与恢复过程
              </figcaption>
            </figure>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">针灸在檀香山可以帮助什么问题？</h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>针灸常用于支持以下问题的调理：</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li><Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 hover:underline">慢性背痛</Link>、颈椎疼痛</li>
                <li><Link to="/sciatica-acupuncture-honolulu" className="text-blue-600 hover:underline">坐骨神经痛 (Sciatica)</Link></li>
                <li>运动损伤或劳损</li>
                <li>压力、焦虑、睡眠问题</li>
                <li>长期肌肉紧张</li>
              </ul>
<div className="bg-blue-50/50 border border-blue-100 border-l-4 border-l-blue-500 p-4 rounded-xl text-slate-800 font-medium my-6 shadow-sm">
  <p className="flex items-center gap-2">
    <span className="text-xl">👉</span>
    <span>如果你有背痛或坐骨神经痛，可以参考：<Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4 text-sm font-bold">背痛治疗</Link> 或 <Link to="/sciatica-treatment-honolulu" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4 text-sm font-bold">坐骨神经痛</Link></span>
  </p>
</div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                 <p className="font-semibold text-blue-900 mb-2">🔬 权威说明</p>
                 <p className="text-blue-800 text-sm">研究显示，针灸在缓解慢性疼痛和改善功能方面可能具有一定帮助，尤其是在作为保守治疗的一部分时更为有效。(支持来源：NCCIH / WHO / PubMed)</p>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">针灸是如何起作用的？</h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>针灸并不是“强行治疗”，而是通过刺激特定穴位来：</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>放松紧张的肌肉</li>
                <li>改善局部血液循环</li>
                <li>调节身体对疼痛的反应</li>
              </ul>
              <p>很多患者描述为：</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">👉</span> “慢慢变轻松”</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">👉</span> “不是立刻消失，但在改善”</li>
              </ul>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">在檀香山做针灸，大概多久见效？</h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>治疗效果因人而异，一般可能出现以下情况：</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>首次治疗后：</strong>部分人感到放松或轻微改善 (了解<Link to="/what-to-expect-first-acupuncture-visit" className="text-blue-600 hover:underline">第一次针灸的体验</Link>)</li>
                <li><strong>3–6次治疗：</strong>逐步改善疼痛和活动能力</li>
                <li><strong>持续治疗：</strong>帮助维持稳定状态</li>
              </ul>
              <p className="italic text-slate-600 text-sm">👉 研究表明，<Link to="/how-fast-does-acupuncture-work" className="text-blue-600 hover:underline">针灸在部分患者中</Link>可在短时间内产生镇痛效果，但长期效果通常需要多次治疗支持。</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">针灸疼吗？很多人最关心的问题</h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>大多数人第一次都会担心这个问题。实际情况通常是：</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li>针非常细（比注射针细很多）</li>
                <li>进入时感觉轻微</li>
                <li>之后可能有温热或酸胀感</li>
              </ul>
              <p>很多患者在治疗过程中会放松甚至入睡。</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">在夏威夷看针灸，可以用保险吗？</h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>在夏威夷，针灸可能被保险覆盖，具体取决于保险类型、治疗原因和个人计划。常见情况包括：</p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3"><span className="text-2xl">🚗</span> <div><strong>车祸 (Auto Accident)</strong><p className="text-sm text-slate-500">PIP保险通常可100%覆盖相关理疗费用</p></div></li>
                <li className="flex items-start gap-3"><span className="text-2xl">🏢</span> <div><strong>工伤 (Workers’ Compensation)</strong><p className="text-sm text-slate-500">须符合受伤标准与雇主保险规定</p></div></li>
                <li className="flex items-start gap-3"><span className="text-2xl">🏥</span> <div><strong>部分商业保险 (如 HMSA / Kaiser 等)</strong><p className="text-sm text-slate-500">须确认您的具体计划</p></div></li>
                <li className="flex items-start gap-3"><span className="text-2xl">👵</span> <div><strong>Medicare</strong><p className="text-sm text-slate-500">符合特定条件（如慢性腰痛）</p></div></li>
              </ul>
              <p className="mt-4">👉 建议查看我们的 <Link to="/is-acupuncture-covered-by-insurance-hawaii" className="text-blue-600 hover:underline font-medium">夏威夷针灸保险指南</Link> 了解更多详情。</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">檀香山针灸诊所位置</h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Acutherapy Clinics 位于 Ala Moana 附近，服务区域包括：</p>
               <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Waikiki</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Kakaʻako</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Downtown Honolulu</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">全Oahu地区</span>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-6 border-b pb-2">常见问题（Q&A）</h2>
            <div className="space-y-6 mb-10">
              <div><h4 className="font-bold text-lg text-slate-900">针灸需要做几次？</h4><p className="text-slate-700">通常需要多次治疗，具体次数取决于病情和恢复情况。</p></div>
              <div><h4 className="font-bold text-lg text-slate-900">针灸安全吗？</h4><p className="text-slate-700">在专业医生操作下，使用一次性无菌针具，通常是安全的。</p></div>
              <div><h4 className="font-bold text-lg text-slate-900">针灸和按摩有什么区别？</h4><p className="text-slate-700">针灸更侧重于调节身体反应，按摩更偏向肌肉放松，两者可以结合使用。</p></div>
              <div><h4 className="font-bold text-lg text-slate-900">多久能看到效果？</h4><p className="text-slate-700">部分人较快感觉改善，但多数情况下是逐步变化。</p></div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">专业与安全的治疗环境</h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-12">
              <p>在 Acutherapy Clinics，我们承诺：</p>
              <ul className="space-y-2 mt-4 font-medium text-slate-800">
                <li className="flex items-center gap-2"><ShieldCheck className="text-emerald-500 h-5 w-5" /> 使用一次性无菌针具</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-emerald-500 h-5 w-5" /> 遵循夏威夷医疗规范</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-emerald-500 h-5 w-5" /> 根据个人情况制定治疗方案</li>
              </ul>
            </div>

            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 mb-12">
              <h2 className="text-[28px] font-bold text-slate-900 mb-4">想了解针灸是否适合你？</h2>
              <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-8">
                如果你正在经历疼痛或长期不适，可以先进行一次评估，了解适合你的调理方式。
              </p>
              
              <ul className="space-y-3 mb-8 text-slate-800 font-medium">
                <li className="flex items-center gap-3"><MapPin className="text-blue-600 h-5 w-5" /> 檀香山诊所（距离 中国城仅数分钟）</li>
                <li className="flex items-center gap-3"><Calendar className="text-blue-600 h-5 w-5" /> 可预约当日时间 (Same-day appointments)</li>
                <li className="flex items-center gap-3"><PhoneCall className="text-blue-600 h-5 w-5" /> 预约专线: (808) 528-7177</li>
              </ul>

              <Link to="/book-appointment" className="inline-block hover:opacity-90 transition-opacity whitespace-nowrap mb-4" style={{ background: '#000', color: '#fff', padding: '12px 20px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                预约咨询
              </Link>
              
              <p className="text-sm font-medium text-slate-600">👉 先确认你的 <Link to="/is-acupuncture-covered-by-insurance-hawaii" className="text-blue-600 hover:underline">保险覆盖情况</Link>，再决定下一步。</p>
            </div>

            {/* Doctor Info Bio */}
            <div className="mt-16 mb-16 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-slate-100 relative">
                  <img loading="lazy" 
                    src="/images/dr-david-cai-portrait.jpg" 
                    alt="Dr. David Cai, L.Ac., L.M.T." 
                    className="w-full h-full object-cover min-h-[400px]"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800'; }}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6 text-white text-center">
                     <span className="font-bold text-xl">Dr. David Cai (蔡大卫医生)</span>
                     <p className="text-blue-300 text-sm">L.Ac., L.M.T.</p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">临床总监兼创始人</h3>
                  <h4 className="text-3xl font-extrabold text-slate-900 mb-4">夏威夷顶尖疼痛与康复中心</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: '<strong>蔡大卫医生 (Dr. David Cai)</strong> 拥有超过30年的临床经验，是传统中医（TCM）与现代针灸疗法的大师。他专精于严重痛症管理、运动损伤修复以及复杂的车祸后遗症康复，为檀香山社区提供世界级的全方位医疗服务。' }}></p>
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                     <img loading="lazy" src="/images/acutherapy-medical-team.jpg" alt="AcuTherapy Clinics Medical Team" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                     <div>
                       <h5 className="font-bold text-slate-900 mb-1">AcuTherapy 医疗团队</h5>
                       <p className="text-sm text-slate-500 italic leading-relaxed">“我们的多学科医疗团队经过严格培训，致力于找到您病痛的根本原因，提供持久的有效缓解。”</p>
                       <Link to="/patient-reviews" className="inline-flex items-center gap-1 mt-3 font-bold text-blue-600 hover:text-blue-800 transition-colors">阅读全英文真实患者评价 →</Link>
                     </div>
                  </div>
                </div>
              </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 h-2 w-full"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">在线预约</h3>
                <p className="text-slate-600 mb-8 text-sm">Bridge the gap to a pain-free life today.</p>
                <div className="flex flex-col gap-4">
                  <Link to="/book-appointment">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">
                      <Calendar className="mr-2" /> 立刻预约
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full h-14 text-lg border-2 border-slate-200" onClick={() => window.location.href = 'tel:+18085287177'}>
                    <PhoneCall className="mr-2 h-5 w-5 text-blue-600" /> (808) 528-7177
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 text-left">
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">檀香山诊所 (Liliha)</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        1650 Liliha St, Suite 208<br />Honolulu, HI 96817
                      </p>
                      <a href="https://www.google.com/maps/search/?api=1&query=1650+Liliha+St,+Suite+208,+Honolulu,+HI+96817" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 font-bold hover:underline mt-1">
                        Find us on Google Maps
                      </a>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 528-7177 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 212-9459</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">珍珠城 / Aiea 诊所</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        98-211 Pali Momi St, Suite 604<br />Aiea, HI 96701
                      </p>
                      <a href="https://www.google.com/maps/search/?api=1&query=98-211+Pali+Momi+St,+Suite+604,+Aiea,+HI+96701" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 font-bold hover:underline mt-1">
                        Find us on Google Maps
                      </a>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 452-1900 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 452-1521</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                    <p className="font-bold text-slate-900 mb-1 text-sm">营业时间</p>
                    <p className="text-slate-600 text-sm">周一至周五: 8am - 5pm, 周六: 8am - 12pm (预约制)</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 text-left">
                  <p className="font-bold text-slate-900 mb-3 text-sm">更多周边服务区域:</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link to="/acupuncture-waikiki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">威基基 (Waikiki)</Link>
                    <Link to="/acupuncture-kaimuki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">卡伊穆基 (Kaimuki)</Link>
                    <Link to="/acupuncture-ala-moana" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">阿拉莫阿那 (Ala Moana)</Link>
                    <Link to="/acupuncture-kahala" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">卡哈拉 (Kahala)</Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">患者好评</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">“蔡医生在短短几天的时间内就彻底治好了困扰我几个月的肩痛。诊所非常干净、专业，让人感到极其安心与放松！”</p>
              <div className="flex items-center gap-4 mt-6">
                <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">ST</div>
                <div>
                  <p className="text-white font-semibold text-sm">Sarah T.</p>
                  <p className="text-blue-400 text-xs">檀香山居民</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
