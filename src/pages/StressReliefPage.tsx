import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, Star, HelpCircle, Zap } from "lucide-react";
import DoctorProfileCard from '@/components/DoctorProfileCard';

const faqItems = [
  {
    question: "How does acupuncture help with stress?",
    answer: "Acupuncture activates the parasympathetic nervous system — the body's 'rest and digest' state — by stimulating specific points that regulate the hypothalamic-pituitary-adrenal (HPA) axis. Clinically, this reduces circulating cortisol, relaxes muscle tension, and slows heart rate. In Traditional Chinese Medicine, most stress-related symptoms trace to Liver Qi stagnation (tension, frustration, tightness) or Heart-Spleen deficiency (anxiety, worry, fatigue). Acupuncture addresses both the physiological stress response and the underlying energetic pattern simultaneously."
  },
  {
    question: "How quickly will I notice a difference?",
    answer: "Many patients feel a measurable shift — deeper breathing, muscle release, mental quiet — during the first session. The effect accumulates with each visit. By sessions 3–5, most patients report sleeping better, reacting less intensely to stressors, and experiencing a baseline sense of calm they hadn't felt in months or years. Results vary depending on how long the stress pattern has been established."
  },
  {
    question: "How many sessions do I need?",
    answer: "For acute stress or situational anxiety, a short course of 4–6 sessions often produces lasting relief. For chronic stress, burnout, or long-standing anxiety patterns, a course of 8–12 sessions is recommended to retrain the nervous system response. Monthly maintenance sessions help sustain results and prevent accumulation."
  },
  {
    question: "Can acupuncture help with anxiety as well as physical tension?",
    answer: "Yes — in practice, they rarely separate. Physical tension (tight shoulders, jaw clenching, chest tightness) and mental anxiety (racing thoughts, irritability, worry) arise from the same underlying dysregulation. Acupuncture addresses both simultaneously. Patients who come in for 'tight muscles' often report their mental quietness improves first; those who come in for anxiety find their body releases tension they hadn't consciously noticed."
  },
  {
    question: "Is it safe to come during a particularly stressful period?",
    answer: "Absolutely — that's often when it's most valuable. There's no contraindication to receiving acupuncture while under stress. Most patients find that even one session during a high-stress period provides enough relief to think more clearly, sleep better, and navigate the situation with more composure. You don't need to wait until things calm down."
  },
  {
    question: "What makes AcuTherapy's approach different from other acupuncture clinics?",
    answer: "Dr. Cai integrates the CenterGy diagnostic method — a precision energy-mapping system he co-developed with Lisa Long — before selecting points. Rather than applying a standard 'stress protocol,' Dr. Cai identifies your specific pattern (Liver stagnation vs. Heart deficiency vs. Kidney depletion) and constructs a session that addresses your constitution, not just your symptoms. This individualization is what produces results that outlast the treatment room."
  },
  {
    question: "Can acupuncture be combined with therapy or medication?",
    answer: "Yes, and it often works better as part of a broader care plan. Acupuncture does not interfere with psychiatric medications or talk therapy — in fact, many therapists and prescribers specifically recommend acupuncture as a complementary tool because it addresses the physiological dimension of stress that cognitive approaches alone can't reach. Always inform Dr. Cai of any medications you are taking."
  }
];

const targets = [
  {
    title: "Persistent Tension",
    desc: "Tight neck and shoulders, headaches, jaw clenching, chronic muscle stiffness — the body carrying stress as physical load, day after day."
  },
  {
    title: "Anxiety & Worry",
    desc: "Racing mind, difficulty unwinding, irritability, a sense of dread that's hard to name — mental patterns that don't switch off when circumstances improve."
  },
  {
    title: "Burnout & Depletion",
    desc: "Exhausted despite sleep, no motivation, flat emotional response, pushing through on empty — the state where the body's reserves have been withdrawn faster than they're replenished."
  },
  {
    title: "Emotional Overload",
    desc: "Mood swings, feeling overwhelmed by ordinary demands, short fuse, difficulty recovering from setbacks — when the nervous system's bandwidth is saturated."
  }
];

