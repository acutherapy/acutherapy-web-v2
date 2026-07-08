import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, ShieldCheck } from "lucide-react";
import LeaveReviewCTA from "@/components/LeaveReviewCTA";
import TreatmentInternalLinks from '@/components/TreatmentInternalLinks';

export default function OahuWorkersCompAcupunctureApprovalPage() {
  return (
    <>
      <Helmet>
        <title>Hawaii Workers' Comp Acupuncture Approval Page | AcuTherapy Clinics</title>
        <meta name="description" content="Hurt at work on Oahu? Learn how to get Hawaii Workers' Comp authorization for acupuncture and medical massage. 100% covered rehabilitation with $0 out-of-pocket." />
        <link rel="canonical" href="https://acutherapy.com/oahu-workers-comp-acupuncture-approval" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Hurt at Work on Oahu? How to Get Hawaii Workers' Comp Authorization for Acupuncture & Medical Massage",
            "description": "Comprehensive guide on securing Workers' Compensation authorization for clinical acupuncture and massage therapy after a workplace injury in Hawaii.",
            "url": "https://acutherapy.com/oahu-workers-comp-acupuncture-approval",
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
            alt="Workers compensation rehabilitation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm backdrop-blur-sm">
              <ShieldCheck size={16} /> <span>100% Covered - No Copays</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 font-medium text-sm backdrop-blur-sm">
              Hawaii Workers' Compensation Specialists
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight font-serif">Hurt at Work on Oahu?</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">How to Get Hawaii Workers' Comp Authorization for Acupuncture & Medical Massage.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-semibold mb-8">
              An unexpected employment injury can completely disrupt your livelihood. Whether you suffered severe lower back pain from heavy lifting (重物搬运导致腰伤) in a Kapolei warehouse, developed repetitive strain injuries at a Honolulu desk job, or sustained a slip-and-fall injury in Pearl City, you are legally entitled to comprehensive rehabilitation.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              AcuTherapy Clinics is a leading clinical facility on Oahu specializing in getting injured workers out of pain and safely back to peak functional capacity.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Navigating the Hawaii Workers' Compensation Process</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Many patients are unaware that Hawaii Workers' Comp covers acupuncture and therapeutic physical massage when prescribed for work-related musculoskeletal injuries.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              To ensure your treatments are 100% covered with zero financial friction, our specialized billing team takes the burden off your shoulders:
            </p>

            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li>
                <strong>Direct Adjuster Liaison:</strong> We contact your Workers' Comp insurance adjuster directly to secure formal treatment authorization.
              </li>
              <li>
                <strong>Progress Reports:</strong> We submit timely, compliant medical progress reports to your primary treating physician and case manager to ensure continuous care approval.
              </li>
              <li>
                <strong>Full Financial Coverage:</strong> Once authorized, all clinical acupuncture, dry needling, and clinical massage treatments are fully paid by the insurance. You pay nothing out of pocket.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Root-Cause Pain Resolution with Dr. David Cai</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Treating an employment injury requires clinical precision. Dr. David Cai utilizes targeted, evidence-based physical medicine to accelerate tissue healing:
            </p>

            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li>
                <strong>Sciatica & Pinched Nerves:</strong> Relieves severe mechanical nerve compression caused by lifting accidents or prolonged posture strain.
              </li>
              <li>
                <strong>Myofascial Trigger Point Needling:</strong> Instantly deactivates localized painful muscle spasms, restoring full joint mobility.
              </li>
              <li>
                <strong>Therapeutic Massage (Tuina) & Cupping:</strong> Decompresses tissues manually, breaks up deep myofascial restriction, and facilitates rapid repair of damaged fibers.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">3 Steps to Get Your Treatments Approved</h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 my-8 shadow-sm space-y-4">
              <ol className="space-y-4 text-slate-700 text-lg leading-relaxed list-decimal pl-6">
                <li>
                  <strong>Report Your Injury:</strong> File an incident report with your employer immediately to obtain your Workers' Comp Claim Number.
                </li>
                <li>
                  <strong>Get a Prescription:</strong> Ask your primary treating physician (PCP or MD) for a written prescription stating: <em>"Acupuncture and medical massage evaluation and treatment for work injury."</em>
                </li>
                <li>
                  <strong>Contact AcuTherapy Clinics:</strong> Send us your claim number, insurance carrier, adjuster name/phone, and doctor's prescription. We will handle all the authorization paperwork directly with the carrier.
                </li>
              </ol>
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Start Your Recovery?</h2>
              <p className="text-lg text-blue-700 mb-8">
                Do not wait for your pain to become chronic. Text your claim details to <strong>(808) 528-7177</strong> or book an initial consultation online to let us start the approval process for you.
              </p>
              <a href="https://acutherapy.janeapp.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all">
                  Book Consultation via JaneApp
                </Button>
              </a>
            </div>

            <TreatmentInternalLinks currentPage="workers-comp" />
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 h-2 w-full"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
                <p className="text-slate-600 mb-8 text-sm">
                  We specialize in handling Hawaii Workers' Comp authorizations for acupuncture and massage.
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
      <LeaveReviewCTA location="aiea" />
    </>
  );
}
