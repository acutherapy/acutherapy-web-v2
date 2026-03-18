import { Helmet } from 'react-helmet-async';
import { FileText } from 'lucide-react';

export default function TermsOfServicePage() {
    return (
        <>
            <Helmet>
                <title>Terms of Service | AcuTherapy Clinics</title>
            </Helmet>
            <div className="max-w-4xl mx-auto px-4 py-20 min-h-[60vh]">
                <div className="flex items-center gap-3 mb-8 border-b pb-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-blue-900">Terms of Use</h1>
                </div>
                <div className="text-slate-600 space-y-6 leading-relaxed">
                    <p className="font-bold text-blue-900">Last Updated: February 2024</p>
                    <p>
                        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Acutherapy Clinics® (“we,” “us” or “our”), concerning your access to and use of the acutherapy.com website.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Agreement to Terms</h2>
                    <p>
                        You agree that by accessing the Site, you have read, understood, and agree to be bound by all these Terms of Use. If you do not agree with all these Terms of Use, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Medical Disclaimer</h2>
                    <p>
                        ACUTHERAPY CLINICS® DOES NOT PROVIDE MEDICAL ADVICE. NO LICENSED MEDICAL PROFESSIONAL/PATIENT RELATIONSHIP IS CREATED BY USING THE WEBSITE. The Content is not intended to be medical advice or instructional for medical diagnosis or treatment.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Prohibited Activities</h2>
                    <p>
                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Governing Law</h2>
                    <p>
                        These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the State of Hawaii applicable to agreements made and to be entirely performed within the State of Hawaii, without regard to its conflict of law principles.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Contact Us</h2>
                    <p>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: Acutherapy Clinics®, 1650 Liliha St Suite 208, Honolulu HI 96817.
                    </p>
                </div>
            </div>
        </>
    );
}
