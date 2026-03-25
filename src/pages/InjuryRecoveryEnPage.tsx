import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LandingPageShareBubble from '@/components/LandingPageShareBubble';

export default function InjuryRecoveryEnPage() {
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
                body: JSON.stringify({ ...formData, reason: 'Injury Recovery Auto/Sports Claim' })
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
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <Helmet>
                <title>Injury Recovery Specialists | AcuTherapy Clinics</title>
                <meta name="description" content="Top-rated Honolulu clinic for auto accident and sports injury recovery." />
                <meta property="og:title" content="Injury Recovery Specialists | AcuTherapy Clinics" />
                <meta property="og:description" content="Top-rated Honolulu clinic for auto accident and sports injury recovery." />
                <meta property="og:image" content="https://acutherapy.com/images/injury-recovery-og.png" />
                <meta property="og:url" content="https://acutherapy.com/en/landing/injury-recovery" />
            </Helmet>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                <div className="md:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-200 font-bold px-4 py-2 rounded-full mb-4 border border-blue-500/30">
                        <Activity className="w-4 h-4" /> 100% PIP INSURANCE COVERAGE
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                        Recover Faster. Get Back to Life.
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        In pain after a car accident or sports injury? AcuTherapy specializes in medical acupuncture and deep tissue methods that drastically accelerate healing and eliminate pain.
                    </p>
                    <ul className="space-y-4 text-slate-700 mt-8 font-medium text-lg font-medium">
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-400 w-6 h-6" /> Zero Out-of-Pocket for Auto Accidents</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-400 w-6 h-6" /> Severe Whiplash & Back Pain Experts</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-400 w-6 h-6" /> Advanced Electro-Acupuncture Therapy</li>
                    </ul>
                </div>
                
                <div className="md:w-1/2 w-full max-w-md bg-[#1e293b] rounded-[1.5rem] p-10 shadow-2xl relative border-none z-20">
                    {/* Circular Red Promo Badge */}
                    <div className="absolute -top-6 -right-6 w-[110px] h-[110px] bg-[#e11d48] text-white rounded-full flex flex-col items-center justify-center shadow-xl transform rotate-12 z-50 hover:scale-105 transition-transform">
                        <span className="text-[11px] font-bold uppercase tracking-widest opacity-90 drop-shadow-sm">Ends On</span>
                        <span className="text-[22px] font-extrabold leading-none my-0.5 drop-shadow-sm">Mar 30</span>
                        <span className="text-[10px] font-bold opacity-75">12:00 PM</span>
                    </div>
                    {isSuccess ? (
                        <div className="text-center py-10 animate-in zoom-in duration-500">
                            <CheckCircle2 className="w-20 h-20 text-blue-400 mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-white mb-4">Request Confirmed</h2>
                            <p className="text-slate-500 mb-8">Our medical staff will call you to verify your insurance and secure your appointment.</p>
                            <Button onClick={() => window.location.href='/'} className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-lg">Back to Home</Button>
                        </div>
                    ) : (
                        <form onSubmit={submitForm} className="space-y-5">
                            <h2 className="text-3xl font-extrabold text-white mb-2">Get Evaluated Today</h2>
                            <p className="text-slate-500 mb-8 text-sm">Don't wait for the pain to become chronic. Fill out the form to get started.</p>
                            
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2 text-xs uppercase tracking-wider">Full Name</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-900 text-white placeholder-slate-500 transition-all" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2 text-xs uppercase tracking-wider">Phone Number</label>
                                <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-900 text-white placeholder-slate-500 transition-all" placeholder="(808) 555-0192" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2 text-xs uppercase tracking-wider">Email Address</label>
                                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-900 text-white placeholder-slate-500 transition-all" placeholder="name@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                            </div>
                            <Button type="submit" disabled={isSubmitting} className="w-full h-14 mt-4 text-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white border-0">
                                {isSubmitting ? 'Sending Request...' : <span className="flex items-center gap-2">Request Evaluation <ArrowRight className="w-5 h-5" /></span>}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        
            {/* Floating Share Bubble */}
            <LandingPageShareBubble urlPath="/en/landing/injury-recovery" isChinese={false} />
        </div>
    );
}
