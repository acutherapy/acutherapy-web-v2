import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity, CheckCircle2 } from "lucide-react";

export default function HowManyAcupunctureSessionsForSciaticaPage() {
  return (
    <>
      <Helmet>
        <title>How Many Acupuncture Sessions for Sciatica? | Honolulu Guide</title>
        <meta name="description" content="Discover how many acupuncture sessions are typically needed for sciatica in Honolulu. Learn about recovery timelines, treatment plans, and what to expect." />
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
                }
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">How Many Acupuncture Sessions for Sciatica?</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Medical-grade treatments customized for lasting relief and recovery in Honolulu.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <h1 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-6 leading-tight">
              How Many Acupuncture Sessions Are Needed for Sciatica? A Honolulu Guide
            </h1>

            <figure className="mb-8">
              <img 
                src="/images/acupuncture-sciatica-sessions-honolulu-dr-david-cai.jpg" 
                alt="Dr. David Cai performing acupuncture for sciatica treatment in Honolulu Hawaii" 
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800'; }}
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">
                A clinical acupuncture session in Honolulu focused on treating sciatica pain, showing targeted needle placement for lower back and nerve-related discomfort.
              </figcaption>
            </figure>

            <p className="text-[18px] font-semibold text-slate-800 mb-6 leading-relaxed">
              <strong>The number of acupuncture sessions for sciatica in Honolulu varies depending on the severity and duration of symptoms. Many patients begin to notice changes within 3–6 sessions, while longer-standing conditions may require ongoing care as part of a broader treatment plan.</strong>
            </p>

            <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10">
              Sciatica can affect daily movement, from sitting to walking comfortably. In Honolulu, acupuncture is often used to support recovery by addressing muscle tension and nerve-related discomfort. At Acutherapy Clinics, Dr. David Cai works with patients using personalized treatment plans that may help improve mobility and reduce pain over time. The number of sessions varies, but consistency is often an important factor in achieving results. For comprehensive care, our patients also frequently explore <Link to="/sciatica-acupuncture-honolulu" className="text-blue-600 font-medium hover:underline">acupuncture for sciatica</Link>, <Link to="/nerve-pain-acupuncture-honolulu" className="text-blue-600 font-medium hover:underline">nerve pain acupuncture</Link>, and <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 font-medium hover:underline">back pain acupuncture</Link>.
            </p>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              A Realistic Answer: How Many Sessions Do You Actually Need?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>This is one of the most common questions patients ask.</p>
              <p>The honest answer is: it depends.</p>
              <p>For many people in Honolulu, sciatica develops gradually—often from muscle tightness, posture, or past injuries. Because of that, recovery usually doesn't happen in a single visit. <strong>Unlike temporary relief approaches, acupuncture is typically used as a series of treatments to support gradual improvement.</strong></p>
              <p>A general pattern many patients experience:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Early sessions</strong> focus on reducing tension and discomfort</li>
                <li><strong>Mid-stage sessions</strong> help improve mobility</li>
                <li><strong>Later sessions</strong> support longer-term stability</li>
              </ul>
              <p>Many patients report that after the first few treatments, the pain feels less intense and movement becomes easier.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              What Affects the Number of Acupuncture Sessions?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-6 space-y-4">
              <p>Several factors can influence how many sessions may be needed:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>How long you've had sciatica</li>
                <li>The severity of nerve irritation</li>
                <li>Muscle tightness in the lower back and hips</li>
                <li>Your daily activity level and posture</li>
              </ul>
              <p>In general:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Recent or mild cases may respond more quickly</li>
                <li>Chronic or recurring symptoms may require longer-term care</li>
              </ul>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              What Changes Do Patients Usually Notice First?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Rather than a sudden "fix," most people notice gradual improvements.</p>
              <p>Common early changes include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Reduced intensity of pain</li>
                <li>Less tightness in the lower back or hips</li>
                <li>Easier walking or standing</li>
              </ul>
              <p>Many patients in Honolulu who were unsure at first say the progress feels subtle—but consistent over time.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              Why Consistency Matters More Than Frequency Alone
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-6 space-y-4">
              <p>It's not just about how many sessions—but how consistent they are.</p>
              <p>Acupuncture may help support:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Muscle relaxation</li>
                <li>Improved circulation</li>
                <li>The body's response to nerve irritation</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-10 rounded-r-xl">
               <p className="text-[16px] md:text-[18px] text-slate-800 font-medium italic">
                 "Clinical studies often use around 10 acupuncture sessions over several weeks to evaluate improvement in sciatica symptoms."
               </p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              When to Reevaluate Your Progress
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>A personalized approach matters.</p>
              <p>At Acutherapy Clinics in Honolulu, patients are typically reassessed over time to determine:</p>
              <ul className="list-disc pl-6 space-y-2 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li>Whether symptoms are improving</li>
                <li>If treatment frequency should change</li>
                <li>When to transition to maintenance care</li>
              </ul>
              <p>This helps avoid both under-treatment and unnecessary visits.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              Sciatica Treatment in Honolulu That Fits Your Schedule
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Acutherapy Clinics is conveniently located near Ala Moana, making it accessible from:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Waikiki</li>
                <li>Kakaʻako</li>
                <li>Downtown Honolulu</li>
                <li>Across Oahu</li>
              </ul>
              <p>For many patients, having a clinic nearby makes it easier to stay consistent with treatment.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-6 border-b pb-2">
              Q&A: Acupuncture Sessions for Sciatica
            </h2>
            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">How many acupuncture sessions are needed for sciatica?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Many patients begin to notice improvement within 3–6 sessions, but the total number varies depending on the condition.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">How often should I get acupuncture for sciatica?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Some patients start with more frequent visits and adjust over time based on progress.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Can acupuncture permanently fix sciatica?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Acupuncture may help manage symptoms and support recovery, but long-term results often depend on underlying causes and lifestyle factors.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Is acupuncture worth it for chronic sciatica?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Many patients with chronic symptoms find acupuncture helpful as part of an ongoing management approach.</p>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              A Safe and Professional Approach
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-12">
              <p className="mb-4">At Acutherapy Clinics in Honolulu, treatments are performed using sterile, single-use needles.</p>
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
              <h2 className="text-[28px] font-bold text-slate-900 mb-4">Ready to Start Your Recovery?</h2>
              <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-8">
                If sciatica pain has been affecting your daily movement, a personalized evaluation can help determine how acupuncture may fit into your recovery plan.
              </p>
              
              <ul className="space-y-3 mb-8 text-slate-800 font-medium">
                <li className="flex items-center gap-3"><MapPin className="text-blue-600 h-5 w-5" /> Located near Ala Moana in Honolulu</li>
                <li className="flex items-center gap-3"><Calendar className="text-blue-600 h-5 w-5" /> Same-day appointments may be available.</li>
                <li className="flex items-center gap-3"><PhoneCall className="text-blue-600 h-5 w-5" /> Call (808) 528-7177 to schedule your consultation</li>
              </ul>

              <Link to="/book-appointment" className="inline-block hover:opacity-90 transition-opacity" style={{ background: '#000', color: '#fff', padding: '12px 20px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                Get My Recovery Plan
              </Link>
            </div>
            
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
