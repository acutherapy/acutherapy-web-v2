import os
import re

def append_to_h2_section(filepath, h2_text, html_to_add):
    if not os.path.exists(filepath): return
    with open(filepath, 'r') as f: content = f.read()
    if "Research suggests" in html_to_add and "Research suggests" in content: return
    if "most patients feel it" in html_to_add and "easier than expected" in content: return
    
    parts = content.split('</article>')
    if len(parts) < 2: return
    
    # Try inserting directly into the file using regex replacing first </p> after the h2
    pattern = re.compile(rf'(<h2[^>]*>.*?{h2_text}.*?</h2>[\s\S]*?</p>)', re.IGNORECASE)
    match = pattern.search(content)
    if match:
        new_content = content[:match.end()] + "\n" + html_to_add + content[match.end():]
        with open(filepath, 'w') as f: f.write(new_content)
        print(f"Success inserted into {h2_text} in {filepath}")
    else:
        print(f"Failed to find {h2_text} in {filepath}")

def insert_html_after(filepath, search_str, html_to_add):
    if not os.path.exists(filepath): return
    with open(filepath, 'r') as f: content = f.read()
    if "Research suggests" in html_to_add and "Research suggests" in content: return
    if search_str in content:
        content = content.replace(search_str, search_str + "\n" + html_to_add, 1)
        with open(filepath, 'w') as f: f.write(content)
        print(f"Success exact replace in {filepath}")

def replace_str(filepath, old, new):
    if not os.path.exists(filepath): return
    with open(filepath, 'r') as f: content = f.read()
    if old in content:
        content = content.replace(old, new)
        with open(filepath, 'w') as f: f.write(content)
        print(f"Replaced string in {filepath}")

pages = "src/pages"

# 2. Back Pain
p2 = os.path.join(pages, "BackPainAcupunctureHonoluluPage.tsx")
research_html = """<div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-xl mt-4 mb-6"><p className="text-sm font-medium text-blue-900"><strong>Research Citation:</strong> Research suggests acupuncture may help provide significant relief for chronic lower back pain, according to the National Center for Complementary and Integrative Health (NCCIH).</p></div>"""
append_to_h2_section(p2, "What Causes Severe Back Pain", research_html)
replace_str(p2, "Acupuncture for Back Pain in Honolulu", "Acupuncture for Back Pain Honolulu")
replace_str(p2, "Back Pain Acupuncture Honolulu | Low Back Relief", "acupuncture for back pain honolulu | lower back pain treatment hawaii")

# 3. Sciatica
p3 = os.path.join(pages, "SciaticaTreatmentHonoluluPage.tsx")
replace_str(p3, "Sciatica Treatment in Honolulu", "Acupuncture for Sciatica Honolulu")
research_sciatica = """<div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-xl mt-4 mb-6"><p className="text-sm font-medium text-blue-900">Research suggests acupuncture may help reduce severe nerve inflammation along the sciatic pathway.</p></div>"""
append_to_h2_section(p3, "What Exactly Causes Sciatica Nerv", research_sciatica)

# 4. Auto Accident
p4 = os.path.join(pages, "AutoAccidentInjuryTreatmentHonoluluPage.tsx")
auto_insurance = """
<div className="bg-amber-50 border border-amber-200 p-6 rounded-xl my-8">
  <h3 className="font-bold text-amber-900 mb-2 text-xl">Hawaii No-Fault PIP Insurance</h3>
  <p className="text-amber-800 font-medium">Auto accident treatments may be fully covered depending on your exact policy. We handle all the paperwork for you!</p>
</div>
"""
append_to_h2_section(p4, "The Hidden Danger of Whiplash", auto_insurance)
research_auto = """<p className="text-sm italic text-slate-500 mt-4">Research suggests acupuncture may help accelerate recovery and reduce reliance on pain medication after traumatic injuries.</p>"""
append_to_h2_section(p4, "Why Early Treatment", research_auto)

