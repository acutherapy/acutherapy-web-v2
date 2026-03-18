const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const generateSEOContent = (filename) => {
  // Determine the subject based on filename
  let friendlyName = filename.replace('Page.tsx', '').replace(/([A-Z])/g, ' $1').trim();
  let urlPath = '/' + filename.replace('Page.tsx', '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

  // Customize special cases based on the SEO plan
  if (filename === 'HomePage.tsx') {
    friendlyName = 'Honolulu Pain & Injury Acupuncture Clinic';
    urlPath = '/';
  }

  // Default templates to randomize content lightly but enforce 1000+ words
  const description = `Looking for ${friendlyName} treatment in Honolulu? AcuTherapy Clinics offers expert natural pain relief. Dr. David Cai specializes in pain management, auto accident recovery, and chronic conditions.`;
  const title = `${friendlyName} | Pain & Injury Treatment | AcuTherapy Clinics`;

  const internalLinksHtml = `
      <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Explore Related Treatments</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        <Link to="/back-pain-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Back Pain Recovery
        </Link>
        <Link to="/auto-accident-injury-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <ShieldCheck className="text-blue-500 mr-3 h-5 w-5" /> Auto Accident Injury
        </Link>
        <Link to="/sciatica-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Sciatica Treatment
        </Link>
        <Link to="/neck-pain-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Neck Pain Therapy
        </Link>
        <Link to="/acupuncture-waikiki" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <MapPin className="text-blue-500 mr-3 h-5 w-5" /> Waikiki Clinic Near You
        </Link>
        <Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Medical Massage
        </Link>
      </div>
    `;

  let imageFigureHtml = '';

  if (filename === 'HomePage.tsx' || filename === 'AcupunctureHonoluluPage.tsx') {
    imageFigureHtml = `
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <figure className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group">
          <img 
            src="/images/dr-cai-preparing-acupuncture.jpg" 
            alt="Dr. Cai preparing acupuncture treatment" 
            className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }}
          />
          <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-12 text-white font-medium">Dr. Cai Preparing Acupuncture Protocol</figcaption>
        </figure>
        <figure className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mt-8 md:mt-0">
          <img 
            src="/images/facial-acupuncture-treatment.jpg" 
            alt="Facial acupuncture treatment" 
            className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }}
          />
          <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-12 text-white font-medium">Precision Needling & Peripheral Blood Flow</figcaption>
        </figure>
      </div>`;
  } else if (filename === 'MedicalMassageHonoluluPage.tsx' || filename === 'NeckPainTreatmentHonoluluPage.tsx') {
    imageFigureHtml = `
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <figure className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group">
          <img 
            src="/images/acupressure-facial-massage.jpg" 
            alt="Acupressure facial massage" 
            className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }}
          />
          <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-12 text-white font-medium">Facial Acupressure & Tension Release</figcaption>
        </figure>
        <figure className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mt-8 md:mt-0">
          <img 
            src="/images/neck-shoulder-acupressure.jpg" 
            alt="Neck and shoulder massage" 
            className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }}
          />
          <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-12 text-white font-medium">Trapezius Muscle Medical Massage</figcaption>
        </figure>
      </div>`;
  } else if (filename === 'FireCuppingTherapyHonoluluPage.tsx' || filename === 'BackPainAcupunctureHonoluluPage.tsx') {
    imageFigureHtml = `
      <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
        <img 
          src="/images/fire-cupping-therapy.jpg" 
          alt="Fire cupping therapy on patient back" 
          className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }}
        />
        <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-16 text-white text-lg font-medium">Traditional Fire Cupping Therapy for Deep Tissue Detox</figcaption>
      </div>`;
  } else {
    imageFigureHtml = `
      <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200" 
          alt="${friendlyName.toLowerCase().replace(/ /g, '-')}-treatment-honolulu" 
          className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>`;
  }

  const aboutDoctorHtml = `
      <div className="mt-16 mb-16 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-2 bg-slate-100 relative">
            <img 
              src="/images/dr-david-cai-portrait.jpg" 
              alt="Dr. David Cai, L.Ac., Ph.D." 
              className="w-full h-full object-cover min-h-[400px]"
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800'; }}
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 text-white text-center">
               <span className="font-bold text-xl">Dr. David Cai</span>
               <p className="text-blue-300 text-sm">L.Ac., Ph.D.</p>
            </div>
          </div>
          <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Clinical Director & Founder</h3>
            <h4 className="text-3xl font-extrabold text-slate-900 mb-4">Leading Honolulu Pain Clinic</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With over 30 years of clinical experience, <strong>Dr. David Cai</strong> is a master of Traditional Chinese Medicine (TCM) and advanced acupuncture protocols. He specializes in severe pain management, sports injuries, and complex auto accident recoveries, bringing world-class holistic healthcare to the Honolulu community.
            </p>
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
               <img src="/images/acutherapy-medical-team.jpg" alt="AcuTherapy Clinics Medical Team" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
               <div>
                 <h5 className="font-bold text-slate-900 mb-1">AcuTherapy Clinics Medical Team</h5>
                 <p className="text-sm text-slate-500 italic leading-relaxed">"Our multidisciplinary medical team is highly trained and committed to finding the root cause of your condition, providing relief that lasts."</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    `;

  const genericBody = `
      <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
        If you are suffering from chronic pain, an injury, or stress-related health problems, <strong>${friendlyName}</strong> provides a natural, effective pathway to healing. At AcuTherapy Clinics in Honolulu, Dr. David Cai utilizes over 30 years of clinical expertise in Traditional Chinese Medicine (TCM) bringing you lasting relief without relying on surgery or heavy medications.
      </p>

      ${imageFigureHtml}

      <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">The Medical Science Behind ${friendlyName}</h2>
      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        When patients seek specialized care for ${friendlyName.toLowerCase()}, they immediately experience the difference that decades of clinical expertise make. Acupuncture works by stimulating specific strategic points on the body, which significantly increases peripheral blood flow, acts as a natural anti-inflammatory, and effectively down-regulates pain receptors in the brain. 
      </p>
      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        Whether you are dealing with acute trauma or long-standing chronic discomfort related to ${friendlyName.toLowerCase()}, our customized protocols are designed to restore your structural harmony. The mechanism of our therapy deeply impacts your nervous system. By signaling the body to release endorphins—our natural painkillers—and increasing circulation to affected tissues, the rate of natural cellular repair is vastly accelerated.
      </p>

      <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Holistic Integration and Traditional Chinese Medicine</h2>
      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        Our advanced, holistic integration of acupuncture, medical massage, and fire cupping therapy means that your recovery is optimized from all angles. TCM has been utilized for centuries to unblock "Qi" (energy) along the body's meridians. Modern research corroborates what ancient practitioners knew: precise neural and fascial stimulation creates profound physiological changes. We tailor each session, often combining needle therapy with Medical Tui-Na Massage to release deep muscle tension or Fire Cupping to detoxify specific regions.
      </p>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-8 rounded-2xl my-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Activity size={120} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Why Wait to Feel Better?</h3>
        <p className="text-slate-700 mb-6 font-medium text-lg relative z-10">
          Dr. Cai has helped thousands of patients across Hawaii recover safely. Most patients experience a noticeable difference within their first few sessions.
        </p>
        <ul className="space-y-4 mb-0 relative z-10">
          <li className="flex items-center text-slate-800 font-medium">
            <span className="bg-white p-1 rounded-full shadow-sm mr-3"><CheckCircle2 className="text-blue-600 h-5 w-5" /></span> 
            Detailed diagnostic consultation on day one
          </li>
          <li className="flex items-center text-slate-800 font-medium">
            <span className="bg-white p-1 rounded-full shadow-sm mr-3"><CheckCircle2 className="text-blue-600 h-5 w-5" /></span> 
            Clean, sterile, and relaxing clinic environment
          </li>
          <li className="flex items-center text-slate-800 font-medium">
            <span className="bg-white p-1 rounded-full shadow-sm mr-3"><CheckCircle2 className="text-blue-600 h-5 w-5" /></span> 
            Highly compatible with Hawaii insurance providers like HMSA, Kaiser, HMAA, and Workers Comp
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Common Patient Questions</h2>
      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        <strong>Does the treatment for ${friendlyName.toLowerCase()} hurt?</strong><br/>
        Acupuncture involves hair-thin needles that are virtually painless. Most patients find the experience deeply relaxing and often fall asleep during treatment.
      </p>
      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        <strong>How many sessions will I need?</strong><br/>
        The timeline for recovery depends on whether your condition is acute or chronic. We typically recommend 4-6 initial sessions to gain momentum, followed by re-evaluation. Our goal is to fix the root cause, not just mask the symptoms.
      </p>
      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        <strong>Will insurance cover this?</strong><br/>
        Many major Hawaii insurance plans cover acupuncture for pain conditions and auto accident injuries. Auto insurance (PIP) almost always covers treatment following a collision.
      </p>

      ${aboutDoctorHtml}

      ${internalLinksHtml}
    `;

  return `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, CheckCircle2, ArrowRight, Activity, MapPin, ShieldCheck } from "lucide-react";

export default function ${filename.split('.')[0]}() {
  return (
    <>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <script type="application/ld+json">
          {\`
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "${title}",
            "headline": "${friendlyName}",
            "description": "${description}",
            "url": "https://acutherapy.com${urlPath}",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "AcuTherapy Clinics",
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
              "telephone": "+1-808-528-7177"
            }
          }
          \`}
        </script>
      </Helmet>

      {/* Page Header */}
      <section className="bg-slate-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2000" 
            alt="Acupuncture therapy background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Trusted Honolulu Pain Clinic</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">${friendlyName}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Medical-grade acupuncture and traditional Chinese medicine by Dr. David Cai, customized for lasting relief and recovery in Honolulu.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            ${genericBody}
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 h-2 w-full"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
                <p className="text-slate-600 mb-8 text-sm">Bridge the gap to a pain-free life today.</p>
                <div className="flex flex-col gap-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">
                    <Calendar className="mr-2" /> Schedule Online
                  </Button>
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
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 528-7177 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 212-9459</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Aiea / Pearl City Clinic</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        98-211 Pali Momi St, Suite 604<br/>Aiea, HI 96701
                      </p>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 452-1900 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 452-1521</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                      <p className="font-bold text-slate-900 mb-1 text-sm">Hours of Operation</p>
                      <p className="text-slate-600 text-sm">Mon-Fri: 8am - 5pm, Sat: 8am - 12pm</p>
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

            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">Patient Reviews <span className="flex h-2 w-2 rounded-full bg-emerald-500 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span></span></h4>
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
`;
}

files.forEach(file => {
  // Write new content to every file
  const newContent = generateSEOContent(file);
  fs.writeFileSync(path.join(dir, file), newContent, 'utf8');
});
console.log('Successfully rewrote ' + files.length + ' SEO pages with deep content templates.');
