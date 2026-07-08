import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, ShieldCheck } from "lucide-react";
import LeaveReviewCTA from "@/components/LeaveReviewCTA";
import TreatmentInternalLinks from '@/components/TreatmentInternalLinks';

export default function VeteransAcupunctureHonoluluAieaPage() {
  return (
    <>
      <Helmet>
        <title>VA Community Care Acupuncture for Oahu Veterans | AcuTherapy Clinics</title>
        <meta name="description" content="Oahu veterans can receive 100% covered acupuncture and pain management care. We are an authorized VA Community Care Network (CCN) provider. Learn how to get a referral." />
        <link rel="canonical" href="https://acutherapy.com/veterans-acupuncture-honolulu-aiea" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Hawaii VA Community Care Acupuncture: $0 Copay Pain Relief for Oahu Veterans",
            "description": "Comprehensive guide for military veterans in Hawaii to receive fully covered acupuncture and physical therapy via the VA Community Care Network (CCN) / TriWest.",
            "url": "https://acutherapy.com/veterans-acupuncture-honolulu-aiea",
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
      <section className="bg-blue-950 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Veterans medical care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm backdrop-blur-sm">
              <ShieldCheck size={16} /> <span>100% Covered - VA CCN Provider</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 font-medium text-sm backdrop-blur-sm">
              VA Community Care / TriWest Accepted
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight font-serif">Hawaii VA Community Care Acupuncture</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Providing $0 Copay Pain Relief for Oahu Veterans at Honolulu & Aiea clinics.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-semibold mb-8">
              Military veterans who served our country deserve the highest level of clinical care for their injuries. At AcuTherapy Clinics, we are proud to be an authorized <strong>VA Community Care Network (CCN)</strong> provider under TriWest, delivering advanced acupuncture, medical massage, and cupping treatments with $0 out-of-pocket costs.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              If you suffer from service-connected chronic pain, PTSD, sleep disturbances, or joint mobility limitations, you can receive fully covered clinical acupuncture in Honolulu or Aiea.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Why VA CCN Covers Acupuncture at 100%</h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 my-8 shadow-sm space-y-4">
              <p className="text-slate-700 text-lg leading-relaxed">
                The Department of Veterans Affairs recognizes clinical acupuncture as an approved, evidence-based modality for pain management and rehabilitation. Once authorized:
              </p>
              <ul className="text-slate-700 space-y-3 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-extrabold mt-0.5">✔</span> 
                  <span><strong>No Copays or Deductibles:</strong> Veterans pay absolutely nothing for authorized care under the VA CCN program.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-extrabold mt-0.5">✔</span>
                  <span><strong>Comprehensive Therapy:</strong> Treatment programs can include clinical acupuncture, electro-acupuncture, and clinical massage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-extrabold mt-0.5">✔</span>
                  <span><strong>Convenient Oahu Locations:</strong> Choose either our Honolulu (Liliha) or Aiea (Pali Momi) clinic for your care.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Conditions We Treat for Oahu Veterans</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Dr. David Cai applies over 30 years of clinical experience to address common veteran health issues, including:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li>
                <strong>Chronic Back & Neck Pain:</strong> Releasing spinal nerve compression, muscle spasms, and structural strain.
              </li>
              <li>
                <strong>Joint Arthritis & Sports Injuries:</strong> Improving joint range of motion and local blood circulation.
              </li>
              <li>
                <strong>PTSD, Anxiety & Insomnia:</strong> Calming the sympathetic nervous system and promoting deep physical and mental relaxation.
              </li>
              <li>
                <strong>Whiplash & Headaches:</strong> Relieving headaches, cervical stiffness, and myofascial tension.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How to Get a VA Referral to AcuTherapy Clinics</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              To have your treatments covered under the VA Community Care Network, follow these simple steps:
            </p>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 my-8 shadow-sm space-y-4">
              <ol className="space-y-4 text-slate-700 text-lg leading-relaxed list-decimal pl-6 font-medium">
                <li>
                  <strong>Talk to Your VA Doctor:</strong> Schedule an appointment with your primary care provider at the VA clinic.
                </li>
                <li>
                  <strong>Request a Referral:</strong> Tell your VA doctor you want a referral for acupuncture treatment at <strong>AcuTherapy Clinics</strong> (Honolulu or Aiea locations).
                </li>
                <li>
                  <strong>Wait for Authorization:</strong> The VA will submit the authorization request through TriWest. Once approved, TriWest will send the authorization letter to us, and we will call you immediately to schedule your initial session.
                </li>
              </ol>
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Have Questions About VA CCN Coverage?</h2>
              <p className="text-lg text-blue-700 mb-8">
                If you have an existing VA referral or want to check your authorization status, call or text us at <strong>(808) 528-7177</strong>. Our billing specialists are ready to assist you.
              </p>
              <a href="https://acutherapy.janeapp.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all">
                  Schedule Initial Consultation via JaneApp
                </Button>
              </a>
            </div>

            <TreatmentInternalLinks currentPage="veterans" />
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 h-2 w-full"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">VA CCN Referrals</h3>
                <p className="text-slate-600 mb-8 text-sm">
                  We are fully registered with the VA Community Care Network via TriWest to provide zero-copay treatments.
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
