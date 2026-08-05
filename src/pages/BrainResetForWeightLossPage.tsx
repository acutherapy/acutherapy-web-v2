import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Star, HelpCircle, AlertCircle } from "lucide-react";
import DoctorProfileCard from '@/components/DoctorProfileCard';

const faqItems = [
  {
    question: "Can ear seeds actually reduce cravings?",
    answer: "Clinical studies show that stimulating specific ear points — particularly the Hunger Point, Shen Men, and Endocrine point — can reduce appetite signals and the intensity of food cravings. Patients often report feeling less driven by emotional hunger within the first few sessions."
  },
  {
    question: "Is this for emotional eating or physical hunger?",
    answer: "Both, but it's especially effective for stress-driven and emotional eating — the kind where you're not physically hungry but find yourself reaching for food anyway. Ear seeds work by calming the nervous system and reducing the cortisol spike that drives stress eating, rather than directly suppressing metabolic appetite."
  },
  {
    question: "Will ear seed therapy actually make me lose weight?",
    answer: "Ear seed therapy is a supportive tool, not a weight-loss medication. It does not directly burn fat or alter metabolism. What it does is help reduce the cravings, stress eating, and sleep disruption that make it harder to stick to healthier habits. Most patients find it most effective when combined with changes to diet, movement, or stress management."
  },
  {
    question: "I'm on Ozempic (semaglutide). Can I combine ear seed therapy?",
    answer: "Yes. Ear seed therapy and GLP-1 medications work through entirely different mechanisms and do not interact. Many patients on Ozempic or similar medications still struggle with stress eating and emotional triggers — ear seeds specifically address these patterns. It's a complementary approach, not a replacement."
  },
  {
    question: "How many sessions does it take to notice a difference?",
    answer: "Many patients notice reduced craving intensity within 2–3 sessions. For sustained behavior change, a course of 6–8 weekly sessions followed by monthly maintenance is typical. Dr. Cai will assess your individual needs at the first appointment."
  },
  {
    question: "What is the Auricular Hunger Point?",
    answer: "The Hunger Point (also called the Appetite Control point) is a specific location on the inner edge of the ear's tragus. Stimulating it is thought to influence hypothalamic hunger signals and reduce the urge to eat between meals. It is often combined with the Shen Men (calming) and Endocrine (hormonal regulation) points."
  },
  {
    question: "Is this covered by insurance?",
    answer: "Craving and appetite support visits are typically not covered as standalone weight-loss treatments. However, if stress, anxiety, or pain are documented contributing factors, Workers' Compensation, Auto Accident PIP, Veterans Community Care, and certain UHA / HMAA plans may apply to the broader treatment course. Call (808) 528-7177 to discuss your coverage before booking."
  }
];

