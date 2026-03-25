import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity, HelpCircle, ArrowRight } from "lucide-react";

export default function ShoulderPainAcupunctureHonoluluPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/shoulder-pain-acupuncture-honolulu" />
        <title>Shoulder Pain Acupuncture Honolulu | Rotator Cuff Relief | AcuTherapy</title>
        <meta name="description" content="Resolve deep shoulder pain, frozen shoulder, and rotator cuff injuries in Honolulu with advanced medical acupuncture. Avoid surgery and get back your full range of motion." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
            alt="Shoulder Pain Acupuncture Honolulu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Restoring Proper Joint Mobility</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Shoulder Pain Treatment in Honolulu</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Reach higher without wincing. Effective, non-surgical pain relief for rotator cuff tears, frozen shoulder, and chronic tension.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              Whether you are suffering from a sharp, agonizing pinch when you lift your arm, or a deep nighttime ache that makes sleeping impossible, chronic shoulder issues rapidly deteriorate your quality of life. At AcuTherapy Clinics, our highly specialized <strong>Shoulder Pain Acupuncture in Honolulu</strong> targets the intricate network of ligaments and tendons around the joint to relieve inflammation, unlock frozen shoulders, and restore your full range of motion naturally.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Causes Intensive Shoulder Pain?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The shoulder is the most mobile joint in the human body, relying heavily on a delicate group of four muscles known as the rotator cuff. Due to its complexity, it is highly susceptible to wear and tear over time. Most severe shoulder pain originates from:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li><strong>Rotator Cuff Tendinitis:</strong> Heavy inflammation of the tendons due to sports or repetitive overhead labor.</li>
              <li><strong>Frozen Shoulder (Adhesive Capsulitis):</strong> A painful condition where the connective tissue capsule extremely thickens, locking the shoulder joint completely in place.</li>
              <li><strong>Bursitis:</strong> Swelling of the fluid-filled sacs that cushion your shoulder joints.</li>
              <li><strong>Referred Neck Tension:</strong> Intense upper trap tightness "pulling" down on the shoulder machinery.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How Shoulder Acupuncture Helps Heal the Joint</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Unlike temporary cortisone injections that can weaken tendons over time, acupuncture fundamentally rehabilitates the joint from the inside out. We use specific trigger-point needling along the scapula, deltoid, and chest to manually "disengage" the protective muscle spasms fighting against the joint.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              By introducing micro-trauma via sterile needles directly near the compromised rotator cuff or inflamed bursa sac, the body immediately rushes fresh, highly oxygenated blood cells and profound natural pain-killing endorphins to the specific capsule. This rapidly melts the "frozen" scar tissue binding the joint together.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect & Real Patient Results</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Your shoulder treatment often integrates both local needling directly on the shoulder and distal meridian pathways on the lower arm or leg to balance the systemic nerve flow. Depending on how locked the shoulder is, Dr. Cai may also recommend Fire Cupping or Medical Massage to forcefully lift the stagnant fascia off the joint.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
              <p className="text-lg text-slate-800 italic font-medium">
                "Patients suffering from Frozen Shoulder often experience a significant 'thawing' effect. They routinely report that after several focused sessions, they can finally lift their arm high enough to brush their hair or put on a jacket without screaming in pain."
              </p>
            </div>


            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> My doctor recommended shoulder surgery. Should I try this first?</h3>
                <p className="text-slate-600">Yes, absolutely. Acupuncture is an incredibly powerful, conservative first-line treatment. If your rotator cuff is only partially torn or heavily inflamed (tendinopathy), acupuncture can frequently rehabilitate the joint fully, allowing you to avoid risky and invasive surgical procedures.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> How many treatments does Frozen Shoulder take?</h3>
                <p className="text-slate-600">Frozen Shoulder (Adhesive Capsulitis) is notoriously stubborn. While you will feel structural pain relief quickly, fully "unfreezing" the capsule and restoring 100% range of motion usually requires a dedicated medical plan of 8-15 consistent sessions.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Will you place the needles directly into the pain?</h3>
                <p className="text-slate-600">We use a combination approach. We do place very shallow needles in the tight muscles around the shoulder (locally), but we also utilize highly effective "distal" points on the opposite leg to trick the brain into resetting the pain neurological pathways.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Related Treatments</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <Link to="/neck-pain-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Neck & Trap Pain Treatment
              </Link>
              <Link to="/fire-cupping-therapy-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Medical Cupping Fascia Lift
              </Link>
              <Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Medical Massage (Tui-Na)
              </Link>
              <Link to="/sports-injury-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Sports Injury Recovery
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Serving Honolulu & Central Oahu</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              If sharp shoulder pain is keeping you off the tennis court or the golf course, visit one of our clinics today. We serve residents across:
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
                <Link to="/acupuncture-honolulu" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Honolulu</Link>
                <Link to="/acupuncture-ala-moana" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Ala Moana</Link>
                <Link to="/acupuncture-pearl-city" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Pearl City / Aiea</Link>
                <Link to="/acupuncture-waikiki" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Waikiki</Link>
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
                      <p className="text-slate-600 text-sm">Most major Hawaii health insurance providers accepted, including Kaiser, HMSA, and HMAA.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">Patient Reviews</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"I developed severe tendinitis from tennis and could barely lift my arm to drink coffee. The shoulder treatment at AcuTherapy drastically reduced the inflammation in just a few weeks. No surgery needed!"</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">RB</div>
                 <div>
                    <p className="text-white font-semibold text-sm">Richard B.</p>
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