export default function StressReliefPage() {
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
    "name": "Stress Relief Acupuncture Honolulu",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Acupuncture for stress relief in Honolulu, HI. Traditional Chinese Medicine combined with AcuTherapy's CenterGy diagnostic method to regulate the nervous system, reduce cortisol, and restore calm.",
    "bodyLocation": "Systemic body points targeting HPA axis and Liver, Heart, Kidney meridians",
    "followup": "Monthly maintenance recommended after initial course",
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
        <link rel="canonical" href="https://acutherapy.com/stress-relief-acupuncture-honolulu" />
        <title>Stress Relief Acupuncture Honolulu | Anxiety · Tension · Burnout | AcuTherapy Clinics</title>
        <meta name="description" content="Acupuncture for stress relief in Honolulu, HI. Reduce anxiety, release tension, and restore calm with Traditional Chinese Medicine + CenterGy method. Dr. David Cai O.M.D. · (808) 528-7177." />
        <meta property="og:title" content="Stress Relief Acupuncture Honolulu | AcuTherapy Clinics" />
        <meta property="og:description" content="Acupuncture for stress relief in Honolulu, HI. Reduce anxiety, release tension, and restore calm with Traditional Chinese Medicine." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acutherapy.com/stress-relief-acupuncture-honolulu" />
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-200">
                ✦ Anxiety · Burnout · Tension
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                TCM & CenterGy Method
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                Honolulu & Aiea
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Stress Relief Acupuncture<br />in Honolulu, HI
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Persistent stress rewires your nervous system, tightens muscles, disrupts sleep, and depletes your energy reserves. Acupuncture at AcuTherapy addresses the root — not just the symptoms — using Traditional Chinese Medicine and Dr. Cai's signature CenterGy diagnostic method.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Stress Does to the Body — and What Acupuncture Does About It</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When stress is chronic, the body stops treating it as a temporary emergency and begins operating as though the threat is permanent. Cortisol stays elevated. Muscles hold tension that never fully releases. Sleep becomes shallow. The digestive system slows. Emotional regulation narrows. Over time, this sustained state of activation depletes the body's reserves at every level.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Acupuncture interrupts this cycle by directly engaging the autonomic nervous system. Stimulation of specific acupoints activates the parasympathetic branch — shifting the body out of 'fight or flight' and into a restorative state. Research consistently shows measurable reductions in cortisol, heart rate, and inflammatory markers following acupuncture treatment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In Traditional Chinese Medicine, stress-related symptoms map to specific organ system patterns. Tight neck and shoulders, frustration, and headaches typically reflect Liver Qi stagnation. Anxiety, overthinking, and fatigue after worry point to Heart and Spleen deficiency. Dr. Cai identifies your specific pattern — rather than applying a generic protocol — and selects points accordingly.
                </p>
              </div>

              {/* The AcuTherapy Difference */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-5">
                  <Zap className="h-7 w-7 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The AcuTherapy Difference</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Standard acupuncture clinics apply a fixed 'stress protocol.' At AcuTherapy, Dr. Cai uses the <strong>CenterGy</strong> diagnostic system — co-developed with Lisa Long — to identify your individual stress pattern before treatment begins.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                  {[
                    { label: "Pattern-Based Diagnosis", desc: "Dr. Cai distinguishes Liver stagnation from Heart deficiency from Kidney depletion — each requiring a different point strategy." },
                    { label: "CenterGy Energy Mapping", desc: "Precision assessment of your body's energy distribution reveals where stress is stored and where reserves are depleted." },
                    { label: "Individualized Point Selection", desc: "No standard protocol. Every session is constructed around your constitution and current state." },
                    { label: "Needle-Free Option Available", desc: "For patients sensitive to needles, CenterGy therapy achieves the same nervous system regulation without needle insertion." }
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
                        <div className="text-green-500 text-xl mb-3">✦</div>
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
                    { step: "01", title: "Pattern Assessment", desc: "Dr. Cai identifies your specific stress pattern — Liver, Heart, Kidney, or a combination — using the CenterGy diagnostic method. This shapes everything that follows." },
                    { step: "02", title: "Targeted Needling", desc: "Points are placed to calm the nervous system, release held tension, and restore Qi flow through the meridians affected by your pattern. Most patients feel the shift within minutes." },
                    { step: "03", title: "Deep Rest Phase", desc: "Needles remain for 25–30 minutes. The room is quiet and warm. Most patients fall into a state between sleep and waking — what many describe as the deepest rest they've felt in months." }
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

              {/* What to Expect Over Time */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect Over Time</h2>
                <div className="space-y-4">
                  {[
                    { phase: "Sessions 1–2", result: "Immediate relaxation response. Most patients leave the first session feeling noticeably lighter — muscles release, breathing deepens, mental noise quiets. Sleep often improves within the first week." },
                    { phase: "Sessions 3–5", result: "The baseline shifts. Stress reactions become less intense. Physical tension doesn't accumulate as fast. Emotional recovery time shortens. Many patients describe feeling like themselves again." },
                    { phase: "Sessions 6–10", result: "Sustained nervous system regulation. The pattern that was driving chronic stress begins to resolve at the root. Energy levels stabilize. Sleep, digestion, and mood all benefit as the system rebalances." },
                    { phase: "Maintenance", result: "Monthly or seasonal sessions sustain the progress and prevent accumulation. Many patients continue on a maintenance schedule because the quality-of-life benefit is too valuable to give up." }
                  ].map(({ phase, result }) => (
                    <div key={phase} className="flex gap-5 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <div className="flex-shrink-0 w-28">
                        <span className="text-sm font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full">{phase}</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Science */}
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-5">The Science of Acupuncture & Stress</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { stat: "Cortisol ↓", label: "HPA axis regulation", desc: "Acupuncture stimulation modulates the hypothalamic-pituitary-adrenal axis, reducing cortisol secretion and breaking the physiological stress cycle." },
                    { stat: "Vagus ↑", label: "Parasympathetic activation", desc: "Specific acupoints activate vagal tone — shifting the nervous system from sympathetic (alert) to parasympathetic (rest and repair) dominance." },
                    { stat: "Qi Flow", label: "Meridian rebalancing", desc: "TCM maps stress to Liver, Heart, and Kidney meridians. Restoring Qi flow through these channels addresses the energetic root of chronic stress patterns." }
                  ].map(({ stat, label, desc }) => (
                    <div key={stat}>
                      <div className="text-2xl font-black text-green-300 mb-1">{stat}</div>
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
                    { name: "Linda Honda", text: "I have benefited from Dr. Cai's treatments over the course of about 10 years, for prevention and treatment of medical, health and lifestyle issues. What keeps me coming back is his integrative educational and supportive caring approach as a foundation for the effective treatments Dr. Cai and Dr. Long have provided." },
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
                    { label: "Sleep Improvement", href: "/sleep-acupuncture-honolulu" },
                    { label: "General Wellness", href: "/wellness-acupuncture-honolulu" },
                    { label: "Brain Reset — Ear Seeds", href: "/brainreset" },
                    { label: "CenterGy Therapy", href: "/centerGy-honolulu" },
                    { label: "Neck Pain Relief", href: "/neck-pain-acupuncture-honolulu" },
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
                  <div className="bg-green-500 h-2 w-full" />
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Book Your Visit</h3>
                    <p className="text-gray-500 text-sm mb-4">✓ Most patients feel a shift within the first session</p>
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

                <Card className="border-0 shadow-sm bg-green-50">
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
          <h2 className="text-3xl font-bold mb-4">Your Nervous System Has an Off Switch. We Know How to Find It.</h2>
          <p className="text-blue-100 text-lg mb-8">
            Stress relief acupuncture at AcuTherapy combines the precision of Traditional Chinese Medicine with Dr. Cai's 30+ years of clinical expertise. Available at both Honolulu and Aiea locations.
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
