import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, } from "lucide-react";

export default function CaseAutoAccidentNeckPainHonoluluPage() {
  return (
    <>
      <Helmet>
        <title>Auto Accident Neck Pain Recovery in 4 Weeks | Honolulu Case Study</title>
        <meta name="description" content="After a car accident, neck pain may improve over several weeks with consistent care. This Honolulu case shows how symptoms changed over a 4-week period." />
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
              src="/images/case-auto-accident-neck-pain-honolulu.jpg" 
              alt="Case study banner image for a Honolulu acupuncture clinic, showing professional care for neck pain recovery following a car accident" 
              className="w-full h-full object-cover"
           />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Trusted Honolulu Pain Clinic</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Auto Accident Neck Pain Recovery in 4 Weeks – Honolulu Case Study</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">After a car accident, neck pain may improve over several weeks with consistent care. This Honolulu case shows how symptoms changed over a 4-week period.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <h1 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-6 leading-tight">
              Auto Accident Neck Pain Recovery in 4 Weeks – Honolulu Case Study
            </h1>

            <p className="text-[18px] font-semibold text-slate-800 mb-6 leading-relaxed">
              <strong>After a car accident, neck pain may improve over several weeks with consistent care. This Honolulu case shows how symptoms changed over a 4-week period.</strong>
            </p>

            <figure className="mb-8">
              <img 
                src="/images/case-auto-accident-neck-pain-honolulu.jpg" 
                alt="Case study image showing acupuncture care for auto accident neck pain recovery in Honolulu" 
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">
                A case study banner image for a Honolulu acupuncture clinic, showing professional care for neck pain recovery following a car accident.
              </figcaption>
            </figure>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">
              Initial Condition
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>The patient came in after a car accident with:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li><Link to="/neck-pain-treatment-honolulu" className="text-blue-600 hover:underline">Neck stiffness</Link></li>
                <li>Pain when turning the head</li>
                <li>Tightness spreading into the shoulders</li>
                <li>Difficulty sleeping</li>
              </ul>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">
              Treatment Approach
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Treatment focused on reducing muscle tension and supporting recovery:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><Link to="/acupuncture-honolulu" className="text-blue-600 hover:underline">Acupuncture</Link></li>
                <li>Medical massage</li>
                <li>Soft tissue therapy</li>
              </ul>
              <p>Care was adjusted based on response.</p>
            </div>

            <h2 className="text-[28px] font-extrabold text-blue-900 mb-6">
              Recovery Timeline
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-6 bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100">
              <div>
                <h3 className="font-bold text-blue-800 text-xl border-b border-blue-200 pb-2 mb-3">Week 1–2</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tension reduced</li>
                  <li>Slight improvement in movement</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-blue-800 text-xl border-b border-blue-200 pb-2 mb-3">Week 3</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Mobility improved</li>
                  <li>Daily discomfort decreased</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-blue-800 text-xl border-b border-blue-200 pb-2 mb-3">Week 4</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Pain no longer noticeable during normal activity</li>
                </ul>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">
              Outcome
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Returned to normal daily function</li>
                <li>No limitation in movement</li>
                <li>No ongoing discomfort</li>
              </ul>
              <p className="italic text-slate-600">👉 Results may vary depending on individual condition.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4 border-b pb-2">
              What This Means
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Recovery speed depends on:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li>Severity of injury</li>
                <li>Muscle tension</li>
                <li>Consistency of care (Learn <Link to="/how-fast-does-acupuncture-work" className="text-blue-600 hover:underline">how fast acupuncture works</Link>)</li>
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
              <h2 className="text-[28px] font-bold text-slate-900 mb-4">Have You Been in a Car Accident?</h2>
              <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-8">
                If you’re experiencing neck pain after an <Link to="/auto-accident-injury-honolulu" className="text-blue-600 hover:underline">auto accident</Link>, early evaluation may help guide your recovery.
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
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"After my accident I couldn't turn my head without shooting pain. After 4 weeks here, I'm fully recovered. Incredible team."</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">MK</div>
                 <div>
                    <p className="text-white font-semibold text-sm">Mark K.</p>
                    <p className="text-blue-400 text-xs">Honolulu Resident</p>
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
