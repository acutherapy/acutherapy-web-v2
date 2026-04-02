import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, Check, Building2, MessageSquare, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BookAppointmentPage() {
    const [step, setStep] = useState(3);
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
    const [smsChecked, setSmsChecked] = useState(false);

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

                {/* Optional Progress Bar container - fixed closing tags to ensure valid syntax */}
                {false && (
                    <div className="relative mb-8">
                        <div className={`absolute left-8 top-1/2 transform -translate-y-1/2 h-0.5 bg-teal-500 z-0 transition-all duration-500 ${step >= 3 ? 'w-[calc(100%-4rem)]' : step === 2 ? 'w-[calc(50%-2rem)]' : 'w-0'}`}></div>
                    </div>
                )}

                {/* Step 1: Patient Type */}
                {step === 1 && (
                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* New Patient Card */}
                        <button
                            type="button"
                            onClick={() => {
                                updateForm('patientType', 'new');
                                nextStep();
                            }}
                            className="bg-white rounded-2xl p-10 text-center shadow-sm border border-slate-200 hover:shadow-md hover:border-teal-200 transition-all flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            <div className="h-16 w-16 bg-
