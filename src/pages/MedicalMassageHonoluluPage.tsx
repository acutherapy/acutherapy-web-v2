import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity, HelpCircle } from "lucide-react";

export default function MedicalMassageHonoluluPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/medical-massage-honolulu" />
        <title>Medical Massage Honolulu | Tui-Na Therapy | AcuTherapy Clinics</title>
        <meta name="description" content="Experience clinical medical massage (Tui-Na) in Honolulu. We specialize in deep structural tissue release for auto accidents, sports injuries, and severe back pain." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
            alt="Medical Massage Honolulu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm backdrop-blur-sm">
              <ShieldCheck size={16} /> <span>Clinical Structural Release</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 font-medium text-sm backdrop-blur-sm">
              Accepts HMSA, Kaiser, UHA, HMAA, Medicare UHC, Auto PIP, Workers' Comp & VA
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Medical Massage in Honolulu</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Not a spa treatment. This is highly targeted, clinical muscular rehabilitation designed to break down tough scar tissue and release extreme tension.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
                        {/* CRO Expectation Module */}
            <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-10 shadow-sm mt-8">
              <p className="text-lg text-slate-900 font-semibold mb-1">Most patients see improvement in 3–5 visits.</p>
              <p className="text-slate-600">Full recovery may take 4–10+ sessions.</p>
              
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
              If you have sustained an injury in an auto accident, or have developed deeply rooted chronic back pain from years of physical labor, a standard relaxing spa massage will barely scratch the surface. At AcuTherapy Clinics, our <strong>Medical Massage in Honolulu (Tui-Na)</strong> is a robust, clinical, and highly therapeutic treatment administered by medical professionals to physically restructure damaged connective tissue.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What is Tui-Na Medical Massage?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              "Tui-Na" translates to "push and grasp." It is an ancient, highly vigorous form of orthopedic Chinese massage that heavily integrates with our clinical acupuncture protocols. Unlike Swedish massage which focuses merely on skin circulation and light relaxation, Tui-Na aggressively targets the deeper layers of muscle fascia, tendons, and joint capsules.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              When trauma hits the body (such as a severe whiplash impact), your muscles defensively seize up. If not forcefully broken apart, these seized fibers lock into dense, painful scar tissue (myofascial adhesions) that permanently alter your skeleton's posture. Tui-Na utilizes dynamic friction, deep pressing, and joint mobilization techniques to physically break apart this stubborn, knotted scar tissue.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Our Three Core Treatment Pillars</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              AcuTherapy Clinics utilizes medical massage as part of a powerful 3-pillar clinical protocol. While standard spas only use massage, we force recovery via:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li><strong>Traditional Acupuncture:</strong> Naturally rebalancing the body's pathways and rapidly downregulating muscular inflammation before hands-on work begins.</li>
              <li><strong>Medical Massage (Tui-Na):</strong> The core physical lifting—breaking down crunchy, calcified knots around the spine, and safely opening restricted joint spaces (decalcification).</li>
              <li><strong>Fire Cupping Therapy:</strong> Aggressive myofascial decompression. We manually flush trapped edema (swelling) and inflammatory toxins away from an injury site by pulling negative pressure.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect & Real Patient Results</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Medical massage is focused, intentional work. You may experience some therapeutic discomfort ("good pain") as we actively break down the calcifications that have been causing your chronic issues. It is highly recommended to pair your medical massage directly with an acupuncture session for maximum effectiveness.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
              <p className="text-lg text-slate-800 italic font-medium">
                "After my car accident, my neck muscles felt like concrete ropes. The medical massage therapist dug extremely deep to break up the frozen tissue. It was intense work, but I finally regained my ability to check my blind spots without pain."
              </p>
            </div>

            
            {/* CRO Comparison Module */}
            <div className="my-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-2 text-center">Why Most Treatments Don't Last</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200">
                  <div className="p-6 text-center border-r border-slate-200">
                    <h3 className="font-bold text-slate-500 text-lg">Standard Clinics</h3>
                  </div>
                  <div className="p-6 text-center bg-blue-600">
                    <h3 className="font-bold text-white text-lg flex items-center justify-center gap-2">AcuTherapy Clinics</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-slate-100">
                  <div className="p-6 text-center border-r border-slate-100 text-slate-600">15-minute quick visits</div>
                  <div className="p-6 text-center font-semibold text-blue-900 bg-blue-50/50">Full 60-minute intensive sessions</div>
                </div>
                <div className="grid grid-cols-2 border-b border-slate-100">
                  <div className="p-6 text-center border-r border-slate-100 text-slate-600">Treat just the symptoms</div>
                  <div className="p-6 text-center font-semibold text-blue-900 bg-blue-50/50">Treat the mechanical root cause</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-6 text-center border-r border-slate-100 text-slate-600">Temporary masking</div>
                  <div className="p-6 text-center font-semibold text-blue-900 bg-blue-50/50">Permanent tissue repair</div>
                </div>
              </div>
            </div>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Does No-Fault PIP Auto insurance cover medical massage?</h3>
                <p className="text-slate-600">Yes! If you have an active Hawaii No-Fault PIP auto insurance claim, medical massage is an approved and 100% covered therapy for structural rehabilitation when prescribed alongside your acupuncture treatments.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Is this the same as deep tissue massage?</h3>
                <p className="text-slate-600">It is similar but clinically superior. While "deep tissue" commonly refers to heavier pressure in a spa setting, our Tui-Na incorporates medical diagnostics, acupressure at specific nerve junctions, and joint stretching specifically designed to resolve an exact medical pathology.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Will I be sore the next day?</h3>
                <p className="text-slate-600">Because we are actively breaking apart disorganized scar tissue, it is entirely normal to feel a dull, "workout-like" soreness for 24-48 hours following your session. Drinking plenty of water helps powerfully flush out the released toxins.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Related Treatments</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Comprehensive Medical Acupuncture
              </Link>
              <Link to="/neck-pain-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Neck Pain & Whiplash Protocol
              </Link>
              <Link to="/back-pain-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Back Spasm Structural Relief
              </Link>
              <Link to="/auto-accident-injury-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> 100% Covered Auto Accident PIP
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Serving Honolulu & The Whole Island</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Do not let tight scar tissue freeze your joints. Come visit Dr. Cai's team to begin your structural release. We serve:
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
                <Link to="/acupuncture-honolulu" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Honolulu</Link>
                <Link to="/acupuncture-ala-moana" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Ala Moana</Link>
                <Link to="/acupuncture-waikiki" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Waikiki</Link>
                <Link to="/acupuncture-pearl-city" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Aiea / Pearl City</Link>
            </div>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Medical Massage vs. Standard PT & Spa Massage</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">Traditional Physical Therapy (PT) often relies heavily on standardized stretching exercises and elastic bands. While helpful for rehabilitation, these exercises cannot physically break down mature scar tissue. Conversely, standard spa massage is too superficial to effect change in the deep joint capsule.</p>

