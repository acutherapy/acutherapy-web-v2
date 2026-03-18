import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type TreatmentInternalLinksProps = {
    currentPage: 'pain-management' | 'auto-accident' | 'workers-comp' | 'veterans';
};

export default function TreatmentInternalLinks({ currentPage }: TreatmentInternalLinksProps) {

    const allLinks = {
        'pain-management': { url: '/pain-management-honolulu', title: 'Comprehensive Pain Management' },
        'auto-accident': { url: '/auto-accident-injury-honolulu', title: 'Auto Accident Injury Recovery' },
        'workers-comp': { url: '/workers-comp-injury-honolulu', title: 'Workers\' Compensation Injury Care' },
        'veterans': { url: '/veterans-pain-relief-honolulu', title: 'Veterans Pain Relief' },
        dr: { url: '/dr-david-cai-honolulu-acupuncturist', title: 'Meet Dr. David Cai' }
    };

    let linksToShow: { url: string; title: string }[] = [];

    switch (currentPage) {
        case 'pain-management':
            linksToShow = [
                allLinks['auto-accident'],
                allLinks['workers-comp'],
                allLinks['veterans'],
                allLinks.dr
            ];
            break;
        case 'auto-accident':
            linksToShow = [
                allLinks['pain-management'],
                allLinks['workers-comp'],
                allLinks.dr
            ];
            break;
        case 'workers-comp':
            linksToShow = [
                allLinks['pain-management'],
                allLinks['auto-accident'],
                allLinks.dr
            ];
            break;
        case 'veterans':
            linksToShow = [
                allLinks['pain-management'],
                allLinks.dr
            ];
            break;
    }

    return (
        <div className="bg-white border text-center border-slate-200 p-8 rounded-3xl mt-16 mb-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Explore Related Treatments & Specialists</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {linksToShow.map((link, idx) => (
                    <Link
                        key={idx}
                        to={link.url}
                        className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                    >
                        <span className="font-semibold text-slate-700 group-hover:text-blue-700">{link.title}</span>
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </Link>
                ))}
            </div>
        </div>
    );
}