export default function BrainResetForWeightLossPage() {
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
    "name": "Brain Reset for Weight Loss™ — Auricular Acupressure for Craving Reduction",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Needle-free auricular acupressure targeting the Hunger, Shen Men, and Endocrine ear points to reduce food cravings, stress eating, and emotional hunger. Drug-free, no needles, no downtime.",
    "recognizingAuthority": [
      { "@type": "Organization", "name": "World Health Organization (WHO)" },
      { "@type": "Organization", "name": "U.S. Department of Defense" }
    ],
    "bodyLocation": "Ear (auricle) — Hunger Point, Shen Men, Endocrine Point",
    "followup": "Seeds remain in place 3–7 days; patient presses points 3–5× daily",
    "preparation": "No preparation required; no dietary restrictions before treatment",
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

  const whyDietsFail = [
    { type: "bad", text: "Willpower runs out under stress" },
    { type: "bad", text: "Cortisol spikes trigger late-night cravings" },
    { type: "bad", text: "Poor sleep increases hunger hormones" },
    { type: "bad", text: "Emotional eating bypasses rational decisions" },
    { type: "good", text: "Ear seeds calm cortisol response" },
    { type: "good", text: "Shen Men point reduces anxiety-driven hunger" },
    { type: "good", text: "Hunger Point reduces between-meal cravings" },
    { type: "good", text: "Better sleep → better hormone balance" },
  ];

  const patientNotices = [
    "Fewer intense cravings between meals",
    "Less urge to stress-eat in the evening",
    "Reduced emotional eating episodes",
    "Smaller appetite for sweets and processed foods",
    "Lower overall anxiety and tension",
    "Improved sleep quality",
    "More consistent energy levels",
    "Feeling more in control of food choices",
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/weight-loss" />
        <title>Brain Reset for Weight Loss™ | Ear Seed Therapy for Cravings & Appetite | Honolulu HI | AcuTherapy</title>
        <meta name="description" content="Ear seed therapy for craving reduction & weight loss support in Honolulu, HI. Calm stress eating naturally — drug-free, no needles. Ozempic-compatible. AcuTherapy Clinics · (808) 528-7177." />
        <meta property="og:title" content="Brain Reset for Weight Loss™ | Ear Seed Therapy Honolulu HI" />
        <meta property="og:description" content="Ear seed therapy for craving reduction & weight loss support in Honolulu, HI. Calm stress eating naturally — drug-free, no needles. Ozempic-compatible." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acutherapy.com/weight-loss" />
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
                ✓ No Needles · No Drugs
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                Ozempic-Compatible
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                Same-Day Appointments Available
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Brain Reset for Weight Loss™
            </h1>
            <p className="text-xl text-blue-100 mb-4 leading-relaxed">
              Your brain drives your cravings — not your stomach. Tiny ear seeds target the specific neural points that trigger stress eating, late-night snacking, and appetite spikes, helping you break the cycle without drugs, dieting, or needles.
            </p>
            <p className="text-blue-200 text-base mb-8">
              Available at AcuTherapy Clinics in Honolulu & Aiea, HI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
                <Link to="/book-appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Free Consultation
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
            <article className="md:col-span-8 space-y-12">

              {/* Why Diets Fail */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Your Brain Keeps Sabotaging Your Diet</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Most weight loss approaches treat hunger as a stomach problem. But cravings, stress eating, and emotional hunger are driven by your brain — specifically the hypothalamus, cortisol stress cycle, and reward pathways. Until those are addressed, willpower alone rarely wins.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                    <h3 className="font-bold text-red-700 mb-3 text-sm uppercase tracking-wide">The Loop That Keeps You Stuck</h3>
                    <ul className="space-y-2">
                      {whyDietsFail.filter(i => i.type === "bad").map(({ text }) => (
                        <li key={text} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-red-400 font-bold mt-0.5">✗</span>{text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                    <h3 className="font-bold text-emerald-700 mb-3 text-sm uppercase tracking-wide">What Ear Seeds Do</h3>
                    <ul className="space-y-2">
                      {whyDietsFail.filter(i => i.type === "good").map(({ text }) => (
                        <li key={text} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-emerald-500 font-bold mt-0.5">✓</span>{text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ozempic note */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">On Ozempic or Another GLP-1 Medication?</h2>
                <p className="text-gray-700 leading-relaxed text-sm">
                  GLP-1 medications like semaglutide (Ozempic, Wegovy) are highly effective at reducing physical appetite — but many users still struggle with <strong>emotional eating, stress-driven cravings, and food habits</strong> that the medication doesn't directly address. Ear seed therapy targets exactly these patterns through the nervous system, complementing your medication without any interaction. No prescription changes needed; just let Dr. Cai know what you're currently taking.
                </p>
              </div>

              {/* What Patients Notice */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Patients Typically Notice</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {patientNotices.map(notice => (
                    <div key={notice} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
                      <span className="text-emerald-500 font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-gray-700 text-sm">{notice}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <strong>Medical disclaimer:</strong> Ear seed therapy supports weight management by addressing stress eating and cravings. It is not a substitute for medical weight loss treatment, prescription medication, or dietary counseling. Individual results vary. Consult your primary care provider about your weight loss plan.
                  </p>
                </div>
              </div>

              {/* How It Works */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How Brain Reset for Weight Loss™ Works</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { step: "01", title: "Target the Right Points", desc: "Dr. Cai identifies the Hunger Point, Shen Men (calming), and Endocrine points on your ear — the specific locations linked to appetite regulation and stress response." },
                    { step: "02", title: "Seeds Go On. You Leave.", desc: "Tiny vaccaria seeds are taped in place. No injections, no needles. You press them 3–5× daily between sessions, reinforcing the signal throughout the week." },
                    { step: "03", title: "Cravings Quiet Down", desc: "Over 6–8 sessions, most patients find stress-driven cravings become less intense, emotional eating episodes decrease, and food choices become less effortful." }
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

              {/* Authority */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Clinical Background</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold mt-1">WHO</span>
                    <p className="text-gray-700 text-sm leading-relaxed">The World Health Organization recognized auricular acupuncture as a valid therapeutic system in 1990. Ear-point stimulation for appetite control has been studied in multiple clinical trials in China, Korea, and Europe.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold mt-1 whitespace-nowrap">U.S. DOD</span>
                    <p className="text-gray-700 text-sm leading-relaxed">The U.S. Department of Defense uses the Battlefield Acupuncture ear protocol to reduce stress, pain, and dysregulation in military personnel — demonstrating the systemic effect of auricular point stimulation on the nervous system.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold mt-1">Dr. Cai</span>
                    <p className="text-gray-700 text-sm leading-relaxed">Dr. David Cai, O.M.D., L.Ac. (Hawaii ACU-1125, NCCAOM Dipl. Ac. & Dipl. C.H. #962-1001-522) is a Doctor of Oriental Medicine trained at Beijing University of Chinese Medicine with over 25 years of clinical practice in Honolulu.</p>
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
                    { name: "Evelyn Layugan", text: "I feel more better since i start my theraphy... a lot of improvement." },
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

              {/* Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Services</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "Brain Reset Through Your Ear™", href: "/brainreset" },
                    { label: "CenterGy Therapy", href: "/centerGy-honolulu" },
                    { label: "Acupuncture for Stress & Anxiety", href: "/stress-anxiety-acupuncture-honolulu" },
                    { label: "Fertility Acupuncture", href: "/fertility-acupuncture-honolulu" },
                    { label: "Acupuncture for Sleep", href: "/insomnia-acupuncture-honolulu" },
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
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Break the Craving Cycle</h3>
                    <p className="text-gray-600 text-sm mb-5">Book a free consultation — Dr. Cai will explain which ear points apply to your specific situation before any treatment begins.</p>
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
                      "I feel more better since i start my theraphy... a lot of improvement."
                    </p>
                    <p className="text-sm font-semibold text-gray-900">— Evelyn Layugan</p>
                    <p className="text-xs text-gray-400">Google Review</p>
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
          <h2 className="text-3xl font-bold mb-4">Your Cravings Are a Brain Signal. We Help Reset It.</h2>
          <p className="text-blue-100 text-lg mb-8">
            Brain Reset for Weight Loss™ is available at both AcuTherapy locations in Honolulu and Aiea. No needles, no downtime, no prescription required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
              <Link to="/book-appointment">Book Your Appointment</Link>
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
