import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, MapPin, Printer, Mail, Clock } from "lucide-react";
import LeaveReviewCTA from "@/components/LeaveReviewCTA";

export default function AieaClinicLocationPage() {
    return (
        <>
            <Helmet>
                <title>Aiea & Pearl City Clinic | AcuTherapy Clinics</title>
                <meta name="description" content="Visit our Aiea / Pearl City clinic on Pali Momi St. View our address, hours of operation, and get directions for your acupuncture and pain management care." />
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

            <div className="bg-slate-50 py-12 md:py-20 lg:py-24 min-h-[calc(100vh-80px)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Aiea / Pearl City <span className="text-blue-600">Clinic</span></h1>
                        <p className="text-xl text-slate-600 leading-relaxed font-light">
                            Our premier facility conveniently located near Pearlridge Center in Aiea, designed to provide Central & West Oahu with top-tier pain management.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Information Sidebar */}
                        <div className="lg:col-span-5 space-y-8">

                            {/* Location Card */}
                            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden bg-white">
                                <div className="h-3 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Clinic Information</h2>

                                    <div className="space-y-8">
                                        <div className="flex gap-4">
                                            <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                                <MapPin className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 mb-1">Address</p>
                                                <p className="text-slate-600 leading-relaxed">
                                                    98-211 Pali Momi St, Suite 604<br />
                                                    Aiea, HI 96701
                                                </p>
                                                <p className="text-xs text-slate-500 mt-2 italic">(Conveniently located near Pearlridge)</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="h-12 w-12 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-emerald-600">
                                                <PhoneCall className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 mb-1">Phone</p>
                                                <a href="tel:+18084521900" className="text-slate-600 hover:text-emerald-600 transition-colors font-semibold">
                                                    (808) 452-1900
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="h-12 w-12 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-orange-600">
                                                <Printer className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 mb-1">Fax</p>
                                                <p className="text-slate-600">
                                                    (808) 452-1521
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="h-12 w-12 bg-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-indigo-600">
                                                <Mail className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 mb-1">Email</p>
                                                <a href="mailto:services@acutherapy.com" className="text-slate-600 hover:text-indigo-600 transition-colors">
                                                    services@acutherapy.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Hours Card */}
                            <Card className="border border-slate-200 shadow-md rounded-3xl overflow-hidden bg-slate-50">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Clock className="h-6 w-6 text-slate-700" />
                                        <h3 className="text-xl font-bold text-slate-900">Hours of Operation</h3>
                                    </div>
                                    <ul className="space-y-3 text-slate-700 font-medium">
                                        <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                                            <span>Monday - Friday</span>
                                            <span className="text-slate-900 font-bold">9:00 AM - 1:00 PM</span>
                                        </li>
                                        <li className="flex justify-between items-center pt-1 border-b border-slate-200 pb-2">
                                            <span>Saturday</span>
                                            <span className="text-slate-900 font-bold">8:00 AM - 12:00 PM</span>
                                        </li>
                                        <li className="flex justify-between items-center pt-1 text-slate-400">
                                            <span>Sunday</span>
                                            <span>Closed</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Button onClick={() => window.location.href = '/book-appointment'} className="w-full h-16 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 rounded-2xl">
                                <Calendar className="mr-2 h-5 w-5" /> Schedule an Appointment
                            </Button>

                        </div>

                        {/* Map Area */}
                        <div className="lg:col-span-7 h-full min-h-[500px] lg:min-h-[700px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                            <iframe
                                title="Aiea / Pearl City Clinic Location Google Maps"
                                src="https://www.google.com/maps?q=98-211+Pali+Momi+St,+Suite+604,+Aiea,+HI+96701&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '100%' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>

            {/* Leave Review Section */}
            <LeaveReviewCTA location="aiea" />
        </>
    );
}
