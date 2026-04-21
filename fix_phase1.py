import os
import re

def rewrite_page(filepath, replacements):
    """
    replacements is a list of tuples: (regex_pattern, string_replacement, description)
    """
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} (File missing)")
        return
    with open(filepath, 'r') as f:
        content = f.read()

    changed = False
    for pattern, replacement, desc in replacements:
        new_content = re.sub(pattern, replacement, content, flags=re.IGNORECASE | re.DOTALL)
        if new_content != content:
            changed = True
            content = new_content
            print(f"[{filepath}] Replaced: {desc}")
        else:
            print(f"[{filepath}] NOT FOUND: {desc}")

    if changed:
        with open(filepath, 'w') as f:
            f.write(content)

pages = "src/pages"

# 1. HowFastDoesAcupunctureWorkPage.tsx
repl1 = [
    # Remove statistically proven
    (r'<p[^>]*>\s*When performed by a licensed professional.*?statistically proven to be highly[^<]*</p>', 
     '''<p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
Acupuncture results can vary. Some patients notice changes after the first session, while others experience gradual improvement over multiple visits depending on the condition.
</p>''', "Hero section paragraph"),
    
    (r'<h2[^>]*>Immediate vs\. Long-Term Results</h2>', 
     '''<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Timeline Can You Expect?</h2>
<ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-6">
  <li><strong>Immediate:</strong> some patients feel changes after the first visit</li>
  <li><strong>Short-term:</strong> 1–3 sessions</li>
  <li><strong>Mid-term:</strong> 3–6 sessions</li>
  <li><strong>Long-term:</strong> several weeks of consistent care</li>
</ul>
<p className="text-sm italic text-slate-500 mb-6">Research suggests acupuncture may help reduce pain and improve function in some patients when used as part of consistent care.</p>
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Immediate vs. Long-Term Results</h2>''', "Add Timeline and research"),
     
     (r'You can also see a <Link to="/case-auto-accident-neck-pain-honolulu"[^>]*>real recovery case</Link> to understand how symptoms may improve\.',
      'See how this timeline appears in a real case: <Link to="/case-auto-accident-neck-pain-honolulu" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4 font-bold">neck pain recovery case</Link>.', "Natural internal link CTA")
]

# 2. DoesCuppingHelpBackPainPage.tsx
repl2 = [
    (r'<p[^>]*>\s*When performed by a licensed professional.*?statistically proven to be highly[^<]*</p>',
     '''<p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Cupping therapy may help reduce muscle tension and improve circulation, which can support relief for some types of back pain.</p>''', "Cupping Hero"),
     
    (r'<p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">[^<]*</p>',
     '''<p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              Cupping therapy may help reduce muscle tension and improve circulation, which can support relief for some types of back pain.
            </p>''', "Cupping first paragraph"),
            
    (r'<h2[^>]*>What to Expect During Your Session</h2>',
    '''<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Cupping vs Acupuncture</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6">
Cupping focuses more on surface muscle tension, while acupuncture may target deeper pain patterns and nervous system response.
</p>
<p className="text-lg text-slate-700 leading-relaxed mb-8">
For deeper pain conditions, see <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 font-bold hover:underline">acupuncture for back pain</Link>.
</p>
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect During Your Session</h2>''', "Cupping Contrast Section")
]


# 3. BackPainAcupunctureHonoluluPage.tsx
repl3 = [
    (r'<p[^>]*>\s*Most patients see improvement in 3–5 visits\.\s*</p>\s*<p[^>]*>\s*Full recovery may take 4–10\+ sessions\.\s*</p>',
     '''<p className="text-lg text-slate-900 font-semibold mb-1">Some patients notice early changes within a few sessions,</p><p className="text-slate-600">while others may require a longer course of care depending on the condition.</p>''', "Remove 3-5 visits"),
     
     (r'<p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">.*?</p>',
     '''<p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
If you are enduring daily lower back pain, it can severely limit your life. Back pain may come from muscle tension, joint restriction, or nerve irritation. Treatment approach may vary based on the underlying cause. If your pain involves nerve symptoms, see <Link to="/sciatica-treatment-honolulu" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4">sciatica treatment</Link>. You can also review a <Link to="/case-chronic-back-pain-honolulu" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4">real chronic back pain case</Link>.
</p>''', "Back pain intro and natural links")
]

# 4. ChronicPainTreatmentHonoluluPage.tsx (mapped to /pain-management-honolulu)
repl4 = [
    (r'<p[^>]*>\s*When performed by a licensed professional.*?statistically proven to be highly[^<]*</p>',
     '''<p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Pain management focuses on reducing discomfort and improving daily function. Treatment may include acupuncture, soft tissue therapy, and supportive care based on the individual condition.</p>''', "Pain Management Hero"),
     
    (r'<p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">.*?</p>',
    '''<p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">Pain management focuses on reducing discomfort and improving daily function. Treatment may include acupuncture, soft tissue therapy, and supportive care based on the individual condition.</p>''', "Pain Management First Paragraph"),
    
    (r'<h2[^>]*>What Causes Safety\?.*?</h2>', 
    '''<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Common Conditions We Support</h2>
<ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-6">
<li>Chronic back pain</li>
<li>Neck and shoulder tension</li>
<li>Sciatica</li>
<li>Auto accident injuries</li>
</ul>
<p className="text-lg text-slate-700 mb-10">See specific conditions: <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 hover:underline font-medium">back pain</Link> | <Link to="/sciatica-treatment-honolulu" className="text-blue-600 hover:underline font-medium">sciatica</Link> | <Link to="/auto-accident-injury-treatment-honolulu" className="text-blue-600 hover:underline font-medium">auto accident care</Link></p>
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Treatment Capabilities</h2>''', "Pain conditions and natural links")
]


# 5. HerniatedDiscAcupunctureHonoluluPage.tsx
repl5 = [
    (r'<p[^>]*>\s*When performed by a licensed professional.*?statistically proven to be highly[^<]*</p>',
     '''<p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">Acupuncture may help support pain relief and improve function in some patients with herniated disc-related symptoms.</p>''', "Herniated Disc Hero"),
     
     (r'<p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">.*?</p>',
      '''<p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">Acupuncture may help support pain relief and improve function in some patients with herniated disc-related symptoms. Results can vary depending on severity and individual response.</p>
<p className="text-xl text-red-700 bg-red-50 border border-red-200 p-4 rounded-xl leading-relaxed font-medium mb-8">If symptoms do not improve after several sessions, treatment approach may need to be adjusted. See how recovery may progress: <Link to="/how-fast-does-acupuncture-work" className="text-blue-800 underline">treatment timeline</Link>.</p>''', "Herniated disc robust sentence")
]


rewrite_page(os.path.join(pages, "HowFastDoesAcupunctureWorkPage.tsx"), repl1)
rewrite_page(os.path.join(pages, "DoesCuppingHelpBackPainPage.tsx"), repl2)
rewrite_page(os.path.join(pages, "BackPainAcupunctureHonoluluPage.tsx"), repl3)
rewrite_page(os.path.join(pages, "ChronicPainTreatmentHonoluluPage.tsx"), repl4)
rewrite_page(os.path.join(pages, "HerniatedDiscAcupunctureHonoluluPage.tsx"), repl5)

print("Done phase 1 fixes.")
