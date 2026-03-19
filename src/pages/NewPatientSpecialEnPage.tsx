import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NewPatientSpecialEnPage() {
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
                body: JSON.stringify({ ...formData, reason: 'New Patient Special Evaluation' })
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
        <div className="min-h-screen bg-white py-20 px-4">
            <Helmet>
                <title>New Patient Special | AcuTherapy Clinics</title>
                <meta name="description" content="Discover natural pain relief at AcuTherapy Clinics in Honolulu. Grab your new patient special today." />
            </Helmet>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 font-bold px-4 py-2 rounded-full mb-4">
                        <Shield className="w-4 h-4" /> EXCLUSIVE INTRODUCTION
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                        Experience Real Relief. No Drugs. No Surgery.
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        For a limited time, new patients get priority booking for a massive diagnostic consultation with Dr. David Cai. We get to the root of your chronic pain.
                    </p>
                    <ul className="space-y-4 text-slate-700 mt-8 text-lg font-medium">
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-indigo-500 w-6 h-6" /> Highly Rated by Honolulu Locals</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-indigo-500 w-6 h-6" /> In-Network with HMSA, Kaiser, UHA</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-indigo-500 w-6 h-6" /> Over 30 Years of Medical Experience</li>
                    </ul>
                </div>
                
                <div className="md:w-1/2 w-full max-w-md bg-indigo-50 rounded-3xl p-10 shadow-xl border border-indigo-100">
                    {isSuccess ? (
                        <div className="text-center py-10 animate-in zoom-in duration-500">
                            <CheckCircle2 className="w-20 h-20 text-indigo-500 mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Welcome Aboard!</h2>
                            <p className="text-slate-600 mb-8">We received your form. We are eager to help you heal and will call you soon to schedule your Visit.</p>
                            <Button onClick={() => window.location.href='/'} className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-lg">Browse Website</Button>
                        </div>
                    ) : (
                        <form onSubmit={submitForm} className="space-y-5">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Reserve Your Spot</h2>
                            <p className="text-slate-500 mb-8 text-sm">Takes less than 30 seconds.</p>
                            
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="(808) 555-0192" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="name@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                            </div>
                            <Button type="submit" disabled={isSubmitting} className="w-full h-14 mt-4 text-lg bg-indigo-600 hover:bg-indigo-700 transition-colors">
                                {isSubmitting ? 'Requesting...' : <span className="flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></span>}
                            </Button>
                        </form>
                    )}

                    {/* Share QR Code */}
                    <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col items-center text-center">
                        <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">${"Scan to open on mobile or share"}</p>
                        <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                           <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://acutherapy.com${pathUrl}" alt="QR Code" className="w-24 h-24" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
