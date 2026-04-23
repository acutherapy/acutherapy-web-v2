
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, ArrowRightCircle, ShieldCheck, HeartPulse, Stethoscope, Award, Star, Activity, CheckCircle2, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>Looking for Acupuncture Near You in Honolulu? Pain Relief Starts Here</title>
        <meta name="description" content="Top-rated Honolulu Pain & Injury Acupuncture Clinic. Dr. David Cai specializes in pain management, auto accident recovery, and traditional Chinese medicine with over 30 years of clinical experience." />
        
        <meta property="og:title" content="Honolulu Pain & Injury Acupuncture Clinic | Dr. David Cai | AcuTherapy" />
        <meta property="og:description" content="Top-rated Honolulu Pain & Injury Acupuncture Clinic. Dr. David Cai specializes in pain management, auto accident recovery, and traditional Chinese medicine with over 30 years of clinical experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acutherapy.com/" />
        <meta property="og:image" content="https://acutherapy.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "AcuTherapy Clinics",
            "logo": "https://acutherapy.com/logo.png",
            "image": "https://acutherapy.com/images/dr-david-cai-portrait.jpg",
            "url": "https://acutherapy.com",
            "description": "Premier medical acupuncture and pain management clinics in Honolulu and Aiea, led by Dr. David Cai.",
            "department": [
              {
                "@type": "MedicalClinic",
                "name": "AcuTherapy Clinics - Honolulu (Liliha)",
                "telephone": "+1-808-528-7177",
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
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "13:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "08:00",
                    "closes": "12:00"
                  }
                ]
              },
              {
                "@type": "MedicalClinic",
                "name": "AcuTherapy Clinics - Aiea / Pearl City",
                "telephone": "+1-808-452-1900",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "98-211 Pali Momi St, Suite 604",
                  "addressLocality": "Aiea",
                  "addressRegion": "HI",
                  "postalCode": "96701",
                  "addressCountry": "US"
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "13:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "08:00",
                    "closes": "12:00"
                  }
                ]
              }
            ],
            "medicalSpecialty": [
              "Acupuncture",
              "PainManagement"
            ]
          }
          `}
        </script>
      
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Does acupuncture hurt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most patients feel it’s easier than expected and describe it as a relaxing experience using hair-thin needles."
                }
              },
              {
                "@type": "Question",
                "name": "How fast does acupuncture work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Response time varies. Immediate relief is common for some, while chronic issues may take 3-6 sessions to see sustained improvement."
                }
              }
            ]
          }
          `}
        </script>


        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": [
    "MedicalBusiness",
    "LocalBusiness"
  ],
  "name": "Acutherapy Clinics",
  "image": "https://acutherapy.com/og-image.jpg",
  "url": "https://acutherapy.com",
  "telephone": "+1-808-528-7177",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Honolulu",
    "addressRegion": "HI",
    "addressCountry": "US"
  },
  "areaServed": [
    "Honolulu",
    "Waikiki",
    "Kakaako",
    "Oahu",
    "Hawaii"
  ],
  "priceRange": "$$",
  "medicalSpecialty": [
    "Acupuncture",
    "PainManagement"
  ],
  "founder": {
    "@type": "Person",
    "name": "Dr. David Cai"
  },
  "description": "Acutherapy Clinics in Honolulu provides acupuncture, medical massage, and supportive care for pain relief, injury recovery, and functional improvement.",
  "sameAs": []
}`}
        </script>
      </Helmet>

      {/* Hero Section */}
<section className="relative bg-blue-900 text-white overflow-hidden py-24 lg:py-32">
  <div className="absolute inset-0 z-0 opacity-40">
    <img
      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
      alt="Acupuncture therapy background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div className="max-w-3xl">
        <div className="inline-flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full border border-blue-500/30">
            Voted Best Acupuncturist in Honolulu
          </span>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm font-semibold rounded-full border border-emerald-500/30">
            Accepts HMSA, Kaiser, UHA, HMAA, Medicare UHC, Auto PIP, Workers' Comp & VA
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Pain Won’t Go Away? <br />
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
            Acupuncture Near You in Honolulu
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
          Back Pain • Sciatica • Neck Pain • Stress Relief<br /><br />
          Still in pain and nothing works? Get fast, effective acupuncture near you in Honolulu — without drugs or surgery.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col items-start gap-1">
            <Link to="/book-appointment">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-lg font-semibold">
                Book Appointment Today
              </Button>
            </Link>
            <p className="text-slate-300 text-sm mt-1">
              Takes less than 60 seconds • Insurance Accepted
            </p>
          </div>

          <Button className="lg:hidden bg-white text-slate-900 h-14 px-8">
            <PhoneCall className="mr-2 h-5 w-5" />
            (808) 528-7177
          </Button>
        </div>

        <div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-blue-400 h-5 w-5" />
            <span>Same-day Appointments</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-emerald-400 h-5 w-5" />
            <span>30+ Years Experience</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-emerald-400 h-5 w-5" />
            <span>Insurance Accepted</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:block relative z-20">
        <Card className="bg-white rounded-2xl shadow-2xl border-0 overflow-hidden text-slate-900">
          <div className="bg-blue-600 h-2 w-full"></div>

          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Book Your Visit</h3>
              <p className="text-sm text-slate-500">
                ✔ Most Patients Feel Relief Within 1–3 Visits
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <Link to="/book-appointment">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-bold">
                  Check Availability Now
                </Button>
              </Link>

              <p className="text-center text-sm text-slate-500">
                Call Now for Same-Day Availability
              </p>

              <Button className="w-full bg-white border text-slate-900 h-14">
                <PhoneCall className="mr-2 h-5 w-5 text-blue-600" />
                (808) 528-7177
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  </div>
</section>

      {/* CRO Module 1: Situation Grid */}
      <section className="py-16 bg-slate-50 text-center border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">What's Your Situation?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/auto-accident-injury-honolulu" className="bg-white hover:bg-blue-600 hover:text-white text-slate-800 font-bold py-4 px-6 rounded-full border-2 border-slate-200 hover:border-blue-600 transition-all shadow-sm">
              🚗 Auto Accident
            </Link>
            <Link to="/pain-management-honolulu" className="bg-white hover:bg-blue-600 hover:text-white text-slate-800 font-bold py-4 px-6 rounded-full border-2 border-slate-200 hover:border-blue-600 transition-all shadow-sm">
              😖 Chronic Pain
            </Link>
            <Link to="/workers-comp-acupuncture-honolulu" className="bg-white hover:bg-blue-600 hover:text-white text-slate-800 font-bold py-4 px-6 rounded-full border-2 border-slate-200 hover:border-blue-600 transition-all shadow-sm">
              👷 Workers' Comp
            </Link>
            <Link to="/veterans-pain-relief-honolulu" className="bg-white hover:bg-blue-600 hover:text-white text-slate-800 font-bold py-4 px-6 rounded-full border-2 border-slate-200 hover:border-blue-600 transition-all shadow-sm">
              🪖 VA / Veterans
            </Link>
          </div>
        </div>
      </section>

      {/* CRO Module 2: Comparison */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-10 text-center tracking-tight">Why Most Treatments Don't Last</h2>
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md">
            <div className="grid grid-cols-2 gap-4 pb-4 border-b-2 border-slate-200 mb-4 font-bold text-lg text-center">
              <div className="text-slate-500">Typical Clinics</div>
              <div className="text-blue-700">AcuTherapy Clinics</div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 items-center text-center">
                <div className="text-slate-600 bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-sm sm:text-base">One-time relief</div>
                <div className="text-slate-900 font-semibold bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base"><CheckCircle2 className="text-blue-600 h-5 w-5 flex-shrink-0"/> Structured recovery plan</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center text-center">
                <div className="text-slate-600 bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-sm sm:text-base">Focus on symptoms</div>
                <div className="text-slate-900 font-semibold bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base"><CheckCircle2 className="text-blue-600 h-5 w-5 flex-shrink-0"/> Root cause approach</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center text-center">
                <div className="text-slate-600 bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-sm sm:text-base">No clear timeline</div>
                <div className="text-slate-900 font-semibold bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base"><CheckCircle2 className="text-blue-600 h-5 w-5 flex-shrink-0"/> Step-by-step recovery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRO Module 3: Real Results */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-100">Real Results</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Link to="/case-auto-accident-neck-pain-honolulu" className="bg-blue-800/50 p-6 rounded-2xl border border-blue-700/50 flex flex-col justify-center hover:bg-blue-800 transition-colors group">
              <span className="text-blue-300 font-semibold text-sm tracking-wider uppercase mb-2 block group-hover:text-white transition-colors">Case 1</span>
              <p className="text-xl font-medium leading-relaxed group-hover:text-white transition-colors">Auto accident <span className="opacity-60 text-lg mx-2">→</span> <span className="text-emerald-400 group-hover:text-emerald-300">neck pain gone in 4 weeks</span></p>
            </Link>
            <Link to="/case-chronic-back-pain-honolulu" className="bg-blue-800/50 p-6 rounded-2xl border border-blue-700/50 flex flex-col justify-center hover:bg-blue-800 transition-colors group">
              <span className="text-blue-300 font-semibold text-sm tracking-wider uppercase mb-2 block group-hover:text-white transition-colors">Case 2</span>
              <p className="text-xl font-medium leading-relaxed group-hover:text-white transition-colors">Chronic back pain <span className="opacity-60 text-lg mx-2">→</span> <span className="text-emerald-400 group-hover:text-emerald-300">70% better after 6 visits</span></p>
            </Link>
          </div>
        </div>
      </section>

      
      {/* CRO Module 4: Insurance & Cost */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Insurance & Cost Details</h2>
          <p className="text-lg text-slate-600 mb-8">Many of our patients are fully covered depending on their exact policy.</p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-xl">1. Auto (PIP)</h3>
              <p className="text-sm text-slate-600">Often covered at 100% with zero out-of-pocket for accident victims.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-xl">2. Workers' Comp</h3>
              <p className="text-sm text-slate-600">We handle authorization directly with your adjuster.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-xl">3. Major Medical</h3>
              <p className="text-sm text-slate-600">HMSA, Kaiser, UHA, Medicare UHC, and VA accepted.</p>
            </div>
          </div>
        </div>
      </section>

{/* Meet The Doctor */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-50 rounded-3xl transform -rotate-2 z-0"></div>
              <img
                src="/images/dr-david-cai-portrait.jpg"
                alt="Dr. David Cai"
                className="relative z-10 w-full rounded-2xl shadow-2xl object-cover min-h-[500px]"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800'; }}
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="text-blue-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dr. David Cai, L.Ac., L.M.T.</h4>
                    <p className="text-sm font-medium text-blue-600">Clinical Director & Founder</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-bold tracking-wide uppercase rounded-full mb-4">
                <Stethoscope className="h-4 w-4" /> Who We Are
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">
                Hawaii's Most Trusted Expert in Pain & Injury Rehabilitation.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                With over <strong>30 years of clinical experience</strong> across integrated medical systems, Dr. David Cai is a master practitioner of Traditional Chinese Medicine (TCM). He utilizes a comprehensive range of modalities—including Traditional Acupuncture, moxibustion therapy, dry needling techniques, and custom Chinese herbal medicine—to deliver profound results.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                He built AcuTherapy Clinics on the principle that the body is intended to heal itself. Rather than masking symptoms with temporary painkillers, Dr. Cai identifies the exact structural, hormonal, or inflammatory root cause. If you're searching for reliable "acupuncture near me," our clinic provides unmatched, long-lasting relief.
              </p>

              <div className="space-y-4">
                {[
                  "Pioneer in advanced neurological and Traditional Acupuncture.",
                  "Has successfully treated tens of thousands of complex pain patients.",
                  "Comprehensive expert in chronic anxiety, fertility, and insomnia.",
                  "Specialized protocol for traumatic Auto Accident/Whiplash recovery."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">What Problems Can We Solve?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              If you have been told "you just have to live with the pain" or that surgery is your only option, you are our ideal patient. We specialize in hard-to-treat conditions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Back Pain & Sciatica</h3>
                <p className="text-slate-600 mb-4 h-20 text-sm">We reduce nerve inflammation and release compressed tissues without spinal injections.</p>
                <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1 group">
                  Learn more <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-amber-300 ring-2 ring-amber-100">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Auto Accident (PIP)</h3>
                <p className="text-slate-600 mb-4 h-20 text-sm">Targeted recovery for whiplash and neck sprains. <strong>Zero out-of-pocket costs</strong> with most auto insurance.</p>
                <Link to="/auto-accident-injury-honolulu" className="text-amber-600 font-semibold text-sm hover:text-amber-700 flex items-center gap-1 group">
                  Learn more <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-emerald-300 ring-2 ring-emerald-100">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Workers' Comp</h3>
                <p className="text-slate-600 mb-4 h-20 text-sm">Authorized provider for workplace injuries. We handle the paperwork so you can focus on returning to work.</p>
                <Link to="/workers-comp-injury-honolulu" className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 flex items-center gap-1 group">
                  Learn more <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-indigo-300 ring-2 ring-indigo-100">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Veterans Care</h3>
                <p className="text-slate-600 mb-4 h-20 text-sm">Proudly treating our heroes for PTSD, chronic pain, and mobility issues. Thank you for your service.</p>
                <Link to="/veterans-pain-relief-honolulu" className="text-indigo-600 font-semibold text-sm hover:text-indigo-700 flex items-center gap-1 group">
                  Learn more <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Neck & Shoulder</h3>
                <p className="text-slate-600 mb-4 h-20 text-sm">Melt away chronic tension, frozen shoulder, and debilitating migraines caused by structural stress.</p>
                <Link to="/neck-pain-treatment-honolulu" className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1 group">
                  Learn more <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Joints & Sports</h3>
                <p className="text-slate-600 mb-4 h-20 text-sm">Accelerate recovery for knee pain, tennis elbow, and athletic ligament tears.</p>
                <Link to="/sports-injury-acupuncture-honolulu" className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1 group">
                  Learn more <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-200">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Anxiety & Insomnia</h3>
                <p className="text-slate-600 mb-4 h-20 text-sm">Balance your nervous system naturally to relieve chronic stress, anxiety, and sleepless nights.</p>
                <Link to="/treatment-process" className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1 group">
                  Learn more <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-pink-200">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Women's Health</h3>
                <p className="text-slate-600 mb-4 h-20 text-sm">Comprehensive holistic support for fertility, menstrual irregularities, weight loss, and hormone balance.</p>
                <Link to="/treatment-process" className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1 group">
                  Learn more <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardContent className="p-8">
                <div className="h-12 w-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Therapies</h3>
                <p className="text-slate-600 mb-4 h-20 text-sm">We provide moxibustion, customized Chinese herbal medicine, and dry needling for complete healing.</p>
                <Link to="/treatment-process" className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1 group">
                  Learn more <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">Why Choose AcuTherapy Clinics?</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We are not a "spa" acupuncture clinic. We are a results-driven, clinical medical facility. When you step into our clinic, you are receiving the highest tier of diagnostic precision and treatment efficacy available in Hawaii.
              </p>

              <div className="bg-blue-800 rounded-2xl p-6 mb-8 border border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="text-yellow-400 h-6 w-6 fill-yellow-400" />
                  <Star className="text-yellow-400 h-6 w-6 fill-yellow-400" />
                  <Star className="text-yellow-400 h-6 w-6 fill-yellow-400" />
                  <Star className="text-yellow-400 h-6 w-6 fill-yellow-400" />
                  <Star className="text-yellow-400 h-6 w-6 fill-yellow-400" />
                </div>
                <p className="italic text-slate-300 leading-relaxed mb-4">
                  "After years of dealing with chronic back pain and trying various treatments, I finally found relief at Acutherapy. The combination of acupuncture and massage therapy has worked wonders for my mobility and overall well-being. Dr. Cai and his team are professional, caring, and truly experts in their field."
                </p>
                <p className="font-bold text-white">— Michael T., Honolulu</p>
              </div>

              <Link to="/acupuncture-honolulu">
                <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold h-12 px-8">
                  Explore Our Treatments <ArrowRightCircle className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Root-Cause Focus", text: "We heal the source of the problem, not just dull the symptoms." },
                { title: "No Wait Times", text: "Pristine scheduling ensures you are seen exactly when you are scheduled." },
                { title: "Insurance Direct", text: "We work directly with your auto, workers' comp, and health insurance plans." },
                { title: "Clean & Sterile", text: "A modern, clinical environment exceeding standard medical protocols." }
              ].map((feature, i) => (
                <div key={i} className="bg-blue-800/50 p-6 rounded-2xl border border-slate-700/50">
                  <div className="h-10 w-10 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
