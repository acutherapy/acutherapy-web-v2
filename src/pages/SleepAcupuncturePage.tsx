import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, Star, HelpCircle, Moon } from "lucide-react";
import DoctorProfileCard from '@/components/DoctorProfileCard';

const faqItems = [
  {
    question: "Can acupuncture really help me sleep better?",
    answer: "Yes — and the mechanism is well-documented. Acupuncture stimulates the release of melatonin and serotonin, modulates the HPA axis (reducing the cortisol elevation that keeps the brain alert at night), and activates parasympathetic tone that allows the body to transition into sleep. In Traditional Chinese Medicine, insomnia is never treated as a standalone symptom — it's always traced to the underlying pattern (Heart Yin deficiency, Kidney-Heart disconnect, Liver stagnation) that is actually preventing the body from resting. Addressing the root is what produces lasting results."
  },
  {
    question: "How long before I notice improvement in my sleep?",
    answer: "Many patients sleep noticeably better the night of their first session — the deep relaxation response carries over into the evening. Consistent improvement across the week typically emerges after sessions 2–4. By session 6–8, most patients report falling asleep faster, staying asleep longer, and waking with more energy. The improvement tends to be progressive and cumulative rather than dramatic and immediate."
  },
  {
    question: "What types of sleep problems does acupuncture address?",
    answer: "Acupuncture is effective across the full range of sleep difficulties: difficulty falling asleep (mind won't quiet), difficulty staying asleep (waking at 2–4am is classically linked to the Liver in TCM), non-restorative sleep (hours in bed but exhausted on waking), sleep disrupted by anxiety or stress, and sleep that has worsened with age or hormonal changes. The treatment is individualized to the pattern driving your specific type of sleep disruption."
  },
  {
    question: "Is it safe to receive acupuncture while taking sleep medication?",
    answer: "Yes. Acupuncture does not interact with sleep medications. Many patients use acupuncture as a tool to gradually reduce their reliance on sleep aids — not by stopping abruptly, but by building the body's own capacity to sleep so the medication becomes less necessary. Always consult your prescribing physician before making any changes to medication. Inform Dr. Cai of all medications you are taking."
  },
  {
    question: "What TCM patterns cause insomnia?",
    answer: "The most common patterns Dr. Cai identifies: (1) Heart Yin deficiency — the mind has insufficient 'coolant' to quiet at night; symptoms include racing thoughts, night sweats, and waking feeling hot. (2) Kidney-Heart disconnect — the Water energy of the Kidneys fails to anchor the Fire energy of the Heart; associated with chronic exhaustion, fearfulness, and fragmented sleep. (3) Liver Qi stagnation — unresolved tension and frustration create a state of agitation that prevents sleep initiation and causes waking around 2–3am. (4) Spleen Qi deficiency — overthinking and worry exhaust the Spleen, disrupting the mind's ability to settle."
  },
  {
    question: "How many sessions will I need?",
    answer: "For situational or recent-onset insomnia, 4–6 sessions often produces lasting resolution. For chronic insomnia (present for months or years), a course of 8–12 sessions is typically needed to retrain the body's sleep architecture. Monthly maintenance sessions after the initial course help prevent regression, particularly during stressful periods."
  },
  {
    question: "What makes AcuTherapy's approach different for sleep issues?",
    answer: "Dr. Cai uses the CenterGy diagnostic method to identify your specific sleep pattern before treatment. Rather than applying a generic 'insomnia protocol,' he distinguishes between Heart, Kidney, Liver, and Spleen patterns — each requiring a different point strategy. Additionally, CenterGy therapy is available for patients who prefer a needle-free approach. The precision of this diagnostic layer is what makes results more predictable and durable."
  }
];

