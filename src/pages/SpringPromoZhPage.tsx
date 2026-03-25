import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LandingPageShareBubble from '@/components/LandingPageShareBubble';

export default function SpringPromoZhPage() {
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
                body: JSON.stringify({ ...formData, reason: 'Chinese Spring Promo Claim' })
            });
            if (res.ok) setIsSuccess(true);
            else alert('发送请求失败，请直接致电我们。');
        } catch (err) {
            console.error(err);
            alert('服务器连接错误，请直接致电诊所。');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F0FDF4] py-20 px-4 relative overflow-hidden">
            <Helmet>
                <title>春季专享优惠活动 | 檀香山针灸诊所</title>
                <meta name="description" content="在檀香山 AcuTherapy 诊所领取您的春季中医针灸疼痛理疗专享优惠。" />
                <meta property="og:title" content="春季专享优惠活动 | 檀香山针灸诊所" />
                <meta property="og:description" content="在檀香山 AcuTherapy 诊所领取您的春季中医针灸疼痛理疗专享优惠。" />
                <meta property="og:image" content="https://acutherapy.com/images/spring-promo-og.png" />
                <meta property="og:url" content="https://acutherapy.com/zh/landing/spring-promo" />
            </Helmet>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2 space-y-6">
                    <div className="inline-block bg-teal-100 text-teal-800 font-bold px-4 py-2 rounded-full mb-4 shadow-sm border border-teal-200">
                        🌸 2026 春季焕新特别福利
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                        告别疼痛，迎接崭新的春天。
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        无痛步入新的一季。本月立享蔡大卫医生的免费初次咨询与诊断测试。探索为何数百名夏威夷华人都信赖我们的专业针灸疗法。
                    </p>
                    <ul className="space-y-4 text-slate-700 mt-8 text-lg font-medium">
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-teal-500 w-6 h-6" /> 深入的经络与根源痛症诊断</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-teal-500 w-6 h-6" /> 针对性的中医针灸理疗方案</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-teal-500 w-6 h-6" /> 车祸受伤者享 100% 零自付费用 (PIP)</li>
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
                            <h2 className="text-3xl font-bold text-white mb-4">预约请求已收到！</h2>
                            <p className="text-slate-600 mb-8">我们已收到您的申请。我们的诊所工作人员将会很快致电给您，以确认您具体的就诊时间，请留意接听。</p>
                            <Button onClick={() => window.location.href='/acupuncture-honolulu-chinese'} className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-lg">返回中文主页</Button>
                        </div>
                    ) : (
                        <form onSubmit={submitForm} className="space-y-5 relative z-10">
                            <h2 className="text-3xl font-extrabold text-white mb-2">领取您的专属福利</h2>
                            <p className="text-slate-500 mb-8 text-sm">只需填写以下简单表格即可锁定名额，我们支持全中文沟通。</p>
                            
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2 text-xs uppercase tracking-wider">您的姓名 Full Name</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none bg-white text-slate-900 border-none placeholder-slate-400 transition-all" placeholder="例：张三 / John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2 text-xs uppercase tracking-wider">电话号码 Phone</label>
                                <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none bg-white text-slate-900 border-none placeholder-slate-400 transition-all" placeholder="(808) 555-0192" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2 text-xs uppercase tracking-wider">电子邮箱 Email</label>
                                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none bg-white text-slate-900 border-none placeholder-slate-400 transition-all" placeholder="name@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                            </div>
                            <Button type="submit" disabled={isSubmitting} className="w-full h-14 mt-4 text-lg bg-emerald-600 hover:bg-emerald-700 transition-colors">
                                {isSubmitting ? '提交中...' : <span className="flex items-center gap-2">免费预约名额 <ArrowRight className="w-5 h-5" /></span>}
                            </Button>
                            <p className="text-xs text-center text-slate-400 mt-4 leading-relaxed">提交代表您理解我们的隐私政策。全程无需绑定信用卡。前台支持中文服务。</p>
                        </form>
                    )}
                </div>
            </div>
        
            {/* Floating Share Bubble */}
            <LandingPageShareBubble urlPath="/zh/landing/spring-promo" isChinese={true} />
        </div>
    );
}
