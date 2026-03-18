import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | AcuTherapy Clinics</title>
            </Helmet>
            <div className="max-w-4xl mx-auto px-4 py-20 min-h-[60vh]">
                <div className="flex items-center gap-3 mb-8 border-b pb-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-blue-900">Privacy Policy</h1>
                </div>
                <div className="text-slate-600 space-y-6 leading-relaxed">
                    <p className="font-bold text-blue-900">Last Updated: February 2024</p>
                    <p>
                        Your Rights. Our Responsibility. We understand that medical information about you and your health is personal and we are committed to protecting this information. When you receive acupuncture treatment, a record of the treatment is made. Typically, this record contains your treatment plan, your history and physical, any other information that you provide to us, and billing records. This record serves as a basis for planning your treatment; means of communication for or between our acupuncturists and staff; and a tool for assessing and continually working to improve the care rendered at Acutherapy locations.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Collection of your Personal Information</h2>
                    <p>
                        Acutherapy Clinics collects personally identifiable information, such as your e-mail address, name, home or work address or telephone number. We also collect anonymous demographic information, which is not unique to you, such as your ZIP code, age, gender, preferences, interests and favorites. There is also information about your computer hardware and software that is automatically collected by this website. This information can include: your IP address, browser type, domain names, access times and referring Web site addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of this Web site.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">External Links</h2>
                    <p>
                        Acutherapy Clinics encourages you to review the privacy statements of Web sites you choose to link to from the website so that you can understand how those Web sites collect, use and share your information. Acutherapy Clinics is not responsible for the privacy statements or other content on any other Web sites.
                    </p>
                </div>
            </div>
        </>
    );
}
