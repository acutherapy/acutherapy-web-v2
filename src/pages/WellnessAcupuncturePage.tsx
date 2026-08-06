import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, Star, HelpCircle, Shield } from "lucide-react";
import DoctorProfileCard from '@/components/DoctorProfileCard';

const faqItems = [
  {
    question: "Do I need to have a health problem to benefit from acupuncture?",
    answer: "No. Some of our most consistent long-term patients come specifically because they are healthy and want to stay that way. Acupuncture builds resilience — strengthening organ function, regulating the immune response, and optimizing the body's energy distribution before imbalances become symptoms. In Traditional Chinese Medicine, treating the body before illness arises is considered the highest form of medicine."
  },
  {
    question: "What does a wellness session focus on?",
    answer: "Dr. Cai uses the CenterGy diagnostic method to assess your current energy distribution across organ systems. Even without symptoms, the body typically shows patterns of relative excess and deficiency — areas where energy is stagnant and areas where reserves are running low. A wellness session addresses these patterns proactively: nourishing what is deficient, moving what is stagnant, and regulating systems that are beginning to drift out of balance."
  },
  {
    question: "How often should a healthy person receive acupuncture?",
    answer: "For general wellness maintenance, most patients come monthly or seasonally. TCM traditionally recommends a tune-up at the transition of each season — as the body's dominant energy shifts with the natural cycle. Patients under more stress, recovering from exertion, or going through major life transitions may benefit from more frequent sessions. Dr. Cai will make a specific recommendation based on your assessment."
  },
  {
    question: "What is the CenterGy method and how does it apply to wellness?",
    answer: "CenterGy is a precision diagnostic and therapeutic system co-developed by Dr. David Cai and Lisa Long. It maps energy distribution across meridians and organ systems, identifying patterns of imbalance that aren't yet producing symptoms. In a wellness context, CenterGy is particularly valuable because it can detect subtle drift before it manifests — allowing correction at the earliest and easiest stage. It can be applied with or without needles, making it accessible to patients of all preferences."
  },
  {
    question: "Can acupuncture support immune function?",
    answer: "Yes — there is substantial clinical evidence that acupuncture modulates immune activity. Specific acupoints influence the production and activity of natural killer cells, T-lymphocytes, and inflammatory cytokines. Regular acupuncture is associated with fewer respiratory infections, faster recovery from illness, and improved response to seasonal environmental changes. In TCM, the Wei Qi (defensive energy) is cultivated through specific point combinations that have been refined over centuries of practice."
  },
  {
    question: "What's the difference between wellness acupuncture and treatment for a condition?",
    answer: "The goal differs, not the quality of care. When treating a condition, sessions are more frequent and focused on resolving a specific pattern. Wellness acupuncture is maintenance-oriented — less intensive, more preventive. The diagnostic rigor is the same. Dr. Cai conducts a full CenterGy assessment at every visit, regardless of whether you come for treatment or maintenance. What changes is the treatment strategy and frequency."
  }
];

const targets = [
  {
    title: "Low Energy & Fatigue",
    desc: "Functional but not thriving. Getting through the day but never feeling energized. Acupuncture nourishes the Qi and Blood reserves that daily life steadily withdraws."
  },
  {
    title: "Immune Support",
    desc: "Getting sick more than you used to. Slow to recover. Feeling like your defenses aren't as strong as they once were. Regular acupuncture cultivates Wei Qi — the body's defensive layer."
  },
  {
    title: "Preventive Maintenance",
    desc: "Proactively investing in long-term health. Using acupuncture to detect and correct subtle imbalances before they become symptoms — the most efficient form of healthcare."
  },
  {
    title: "Mental Clarity & Focus",
    desc: "Brain fog, difficulty concentrating, mental fatigue that doesn't clear with rest. TCM addresses the organ patterns — Heart, Spleen, Kidney — that underlie cognitive sharpness."
  }
];

