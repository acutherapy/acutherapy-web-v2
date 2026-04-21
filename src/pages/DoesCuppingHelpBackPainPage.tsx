

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity } from "lucide-react";

export default function DoesCuppingHelpBackPainPage() {
  return (
    <>
      <Helmet>
        <title>Does Cupping Help Back Pain | Honolulu Acupuncture Guide</title>
        <meta name="description" content="Learn more about Does Cupping Help Back Pain. Dr. David Cai from AcuTherapy Clinics answers your questions about acupuncture efficacy and treatment processes." />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Trusted Honolulu Pain Clinic</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Does Cupping Therapy Help Back Pain?</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">A Honolulu patient guide to understanding and resolving muscle tension.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <h1 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-6 leading-tight">
              Does Cupping Therapy Help Back Pain? A Honolulu Patient Guide
            </h1>

            <p className="text-[18px] font-semibold text-slate-800 mb-6 leading-relaxed">
              <strong>Cupping therapy for back pain in Honolulu may help reduce muscle tension, improve circulation, and support recovery. Many patients experience temporary relief from stiffness and tightness when cupping is used as part of a broader treatment plan.</strong>
            </p>

            <figure className="mb-8">
              <img 
                src="/images/cupping-therapy-back-pain-honolulu.jpg" 
                alt="Cupping therapy for back pain in Honolulu Hawaii showing suction cups on the back" 
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }}
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">
                A professional cupping therapy session in Honolulu targeting back pain and muscle tension, demonstrating the suction technique used for relief.
              </figcaption>
            </figure>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-10 shadow-sm">
              <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">
                <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 font-medium hover:underline">Back pain</Link> is often linked to muscle tightness, stress, or repetitive strain. In Honolulu, cupping therapy is commonly used to help relieve tension in the back and shoulders. At Acutherapy Clinics, cupping is often combined with <Link to="/acupuncture-honolulu" className="text-blue-600 font-medium hover:underline">acupuncture</Link> or <Link to="/medical-massage-honolulu" className="text-blue-600 font-medium hover:underline">medical massage</Link> to support overall recovery. While cupping does not address structural problems, it may help improve comfort and mobility when used appropriately.
              </p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              A Realistic Answer: Does Cupping Actually Help Back Pain?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Cupping therapy has been used for a long time, but many people in Honolulu still wonder if it really works.</p>
              <p>The honest answer is that it may help—especially when <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 hover:underline">back pain</Link> is related to muscle tension and <Link to="/medical-massage-honolulu" className="text-blue-600 hover:underline">muscle tightness</Link>.</p>
              <p>Cupping doesn’t “fix” the spine or underlying <Link to="/sciatica-acupuncture-honolulu" className="text-blue-600 hover:underline">structural, nerve issues</Link>.<br/>Instead, it works more on the surface level of the body.</p>
              <p>Many patients report that after a session:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li>The back feels looser</li>
                <li>Muscle tightness decreases</li>
                <li>Movement feels easier</li>
              </ul>
              <p className="font-medium text-slate-800">The effect is often temporary, but it can be a helpful part of a larger treatment plan.</p>
              <div className="mt-4 bg-blue-50/50 p-4 border-l-2 border-blue-500 rounded-r">
                <p className="text-slate-800 font-medium">If your back pain feels more like muscle tightness or stiffness rather than sharp nerve pain, cupping may be a helpful <Link to="/contact-honolulu-acupuncture" className="text-blue-600 hover:underline">starting point</Link>.</p>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              How Cupping Therapy May Help Back Pain
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Cupping therapy involves placing suction cups on the skin to create a pulling effect.</p>
              <p>This may help:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Increase blood flow to tight areas</li>
                <li>Reduce muscle tension</li>
                <li>Promote relaxation</li>
              </ul>
              <p>Some patients also find that it helps reduce the “heavy” or stiff feeling in the back.</p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6 rounded-r-xl">
                 <p className="text-[16px] md:text-[18px] text-slate-800 font-medium italic">
                   "Research suggests cupping therapy may reduce pain and improve function in people with low back pain, although results can vary."
                 </p>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              What Does Cupping Feel Like?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Cupping does not feel like a deep massage or pressure.</p>
              <p>Instead, patients often describe:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>A pulling or suction sensation</li>
                <li>Tightness under the cup</li>
                <li>A feeling of release after the cups are removed</li>
              </ul>
              <p>It may feel unusual at first, but many people find it relaxing.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              How Long Do the Effects Last?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>The effects of cupping are often short-term. Cupping is often used as a complementary therapy rather than a standalone treatment for <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 hover:underline">long-term back pain</Link>.</p>
              <p>Some patients feel relief for:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>A few hours</li>
                <li>A few days</li>
              </ul>
              <p>For longer-lasting results, cupping is often combined with:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
                <li><Link to="/acupuncture-honolulu" className="text-blue-600 font-bold hover:underline">Acupuncture</Link></li>
                <li><Link to="/medical-massage-honolulu" className="text-blue-600 font-bold hover:underline">Medical massage</Link></li>
                <li>Movement or <Link to="/neck-pain-treatment-honolulu" className="text-blue-600 hover:underline">stretching</Link></li>
              </ul>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              When Patients in Honolulu Consider Cupping for Back Pain
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>You might consider cupping if you’re experiencing:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 box-border">
                <li>Muscle tightness in the upper or lower back</li>
                <li>Stiffness from sitting or posture</li>
                <li>Stress-related tension</li>
                <li>General soreness or fatigue</li>
              </ul>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              Cupping Therapy in Honolulu
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Acutherapy Clinics is located near Ala Moana, serving patients across:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Waikiki</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Kakaʻako</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Downtown Honolulu</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Greater Oahu</span>
              </div>
              <p>Having access to local care makes it easier to include cupping as part of your overall wellness routine.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-6 border-b pb-2">
              Q&A: Cupping for Back Pain
            </h2>
            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Does cupping really help back pain?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Cupping may help reduce muscle tension and improve circulation, which can temporarily relieve discomfort.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Is cupping better than acupuncture?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">They work differently. Cupping focuses more on muscle tension, while <Link to="/acupuncture-honolulu" className="text-blue-600 hover:underline">acupuncture</Link> may address deeper pain patterns.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">How often should I do cupping therapy?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">This depends on your condition. Some patients use it occasionally, while others include it regularly as part of a treatment plan.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Are cupping marks normal?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Yes. The circular marks are a normal response to suction and typically fade within a few days.</p>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              A Safe and Professional Approach
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-12">
              <p className="mb-4">At Acutherapy Clinics in Honolulu, cupping therapy is performed by trained professionals using clean, professional equipment.</p>
              <p className="mb-6">Safety and patient comfort are always prioritized.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                 <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-3 rounded-lg border border-emerald-100 font-medium">
                    <ShieldCheck className="text-emerald-500 h-5 w-5" /> <span>Professional Equipment</span>
                 </div>
                 <div className="flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-3 rounded-lg border border-blue-100 font-medium">
                    <ShieldCheck className="text-blue-500 h-5 w-5" /> <span>Trained Specialists</span>
                 </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
              <h2 className="text-[28px] font-bold text-slate-900 mb-4">Interested in Trying Cupping for Back Pain?</h2>
              <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-8">
                If back tension or stiffness has been affecting your daily comfort, cupping therapy may be worth exploring as part of your <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 font-bold hover:underline">care plan</Link>.
              </p>
              
              <ul className="space-y-3 mb-8 text-slate-800 font-medium">
                <li className="flex items-center gap-3"><MapPin className="text-blue-600 h-5 w-5" /> Located near Ala Moana in Honolulu</li>
                <li className="flex items-center gap-3"><Calendar className="text-blue-600 h-5 w-5" /> Same-day appointments available</li>
                <li className="flex items-center gap-3"><PhoneCall className="text-blue-600 h-5 w-5" /> Call (808) 528-7177 to schedule your visit</li>
              </ul>

              <Link to="/book-appointment" className="inline-block hover:opacity-90 transition-opacity" style={{ background: '#000', color: '#fff', padding: '12px 20px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                Get My Recovery Plan
              </Link>
            </div>
            
            {/* Dr. David Cai Profile Module */}
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
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">Explore Related Treatments</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <Link to="/neck-pain-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                  <Activity className="text-blue-500 mr-3 h-5 w-5" /> Neck Pain Treatment
                </Link>
                <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                  <ShieldCheck className="text-blue-500 mr-3 h-5 w-5" /> Learn About Acupuncture
                </Link>
                <Link to="/contact-honolulu-acupuncture" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                  <PhoneCall className="text-emerald-500 mr-3 h-5 w-5" /> Contact Our Clinic
                </Link>
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
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                      <p className="font-bold text-slate-900 mb-1 text-sm">Hours of Operation</p>
                      <p className="text-slate-600 text-sm">Mon-Fri: 9am - 1pm, Sat: 8am - 12pm</p>
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
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"Dr. Cai completely resolved my shoulder pain after just 3 visits. I had been suffering for months. The clinic is pristine, professional, and very welcoming!"</p>
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
