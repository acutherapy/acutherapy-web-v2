import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity, HelpCircle } from "lucide-react";
import DoctorProfileCard from '@/components/DoctorProfileCard';

export default function MoxibustionHonoluluPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acutherapy.com/moxibustion-honolulu" />
        <title>Moxibustion Therapy in Honolulu, Hawaii | AcuTherapy Clinics</title>
        <meta name="description" content="Moxibustion therapy in Honolulu — traditional TCM heat therapy for chronic pain, cold conditions, menstrual health, and fatigue. AcuTherapy Clinics, Oahu." />
        <meta property="og:title" content="Moxibustion Therapy Honolulu | AcuTherapy Clinics" />
        <meta property="og:description" content="Moxibustion therapy in Honolulu — traditional TCM heat therapy for chronic pain, cold conditions, menstrual health, and fatigue. AcuTherapy Clinics, Oahu." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acutherapy.com/moxibustion-honolulu" />
        <meta property="og:image" content="https://acutherapy.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is moxibustion used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Moxibustion is used in Traditional Chinese Medicine to warm meridian channels and resolve cold or deficient conditions. Common applications include chronic joint pain aggravated by cold, menstrual irregularities, fatigue, digestive weakness, and immune support."
      }
    },
    {
      "@type": "Question",
      "name": "Does moxibustion hurt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Moxibustion produces a gentle, penetrating warmth. The moxa is held or placed near the skin at a distance that prevents burning. Most patients find it deeply relaxing."
      }
    },
    {
      "@type": "Question",
      "name": "Is moxibustion combined with acupuncture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Moxibustion is frequently combined with acupuncture for enhanced therapeutic effect. Your treatment plan at AcuTherapy Clinics will be individualized based on your TCM constitutional assessment."
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
            alt="Moxibustion Therapy Honolulu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm backdrop-blur-sm">
              <ShieldCheck size={16} /> <span>Traditional Chinese Medicine – Honolulu</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 font-medium text-sm backdrop-blur-sm">
              Workers' Comp · Auto PIP · Veterans Care · UHA · HMAA accepted
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Moxibustion Therapy in Honolulu – TCM Heat Therapy for Pain, Fatigue &amp; Cold Conditions
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Warm your meridians, restore your Qi, and relieve chronic cold-pattern conditions with traditional moxibustion at AcuTherapy Clinics.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">

          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8 mt-8">
              Moxibustion is one of the oldest and most fundamental therapies in Traditional Chinese Medicine. Used for over 2,000 years alongside acupuncture, it applies sustained therapeutic heat to specific meridian points to resolve cold and stagnant conditions, warm Yang energy, and support the body's natural healing processes.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Is Moxibustion?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Moxibustion uses compressed and dried mugwort — <em>Artemisia argyi</em> — burned as a cone or stick near or on acupuncture points. The heat penetrates deeply into muscles and meridian channels, warming stagnant Qi and blood, dispelling cold, and stimulating circulation in ways that needle acupuncture alone may not achieve.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              At AcuTherapy Clinics, Dr. David Cai uses two primary methods:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg text-slate-700 mb-6">
              <li><strong>Indirect moxibustion:</strong> A moxa stick is held 1–2 inches above the skin, directing heat to the point without contact. Also performed with moxa cones placed on ginger, salt, or other intermediaries.</li>
              <li><strong>Moxa on needle:</strong> A small piece of moxa is attached to the needle handle after insertion, conducting heat directly down the needle shaft into the acupuncture point for targeted deep-tissue warming.</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-xl my-6">
              <p className="text-sm font-medium text-blue-900"><strong>Note:</strong> Burning moxa produces an herbal smoke with a distinctive aroma. If you have respiratory sensitivities or asthma, please advise us before your session — we can use smokeless moxa alternatives.</p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Conditions We Treat with Moxibustion</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
              <li><strong>Cold-pattern back and joint pain:</strong> Pain that worsens in cold or damp weather and improves with warmth — a classic moxibustion indication</li>
              <li><strong>Menstrual health:</strong> Painful periods, irregular cycles, and cold uterus patterns in TCM diagnosis</li>
              <li><strong>Yang deficiency fatigue:</strong> Persistent low energy, cold hands and feet, and difficulty warming up</li>
              <li><strong>Digestive weakness:</strong> Chronic bloating, loose stools, and poor appetite from Spleen Qi deficiency</li>
              <li><strong>Immune support:</strong> Frequent colds, slow recovery, and Wei Qi deficiency patterns</li>
              <li><strong>Arthritis:</strong> Joint stiffness and pain aggravated by cold and damp conditions</li>
              <li><strong>Fertility support:</strong> Often combined with acupuncture for women with cold uterus or Yang deficiency patterns</li>
            </ul>

            {/* CRO Comparison Module */}
            <div className="my-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-2 text-center">Moxibustion vs. Acupuncture Alone</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200">
                  <div className="p-6 text-center border-r border-slate-200">
                    <h3 className="font-bold text-slate-500 text-lg">Acupuncture Only</h3>
                  </div>
                  <div className="p-6 text-center bg-blue-600">
                    <h3 className="font-bold text-white text-lg">Acupuncture + Moxibustion</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-slate-100">
                  <div className="p-6 text-center border-r border-slate-100 text-slate-600">Moves Qi and blood</div>
                  <div className="p-6 text-center font-semibold text-blue-900 bg-blue-50/50">Moves Qi, blood, AND warms Yang</div>
                </div>
                <div className="grid grid-cols-2 border-b border-slate-100">
                  <div className="p-6 text-center border-r border-slate-100 text-slate-600">Best for excess and heat patterns</div>
                  <div className="p-6 text-center font-semibold text-blue-900 bg-blue-50/50">Adds cold and deficiency pattern coverage</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-6 text-center border-r border-slate-100 text-slate-600">Needle stimulation only</div>
                  <div className="p-6 text-center font-semibold text-blue-900 bg-blue-50/50">Needle + sustained deep-penetrating heat</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Does moxibustion hurt?</h3>
                <p className="text-slate-600">No. The moxa produces a gentle, penetrating warmth — most patients find it deeply relaxing. We maintain a safe distance from the skin and continuously monitor your comfort throughout the treatment.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> How many sessions do I need?</h3>
                <p className="text-slate-600">This depends on your condition. Acute cold-pattern pain may respond in 3–5 sessions. Chronic Yang deficiency patterns typically benefit from 8–12 sessions combined with lifestyle guidance. Dr. Cai will recommend a plan after your first constitutional assessment.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle className="text-blue-500" size={20}/> Is moxibustion always combined with acupuncture?</h3>
                <p className="text-slate-600">Not always — it can be used as a standalone therapy or combined with acupuncture, medical massage, and our CenterGy method depending on your TCM diagnosis. Your treatment plan is fully individualized.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Acupuncture
              </Link>
              <Link to="/fire-cupping-therapy-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Cupping &amp; Gua Sha
              </Link>
              <Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Medical Massage
              </Link>
              <Link to="/fertility-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all font-semibold text-slate-700">
                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Fertility Acupuncture
              </Link>
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Book a Moxibustion Session in Honolulu</h2>
              <p className="text-lg text-blue-700 mb-8">Two Oahu locations. Expert TCM practitioners. Personalized treatment.</p>
              <Link to="/book-appointment">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all">
                  Book Your Session
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
                <p className="text-slate-600 mb-8 text-sm">Tell us about your condition and we will create an individualized treatment plan.</p>
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
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <p className="font-bold text-slate-900 mb-1 text-sm">Hours</p>
                    <p className="text-slate-600 text-sm">Mon–Fri: 9 AM – 1 PM<br/>Saturday: 9 AM – 12 PM</p>
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
