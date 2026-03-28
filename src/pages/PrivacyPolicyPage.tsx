import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | AcuTherapy Clinics</title>
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 py-20 min-h-[60vh]">

                {/* Header */}
                <div className="flex items-center gap-3 mb-8 border-b pb-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-blue-900">
                        Privacy Policy
                    </h1>
                </div>

                {/* Content */}
                <div className="text-slate-600 space-y-6 leading-relaxed">

                    <p className="font-bold text-blue-900">
                        Last Updated: March 2026
                    </p>

                    {/* Intro */}
                    <p>
                        AcuTherapy Clinics® respects your privacy and is committed to protecting your personal and health information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our services.
                    </p>

                    {/* Collection */}
                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                        Information We Collect
                    </h2>
                    <p>
                        We may collect personal information such as your name, phone number, email address, and appointment details when you contact us, submit forms, or receive services.
                    </p>

                    <p>
                        We may also collect non-personal information such as browser type, IP address, and usage data to improve our website performance and user experience.
                    </p>

                    {/* Use */}
                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                        How We Use Your Information
                    </h2>
                    <p>
                        Your information is used to:
                        <br />• Schedule and manage appointments
                        <br />• Provide customer support and follow-up care
                        <br />• Improve our services and communication
                    </p>

                    {/* SMS Section (🔥关键新增) */}
                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                        SMS Communication & Consent
                    </h2>

                    <p>
                        By providing your mobile number, you consent to receive SMS messages from AcuTherapy Clinics® related to appointments, scheduling, follow-ups, and customer care.
                    </p>

                    <p>
                        Message frequency may vary. Message and data rates may apply.
                    </p>

                    <p>
                        You may opt out at any time by replying <strong>STOP</strong>. 
                        For assistance, reply <strong>HELP</strong>.
                    </p>

                    {/* 🚨 CR6002 关键句（必须存在） */}
                    <p className="font-semibold text-blue-900">
                        No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
                    </p>

                    {/* Data Protection */}
                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                        Data Protection
                    </h2>
                    <p>
                        We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse.
                    </p>

                    {/* External Links */}
                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                        External Links
                    </h2>
                    <p>
                        Our website may contain links to external websites. We are not responsible for the privacy practices or content of such third-party sites.
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
