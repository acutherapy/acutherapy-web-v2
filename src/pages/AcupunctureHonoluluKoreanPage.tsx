

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, } from "lucide-react";

export default function AcupunctureHonoluluKoreanPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/acupuncture-honolulu-korean" />
        <title>호놀룰루 침술 클리닉 | 통증 및 교통사고 치료 | AcuTherapy Clinics</title>
        <meta name="description" content="하와이 호놀룰루에 위치한 한의원입니다. 통증 관리, 침술, 교통사고 후유증, 좌골 신경통 치료를 전문으로 합니다." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "호놀룰루 침술 클리닉 | 통증 및 교통사고 치료 | AcuTherapy Clinics",
            "headline": "Acupuncture Honolulu Korean",
            "description": "하와이 호놀룰루에 위치한 한의원입니다. 통증 관리, 침술, 교통사고 후유증, 좌골 신경통 치료를 전문으로 합니다.",
            "url": "https://acutherapy.com/acupuncture-honolulu-korean",
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">호놀룰루 침술 클리닉 </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">하와이 호놀룰루에 위치한 한의원입니다.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">호놀룰루 통증 및 침술 전문 클리닉</h2>
              <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
                David Cai 박사는 30년 이상의 임상 경험을 가진 전통 중의학 및 침술 전문가입니다. 수술이나 진통제 없이 자연스럽고 안전하게 통증을 치료합니다.
              </p>
              
      <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
        <img src="/images/abdominal-acupuncture.jpg" alt="Acupuncture Honolulu Korean" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }} />
        <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8 pt-16 text-white text-lg font-medium">Advanced Acupuncture Treatments</figcaption>
      </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">전문 치료 분야</h3>
              <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
                <li><strong>교통사고 후유증 및 채찍질 손상:</strong> 자동차 보험(PIP)을 통해 치료비 전액을 지원받을 수 있습니다.</li>
                <li><strong>만성 통증 관리:</strong> 허리 통증, 좌골 신경통, 목/어깨 통증, 관절염 및 편두통.</li>
              </ul>
            
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
            <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">임상 책임자 및 설립자</h3>
            <h4 className="text-3xl font-extrabold text-slate-900 mb-4">호놀룰루 최고의 통증 클리닉</h4>
            <p className="text-slate-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: '30년 이상의 임상 경험을 가진 <strong>Dr. David Cai</strong>는 전통 중의학(TCM) 및 고급 침술 치료의 대가입니다. 그는 심각한 통증 관리, 스포츠 부상 및 복잡한 교통사고 회복을 전문으로 하여 호놀룰루 지역 사회에 최고 수준의 진료를 제공합니다.' }}></p>
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
               <img src="/images/acutherapy-medical-team.jpg" alt="AcuTherapy Clinics Medical Team" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
               <div>
                 <h5 className="font-bold text-slate-900 mb-1">AcuTherapy 의료진</h5>
                 <p className="text-sm text-slate-500 italic leading-relaxed">"우리의 다학제 의료팀은 체계적인 훈련을 받았으며 환자의 근본적인 원인을 파악하여 지속적인 완화를 제공하는 데 전념하고 있습니다."</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    
            
          
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Causes Korean?</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">Korean can be triggered by a variety of factors including chronic stress, poor posture, repetitive strain, or acute injuries. Over time, these factors create blockages in blood circulation and nerve function, leading to persistent discomfort.</p>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How Acupuncture Helps</h2>
<ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-6">
<li><strong>Pain Relief:</strong> Triggers the release of endorphins to block pain signals effectively.</li>
<li><strong>Nervous System Regulation:</strong> Calms the central nervous system, reducing tension without relying on pharmaceuticals.</li>
<li><strong>Improved Circulation:</strong> Enhances blood flow to the affected areas, accelerating the natural healing process.</li>
</ul>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect During Your Session</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">During your first experience, Dr. David Cai will conduct a thorough assessment to understand your unique condition. The treatment itself is deeply relaxing. Many patients notice a distinct change in symptoms, experiencing immediate lightness and reduced tension right after the needles are gently placed.</p>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Who Is This For?</h2>
<ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-6">
<li>Individuals suffering from chronic pain who have not found relief through conventional methods.</li>
<li>High-stress professionals seeking natural nervous system regulation.</li>
<li>Athletes or individuals recovering from an injury needing accelerated healing.</li>
</ul>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Related Treatments</h2>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
<Link to="/back-pain-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 font-semibold text-blue-800 hover:text-blue-600">Acupuncture for Lower Back Pain</Link>
<Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 font-semibold text-blue-800 hover:text-blue-600">Medical Massage Therapy</Link>
<Link to="/fire-cupping-therapy-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 font-semibold text-blue-800 hover:text-blue-600">Cupping Therapy</Link>
</div>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Serving Honolulu & Nearby Areas</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">Conveniently located in Honolulu, we proudly serve patients from Ala Moana, Waikiki, Kaimuki, Kahala, and across Oahu. Whether you are a local resident or visiting Hawaii, we provide top-tier care accessible to your area.</p>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">FAQ</h2>
<div className="space-y-6 mb-12">
<div><h4 className="font-bold text-lg text-slate-900">Q1: How many sessions are needed for Korean?</h4><p className="text-slate-700">A: Most patients notice significant relief within 3 to 5 sessions, though chronic conditions may require a longer treatment plan to address the root cause and ensure lasting results.</p></div>
<div><h4 className="font-bold text-lg text-slate-900">Q2: Does the treatment hurt?</h4><p className="text-slate-700">A: No. We use ultra-fine needles. Most feel only a deep, relaxing sensation. Many even fall asleep!</p></div>
<div><h4 className="font-bold text-lg text-slate-900">Q3: Is it safe?</h4><p className="text-slate-700">A: Absolutely. Acupuncture is a highly safe, non-invasive alternative to surgery and heavy medications.</p></div>
</div>

<div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8">
<h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to find relief?</h2>
<p className="text-lg text-blue-700 mb-8">Stop living in discomfort. Located right here in Honolulu, we are here to help you restore your well-being.</p>
<Link to="/book-appointment"><Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all">Book Your Session Today</Button></Link>
</div>

</article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 h-2 w-full"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
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
                      <p className="font-bold text-slate-900 mb-1">호놀룰루 클리닉 (Liliha)</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        1650 Liliha St, Suite 208<br/>Honolulu, HI 96817
                      </p>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 528-7177 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 212-9459</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">아이에아 / 펄시티 클리닉</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        98-211 Pali Momi St, Suite 604<br/>Aiea, HI 96701
                      </p>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 452-1900 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 452-1521</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                      <p className="font-bold text-slate-900 mb-1 text-sm">영업 시간</p>
                      <p className="text-slate-600 text-sm">월-금: 8am - 5pm, 토: 8am - 12pm</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 text-left">
                    <p className="font-bold text-slate-900 mb-3 text-sm">서비스 지역:</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                        <Link to="/acupuncture-waikiki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">와이키키</Link>
                        <Link to="/acupuncture-kaimuki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">카이무키</Link>
                        <Link to="/acupuncture-ala-moana" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">알라모아나</Link>
                        <Link to="/acupuncture-kahala" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">카할라</Link>
                    </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">환자 리뷰</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"Cai 원장님은 단 3번의 방문으로 지난 몇 달간 저를 괴롭히던 어깨 통증을 완전히 해결해 주셨습니다. 클리닉은 매우 깨끗하고 친절합니다!"</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">ST</div>
                 <div>
                    <p className="text-white font-semibold text-sm">Sarah T.</p>
                    <p className="text-blue-400 text-xs">호놀룰루 거주자</p>
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
