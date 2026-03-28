import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Activity } from "lucide-react";

export default function AcupuncturePearlCityPage() {
    return (
        <>
            <Helmet>
        <link rel="canonical" href="https://acutherapy.com/acupuncture-pearl-city" />
                <title>Acupuncture Pearl City & Aiea | AcuTherapy Clinics</title>
                <meta name="description" content="Searching for acupuncture near Pearl City? AcuTherapy Clinics operates a state-of-the-art facility near Pearlridge. We specialize in pain management and auto injuries." />
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
                        <ShieldCheck size={16} /> <span>Trusted West Oahu Pain Clinic</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Acupuncture Near Pearl City</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Medical-grade treatments customized for lasting relief, conveniently located in Aiea.</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">

                    <article className="md:col-span-8">
                        <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
                            If you live or work in <strong>Pearl City</strong> or the surrounding Central Oahu neighborhoods, you don't need to drive into downtown Honolulu to receive world-class medical acupuncture. AcuTherapy Clinics maintains a premier facility conveniently located near Pearlridge Center in Aiea.
                        </p>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
                            <img src="/images/abdominal-acupuncture.jpg" alt="Acupuncture Pearl City" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }} />
                            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8 pt-16 text-white text-lg font-medium">Advanced Acupuncture in Aiea/Pearl City</figcaption>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Why Pearl City Residents Choose AcuTherapy</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            Our Aiea clinic is custom-designed for treating complex conditions like chronic back pain, herniated discs, and severe sciatica. We are also one of the leading medical providers for Auto Accident (PIP) claims from accidents on H-1 or Kam Highway.
                        </p>
                        <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
                            <li><strong>Convenient Location:</strong> Located on Pali Momi St, making it an easy drive for Pearl City locals without the headache of downtown traffic.</li>
                            <li><strong>Expert Clinical Director:</strong> Under the direction of Dr. David Cai, bringing over 30 years of medical acupuncture experience to your neighborhood.</li>
                            <li><strong>Insurance Accepted:</strong> We proudly accept HMSA, Kaiser, UHA, HMAA, and offer zero out-of-pocket treatments for approved Auto Injury cases.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Explore Related Treatments</h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                            <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                                <Activity className="text-blue-500 mr-3 h-5 w-5" /> All Services
                            </Link>
                            <Link to="/auto-accident-injury-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                                <Activity className="text-blue-500 mr-3 h-5 w-5" /> Auto Accident Relief
                            </Link>
                            <Link to="/contact-honolulu-acupuncture" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
                                <PhoneCall className="text-emerald-500 mr-3 h-5 w-5" /> Contact Clinic
                            </Link>
                        </div>
                    
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Causes Pearl City?</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">Pearl City Residents driving commuting from West Oahu or working demanding industrial jobs often suffer from severe lumbar compression, sciatic nerve pain, and chronic tension headaches.</p>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">How Acupuncture Helps</h2>
<ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-6">
<li><strong>Pain Relief:</strong> Triggers the release of endorphins to block pain signals effectively.</li>
<li><strong>Nervous System Regulation:</strong> Calms the central nervous system, reducing tension without relying on pharmaceuticals.</li>
<li><strong>Improved Circulation:</strong> Enhances blood flow to the affected areas, accelerating the natural healing process.</li>
</ul>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect During Your Session</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">With our dedicated Aiea/Pearl City clinic location, you no longer have to drive all the way into town while in pain. We provide comprehensive acupuncture and medical massage right in your neighborhood.</p>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Who Is This For?</h2>
<ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-6">
<li>Individuals suffering from chronic pain who have not found relief through conventional methods.</li>
<li>High-stress professionals seeking natural nervous system regulation.</li>
<li>Athletes or individuals recovering from an injury needing accelerated healing.</li>
</ul>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Serving Honolulu & Nearby Areas</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">Conveniently located in Honolulu, we proudly serve patients from Ala Moana, Waikiki, Kaimuki, Kahala, and across Oahu. Whether you are a local resident or visiting Hawaii, we provide top-tier care accessible to your area.</p>

<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">FAQ</h2>
<div className="space-y-6 mb-12">
<div><h4 className="font-bold text-lg text-slate-900">Q1: How convenient is it to visit from PearlCity?</h4><p className="text-slate-700">A: We are conveniently located at the Pearlridge area in Aiea, making it an easy drive for patients from Pearl City, Kapolei, and Waipahu.</p></div>
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
                                <p className="text-slate-600 mb-8 text-sm">Appointments available at our Aiea clinic.</p>
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
                                    <Button variant="outline" className="w-full h-14 text-lg border-2 border-slate-200" onClick={() => window.location.href = 'tel:+18084521900'}>
                                        <PhoneCall className="mr-2 h-5 w-5 text-blue-600" /> (808) 452-1900
                                    </Button>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100 text-left">
                                    <div className="flex items-start gap-3 mb-6">
                                        <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">Aiea / Pearl City Clinic</p>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-1">
                                                98-211 Pali Momi St, Suite 604<br />Aiea, HI 96701
                                            </p>
                                            <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 452-1900</p>
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
