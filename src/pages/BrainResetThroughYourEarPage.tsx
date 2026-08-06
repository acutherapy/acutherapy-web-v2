import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Star, HelpCircle } from "lucide-react";
import DoctorProfileCard from '@/components/DoctorProfileCard';

const faqItems = [
  {
    question: "Is this treatment truly needle-free?",
    answer: "Yes. Brain Reset Through Your Ear™ uses tiny vaccaria seeds or gold beads taped to specific points on the outer ear — no needles penetrate the skin at any point. It is a form of auricular acupressure, not acupuncture with needles."
  },
  {
    question: "I'm afraid of needles. Can I still get acupuncture benefits?",
    answer: "Absolutely. Auricular acupressure activates many of the same meridian points as needle acupuncture, delivered through gentle pressure. Many patients who come to us specifically because of needle phobia find this an ideal entry point — and some later try traditional acupuncture once their anxiety is reduced."
  },
  {
    question: "How long do the ear seeds stay on?",
    answer: "Ear seeds typically stay in place 3–7 days. You press them gently 3–5 times per day to stimulate the points. When they naturally fall off or you return for your next visit, they are replaced if needed."
  },
  {
    question: "Can ear seeds help with anxiety and stress?",
    answer: "Yes — the Shen Men (Spirit Gate) and autonomic nervous system points on the ear have well-documented calming effects. Stimulating these points activates the vagus nerve, helping shift the body out of fight-or-flight and into a more restful state."
  },
  {
    question: "Do ear seeds help with PTSD or trauma responses?",
    answer: "The U.S. Department of Defense and VA have used the Battlefield Acupuncture protocol — an ear seed variant — with veterans experiencing PTSD and combat stress. While not a replacement for trauma therapy, ear seeds can help regulate the nervous system as part of a broader treatment plan."
  },
  {
    question: "Can ear seeds improve sleep?",
    answer: "Many patients report improved sleep quality within the first week of treatment. Points targeting the Shen Men, Heart, and Kidney zones on the ear help quiet the mind and support deeper, more restorative rest."
  },
  {
    question: "How many sessions will I need?",
    answer: "Most patients notice a difference within 2–3 sessions. For chronic stress, anxiety, or pain, a course of 6–8 weekly sessions is typical, followed by maintenance visits every 2–4 weeks. Dr. Cai will assess your individual needs at your first appointment."
  },
  {
    question: "Is ear seed therapy covered by insurance?",
    answer: "Sessions are often covered under Workers' Compensation, Auto Accident PIP (Hawaii No-Fault), and Veterans Community Care. UHA, HMAA, and select Medicare Supplement plans may also apply. Call us at (808) 528-7177 to verify your specific coverage before your first visit."
  },
  {
    question: "Can I drive home after the treatment?",
    answer: "Yes. Unlike some procedures that require recovery time, ear seed therapy produces no sedation or impairment. Most patients return to normal activities immediately after their appointment."
  }
];

export default function BrainResetThroughYourEarPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Brain Reset Through Your Ear™ — Auricular Acupressure (Ear Seed Therapy)",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Needle-free auricular acupressure using vaccaria seeds or gold beads placed on specific ear points to stimulate the vagus nerve and promote relief from stress, anxiety, pain, and sleep disturbances.",
    "recognizingAuthority": [
      { "@type": "Organization", "name": "World Health Organization (WHO)" },
      { "@type": "Organization", "name": "U.S. Department of Defense" }
    ],
    "bodyLocation": "Ear (auricle)",
    "followup": "Seeds remain in place 3–7 days; patient presses points 3–5× daily",
    "preparation": "No preparation required; no downtime after treatment",
    "performedBy": {
      "@type": "Person",
      "name": "Dr. David Cai, O.M.D., L.Ac., L.M.T.",
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "Hawaii L.Ac. ACU-1125" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "NCCAOM Dipl. Ac. & Dipl. C.H. #962-1001-522" }
      ]
    }
  };

  const lilihaSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "AcuTherapy Clinics — Liliha",
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
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "13:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "13:00" }
    ]
  };

  const aieaSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "AcuTherapy Clinics — Aiea",
    "url": "https://acutherapy.com",
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
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "17:00" }
    ]
  };

  const conditions = [
    "Stress & Anxiety", "Insomnia & Sleep Issues", "Chronic Pain", "Headaches & Migraines",
    "PTSD & Trauma Stress", "Fertility Support", "Digestive Issues", "Smoking Cessation",
    "Neck & Shoulder Tension", "Low Energy & Fatigue", "Emotional Eating", "Seasonal Allergies"
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/brainreset" />
        <title>Brain Reset Through Your Ear™ | Needle-Free Ear Seed Therapy Honolulu HI | AcuTherapy</title>
        <meta name="description" content="Needle-free ear seed therapy in Honolulu & Aiea, HI. Auricular acupressure for stress, anxiety, sleep & pain — no needles, no downtime. AcuTherapy Clinics · (808) 528-7177." />
        <meta property="og:title" content="Brain Reset Through Your Ear™ | Needle-Free Ear Seed Therapy Honolulu" />
        <meta property="og:description" content="Needle-free ear seed therapy in Honolulu & Aiea, HI. Auricular acupressure for stress, anxiety, sleep & pain — no needles, no downtime." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acutherapy.com/brainreset" />
        <meta property="og:image" content="https://acutherapy.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(medicalProcedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(lilihaSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(aieaSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-blue-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-300">
                ✓ No Needles Required
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                WHO-Recognized Therapy
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                Same-Day Appointments Available
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Brain Reset Through Your Ear™
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Needle-free auricular acupressure that calms your nervous system, eases pain, and restores sleep — using tiny seeds placed on specific points of your ear. No needles. No downtime. Just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
                <Link to="/book-appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Free Consultation
                </Link>
              </Button>
              <a href="tel:+18085287177" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border-2 border-white text-white font-semibold text-base hover:bg-white/10 transition-colors">
                <PhoneCall className="h-5 w-5" />
                (808) 528-7177
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10">

            {/* Article */}
            <article className="md:col-span-8 space-y-12">

              {/* Needle-free callout */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Scared of Needles? This Is for You.</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Millions of people avoid acupuncture because of needle fear — and miss out on real relief. Brain Reset Through Your Ear™ delivers the same meridian stimulation with zero skin penetration. Small seeds or gold beads are taped to precise points on your outer ear. That's it.
                    </p>
                  </div>
                </div>
              </div>

              {/* What Are Ear Seeds */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Ear Seeds?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Ear seeds are tiny natural seeds (typically from the vaccaria plant) or small gold beads that are secured to specific acupuncture points on your ear using a small piece of adhesive tape. They stay in place for 3–7 days while you go about your normal life.
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { step: "01", title: "Precise Placement", desc: "Dr. Cai maps your ear and places seeds on the points corresponding to your specific symptoms — stress, pain, sleep, digestion, or others." },
                    { step: "02", title: "Continuous Stimulation", desc: "You gently press each seed 3–5 times daily, activating the point and sending a signal through the vagus nerve to your brain and body." },
                    { step: "03", title: "Cumulative Benefit", desc: "Each session builds on the last. Most patients notice a meaningful shift within 2–3 visits; lasting change typically takes 6–8 sessions." }
                  ].map(({ step, title, desc }) => (
                    <Card key={step} className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="text-4xl font-black text-blue-100 mb-3">{step}</div>
                        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Why Your Ear */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Your Ear? The Vagus Nerve Connection</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your ear is the only place on the body's surface where you can directly access the vagus nerve — the main highway of the parasympathetic nervous system. The vagus nerve runs from your brainstem through your heart, lungs, and digestive tract, regulating stress response, inflammation, sleep, mood, and more.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Traditional Chinese medicine mapped over 200 acupuncture points on the ear thousands of years ago. Modern research has confirmed that stimulating these auricular points produces measurable changes in heart rate variability, cortisol levels, and neural activity — backing up what practitioners have observed clinically for centuries.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The World Health Organization recognized auricular acupuncture as a valid therapeutic system in 1990. The U.S. Department of Defense adopted the Battlefield Acupuncture ear protocol for treating pain and stress in active-duty military — a testament to its documented effectiveness.
                </p>
              </div>

              {/* Conditions */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions We Address</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {conditions.map(condition => (
                    <div key={condition} className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
                      <span className="text-emerald-500 font-bold text-lg">✓</span>
                      <span className="text-gray-700 text-sm font-medium">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Authority */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Backed by Global Medical Authorities</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold mt-1">WHO</span>
                    <p className="text-gray-700 text-sm leading-relaxed">The World Health Organization formally recognized auricular acupuncture as a standard medical therapy in 1990, citing its effectiveness for pain, addiction, anxiety, and neurological conditions.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold mt-1 whitespace-nowrap">U.S. DOD</span>
                    <p className="text-gray-700 text-sm leading-relaxed">The U.S. Department of Defense deploys Battlefield Acupuncture — a five-point ear seed protocol — to treat pain, PTSD, and combat stress in military settings across the country.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold mt-1">Dr. Cai</span>
                    <p className="text-gray-700 text-sm leading-relaxed">Dr. David Cai, O.M.D., L.Ac. (Hawaii ACU-1125, NCCAOM #962-1001-522) trained at Beijing University of Chinese Medicine and has practiced auricular acupressure for over 25 years in Honolulu.</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="h-7 w-7 text-blue-700" />
                  <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                  {faqItems.map((item, i) => (
                    <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 list-none">
                        {item.question}
                        <span className="ml-4 text-blue-600 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                      </summary>
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed text-sm">{item.answer}</div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Patients Say</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { name: "Linda Honda", text: "I have benefited from Dr. Cai's treatments over the course of about 10 years, for prevention and treatment of medical, health and lifestyle issues. What keeps me coming back is his integrative educational and supportive caring approach as a foundation for the effective treatments Dr. Cai and Dr. Long have provided. Gratefully recommend AcuTherapy!" },
                    { name: "The Kasanganay Family", text: "It's a clean environment. He was such a kind, very knowledgeable man. Will definitely be coming back." },
                    { name: "Evelyn Layugan", text: "I feel more better since i start my theraphy... a lot of improvement." }
                  ].map(({ name, text }) => (
                    <Card key={name} className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{text}"</p>
                        <p className="font-semibold text-gray-900 text-sm">— {name}</p>
                        <p className="text-xs text-gray-400 mt-1">Google Review</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Services</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "CenterGy Therapy", href: "/centerGy-honolulu" },
                    { label: "Acupuncture for Anxiety", href: "/stress-anxiety-acupuncture-honolulu" },
                    { label: "Brain Reset for Weight Loss™", href: "/weight-loss" },
                    { label: "Acupuncture for Sleep", href: "/insomnia-acupuncture-honolulu" },
                    { label: "Fertility Acupuncture", href: "/fertility-acupuncture-honolulu" },
                  ].map(({ label, href }) => (
                    <Link key={href} to={href} className="inline-block bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium text-sm px-4 py-2 rounded-full transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="md:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="bg-blue-600 h-2 w-full" />
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Ready to Try Needle-Free?</h3>
                    <p className="text-gray-600 text-sm mb-5">Book a consultation — Dr. Cai will explain what ear points apply to your situation before any treatment begins.</p>
                    <Button asChild className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold mb-3">
                      <Link to="/book-appointment">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Appointment
                      </Link>
                    </Button>
                    <a href="tel:+18085287177" className="flex items-center justify-center gap-2 text-blue-700 font-medium text-sm hover:underline">
                      <PhoneCall className="h-4 w-4" />
                      (808) 528-7177 — Liliha
                    </a>
                    <a href="tel:+18084521900" className="flex items-center justify-center gap-2 text-blue-700 font-medium text-sm hover:underline mt-1">
                      <PhoneCall className="h-4 w-4" />
                      (808) 452-1900 — Aiea
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-blue-50">
                  <CardContent className="p-6">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <p className="text-gray-700 text-sm italic leading-relaxed mb-3">
                      "What keeps me coming back is his integrative educational and supportive caring approach as a foundation for the effective treatments Dr. Cai and Dr. Long have provided."
                    </p>
                    <p className="text-sm font-semibold text-gray-900">— Linda Honda</p>
                    <p className="text-xs text-gray-400">Google Review · 10-year patient</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      Two Locations
                    </h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold text-gray-900">Liliha (Honolulu)</p>
                        <p className="text-gray-600">1650 Liliha St, Suite 208</p>
                        <p className="text-gray-600">Mon–Sat 9 AM–1 PM</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Aiea / Pearl City</p>
                        <p className="text-gray-600">98-211 Pali Momi St, Suite 604</p>
                        <p className="text-gray-600">Tue–Sat 9 AM–5 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-blue-600" />
                      Insurance Accepted
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Workers' Compensation</li>
                      <li>✓ Auto Accident PIP</li>
                      <li>✓ Veterans Community Care</li>
                      <li>✓ UHA · HMAA · Medicare Supp.</li>
                      <li>✓ AARP · Humana · AshLink</li>
                    </ul>
                    <Link to="/insurance-accepted" className="text-blue-600 text-sm font-medium hover:underline mt-3 inline-block">
                      View all accepted plans →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">No Needles. Real Relief.</h2>
          <p className="text-blue-100 text-lg mb-8">
            Brain Reset Through Your Ear™ is available at both AcuTherapy locations. Call to book or schedule online — same-day appointments often available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
              <Link to="/book-appointment">Book Your Appointment</Link>
            </Button>
            <a href="tel:+18085287177" className="inline-flex items-center justify-center h-12 px-6 rounded-lg border-2 border-white text-white font-semibold text-base hover:bg-white/10 transition-colors">
              (808) 528-7177
            </a>
          </div>
        </div>
      </section>

      <DoctorProfileCard />
    </>
  );
}
