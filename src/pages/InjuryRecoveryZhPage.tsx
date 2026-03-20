import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LandingPageShareBubble from '@/components/LandingPageShareBubble';

export default function InjuryRecoveryZhPage() {
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
                body: JSON.stringify({ ...formData, reason: 'Chinese Injury Recovery Auto/Sports Claim' })
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
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <Helmet>
                <title>车祸与工伤疼痛理疗专家 | 檀香山针灸诊所</title>
                <meta name="description" content="檀香山最高评价的中医针灸诊所，为车祸受伤及工作损伤患者提供绝佳康复方案。" />
            </Helmet>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                <div className="md:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-200 font-bold px-4 py-2 rounded-full mb-4 border border-blue-500/30">
                        <Activity className="w-4 h-4" /> 车祸保险，工伤保险，全额覆盖 0 压力
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                        车祸工伤，专业康复理疗机构
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        您是否正在遭受车祸后遗症（如颈肩痛、背痛）或运动损伤的折磨？蔡医生专精于运用中医针灸和深层组织推拿，能够大幅加速伤病愈合并彻底消除痛症。
                    </p>
                    <ul className="space-y-4 text-slate-700 mt-8 font-medium text-lg font-medium">
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-400 w-6 h-6" /> 车祸受伤理疗 100% 免费用（我们代办保险索赔）</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-400 w-6 h-6" /> 专治颈肩背痛、长期顽固腰椎背痛专家</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-400 w-6 h-6" /> 进阶电针疗法直接阻断深度炎症疼痛信号</li>
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
                            <h2 className="text-3xl font-bold text-white mb-4">申请已收到</h2>
                            <p className="text-slate-500 mb-8">我们的中文医疗助理将很快致电给您，协助您核实保险并立刻安排适合您的治疗时间。</p>
                            <Button onClick={() => window.location.href='/acupuncture-honolulu-chinese'} className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-lg text-white">返回中文主页</Button>
                        </div>
                    ) : (
                        <form onSubmit={submitForm} className="space-y-5">
                            <h2 className="text-3xl font-extrabold text-white mb-2">立即评估您的病情</h2>
                            <p className="text-slate-500 mb-8 text-sm">不要让暂时的伤病演变为慢性顽固痛症。请填写以下表格，让我们开始帮助您。</p>
                            
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2 text-xs uppercase tracking-wider">您的姓名 Full Name</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-900 text-white placeholder-slate-500 transition-all" placeholder="例：张三 / John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2 text-xs uppercase tracking-wider">电话号码 Phone Number</label>
                                <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-900 text-white placeholder-slate-500 transition-all" placeholder="(808) 555-0192" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2 text-xs uppercase tracking-wider">电子邮箱 Email Address</label>
                                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-900 text-white placeholder-slate-500 transition-all" placeholder="name@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                            </div>
                            <Button type="submit" disabled={isSubmitting} className="w-full h-14 mt-4 text-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white border-0">
                                {isSubmitting ? '发送请求中...' : <span className="flex items-center gap-2">立刻开启评估 <ArrowRight className="w-5 h-5" /></span>}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        
            {/* Floating Share Bubble */}
            <LandingPageShareBubble urlPath="/zh/landing/injury-recovery" isChinese={true} />
        </div>
    );
}
