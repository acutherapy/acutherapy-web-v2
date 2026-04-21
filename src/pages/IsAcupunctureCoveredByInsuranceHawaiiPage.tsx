

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, } from "lucide-react";

export default function IsAcupunctureCoveredByInsuranceHawaiiPage() {
  return (
    <>
      <Helmet>
        <title>Is Acupuncture Covered By Insurance in Hawaii? | Honolulu Guide</title>
        <meta name="description" content="Acupuncture in Hawaii may be covered by insurance depending on your plan. Learn about auto accident, workers' comp, Medicare, and private health options in Honolulu." />
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
      "name": "Is acupuncture covered by insurance in Hawaii?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coverage may vary depending on the plan, the reason for treatment, and specific policy details."
      }
    },
    {
      "@type": "Question",
      "name": "Is acupuncture covered after a car accident?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In some cases, acupuncture may be covered under no-fault auto insurance depending on the policy."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover acupuncture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare may cover acupuncture for certain conditions such as chronic low back pain, subject to eligibility and benefit limits."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to verify my benefits before my appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Verification of benefits is recommended before your first visit to help clarify coverage, visit limits, and out-of-pocket costs."
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm backdrop-blur-sm">
              <ShieldCheck size={16} /> <span>100% No-Fault PIP Insurance Accepted</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-200 border border-teal-500/30 font-medium text-sm backdrop-blur-sm">
              <span>Accepts HMSA, Kaiser, UHA, HMAA, Medicare UHC, Auto PIP, Workers' Comp &amp; VA</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Is Acupuncture Covered by Insurance in Hawaii? What Patients in Honolulu Should Know</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Verification of benefits, coverage details, and payment options explained clearly.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">

          <article className="md:col-span-8">
            <h1 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-6 leading-tight">
              Is Acupuncture Covered by Insurance in Hawaii? What Patients in Honolulu Should Know
            </h1>

            <p className="text-[18px] font-semibold text-slate-800 mb-6 leading-relaxed">
              <strong>Acupuncture in Hawaii may be covered by insurance depending on your plan. Many Honolulu patients have coverage through auto accident insurance, workers’ compensation, Medicare, or certain private health plans. Verification of benefits is required before your first visit.</strong>
            </p>

            <figure className="mb-8">
              <img 
                src="/images/acupuncture-insurance-hawaii-honolulu.jpg" 
                alt="Acupuncture clinic in Honolulu helping patients with insurance verification and treatment" 
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800'; }}
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">
                A professional acupuncture clinic in Honolulu assisting patients with insurance coverage and treatment planning for pain relief.
              </figcaption>
            </figure>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-10 shadow-sm">
              <h2 className="text-[20px] font-bold text-slate-900 mb-3">Understanding Your Coverage Options</h2>

<h2 className="text-[28px] font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Our Easy 3-Step Process</h2>
<div className="grid sm:grid-cols-3 gap-6 mb-12">
  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm"><div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">1</div><h4 className="font-bold mb-2">Call</h4><p className="text-sm text-slate-600">Give us a call with your insurance card ready.</p></div>
  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm"><div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">2</div><h4 className="font-bold mb-2">Verify</h4><p className="text-sm text-slate-600">We verify your benefits for free.</p></div>
  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm"><div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">3</div><h4 className="font-bold mb-2">Visit</h4><p className="text-sm text-slate-600">Start your personalized recovery plan!</p></div>
</div>

              <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">
                Insurance coverage for <Link to="/acupuncture-honolulu" className="text-blue-600 hover:underline">acupuncture in Hawaii</Link> varies based on the type of plan and the reason for treatment. At Acutherapy Clinics in <Link to="/contact-honolulu-acupuncture" className="text-blue-600 hover:underline">Honolulu</Link>, Dr. David Cai and his team assist patients in understanding their coverage and verifying benefits before treatment begins. While some cases may be fully covered, others may involve co-pays or self-pay options. A clear understanding of your benefits helps avoid unexpected costs and ensures a smoother treatment experience.
              </p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              A Simple Answer: Is Acupuncture Covered in Hawaii?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>The short answer is: sometimes.</p>
              <p>In Hawaii, <Link to="/what-to-expect-first-acupuncture-visit" className="text-blue-600 hover:underline">acupuncture</Link> may be covered depending on:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li>The type of insurance you have</li>
                <li>The reason for treatment</li>
                <li>Your specific policy details</li>
              </ul>
              <p>Some patients have partial coverage, while others—especially those with accident-related injuries—may have full coverage.</p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6 rounded-r-xl">
                 <p className="text-[16px] md:text-[18px] text-slate-800 font-medium">
                   The best way to know for sure is to verify your benefits before your first visit.
                 </p>
              </div>
            </div>

            <h2 className="text-[28px] font-extrabold text-slate-900 mb-6 border-b pb-2">
              Insurance & Payment Options in Hawaii
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>We accept most major insurance plans in Hawaii and offer transparent pricing for self-pay patients.</p>
              <p className="font-bold text-slate-900">Before your first appointment, verification of benefits is required.</p>
              <p>Please bring your insurance card so our team can help confirm your coverage.</p>
              <p>Below is an overview of the specialized insurance cases we handle:</p>
            </div>

            <h3 className="text-[22px] font-bold text-slate-900 mb-4 text-blue-800 flex items-center gap-2">
               No-Fault (Auto Accidents)
            </h3>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>If you were injured in a car accident, your acupuncture treatment may be fully covered by auto insurance, depending on your policy.</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>We handle all billing paperwork</li>
                <li>Care may include treatment for <Link to="/neck-pain-treatment-honolulu" className="text-blue-600 hover:underline">whiplash</Link>, <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 hover:underline">back pain</Link>, and concussion-related symptoms</li>
                <li>In many cases, patients have little to no out-of-pocket cost</li>
              </ul>
            </div>

            <h3 className="text-[22px] font-bold text-slate-900 mb-4 text-emerald-800 flex items-center gap-2">
               Workers’ Compensation
            </h3>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Injured at work?</p>
              <p>We are authorized providers for Workers’ Compensation cases in Hawaii.</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
                <li>Focus on return-to-work rehabilitation for <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 hover:underline">lower back injuries</Link> and <Link to="/neck-pain-treatment-honolulu" className="text-blue-600 hover:underline">neck strain</Link></li>
                <li>Requires an active claim number</li>
                <li>Typically requires physician referral for <Link to="/acupuncture-honolulu" className="text-blue-600 hover:underline">acupuncture therapy</Link></li>
              </ul>
            </div>

            <h3 className="text-[22px] font-bold text-slate-900 mb-4 text-purple-800 flex items-center gap-2">
               Private Health Insurance
            </h3>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Many private insurance plans in Hawaii (such as HMSA, Kaiser, HMAA, UHA, and others) are expanding coverage for acupuncture—especially for chronic pain.</p>
              <p className="font-bold text-slate-900">However:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Coverage varies significantly by plan</li>
                <li>Co-pays and visit limits may apply</li>
              </ul>
              <p>We recommend contacting our office so we can help verify your specific benefits.</p>
            </div>

            <h3 className="text-[22px] font-bold text-slate-900 mb-4 text-amber-800 flex items-center gap-2">
               Medicare Acceptance: Supporting Our Kupuna
            </h3>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>As Hawaii’s population ages, chronic pain—especially lower back pain—can affect quality of life.</p>
              <p>To support our kupuna (elders), we are proud to accept Medicare for acupuncture services when coverage criteria are met.</p>
              <div className="bg-amber-100 border-l-4 border-amber-600 p-4 mt-2 mb-4 text-amber-900 italic font-medium">
                "Medicare currently covers acupuncture only for chronic low back pain, with limits on the number of sessions per year."
              </div>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-amber-50/50 p-6 rounded-xl border border-amber-100">
                <li>Medicare may cover <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 hover:underline">acupuncture for certain conditions</Link> such as chronic low back pain</li>
                <li>Coverage limits and eligibility vary depending on diagnosis</li>
                <li>Our team can help check your <Link to="/acupuncture-honolulu" className="text-blue-600 hover:underline">plan details</Link> and guide you through the process</li>
              </ul>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              What If You Don’t Have Coverage?
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Not all plans include acupuncture benefits.</p>
              <div className="bg-slate-100 border-l-4 border-slate-600 p-4 my-4 font-bold text-slate-800">
                Many patients are surprised to find that their out-of-pocket cost for a <Link to="/what-to-expect-first-acupuncture-visit" className="text-blue-600 hover:underline">first visit</Link> or ongoing <Link to="/acupuncture-honolulu" className="text-blue-600 hover:underline">acupuncture sessions</Link> may be lower than expected, depending on their coverage.
              </div>
              <p>For patients without coverage:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Transparent self-pay pricing is available for <Link to="/neck-pain-treatment-honolulu" className="text-blue-600 hover:underline">neck pain</Link>, <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 hover:underline">back pain</Link>, and other conditions</li>
                <li>Treatment plans (including <Link to="/does-cupping-help-back-pain" className="text-blue-600 hover:underline">cupping therapy</Link>) can be adjusted based on your specific goals</li>
                <li>Many patients choose to combine insurance and self-pay options depending on their situation</li>
              </ul>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              Why Verification of Benefits Matters
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Insurance plans can vary—even within the same provider.</p>
              <p>Verification helps clarify:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li>Whether acupuncture is covered</li>
                <li>How many visits are included</li>
                <li>Whether a referral is required</li>
                <li>Your estimated out-of-pocket cost</li>
              </ul>
              <p>This step helps avoid unexpected billing and ensures a smoother experience.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              Insurance-Friendly Acupuncture Care in Honolulu
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-10 space-y-4">
              <p>Acutherapy Clinics is located near Ala Moana, serving patients across:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Waikiki</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Kakaʻako</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Downtown Honolulu</span>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">Greater Oahu</span>
              </div>
              <p>Our team is experienced in working with Hawaii insurance systems, helping simplify the process for patients.</p>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-6 border-b pb-2">
              Q&A: Acupuncture Insurance in Hawaii
            </h2>
            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Is acupuncture covered by insurance in Hawaii?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">It may be covered depending on your plan, condition, and policy details.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Is acupuncture free after a car accident?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">In some cases, treatment may be covered under no-fault auto insurance, depending on your policy.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Does Medicare cover acupuncture?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">Medicare may cover acupuncture for certain conditions, such as chronic low back pain, if eligibility criteria are met.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">How do I know if I’m covered?</h3>
                <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">The best way is to verify your benefits before your visit. Our team can assist with this process.</p>
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-slate-900 mb-4">
              A Clear and Supportive Process
            </h2>
            <div className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-12">
              <p>At Acutherapy Clinics in Honolulu, we understand that insurance can be confusing.</p>
              <p>Our team helps guide patients through:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                <li>Benefit verification</li>
                <li>Coverage explanation</li>
                <li>Billing coordination</li>
              </ul>
              <p>So you can focus on your recovery—not paperwork.</p>
            </div>

            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 mb-12">
              <h2 className="text-[28px] font-bold text-slate-900 mb-4">Have Questions About Your Coverage?</h2>
              <p className="text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-8">
                If you’re unsure whether your acupuncture treatment is covered, we can help. Contact us today to verify your benefits before your first visit.
              </p>
              
              <ul className="space-y-3 mb-8 text-slate-800 font-medium">
                <li className="flex items-center gap-3"><MapPin className="text-blue-600 h-5 w-5" /> Located near Ala Moana in Honolulu</li>
                <li className="flex items-center gap-3"><Calendar className="text-blue-600 h-5 w-5" /> Same-day appointments available</li>
                <li className="flex items-center gap-3"><PhoneCall className="text-blue-600 h-5 w-5" /> Call (808) 528-7177</li>
              </ul>

              <Link to="/contact-honolulu-acupuncture" className="inline-block hover:opacity-90 transition-opacity whitespace-nowrap" style={{ background: '#000', color: '#fff', padding: '12px 20px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                Verify Your Benefits
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

<div className="bg-blue-50/50 border border-blue-100 border-l-4 border-l-blue-500 p-4 rounded-xl text-slate-800 font-medium my-6 shadow-sm">
  <p className="flex items-center gap-2">
    <span className="text-xl">👉</span>
    <span>If you're new, you can read <Link to="/what-to-expect-first-acupuncture-visit" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4 font-bold">what to expect at your first visit</Link>.</span>
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
                  <Button variant="outline" className="w-full h-14 text-lg border-2 border-slate-200" onClick={() => window.location.href = 'tel:+18085287177'}>
                    <PhoneCall className="mr-2 h-5 w-5 text-blue-600" /> (808) 528-7177
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 text-left">
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Honolulu Clinic (Liliha)</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        1650 Liliha St, Suite 208<br />Honolulu, HI 96817
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
                        98-211 Pali Momi St, Suite 604<br />Aiea, HI 96701
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
