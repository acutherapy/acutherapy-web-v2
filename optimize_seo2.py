import os

def insert_after_string(filepath, search_str, html):
    if not os.path.exists(filepath): return
    with open(filepath, 'r') as f: content = f.read()
    if html[:20] in content: return
    if search_str in content:
        content = content.replace(search_str, search_str + "\n" + html, 1)
        with open(filepath, 'w') as f: f.write(content)
        print(f"Success exact replace in {filepath}")

def replace_string(filepath, old, new):
     if not os.path.exists(filepath): return
     with open(filepath, 'r') as f: content = f.read()
     if old in content:
        content = content.replace(old, new)
        with open(filepath, 'w') as f: f.write(content)
        print(f"Replaced string in {filepath}")

pages = "src/pages"

# Auto Accident
p4 = os.path.join(pages, "AutoAccidentInjuryTreatmentHonoluluPage.tsx")
auto_insurance = """
<div className="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
  <h3 className="font-bold text-amber-900 mb-2 text-xl">Hawaii No-Fault PIP Insurance</h3>
  <p className="text-amber-800 font-bold">Auto accident treatments may be fully covered depending on your exact policy. We handle all the paperwork for you!</p>
</div>
"""
insert_after_string(p4, 'Understanding Whiplash & Seatbelt Trauma</h2>', auto_insurance)
insert_after_string(p4, 'How Our Three Core Treatments Help</h2>', """<p className="text-sm italic text-slate-500 mb-4 font-semibold">Research suggests acupuncture may help accelerate recovery and reduce reliance on pain medication after traumatic injuries.</p>""")

# Insurance
p5 = os.path.join(pages, "IsAcupunctureCoveredByInsuranceHawaiiPage.tsx")
steps = """
<h2 className="text-[28px] font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Our Easy 3-Step Process</h2>
<div className="grid sm:grid-cols-3 gap-6 mb-12">
  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm"><div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">1</div><h4 className="font-bold mb-2">Call</h4><p className="text-sm text-slate-600">Give us a call with your insurance card ready.</p></div>
  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm"><div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">2</div><h4 className="font-bold mb-2">Verify</h4><p className="text-sm text-slate-600">We verify your benefits for free.</p></div>
  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm"><div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">3</div><h4 className="font-bold mb-2">Visit</h4><p className="text-sm text-slate-600">Start your personalized recovery plan!</p></div>
</div>
"""
insert_after_string(p5, 'Understanding Your Coverage Options</h2>', steps)
medicare = """<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8 mt-6"><h3 className="font-bold text-slate-900 mb-2 text-xl">Medicare Coverage</h3><p className="text-slate-700">Medicare currently covers acupuncture only for chronic low back pain, with limits on the number of sessions per year.</p></div>"""
insert_after_string(p5, 'Understanding Your Coverage Options</h2>', medicare)


# What to Expect
p6 = os.path.join(pages, "WhatToExpectFirstAcupunctureVisitPage.tsx")
safe1 = """<p className="text-lg text-emerald-700 font-bold bg-emerald-50 p-4 rounded-xl mb-4">We exclusively use sterile, single-use, FDA-approved hair-thin needles.</p>"""
insert_after_string(p6, 'Understanding the Journey</h2>', safe1)
safe2 = """<p className="text-xl text-blue-800 font-semibold my-6 border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-xl">Don't be nervous: most patients feel it’s easier than expected!</p>"""
insert_after_string(p6, 'Understanding the Journey</h2>', safe2)

# Acu vs Chiro
p8 = os.path.join(pages, "AcupunctureVsChiropracticBackPainPage.tsx")
choice = """
<div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl my-10 shadow-xl">
  <h3 className="text-2xl font-bold mb-4">How to Choose the Right Path</h3>
  <p className="font-medium text-lg leading-relaxed">If your back pain involves deep muscle spasms, constant nerve irritation, or severe tension, acupuncture is often completely superior at neutralizing the tissue without harsh mechanical cracking.</p>
</div>
"""
insert_after_string(p8, 'Not Sure Which Option Is Right for You?</h2>', choice)

# Safety
p9 = os.path.join(pages, "AcupunctureSafetyPage.tsx")
hurt_text = """
<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
  <h3 className="font-bold text-slate-900 mb-2 text-xl">The Reality: Hair-Thin Needles</h3>
  <p className="text-slate-700 mb-4">Many people fear needles because they associate them with thick medical injection needles. Acupuncture uses incredibly thin, solid "hair-thin needles" that gently part the tissue. Instead of pain, you will likely feel the sensation of <strong>De Qi (得气)</strong>.</p>
  <div className="bg-blue-50 p-4 rounded-lg mt-4 border-l-4 border-blue-500">
    <p className="font-bold text-blue-900 mb-1">What is "De Qi"?</p>
    <p className="text-sm text-blue-800">De Qi describes a deep, aching, or heavy sensation at the point. This is an excellent sign! It means the clinical mechanism has been activated and your nervous system is responding effectively.</p>
  </div>
</div>
"""
insert_after_string(p9, 'Understanding Acupuncture Safety</h2>', hurt_text)
replace_string(p9, 'Does Acupuncture HurtPage', 'Does Acupuncture Hurt')

# Chinese
p10 = os.path.join(pages, "AcupunctureHonoluluChinesePage.tsx")
replace_string(p10, "欢迎来到檀香山针灸", "檀香山针灸 (Acupuncture Honolulu) - 夏威夷中医指南")
replace_string(p10, "夏威夷领先的中医诊所", "夏威夷中医专家 - 结合现代康复与传统疗法")