export default function WellnessAcupuncturePage() {
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
    "name": "Wellness Acupuncture Honolulu",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Preventive wellness acupuncture in Honolulu, HI. Traditional Chinese Medicine and CenterGy diagnostic method for energy optimization, immune support, and proactive health maintenance.",
    "bodyLocation": "Systemic body points for Qi and Blood cultivation, Wei Qi fortification, and organ system regulation",
    "followup": "Monthly or seasonal maintenance recommended",
    "recognizingAuthority": [{ "@type": "Organization", "name": "World Health Organization (WHO)" }],
    "performedBy": {
      "@type": "Person",
      "name": "Dr. David Cai, O.M.D., L.Ac., L.M.T.",
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "Hawaii L.Ac. ACU-1125" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "NCCAOM Dipl. Ac. #962-1001-522" }
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
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "12:00" }
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
        <link rel="canonical" href="https://acutherapy.com/wellness-acupuncture-honolulu" />
        <title>Wellness Acupuncture Honolulu | Preventive Care · Energy · Immunity | AcuTherapy Clinics</title>
        <meta name="description" content="Preventive wellness acupuncture in Honolulu, HI. Energy optimization, immune support, and whole-body balance through Traditional Chinese Medicine + CenterGy method. Dr. David Cai O.M.D. · (808) 528-7177." />
        <meta property="og:title" content="Wellness Acupuncture Honolulu | AcuTherapy Clinics" />
        <meta property="og:description" content="Preventive wellness acupuncture in Honolulu, HI. Energy optimization, immune support, and whole-body balance through Traditional Chinese Medicine." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acutherapy.com/wellness-acupuncture-honolulu" />
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-500/20 text-teal-200">
                ✦ Preventive Care · Energy · Immunity
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                TCM & CenterGy Method
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                Honolulu & Aiea
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Wellness Acupuncture<br />in Honolulu, HI
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              You don't have to be in pain to benefit from acupuncture. Many of our patients come to maintain their health, build resilience, and keep their body functioning at its best — before problems arise. Traditional Chinese Medicine has always understood that the highest form of care is prevention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
                <Link to="/book-appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Start Your Wellness Plan
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Acupuncture Is Not Just for When Something Goes Wrong</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In the Western medical model, care is reactive — you develop a symptom, you seek treatment. Traditional Chinese Medicine was built on a different premise: the ideal intervention happens before symptoms appear, when imbalances are small and easy to correct.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The body gives signals long before it gives symptoms. A slow accumulation of fatigue. Energy that doesn't quite recover. Moods that are harder to regulate. Sleep that's lighter than it used to be. Immunity that feels less robust. These aren't diagnoses — but they are the body communicating that something is beginning to shift out of balance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Wellness acupuncture at AcuTherapy uses Dr. Cai's CenterGy diagnostic system to read these early signals — mapping the distribution of energy across organ systems and identifying where the body's reserves are being depleted faster than they're being replenished. Treatment at this stage is gentle, efficient, and highly effective.
                </p>
              </div>

              {/* The AcuTherapy Difference */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-5">
                  <Shield className="h-7 w-7 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The AcuTherapy Difference</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Most wellness acupuncture is a standard tonic protocol. At AcuTherapy, every session begins with a <strong>CenterGy</strong> assessment — a precision evaluation of your energy distribution that makes the treatment specific to where your body actually is right now.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                  {[
                    { label: "Precision Diagnostic", desc: "CenterGy maps your current energy state across meridians and organ systems — revealing subtle patterns that generic wellness protocols miss." },
                    { label: "Seasonal Attunement", desc: "TCM aligns treatment with seasonal energy shifts. What your body needs in summer differs from what it needs in winter — Dr. Cai adjusts accordingly." },
                    { label: "Individualized Protocol", desc: "No two wellness sessions are identical. The point selection evolves as your body changes — responsive to what's actually present, not a fixed routine." },
                    { label: "Needle-Free Option", desc: "CenterGy therapy achieves the same regulatory and tonic effects without needles — making wellness care accessible to patients of any preference or sensitivity." }
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Brings People In</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {targets.map(({ title, desc }) => (
                    <Card key={title} className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="text-teal-500 text-xl mb-3">✦</div>
                        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* What Happens in a Session */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens in a Session</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { step: "01", title: "CenterGy Assessment", desc: "Dr. Cai evaluates your energy distribution, identifies patterns of deficiency or stagnation, and determines which organ systems need attention — even in the absence of named symptoms." },
                    { step: "02", title: "Tonic & Regulatory Needling", desc: "Points are selected to nourish Qi and Blood, fortify Wei Qi, move stagnation, and regulate organ function. The session is restorative rather than corrective — building reserves rather than managing symptoms." },
                    { step: "03", title: "Deep Rest & Integration", desc: "30 minutes of quiet rest while the treatment integrates. Most patients leave feeling noticeably clearer, calmer, and more energized — the accumulated benefit builds with each successive session." }
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

              {/* The Seasonal Framework */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Seasonal Framework</h2>
                <div className="space-y-4">
                  {[
                    { phase: "Spring", result: "The season of the Liver and Gallbladder. Energy moves upward and outward — a natural time for detoxification, fresh momentum, and resolving the stagnation that accumulated over winter. Spring sessions focus on moving Liver Qi and supporting the smooth upward flow of Yang energy." },
                    { phase: "Summer", result: "The season of the Heart and Small Intestine. Yang energy reaches its peak — a time for joy, connection, and full engagement. Summer sessions nourish Heart Yin to balance the heat, and cultivate the calm alertness that underlies sustained vitality." },
                    { phase: "Autumn", result: "The season of the Lung and Large Intestine. Energy contracts inward — a time for consolidation, letting go, and building the Wei Qi that will protect through the colder months. Autumn sessions strengthen immune defenses and support the respiratory system." },
                    { phase: "Winter", result: "The season of the Kidney — the root of all Yin and Yang. Winter is for deep restoration, rebuilding Jing (essence), and storing the reserves that will power the year ahead. Winter sessions are deeply nourishing and restorative." }
                  ].map(({ phase, result }) => (
                    <div key={phase} className="flex gap-5 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <div className="flex-shrink-0 w-24">
                        <span className="text-sm font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">{phase}</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Science */}
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-5">The Science of Preventive Acupuncture</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { stat: "Immune ↑", label: "Immune modulation", desc: "Regular acupuncture increases natural killer cell activity, T-lymphocyte function, and regulates inflammatory cytokine production — building the body's defensive capacity over time." },
                    { stat: "Energy ↑", label: "Mitochondrial support", desc: "Acupuncture influences cellular energy production at the mitochondrial level, supporting the metabolic foundation of sustained physical and mental vitality." },
                    { stat: "Qi Flow", label: "Preventive meridian care", desc: "TCM identifies organ system drift before it produces symptoms. CenterGy assessment makes this detection precise — allowing intervention at the earliest and most responsive stage." }
                  ].map(({ stat, label, desc }) => (
                    <div key={stat}>
                      <div className="text-2xl font-black text-teal-300 mb-1">{stat}</div>
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
                    { name: "Linda Honda", text: "I have benefited from Dr. Cai's treatments over the course of about 10 years, for prevention and treatment of medical, health and lifestyle issues. What keeps me coming back is his integrative educational and supportive caring approach." },
                    { name: "The Kasanganay Family", text: "It's a clean environment. He was such a kind, very knowledgeable man. Will definitely be coming back." },
                    { name: "Michelle Lee", text: "He is one of the greatest in town." }
                  ].map(({ name, text }) => (
                    <Card key={name} className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
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
                    { label: "Stress Relief", href: "/stress-relief-acupuncture-honolulu" },
                    { label: "Sleep Improvement", href: "/sleep-acupuncture-honolulu" },
                    { label: "CenterGy Therapy", href: "/centerGy-honolulu" },
                    { label: "Facial Acupuncture", href: "/facial-acupuncture-honolulu" },
                    { label: "Acupuncture Honolulu", href: "/pain-management-honolulu" },
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
                  <div className="bg-teal-500 h-2 w-full" />
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Book Your Visit</h3>
                    <p className="text-gray-500 text-sm mb-4">✓ Prevention is the highest form of medicine</p>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold mb-2 h-12">
                      <Link to="/book-appointment">
                        <Calendar className="mr-2 h-4 w-4" />
                        Check Availability Now
                      </Link>
                    </Button>
                    <p className="text-gray-400 text-xs mb-3">Call Now for Same-Day Availability</p>
                    <a href="tel:+18085287177" className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 text-gray-800 font-semibold hover:bg-gray-50 transition-colors mb-6">
                      <PhoneCall className="h-4 w-4 text-blue-600" />
                      (808) 528-7177
                    </a>

                    <div className="text-left space-y-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Honolulu Clinic (Liliha)</p>
                          <p className="text-gray-600 text-sm">1650 Liliha St, Suite 208</p>
                          <p className="text-gray-600 text-sm">Honolulu, HI 96817</p>
                          <a href="https://maps.google.com/?q=1650+Liliha+St+Suite+208+Honolulu+HI+96817" className="text-blue-600 text-sm font-medium hover:underline" target="_blank" rel="noopener noreferrer">Find us on Google Maps</a>
                          <p className="text-gray-500 text-xs mt-1">Ph: (808) 528-7177 | Fax: (808) 212-9459</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Aiea / Pearl City Clinic</p>
                          <p className="text-gray-600 text-sm">98-211 Pali Momi St, Suite 604</p>
                          <p className="text-gray-600 text-sm">Aiea, HI 96701</p>
                          <a href="https://maps.google.com/?q=98-211+Pali+Momi+St+Suite+604+Aiea+HI+96701" className="text-blue-600 text-sm font-medium hover:underline" target="_blank" rel="noopener noreferrer">Find us on Google Maps</a>
                          <p className="text-gray-500 text-xs mt-1">Ph: (808) 452-1900 | Fax: (808) 452-1521</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="font-bold text-gray-900 text-sm mb-1">Hours of Operation</p>
                        <p className="text-gray-600 text-sm">Mon–Fri: 9am–1pm · Sat: 9am–12pm</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm mb-2">Also serving:</p>
                        <div className="flex flex-wrap gap-2">
                          {["Waikiki", "Kahala", "Ala Moana", "Kaimuki"].map(area => (
                            <span key={area} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{area}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-teal-50">
                  <CardContent className="p-6">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <p className="text-gray-700 text-sm italic leading-relaxed mb-3">
                      "I have benefited from Dr. Cai's treatments over the course of about 10 years, for prevention and treatment of medical, health and lifestyle issues."
                    </p>
                    <p className="text-sm font-semibold text-gray-900">— Linda Honda</p>
                    <p className="text-xs text-gray-400">Google Review · 10-year patient</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 text-sm">About Dr. David Cai</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Doctor of Oriental Medicine, trained at Beijing University of Chinese Medicine. Hawaii L.Ac. ACU-1125, NCCAOM Dipl. Ac. #962-1001-522. 30+ years of clinical practice in Honolulu.
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
          <h2 className="text-3xl font-bold mb-4">Prevention Is the Highest Form of Medicine.</h2>
          <p className="text-blue-100 text-lg mb-8">
            Wellness acupuncture at AcuTherapy combines 30+ years of clinical expertise with the precision of the CenterGy diagnostic system. Available at both Honolulu and Aiea locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
              <Link to="/book-appointment">Start Your Wellness Plan</Link>
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
