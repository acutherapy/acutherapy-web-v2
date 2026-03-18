import { Helmet } from 'react-helmet-async';
import { Award, GraduationCap, Building2, HeartPulse, CheckCircle2, Newspaper, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function AboutDrDavidCaiPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Helmet>
        <link rel="canonical" href="https://acutherapy.com/about-dr-david-cai" />
                <title>Dr. David Cai | Honolulu Acupuncture Specialist | Pain Management Expert</title>
                <meta name="description" content="Dr. David Cai is a Doctor of Chinese Medicine and licensed acupuncturist with more than 30 years of clinical experience in pain management and injury recovery." />
            </Helmet>

            {/* Page Header */}
            <section className="bg-blue-900 text-white relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
                        alt="Acupuncture therapy background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
                        <ShieldCheck size={16} /> <span>Trusted Honolulu Pain Clinic</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">About Us</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Meet Dr. David Cai and our dedicated medical team in Honolulu.</p>
                </div>
            </section>
            {/* Section 1 — Professional Overview */}
            <section className="bg-white border-b border-slate-200 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-50 rounded-3xl transform -rotate-2 z-0"></div>
                                <img
                                    src="/images/dr-david-cai-portrait.jpg"
                                    alt="Dr. David Cai"
                                    className="relative z-10 w-full rounded-2xl shadow-xl object-cover"
                                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800'; }}
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3">
                            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">Honolulu Acupuncture Specialist & Pain Management Expert</span>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-sans tracking-tight">Dr. David Cai</h1>

                            <p className="text-xl text-slate-700 leading-relaxed mb-6 font-medium">
                                Dr. David Cai is a Doctor of Chinese Medicine and licensed acupuncturist with more than 30 years of clinical experience in pain management and injury recovery.
                            </p>

                            <div className="mb-6">
                                <p className="text-slate-600 mb-3 font-semibold">Based in Honolulu, Hawaii, Dr. Cai specializes in treating:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                                    <div className="flex items-center gap-2"><CheckCircle2 className="text-blue-500 flex-shrink-0" size={18} /> Chronic pain conditions</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} /> Auto accident injuries</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="text-amber-500 flex-shrink-0" size={18} /> Workers' compensation injuries</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="text-purple-500 flex-shrink-0" size={18} /> Veterans pain care</div>
                                </div>
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                Through acupuncture and Traditional Chinese Medicine, Dr. Cai helps patients recover naturally and regain mobility without relying on medication or surgery whenever possible.
                            </p>

                            <div className="mt-8">
                                <Link to="/book-appointment">
                                    <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg font-bold shadow-lg shadow-blue-900/20">
                                        Book an Appointment
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Layout for Sections 2-6 */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Left Column */}
                        <div className="space-y-12">
                            {/* Section 2 — Academic & Research Background */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><GraduationCap size={24} /></div>
                                    <h2 className="text-2xl font-bold text-slate-900">Academic & Research Background</h2>
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Dr. Cai received his medical training at <strong>Beijing University of Chinese Medicine</strong>, one of the most respected Traditional Chinese Medicine institutions in the world.
                                </p>
                                <p className="font-semibold text-slate-900 mb-2">His training included:</p>
                                <ul className="grid grid-cols-2 gap-2 text-slate-700 mb-6">
                                    <li>• Acupuncture</li>
                                    <li>• Herbal medicine</li>
                                    <li>• Internal medicine</li>
                                    <li>• Surgical fundamentals</li>
                                    <li className="col-span-2">• Advanced clinical diagnostics</li>
                                </ul>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    In addition to his clinical work, Dr. Cai has participated in research programs related to acupuncture and Chinese medicine. He has collaborated with researchers in the United States including work associated with:
                                </p>
                                <ul className="mb-6 space-y-2">
                                    <li className="font-bold text-indigo-700 bg-indigo-50 px-4 py-2 rounded-lg inline-block w-full">George Washington University Medical Center</li>
                                    <li className="text-center font-medium text-slate-400">and</li>
                                    <li className="font-bold text-indigo-700 bg-indigo-50 px-4 py-2 rounded-lg inline-block w-full">The National Institutes of Health (NIH)</li>
                                </ul>

                                <div className="p-5 bg-slate-50 border-l-4 border-blue-500 rounded-r-xl">
                                    <p className="font-bold text-slate-800 mb-1">Dr. Cai also serves as:</p>
                                    <p className="font-bold text-blue-800">Adjunct Associate Professor</p>
                                    <p className="text-slate-600 text-sm">Department of Complementary & Alternative Medicine</p>
                                    <p className="text-slate-600 text-sm">John A. Burns School of Medicine</p>
                                    <p className="text-slate-600 text-sm">University of Hawaii</p>
                                </div>
                            </div>

                            {/* Section 4 — Media & Professional Recognition */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl"><Newspaper size={24} /></div>
                                    <h2 className="text-2xl font-bold text-slate-900">Media & Recognition</h2>
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Dr. Cai's work in acupuncture and Traditional Chinese Medicine has contributed to growing recognition of integrative medicine in the United States.
                                </p>
                                <p className="font-semibold text-slate-900 mb-2">His clinical approach focuses on:</p>
                                <ul className="space-y-2 text-slate-700 mb-6">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="text-indigo-400" size={16} /> natural pain relief</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="text-indigo-400" size={16} /> injury rehabilitation</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="text-indigo-400" size={16} /> whole-body healing</li>
                                </ul>
                                <p className="text-slate-700 leading-relaxed">
                                    Through education, research participation, and clinical practice, Dr. Cai continues to promote the role of acupuncture in modern healthcare.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-12">
                            {/* Section 3 — Clinical Experience */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl"><Stethoscope size={24} /></div>
                                    <h2 className="text-2xl font-bold text-slate-900">Clinical Experience</h2>
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    With more than three decades of experience, Dr. Cai has treated thousands of patients suffering from:
                                </p>
                                <ul className="grid grid-cols-2 gap-3 text-slate-700 mb-6 font-medium">
                                    <li>• chronic back pain</li>
                                    <li>• neck pain</li>
                                    <li>• sciatica</li>
                                    <li>• sports injuries</li>
                                    <li>• work injuries</li>
                                    <li>• auto accident injuries</li>
                                </ul>
                                <p className="text-lg text-emerald-800 bg-emerald-50 p-4 rounded-xl leading-relaxed italic border border-emerald-100">
                                    His approach integrates traditional Chinese medicine theory with modern clinical pain management.
                                </p>
                            </div>

                            {/* Section 5 — Professional Associations */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-amber-100 text-amber-600 rounded-xl"><Award size={24} /></div>
                                    <h2 className="text-2xl font-bold text-slate-900">Professional Associations</h2>
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Dr. Cai maintains active professional credentials and affiliations including:
                                </p>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex items-start gap-2"><ShieldCheck className="text-amber-500 mt-1 flex-shrink-0" size={18} /> <span>National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM)</span></li>
                                    <li className="flex items-start gap-2"><ShieldCheck className="text-amber-500 mt-1 flex-shrink-0" size={18} /> <span>Licensed Acupuncturist in the United States</span></li>
                                    <li className="flex items-start gap-2"><ShieldCheck className="text-amber-500 mt-1 flex-shrink-0" size={18} /> <span>Traditional Chinese Medicine clinical research programs</span></li>
                                    <li className="flex items-start gap-2"><ShieldCheck className="text-amber-500 mt-1 flex-shrink-0" size={18} /> <span>Integrative medicine education initiatives</span></li>
                                </ul>
                            </div>

                            {/* Section 6 — Patient Care Philosophy */}
                            <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-white/10 text-blue-300 rounded-lg"><HeartPulse size={24} /></div>
                                    <h2 className="text-2xl font-bold text-white">Patient Care Philosophy</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                                    Dr. Cai believes that effective medicine should focus on treating the root cause of disease, not just the symptoms.
                                </p>
                                <p className="text-slate-400 mb-6 italic">
                                    By restoring balance within the body, acupuncture and Traditional Chinese Medicine can support natural healing and long-term health.
                                </p>
                                <p className="text-blue-200 font-semibold mb-3">His mission is to help patients:</p>
                                <ul className="grid grid-cols-2 gap-2 text-slate-200">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="text-teal-400" size={16} /> reduce pain</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="text-teal-400" size={16} /> recover from injuries</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="text-teal-400" size={16} /> improve physical function</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="text-teal-400" size={16} /> return to a healthy life</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 7 — Meet Our Medical Team */}
            <section className="bg-white py-20 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Specialists</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Meet Our Team</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Our multidisciplinary team brings decades of combined experience in Eastern and Western medicine to provide comprehensive care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:shadow-lg transition duration-300">
                            <div className="h-28 w-28 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-blue-100 shadow-sm flex items-center justify-center">
                                <img src="/images/dr-choon-kia-yeo.png" alt="Dr. Choon Kia Yeo" className="object-cover h-full w-full" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 text-center mb-1">Dr. Choon Kia Yeo</h3>
                            <p className="text-sm font-semibold text-blue-600 text-center mb-4">M.D.</p>
                            <p className="text-sm text-slate-600 text-center leading-relaxed">
                                Choon Kia Yeo, MD, is a physician and surgeon, certified by the American Board of Surgery and the Royal College of Physicians and Surgeons of Canada. A member of the American Academy of Anti-Aging Medicine, he has practiced medicine in Hawai'i for over 50 years.
                            </p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:shadow-lg transition duration-300">
                            <div className="h-28 w-28 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-indigo-100 shadow-sm flex items-center justify-center">
                                <img src="/images/doctor-lisa.png" alt="Lisa Long" className="object-cover h-full w-full scale-110" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 text-center mb-1">Lisa Long</h3>
                            <p className="text-sm font-semibold text-indigo-600 text-center mb-4">O.M.D., L.M.T.</p>
                            <p className="text-sm text-slate-600 text-center leading-relaxed">
                                Lisa Long, O.M.D., L.M.T. is a licensed massage therapist with over 15 years of clinical experience in acupuncture and therapeutic massage. She graduated from Jin Hua College and specializes in pain relief, rehabilitation, and weight loss.
                            </p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:shadow-lg transition duration-300">
                            <div className="h-28 w-28 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-emerald-100 shadow-sm flex items-center justify-center">
                                <img src="/images/shu-kai-tsao.png" alt="Shu-Kai Tsao" className="object-cover h-full w-full scale-110" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 text-center mb-1">Shu-Kai Tsao</h3>
                            <p className="text-sm font-semibold text-emerald-600 text-center mb-4">Rehabilitation Specialist / O.M.D., L.Ac.</p>
                            <p className="text-sm text-slate-600 text-center leading-relaxed">
                                ShuKai grew up with Traditional Chinese Medicine in Taiwan. His ability to grasp Eastern and Western technicalities provides him with a unique recovery skill set. NCAA Certified.
                            </p>
                        </div>

                        {/* Team Member 4 */}
                        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:shadow-lg transition duration-300">
                            <div className="h-28 w-28 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-amber-100 shadow-sm flex items-center justify-center">
                                <img src="/images/staff-anne.png" alt="Anne Alenton" className="object-cover h-full w-full scale-110" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 text-center mb-1">Anne Alenton</h3>
                            <p className="text-sm font-semibold text-amber-600 text-center mb-4">O.T., Patient Care Manager</p>
                            <p className="text-sm text-slate-600 text-center leading-relaxed">
                                Anne has years of patient care and client relations experience, and is devoted to ensuring and overseeing the daily operations of the clinics, ensuring every patient receives the highest quality of care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8 — AcuTherapy Clinics */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="text-center max-w-4xl mx-auto px-4">
                    <Building2 className="mx-auto h-12 w-12 text-blue-600 mb-6" />
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        AcuTherapy Clinics
                    </h2>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Dr. Cai and our expert medical team lead AcuTherapy Clinics in Honolulu, where the focus is on:
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/acupuncture-honolulu" className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 font-bold text-slate-700 hover:text-blue-700 transition">
                            Acupuncture
                        </Link>
                        <Link to="/pain-management-honolulu" className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 font-bold text-slate-700 hover:text-blue-700 transition">
                            Pain Management
                        </Link>
                        <Link to="/auto-accident-injury-honolulu" className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 font-bold text-slate-700 hover:text-blue-700 transition">
                            Auto Accident Injury
                        </Link>
                        <Link to="/workers-comp-injury-honolulu" className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 font-bold text-slate-700 hover:text-blue-700 transition">
                            Workers' Comp Care
                        </Link>
                        <Link to="/veterans-pain-relief-honolulu" className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 font-bold text-slate-700 hover:text-blue-700 transition">
                            Veterans Pain Relief
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