<p className="text-lg text-slate-700 leading-relaxed mb-6">Our <strong>Medical Tui-Na Massage</strong> bridging this gap. We provide the aggressive, hands-on structural intervention necessary to forcefully unlock frozen joints (like Adhesive Capsulitis) and shatter deep fascial armor, paving the way for true rehabilitation.</p>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Ideal Candidates for Medical Massage</h2>
<ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-6">
<li><strong>Auto Accident Victims:</strong> Suffering from severe whiplash, neck locking, and traumatic muscle guarding.</li>
<li><strong>Post-Surgical Patients:</strong> Needing to break down stubborn, movement-restricting scar tissue.</li>
<li><strong>Chronic Pain Sufferers:</strong> Individuals with intractable frozen shoulder, sciatica, or severe lumbar muscle spasms.</li>
</ul>

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
                                                    <a href="https://www.google.com/maps/search/?api=1&query=1650+Liliha+St,+Suite+208,+Honolulu,+HI+96817" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 font-bold hover:underline mt-1">
                                                        Find us on Google Maps
                                                    </a>
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
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <p className="font-bold text-slate-900 mb-1 text-sm">Insurance Information</p>
                      <p className="text-slate-600 text-sm"><strong>Accepts HMSA, Kaiser, UHA, HMAA, Medicare UHC, Auto PIP, Workers' Comp & VA.</strong></p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">Patient Reviews</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"I highly recommend the Tui-Na massage paired with acupuncture. The therapists at AcuTherapy clinics really understand muscle anatomy. They aggressively worked out knots in my lower back I didn't even know I had."</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">PK</div>
                 <div>
                    <p className="text-white font-semibold text-sm">Paul K.</p>
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
