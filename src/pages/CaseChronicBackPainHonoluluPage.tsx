import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck } from "lucide-react";

export default function CaseChronicBackPainHonoluluPage() {
  return (
    <>
      <Helmet>
        <title>Chronic Back Pain Improvement Over 6 Visits | Honolulu Case Study</title>
        <meta name="description" content="Chronic back pain may improve gradually with consistent care. This Honolulu case shows how symptoms changed over 6 visits with a structured treatment approach." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "AcuTherapy Clinics",
            "url": "https://acutherapy.com"
          }
          `}
        </script>
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
              src="/images/case-chronic-back-pain-honolulu.jpg" 
              alt="Case study banner image for a Honolulu acupuncture clinic, showing professional treatment for chronic lower back pain with a calm and supportive clinical environment." 
              className="w-full h-full object-cover"
           />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Trusted Honolulu Pain Clinic</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Chronic Back Pain Improvement Over 6 Visits – Honolulu Case Study</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Chronic back pain may improve gradually with consistent care. This Honolulu case shows how symptoms changed over 6 visits with a structured treatment approach.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <h1 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-6 leading-tight">
              Chronic Back Pain Improvement Over 6 Visits – Honolulu Case Study
            </h1>

            <p className="text-[18px] font-semibold text-slate-800 mb-6 leading-relaxed">
              <strong>Chronic back pain may improve gradually with consistent care. This Honolulu case shows how symptoms changed over 6 visits with a structured treatment approach.</strong>
            </p>

            <figure className="mb-8">
              <img 
                src="/images/case-chronic-back-pain-honolulu.jpg" 
                alt="Case study image showing acupuncture care for chronic lower back pain improvement in Honolulu" 
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">
                A case study banner image for a Honolulu acupuncture clinic, showing professional treatment for chronic lower back pain with a calm and supportive clinical environment.
              </figcaption>
            </figure>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">
              Initial Condition
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>The patient came in with long-term <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 hover:underline">lower back pain</Link>, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li>Persistent pain in the lower back</li>
                <li>Stiffness with movement</li>
                <li>Discomfort when sitting or standing for long periods</li>
                <li>Reduced flexibility in daily activities</li>
              </ul>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">
              Treatment Approach
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Treatment focused on reducing muscle tension and improving mobility:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><Link to="/acupuncture-honolulu" className="text-blue-600 hover:underline">Acupuncture</Link></li>
                <li>Medical massage</li>
                <li>Soft tissue therapy</li>
              </ul>
              <p>Care was adjusted based on the patient’s response over time.</p>
            </div>

            <h2 className="text-[28px] font-extrabold text-blue-900 mb-6">
              Recovery Timeline
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-6 bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100">
              <div>
                <h3 className="font-bold text-blue-800 text-xl border-b border-blue-200 pb-2 mb-3">Visit 1–2</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tension began to ease</li>
                  <li>Slight reduction in discomfort</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-blue-800 text-xl border-b border-blue-200 pb-2 mb-3">Visit 3–4</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Pain intensity decreased</li>
                  <li>Movement became easier</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-blue-800 text-xl border-b border-blue-200 pb-2 mb-3">Visit 5–6</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Approximately 70% improvement in symptoms</li>
                  <li>Daily activities became more comfortable</li>
                </ul>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">
              Outcome
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Significant reduction in pain</li>
                <li>Improved mobility and flexibility</li>
                <li>Better tolerance for daily activities</li>
              </ul>
              <p className="italic text-slate-600">👉 Results may vary depending on individual condition.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">
              What This Means
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Improvement in chronic conditions often happens gradually.</p>
              <p>Recovery can depend on:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li>Duration of the condition</li>
                <li>Severity of symptoms</li>
                <li>Consistency of treatment (Learn <Link to="/how-fast-does-acupuncture-work" className="text-blue-600 hover:underline">how fast acupuncture works</Link>)</li>
              </ul>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">
              Located in Honolulu near Ala Moana
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Serving patients from:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Waikiki</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Kakaʻako</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Oahu</span>
              </div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 mb-12">
              <h2 className="text-[28px] font-bold text-slate-900 mb-4">Have You Been Dealing With Chronic Back Pain?</h2>
              <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-8">
                If your back pain has been ongoing, a personalized evaluation may help guide a more structured <Link to="/treatment-process" className="text-blue-600 hover:underline">recovery plan</Link>.
              </p>
              
              <ul className="space-y-3 mb-8 text-slate-800 font-medium">
                <li className="flex items-center gap-3"><MapPin className="text-blue-600 h-5 w-5" /> Honolulu</li>
                <li className="flex items-center gap-3"><Calendar className="text-blue-600 h-5 w-5" /> Same-day appointments</li>
                <li className="flex items-center gap-3"><PhoneCall className="text-blue-600 h-5 w-5" /> Call (808) 528-7177</li>
              </ul>

              <Link to="/book-appointment" className="inline-block hover:opacity-90 transition-opacity whitespace-nowrap mb-4" style={{ background: '#000', color: '#fff', padding: '12px 20px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                Schedule Your Consultation
              </Link>
              
              <p className="text-sm font-medium text-slate-600">👉 Check your <Link to="/is-acupuncture-covered-by-insurance-hawaii" className="text-blue-600 hover:underline">insurance coverage</Link> before your visit.</p>
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
                     <span className="font-bold text-xl">Dr. David Cai</span>
                     <p className="text-blue-300 text-sm">L.Ac., L.M.T.</p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Clinical Director & Founder</h3>
                  <h4 className="text-3xl font-extrabold text-slate-900 mb-4">Leading Honolulu Pain Clinic</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: 'With over 30 years of clinical experience, <strong>Dr. David Cai</strong> is a master of Traditional Chinese Medicine (TCM) and advanced acupuncture protocols. He specializes in severe pain management, sports injuries, and complex auto accident recoveries, bringing world-class holistic healthcare to the Honolulu community.' }}></p>
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                     <img loading="lazy" src="/images/acutherapy-medical-team.jpg" alt="AcuTherapy Clinics Medical Team" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                     <div>
                       <h5 className="font-bold text-slate-900 mb-1">AcuTherapy Clinics Medical Team</h5>
                       <p className="text-sm text-slate-500 italic leading-relaxed">"Our multidisciplinary medical team is highly trained and committed to finding the root cause of your condition, providing relief that lasts."</p>
                       <Link to="/patient-reviews" className="inline-flex items-center gap-1 mt-3 font-bold text-blue-600 hover:text-blue-800 transition-colors">Read More True Stories &amp; Reviews →</Link>
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
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
                <p className="text-slate-600 mb-8 text-sm">Bridge the gap to a pain-free life today.</p>
                <div className="flex flex-col gap-4">
                  <Link to="/book-appointment">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">
                      <Calendar className="mr-2" /> Schedule Online
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full h-14 text-lg border-2 border-slate-200" onClick={() => window.location.href='tel:+18085287177'}>
                    <PhoneCall className="mr-2 h-5 w-5 text-blue-600" /> (808) 528-7177
                  </Button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 text-left">
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Honolulu Clinic (Liliha)</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        1650 Liliha St, Suite 208<br/>Honolulu, HI 96817
                      </p>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 528-7177 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 212-9459</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Aiea / Pearl City Clinic</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        98-211 Pali Momi St, Suite 604<br/>Aiea, HI 96701
                      </p>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 452-1900 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 452-1521</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                      <p className="font-bold text-slate-900 mb-1 text-sm">Hours of Operation</p>
                      <p className="text-slate-600 text-sm">Mon-Fri: 9am - 1pm, Sat: 8am - 12pm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">Patient Reviews</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"I have been struggling with back pain for a very long time... Over 6 visits Dr. Cai gave me my life back."</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">JS</div>
                 <div>
                    <p className="text-white font-semibold text-sm">John S.</p>
                    <p className="text-blue-400 text-xs">Aiea Resident</p>
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