const targets = [
  {
    title: "Can't Fall Asleep",
    desc: "Lying awake with a mind that won't stop running — replaying the day, planning tomorrow, unable to cross the threshold into sleep despite physical fatigue."
  },
  {
    title: "Waking in the Night",
    desc: "Falling asleep without difficulty but waking at 2, 3, or 4am — and struggling to return to sleep. In TCM, this window often corresponds to Liver imbalance."
  },
  {
    title: "Unrefreshing Sleep",
    desc: "Hours in bed, but waking as tired as when you lay down. Sleep that doesn't restore — leaving the body depleted regardless of duration."
  },
  {
    title: "Stress-Driven Sleep Disruption",
    desc: "Sleep that tracks with anxiety levels — good during calm periods, poor when life gets demanding. The nervous system hasn't learned to disengage from daytime activation."
  }
];

export default function SleepAcupuncturePage() {
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
    "name": "Acupuncture for Sleep Honolulu",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Acupuncture for insomnia and sleep improvement in Honolulu, HI. Traditional Chinese Medicine combined with AcuTherapy's CenterGy diagnostic method to restore natural sleep architecture.",
    "bodyLocation": "Points targeting Heart, Kidney, Liver, and Spleen meridians; calming and anchoring point combinations",
    "followup": "Monthly maintenance recommended after initial course of 6–12 sessions",
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
        <link rel="canonical" href="https://acutherapy.com/sleep-acupuncture-honolulu" />
        <title>Acupuncture for Sleep Honolulu | Insomnia · Restless Nights · Poor Sleep | AcuTherapy Clinics</title>
        <meta name="description" content="Acupuncture for insomnia and sleep improvement in Honolulu, HI. Whether you can't fall asleep or wake exhausted, TCM + CenterGy method addresses the root. Dr. David Cai O.M.D. · (808) 528-7177." />
        <meta property="og:title" content="Acupuncture for Sleep Honolulu | AcuTherapy Clinics" />
        <meta property="og:description" content="Acupuncture for insomnia and sleep improvement in Honolulu, HI. Traditional Chinese Medicine addresses the root cause of poor sleep." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acutherapy.com/sleep-acupuncture-honolulu" />
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-200">
                ✦ Insomnia · Restless Nights · Poor Sleep
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                TCM & CenterGy Method
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                Honolulu & Aiea
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Acupuncture for Sleep<br />in Honolulu, HI
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you can't fall asleep, wake through the night, or rise exhausted after hours in bed — acupuncture works on the root cause of sleep disruption, not just the surface symptoms. Traditional Chinese Medicine combined with Dr. Cai's CenterGy diagnostic method.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
                <Link to="/book-appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="tel:+18085287177">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  (808) 528-7177
                </a>
              </Button>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Sleep Problems Resist Simple Solutions</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Poor sleep is rarely just about bedtime habits. The body has a sophisticated biological architecture for sleep — one that depends on hormonal balance, nervous system regulation, and the proper flow of energy through internal organ systems. When any of these are disrupted, sleep suffers in predictable and identifiable ways.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conventional approaches focus on the symptom: a pill to induce sedation, a supplement to raise melatonin, a behavioral protocol to condition sleep onset. Acupuncture works differently — it identifies and corrects the underlying physiological and energetic imbalance that is preventing the body from sleeping on its own.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In Traditional Chinese Medicine, every pattern of poor sleep has a specific signature. Inability to fall asleep despite exhaustion typically indicates Heart Yin deficiency. Waking between 2 and 4am and lying alert for hours is the classic presentation of Liver Qi stagnation. Sleeping long but rising depleted points to Kidney deficiency or Spleen Qi weakness. The treatment is built around your pattern — not a standard protocol.
                </p>
              </div>

              {/* The AcuTherapy Difference */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-5">
                  <Moon className="h-7 w-7 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The AcuTherapy Difference</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Cai uses the <strong>CenterGy</strong> diagnostic system to distinguish between the patterns causing your sleep disruption — before any needles are placed. This precision is what makes the treatment effective where generic approaches have failed.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                  {[
                    { label: "Pattern Identification", desc: "Heart, Kidney, Liver, Spleen — each pattern produces a different type of sleep disturbance. Dr. Cai identifies yours precisely." },
                    { label: "CenterGy Energy Mapping", desc: "A diagnostic system that maps energy distribution across organ systems, revealing the root of your specific sleep difficulty." },
                    { label: "Individualized Protocol", desc: "Your point selection is unique to your constitution and pattern — not drawn from a standard insomnia template." },
                    { label: "Needle-Free Option", desc: "For patients who prefer to avoid needles, CenterGy therapy achieves the same regulatory effect through non-needle stimulation." }
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
                        <div className="text-indigo-500 text-xl mb-3">✦</div>
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
                    { step: "01", title: "Sleep Pattern Assessment", desc: "Dr. Cai evaluates the type, timing, and quality of your sleep disruption alongside your overall constitution. This maps directly to a TCM pattern — Heart, Kidney, Liver, or Spleen." },
                    { step: "02", title: "Targeted Needling", desc: "Points are selected to calm the Heart, anchor Kidney energy, smooth Liver Qi, or nourish the Spleen — depending on your pattern. Body and scalp points work together to shift the nervous system toward rest." },
                    { step: "03", title: "Deep Rest Phase", desc: "Most patients enter a deeply relaxed state within minutes of needle placement — many fall asleep on the table. This rest itself is part of the treatment, allowing the nervous system to practice the state it needs to sustain at night." }
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

              {/* Timeline */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect Over Time</h2>
                <div className="space-y-4">
                  {[
                    { phase: "Night of Session 1", result: "Many patients sleep better the same night. The parasympathetic activation from the session carries into the evening, making sleep onset easier and nighttime waking less frequent." },
                    { phase: "Sessions 2–4", result: "Consistent improvement across the full week. Falling asleep becomes easier. Waking episodes reduce in frequency. Morning fatigue begins to lift as sleep quality improves." },
                    { phase: "Sessions 5–8", result: "Sleep architecture stabilizes. The body begins producing its own melatonin and cortisol rhythm more reliably. Patients who were dependent on sleep aids often find they need them less." },
                    { phase: "Maintenance", result: "Monthly sessions sustain the results, particularly through stressful periods that would previously have disrupted sleep. Many patients describe sleeping better at 6 months than they did before the problem started." }
                  ].map(({ phase, result }) => (
                    <div key={phase} className="flex gap-5 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <div className="flex-shrink-0 w-36">
                        <span className="text-sm font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full whitespace-nowrap">{phase}</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Science */}
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-5">The Science of Acupuncture & Sleep</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { stat: "Melatonin ↑", label: "Pineal regulation", desc: "Acupuncture stimulates melatonin secretion through the pineal gland — restoring the body's internal clock and making natural sleep onset more reliable." },
                    { stat: "Cortisol ↓", label: "Stress hormone reduction", desc: "Elevated night-time cortisol is one of the most common drivers of insomnia. Acupuncture reduces cortisol through HPA axis modulation, allowing the brain to power down." },
                    { stat: "Qi Flow", label: "Organ system rebalancing", desc: "TCM locates the root of sleep disruption in Heart, Kidney, Liver, or Spleen imbalance. Correcting Qi flow through these meridians restores the body's natural capacity for deep rest." }
                  ].map(({ stat, label, desc }) => (
                    <div key={stat}>
                      <div className="text-2xl font-black text-indigo-300 mb-1">{stat}</div>
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
                    { label: "General Wellness", href: "/wellness-acupuncture-honolulu" },
                    { label: "Brain Reset — Ear Seeds", href: "/brainreset" },
                    { label: "CenterGy Therapy", href: "/centerGy-honolulu" },
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
                  <div className="bg-indigo-500 h-2 w-full" />
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Book Your Visit</h3>
                    <p className="text-gray-500 text-sm mb-4">✓ Many patients sleep better the same night</p>
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

                <Card className="border-0 shadow-sm bg-indigo-50">
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
          <h2 className="text-3xl font-bold mb-4">You Deserve a Night of Real Rest.</h2>
          <p className="text-blue-100 text-lg mb-8">
            Sleep acupuncture at AcuTherapy works on the root cause — not just the surface symptom. Available at both Honolulu and Aiea locations with Dr. David Cai, O.M.D.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
              <Link to="/book-appointment">Book Your Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+18085287177">(808) 528-7177</a>
            </Button>
          </div>
        </div>
      </section>

      <DoctorProfileCard />
    </>
  );
}
