import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity } from "lucide-react";
import DoctorProfileCard from '@/components/DoctorProfileCard';

export default function AcupunctureMakikiPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/acupuncture-makiki" />
        <title>Acupuncture Near Makiki, Honolulu | AcuTherapy Clinics</title>
        <meta name="description" content="Acupuncture clinic near Makiki and downtown Honolulu. Expert TCM for back pain, stress, auto injuries, and sports recovery. AcuTherapy Clinics, Liliha." />
        <meta property="og:title" content="Acupuncture Near Makiki Honolulu | AcuTherapy Clinics" />
        <meta property="og:description" content="Acupuncture clinic near Makiki and downtown Honolulu. Expert TCM for back pain, stress, auto injuries, and sports recovery. AcuTherapy Clinics, Liliha." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acutherapy.com/acupuncture-makiki" />
        <meta property="og:image" content="https://acutherapy.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "AcuTherapy Clinics",
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
  "areaServed": ["Makiki", "Punchbowl", "Nuuanu", "Downtown Honolulu", "Honolulu", "Oahu"],
  "medicalSpecialty": ["Acupuncture", "PainManagement"],
  "founder": { "@type": "Person", "name": "Dr. David Cai" }
}`}
        </script>
      </Helmet>

      {/* Page Header */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Acupuncture near Makiki Honolulu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Serving Makiki, Punchbowl &amp; Downtown Honolulu</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Acupuncture Near Makiki – Honolulu, Hawaii
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Expert acupuncture and TCM for Makiki residents. Just minutes from your neighborhood in our Liliha clinic.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">

          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8 mt-8">
              For residents of <strong>Makiki</strong>, Punchbowl, Nuuanu, and downtown Honolulu, AcuTherapy Clinics offers convenient, expert acupuncture and Traditional Chinese Medicine care at our Liliha location — just minutes away with free parking. Whether you are dealing with chronic pain, a recent injury, stress, or a long-standing health concern, Dr. David Cai and Lisa Long provide personalized TCM care built around your specific needs.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Conditions We Treat for Makiki Patients</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li><strong>Back and neck pain:</strong> From commuting, desk work, or everyday strain — our most common presenting concern</li>
              <li><strong>Auto accident injuries:</strong> Whiplash, soft tissue injuries, and back pain from car accidents — 100% covered under Hawaii No-Fault PIP with $0 out of pocket</li>
              <li><strong>Sports and recreational injuries:</strong> Shoulder, knee, hip, and ankle injuries from hiking, surfing, gym training, and running</li>
              <li><strong>Workplace injuries:</strong> Workers' Compensation accepted — we handle all paperwork</li>
              <li><strong>Stress and anxiety:</strong> Chronic tension, insomnia, and nervous system dysregulation</li>
              <li><strong>Headaches and migraines:</strong> Including tension headaches and cervicogenic headaches</li>
              <li><strong>Women's health:</strong> Fertility support, menstrual irregularities, and hormonal balance</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Our Services</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Acupuncture
              </Link>
              <Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Medical Massage
              </Link>
              <Link to="/fire-cupping-therapy-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Cupping &amp; Gua Sha
              </Link>
              <Link to="/moxibustion-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Moxibustion
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">About Dr. David Cai &amp; Lisa Long</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              AcuTherapy Clinics was founded in 2014 by Dr. David Cai, O.M.D., L.Ac., L.M.T. — a graduate of Beijing University of Chinese Medicine with over 30 years of clinical experience in China and the United States. Alongside Lisa Long, O.M.D., L.M.T., the clinic provides multilingual care in English and Mandarin Chinese, with a special focus on pain management, injury recovery, and women's health.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Together, Dr. Cai and Lisa Long co-developed the <strong>CenterGy (Synergies)</strong> method — a precision constitutional diagnostic and energy-therapy approach that can be delivered with or without needles. This makes it especially accessible for patients who are nervous about acupuncture.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Insurance Accepted</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              We accept Workers' Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, Medicare Supplement, AARP, Humana, AshLink, and more. Many patients from Makiki pay <strong>$0 out of pocket</strong> under Workers' Comp or Auto PIP coverage.
            </p>
            <Link to="/insurance-accepted" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline mb-10">
              <Activity className="h-4 w-4" /> View all accepted insurance plans
            </Link>

            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Book Your Appointment Near Makiki</h2>
              <p className="text-lg text-blue-700 mb-8">Convenient Liliha location with free parking. Same-week appointments available.</p>
              <Link to="/book-appointment">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all">
                  Book Online Now
                </Button>
              </Link>
              <p className="text-blue-600 text-sm mt-3 opacity-80 font-medium tracking-wide">Takes less than 60 seconds</p>
            </div>

            <DoctorProfileCard />
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 h-2 w-full"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
                <p className="text-slate-600 mb-8 text-sm">Serving Makiki from our Liliha St location, minutes away with free parking.</p>
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
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <p className="font-bold text-slate-900 mb-1 text-sm">Hours</p>
                    <p className="text-slate-600 text-sm">Mon–Fri: 9 AM – 1 PM<br/>Saturday: 9 AM – 12 PM</p>
                  </div>
                  <div className="mt-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <p className="font-bold text-slate-900 mb-1 text-sm">Insurance Accepted</p>
                    <p className="text-slate-600 text-sm">Workers' Comp, Auto PIP, Veterans Care, UHA, HMAA, AARP, Humana, AshLink and more.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}
