
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, ArrowRightCircle, MapPin, ShieldCheck, HeartPulse, Stethoscope, Award, Star, Activity, CheckCircle2, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>Honolulu Pain & Injury Acupuncture Clinic | Dr. David Cai | AcuTherapy</title>
        <meta name="description" content="Top-rated Honolulu Pain & Injury Acupuncture Clinic. Dr. David Cai specializes in pain management, auto accident recovery, and traditional Chinese medicine with over 30 years of clinical experience." />
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
                Start Your Recovery. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Not Just Temporary Relief.
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                Auto Injury &middot; Workers' Comp &middot; Chronic Pain &middot; VA Care<br/><br/>
                Get a personalized recovery plan on your first visit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col items-start gap-1">
                  <Link to="/book-appointment">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-lg font-semibold shadow-lg shadow-blue-900/40">
                      Get My Recovery Plan
                    </Button>
                  </Link>
                  <p className="text-slate-300 text-sm mt-1 opacity-80 px-2 font-medium">Takes less than 60 seconds</p>
                </div>
                <Button size="lg" variant="outline" className="text-slate-900 border-white hover:bg-slate-100 h-14 px-8 text-lg font-semibold bg-white lg:hidden">
                  <PhoneCall className="mr-2 h-5 w-5" /> (808) 528-7177
                </Button>
              </div>

              <div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-blue-400 h-5 w-5" />
                  <span>Licensed Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-400 h-5 w-5" />
                  <span>30+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Action Card */}
            <div className="hidden lg:block relative z-20">
              <Card className="bg-white rounded-2xl shadow-2xl border-0 overflow-hidden text-slate-900">
                <div className="bg-blue-600 h-2 w-full"></div>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
                    <p className="text-slate-500 text-sm">Bridge the gap to a pain-free life today.</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex flex-col items-center gap-1">
                      <Link to="/book-appointment" className="w-full">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-bold rounded-xl shadow-md">
                          Get My Recovery Plan
                        </Button>
                      </Link>
                      <p className="text-slate-500 text-xs mt-1 font-medium">Takes less than 60 seconds</p>
                    </div>
                    <Button variant="outline" className="w-full text-slate-900 border-slate-200 hover:bg-slate-50 h-14 text-lg font-bold rounded-xl shadow-sm bg-white">
                      <PhoneCall className="mr-2 h-5 w-5 text-blue-600" /> (808) 528-7177
                    </Button>
                  </div>

                  <div className="border-t border-slate-100 pt-6 space-y-6 text-left">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <MapPin className="text-slate-400 h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-[15px] mb-1">Honolulu Clinic (Liliha)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mb-1">1650 Liliha St, Suite 208<br />Honolulu, HI 96817</p>
                                                    <a href="https://www.google.com/maps/search/?api=1&query=1650+Liliha+St,+Suite+208,+Honolulu,+HI+96817" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 font-bold hover:underline mt-1">
                                                        Find us on Google Maps
                                                    </a>
                        <p className="text-sm text-slate-700"><strong>Ph:</strong> (808) 528-7177 | <strong>Fax:</strong> (808) 212-9459</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 relative">
                        <MapPin className="text-slate-400 h-5 w-5" />
                        <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-[15px] mb-1">Aiea / Pearl City Clinic</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mb-1">98-211 Pali Momi St, Suite 604<br />Aiea, HI 96701</p>
                                                    <a href="https://www.google.com/maps/search/?api=1&query=98-211+Pali+Momi+St,+Suite+604,+Aiea,+HI+96701" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 font-bold hover:underline mt-1">
                                                        Find us on Google Maps
                                                    </a>
                        <p className="text-sm text-slate-700"><strong>Ph:</strong> (808) 452-1900 | <strong>Fax:</strong> (808) 452-1521</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-slate-50 rounded-xl p-4 text-left">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Hours of Operation</h4>
                    <p className="text-slate-600 text-sm">Mon-Fri: 9am - 1pm, Sat: 8am - 12pm</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 text-left">
                    <p className="font-bold text-slate-900 text-sm mb-3">Also serving:</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <Link to="/acupuncture-waikiki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors">Waikiki</Link>
                      <Link to="/acupuncture-kahala" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors">Kahala</Link>
                      <Link to="/acupuncture-ala-moana" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors">Ala Moana</Link>
                      <Link to="/acupuncture-kaimuki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors">Kaimuki</Link>
                    </div>
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
            <Link to="/patient-reviews" className="bg-blue-800/50 p-6 rounded-2xl border border-blue-700/50 flex flex-col justify-center hover:bg-blue-800 transition-colors group">
              <span className="text-blue-300 font-semibold text-sm tracking-wider uppercase mb-2 block group-hover:text-white transition-colors">Case 1</span>
              <p className="text-xl font-medium leading-relaxed group-hover:text-white transition-colors">Auto accident <span className="opacity-60 text-lg mx-2">→</span> <span className="text-emerald-400 group-hover:text-emerald-300">neck pain gone in 4 weeks</span></p>
            </Link>
            <Link to="/patient-reviews" className="bg-blue-800/50 p-6 rounded-2xl border border-blue-700/50 flex flex-col justify-center hover:bg-blue-800 transition-colors group">
              <span className="text-blue-300 font-semibold text-sm tracking-wider uppercase mb-2 block group-hover:text-white transition-colors">Case 2</span>
              <p className="text-xl font-medium leading-relaxed group-hover:text-white transition-colors">Chronic back pain <span className="opacity-60 text-lg mx-2">→</span> <span className="text-emerald-400 group-hover:text-emerald-300">70% better after 6 visits</span></p>
            </Link>
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
