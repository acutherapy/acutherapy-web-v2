

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity } from "lucide-react";

export default function WhiplashTreatmentHonoluluPage() {
  return (
    <>
      <Helmet>
        <title>Whiplash Treatment Honolulu Treatment in Honolulu | AcuTherapy Clinics</title>
        <meta name="description" content="Tired of Whiplash Treatment Honolulu? Dr. David Cai provides effective, non-surgical relief using advanced acupuncture and traditional Chinese medicine in Honolulu." />
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
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "13:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "08:00",
                    "closes": "12:00"
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
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "13:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "08:00",
                    "closes": "12:00"
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
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
            alt="Acupuncture therapy background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm backdrop-blur-sm">
              <ShieldCheck size={16} /> <span>Specialized Auto Accident Injury Clinic</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 font-medium text-sm backdrop-blur-sm">
              100% Covered by No-Fault Hawaii Auto Insurance (PIP)
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Whiplash Treatment in Honolulu</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Rapid recovery from severe Cervical Sprain, neck stiffness, and concussive headaches following auto collisions.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            
                          {/* CRO Expectation Module */}
            <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-10 shadow-sm mt-8">
              <p className="text-lg text-slate-900 font-semibold mb-1">Some patients notice early changes within a few sessions.</p>
              <p className="text-slate-600">Others may require a longer course of care depending on the condition.</p>
              
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="font-bold text-slate-900 mb-2">What to Expect:</p>
                <ul className="space-y-1 text-slate-700 font-medium">
                  <li><span className="text-blue-600 mr-2">→</span> <strong>Visit 1:</strong> Evaluation + Immediate treatment</li>
                  <li><span className="text-blue-600 mr-2">→</span> <strong>Week 1–2:</strong> Massive pain reduction</li>
                  <li><span className="text-blue-600 mr-2">→</span> <strong>Week 3+:</strong> Structural repair & function recovery</li>
                </ul>
              </div>
            </div>

<p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
                The violent, sudden movement of an auto collision causes massive micro-tearing in the deep cervical muscles and ligaments—a condition clinically known as <strong>Cervical Sprain/Strain</strong> or "Whiplash." At AcuTherapy Clinics, we specialize in <strong>Auto Accident PIP (Personal Injury Protection)</strong> cases, offering powerful medical acupuncture protocols to un-lock the neck, eliminate headaches, and resolve deep <i>Sternocleidomastoid (SCM)</i> and facet joint pain without relying on muscle relaxers.
              </p>
              
      <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
        <img loading="lazy" src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2000" alt="Whiplash and Neck Pain Treatment Honolulu" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }} />
        <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8 pt-16 text-white text-lg font-medium">Advanced Cervical Rehabilitation</figcaption>
      </div>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Our Three Core Pillars for Whiplash Recovery</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Following a car accident, your nervous system triggers a "guarding" response, severely locking down the cervical spine to prevent further injury. To heal the micro-tears and restore mobility, we must bypass this neurological lockdown:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
                <li><strong>Acupuncture (Central Nervous System Reset):</strong> We place ultra-fine needles in distal points to trigger a parasympathetic nervous system response. This immediately drops the systemic "flight-or-fight" response and floods the traumatized cervical facet joints with natural endorphins to halt the severe pain cycle.</li>
                <li><strong>Medical Massage (Myofascial Release):</strong> "Guarding" creates rock-hard myofascial trigger points in the trapezius, levator scapulae, and SCM muscles. We use targeted medical massage to physically melt down these hyper-contracted spasms, restoring your ability to turn your neck left and right.</li>
                <li><strong>Fire Cupping Therapy:</strong> Trauma causes localized internal bleeding and cellular debris accumulation in the soft tissues (which feels like heavy, burning stiffness). Cupping utilizes vacuum pressure to lift the fascia and aggressively flush these inflammatory toxins out of the neck and shoulders.</li>
              </ul>
        
            
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
               </div>
            </div>
          </div>
        </div>
      </div>
    
            
      <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Explore Related Treatments & Information</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        
        <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <ShieldCheck className="text-blue-500 mr-3 h-5 w-5" /> Acupuncture Honolulu
        </Link>
        <Link to="/contact-honolulu-acupuncture" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <PhoneCall className="text-emerald-500 mr-3 h-5 w-5" /> Contact Our Clinic
        </Link>
        <Link to="/auto-accident-injury-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Auto Accident PIP
        </Link>
    
        <Link to="/whiplash-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Whiplash Therapy
        </Link>
      </div>
    
          


<div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8">
<h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to find relief?</h2>
<p className="text-lg text-blue-700 mb-8">Stop living in discomfort. Located right here in Honolulu, we are here to help you restore your well-being.</p>
<Link to="/book-appointment"><Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all">Get Your Personalized Recovery Plan</Button></Link>
<p className="text-blue-600 text-sm mt-3 opacity-80 font-medium tracking-wide">Takes less than 60 seconds</p>
<p className="text-red-500 font-bold mt-4">The longer you wait, the harder it is to fix.</p>
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
                                                    <a href="https://www.google.com/maps/search/?api=1&query=1650+Liliha+St,+Suite+208,+Honolulu,+HI+96817" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 font-bold hover:underline mt-1">
                                                        Find us on Google Maps
                                                    </a>
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
                                                    <a href="https://www.google.com/maps/search/?api=1&query=98-211+Pali+Momi+St,+Suite+604,+Aiea,+HI+96701" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 font-bold hover:underline mt-1">
                                                        Find us on Google Maps
                                                    </a>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 452-1900 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 452-1521</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <p className="font-bold text-slate-900 mb-1 text-sm">Insurance Information</p>
                      <p className="text-slate-600 text-sm"><strong>100% Covered by No-Fault Auto PIP.</strong> Also accepts HMSA, Kaiser, UHA, HMAA, Medicare UHC, Workers' Comp & VA.</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 text-left">
                    <p className="font-bold text-slate-900 mb-3 text-sm">Also serving:</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                        <Link to="/acupuncture-waikiki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">Waikiki</Link>
                        <Link to="/acupuncture-kaimuki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">Kaimuki</Link>
                        <Link to="/acupuncture-ala-moana" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">Ala Moana</Link>
                        <Link to="/acupuncture-kahala" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">Kahala</Link>
                    </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">Patient Reviews</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"I was rear-ended on H-1 and suffered terrible whiplash and daily headaches. My lawyer sent me to Dr. Cai. The clinic handled all the PIP insurance billing so I paid nothing out of pocket, and my neck mobility was back to 100% in a month!"</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">ST</div>
                 <div>
                    <p className="text-white font-semibold text-sm">Sarah T.</p>
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