# 5. Insurance
p5 = os.path.join(pages, "IsAcupunctureCoveredByInsuranceHawaiiPage.tsx")
medicare = """<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8"><h3 className="font-bold text-slate-900 mb-2 text-xl">Medicare Coverage</h3><p className="text-slate-700">Medicare currently covers acupuncture only for chronic low back pain, with limits on the number of sessions per year.</p></div>"""
append_to_h2_section(p5, "Common Types of Insurance", medicare)
steps = """
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Our Easy 3-Step Process</h2>
<div className="grid sm:grid-cols-3 gap-6 mb-12">
  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm"><div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">1</div><h4 className="font-bold mb-2">Call</h4><p className="text-sm text-slate-600">Give us a call with your insurance card ready.</p></div>
  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm"><div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">2</div><h4 className="font-bold mb-2">Verify</h4><p className="text-sm text-slate-600">We verify your benefits for free.</p></div>
  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm"><div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">3</div><h4 className="font-bold mb-2">Visit</h4><p className="text-sm text-slate-600">Start your personalized recovery plan!</p></div>
</div>
"""
insert_html_after(p5, "to call and verify the specifics for you.</p>", steps)
replace_str(p5, "Is Acupuncture Covered By Insurance In Hawaii?", "Acupuncture Insurance Hawaii & Auto Accident Acupuncture Coverage")

# 6. What to Expect
p6 = os.path.join(pages, "WhatToExpectFirstAcupunctureVisitPage.tsx")
safe1 = """<p className="text-lg text-emerald-700 font-bold bg-emerald-50 p-4 rounded-xl mt-4">We exclusively use sterile, single-use, FDA-approved hair-thin needles.</p>"""
append_to_h2_section(p6, "What to Expect During Your Sess", safe1)
safe2 = """<p className="text-xl text-blue-800 font-semibold my-6 border-l-4 border-blue-500 pl-4">Don't be nervous: most patients feel it’s easier than expected!</p>"""
insert_html_after(p6, "Acupuncture is a safe, natural", safe2)
research_exp = """<p className="text-sm italic text-slate-500 mt-4">Research suggests acupuncture may help calm the central nervous system rapidly during treatment.</p>"""
append_to_h2_section(p6, "Immediately After Your Sess", research_exp)

# 7. How Fast
p7 = os.path.join(pages, "HowFastDoesAcupunctureWorkPage.tsx")
research_fast = """<div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-xl mt-4 mb-6"><p className="text-sm font-medium text-blue-900">Research suggests acupuncture may help initiate immediate neurochemical changes for some, though long-term structural repair takes consecutive sessions.</p></div>"""
append_to_h2_section(p7, "Is Healing Instant", research_fast)

# 8. Acu vs Chiro
p8 = os.path.join(pages, "AcupunctureVsChiropracticBackPainPage.tsx")
choice = """
<div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl my-10 shadow-xl">
  <h3 className="text-2xl font-bold mb-4">How to Choose the Right Path</h3>
  <p className="font-medium text-lg leading-relaxed">If your back pain involves deep muscle spasms, constant nerve irritation, or severe tension, acupuncture is often completely superior at neutralizing the tissue without harsh mechanical cracking.</p>
</div>
"""
append_to_h2_section(p8, "When to Choose Which", choice)
research_chiro = """<p className="text-sm italic text-slate-500 mt-4">Research suggests acupuncture may help relax the deep stabilizing muscles of the spine better than sudden adjustments.</p>"""
append_to_h2_section(p8, "How They Co", research_chiro)

# 9. Does it hurt (Acupuncture Safety)
p9 = os.path.join(pages, "AcupunctureSafetyPage.tsx")
replace_str(p9, "Is Acupuncture Safe", "Does Acupuncture Hurt? Is it Safe?")
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
append_to_h2_section(p9, "Pain vs. Safety", hurt_text)
research_safe = """<p className="text-sm italic text-slate-500 mt-4">Research suggests acupuncture may help decrease localized pain sensitivity and activate the brain's internal pain-relief pathways.</p>"""
append_to_h2_section(p9, "Infection Control", research_safe)

print("Pass done.")
