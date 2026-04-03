import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Map, LayoutGrid, Stethoscope, Activity, MapPin, Building2, HelpCircle, FileText, Globe } from 'lucide-react';

export default function SitemapPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Helmet>
                <title>HTML Sitemap | AcuTherapy Clinics Hawaii</title>
                <meta name="description" content="Navigate the AcuTherapy Clinics website. Find links to all our acupuncture services, pain management conditions, clinic locations, and patient resources." />
                <link rel="canonical" href="https://acutherapy.com/sitemap" />
            </Helmet>

            {/* Page Header */}
            <section className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
                    <div className="p-4 bg-white/10 rounded-2xl">
                        <Map className="h-8 w-8 text-blue-300" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Website Sitemap</h1>
                        <p className="text-blue-200 mt-2 text-lg">Complete directory of AcuTherapy Clinics services and information.</p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Main Navigation */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <div className="flex items-center gap-3 mb-6 border-b pb-4">
                            <LayoutGrid className="text-blue-600 h-6 w-6" />
                            <h3 className="font-bold text-xl text-slate-900">Main Navigation</h3>
                        </div>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-slate-600 hover:text-blue-700 font-medium hover:underline">Home</Link></li>
                            <li><Link to="/dr-david-cai-honolulu-acupuncturist" className="text-slate-600 hover:text-blue-700 font-medium hover:underline">About Dr. David Cai</Link></li>
                            <li><Link to="/patient-reviews" className="text-slate-600 hover:text-blue-700 font-medium hover:underline">Patient Reviews</Link></li>
                            <li><Link to="/book-appointment" className="text-blue-600 font-bold hover:text-blue-800 hover:underline">Book Your Appointment</Link></li>
                        </ul>
                    </div>

                    {/* Treatment Services */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <div className="flex items-center gap-3 mb-6 border-b pb-4">
                            <Stethoscope className="text-emerald-600 h-6 w-6" />
                            <h3 className="font-bold text-xl text-slate-900">Core Treatments</h3>
                        </div>
                        <ul className="space-y-3">
                            <li><Link to="/acupuncture-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Honolulu Acupuncture</Link></li>
                            <li><Link to="/medical-massage-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Medical Massage Therapy</Link></li>
                            <li><Link to="/fire-cupping-therapy-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Fire Cupping & Gua Sha</Link></li>
                            <li><Link to="/sports-injury-acupuncture-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Sports Injury Rehabilitation</Link></li>
                        </ul>
                    </div>

                    {/* Conditions We Treat */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 lg:row-span-2">
                        <div className="flex items-center gap-3 mb-6 border-b pb-4">
                            <Activity className="text-red-500 h-6 w-6" />
                            <h3 className="font-bold text-xl text-slate-900">Conditions We Treat</h3>
                        </div>
                        <ul className="space-y-3">
                            <li><Link to="/back-pain-acupuncture-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Back Pain Relief</Link></li>
                            <li><Link to="/sciatica-treatment-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Sciatica Treatment</Link></li>
                            <li><Link to="/neck-pain-treatment-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Neck Pain Treatment</Link></li>
                            <li><Link to="/shoulder-pain-acupuncture-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Shoulder Pain & Rotator Cuff</Link></li>
                            <li><Link to="/knee-pain-acupuncture-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Knee Pain</Link></li>
                            <li><Link to="/headache-migraine-acupuncture-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Headaches & Migraines</Link></li>
                            <li><Link to="/auto-accident-injury-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Auto Accident Injuries (PIP)</Link></li>
                            <li><Link to="/whiplash-treatment-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Whiplash Recovery</Link></li>
                            <li><Link to="/workers-comp-injury-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Workers' Comp Claims</Link></li>
                            <li><Link to="/veterans-pain-relief-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Veterans Pain Relief (VA Care)</Link></li>
                            <li><Link to="/herniated-disc-acupuncture-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Herniated Disc</Link></li>
                            <li><Link to="/arthritis-acupuncture-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Arthritis Management</Link></li>
                            <li><Link to="/plantar-fasciitis-acupuncture-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Plantar Fasciitis</Link></li>
                            <li><Link to="/frozen-shoulder-acupuncture-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Frozen Shoulder</Link></li>
                            <li><Link to="/tennis-elbow-acupuncture-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Tennis Elbow</Link></li>
                            <li><Link to="/hip-pain-acupuncture-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">Hip Pain</Link></li>
                            <li><Link to="/pain-management-honolulu" className="text-slate-600 hover:text-blue-700 hover:underline">General Chronic Pain</Link></li>
                        </ul>
                    </div>

                    {/* Clinic Locations */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <div className="flex items-center gap-3 mb-6 border-b pb-4">
                            <Building2 className="text-indigo-600 h-6 w-6" />
                            <h3 className="font-bold text-xl text-slate-900">Clinic Locations</h3>
                        </div>
                        <ul className="space-y-3">
                            <li><Link to="/honolulu-clinic" className="text-slate-600 hover:text-blue-700 hover:underline font-semibold">Honolulu Clinic (Liliha)</Link></li>
                            <li><Link to="/aiea-pearl-city-clinic" className="text-slate-600 hover:text-blue-700 hover:underline font-semibold">Aiea / Pearl City Clinic</Link></li>
                            <li><Link to="/contact-honolulu-acupuncture" className="text-slate-600 hover:text-blue-700 hover:underline">Contact Information</Link></li>
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 lg:row-span-2">
                        <div className="flex items-center gap-3 mb-6 border-b pb-4">
                            <MapPin className="text-amber-600 h-6 w-6" />
                            <h3 className="font-bold text-xl text-slate-900">Hawaii Service Areas</h3>
                        </div>
                        <ul className="space-y-3">
                            <li><Link to="/acupuncture-waikiki" className="text-slate-600 hover:text-blue-700 hover:underline">Waikiki</Link></li>
                            <li><Link to="/acupuncture-kahala" className="text-slate-600 hover:text-blue-700 hover:underline">Kahala</Link></li>
                            <li><Link to="/acupuncture-manoa" className="text-slate-600 hover:text-blue-700 hover:underline">Manoa</Link></li>
                            <li><Link to="/acupuncture-kaimuki" className="text-slate-600 hover:text-blue-700 hover:underline">Kaimuki</Link></li>
                            <li><Link to="/acupuncture-ala-moana" className="text-slate-600 hover:text-blue-700 hover:underline">Ala Moana</Link></li>
                            <li><Link to="/acupuncture-kapahulu" className="text-slate-600 hover:text-blue-700 hover:underline">Kapahulu</Link></li>
                            <li><Link to="/acupuncture-moiliili" className="text-slate-600 hover:text-blue-700 hover:underline">Moiliili</Link></li>
                            <li><Link to="/acupuncture-kakaako" className="text-slate-600 hover:text-blue-700 hover:underline">Kakaako</Link></li>
                            <li><Link to="/acupuncture-hawaii-kai" className="text-slate-600 hover:text-blue-700 hover:underline">Hawaii Kai</Link></li>
                            <li><Link to="/acupuncture-pearl-city" className="text-slate-600 hover:text-blue-700 hover:underline">Pearl City</Link></li>
                            <li><Link to="/acupuncture-waipahu" className="text-slate-600 hover:text-blue-700 hover:underline">Waipahu</Link></li>
                            <li><Link to="/acupuncture-kapolei" className="text-slate-600 hover:text-blue-700 hover:underline">Kapolei</Link></li>
                        </ul>
                    </div>

                    {/* Patient Resources & Answers */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 lg:row-span-2">
                        <div className="flex items-center gap-3 mb-6 border-b pb-4">
                            <HelpCircle className="text-purple-600 h-6 w-6" />
                            <h3 className="font-bold text-xl text-slate-900">Patient Resources & Q&A</h3>
                        </div>
                        <ul className="space-y-3">
                            <li><Link to="/treatment-process" className="text-slate-600 hover:text-blue-700 hover:underline">Our Treatment Process</Link></li>
                            <li><Link to="/insurance-accepted" className="text-slate-600 hover:text-blue-700 hover:underline">Insurance Accepted</Link></li>
                            <li><Link to="/frequently-asked-questions" className="text-slate-600 hover:text-blue-700 hover:underline">Frequently Asked Questions (FAQ)</Link></li>
                            <li><Link to="/new-patient-guide" className="text-slate-600 hover:text-blue-700 hover:underline">New Patient Guide</Link></li>
                            <li><Link to="/what-to-expect-first-acupuncture-visit" className="text-slate-600 hover:text-blue-700 hover:underline">What to Expect on Your First Visit</Link></li>
                            <li><Link to="/does-acupuncture-help-sciatica" className="text-slate-600 hover:text-blue-700 hover:underline">Does Acupuncture Help Sciatica?</Link></li>
                            <li><Link to="/how-acupuncture-treats-back-pain" className="text-slate-600 hover:text-blue-700 hover:underline">How Acupuncture Treats Back Pain</Link></li>
                            <li><Link to="/acupuncture-vs-chiropractic-back-pain" className="text-slate-600 hover:text-blue-700 hover:underline">Acupuncture vs. Chiropractic</Link></li>
                            <li><Link to="/is-acupuncture-good-for-herniated-disc" className="text-slate-600 hover:text-blue-700 hover:underline">Acupuncture for Herniated Discs</Link></li>
                            <li><Link to="/can-acupuncture-help-neck-pain" className="text-slate-600 hover:text-blue-700 hover:underline">Can Acupuncture Help Neck Pain?</Link></li>
                            <li><Link to="/does-cupping-help-back-pain" className="text-slate-600 hover:text-blue-700 hover:underline">Does Cupping Help Back Pain?</Link></li>
                            <li><Link to="/how-fast-does-acupuncture-work" className="text-slate-600 hover:text-blue-700 hover:underline">How Fast Does Acupuncture Work?</Link></li>
                            <li><Link to="/acupuncture-safety" className="text-slate-600 hover:text-blue-700 hover:underline">Acupuncture Safety Guidelines</Link></li>
                            <li><Link to="/about-traditional-chinese-medicine" className="text-slate-600 hover:text-blue-700 hover:underline">About Traditional Chinese Medicine</Link></li>
                        </ul>
                    </div>

                    {/* Legal & Policies */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <div className="flex items-center gap-3 mb-6 border-b pb-4">
                            <FileText className="text-slate-500 h-6 w-6" />
                            <h3 className="font-bold text-xl text-slate-900">Legal & Policies</h3>
                        </div>
                        <ul className="space-y-3">
                            <li><Link to="/privacy-policy" className="text-slate-600 hover:text-blue-700 hover:underline">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="text-slate-600 hover:text-blue-700 hover:underline">Terms of Service</Link></li>
                            <li><Link to="/clinic-policies" className="text-slate-600 hover:text-blue-700 hover:underline">Clinic Policies</Link></li>
                        </ul>
                    </div>

                    {/* International Languages */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <div className="flex items-center gap-3 mb-6 border-b pb-4">
                            <Globe className="text-sky-500 h-6 w-6" />
                            <h3 className="font-bold text-xl text-slate-900">Language Portals</h3>
                        </div>
                        <ul className="space-y-3">
                            <li><Link to="/acupuncture-honolulu-chinese" className="text-slate-600 hover:text-blue-700 hover:underline">中文 (Chinese)</Link></li>
                            <li><Link to="/acupuncture-honolulu-japanese" className="text-slate-600 hover:text-blue-700 hover:underline">日本語 (Japanese)</Link></li>
                            <li><Link to="/acupuncture-honolulu-korean" className="text-slate-600 hover:text-blue-700 hover:underline">한국어 (Korean)</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
