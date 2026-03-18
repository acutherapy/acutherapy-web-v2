

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, } from "lucide-react";

export default function AboutTraditionalChineseMedicinePage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/about-traditional-chinese-medicine" />
        <title>檀香山针灸诊所，中医痛症与工伤车祸理疗专家 | AcuTherapy Clinics</title>
        <meta name="description" content="Dr. David Cai (蔡医生) 在夏威夷檀香山拥有30年中医针灸临床经验，专精各类痛症、车祸后遗症、坐骨神经痛及运动损伤。接受各大医疗保险。" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "檀香山针灸诊所，中医痛症与工伤车祸理疗专家 | AcuTherapy Clinics",
            "headline": "About Traditional Chinese Medicine",
            "description": "Dr. David Cai (蔡医生) 在夏威夷檀香山拥有30年中医针灸临床经验，专精各类痛症、车祸后遗症、坐骨神经痛及运动损伤。接受各大医疗保险。",
            "url": "https://acutherapy.com/about-traditional-chinese-medicine",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "AcuTherapy Clinics",
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
              "telephone": "+1-808-528-7177"
            }
          }
          `}
        </script>
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Acupuncture therapy background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Trusted Honolulu Pain Clinic</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">檀香山针灸诊所，中医痛症与工伤车祸理疗专家 </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Dr. David Cai L. Ac., L.M.T</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">

          <article className="md:col-span-8">

            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">夏威夷檀香山顶级中医针灸与疼痛治疗中心</h2>
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              蔡医生 (Dr. David Cai) 拥有超过30年的中美临床针灸与中药经验。我们在檀香山 (Honolulu) 及珍珠城 (Aiea) 提供专业、安全的针灸、推拿与拔罐治疗，致力于帮助患者远离手术与强效止痛药的副作用。
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
              <img src="/images/abdominal-acupuncture.jpg" alt="About Traditional Chinese Medicine" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }} />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8 pt-16 text-white text-lg font-medium">Advanced Acupuncture Treatments</figcaption>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">我们的核心治疗项目</h3>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li><strong>车祸理疗 (Auto Accident / PIP)：</strong> 我们对处理车祸理疗有着极其丰富的经验。通常您的汽车保险(PIP)会100%覆盖您的针灸与推拿治疗跨度，无需自费。</li>
              <li><strong>严重痛症管理：</strong> 专治坐骨神经痛、严重颈椎病、长期腰背痛、肩周炎、关节炎以及偏头痛。</li>
              <li><strong>运动损伤与工伤 (Worker's Comp)：</strong> 加速肌肉撕裂修复，降低炎症，恢复肢体灵活性。</li>
            </ul>
            <div className="bg-slate-100 p-6 rounded-lg my-8 border-l-4 border-blue-600">
              <p className="text-lg font-medium text-slate-800">我们在诊所提供全中文沟通服务。接受 HMSA, Kaiser, UHA, HMAA 各种主要医疗保险。如果您刚经历了车祸受伤，请立刻联系我们进行评估。</p>
            </div>

            <div className="mt-16 mb-16 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-slate-100 relative">
                  <img
                    src="/images/dr-david-cai-portrait.jpg"
                    alt="Dr. David Cai, L.Ac., L.M.T."
                    className="w-full h-full object-cover min-h-[400px]"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800'; }}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6 text-white text-center">
                    <span className="font-bold text-xl">Dr. David Cai</span>
                    <p className="text-blue-300 text-sm">L.Ac., L.M.T.</p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">临床总监兼创始人</h3>
                  <h4 className="text-3xl font-extrabold text-slate-900 mb-4">夏威夷顶尖疼痛与康复中心</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: '<strong>蔡晓东医生 (Dr. David Cai)</strong> 拥有超过30年的临床经验，是传统中医（TCM）与现代针灸疗法的大师。他专精于严重痛症管理、运动损伤修复以及复杂的车祸后遗症康复，为檀香山社区提供世界级的全方位医疗服务。' }}></p>
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <img src="/images/acutherapy-medical-team.jpg" alt="AcuTherapy Clinics Medical Team" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    <div>
                      <h5 className="font-bold text-slate-900 mb-1">AcuTherapy 医疗团队</h5>
                      <p className="text-sm text-slate-500 italic leading-relaxed">“我们的多学科医疗团队经过严格培训，致力于找到您病痛的根本原因，提供持久的有效缓解。”</p>
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
