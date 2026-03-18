import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Map } from 'lucide-react';

export default function SitemapPage() {
    return (
        <>
            <Helmet>
                <title>Sitemap | AcuTherapy Clinics</title>
            </Helmet>
            <div className="max-w-4xl mx-auto px-4 py-20 min-h-[60vh]">
                <div className="flex items-center gap-3 mb-8 border-b pb-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Map className="h-6 w-6 text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900">Sitemap</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    <div>
                        <h3 className="font-bold text-xl mb-4 text-slate-900 border-b pb-2">Main Navigation</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">Home</Link></li>
                            <li><Link to="/dr-david-cai-honolulu-acupuncturist" className="text-blue-600 hover:text-blue-800">About Dr. David Cai</Link></li>
                            <li><Link to="/acupuncture-honolulu" className="text-blue-600 hover:text-blue-800">All Treatments</Link></li>
                            <li><Link to="/shoulder-pain-acupuncture-honolulu" className="text-blue-600 hover:text-blue-800">Conditions We Treat</Link></li>
                            <li><Link to="/patient-reviews" className="text-blue-600 hover:text-blue-800">Patient Reviews</Link></li>
                            <li><Link to="/book-appointment" className="text-blue-600 hover:text-blue-800 font-bold">Book Appointment</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-4 text-slate-900 border-b pb-2">Core Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/pain-management-honolulu" className="text-blue-600 hover:text-blue-800">Chronic Pain Management</Link></li>
                            <li><Link to="/auto-accident-injury-honolulu" className="text-blue-600 hover:text-blue-800">Auto Accident Injury Relief</Link></li>
                            <li><Link to="/workers-comp-injury-honolulu" className="text-blue-600 hover:text-blue-800">Workers' Comp Claims</Link></li>
                            <li><Link to="/veterans-pain-relief-honolulu" className="text-blue-600 hover:text-blue-800">Veterans Pain Relief (VA Care)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-4 text-slate-900 border-b pb-2">Service Areas</h3>
                        <ul className="space-y-3">
                            <li><Link to="/acupuncture-waikiki" className="text-blue-600 hover:text-blue-800">Waikiki Acupuncture</Link></li>
                            <li><Link to="/acupuncture-kahala" className="text-blue-600 hover:text-blue-800">Kahala Acupuncture</Link></li>
                            <li><Link to="/acupuncture-pearl-city" className="text-blue-600 hover:text-blue-800">Pearl City & Aiea Clinic</Link></li>
                            <li><Link to="/acupuncture-waipahu" className="text-blue-600 hover:text-blue-800">Waipahu Treatment</Link></li>
                            <li><Link to="/acupuncture-kapolei" className="text-blue-600 hover:text-blue-800">Kapolei Veterans Care</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-4 text-slate-900 border-b pb-2">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="text-blue-600 hover:text-blue-800">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
