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
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStep(4);
      } else {
        alert('Error sending request.');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <Helmet>
        <title>Book Appointment | AcuTherapy</title>
      </Helmet>

      <div className="max-w-3xl mx-auto">

        {/* =========================
            STEP 1
        ========================= */}
        {step === 1 && (
          <>
            <h1 className="text-4xl font-bold text-center mb-6">
              Book Your Appointment
            </h1>

            <div className="grid md:grid-cols-2 gap-6">

              <button
                onClick={() => {
                  updateForm('patientType', 'new');
                  nextStep();
                }}
                className="bg-white p-8 rounded-xl border hover:shadow-md"
              >
                <User className="mx-auto mb-4" />
                <h3 className="text-xl font-bold">New Patient</h3>
              </button>

              <div className="bg-white p-8 rounded-xl border text-center">
                <Calendar className="mx-auto mb-4" />
                <h3 className="text-xl font-bold">Returning Patient</h3>

                <a
                  href="https://acutherapy.janeapp.com/"
                  target="_blank"
                  className="block mt-4 bg-blue-600 text-white py-2 rounded"
                >
                  Book on Jane App
                </a>
              </div>
            </div>

            {/* 🔥 CTA 可见（审核关键） */}
            <div className="mt-10 text-xs text-gray-500 border-t pt-4">
              By submitting your information through this booking form, you agree to receive SMS messages from AcuTherapy Clinics related to appointments and customer care.
              <br /><br />
              Message frequency may vary. Message and data rates may apply.
              <br />
              Reply STOP to opt out. Reply HELP for assistance.
              <br /><br />
              <a href="https://acutherapy.com/privacy-policy" className="underline">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="https://acutherapy.com/terms-of-service" className="underline">
                Terms of Service
              </a>
            </div>
          </>
        )}

        {/* =========================
            STEP 2
        ========================= */}
        {step === 2 && (
          <div className="bg-white p-6 rounded-xl border">
            <h2 className="text-xl font-bold mb-4">Symptoms</h2>

            <textarea
              value={formData.reason}
              onChange={(e) => updateForm('reason', e.target.value)}
              className="w-full border p-3"
              placeholder="Describe your issue"
            />

            <div className="flex gap-4 mt-6">
              <Button onClick={prevStep}>Back</Button>
              <Button onClick={nextStep}>Next</Button>
            </div>
          </div>
        )}

        {/* =========================
            STEP 3
        ========================= */}
        {step === 3 && (
          <form onSubmit={submitForm} className="bg-white p-6 rounded-xl border">

            <h2 className="text-xl font-bold mb-4">Contact Info</h2>

            <input
              type="text"
              placeholder="Name"
              required
              className="w-full border p-3 mb-4"
              onChange={(e) => updateForm('name', e.target.value)}
            />

            <input
              type="tel"
              placeholder="Phone"
              required
              className="w-full border p-3 mb-4"
              onChange={(e) => updateForm('phone', e.target.value)}
            />

            {/* 🔥 唯一正确 SMS checkbox */}
            <label className="flex gap-2 text-xs text-gray-600">
              <input type="checkbox" required />

              <span>
                By checking this box, you agree to receive SMS messages from <strong>AcuTherapy Clinics</strong>.
                <br /><br />
                Message frequency may vary. Message and data rates may apply.
                <br />
                Reply STOP to opt out. Reply HELP or visit{" "}
                <a href="https://acutherapy.com" className="underline">
                  website
                </a>.
                <br /><br />
                <a href="https://acutherapy.com/privacy-policy" className="underline">
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a href="https://acutherapy.com/terms-of-service" className="underline">
                  Terms of Service
                </a>
              </span>
            </label>

            <div className="flex gap-4 mt-6">
              <Button type="button" onClick={prevStep}>
                Back
              </Button>

              <Button type="submit">
                Submit
              </Button>
            </div>
          </form>
        )}

        {/* =========================
            SUCCESS
        ========================= */}
        {step === 4 && (
          <div className="text-center bg-white p-10 rounded-xl border">
            <h2 className="text-2xl font-bold">Success</h2>
            <p>We will contact you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
