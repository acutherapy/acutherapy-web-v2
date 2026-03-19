import { useState } from 'react';
import { Share2, X } from 'lucide-react';

export default function LandingPageShareBubble({ urlPath, isChinese }: { urlPath: string, isChinese?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);

    const fullUrl = `https://acutherapy.com${urlPath}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${fullUrl}`;

    return (
        <div className="fixed bottom-6 left-6 z-50">
            {isOpen ? (
                <div className="absolute bottom-16 left-0 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 animate-in slide-in-from-bottom-4 fade-in duration-300 w-48">
                    <div className="flex justify-between items-center mb-3">
                         <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{isChinese ? '扫码分享' : 'Scan to Share'}</span>
                         <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-rose-500 transition-colors">
                             <X className="w-4 h-4" />
                         </button>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-2xl border border-slate-100 shadow-inner flex items-center justify-center">
                        <img src={qrUrl} className="w-full h-auto aspect-square" alt="QR Code" />
                    </div>
                </div>
            ) : null}

            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 text-slate-600 hover:text-emerald-600 hover:scale-110 active:scale-95 transition-all outline-none"
                aria-label="Share this page"
            >
                <Share2 className="w-6 h-6" />
            </button>
        </div>
    );
}
