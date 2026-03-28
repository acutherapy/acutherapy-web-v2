import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity } from "lucide-react";

export default function AcupunctureKakaakoPage() {
    return (
        <>
            <Helmet>
        <link rel="canonical" href="https://acutherapy.com/acupuncture-kakaako" />
                <title>Acupuncture Near Kakaako | Sports Injury & Pain Relief</title>
                <meta name="description" content="AcuTherapy Clinics serves the Kakaako and Ward Village area. We specialize in sports injury, modern pain management, and holistic healing." />
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
                        <ShieldCheck size={16} /> <span>Trusted By Honolulu Urban Core</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Acupuncture For Kakaako</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Medical-grade natural healing for an active and vibrant lifestyle, minutes from Ward Village.</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">

                    <article className="md:col-span-8">
                        <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
                            For professionals and active residents living in <strong>Kakaako</strong> and Ward Village, AcuTherapy Clinics is the leading destination for modern acupuncture and medical massage. Located just up the street in the Liliha medical corridor, we provide fast, effective relief for sports injuries, tech-neck, and systemic stress.
                        </p>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
                            <img src="/images/abdominal-acupuncture.jpg" alt="Acupuncture Kakaako" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }} />
                            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8 pt-16 text-white text-lg font-medium">Advanced Acupuncture Treatments</figcaption>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Top Performance Care near Kakaako</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            Those living an active Hawaiian lifestyle need bodies that perform at 100%. Whether you're lifting heavy at a Kakaako gym, surfing, or spending long hours hunched over a laptop, we offer treatments designed for fast rehabilitation.
                        </p>
                        <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
                            <li><strong>Tech Neck & Posture Repair:</strong> We specialize in severe neck and upper-back pain associated with computer use, combining acupuncture with Medical Massage (Tui-Na) and Fire Cupping.</li>
                            <li><strong>Sports Injuries:</strong> From tennis elbow to meniscus tears, we use precise neurological needling to trigger massive blood flow to isolated joint injuries for faster natural recovery.</li>
                            <li><strong>Expert Practice:</strong> Dr. David Cai brings 30+ years of high-end clinical experience in pain management, ensuring you get back to your active life sooner.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Fast Links For Care</h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                            <Link to="/neck-pain-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Neck Pain Relief
                            </Link>
                            <Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Medical Massage
                            </Link>
                            <Link to="/contact-honolulu-acupuncture" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                                <PhoneCall className="text-emerald-500 mr-3 h-5 w-5" /> Contact Clinic
                            </Link>
                        </div>
                    
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Causes Kakaako?</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">Kakaako Living or working near Kakaako often means dealing with the tension of retail work, office sitting, or pushing through intense urban workouts. These repetitive lifestyle factors easily translate into chronic back, neck, and joint pain.</p>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How Acupuncture Helps</h2>
<ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-6">
<li><strong>Pain Relief:</strong> Triggers the release of endorphins to block pain signals effectively.</li>
<li><strong>Nervous System Regulation:</strong> Calms the central nervous system, reducing tension without relying on pharmaceuticals.</li>
<li><strong>Improved Circulation:</strong> Enhances blood flow to the affected areas, accelerating the natural healing process.</li>
</ul>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect During Your Session</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">Our Honolulu clinic is incredibly accessible from the Kakaako area. You can expect a professional, seamless medical assessment by Dr. Cai. After a 30-minute deeply restorative acupuncture session, you will leave feeling lighter and recharged for your busy day.</p>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Who Is This For?</h2>
<ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-6">
<li>Individuals suffering from chronic pain who have not found relief through conventional methods.</li>
<li>High-stress professionals seeking natural nervous system regulation.</li>
<li>Athletes or individuals recovering from an injury needing accelerated healing.</li>
</ul>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Related Treatments</h2>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
<Link to="/back-pain-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 font-semibold text-blue-800 hover:text-blue-600">Acupuncture for Lower Back Pain</Link>
<Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 font-semibold text-blue-800 hover:text-blue-600">Medical Massage Therapy</Link>
<Link to="/fire-cupping-therapy-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 font-semibold text-blue-800 hover:text-blue-600">Cupping Therapy</Link>
</div>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Serving Honolulu & Nearby Areas</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">Conveniently located in Honolulu, we proudly serve patients from Ala Moana, Waikiki, Kaimuki, Kahala, and across Oahu. Whether you are a local resident or visiting Hawaii, we provide top-tier care accessible to your area.</p>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">FAQ</h2>
<div className="space-y-6 mb-12">
<div><h4 className="font-bold text-lg text-slate-900">Q1: How convenient is it to visit from Kakaako?</h4><p className="text-slate-700">A: Yes, our Liliha clinic provides convenient parking, allowing you to bypass typical Kakaako congestion for a stress-free visit.</p></div>
<div><h4 className="font-bold text-lg text-slate-900">Q2: Does the treatment hurt?</h4><p className="text-slate-700">A: No. We use ultra-fine needles. Most feel only a deep, relaxing sensation. Many even fall asleep!</p></div>
<div><h4 className="font-bold text-lg text-slate-900">Q3: Is it safe?</h4><p className="text-slate-700">A: Absolutely. Acupuncture is a highly safe, non-invasive alternative to surgery and heavy medications.</p></div>
</div>

<div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8">
<h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to find relief?</h2>
<p className="text-lg text-blue-700 mb-8">Stop living in discomfort. Located right here in Honolulu, we are here to help you restore your well-being.</p>
<Link to="/book-appointment"><Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all">Book Your Session Today</Button></Link>
</div>

</article>

                    {/* Sidebar */}
                    <aside className="md:col-span-4 space-y-8">
                        <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
                            <div className="bg-blue-600 h-2 w-full"></div>
                            <CardContent className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
                                <p className="text-slate-600 mb-8 text-sm">Serving Kakaako from our Liliha St location.</p>
                                <div className="flex flex-col gap-4">
                                    <Link to="/book-appointment">
                                        <Link to="/book-appointment">

                                          <Link to="/book-appointment">


                                            <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">


                                              <Calendar className="mr-2" /> Schedule Online


                                            </Button>


                                          </Link>

                                        </Link>
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
                                            <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 528-7177</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                                        <p className="font-bold text-slate-900 mb-1 text-sm">Hours of Operation</p>
                                        <p className="text-slate-600 text-sm">Mon-Fri: 9am - 1pm, Sat: 8am - 12pm</p>
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
