import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, Star, HelpCircle, Sparkles } from "lucide-react";
import DoctorProfileCard from '@/components/DoctorProfileCard';

const faqItems = [
  {
    question: "What is facial acupuncture and how does it work?",
    answer: "Facial acupuncture uses ultra-fine needles placed at precise points on the face, scalp, and body to stimulate collagen production, increase local circulation, and activate the skin's natural repair cycle. In Traditional Chinese Medicine, the face is a map of internal organ health — by addressing both the surface and the underlying Qi (energy) flow, facial acupuncture produces results that topical skincare alone cannot achieve."
  },
  {
    question: "How is AcuTherapy's approach different from standard facial acupuncture?",
    answer: "Dr. Cai combines classical Chinese facial acupuncture technique with AcuTherapy's signature CenterGy diagnostic method — a precision energy-mapping system he co-developed with Lisa Long. Before any needles are placed, Dr. Cai identifies the specific meridian imbalances contributing to your skin concerns. This allows point selection to be individualized to your constitution, not just your symptoms, producing deeper and longer-lasting results."
  },
  {
    question: "How many sessions do I need to see results?",
    answer: "Most patients notice improved brightness, reduced puffiness, and a more even skin tone after 3–4 sessions. Visible lifting and fine line reduction typically emerge over a course of 8–12 weekly sessions. Results are cumulative — each session builds on the last. Maintenance visits every 4–6 weeks help preserve and extend the outcome."
  },
  {
    question: "Does facial acupuncture hurt?",
    answer: "Facial needles are among the finest used in acupuncture practice — most patients describe a brief pressure sensation at insertion, followed by a deep relaxation during the session. Many patients fall asleep on the table. Post-session redness typically resolves within 30–60 minutes. Bruising is uncommon but possible, especially on first visits."
  },
  {
    question: "Can facial acupuncture replace Botox or dermal fillers?",
    answer: "Facial acupuncture and injectables work through different mechanisms. Botox temporarily paralyzes muscle movement; fillers add volume mechanically. Facial acupuncture works by stimulating the body's own collagen synthesis and retraining facial muscle tone — the result looks more natural and improves over time rather than fading abruptly. Many patients choose acupuncture as a natural alternative; others use it to extend the interval between injectable appointments. It is not a medical replacement for injectables but a powerful complement or standalone treatment."
  },
  {
    question: "Is facial acupuncture effective for acne?",
    answer: "Yes. Acne in TCM is often linked to excess Heat, Dampness, or Liver Qi stagnation — internal patterns that no topical product addresses. Facial acupuncture combined with body points targeting these root causes can significantly reduce active breakouts, calm inflammation, and improve the texture of acne-scarred skin over a treatment course."
  },
  {
    question: "What should I expect after a session?",
    answer: "Immediately after: skin appears luminous and slightly flushed (the circulation response). Most patients feel deeply relaxed — some feel energized, others feel a pleasant heaviness. Mild needle marks or slight puffiness may be visible for a few hours. We recommend avoiding heavy makeup for 4–6 hours post-treatment and protecting skin from sun exposure. No downtime is required."
  },
  {
    question: "How long do results last?",
    answer: "After a full course (8–12 sessions), results typically persist 6–12 months with monthly maintenance. Unlike injectables that wear off uniformly, collagen built through acupuncture is your own — the quality of results tends to improve over successive treatment courses as cumulative collagen remodeling occurs."
  },
  {
    question: "Is facial acupuncture covered by insurance?",
    answer: "Facial acupuncture is a cosmetic / elective treatment and is not covered by health insurance, Workers' Compensation, or Auto PIP. Sessions are self-pay. Please call (808) 528-7177 for current pricing and package options."
  }
];

const targets = [
  {
    icon: "✦",
    title: "Anti-Aging & Fine Lines",
    desc: "Stimulates collagen and elastin synthesis in the dermal layer — reducing the appearance of fine lines, crow's feet, and forehead creases without paralysis or freezing."
  },
  {
    icon: "✦",
    title: "Skin Lifting & Firming",
    desc: "Micro-trauma from needling activates fibroblast activity and tightens facial fascia — producing a visible lift in the jawline, cheeks, and brow over a treatment course."
  },
  {
    icon: "✦",
    title: "Brightening & Radiance",
    desc: "Increased micro-circulation delivers more oxygen and nutrients to skin cells, fading dark spots, reducing dullness, and restoring the healthy glow that stress and aging diminish."
  },
  {
    icon: "✦",
    title: "Acne & Breakout Control",
    desc: "Addresses the root TCM patterns driving acne — Liver Heat, Stomach Fire, Dampness — while reducing local inflammation and promoting faster healing of active blemishes."
  }
];

export default function FacialAcupunctureHonoluluPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Facial Acupuncture — Cosmetic Acupuncture Honolulu",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Traditional Chinese facial acupuncture combined with AcuTherapy's CenterGy precision method. Ultra-fine needles stimulate collagen production, increase circulation, and address the internal TCM patterns underlying skin aging, dullness, and acne.",
    "bodyLocation": "Face, scalp, and systemic body points",
    "followup": "Monthly maintenance recommended after initial course of 8–12 weekly sessions",
    "preparation": "Arrive with clean skin; avoid heavy makeup. No dietary restrictions required.",
    "recognizingAuthority": [
      { "@type": "Organization", "name": "World Health Organization (WHO)" }
    ],
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

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/facial-acupuncture-honolulu" />
        <title>Facial Acupuncture Honolulu | Anti-Aging · Skin Lifting · Collagen | AcuTherapy Clinics</title>
        <meta name="description" content="Facial acupuncture in Honolulu, HI — traditional Chinese technique + AcuTherapy's signature method. Lift, brighten & renew skin naturally. Anti-aging, acne, radiance. Dr. David Cai O.M.D. · (808) 528-7177." />
        <meta property="og:title" content="Facial Acupuncture Honolulu | Anti-Aging Skin Renewal | AcuTherapy" />
        <meta property="og:description" content="Facial acupuncture in Honolulu, HI — traditional Chinese technique + AcuTherapy's signature method. Lift, brighten & renew skin naturally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acutherapy.com/facial-acupuncture-honolulu" />
        <meta property="og:image" content="https://acutherapy.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(procedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(lilihaSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(aieaSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-blue-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rose-500/20 text-rose-200">
                ✦ Traditional Chinese + Signature Method
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                Natural · No Toxins · No Fillers
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                Honolulu & Aiea
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Facial Acupuncture<br />in Honolulu, HI
            </h1>
            <p className="text-xl text-blue-100 mb-4 leading-relaxed">
              Lift, brighten, and renew your skin with the precision of Traditional Chinese Medicine — combined with AcuTherapy's own CenterGy diagnostic method. No toxins, no downtime, no artificial volume. Just your skin, performing at its best.
            </p>
            <p className="text-blue-300 text-sm mb-8">
              Self-pay treatment · Not covered by medical insurance
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
                <Link to="/book-appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
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
            <article className="md:col-span-8 space-y-14">

              {/* What Is It */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Facial Acupuncture?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Facial acupuncture — also called cosmetic acupuncture — uses ultra-fine needles placed at precise points across the face, scalp, neck, and body to trigger the skin's natural renewal mechanisms. The result is a non-surgical treatment that builds visible improvement over time, rather than masking signs of aging with temporary chemical intervention.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At the biological level, each needle creates a controlled micro-stimulus that activates fibroblasts — the cells responsible for producing collagen and elastin. Simultaneously, local circulation increases, delivering more oxygen and nutrients to the dermal layer while accelerating the removal of waste products that contribute to dullness and uneven tone.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In Traditional Chinese Medicine, the face is a direct reflection of internal organ health. Premature wrinkles, persistent acne, and chronic dullness each correspond to specific internal imbalances. Facial acupuncture corrects both the surface presentation and the underlying pattern — something no topical skincare can achieve.
                </p>
              </div>

              {/* The AcuTherapy Difference */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-5">
                  <Sparkles className="h-7 w-7 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The AcuTherapy Difference</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Most clinics apply a standard facial acupuncture protocol. Dr. Cai goes further — integrating the <strong>CenterGy</strong> precision diagnostic system (co-developed with Lisa Long) to map your individual energy patterns before any needles are placed.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                  {[
                    { label: "Traditional Chinese Technique", desc: "Classical facial and scalp point selection refined over centuries of practice — the foundation of the treatment." },
                    { label: "CenterGy Diagnostic Layer", desc: "Dr. Cai identifies the meridian imbalances specific to your constitution, selecting body points that amplify and sustain the facial results." },
                    { label: "Individualized Protocol", desc: "No two sessions are identical. Point prescription evolves as your skin responds and your internal balance shifts." },
                    { label: "Whole-Body Integration", desc: "Facial acupuncture here is never just cosmetic — sleep, stress, digestion, and hormonal balance are addressed in the same session." }
                  ].map(({ label, desc }) => (
                    <div key={label} className="bg-white rounded-xl p-4 border border-blue-100">
                      <p className="font-semibold text-blue-800 text-sm mb-1">{label}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who It's For */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who It's For</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {targets.map(({ icon, title, desc }) => (
                    <Card key={title} className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="text-rose-400 text-xl mb-3">{icon}</div>
                        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens in a Session</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { step: "01", title: "Diagnostic Mapping", desc: "Dr. Cai assesses your skin concerns, constitution, and internal patterns using the CenterGy method. This determines which facial and body points are selected for your session." },
                    { step: "02", title: "Facial & Body Needling", desc: "Ultra-fine needles are placed at precise points across the face (targeting fine lines, lift zones, and problem areas), scalp, and systemic body points. Most patients feel deep relaxation within minutes." },
                    { step: "03", title: "Rest & Activate", desc: "Needles remain in place for 25–30 minutes while collagen synthesis activates, circulation increases, and your nervous system shifts into a restorative state. Many patients sleep during this phase." }
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

              {/* Treatment Timeline */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect — Treatment Timeline</h2>
                <div className="space-y-4">
                  {[
                    { phase: "Sessions 1–3", result: "Immediate brightening and glow after each session. Skin texture begins to smooth. Puffiness and dullness visibly reduce. Many patients notice friends commenting on their appearance." },
                    { phase: "Sessions 4–6", result: "Fine lines and surface wrinkles soften. Skin tone becomes more even. Active acne breakouts decrease in frequency and severity. Lifting effect becomes noticeable at the jawline and cheeks." },
                    { phase: "Sessions 7–12", result: "Cumulative collagen remodeling produces significant lifting, firming, and wrinkle reduction. Acne scarring improves. Skin appears consistently radiant between sessions." },
                    { phase: "Monthly Maintenance", result: "Results are preserved and enhanced. Over successive treatment courses, the quality of your skin's collagen matrix continues to improve — the opposite of the 'wearing off' experience with injectables." }
                  ].map(({ phase, result }) => (
                    <div key={phase} className="flex gap-5 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <div className="flex-shrink-0 w-28">
                        <span className="text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">{phase}</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Science */}
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-5">The Science Behind the Results</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { stat: "Collagen ↑", label: "Fibroblast activation", desc: "Needling triggers controlled micro-trauma that stimulates fibroblasts to synthesize new collagen and elastin — the structural proteins responsible for skin firmness and elasticity." },
                    { stat: "Circulation ↑", label: "Micro-vascular response", desc: "Local blood flow increases at each needle site, delivering oxygen, growth factors, and nutrients to the dermal layer while flushing out metabolic waste products." },
                    { stat: "Qi Flow", label: "Meridian rebalancing", desc: "TCM views skin as the outer expression of internal organ health. Restoring Qi flow through facial and body meridians treats the root cause of aging and skin disorders." }
                  ].map(({ stat, label, desc }) => (
                    <div key={stat}>
                      <div className="text-2xl font-black text-rose-300 mb-1">{stat}</div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{label}</div>
                      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
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
                    { name: "Michelle Lee", text: "He is one of the greatest in town." }
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

              {/* Related */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Services</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "Brain Reset — Ear Seeds", href: "/brainreset" },
                    { label: "Weight Loss Support", href: "/weight-loss" },
                    { label: "CenterGy Therapy", href: "/centerGy-honolulu" },
                    { label: "Fertility Acupuncture", href: "/fertility-acupuncture-honolulu" },
                    { label: "Medical Massage", href: "/medical-massage-honolulu" },
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
                  <div className="bg-rose-400 h-2 w-full" />
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Book Your Facial Acupuncture Session</h3>
                    <p className="text-gray-600 text-sm mb-5">Consultation included. Dr. Cai will assess your skin concerns and design a protocol specific to your constitution.</p>
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

                <Card className="border-0 shadow-sm bg-rose-50">
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

                <Card className="border-0 shadow-sm bg-amber-50 border border-amber-100">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 text-sm">Pricing & Insurance</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Facial acupuncture is a <strong>self-pay treatment</strong>. It is not covered by health insurance, Workers' Compensation, or Auto PIP.
                    </p>
                    <p className="text-gray-600 text-sm mt-2">Call for current pricing and package rates.</p>
                    <a href="tel:+18085287177" className="text-blue-600 text-sm font-medium hover:underline mt-2 inline-block">(808) 528-7177</a>
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
                    <h3 className="font-bold text-gray-900 mb-3 text-sm">About Dr. David Cai</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Doctor of Oriental Medicine, trained at Beijing University of Chinese Medicine. Hawaii L.Ac. ACU-1125, NCCAOM Dipl. Ac. & Dipl. C.H. #962-1001-522. 30+ years of clinical practice in Honolulu.
                    </p>
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
          <h2 className="text-3xl font-bold mb-4">Your Skin Has a Better Version of Itself.</h2>
          <p className="text-blue-100 text-lg mb-8">
            Facial acupuncture at AcuTherapy combines the precision of Traditional Chinese Medicine with Dr. Cai's 30+ years of clinical expertise. Available at both Honolulu and Aiea locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
              <Link to="/book-appointment">Book Your Consultation</Link>
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
