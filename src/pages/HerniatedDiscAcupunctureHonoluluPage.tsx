import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity, HelpCircle, ArrowRight } from "lucide-react";

export default function HerniatedDiscAcupunctureHonoluluPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/herniated-disc-acupuncture-honolulu" />
        <title>Herniated Disc Treatment Honolulu | Spinal Acupuncture | AcuTherapy</title>
        <meta name="description" content="Effective herniated disc treatment and bulging disc relief in Honolulu. Dr. David Cai specializes in using acupuncture to reduce severe lumbar nerve compression." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
            alt="Herniated Disc Treatment Honolulu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Non-Surgical Disc Rehabilitation</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Herniated Disc Treatment in Honolulu</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Avoid lumbar spine surgery. Powerful medical acupuncture protocols for relieving severe bulging disc nerve compression.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              A herniated or "slipped" disc is one of the most agonizing physiological conditions a person can experience. When the soft inner jelly of a spinal disc pushes out and compresses against a spinal nerve, it causes intense, debilitating lower back pain that often radiates terribly down your legs. Before committing to highly invasive neurological surgery, many local doctors and physical therapists recommend our specialized <strong>Herniated Disc Acupuncture in Honolulu</strong> for managing the severe pain and drastically reducing the inflammation.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Causes a Bulging or Herniated Disc?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Between the vertebrae of your spine are rubbery cushions (discs) that act as shock absorbers. Due to sudden trauma (like an auto accident), heavy and improper lifting, or natural age-related spinal degeneration, the tougher exterior of this disc can tear.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              When this happens, the highly acidic inner jelly leaks out directly onto the sensitive spinal nerve root. This chemical burn, combined with the physical mechanical compression of the bulge, causes the intense, radiating pain and severe muscular spasms that lock you to the bed.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How Acupuncture Relieves Deep Spinal Compression</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              While acupuncture does not literally physically reposition the spilled disc material inside your spine, it radically changes the environment surrounding the injury. A massive component of a herniated disc's pain comes from the resulting massive reactive muscle spasms in your lower back. Your body "locks up" to protect the weakened spine, creating a secondary layer of devastating pain.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              By using precise neuro-acupuncture along the local lumbar spine and bilateral meridian points, we force the deeply locked paraspinal muscles to completely relax. This physical release takes significant mechanical pressure off the affected disc. Furthermore, the needles heavily stimulate systemic anti-inflammatories, drastically cooling down the "chemical burn" on the nerve root. 
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect & Real Patient Results</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              At AcuTherapy Clinics, you are in the hands of an experienced TCM professional, Dr. David Cai. We will target the treatment to your specific L4-L5 or L5-S1 lumbar levels depending on your MRI findings.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
              <p className="text-lg text-slate-800 italic font-medium">
                "Patients who come to us heavily reliant on pain-killers to sleep often find that, as the muscle spasms finally release through the acupuncture, the burning sensation down the leg begins to pull back up and disappear entirely."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Can this replace the need for back surgery?</h3>
                <p className="text-slate-600">In many cases, yes. A high percentage of herniated discs can re-absorb and heal naturally over time if the massive surrounding pain and inflammation are properly managed. Acupuncture provides a powerful, non-invasive bridge to heal without going under the knife.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> How many sessions are required for a disc injury?</h3>
                <p className="text-slate-600">Disc injuries are severe structural issues. We typically recommend a highly focused protocol of 10-15 frequent sessions alongside rest or physical therapy to safely guide the spine out of the acute neuro-inflammatory phase.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Is the needle insertion safe directly near the spine?</h3>
                <p className="text-slate-600">Yes. The needles only penetrate the outer layers of the muscles and fascia to stimulate the nervous system. They never come dangerously close to puncturing the actual spinal cord or the disc itself.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Related Treatments</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <Link to="/back-pain-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Severe Lower Back Pain
              </Link>
              <Link to="/sciatica-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Sciatica Nerve Pain Relief
              </Link>
              <Link to="/auto-accident-injury-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Auto Accident Spinal Injuries
              </Link>
              <Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Medical Massage
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Serving Honolulu & Surrounding Communities</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Managing a disc injury demands absolute clinical precision. Patients trust our expertise across all of Oahu:
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
                <Link to="/acupuncture-honolulu" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Honolulu</Link>
                <Link to="/acupuncture-ala-moana" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Ala Moana</Link>
                <Link to="/acupuncture-kaimuki" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Kaimuki</Link>
                <Link to="/acupuncture-pearl-city" className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Pearl City / Aiea</Link>
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
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"I was scheduled for back surgery due to an L5 disc herniation. The pain was awful. A friend recommended Dr. Cai. Within two months of intensive acupuncture, the extreme spasms released completely, and my orthopedic canceled the surgery."</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">TH</div>
                 <div>
                    <p className="text-white font-semibold text-sm">Thomas H.</p>
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
