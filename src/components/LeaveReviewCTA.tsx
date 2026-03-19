import { Star, MessageSquareHeart, ArrowRight } from 'lucide-react';

export default function LeaveReviewCTA({ location = 'both' }: { location?: 'both' | 'honolulu' | 'aiea' }) {
    const links = {
        honolulu: {
            title: "Honolulu Clinic",
            url: "https://g.page/r/CSIWLuSn-XHkEBM/review",
            color: "from-blue-50 to-indigo-50",
            border: "border-blue-100"
        },
        aiea: {
            title: "Aiea / Pearl City Clinic",
            url: "https://g.page/r/CUAxECoiEsIKEBM/review",
            color: "from-emerald-50 to-teal-50",
            border: "border-teal-100"
        }
    };

    const renderCard = (key: 'honolulu' | 'aiea') => {
        const data = links[key];
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data.url)}&color=0f172a`;
        
        return (
            <div key={key} className={`bg-gradient-to-br ${data.color} rounded-3xl p-8 border ${data.border} relative overflow-hidden group hover:shadow-xl transition-all`}>
                <div className="flex gap-1 mb-4 text-amber-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-amber-400 drop-shadow-sm" />)}
                </div>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-2">Review {data.title}</h3>
                <p className="text-slate-600 mb-6 font-medium">Your feedback helps other patients find natural pain relief.</p>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <a 
                        href={data.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white font-bold tracking-wide w-full sm:w-auto px-6 py-3.5 rounded-full flex justify-center items-center gap-2 transition-all"
                    >
                        Write a Review <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <div className="hidden sm:flex items-center gap-4 border-l border-slate-300 pl-6 shrink-0">
                        <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-200 group-hover:scale-105 transition-transform">
                            <img src={qrUrl} alt={`QR Code for ${data.title}`} className="w-[72px] h-[72px]" />
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest max-w-[80px]">Scan on Mobile</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="py-16 bg-white border-y border-slate-100 rounded-3xl shadow-sm my-16">
            <div className="max-w-4xl mx-auto px-6 sm:px-10">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-rose-100 text-rose-600 rounded-full mb-4">
                        <MessageSquareHeart className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Loved Your Treatment?</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">We rely on word-of-mouth. If Dr. Cai helped you recover, please take 30 seconds to share your story on Google.</p>
                </div>
                
                <div className={`grid grid-cols-1 ${location === 'both' ? 'md:grid-cols-2 gap-8' : 'max-w-xl mx-auto'}`}>
                    {location === 'honolulu' && renderCard('honolulu')}
                    {location === 'aiea' && renderCard('aiea')}
                    {location === 'both' && (
                        <>
                            {renderCard('honolulu')}
                            {renderCard('aiea')}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
