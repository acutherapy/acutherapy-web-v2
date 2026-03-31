import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ContactHonoluluAcupuncturePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const service = formData.get('service') || 'Not Specified';
    const message = formData.get('message') || 'No message provided';
    
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      reason: `${service} - ${message}`,
      location: 'Honolulu Contact Page Form'
    };

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert('Failed to send. Please try again or call (808) 528-7177.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('An error occurred. Please try again or call us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 结构化数据配置
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "AcuTherapy Clinics",
    "logo": "https://acutherapy.com/logo.png",
    "image": "https://acutherapy.com/images/dr-david-cai-portrait.jpg",
    "url": "https://acutherapy.com",
    "description": "Premier medical acupuncture and pain management clinics in Honolulu and Aiea.",
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
        }
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
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Honolulu Acupuncture | Honolulu Acupuncture Guide</title>
        <meta name="description" content="Contact Dr. David Cai at AcuTherapy Clinics. Specialist medical acupuncture and pain management in Honolulu." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Acupuncture therapy background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Trusted Honolulu Pain Clinic</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Contact Honolulu Acupuncture</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">Medical-grade treatments customized for lasting relief.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              At AcuTherapy Clinics, we believe that informed patients heal faster. Dr. David Cai and our clinical team provide medical insights based on decades of practice.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
              <img 
                src="/images/traditional-chinese-herbs.jpg" 
                alt="Traditional Chinese Herbs" 
                className="w-full h-64 md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" 
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800'; }}
                loading="lazy"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8 pt-16 text-white text-lg font-medium">Holistic Healing Methods inside AcuTherapy</figcaption>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Understanding Your Treatment</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Traditional Chinese Medicine (TCM) views the body as a systemic interconnected network. Any symptom you experience is a localized manifestation of a deeper structural or energetic imbalance.
            </p>

            {/* Appointment Form */}
            <h3 className="text-3xl font-extrabold text-slate-900 mt-16 mb-8 border-b pb-2">Book Your Appointment Live</h3>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-50 relative mb-16">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-2xl"></div>
              
              {isSuccess ? (
                <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-4">You're All Set!</h3>
                  <p className="text-lg text-slate-600 mb-8">We will call you shortly to confirm your booking time.</p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" className="rounded-full">Submit Another Request</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 mt-2">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="(808) 555-0123" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-semibold text-slate-700">Primary Reason</label>
                      <select id="service" name="service" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none bg-white">
                        <option value="">Select an option...</option>
                        <option value="Auto Accident PIP">Auto Accident PIP</option>
                        <option value="Workers Comp">Workers' Comp</option>
                        <option value="Veterans VA Care">Veterans VA Care</option>
                        <option value="General Pain">General Pain / Sciatica</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Details (Optional)</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none resize-none" placeholder="How can we help?"></textarea>
                  </div>

                  <Button disabled={isSubmitting} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg font-bold">
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </Button>
                </form>
              )}
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
                  {/* 这里修复了嵌套 Link 的问题 */}
                  <Link to="/book-appointment">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">
                      <Calendar className="mr-2" /> Schedule Online
                    </Button>
                  </Link>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-14 text-lg border-2 border-slate-200" 
                    onClick={() => window.location.href = 'tel:+18085287177'}
                  >
                    <PhoneCall className="mr-2 h-5 w-5 text-blue-600" /> (808) 528-7177
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 text-left space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Honolulu Clinic</p>
                      <p className="text-slate-600 text-sm">1650 Liliha St, Suite 208<br />Honolulu, HI 96817</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Aiea Clinic</p>
                      <p className="text-slate-600 text-sm">98-211 Pali Momi St, Suite 604<br />Aiea, HI 96701</p>
                    </div>
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
