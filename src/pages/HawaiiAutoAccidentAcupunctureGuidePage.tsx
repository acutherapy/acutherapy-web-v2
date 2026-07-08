import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, ShieldCheck } from "lucide-react";
import LeaveReviewCTA from "@/components/LeaveReviewCTA";
import TreatmentInternalLinks from '@/components/TreatmentInternalLinks';

export default function HawaiiAutoAccidentAcupunctureGuidePage() {
  return (
    <>
      <Helmet>
        <title>Hawaii Auto Accident PIP Acupuncture Guide | AcuTherapy Clinics</title>
        <meta name="description" content="Suffering from whiplash or back pain after a car crash on Oahu? Get 100% covered care ($0 out-of-pocket) under Hawaii PIP No-Fault insurance. We handle all paperwork." />
        <link rel="canonical" href="https://acutherapy.com/hawaii-auto-accident-acupuncture-guide" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Hawaii Auto Accident PIP Acupuncture Guide: Get 100% Covered Whiplash & Back Pain Relief on Oahu",
            "description": "Comprehensive guide on using Hawaii Auto Accident PIP benefits for acupuncture, medical massage, and fire cupping after a car crash on Oahu. 100% covered, $0 out-of-pocket costs.",
            "url": "https://acutherapy.com/hawaii-auto-accident-acupuncture-guide",
            "publisher": {
              "@type": "MedicalOrganization",
              "name": "AcuTherapy Clinics",
              "url": "https://acutherapy.com"
            }
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
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm backdrop-blur-sm">
              <ShieldCheck size={16} /> <span>100% Covered - $0 Out-of-Pocket</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 font-medium text-sm backdrop-blur-sm">
              Hawaii PIP No-Fault Auto Insurance Specialists
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Hawaii Auto Accident PIP Acupuncture Guide</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Get 100% Covered Whiplash & Back Pain Relief on Oahu with zero out-of-pocket expenses.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-semibold mb-8">
              If you were recently involved in a car crash in Hawaii, your body has likely sustained micro-trauma from the sudden kinetic impact. Whiplash (颈部挥鞭伤), acute lower back spasms, and delayed shoulder stiffness are the most common injuries after a rear-end collision on Oahu.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              At AcuTherapy Clinics, we specialize in medical-grade rehabilitation for victims of motor vehicle accidents at our Honolulu (Liliha) and Aiea (Pali Momi) facilities. We make it easy to recover quickly and safely.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Why You Pay $0 Out-of-Pocket for Car Crash Rehab in Hawaii</h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 my-8 shadow-sm space-y-4">
              <p className="text-slate-700 text-lg leading-relaxed">
                Under Hawaii state law, every registered motor vehicle insurance policy includes <strong>Personal Injury Protection (PIP)</strong> medical benefits. This is a "No-Fault" system, meaning your auto insurance covers your healthcare costs regardless of who was at fault for the accident.
              </p>
              <ul className="text-slate-700 space-y-3 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-extrabold mt-0.5">✔</span> 
                  <span><strong>100% Medical Coverage:</strong> Your Hawaii Auto PIP typically covers your medical acupuncture, clinical massage, and fire cupping at 100%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-extrabold mt-0.5">✔</span>
                  <span><strong>Zero Out-of-Pocket Costs:</strong> There are no co-pays or deductibles collected from you for authorized treatments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-extrabold mt-0.5">✔</span>
                  <span><strong>No Premium Increases:</strong> Utilizing your PIP benefits to heal your body does NOT increase your personal auto insurance monthly premium.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Advanced Medical Modalities Directed by Dr. David Cai</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our Clinical Director, <strong>Dr. David Cai</strong>, combines over 30 years of soft-tissue clinical experience to build a customized, fast-acting trauma recovery plan. Your integrated session will target the root source of pain using:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li>
                <strong>Clinical Acupuncture:</strong> Resets the traumatized nervous system, drastically lowers deep spinal inflammation, and shuts down whiplash-induced tension migraines.
              </li>
              <li>
                <strong>Medical Massage Therapy:</strong> Safely breaks down fresh micro-scar tissue and fascial adhesions forming along the cervical spine and shoulders.
              </li>
              <li>
                <strong>Traditional Fire Cupping:</strong> Draws out stagnant blood, breaks up deep bruising, and floods the impacted muscular knots with fresh oxygenated blood to accelerate recovery.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">We Handle All Insurance Paperwork & Attorney Coordination</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We understand that dealing with insurance adjusters after a car accident is incredibly stressful. Our experienced administrative team handles 100% of the insurance billing, claim documentation, and verification paperwork directly with your carrier.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              If you are working with a personal injury lawyer or auto accident attorney on Oahu, we seamlessly coordinate and provide compliant medical chart notes to ensure your legal case runs smoothly while you focus purely on getting better.
            </p>

            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Start Your Recovery Journey</h2>
              <p className="text-lg text-blue-700 mb-8">
                Ready to unlock your $0 PIP recovery care? Text your Claim Number and Insurance Carrier Name to <strong>(808) 528-7177</strong> for immediate verification, or schedule your initial evaluation online.
              </p>
              <a href="https://acutherapy.janeapp.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all">
                  Book Initial Evaluation via JaneApp
                </Button>
              </a>
            </div>

            <TreatmentInternalLinks currentPage="auto-accident" />
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 h-2 w-full"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
                <p className="text-slate-600 mb-8 text-sm">
                  Let us handle the insurance paperwork while you focus on healing your body.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="https://acutherapy.janeapp.com" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">
                      Book Online Today
                    </Button>
                  </a>
                  <Button variant="outline" className="w-full h-14 text-lg border-2 border-slate-200" onClick={() => window.location.href = 'tel:+18085287177'}>
                    <PhoneCall className="mr-2 h-5 w-5 text-blue-600" /> Call Liliha: (808) 528-7177
                  </Button>
                  <Button variant="outline" className="w-full h-14 text-lg border-2 border-slate-200" onClick={() => window.location.href = 'tel:+18084521900'}>
                    <PhoneCall className="mr-2 h-5 w-5 text-emerald-600" /> Call Aiea: (808) 452-1900
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 text-left space-y-6">
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Honolulu Clinic (Liliha)</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      1650 Liliha St, Suite 208<br />
                      Honolulu, HI 96817<br />
                      Ph: (808) 528-7177
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Aiea / Pearl City Clinic</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      98-211 Pali Momi St, Suite 604<br />
                      Aiea, HI 96701<br />
                      Ph: (808) 452-1900
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

        </div>
      </section>

      {/* Leave Review Section */}
      <LeaveReviewCTA location="honolulu" />
    </>
  );
}
