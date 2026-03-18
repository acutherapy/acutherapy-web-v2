

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, } from "lucide-react";

export default function AcupunctureHonoluluJapanesePage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/acupuncture-honolulu-japanese" />
        <title>ホノルルの鍼灸院 | 痛み治療と交通事故リハビリ | AcuTherapy Clinics</title>
        <meta name="description" content="Dr. David Caiはハワイ・ホノルルで30年の経験を持つ鍼灸と漢方の専門家です。腰痛、肩こり、坐骨神経痛、むち打ちの治療に特化しています。各種保険適用。" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "ホノルルの鍼灸院 | 痛み治療と交通事故リハビリ | AcuTherapy Clinics",
            "headline": "Acupuncture Honolulu Japanese",
            "description": "Dr. David Caiはハワイ・ホノルルで30年の経験を持つ鍼灸と漢方の専門家です。腰痛、肩こり、坐骨神経痛、むち打ちの治療に特化しています。各種保険適用。",
            "url": "https://acutherapy.com/acupuncture-honolulu-japanese",
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">ホノルルの鍼灸院 </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Dr.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">ホノルル最高峰の鍼灸・ペインクリニック</h2>
              <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
                Dr. David Cai は30年以上の臨床経験を持つ鍼灸と伝統中国医学 (TCM) の専門家です。ホノルルとアイエアにクリニックを構え、手術や強力な薬に頼らない自然な痛みの緩和と回復を提供しています。
              </p>
              
      <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
        <img src="/images/abdominal-acupuncture.jpg" alt="Acupuncture Honolulu Japanese" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }} />
        <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8 pt-16 text-white text-lg font-medium">Advanced Acupuncture Treatments</figcaption>
      </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">主な治療内容</h3>
              <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
                <li><strong>交通事故のむち打ち治療：</strong> ハワイの自動車保険（PIP）を利用して、自己負担なしで治療を受けられるケースがほとんどです。</li>
                <li><strong>慢性的な痛みの改善：</strong> 坐骨神経痛、腰痛、肩こり、関節炎、五十肩、偏頭痛への優れたアプローチ。</li>
                <li><strong>スポーツ障害：</strong> 筋肉の炎症を抑え、パフォーマンスの回復を早めます。</li>
              </ul>
              <div className="bg-slate-100 p-6 rounded-lg my-8 border-l-4 border-blue-600">
                <p className="text-lg font-medium text-slate-800">HMSA、Kaiserをはじめとするハワイの各種医療保険に対応しております。旅行中の方の急な痛みや、交通事故に遭われた方は、お早めにご相談ください。</p>
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
            <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">臨床ディレクター兼創設者</h3>
            <h4 className="text-3xl font-extrabold text-slate-900 mb-4">ホノルルを代表するペインクリニック</h4>
            <p className="text-slate-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: '30年以上の臨床経験を持つ <strong>Dr. David Cai</strong> は、伝統中国医学 (TCM) と高度な鍼灸プロトコルのマスターです。重度の痛みの管理、スポーツ障害、複雑な交通事故後の回復を専門とし、ホノルルのコミュニティに世界最高水準のホリスティック医療を提供しています。' }}></p>
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
               <img src="/images/acutherapy-medical-team.jpg" alt="AcuTherapy Clinics Medical Team" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
               <div>
                 <h5 className="font-bold text-slate-900 mb-1">AcuTherapy 医療チーム</h5>
                 <p className="text-sm text-slate-500 italic leading-relaxed">「私たちの学際的な医療チームは高度な訓練を受けており、あなたの症状の根本原因を見つけ、持続的な痛みの緩和を提供することに専念しています。」</p>
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
                <h3 className="text-2xl font-bold text-slate-900 mb-2">オンライン予約</h3>
                <p className="text-slate-600 mb-8 text-sm">Bridge the gap to a pain-free life today.</p>
                <div className="flex flex-col gap-4">
                  <Link to="/book-appointment">

                    <Link to="/book-appointment">


                      <Link to="/book-appointment">



                        <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">



                          <Calendar className="mr-2" /> Schedule Online



                        </Button>



                      </Link>


                    </Link>

                  </Link>
                  <Button variant="outline" className="w-full h-14 text-lg border-2 border-slate-200" onClick={() => window.location.href='tel:+18085287177'}>
                    <PhoneCall className="mr-2 h-5 w-5 text-blue-600" /> (808) 528-7177
                  </Button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 text-left">
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">ホノルルクリニック (Liliha)</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        1650 Liliha St, Suite 208<br/>Honolulu, HI 96817
                      </p>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 528-7177 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 212-9459</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">アイエア / パールシティクリニック</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        98-211 Pali Momi St, Suite 604<br/>Aiea, HI 96701
                      </p>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 452-1900 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 452-1521</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                      <p className="font-bold text-slate-900 mb-1 text-sm">営業時間</p>
                      <p className="text-slate-600 text-sm">月〜金: 午前8時 - 午後5時, 土: 午前8時 - 午後12時</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 text-left">
                    <p className="font-bold text-slate-900 mb-3 text-sm">対応エリア:</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                        <Link to="/acupuncture-waikiki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">ワイキキ</Link>
                        <Link to="/acupuncture-kaimuki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">カイムキ</Link>
                        <Link to="/acupuncture-ala-moana" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">アラモアナ</Link>
                        <Link to="/acupuncture-kahala" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">カハラ</Link>
                    </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">患者様の声</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">「Cai先生はわずか3回の治療で私の肩の痛みを完全に解決してくれました。数ヶ月も苦しんでいたのに。クリニックはとても清潔でプロフェッショナルです！」</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">ST</div>
                 <div>
                    <p className="text-white font-semibold text-sm">Sarah T.</p>
                    <p className="text-blue-400 text-xs">ホノルル在住</p>
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
