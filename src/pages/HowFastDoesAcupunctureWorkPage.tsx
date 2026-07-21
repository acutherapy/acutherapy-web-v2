

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, } from "lucide-react";

export default function HowFastDoesAcupunctureWorkPage() {
  return (
    <>
      <Helmet>
        <title>How Fast Does Acupuncture Work? | Honolulu Patient Guide</title>
        <meta name="description" content="Wondering how fast acupuncture works? Learn about timeline expectations, immediate relief versus gradual improvement, and what to expect in Honolulu." />
        
        <meta property="og:title" content="How Fast Does Acupuncture Work? | Treatment Timeline | Honolulu" />
        <meta property="og:description" content="Wondering how fast acupuncture takes to work? See our exact clinical recovery timelines for immediate relief, mid-term healing, and long-term repair." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acutherapy.com/how-fast-does-acupuncture-work" />
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
                    "opens": "09:00",
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
                    "opens": "09:00",
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
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How fast does acupuncture work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some patients notice changes after the first session, while others experience more gradual improvement over multiple visits."
      }
    },
    {
      "@type": "Question",
      "name": "How many sessions before acupuncture starts working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many patients begin to notice changes within three to six sessions, depending on the condition and individual response."
      }
    },
    {
      "@type": "Question",
      "name": "Why does acupuncture take multiple sessions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Acupuncture is often used in a series because gradual improvement may require repeated support for muscle relaxation, circulation, and recovery."
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
            alt="Acupuncture therapy background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
<div className="bg-blue-50/50 border border-blue-100 border-l-4 border-l-blue-500 p-4 rounded-xl text-slate-800 font-medium my-6 shadow-sm">
  <p className="flex items-center gap-2">
    <span className="text-xl">👉</span>
    <span>You can see an example timeline in this <Link to="/case-auto-accident-neck-pain-honolulu" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4 font-bold">real case study</Link>.</span>
  </p>
</div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm backdrop-blur-sm">
              <ShieldCheck size={16} /> <span>100% No-Fault PIP Insurance Accepted</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-200 border border-teal-500/30 font-medium text-sm backdrop-blur-sm">
              <span>Accepts HMSA, Kaiser, UHA, HMAA, Medicare UHC, Auto PIP, Workers' Comp &amp; VA</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">How Fast Does Acupuncture Work?</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Understanding timeline expectations, symptom relief, and healing stages.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <h1 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-6 leading-tight">
              How Fast Does Acupuncture Work? A Honolulu Patient Guide
            </h1>

            <p className="text-[18px] font-semibold text-slate-800 mb-6 leading-relaxed">
              <strong>Acupuncture may support symptom relief for some patients early in care, while others experience gradual improvement over multiple visits, while others may notice gradual improvement over several visits. The speed of results depends on the condition, severity, and individual response.</strong>
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 mt-2 mb-8 text-blue-900 font-medium tracking-tight">
              "Research shows that acupuncture may produce measurable pain relief within minutes in some cases, while longer-term improvement often develops over multiple sessions."
            </div>

            <figure className="mb-8">
              <img 
                src="/images/how-fast-acupuncture-works-honolulu.jpg" 
                alt="Acupuncture treatment in Honolulu showing patient relaxation and gradual pain relief" 
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800'; }}
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">
                A calm acupuncture session in Honolulu demonstrating how treatment supports gradual improvement and relaxation over time.
              </figcaption>
            </figure>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-10 shadow-sm">
              <h2 className="text-[20px] font-bold text-slate-900 mb-3">Understanding Your Timeline</h2>
              <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">
                Many patients in <Link to="/contact-honolulu-acupuncture" className="text-blue-600 hover:underline">Honolulu</Link> wonder how quickly <Link to="/acupuncture-honolulu" className="text-blue-600 hover:underline">acupuncture</Link> works. The answer varies. At Acutherapy Clinics, Dr. David Cai explains that some people feel immediate changes, while others experience gradual improvement over time. Factors such as chronicity, muscle tension, and overall health can influence how quickly results appear. Acupuncture is often used as a series of treatments to support lasting improvement rather than a one-time solution.
              </p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              A Realistic Answer: How Quickly Can You Expect Results?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>The healing timeline typically falls into these expected intervals:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-slate-50 p-6 rounded-xl border border-slate-100 font-medium">
                <li><span className="text-blue-700 font-bold">Immediate:</span> Some patients feel changes within minutes or after their <Link to="/what-to-expect-first-acupuncture-visit" className="text-blue-600 hover:underline">first visit</Link>.</li>
                <li><span className="text-blue-700 font-bold">Short-term:</span> 1–3 sessions to establish momentum.</li>
                <li><span className="text-blue-700 font-bold">Mid-term:</span> 3–6 <Link to="/acupuncture-honolulu" className="text-blue-600 hover:underline">sessions</Link> for sustained relief.</li>
                <li><span className="text-blue-700 font-bold">Long-term:</span> Several weeks of consistent care for complex chronic issues.</li>
              </ul>
              <p>While acute conditions respond faster, chronic issues like lingering <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 hover:underline">back pain</Link> or shooting <Link to="/sciatica-treatment-honolulu" className="text-blue-600 hover:underline">sciatica</Link> often require the mid-to-long-term pathways.</p>
              <p>Many patients in Honolulu describe the first improvement as:</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-medium">Reduced tightness</span>
                <span className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-medium">A sense of relaxation</span>
                <span className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-medium">Slight decrease in pain intensity</span>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              What Typically Happens After the First Few Sessions?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Acupuncture is often a process rather than a one-time fix.</p>
              <p>Patients may experience:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Early sessions</strong> → relaxation and tension release</li>
                <li><strong>Middle phase</strong> → improved movement and reduced discomfort</li>
                <li><strong>Later phase</strong> → more stable and lasting improvement</li>
              </ul>
              <p className="font-semibold text-slate-900">
                 If you don’t notice improvement after several sessions, your treatment plan may need to be adjusted.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mt-4">
                 <p className="text-[16px] md:text-[18px] text-slate-800 font-medium italic">
                   Research suggests acupuncture may help reduce pain and improve function when used consistently as part of conservative care.
                 </p>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              What Affects How Fast Acupuncture Works?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Several factors can influence your response time:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>How long you’ve had the condition</li>
                <li>Severity of symptoms</li>
                <li>Muscle tension and inflammation</li>
                <li>Lifestyle and daily activity</li>
              </ul>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              Why Acupuncture Is Often Done in a Series
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Unlike treatments that provide only temporary relief, acupuncture is often used over multiple sessions to support gradual improvement.</p>
              <p>This may help:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li>Reinforce muscle relaxation</li>
                <li>Improve circulation over time</li>
                <li>Support the body’s natural recovery process</li>
              </ul>
              <p>For patients exploring comprehensive relief, some treatment plans also incorporate <Link to="/does-cupping-help-back-pain" className="text-blue-600 hover:underline">cupping therapy</Link>.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              What Patients in Honolulu Often Notice First
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Many patients don’t notice a dramatic change right away—but instead feel:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Lighter movement</li>
                <li>Less stiffness</li>
                <li>Improved comfort during daily activities</li>
              </ul>
              <p>These small changes often build over time.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              Acupuncture Care in Honolulu
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Acutherapy Clinics is located near Ala Moana, serving patients from:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Waikiki</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Kakaʻako</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Downtown Honolulu</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Greater Oahu</span>
              </div>
              <p>Having a nearby clinic can make it easier to stay consistent with care.</p>
              <p>We can also help verify your <Link to="/is-acupuncture-covered-by-insurance-hawaii" className="text-blue-600 hover:underline">insurance coverage</Link> to ensure a smooth treatment journey.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-6 border-b pb-2">
              Q&A: How Fast Acupuncture Works
            </h2>
            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">How fast does acupuncture work for pain?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Some patients feel relief after the first session, while others may notice gradual improvement over several visits.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">How many sessions before acupuncture works?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Many patients begin to notice changes within 3–6 sessions, depending on the condition.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Why didn’t acupuncture work immediately for me?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Response time varies. Chronic conditions or deeper muscle patterns may take longer to improve.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Does acupuncture work faster than medication?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Acupuncture and medication work differently. Some people prefer acupuncture for gradual, long-term support.</p>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              A Safe and Professional Approach
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-12">
              <p>At Acutherapy Clinics in Honolulu, treatments are performed using sterile, single-use needles.</p>
              <p>Care is provided by trained professionals following Hawaii healthcare standards to ensure a comfortable and effective experience.</p>
            </div>

            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 mb-12">
              <h2 className="text-[28px] font-bold text-slate-900 mb-4">Curious How Acupuncture May Work for You?</h2>
              <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-8">
                If you’re dealing with pain or discomfort, a personalized evaluation can help determine what approach may be appropriate for your condition and what timeline you might expect.
              </p>
              
              <ul className="space-y-3 mb-8 text-slate-800 font-medium">
                <li className="flex items-center gap-3"><MapPin className="text-blue-600 h-5 w-5" /> Located near Ala Moana in Honolulu</li>
                <li className="flex items-center gap-3"><Calendar className="text-blue-600 h-5 w-5" /> Same-day appointments available</li>
                <li className="flex items-center gap-3"><PhoneCall className="text-blue-600 h-5 w-5" /> Call (808) 528-7177</li>
              </ul>

              <Link to="/contact-honolulu-acupuncture" className="inline-block hover:opacity-90 transition-opacity whitespace-nowrap" style={{ background: '#000', color: '#fff', padding: '12px 20px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                Schedule Your Consultation
              </Link>
            </div>

            {/* Dr. David Cai Profile Module */}
            <div className="mb-16 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-slate-100 relative">
                  <img loading="lazy" 
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
                     <img loading="lazy" src="/images/acutherapy-medical-team.jpg" alt="AcuTherapy Clinics Medical Team" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
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

<div className="bg-blue-50/50 border border-blue-100 border-l-4 border-l-blue-500 p-4 rounded-xl text-slate-800 font-medium my-6 shadow-sm">
  <p className="flex items-center gap-2">
    <span className="text-xl">👉</span>
    <span>Many patients also check <Link to="/is-acupuncture-covered-by-insurance-hawaii" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4 font-bold">insurance coverage options</Link> before starting care.</span>
  </p>
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
                                                    <a href="https://www.google.com/maps/search/?api=1&query=1650+Liliha+St,+Suite+208,+Honolulu,+HI+96817" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 font-bold hover:underline mt-1">
                                                        Find us on Google Maps
                                                    </a>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 528-7177 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 212-9459</p>
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
