

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, } from "lucide-react";

export default function IsAcupunctureCoveredByInsuranceHawaiiPage() {
  return (
    <>
      <Helmet>
        <title>Is Acupuncture Covered By Insurance Hawaii | Honolulu Acupuncture Guide</title>
        <meta name="description" content="Learn more about Is Acupuncture Covered By Insurance Hawaii. Dr. David Cai from AcuTherapy Clinics answers your questions about acupuncture efficacy and treatment processes." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Is Acupuncture Covered By Insurance Hawaii | Honolulu Acupuncture Guide",
            "headline": "Is Acupuncture Covered By Insurance Hawaii",
            "description": "Learn more about Is Acupuncture Covered By Insurance Hawaii. Dr. David Cai from AcuTherapy Clinics answers your questions about acupuncture efficacy and treatment processes.",
            "url": "https://acutherapy.com/is-acupuncture-covered-by-insurance-hawaii",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "AcuTherapy Clinics",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1650 Liliha St, Suite 208",
                "addressLocality": "Honolulu",
                "addressRegion": "HI",
                "postalCode": "96817",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 21.321289,
                "longitude": -157.860155
              },
              "telephone": "+1-808-528-7177"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Trusted Honolulu Pain Clinic</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Is Acupuncture Covered By Insurance Hawaii</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Medical-grade treatments customized for lasting relief and recovery in Honolulu.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">

          <article className="md:col-span-8">

            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              At AcuTherapy Clinics, we believe quality care should be accessible. If you are exploring your options and wondering <strong>is acupuncture covered by insurance in Hawaii</strong>, Dr. David Cai and our administrative team are here to help you navigate your coverage so you can focus on healing.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
              <img src="/images/traditional-chinese-herbs.jpg" alt="Traditional Chinese Herbs" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800'; }} />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8 pt-16 text-white text-lg font-medium">Holistic Healing Methods inside AcuTherapy</figcaption>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Insurance & Payment Options in Hawaii</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We accept most major insurance plans in Hawaii and offer transparent pricing for self-pay patients. Verification of benefits is required before your first appointment, so please be sure to bring your insurance card. Below is an overview of the specialized coverages we handle.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-blue-500"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">No-Fault (Auto Accidents)</h3>
                <p className="text-lg text-slate-700 mb-4">
                  If you were injured in a car accident, your acupuncture treatment may be <strong>100% covered by auto insurance</strong> with no out-of-pocket cost to you.
                </p>
                <ul className="list-disc pl-5 text-slate-700 space-y-2">
                  <li>We handle all the billing paperwork.</li>
                  <li>Comprehensive care for whiplash, back pain, and concussions.</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Workers' Compensation</h3>
                <p className="text-lg text-slate-700 mb-4">
                  Injured on the job? We are fully authorized providers for Workers' Comp cases in Hawaii.
                </p>
                <ul className="list-disc pl-5 text-slate-700 space-y-2">
                  <li>Focus on return-to-work rehabilitation.</li>
                  <li>Requires an open claim number and physician referral.</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
              <strong>Have Private Health Insurance?</strong> Many private plans (such as HMSA, Kaiser, HMAA, UHA, etc.) are increasingly expanding their coverage for acupuncture, especially for chronic pain management. Coverage varies heavily by your specific policy, so we encourage you to contact us to verify your exact benefits.
            </p>

            <div className="bg-amber-50 p-8 rounded-xl border border-amber-200 shadow-sm relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 w-2 h-full bg-amber-500"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Medicare Acceptance: Giving Back to Our Community</h3>
              <p className="text-lg text-slate-700">
                As our local Hawaii population ages, chronic pain such as lower back pain becomes a significant barrier to a fulfilling life. To support our kupuna (elders) and give back to the community that has supported us for decades, <strong>we are proud to accept Medicare for acupuncture services</strong> for patients whose plans include this benefit.
              </p>
              <p className="text-lg text-slate-700 mt-4">
                Navigating Medicare can be confusing, but our dedicated staff is here to check your specific policy limits and ensure you receive the highest standard of care without unnecessary financial burden.
              </p>
            </div>


            <div className="mt-16 mb-16 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-slate-100 relative">
                  <img
                    src="/images/dr-david-cai-portrait.jpg"
                    alt="Dr. David Cai, L.Ac., L.M.T."
                    className="w-full h-full object-cover min-h-[400px]"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800'; }}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6 text-white text-center">
                    <span className="font-bold text-xl">Dr. David Cai</span>
                    <p className="text-blue-300 text-sm">L.Ac., L.M.T.</p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Clinical Director & Founder</h3>
                  <h4 className="text-3xl font-extrabold text-slate-900 mb-4">Leading Honolulu Pain Clinic</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: 'With over 30 years of clinical experience, <strong>Dr. David Cai</strong> is a master of Traditional Chinese Medicine (TCM) and advanced acupuncture protocols. He specializes in severe pain management, sports injuries, and complex auto accident recoveries, bringing world-class holistic healthcare to the Honolulu community.' }}></p>
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <img src="/images/acutherapy-medical-team.jpg" alt="AcuTherapy Clinics Medical Team" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    <div>
                      <h5 className="font-bold text-slate-900 mb-1">AcuTherapy Clinics Medical Team</h5>
                      <p className="text-sm text-slate-500 italic leading-relaxed">"Our multidisciplinary medical team is highly trained and committed to finding the root cause of your condition, providing relief that lasts."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Explore Related Treatments & Information</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">


              <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                <ShieldCheck className="text-blue-500 mr-3 h-5 w-5" /> Acupuncture Honolulu
              </Link>
              <Link to="/contact-honolulu-acupuncture" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                <PhoneCall className="text-emerald-500 mr-3 h-5 w-5" /> Contact Us
              </Link>

            </div>

          
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Causes Is Covered By Insurance Hawaii?</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">Is Covered By Insurance Hawaii can be triggered by a variety of factors including chronic stress, poor posture, repetitive strain, or acute injuries. Over time, these factors create blockages in blood circulation and nerve function, leading to persistent discomfort.</p>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect During Your Session</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">During your first experience, Dr. David Cai will conduct a thorough assessment to understand your unique condition. The treatment itself is deeply relaxing. Many patients notice a distinct change in symptoms, experiencing immediate lightness and reduced tension right after the needles are gently placed.</p>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Who Is This For?</h2>
<ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-6">
<li>Individuals suffering from chronic pain who have not found relief through conventional methods.</li>
<li>High-stress professionals seeking natural nervous system regulation.</li>
<li>Athletes or individuals recovering from an injury needing accelerated healing.</li>
</ul>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">FAQ</h2>
<div className="space-y-6 mb-12">
<div><h4 className="font-bold text-lg text-slate-900">Q1: How many sessions are needed for Is Covered By Insurance Hawaii?</h4><p className="text-slate-700">A: Most patients notice significant relief within 3 to 5 sessions, though chronic conditions may require a longer treatment plan to address the root cause and ensure lasting results.</p></div>
<div><h4 className="font-bold text-lg text-slate-900">Q2: Does the treatment hurt?</h4><p className="text-slate-700">A: No. We use ultra-fine needles. Most feel only a deep, relaxing sensation. Many even fall asleep!</p></div>
<div><h4 className="font-bold text-lg text-slate-900">Q3: Is it safe?</h4><p className="text-slate-700">A: Absolutely. Acupuncture is a highly safe, non-invasive alternative to surgery and heavy medications.</p></div>
</div>

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
                <p className="text-slate-600 mb-8 text-sm">Bridge the gap to a pain-free life today.</p>
                <div className="flex flex-col gap-4">
                  <Link to="/book-appointment">

                    <Link to="/book-appointment">


                      <Link to="/book-appointment">



                        <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">



                          <Calendar className="mr-2" /> Schedule Online



                        </Button>



                      </Link>


                    </Link>

                  </Link>
                  <Button variant="outline" className="w-full h-14 text-lg border-2 border-slate-200" onClick={() => window.location.href = 'tel:+18085287177'}>
                    <PhoneCall className="mr-2 h-5 w-5 text-blue-600" /> (808) 528-7177
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 text-left">
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Honolulu Clinic (Liliha)</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        1650 Liliha St, Suite 208<br />Honolulu, HI 96817
                      </p>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 528-7177 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 212-9459</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Aiea / Pearl City Clinic</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        98-211 Pali Momi St, Suite 604<br />Aiea, HI 96701
                      </p>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 452-1900 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 452-1521</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                    <p className="font-bold text-slate-900 mb-1 text-sm">Hours of Operation</p>
                    <p className="text-slate-600 text-sm">Mon-Fri: 9am - 1pm, Sat: 8am - 12pm</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 text-left">
                  <p className="font-bold text-slate-900 mb-3 text-sm">Also serving:</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link to="/acupuncture-waikiki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">Waikiki</Link>
                    <Link to="/acupuncture-kaimuki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">Kaimuki</Link>
                    <Link to="/acupuncture-ala-moana" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">Ala Moana</Link>
                    <Link to="/acupuncture-kahala" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">Kahala</Link>
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
