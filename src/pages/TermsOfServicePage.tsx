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
                    <section className="max-w-4xl mx-auto px-4 py-16 text-gray-700 leading-relaxed">
  
  <h2 className="text-3xl font-bold text-blue-900 mb-6">
    SMS Terms and Conditions
  </h2>

  <ol className="space-y-6 list-decimal pl-5">

    <li>
      <strong>SMS for Consent Communication</strong><br />
      We will not share your phone number with any third parties for marketing purposes or affiliates for any purpose. This includes SMS opt-in data, consent, and phone numbers.
    </li>

    <li>
      <strong>Types of SMS Communications</strong><br />
      If you have consented to receive text messages from AcuTherapy Clinics, you may receive messages related to the following, Example: "Hello, this is a friendly reminder of your upcoming appointment with Dr. David Cai at AcuTherapy Clinics on [Date] at [Time]. You can reply STOP to opt out of SMS messaging from AcuTherapy Clinics at any time."
Conversation external, 
Conversation between employees.
    </li>

    <li>
      <strong>Message Frequency</strong><br />
      Message frequency may vary depending on your interaction with our services, approximately less than 10 SMS messages per week.
    </li>

    <li>
      <strong>Carrier Charges</strong><br />
      Message and data rates may apply based on your mobile carrier and location.
    </li>

    <li>
      <strong>Opt-In Methods</strong><br />
      You can opt in via the following methods:  by submitting an online form at{" "}
      <a href="https://acutherapy.com/book-appointment" className="text-blue-600 underline">
        https://acutherapy.com/book-appointment
      </a>.
    </li>

    <li>
      <strong>Opt-Out Instructions</strong><br />
      You may opt out at any time by replying <strong>STOP</strong>. To resume, reply <strong>START</strong>.
    </li>

    <li>
      <strong>Help</strong><br />
      Reply <strong>HELP</strong> or visit{" "}
      <a href="https://acutherapy.com" className="text-blue-600 underline">
        https://acutherapy.com
      </a>.
    </li>

    <li>
      <strong>Disclosures</strong><br />
      Message frequency may vary.<br />
      Message and data rates may apply.<br />
      Reply STOP to cancel.<br />
      Reply HELP for assistance.<br /><br />

      View our{" "}
      <a href="https://acutherapy.com/privacy-policy" className="text-blue-600 underline">
        Privacy Policy
      </a>{" "}
      and{" "}
      <a href="https://acutherapy.com/terms-of-service" className="text-blue-600 underline">
        Terms of Service
      </a>.
    </li>

  </ol>

</section>

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
