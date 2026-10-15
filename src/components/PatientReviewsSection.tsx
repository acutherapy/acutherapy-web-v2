import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

const REVIEWS = [
    {
        text: "After just one session I slept better, can lift my arm up and have less pain.",
        author: "Angie Y.",
    },
    {
        text: "Clinic is clean and very welcoming in Liliha. Lots of parking. I've been going for about a month and recommend this place. Slowly recovering from my car accident thanks to Acutherapy Clinic!",
        author: "Ryan G.",
    },
    {
        text: "Treatment at Acutherapy is a reboot for my life. Stomach issues?! Gone. Sleep?! Much improved. Daily medication? Reduced. I am deeply changed and forever grateful.",
        author: "Heather H.",
    },
];

export default function PatientReviewsSection() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map(i => (
                            <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">What Our Patients Say</h2>
                    <p className="text-slate-500 text-sm font-medium">Rated 4.9 stars across 100+ Google reviews at both locations.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {REVIEWS.map((r, i) => (
                        <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                            <div className="flex gap-0.5 text-amber-400 mb-4">
                                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-xl">★</span>)}
                            </div>
                            <p className="text-slate-700 italic mb-5 leading-relaxed text-sm">"{r.text}"</p>
                            <p className="font-bold text-slate-900 text-sm">— {r.author}</p>
                            <p className="text-xs text-slate-400 mt-1">Google Review</p>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link
                        to="/patient-reviews"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 text-sm"
                    >
                        Read all patient reviews <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
