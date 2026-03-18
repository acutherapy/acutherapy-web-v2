import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, Check, Building2, MessageSquare, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BookAppointmentPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        patientType: '',
        location: '',
        reason: '',
        name: '',
        contactMethod: 'Phone',
        email: '',
        phone: '',
    });

    const updateForm = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const nextStep = () => {
        setStep(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const prevStep = () => {
        setStep(prev => prev - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStep(4);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                alert('There was an error sending your request. Please call us directly.');
            }
        } catch (err) {
            console.error(err);
            alert('There was an error sending your request. Please call us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Book Your Appointment | AcuTherapy Clinics</title>
                <meta name="description" content="Schedule your acupuncture or pain management appointment at AcuTherapy Clinics." />
            </Helmet>

            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Book Your Appointment</h1>
                    <p className="text-lg text-slate-600">Complete our Smart Intake form to get matched with the best care plan.</p>
                </div>

                {/* Stepper */}
                {step > 1 && step < 4 && (
                    <div className="flex items-center justify-center mb-12 max-w-lg mx-auto relative px-4">
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-slate-200 z-0"></div>

                        <div className="relative z-10 flex justify-between w-full">
                            {/* Step 1 Indicator */}
                            <div className={`h-12 w-12 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-teal-500 bg-teal-50 text-teal-600' : 'border-slate-200 bg-white text-slate-400'}`}>
                                <Calendar className="h-5 w-5" />
                            </div>

                            {/* Step 2 Indicator */}
                            <div className={`h-12 w-12 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-teal-500 bg-teal-50 text-teal-600' : step === 2 ? 'border-slate-300 bg-white text-slate-500' : 'border-slate-200 bg-white text-slate-400'}`}>
                                <User className="h-5 w-5" />
                            </div>

                            {/* Step 3 Indicator */}
                            <div className={`h-12 w-12 rounded-full flex items-center justify-center border-2 ${step === 4 ? 'border-teal-500 bg-teal-50 text-teal-600' : 'border-slate-200 bg-white text-slate-400'}`}>
                                <Check className="h-5 w-5" />
                            </div>
                        </div>

                        {/* Active Line Overlays */}
                        <div className={`absolute left-8 top-1/2 transform -translate-y-1/2 h-0.5 bg-teal-500 z-0 transition-all duration-500 ${step >= 3 ? 'w-[calc(100%-4rem)]' : step === 2 ? 'w-[calc(50%-2rem)]' : 'w-0'}`}></div>
                    </div>
                )}

                {/* Step 1: Patient Type */}
                {step === 1 && (
                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {/* New Patient Card */}
                        <button
                            onClick={() => {
                                updateForm('patientType', 'new');
                                nextStep();
                            }}
                            className="bg-white rounded-2xl p-10 text-center shadow-sm border border-slate-200 hover:shadow-md hover:border-teal-200 transition-all flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            <div className="h-16 w-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                                <User className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">New Patient</h3>
                            <p className="text-slate-500">I am visiting AcuTherapy for the first time.</p>
                        </button>

                        {/* Returning Patient Card */}
                        <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all flex flex-col items-center">
                            <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                                <Calendar className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Returning Patient</h3>
                            <p className="text-slate-500 mb-6">I have been here before.</p>
                            <a
                                href="https://acutherapy.janeapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-md font-semibold rounded-full flex items-center justify-center text-white"
                            >
                                <Calendar className="mr-2 h-4 w-4" /> Book on Jane App
                            </a>
                        </div>
                    </div>
                )}

                {/* Step 2: Symptoms & Location */}
                {step === 2 && (
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Symptoms & Location</h2>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="location" className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                                    <Building2 className="h-4 w-4 text-slate-500" /> Preferred Clinic Location
                                </label>
                                <select
                                    id="location"
                                    value={formData.location}
                                    onChange={(e) => updateForm('location', e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="">Select Location</option>
                                    <option value="honolulu">Honolulu Clinic (Liliha)</option>
                                    <option value="aiea">Aiea / Pearl City Clinic</option>
                                    <option value="no-preference">No Preference / First Available</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="reason" className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                                    <MessageSquare className="h-4 w-4 text-slate-500" /> Primary Check-in Reason
                                </label>
                                <textarea
                                    id="reason"
                                    rows={5}
                                    value={formData.reason}
                                    onChange={(e) => updateForm('reason', e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="e.g., Lower back pain for 2 weeks, getting worse when sitting."
                                ></textarea>
                            </div>

                            <div className="pt-6 grid grid-cols-2 gap-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={prevStep}
                                    className="h-14 text-lg border-2 border-slate-200 text-slate-700 hover:bg-slate-50"
                                >
                                    Back
                                </Button>
                                <Button
                                    onClick={() => {
                                        if (!formData.location || !formData.reason) {
                                            alert("Please provide location and reason.");
                                            return;
                                        }
                                        nextStep();
                                    }}
                                    className="h-14 text-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold flex items-center justify-center gap-2"
                                >
                                    Next Step <ArrowRight className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Personal Details */}
                {step === 3 && (
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Personal Details</h2>

                        <form onSubmit={submitForm} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-semibold text-slate-900">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => updateForm('name', e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-slate-900">Preferred Contact Method</label>
                                <div className="grid grid-cols-3 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => updateForm('contactMethod', 'Phone')}
                                        className={`py-3 px-4 rounded-lg flex items-center justify-center gap-2 border transition-all text-sm font-medium ${formData.contactMethod === 'Phone' ? 'bg-teal-50 border-teal-500 text-teal-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
                                    >
                                        <Phone className="h-4 w-4" /> Phone
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => updateForm('contactMethod', 'Text')}
                                        className={`py-3 px-4 rounded-lg flex items-center justify-center gap-2 border transition-all text-sm font-medium ${formData.contactMethod === 'Text' ? 'bg-teal-50 border-teal-500 text-teal-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
                                    >
                                        <MessageSquare className="h-4 w-4" /> Text
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => updateForm('contactMethod', 'Email')}
                                        className={`py-3 px-4 rounded-lg flex items-center justify-center gap-2 border transition-all text-sm font-medium ${formData.contactMethod === 'Email' ? 'bg-teal-50 border-teal-500 text-teal-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
                                    >
                                        <Mail className="h-4 w-4" /> Email
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-slate-900">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => updateForm('email', e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-semibold text-slate-900">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => updateForm('phone', e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                                    placeholder="(808) 555-0123"
                                />
                            </div>

                            <div className="pt-6 grid grid-cols-2 gap-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={prevStep}
                                    className="h-14 text-lg border-2 border-slate-200 text-slate-700 hover:bg-slate-50"
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    className="h-14 text-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold flex items-center justify-center"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </span>
                                    ) : (
                                        "Request Appointment"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Step 4: Success Message */}
                {step === 4 && (
                    <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-200 text-center animate-in zoom-in-95 duration-500">
                        <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Check className="h-10 w-10 text-green-600" strokeWidth={3} />
                        </div>
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Request Received!</h2>
                        <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto leading-relaxed">
                            Thank you, {formData.name || 'David Cai'}. Our team will review your symptoms and contact you at <span className="font-semibold text-slate-800">{formData.phone || '8088888888'}</span> shortly to confirm your appointment.
                        </p>
                        <Link to="/">
                            <Button variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 font-semibold px-6 py-6 text-lg">
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                )}

            </div>
        </div>
    );
}
