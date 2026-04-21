import os
import re

# 1. HowFastDoesAcupunctureWorkPage.tsx
p1 = "src/pages/HowFastDoesAcupunctureWorkPage.tsx"
with open(p1, 'r') as f: c1 = f.read()

c1 = re.sub(
    r'<h2[^>]*>Immediate vs\. Long-Term Results</h2>',
    '''<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What Timeline Can You Expect?</h2>
<ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-6 bg-slate-50 p-6 rounded-xl border border-slate-100 font-medium">
  <li><span className="font-bold text-blue-700">Immediate:</span> some patients feel changes after the first visit</li>
  <li><span className="font-bold text-blue-700">Short-term:</span> 1–3 sessions</li>
  <li><span className="font-bold text-blue-700">Mid-term:</span> 3–6 sessions</li>
  <li><span className="font-bold text-blue-700">Long-term:</span> several weeks of consistent care</li>
</ul>
<p className="text-sm italic text-slate-500 mb-6">Research suggests acupuncture may help reduce pain and improve function in some patients when used as part of consistent care.</p>
<p className="text-lg text-slate-700 mt-6 mb-8 font-medium">See how this timeline appears in a real case: <Link to="/case-auto-accident-neck-pain-honolulu" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4 font-bold">neck pain recovery case</Link>.</p>
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Immediate vs. Long-Term Results</h2>''',
    c1
)
with open(p1, 'w') as f: f.write(c1)

# 2. DoesCuppingHelpBackPainPage.tsx
p2 = "src/pages/DoesCuppingHelpBackPainPage.tsx"
with open(p2, 'r') as f: c2 = f.read()
c2 = re.sub(
    r'<h2[^>]*>What to Expect During Your Session</h2>',
    '''<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Cupping vs Acupuncture</h2>
<p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
Cupping focuses more on surface muscle tension, while acupuncture may target deeper pain patterns and nervous system response.
</p>
<p className="text-lg text-slate-700 leading-relaxed mb-8">
For deeper pain conditions, see <Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 font-bold hover:underline">acupuncture for back pain</Link>.
</p>
<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">What to Expect During Your Session</h2>''',
    c2
)
with open(p2, 'w') as f: f.write(c2)

print("Done phase 2.")
