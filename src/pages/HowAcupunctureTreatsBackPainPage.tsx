import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity, CheckCircle2 } from "lucide-react";

export default function HowAcupunctureTreatsBackPainPage() {
  return (
    <>
      <Helmet>
        <title>How Acupuncture Treats Back Pain | Honolulu Patient Guide</title>
        <meta name="description" content="Acupuncture for back pain in Honolulu may help reduce muscle tension, improve circulation, and support the body's natural pain response. Discover more." />
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">How Acupuncture Treats Back Pain</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Medical-grade treatments customized for lasting relief and recovery in Honolulu.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <h1 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-6 leading-tight">
              How Acupuncture Treats Back Pain: A Honolulu Patient Guide
            </h1>

            <figure className="mb-8">
              <img 
                src="/images/acupuncture-back-pain-honolulu-dr-david-cai.jpg" 
                alt="Dr. David Cai performing acupuncture for back pain relief in Honolulu Hawaii" 
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800'; }}
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">
                A clinical acupuncture session in Honolulu targeting lower back pain, showing therapeutic needle placement and a relaxed patient environment.
              </figcaption>
            </figure>

            <p className="text-[18px] font-semibold text-slate-800 mb-6 leading-relaxed">
              <strong>Acupuncture for back pain in Honolulu may help reduce muscle tension, improve circulation, and support the body's natural pain response. Many patients experience gradual relief and improved mobility when acupuncture is used as part of a broader treatment plan.</strong>
            </p>

            <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10">
              Back pain is one of the most common reasons people seek care. In Honolulu, many patients turn to acupuncture to help manage stiffness, tension, and chronic discomfort. At Acutherapy Clinics, Dr. David Cai works with patients experiencing back pain by focusing on muscle patterns, circulation, and nervous system response. While acupuncture is not a one-step solution, it may help support recovery and improve daily movement when combined with appropriate care.
            </p>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              A Realistic Look: How Does Acupuncture Help Back Pain?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Back pain doesn't usually come from just one problem.</p>
              <p>For many people in Honolulu, it builds over time—tight muscles, poor posture, stress, or an old injury that never fully resolved.</p>
              <p>Acupuncture doesn't "force" the back into alignment.<br />What it may do instead is help the body relax the patterns that are keeping the area tight and irritated.</p>
              <p>Many patients notice:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Less stiffness when getting up</li>
                <li>Easier movement throughout the day</li>
                <li>Reduced intensity of ongoing discomfort</li>
              </ul>
              <p>It's not about instant results—it's about helping the body move in a better direction.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              What Happens in the Body During Acupuncture?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-6 space-y-4">
              <p>Acupuncture may help support several natural responses:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Muscle relaxation around tight or overworked areas</li>
                <li>Improved circulation to affected tissues</li>
                <li>A shift in how the nervous system processes pain signals</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-10 rounded-r-xl">
               <p className="text-[16px] md:text-[18px] text-slate-800 font-medium italic">
                 "Research suggests acupuncture may help reduce pain and improve function in people with back pain when used as part of conservative care."
               </p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              What Does Acupuncture Feel Like for Back Pain?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Patients often expect something painful—but that's usually not the case.</p>
              <p>Most describe:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>A light pinch at first</li>
                <li>A spreading warmth</li>
                <li>A mild tingling sensation</li>
              </ul>
              <p>Many patients in Honolulu who were unsure at first report that the experience felt much easier than expected—and often relaxing.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              How Acupuncture Compares to Other Back Pain Approaches
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>People often try:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Rest</li>
                <li>Stretching</li>
                <li>Pain medication</li>
              </ul>
              <p>These can help, but sometimes don't fully address ongoing tension or recurring patterns.</p>
              <p>Acupuncture may help support recovery by:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Reducing muscle guarding</li>
                <li>Improving mobility</li>
                <li>Supporting long-term function</li>
              </ul>
              <p>At Acutherapy Clinics in Honolulu, treatment is personalized based on how your body responds.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              When People in Honolulu Consider Acupuncture for Back Pain
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>You might consider acupuncture if you're experiencing:</p>
              <ul className="list-disc pl-6 space-y-2 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li>Lower back stiffness or tightness</li>
                <li>Pain that worsens with sitting or standing</li>
                <li>Muscle tension related to stress</li>
                <li>Recurring discomfort that keeps coming back</li>
                <li>Limited mobility or reduced flexibility</li>
              </ul>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              Local Back Pain Treatment in Honolulu
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Acutherapy Clinics is located near Ala Moana, providing convenient access for patients across:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Waikiki</li>
                <li>Kakaʻako</li>
                <li>Downtown Honolulu</li>
                <li>Greater Oahu</li>
              </ul>
              <p>Having a nearby clinic makes it easier to stay consistent with care—often an important part of managing back pain.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-6 border-b pb-2">
              Q&A: Acupuncture for Back Pain
            </h2>
            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Does acupuncture really work for back pain?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Acupuncture may help reduce muscle tension and support the body's response to pain, which can improve comfort and mobility over time.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">How long does it take to see results?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Some patients notice changes within a few sessions, while others may require ongoing treatment depending on the condition.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Is acupuncture better than physical therapy?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Acupuncture and physical therapy serve different roles and are often used together as part of a broader treatment approach.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Can acupuncture help chronic back pain?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Acupuncture may help manage chronic back pain by supporting circulation, reducing tension, and improving overall function.</p>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              A Safe and Professional Approach
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-12">
              <p className="mb-4">At Acutherapy Clinics in Honolulu, all treatments are performed using sterile, single-use needles.</p>
              <p className="mb-6">Care is provided by trained professionals following Hawaii healthcare standards, ensuring both safety and quality.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                 <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-3 rounded-lg border border-emerald-100 font-medium">
                    <CheckCircle2 className="text-emerald-500 h-5 w-5" /> <span>Sterile Use Needles</span>
                 </div>
                 <div className="flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-3 rounded-lg border border-blue-100 font-medium">
                    <CheckCircle2 className="text-blue-500 h-5 w-5" /> <span>Licensed Professionals</span>
                 </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
              <h2 className="text-[28px] font-bold text-slate-900 mb-4">Ready to Address Your Back Pain?</h2>
              <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-8">
                If back pain has been limiting your movement or affecting your daily life, it may be time to explore your options.<br/><br/>
                Acupuncture may help support your recovery and improve how your body feels over time.
              </p>
              
              <ul className="space-y-3 mb-8 text-slate-800 font-medium">
                <li className="flex items-center gap-3"><MapPin className="text-blue-600 h-5 w-5" /> Located near Ala Moana in Honolulu</li>
                <li className="flex items-center gap-3"><Calendar className="text-blue-600 h-5 w-5" /> Same-week appointments available</li>
                <li className="flex items-center gap-3"><PhoneCall className="text-blue-600 h-5 w-5" /> Call (808) 528-8884 to schedule your consultation</li>
              </ul>

              <Link to="/book-appointment" className="inline-block hover:opacity-90 transition-opacity" style={{ background: '#000', color: '#fff', padding: '12px 20px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                Get My Recovery Plan
              </Link>
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">Explore Related Treatments</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <Link to="/sciatica-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold"><Activity className="text-blue-500 mr-3 h-5 w-5" /> Sciatica Treatment</Link>
                <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                  <ShieldCheck className="text-blue-500 mr-3 h-5 w-5" /> Acupuncture Honolulu
                </Link>
                <Link to="/contact-honolulu-acupuncture" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                  <PhoneCall className="text-emerald-500 mr-3 h-5 w-5" /> Contact Us
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
                      <p className="text-slate-600 text-sm mt-1"><strong>Ph:</strong> (808) 528-7177 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 212-9459</p>
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
                      <p className="text-slate-600 text-sm mt-1"><strong>Ph:</strong> (808) 452-1900 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 452-1521</p>
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
