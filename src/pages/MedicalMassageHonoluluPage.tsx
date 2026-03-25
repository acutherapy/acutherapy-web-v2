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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Clinical Structural Release</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Medical Massage in Honolulu</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Not a spa treatment. This is highly targeted, clinical muscular rehabilitation designed to break down tough scar tissue and release extreme tension.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
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

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How It Accelerates Your Injury Recovery</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              AcuTherapy Clinics utilizes medical massage as a powerful complementary tool. While our acupuncture needles reboot the nervous system and decrease the chemical inflammation, our manual medical massage handles the heavy physical lifting:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li><strong>Physical Decalcification:</strong> Breaking down crunchy, calcified knots around the shoulder blades and lumbar spine.</li>
              <li><strong>Joint Mobilization:</strong> Safely opening restricted joint spaces to allow fresh synovial fluid back in, vital for Frozen Shoulder and Hip Pain.</li>
              <li><strong>Lymphatic Pushing:</strong> Manually flushing trapped edema (swelling) and inflammatory toxins away from an injury site toward the lymph nodes.</li>
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
                      <p className="text-slate-600 text-sm">Most major Hawaii health insurance providers accepted. No-Fault PIP 100% Covered.</p>
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
