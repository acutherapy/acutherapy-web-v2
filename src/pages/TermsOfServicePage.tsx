import { Helmet } from 'react-helmet-async';
import { FileText } from 'lucide-react';

export default function TermsOfServicePage() {
    return (
        <>
            <Helmet>
                <title>Terms of Service | AcuTherapy Clinics</title>
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 py-20 min-h-[60vh]">
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-8 border-b pb-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-blue-900">
                        Terms of Service
                    </h1>
                </div>

                {/* Content */}
                <div className="text-slate-600 space-y-6 leading-relaxed">
                    
                    <p className="font-bold text-blue-900">
                        Last Updated: March 2026
                    </p>

                    <p>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and AcuTherapy Clinics® (“we,” “us” or “our”), concerning your access to and use of the acutherapy.com website.
                    </p>

                    {/* Agreement */}
                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                        Agreement to Terms
                    </h2>
                    <p>
                        By accessing this website, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree, you must discontinue use immediately.
                    </p>

                    {/* IP */}
                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                        Intellectual Property Rights
                    </h2>
                    <p>
                        All content, including text, graphics, logos, and software, is the property of AcuTherapy Clinics® and is protected by applicable copyright and trademark laws.
                    </p>

                    {/* Medical Disclaimer */}
                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                        Medical Disclaimer
                    </h2>
                    <p>
                        ACUTHERAPY CLINICS® DOES NOT PROVIDE MEDICAL ADVICE THROUGH THIS WEBSITE. NO LICENSED MEDICAL PROFESSIONAL-PATIENT RELATIONSHIP IS CREATED BY USING THIS SITE. All content is for informational purposes only.
                    </p>

                    {/* Prohibited */}
                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                        Prohibited Activities
                    </h2>
                    <p>
                        You may not use the site for any unlawful or unauthorized purpose. You agree not to interfere with or disrupt the website or servers.
                    </p>

                    {/* Governing */}
                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                        Governing Law
                    </h2>
                    <p>
                        These Terms are governed by the laws of the State of Hawaii.
                    </p>

                    {/* ======================= */}
                    {/* 🚨 SMS COMPLIANCE SECTION */}
                    {/* ======================= */}
                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                        SMS Terms & Conditions
                    </h2>

                    <p>
                        By providing your mobile number and opting into SMS communications from AcuTherapy Clinics®, you agree to receive text messages related to appointments, scheduling, follow-ups, and customer care services.
                    </p>

                    <p>
                        Message frequency may vary depending on your interaction with our services.
                    </p>

                    <p>
                        Message and data rates may apply.
                    </p>

                    <p>
                        You can opt out at any time by replying <strong>STOP</strong> to any message.
                        For assistance, reply <strong>HELP</strong>.
                    </p>

                    <p>
                        Your mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.
                    </p>

                    <p>
                        For more details, please review our Privacy Policy:
                        <br />
                        <a
                            href="https://acutherapy.com/privacy-policy"
                            className="text-blue-600 underline"
                        >
                            https://acutherapy.com/privacy-policy
                        </a>
                    </p>

                    {/* Contact */}
                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                        Contact Us
                    </h2>

                    <p>
                        AcuTherapy Clinics® <br />
                        1650 Liliha St Suite 208 <br />
                        Honolulu, HI 96817 <br />
                        United States
                    </p>

                </div>
            </div>
        </>
    );
}
