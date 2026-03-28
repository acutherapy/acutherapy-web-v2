import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity, HelpCircle } from "lucide-react";

export default function NeckPainTreatmentHonoluluPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/neck-pain-treatment-honolulu" />
        <title>Neck Pain Treatment Honolulu | Whiplash & Stiffness | AcuTherapy</title>
        <meta name="description" content="Suffering from severe neck pain, whiplash, or tension headaches in Honolulu? Break the cycle of stiffness with our expert medical acupuncture treatments." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
            alt="Neck Pain Treatment Honolulu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Restoring Cervical Mobility Fast</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Neck Pain Treatment in Honolulu</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Turn your head without wincing. Advanced medical acupuncture protocols to melt away neck tension and heal cervical injuries.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              If your neck feels eternally locked up, making it painful to turn your head while driving or leaving you waking up with tension headaches every morning, you're not alone. Our specialized <strong>Neck Pain Treatment in Honolulu</strong> focuses on physically releasing the locked cervical fascia that standard painkillers simply cannot touch. Do not let chronic neck stiffness rob you of your daily energy.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Causes Severe Neck Pain & Stiffness?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The human head weighs around 10 to 12 pounds. When this heavy structure is thrown off balance by poor posture—such as peering down at a phone ("Tech Neck") or slouching at a computer all day—the deeply situated muscles of the cervical spine are forced into a state of permanent contraction to keep your head up.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Additionally, acute injuries like auto accidents cause aggressive whiplash, tearing the delicate micro-fascia of the neck. When the body attempts to heal this trauma, it often creates disorganized, tough scar tissue that aggressively limits your range of motion long after the initial crash.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How Our Honolulu Acupuncture Provides Relief</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Acupuncture directly targets the inflamed motor points of the trapezius, levator scapulae, and deep cervical stabilizing muscles. By strategically placing hair-thin needles into these exact trigger points, we initiate an immediate localized reflex: the muscle fibers finally stop spasming and let go. 
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              This physical release takes the pressure off of the pinched cervical nerves that cause radiating pain down your arms or up into your skull (migraines). Simultaneously, the treatment vastly dilates local blood flow, flushing out cellular waste and bringing highly oxygenated blood to accelerate the healing of your spine.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect & Real Patient Results</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Dr. David Cai utilizes over 30 years of clWe focus on key points at the base of the skull and upper back. Within 20 minutes, patients typically report a significant increase in their range of motion and a feeling of lightness in the head. Expect a quiet, deeply relaxing 30-minute session.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
              <p className="text-lg text-slate-800 italic font-medium">
                "Many pat<li>Professionals staring at screens all day with tight shoulders.</li>
<li>People waking up with a crick in their neck.</li>etely to the left or right without the sharp, stabbing pain they’ve endured for months."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Who Is This For?</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li><strong>Office Professionals:</strong> Releasing the "Tech Neck" posture and upper shoulder burning sensations.</li>
              <li><strong>Auto Accident Survivors:</strong> Reversing extreme whiplash injuries (100% PIP Auto Insurance covered).</li>
              <li><strong>Chronic Migraine Sufferers:</strong> Dissolving the tension headaches stemming from the base of the skull.</li>
              <li><strong>Athletes:</strong> Speeds up recovery from sports-related neck impacts or awkward sleeping cricks.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Can this help with pain radiating down my arm?</h3>
                <p className="text-slate-600">Yes. Cervical radiculopathy (pinched nerves in the neChronic tech neck, poor sleep posture, and stress lead to severe stiffening of the cervical spine, traps, and levator scapulae muscles.elieve the inflammation and open the nerve pathway.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> How many sessions will I need?</h3>
                <p className="text-slate-600">While acute stiffness (like waking up with a crick) might resolve in just 1-3 sessions, chronic poor posture or severe auto whiplash generally recommend a foundational course of 6-10 treatments to retrain the musculature fully.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Do you ever combine it with cupping?</h3>
                <p className="text-slate-600">Absolutely. Medical cupping on the upper back and trapezius muscles is a fantastic complementary therapy that mechanically pulls stagnant blood and severely tight muscle fascia away from the neck base.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Related Treatments</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <Link to="/shoulder-pain-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Shoulder Pain Relief
              </Link>
              <Link to="/headache-migraine-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Tension Headaches / TMJ
              </Link>
              <Link to="/auto-accident-injury-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Auto Accident Whiplash (PIP)
              </Link>
              <Link to="/fire-cupping-therapy-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Medical Cupping Therapy
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Serving Honolulu & Surrounding Oahu</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our clinics situated in Honolulu and Pearl City (Aiea) allow us to conveniently serve patients suffering from chronic neck tension across the island:
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
                <Link to="/acupuncture-honolulu" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Honolulu</Link>
                <Link to="/acupuncture-waikiki" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Waikiki</Link>
                <Link to="/acupuncture-ala-moana" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Ala Moana</Link>
                <Link to="/acupuncture-pearl-city" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Aiea / Pearl City</Link>
            </div>

          
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How Acupuncture Helps</h2>
<ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-6">
<li><strong>Trap & Cervical Release:</strong> Directly releases tension nodules in the neck and shoulders.</li>
<li><strong>Cervical Blood Flow:</strong> Increases oxygenation to tense muscle fibers around the upper spine.</li>
</ul>

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
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"I spent 10 years staring down at my laptop and developed a horribly painful stiff neck and daily tension headaches. Dr. Cai's acupuncture therapy released the knots in just three weeks. I feel like a new person."</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">AM</div>
                 <div>
                    <p className="text-white font-semibold text-sm">Anna M.</p>
                    <p className="text-blue-400 text-xs">Manoa Resident</p>
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
