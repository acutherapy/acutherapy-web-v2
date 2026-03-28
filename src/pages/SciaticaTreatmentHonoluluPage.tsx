import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity, HelpCircle } from "lucide-react";

export default function SciaticaTreatmentHonoluluPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/sciatica-treatment-honolulu" />
        <title>Sciatica Treatment Honolulu | Fast Nerve Pain Relief | AcuTherapy Clinics</title>
        <meta name="description" content="Suffering from shooting leg pain and sciatica in Honolulu? Get fast, non-surgical relief using targeted medical acupuncture to decompress the sciatic nerve." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
            alt="Sciatica Treatment Honolulu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Specialized Nerve Pain Relief</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Sciatica Treatment in Honolulu</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Stop the shooting, burning leg pain naturally. Advanced acupuncture protocols for sciatic nerve decompression.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              If you are feeling a sudden, sharp, burning pain shooting from your lower back down through your buttocks and into your leg, you are likely suffering from sciatica. It can make sitting, walking, or even sleeping feel completely unbearable. At AcuTherapy Clinics, our specialized <strong>Sciatica Treatment in Honolulu</strong> effectively releases the muscular tension compressing your sciatic nerve, providing dramatic pain relief without endless painkillers or invasive surgery.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Exactly Causes Sciatica Nerve Pain?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Sciatica isn't a disease itself; it’s a symptom of underlying mechanical compression. The sciatic nerve is the longest and thickest nerve in the human body. When surrounding tissues—such as a herniated disc in the lower lumbar spine, or a severely tight piriformis muscle in the buttocks—pinch or irritate this massive nerve, it sends violent electrical pain signals all the way down the leg to the toes. 
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How Our Sciatica Acupuncture Helps</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our clinical approach focuses on decompressive and anti-inflammatory therapy. By inserting micro-fine acupuncture needles directly into the deeply locked motor points of the glutes, lumbar paraspinals, and piriformis muscles, we force the muscle fibers to mechanically release. This physically takes the overwhelming pressure off the sciatic nerve. Simultaneously, the treatment heavily downregulates the localized nerve-end inflammation that makes sciatica feel like a "burning" sensation.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect & Real Patient Results</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Dr. Cai will evaluate your range of motion and locate the exact point of nerve impingement. Depending on your symptoms, we may also utilize highly effective Medical Cupping Therapy or Medical Massage to assist the acupuncture in breaking up deep fascial restrictions.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
              <p className="text-lg text-slate-800 italic font-medium">
                "Many sciatica patients report that the sharp, shooting leg pain reduces into a dull ache within just a few treatments, eventually fading away completely as the surrounding core muscles stop spasming."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Who Is This For?</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li><strong>Severe Leg Radiculopathy:</strong> Pain, numbness, or tingling shooting down one leg.</li>
              <li><strong>Piriformis Syndrome sufferers:</strong> Intense pain deep in the buttock muscle.</li>
              <li><strong>Herniated Disc Patients:</strong> Looking for a conservative, non-surgical pathway to manage spinal pain.</li>
              <li><strong>Pregnant Women:</strong> Sciatica is incredibly common during pregnancy; acupuncture provides safe, drug-free relief.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Can acupuncture cure my sciatica permanently?</h3>
                <p className="text-slate-600">Acupuncture is highly successful at resolving the active inflammatory phase and releasing the muscular compression causing sciatica. Once the nerve heals and the cycle of pain is broken, patients often experience permanent relief, provided they maintain good posture and core health.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> How many treatments will it take for the leg pain to stop?</h3>
                <p className="text-slate-600">Minor sciatica flair-ups can improve significantly in 3-5 sessions. However, if the nerve has been compressed for months due to a severe disc issue, a structured plan of 8-12 sessions is typically required to calm the deeply aggravated nerve.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Will you place needles in my leg?</h3>
                <p className="text-slate-600">Yes, we will place needles locally around the origin of the pain (lower back/glute) as well as distally along the meridian pathways of your leg, calf, and even ankle. These distal points are incredibly powerful at directing blood flow to the sciatic nerve.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Related Treatments</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <Link to="/back-pain-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Lower Back Pain Acupuncture
              </Link>
              <Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Medical Massage (Tui-Na)
              </Link>
              <Link to="/auto-accident-injury-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Auto Accident Back Injuries
              </Link>
              <Link to="/cupping-therapy-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Cupping Decompression
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Serving Honolulu & The Island of Oahu</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Don’t let severe leg nerve pain stop you from walking and living normally. Our Honolulu and Aiea clinics proudly treat sciatica patients from all over the island:
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
                <Link to="/acupuncture-honolulu" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Honolulu</Link>
                <Link to="/acupuncture-waikiki" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Waikiki</Link>
                <Link to="/acupuncture-pearl-city" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Pearl City / Aiea</Link>
                <Link to="/acupuncture-ala-moana" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Ala Moana</Link>
            </div>

          
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Causes Sciatica?</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">Sciatica can be triggered by a variety of factors including chronic stress, poor posture, repetitive strain, or acute injuries. Over time, these factors create blockages in blood circulation and nerve function, leading to persistent discomfort.</p>

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
                      <p className="text-slate-600 text-sm">Most major Hawaii health insurance providers accepted, including No-Fault PIP.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">Patient Reviews</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"The pain down my left leg was keeping me up all night. Dr. Cai identified exactly where my sciatic nerve was trapped. By the 4th session, the sharp nerve pain completely vanished. Incredible relief."</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">JL</div>
                 <div>
                    <p className="text-white font-semibold text-sm">Jason L.</p>
                    <p className="text-blue-400 text-xs">Hawaii Kai Resident</p>
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
