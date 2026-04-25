import { Helmet } from 'react-helmet-async';
import { Award, GraduationCap, Building2, HeartPulse, CheckCircle2, Newspaper, ShieldCheck, Stethoscope, Calendar, PhoneCall, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";

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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight"><h1>Dr. David Cai – Licensed Acupuncturist in Honolulu with 30+ Years Experience</h1></h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">We work closely with physicians, insurance providers, and case managers to deliver coordinated care for injury recovery and long-term pain relief.</p>
                </div>
            </section>

            {/* Main Content with Sidebar Layout */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-12">
                    
                    {/* Left Column: Main Article */}
                    <article className="md:col-span-8 flex flex-col space-y-12">
                        
                        {/* Section 1 — Professional Overview */}
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
                            <div className="flex flex-col lg:flex-row gap-10 items-start">
                                <div className="w-full lg:w-1/3 flex-shrink-0">
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
        
                                <div className="w-full lg:w-2/3">
                                    <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">Honolulu Acupuncture Specialist & Pain Management Expert</span>
                                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 font-sans tracking-tight">Dr. David Cai</h1>
        
                                    <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                                        Dr. David Cai is a Doctor of Chinese Medicine and licensed acupuncturist with more than 30 years of clinical experience in pain management and injury recovery.
                                    </p>
        
                                    <div className="mb-6">
                                        <p className="text-slate-600 mb-3 font-semibold">Based in Honolulu, Hawaii, Dr. Cai specializes in treating:</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-sm">
                                            <div className="flex items-center gap-2"><CheckCircle2 className="text-blue-500 flex-shrink-0" size={16} /> Chronic pain conditions</div>
                                            <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500 flex-shrink-0" size={16} /> Auto accident injuries</div>
                                            <div className="flex items-center gap-2"><CheckCircle2 className="text-amber-500 flex-shrink-0" size={16} /> Workers' comp injuries</div>
                                            <div className="flex items-center gap-2"><CheckCircle2 className="text-purple-500 flex-shrink-0" size={16} /> Veterans pain care</div>
                                        </div>
                                    </div>
        
                                    <p className="text-base text-slate-600 leading-relaxed">
                                        Through acupuncture and Traditional Chinese Medicine, Dr. Cai helps patients recover naturally and regain mobility without relying on medication or surgery whenever possible.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* grid layout for details */}
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="space-y-8 flex flex-col">
                                {/* Academic & Research Background */}
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex-1">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><GraduationCap size={24} /></div>
                                        <h2 className="text-xl font-bold text-slate-900">Academic & Research Background</h2>
                                    </div>
                                    <p className="text-slate-700 text-sm leading-relaxed mb-4">
                                        Dr. Cai received his medical training at <strong>Beijing University of Chinese Medicine</strong>, one of the most respected Traditional Chinese Medicine institutions in the world.
                                    </p>
                                    <p className="font-semibold text-slate-900 text-sm mb-2">His training included:</p>
                                    <ul className="grid grid-cols-2 gap-2 text-slate-700 text-sm mb-6">
                                        <li>• Acupuncture</li>
                                        <li>• Herbal medicine</li>
                                        <li>• Internal medicine</li>
                                        <li>• Surgical fundamentals</li>
                                        <li className="col-span-2">• Advanced clinical diagnostics</li>
                                    </ul>
                                    <p className="text-slate-700 text-sm leading-relaxed mb-4">
                                        In addition to his clinical work, Dr. Cai has participated in research programs related to acupuncture and Chinese medicine with the <strong>US National Institutes of Health (NIH) and George Washington University Medical Center</strong>.
                                    </p>
                                    <div className="p-4 bg-slate-50 border-l-4 border-blue-500 rounded-r-xl">
                                        <p className="font-bold text-slate-800 text-sm mb-1">Dr. Cai also serves as:</p>
                                        <p className="font-bold text-blue-800 text-sm">Adjunct Associate Professor</p>
                                        <p className="text-slate-600 text-xs mt-1">John A. Burns School of Medicine<br/>University of Hawaii</p>
                                    </div>
                                </div>

                                {/* Media & Recognition */}
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl"><Newspaper size={24} /></div>
                                        <h2 className="text-xl font-bold text-slate-900">Media & Recognition</h2>
                                    </div>
                                    <p className="text-slate-700 text-sm leading-relaxed mb-4">
                                        Dr. Cai's work in acupuncture and Traditional Chinese Medicine has contributed to growing recognition of integrative medicine in the United States. His clinical approach focuses on natural pain relief, injury rehabilitation, and whole-body healing.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="space-y-8 flex flex-col">
                                {/* Clinical Experience */}
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl"><Stethoscope size={24} /></div>
                                        <h2 className="text-xl font-bold text-slate-900">Clinical Experience</h2>
                                    </div>
                                    <p className="text-slate-700 text-sm leading-relaxed mb-4">
                                        With more than three decades of experience, Dr. Cai has treated thousands of patients suffering from:
                                    </p>
                                    <ul className="grid grid-cols-2 gap-2 text-slate-700 text-sm mb-6 font-medium">
                                        <li>• chronic back pain</li>
                                        <li>• neck pain</li>
                                        <li>• sciatica</li>
                                        <li>• sports injuries</li>
                                        <li>• work injuries</li>
                                        <li>• auto accident injuries</li>
                                    </ul>
                                </div>

                                {/* Professional Associations */}
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex-1">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-amber-100 text-amber-600 rounded-xl"><Award size={24} /></div>
                                        <h2 className="text-xl font-bold text-slate-900">Professional Associations</h2>
                                    </div>
                                    <ul className="space-y-3 text-slate-700 text-sm">
                                        <li className="flex items-start gap-2"><ShieldCheck className="text-amber-500 mt-0.5 flex-shrink-0" size={16} /> <span>NCCAOM Certified</span></li>
                                        <li className="flex items-start gap-2"><ShieldCheck className="text-amber-500 mt-0.5 flex-shrink-0" size={16} /> <span>Licensed Acupuncturist (US)</span></li>
                                        <li className="flex items-start gap-2"><ShieldCheck className="text-amber-500 mt-0.5 flex-shrink-0" size={16} /> <span>TCM Clinical Research Programs</span></li>
                                        <li className="flex items-start gap-2"><ShieldCheck className="text-amber-500 mt-0.5 flex-shrink-0" size={16} /> <span>Integrative Medicine Education</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* AcuTherapy Philosophy */}
                        <div className="bg-blue-900 text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <div className="p-2 bg-white/10 text-blue-300 rounded-lg"><HeartPulse size={24} /></div>
                                <h2 className="text-2xl font-bold text-white">AcuTherapy Philosophy</h2>
                            </div>
                            
                            <p className="text-slate-300 leading-relaxed mb-6 text-lg relative z-10">
                                Dr. Cai believes that effective medicine should focus on treating the root cause of disease, not just the symptoms.
                            </p>

                            <div className="bg-blue-950/60 rounded-2xl p-6 border border-blue-800/60 relative z-10">
                                <h3 className="text-blue-100 font-black text-xl mb-5 flex items-center gap-2 justify-start flex-wrap">
                                    <span className="text-white">Treat</span> 
                                    <span className="text-teal-400 text-sm">➔</span> 
                                    <span className="text-white">Teach</span> 
                                    <span className="text-teal-400 text-sm">➔</span> 
                                    <span className="text-white">Transform</span>
                                </h3>
                                
                                <ul className="space-y-4 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-teal-500/20 text-teal-300 p-1.5 rounded-lg shrink-0 mt-0.5"><CheckCircle2 size={16} /></div>
                                        <div>
                                            <strong className="text-white block mb-0.5">Treat the body</strong>
                                            <span className="text-sm">Restoring balance with precision acupuncture.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-teal-500/20 text-teal-300 p-1.5 rounded-lg shrink-0 mt-0.5"><CheckCircle2 size={16} /></div>
                                        <div>
                                            <strong className="text-white block mb-0.5">Teach the practice</strong>
                                            <span className="text-sm">Empowering patients with Traditional Chinese Medicine wisdom.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-teal-500/20 text-teal-300 p-1.5 rounded-lg shrink-0 mt-0.5"><CheckCircle2 size={16} /></div>
                                        <div>
                                            <strong className="text-white block mb-0.5">Transform long-term health</strong>
                                            <span className="text-sm">Supporting natural healing for a pain-free life.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Meet Our Team */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                            <div className="text-center mb-10">
                                <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Specialists</span>
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Meet Our Team</h2>
                                <p className="text-base text-slate-600 max-w-xl mx-auto">
                                    Our multidisciplinary team brings decades of combined experience in Eastern and Western medicine to provide comprehensive care.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Team Member 1 */}
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition">
                                    <div className="h-20 w-20 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-white shadow-sm">
                                        <img loading="lazy" src="/images/dr-choon-kia-yeo.png" alt="Dr. Choon Kia Yeo" className="object-cover h-full w-full" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-center mb-1">Dr. Choon Kia Yeo</h3>
                                    <p className="text-xs font-semibold text-blue-600 text-center mb-3">M.D.</p>
                                    <p className="text-xs text-slate-600 text-center">
                                        Certified by the American Board of Surgery, actively practicing medicine in Hawai'i for over 50 years.
                                    </p>
                                </div>

                                {/* Team Member 2 */}
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition">
                                    <div className="h-20 w-20 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-white shadow-sm">
                                        <img loading="lazy" src="/images/doctor-lisa.png" alt="Lisa Long" className="object-cover h-full w-full scale-110" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-center mb-1">Lisa Long</h3>
                                    <p className="text-xs font-semibold text-indigo-600 text-center mb-3">O.M.D., L.M.T.</p>
                                    <p className="text-xs text-slate-600 text-center">
                                        Over 15 years of clinical experience specializing in pain relief, rehabilitation, and therapeutic massage.
                                    </p>
                                </div>

                                {/* Team Member 3 */}
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition">
                                    <div className="h-20 w-20 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-white shadow-sm">
                                        <img loading="lazy" src="/images/shu-kai-tsao.png" alt="Shu-Kai Tsao" className="object-cover h-full w-full scale-110" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-center mb-1">Shu-Kai Tsao</h3>
                                    <p className="text-xs font-semibold text-emerald-600 text-center mb-3">NCAA Rehabilitation Specialist</p>
                                    <p className="text-xs text-slate-600 text-center">
                                        Possesses a unique recovery skill set blending Eastern and Western medical technicalities.
                                    </p>
                                </div>

                                {/* Team Member 4 */}
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition">
                                    <div className="h-20 w-20 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-white shadow-sm">
                                        <img loading="lazy" src="/images/staff-anne.png" alt="Anne Alenton" className="object-cover h-full w-full scale-110" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-center mb-1">Anne Alenton</h3>
                                    <p className="text-xs font-semibold text-amber-600 text-center mb-3">Patient Care Manager</p>
                                    <p className="text-xs text-slate-600 text-center">
                                        Dedicated to overseeing daily clinical operations, ensuring every patient receives the highest quality of care.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Links Block */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-8 rounded-3xl text-center">
                            <Building2 className="mx-auto h-10 w-10 text-blue-600 mb-4" />
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">
                                AcuTherapy Clinics Services
                            </h2>
                            <p className="text-sm text-slate-600 mb-6 max-w-lg mx-auto">
                                Dr. Cai and our team provide expert care in Honolulu and Aiea for a wide array of conditions:
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Link to="/acupuncture-honolulu" className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm border border-slate-200 hover:border-blue-400 font-bold text-slate-700 hover:text-blue-700 transition">
                                    Acupuncture
                                </Link>
                                <Link to="/pain-management-honolulu" className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm border border-slate-200 hover:border-blue-400 font-bold text-slate-700 hover:text-blue-700 transition">
                                    Pain Management
                                </Link>
                                <Link to="/auto-accident-injury-honolulu" className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm border border-slate-200 hover:border-blue-400 font-bold text-slate-700 hover:text-blue-700 transition">
                                    Auto Accident Injury
                                </Link>
                                <Link to="/veterans-pain-relief-honolulu" className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm border border-slate-200 hover:border-blue-400 font-bold text-slate-700 hover:text-blue-700 transition">
                                    Veterans VA Relief
                                </Link>
                            </div>
                        </div>

                    </article>

                    {/* Right Column: Standard Sidebar */}
                    <aside className="md:col-span-4 space-y-8">
                        <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
                            <div className="bg-blue-600 h-2 w-full"></div>
                            <CardContent className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
                                <p className="text-slate-600 mb-8 text-sm">Bridge the gap to a pain-free life today.</p>
                                <div className="flex flex-col gap-4">
                                    <Link to="/book-appointment">
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">
                                            <Calendar className="mr-2" /> Schedule Online
                                        </Button>
                                    </Link>
                                    <Button variant="outline" className="w-full h-14 text-lg border-2 border-slate-200" onClick={() => window.location.href = 'tel:+18085287177'}>
                                        <PhoneCall className="mr-2 h-5 w-5 text-blue-600" /> (808) 528-7177
                                    </Button>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100 text-left">
                                    <div className="flex items-start gap-3 mb-6">
                                        <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">Honolulu Clinic (Liliha)</p>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-1">
                                                1650 Liliha St, Suite 208<br />Honolulu, HI 96817
                                            </p>
                                            <a href="https://www.google.com/maps/search/?api=1&query=1650+Liliha+St,+Suite+208,+Honolulu,+HI+96817" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 font-bold hover:underline mt-1">
                                                Find us on Google Maps
                                            </a>
                                            <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 528-7177 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 212-9459</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-bold text-slate-900 mb-1">Aiea / Pearl City Clinic</p>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-1">
                                                98-211 Pali Momi St, Suite 604<br />Aiea, HI 96701
                                            </p>
                                            <a href="https://www.google.com/maps/search/?api=1&query=98-211+Pali+Momi+St,+Suite+604,+Aiea,+HI+96701" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 font-bold hover:underline mt-1">
                                                Find us on Google Maps
                                            </a>
                                            <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 452-1900 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 452-1521</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                                        <p className="font-bold text-slate-900 mb-1 text-sm">Hours of Operation</p>
                                        <p className="text-slate-600 text-sm">Mon-Fri: 9am - 1pm, Sat: 8am - 12pm</p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-100 text-left">
                                    <p className="font-bold text-slate-900 mb-3 text-sm">Also serving:</p>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        <Link to="/acupuncture-waikiki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">Waikiki</Link>
                                        <Link to="/acupuncture-kaimuki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">Kaimuki</Link>
                                        <Link to="/acupuncture-ala-moana" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">Ala Moana</Link>
                                        <Link to="/acupuncture-kahala" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">Kahala</Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </section>
        </div>
    );
}
