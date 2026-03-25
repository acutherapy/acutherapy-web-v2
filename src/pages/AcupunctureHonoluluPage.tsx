import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity, HelpCircle, ArrowRight } from "lucide-react";

export default function AcupunctureHonoluluPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/acupuncture-honolulu" />
        <title>Acupuncture Honolulu | Best Pain & Injury Treatment | AcuTherapy Clinics</title>
        <meta name="description" content="Looking for acupuncture in Honolulu? Dr. David Cai specializes in pain management, auto accident recovery, and holistic treatments. Book your session today." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
            alt="Acupuncture Honolulu Hawaii" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Trusted Honolulu Acupuncture Clinic</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Acupuncture in Honolulu</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Medical-grade treatments customized for lasting pain relief, injury recovery, and optimal wellness.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              If you are experiencing chronic pain, an unexpected auto injury, or stress-related health issues in Honolulu, acupuncture may help relieve your pain, restore natural balance, and improve your overall daily function. At AcuTherapy Clinics, Dr. David Cai utilizes over 30 years of clinical experience to provide the gold standard of <strong>Acupuncture in Honolulu</strong>.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Causes Chronic Pain & Imbalance?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Many patients struggling with chronic issues don't realize that standard lifestyle factors—such as poor posture, repetitive stress, high-pressure work environments, or old injuries—can severely disrupt the body's natural healing systems. When nerve pathways become inflamed or muscular fascia binds up, the result is localized pain that typical over-the-counter medications only mask temporarily.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How Acupuncture Helps</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Unlike treatments that simply dull sensory responses, professional acupuncture works at the physiological level. By placing ultra-fine, sterile needles at specific meridian points, we trigger the nervous system to release natural endorphins and anti-inflammatory neuropeptides. Furthermore, the micro-trauma from the needles heavily increases localized blood circulation, rushing oxygen and healing nutrients to the deeply damaged tissues that need them most.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect & Real Patient Results</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              During your first visit, Dr. Cai will conduct a thorough diagnostic assessment to map out the exact root cause of your discomfort. The needle insertion itself is practically painless—most patients describe a unique sensation of warmth, heaviness, or tingling, which is known as "De Qi" (the arrival of energy). 
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
              <p className="text-lg text-slate-800 italic font-medium">
                "Many patients report feeling significantly lighter, deeply relaxed, and with a clearer range of motion after just a few initial sessions. The tension physically melts away."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Who Is This For?</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li><strong>Chronic Pain Sufferers:</strong> Long-term back, neck, or joint pain that hasn't responded to other physical therapies.</li>
              <li><strong>Auto Accident Victims:</strong> Rapid reduction of whiplash inflammation and soft tissue damage (100% covered under Hawaii PIP auto insurance).</li>
              <li><strong>High-Stress Professionals:</strong> Seeking natural nervous system regulation, improved sleep, and anxiety relief.</li>
              <li><strong>Sports Injuries:</strong> Athletes looking to speed up muscle recovery and resolve stubborn tendinitis.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> How many sessions are needed?</h3>
                <p className="text-slate-600">While many patients feel a noticeable decrease in pain after just 1-2 sessions, chronic or severe conditions generally require a comprehensive treatment plan of 6-12 sessions to permanently retrain the nervous system and heal the underlying tissue.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Does acupuncture hurt?</h3>
                <p className="text-slate-600">No. Medical acupuncture needles are hair-thin and flexible, vastly different from hypodermic needles used for injections. You may feel a slight pinch upon insertion, followed by a deeply relaxing, dull therapeutic ache.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Is the treatment safe?</h3>
                <p className="text-slate-600">Absolutely. Dr. Cai is a highly experienced Licensed Acupuncturist (L.Ac.). We use only single-use, sterile, disposable needles in a pristine clinical environment, ensuring the highest medical safety standards.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Related Treatments</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <Link to="/back-pain-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Acupuncture for Back Pain
              </Link>
              <Link to="/sciatica-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Sciatica Relief
              </Link>
              <Link to="/auto-accident-injury-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Auto Accident PIP Cases
              </Link>
              <Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Medical Massage
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Serving Honolulu & Nearby Areas</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our primary clinics in Honolulu (Liliha) and Aiea (Pearl City) are positioned to serve the greater Oahu community effectively. We warmly welcome patients from:
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
                <Link to="/acupuncture-waikiki" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Waikiki</Link>
                <Link to="/acupuncture-ala-moana" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Ala Moana</Link>
                <Link to="/acupuncture-kaimuki" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Kaimuki</Link>
                <Link to="/acupuncture-kahala" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Kahala</Link>
                <Link to="/acupuncture-hawaii-kai" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Hawaii Kai</Link>
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
