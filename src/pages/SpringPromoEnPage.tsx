import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LandingPageShareBubble from '@/components/LandingPageShareBubble';

export default function SpringPromoEnPage() {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, reason: 'Spring Promo 2026 Claim' })
            });
            if (res.ok) setIsSuccess(true);
            else alert('Failed to send request. Please call us directly.');
        } catch (err) {
            console.error(err);
            alert('Error connecting to server. Please call us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F0FDF4] py-20 px-4 relative overflow-hidden">
            <Helmet>
                <title>Spring Special Promotion | AcuTherapy Clinics</title>
                <meta name="description" content="Claim your spring acupuncture and pain relief promotion at AcuTherapy Honolulu." />
                <meta property="og:title" content="Spring Special Promotion | AcuTherapy Clinics" />
                <meta property="og:description" content="Claim your spring acupuncture and pain relief promotion at AcuTherapy Honolulu." />
                <meta property="og:image" content="https://acutherapy.com/images/spring-promo-og.png" />
                <meta property="og:url" content="https://acutherapy.com/en/landing/spring-promo" />
            </Helmet>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2 space-y-6">
                    <div className="inline-block bg-teal-100 text-teal-800 font-bold px-4 py-2 rounded-full mb-4 shadow-sm border border-teal-200">
                        🌸 SPRING RENEWAL EVENT 2026
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                        Rejuvenate Your Body This Spring.
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Step into the new season pain-free. Claim a free initial consultation and diagnostic testing with Dr. David Cai this month. See why hundreds in Honolulu trust AcuTherapy.
                    </p>
                    <ul className="space-y-4 text-slate-700 mt-8 text-lg font-medium">
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-teal-500 w-6 h-6" /> Comprehensive Meridian Diagnostics</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-teal-500 w-6 h-6" /> Targeted Pain Relief Protocol</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-teal-500 w-6 h-6" /> Zero Out-Of-Pocket for Auto PIP</li>
                    </ul>
                </div>
                
                <div className="md:w-1/2 w-full max-w-md bg-[#1e293b] rounded-[1.5rem] p-10 shadow-2xl relative border-none z-20">
                    {/* Circular Red Promo Badge */}
                    <div className="absolute -top-6 -right-6 w-[110px] h-[110px] bg-[#e11d48] text-white rounded-full flex flex-col items-center justify-center shadow-xl transform rotate-12 z-50 hover:scale-105 transition-transform">
                        <span className="text-[11px] font-bold uppercase tracking-widest opacity-90 drop-shadow-sm">Ends On</span>
                        <span className="text-[22px] font-extrabold leading-none my-0.5 drop-shadow-sm">Mar 30</span>
                        <span className="text-[10px] font-bold opacity-75">12:00 PM</span>
                    </div>
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-teal-400 to-emerald-500"></div>
                    {isSuccess ? (
                        <div className="text-center py-10 animate-in zoom-in duration-500">
                            <CheckCircle2 className="w-20 h-20 text-teal-500 mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-white mb-4">You're All Set!</h2>
                            <p className="text-slate-600 mb-8">We received your request. Our clinic staff will contact you shortly to confirm your specific appointment time.</p>
                            <Button onClick={() => window.location.href='/'} className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-lg">Back to Home</Button>
                        </div>
                    ) : (
                        <form onSubmit={submitForm} className="space-y-5 relative z-10">
                            <h2 className="text-3xl font-extrabold text-white mb-2">Claim Your Offer</h2>
                            <p className="text-slate-500 mb-8 text-sm">Fill out the quick form below and secure your spot.</p>
                            
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2 text-xs uppercase tracking-wider">Full Name</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none bg-white text-slate-900 border-none placeholder-slate-400 transition-all" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2 text-xs uppercase tracking-wider">Phone Number</label>
                                <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none bg-white text-slate-900 border-none placeholder-slate-400 transition-all" placeholder="(808) 555-0192" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2 text-xs uppercase tracking-wider">Email Address</label>
                                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none bg-white text-slate-900 border-none placeholder-slate-400 transition-all" placeholder="name@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                            </div>
                            <Button type="submit" disabled={isSubmitting} className="w-full h-14 mt-4 text-lg bg-emerald-600 hover:bg-emerald-700 transition-colors">
                                {isSubmitting ? 'Securing...' : <span className="flex items-center gap-2">Secure My Spot <ArrowRight className="w-5 h-5" /></span>}
                            </Button>
                            <p className="text-xs text-center text-slate-400 mt-4 leading-relaxed">By submitting, you agree to our privacy policy. No credit card required.</p>
                        </form>
                    )}
                </div>
            </div>
        
            {/* Floating Share Bubble */}
            <LandingPageShareBubble urlPath="/en/landing/spring-promo" isChinese={false} />
        </div>
    );
}
