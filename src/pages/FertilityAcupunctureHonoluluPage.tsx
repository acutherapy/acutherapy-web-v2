import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity, HelpCircle } from "lucide-react";
import DoctorProfileCard from '@/components/DoctorProfileCard';

export default function FertilityAcupunctureHonoluluPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/fertility-acupuncture-honolulu" />
        <title>Fertility Acupuncture in Honolulu, Hawaii | AcuTherapy Clinics</title>
        <meta name="description" content="Fertility acupuncture in Honolulu to support IVF, IUI, and natural conception. TCM-based hormonal balance and uterine blood flow at AcuTherapy Clinics, Oahu." />
        <meta property="og:title" content="Fertility Acupuncture Honolulu | AcuTherapy Clinics" />
        <meta property="og:description" content="Fertility acupuncture in Honolulu to support IVF, IUI, and natural conception. TCM-based hormonal balance and uterine blood flow at AcuTherapy Clinics, Oahu." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acutherapy.com/fertility-acupuncture-honolulu" />
        <meta property="og:image" content="https://acutherapy.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "name": "AcuTherapy Clinics",
  "url": "https://acutherapy.com",
  "telephone": "+1-808-528-7177",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1650 Liliha St, Suite 208",
    "addressLocality": "Honolulu",
    "addressRegion": "HI",
    "postalCode": "96817",
    "addressCountry": "US"
  },
  "medicalSpecialty": ["Acupuncture", "WomensHealth"],
  "knowsAbout": ["Fertility Acupuncture", "IVF Support", "PCOS Treatment", "Women's Health TCM", "CenterGy"],
  "founder": { "@type": "Person", "name": "Dr. David Cai" }
}`}
        </script>
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does acupuncture help with fertility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Research suggests acupuncture may support fertility by improving uterine blood flow, regulating hormones, and reducing stress. It is commonly used alongside IVF and IUI cycles as a complementary approach, not a replacement for conventional fertility care."
      }
    },
    {
      "@type": "Question",
      "name": "How many acupuncture sessions are recommended for fertility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most practitioners recommend starting 3 months before a planned IVF cycle or natural conception attempt. Weekly or bi-weekly sessions are typical, with a treatment plan individualized to your specific cycle patterns and health history."
      }
    },
    {
      "@type": "Question",
      "name": "Can acupuncture help with IVF success?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some studies suggest acupuncture performed before and after embryo transfer may support uterine receptivity and relaxation. Results vary by individual. We recommend coordinating with your reproductive endocrinologist before adding complementary care."
      }
    }
  ]
}`}
        </script>
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Fertility Acupuncture Honolulu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm backdrop-blur-sm">
              <ShieldCheck size={16} /> <span>Women's Health &amp; Fertility TCM</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 font-medium text-sm backdrop-blur-sm">
              Workers' Comp · Auto PIP · Veterans Care · UHA · HMAA accepted
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Fertility Acupuncture in Honolulu – TCM Support for IVF, PCOS &amp; Natural Conception
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Supporting your fertility journey with evidence-informed Traditional Chinese Medicine at two convenient Oahu locations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">

          <article className="md:col-span-8">
            {/* CRO Expectation Module */}
            <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-10 shadow-sm mt-8">
              <p className="text-lg text-slate-900 font-semibold mb-1">Best results typically emerge after 3–6 months of consistent treatment,</p>
              <p className="text-slate-600">aligned with natural menstrual cycles or your IVF protocol timeline.</p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="font-bold text-slate-900 mb-2">What to Expect:</p>
                <ul className="space-y-1 text-slate-700 font-medium">
                  <li><span className="text-blue-600 mr-2">→</span> <strong>Month 1:</strong> Cycle regulation, stress reduction, baseline constitutional assessment</li>
                  <li><span className="text-blue-600 mr-2">→</span> <strong>Month 2–3:</strong> Hormonal balance, improved uterine blood flow</li>
                  <li><span className="text-blue-600 mr-2">→</span> <strong>Month 3+:</strong> Optimized constitution for natural conception or IVF cycle</li>
                </ul>
              </div>
            </div>

            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              Whether you are trying to conceive naturally, preparing for an IVF or IUI cycle, or managing a condition like PCOS or endometriosis, Traditional Chinese Medicine offers a comprehensive framework for supporting reproductive health. AcuTherapy Clinics has helped patients across Oahu with fertility-related concerns for over a decade.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How Acupuncture May Support Fertility</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              In Traditional Chinese Medicine, fertility depends on the smooth flow of Qi and blood through the reproductive organs, balanced kidney and liver energy, and a warm, nourished uterine environment. Acupuncture may support these goals by:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg text-slate-700 mb-6">
              <li>Improving blood circulation to the uterus and ovaries</li>
              <li>Regulating the hypothalamic-pituitary-ovarian (HPO) axis</li>
              <li>Reducing cortisol and stress hormone levels</li>
              <li>Supporting a balanced hormonal environment for regular ovulation</li>
              <li>Promoting uterine lining thickness and receptivity</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-xl mt-4 mb-6">
              <p className="text-sm font-medium text-blue-900"><strong>Research Note:</strong> Some studies suggest acupuncture performed before and after embryo transfer may support IVF outcomes. Results vary by individual. We recommend coordinating with your reproductive endocrinologist when adding complementary care.</p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Conditions We May Help</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li><strong>Unexplained infertility:</strong> Constitutional TCM assessment to identify underlying imbalances</li>
              <li><strong>PCOS:</strong> Hormone regulation and cycle support through acupuncture</li>
              <li><strong>Endometriosis:</strong> Reducing inflammation and pain while supporting reproductive function</li>
              <li><strong>IVF / IUI preparation:</strong> Pre- and post-transfer acupuncture to support uterine receptivity</li>
              <li><strong>Irregular cycles:</strong> Regulating menstrual rhythm and improving cycle predictability</li>
              <li><strong>Recurrent miscarriage support:</strong> Constitutional strengthening and stress reduction between pregnancies</li>
              <li><strong>Fertility-related stress and anxiety:</strong> CenterGy method available needle-free for those with needle sensitivity</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">The CenterGy Approach to Fertility</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our signature <strong>CenterGy (Synergies)</strong> method — co-developed by Dr. David Cai and Lisa Long — uses precision constitutional diagnosis to identify reproductive imbalances at their root. CenterGy can be delivered with or without acupuncture needles, making it accessible for patients who experience anxiety or sensitivity around needles — which is common during the emotionally demanding journey of fertility treatment.
            </p>

            {/* CRO Comparison Module */}
            <div className="my-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-2 text-center">A Different Kind of Fertility Support</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200">
                  <div className="p-6 text-center border-r border-slate-200">
                    <h3 className="font-bold text-slate-500 text-lg">Typical Approach</h3>
                  </div>
                  <div className="p-6 text-center bg-blue-600">
                    <h3 className="font-bold text-white text-lg">AcuTherapy Clinics</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-slate-100">
                  <div className="p-6 text-center border-r border-slate-100 text-slate-600">Treat only the hormonal numbers</div>
                  <div className="p-6 text-center font-semibold text-blue-900 bg-blue-50/50">Treat the whole constitutional pattern</div>
                </div>
                <div className="grid grid-cols-2 border-b border-slate-100">
                  <div className="p-6 text-center border-r border-slate-100 text-slate-600">One-size protocol for every patient</div>
                  <div className="p-6 text-center font-semibold text-blue-900 bg-blue-50/50">Individualized CenterGy assessment each visit</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-6 text-center border-r border-slate-100 text-slate-600">Acupuncture only</div>
                  <div className="p-6 text-center font-semibold text-blue-900 bg-blue-50/50">Acupuncture + massage + CenterGy combined</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Does acupuncture actually help with fertility?</h3>
                <p className="text-slate-600">Research suggests acupuncture may improve uterine blood flow, regulate hormones, and reduce stress — all factors that influence fertility. It is most effective as a complementary approach alongside conventional fertility care, not a standalone treatment.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> How many sessions do I need?</h3>
                <p className="text-slate-600">Most patients benefit most from starting 3 months before a planned IVF cycle or active conception attempt. Dr. Cai will create a personalized plan after your first consultation based on your health history, cycle patterns, and treatment goals.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Is acupuncture safe during an IVF cycle?</h3>
                <p className="text-slate-600">Yes, when performed by a licensed acupuncturist familiar with reproductive protocols. We are experienced in timing treatments appropriately around stimulation, retrieval, and transfer phases. Always inform your fertility clinic about complementary care.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> General Acupuncture
              </Link>
              <Link to="/cupping-gua-sha-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Cupping &amp; Gua Sha
              </Link>
              <Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Medical Massage
              </Link>
              <Link to="/insurance-accepted" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Insurance Accepted
              </Link>
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Start Your Fertility Acupuncture Journey</h2>
              <p className="text-lg text-blue-700 mb-8">Two Oahu locations. 30+ years of TCM experience. Personalized care.</p>
              <Link to="/book-appointment">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all">
                  Book a Consultation
                </Button>
              </Link>
              <p className="text-blue-600 text-sm mt-3 opacity-80 font-medium tracking-wide">Takes less than 60 seconds</p>
            </div>

            <DoctorProfileCard />
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 h-2 w-full"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
                <p className="text-slate-600 mb-8 text-sm">Tell us about your fertility goals and we will build a personalized treatment plan.</p>
                <div className="flex flex-col gap-4">
                  <Link to="/book-appointment">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">
                      <Calendar className="mr-2" /> Book a Consultation
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
                    <p className="font-bold text-slate-900 mb-1 text-sm">Insurance Accepted</p>
                    <p className="text-slate-600 text-sm">Workers' Comp, Auto PIP, Veterans Care, UHA, HMAA, AARP, Humana, AshLink and more.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4">Patient Feedback</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"Dr. Cai took the time to understand my full health picture before starting treatment. I felt more balanced and less anxious throughout my entire process."</p>
              <div className="flex items-center gap-4 mt-6">
                <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">M.H.</div>
                <div>
                  <p className="text-white font-semibold text-sm">M.H.</p>
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
