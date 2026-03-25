import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity, HelpCircle } from "lucide-react";

export default function AutoAccidentInjuryTreatmentHonoluluPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/auto-accident-injury-honolulu" />
        <title>Auto Accident Injury Treatment Honolulu | 100% PIP Coverage | AcuTherapy</title>
        <meta name="description" content="Been in a car crash? Get expert auto accident injury treatment in Honolulu. 100% covered by Hawaii No-Fault PIP insurance. We treat whiplash, back pain, and concussions." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
            alt="Auto Accident Honolulu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>100% No-Fault PIP Insurance Accepted</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Auto Accident Injury Treatment in Honolulu</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Recover safely from whiplash, neck pain, and back pain with zero out-of-pocket costs using your Hawaii auto insurance.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              A motor vehicle accident causes extreme physical trauma to the body, even at low speeds. The intense force throws your spine out of alignment, tears micro-fascia, and locks your muscles in a defensive spasm. At AcuTherapy Clinics, our specialized <strong>Auto Accident Injury Treatment in Honolulu</strong> is designed to rapidly reduce acute inflammation, stop chronic whiplash pain, and prevent scar tissue from permanently restricting your mobility. 
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Understanding Whiplash & Seatbelt Trauma</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The most common consequence of a car crash is whiplash—a severe hyperextension of the complex neck ligaments. Symptoms like excruciating neck stiffness, radiating shoulder pain, massive tension headaches, and lower back contusions from seatbelt lockdown rarely show up fully on the first day. It often takes 48-72 hours for the severe neuro-inflammation to peak, leaving victims in immobilizing pain for weeks or months.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How Our Post-Crash Acupuncture Helps</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              When standard painkillers wear off, the muscular spasms remain. Post-collision medical acupuncture directly intercepts the body's trauma response. We target the heavily traumatized cervical spine and lumbar regions with specialized micro-needling. This forces the tense, knotted muscle fibers to release their vice-grip safely. It also floods the damaged ligament tissues with fresh, highly oxygenated blood necessary for cellular repair and hematoma (bruising) breakdown.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect & Zero Out-Of-Pocket Costs</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Because Hawaii operates under a "No-Fault" auto insurance law (PIP), your medical acupuncture and massage treatments are typically covered 100% by your car insurance—regardless of who caused the accident. Our front desk staff will handle all the tedious billing and paperwork with your adjuster, so you literally do not pay a dime out of pocket and can focus purely on your physical recovery.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
              <p className="text-lg text-slate-800 italic font-medium">
                "Many crash victims arrive unable to turn their neck more than an inch. Due to the powerful anti-inflammatory effects of our treatments, most patients report feeling a significant breakthrough in mobility and pain reduction within the first two weeks."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Crash Injuries Do We Treat?</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li><strong>Severe Whiplash:</strong> Neck stiffness, upper back spasming, and loss of cervical mobility.</li>
              <li><strong>Post-Concussion Headaches:</strong> Traumatic tension radiating from the skull base.</li>
              <li><strong>Lower Back Sprains:</strong> Lumbar contusions and sciatic nerve pain from sheer seatbelt force.</li>
              <li><strong>Shoulder / Rotator Cuff Trauma:</strong> Steering wheel impact injuries.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Do I need a doctor's referral for PIP billing?</h3>
                <p className="text-slate-600">Typically, yes. If you plan to use your Hawaii No-Fault PIP auto insurance, you usually need a simple prescription or referral from your primary care physician or urgent care doctor explicitly recommending "Acupuncture". If you need help obtaining one, just call our clinic and we will guide you.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> The accident was my fault. Am I still covered?</h3>
                <p className="text-slate-600">Yes! Hawaii is a No-Fault state. This legally means your personal auto insurance policy contains Personal Injury Protection (PIP) medical funds designed specifically for your recovery, meaning your treatments are covered regardless of who was at fault.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> How soon after the accident should I start acupuncture?</h3>
                <p className="text-slate-600">Immediately. The faster we can intercept the neurological inflammation and relax the defensive muscle spasms, the significantly less chance you have of developing permanent scar tissue and chronic lifetime pain.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Related Treatments</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <Link to="/neck-pain-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Neck Pain & Whiplash Relief
              </Link>
              <Link to="/back-pain-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Lower Back Auto Trauma
              </Link>
              <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> General Medical Acupuncture
              </Link>
              <Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Injury Medical Massage
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Serving Auto Accident Victims in Honolulu</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our clinics are perfectly positioned to provide post-accident relief across Oahu. We handle No-Fault claims rapidly for patients living in:
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
                <Link to="/acupuncture-honolulu" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Honolulu</Link>
                <Link to="/acupuncture-ala-moana" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Ala Moana</Link>
                <Link to="/acupuncture-pearl-city" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Pearl City / Aiea</Link>
                <Link to="/acupuncture-waipahu" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Waipahu</Link>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 h-2 w-full"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
                <p className="text-slate-600 mb-8 text-sm">Don't wait for the pain to become chronic. Book an evaluation today.</p>
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
                  <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-bold text-green-900 mb-1 text-sm flex items-center gap-1"><ShieldCheck size={16} /> PIP Covered Approved</p>
                      <p className="text-green-800 text-sm">You pay $0 for your treatments. We bill your auto insurance directly.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">Patient Reviews</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"I was rear-ended on the H-1 and suffered terrible whiplash. Dr. Cai's clinic handled all my Geico insurance paperwork seamlessly. The acupuncture treatments completely saved my neck and got me back to work within weeks."</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">DK</div>
                 <div>
                    <p className="text-white font-semibold text-sm">Daniel K.</p>
                    <p className="text-blue-400 text-xs">Waipahu Resident</p>
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
