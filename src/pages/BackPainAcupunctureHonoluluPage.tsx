import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity, HelpCircle } from "lucide-react";

export default function BackPainAcupunctureHonoluluPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/back-pain-acupuncture-honolulu" />
        <title>Back Pain Acupuncture Honolulu | Low Back Relief | AcuTherapy Clinics</title>
        <meta name="description" content="Suffering from lower back pain in Honolulu? Discover how targeted medical acupuncture and traditional Chinese medicine can relieve your severe back pain today." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
            alt="Back Pain Acupuncture Honolulu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>#1 Back Pain Relief Clinic</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Acupuncture for Back Pain in Honolulu</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Avoid surgery and heavy medication. Clinically proven back pain treatments utilizing advanced meridian therapy.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              If you are enduring daily lower back pain in Honolulu, you know how severely it can limit your life—from sitting at work to lifting groceries or sleeping through the night. Our targeted <strong>Back Pain Acupuncture in Honolulu</strong> focuses on restoring mobility, reducing deep spinal inflammation, and getting you back on your feet quickly without relying on pharmaceuticals.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Causes Severe Back Pain?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The lower back is a complex structure of interconnecting bones, joints, nerves, ligaments, and muscles. Back pain often originates from sudden injuries (like auto accidents or heavy lifting), continuous repetitive stress, poor occupational posture, or conditions such as herniated discs and spinal stenosis. Over time, these structural imbalances lead to intense muscle spasms and compressed nerve roots, locking your back in a cycle of worsening pain.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How Acupuncture Relieves Back Pain</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Acupuncture acts as a circuit breaker for back pain. By precisely inserting sterile needles into tight muscle bands and specific lumbar meridians, we compel the surrounding connective tissues to release their grip. The micro-stimulation heavily dilates local blood vessels, flushing out stagnant lactic acid and bathing the injured spinal discs in highly oxygenated blood. Simultaneously, it prompts the central nervous system to flood the body with potent neurochemicals to naturally kill the pain.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect & Real Patient Results</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Your back pain treatment begins with a direct orthopedic evaluation. We will identify the exact muscles and spinal segments causing you grief. You will then rest in a quiet, climate-controlled room as the needles do their work—typically for 20-30 minutes. 
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
              <p className="text-lg text-slate-800 italic font-medium">
                "Many patients suffering from chronic lower back pain report feeling a heavy, warm 'release' around their spine during the session, and walk out of our clinic feeling vastly lighter and more mobile instantly."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Who Is This For?</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li><strong>Lumbar Strain / Sprain:</strong> Acute back pain from recent heavy lifting or sports.</li>
              <li><strong>Car Accident Survivors:</strong> Reversing extreme whiplash and lower back contusions.</li>
              <li><strong>Office Professionals:</strong> Releasing deep muscular knots caused by prolonged sitting.</li>
              <li><strong>Post-Surgical Patients:</strong> Seeking natural adjunct pain relief during physical therapy recovery.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> How many back pain sessions are needed?</h3>
                <p className="text-slate-600">While acute strains might resolve in 2-4 visits, chronic back issues often recommend a foundation of 6-10 focused sessions. Dr. Cai will provide a precise medical timeframe after your first exam.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Can acupuncture help a herniated disc?</h3>
                <p className="text-slate-600">Yes. While it does not physically push the disc back into place, acupuncture brilliantly decreases the surrounding nerve inflammation and stops the intense localized muscle spasms that make disc herniations so painful.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Do you accept No-Fault auto insurance?</h3>
                <p className="text-slate-600">Yes, Hawaii PIP Auto insurance covers acupuncture 100% for collision-related back injuries. We will gladly handle all the exhausting paperwork for you so you can focus entirely on getting better.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Related Treatments</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> General Acupuncture
              </Link>
              <Link to="/sciatica-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Sciatica Relief
              </Link>
              <Link to="/neck-pain-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Neck Pain Treatment
              </Link>
              <Link to="/cupping-therapy-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Cupping Therapy
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Serving Honolulu & Oahu Residents</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Are you tired of suffering in silence from a bad back? Dr. Cai has helped hundreds of patients throughout Oahu regain their life. We serve patients across the entire Honolulu region:
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
                <Link to="/acupuncture-honolulu" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Honolulu</Link>
                <Link to="/acupuncture-waikiki" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Waikiki</Link>
                <Link to="/acupuncture-ala-moana" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Ala Moana</Link>
                <Link to="/acupuncture-pearl-city" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Pearl City</Link>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 h-2 w-full"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
                <p className="text-slate-600 mb-8 text-sm">Bridge the gap to a pain-free life today. Located in Honolulu.</p>
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
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Aiea / Pearl City Clinic</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        98-211 Pali Momi St, Suite 604<br/>Aiea, HI 96701
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                      <p className="font-bold text-slate-900 mb-1 text-sm">Insurance Support</p>
                      <p className="text-slate-600 text-sm">100% Coverage for Auto No-Fault PIP & Workers Comp.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">Patient Reviews</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"I couldn't even bend over to tie my shoes due to intense back pain. Dr. Cai's back treatment completely relaxed my muscles and removed the sharp pain in just a few visits. Magic."</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">MG</div>
                 <div>
                    <p className="text-white font-semibold text-sm">Mike G.</p>
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
