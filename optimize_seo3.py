import os

def insert_after_str(filepath, search_str, html):
    with open(filepath, 'r') as f: content = f.read()
    if html[:20] in content: return
    idx = content.find(search_str)
    if idx != -1:
        end_idx = idx + len(search_str)
        content = content[:end_idx] + "\n" + html + "\n" + content[end_idx:]
        with open(filepath, 'w') as f: f.write(content)
        print(f"Success replace in {filepath}")

safety_text = """
<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
  <h3 className="font-bold text-slate-900 mb-2 text-xl">The Reality: Hair-Thin Needles</h3>
  <p className="text-slate-700 mb-4">Acupuncture uses incredibly thin, solid "hair-thin needles" that gently part the tissue. Instead of pain, you will likely feel the sensation of <strong>De Qi (得气)</strong>.</p>
  <div className="bg-blue-50 p-4 rounded-lg mt-4 border-l-4 border-blue-500">
    <p className="font-bold text-blue-900 mb-1">What is "De Qi"?</p>
    <p className="text-sm text-blue-800">De Qi describes a deep, aching, or heavy sensation at the point. This is an excellent sign!</p>
  </div>
</div>
"""
insert_after_str("src/pages/AcupunctureSafetyPage.tsx", "Understanding Acupuncture Safety</h2>", safety_text)

choiceText = """
<div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl my-10 shadow-xl">
  <h3 className="text-2xl font-bold mb-4">How to Choose the Right Path</h3>
  <p className="font-medium text-lg leading-relaxed">If your back pain involves deep muscle spasms, constant nerve irritation, or severe tension, acupuncture is often completely superior at neutralizing the tissue without harsh mechanical cracking.</p>
</div>
"""
insert_after_str("src/pages/AcupunctureVsChiropracticBackPainPage.tsx", "Not Sure Which Option Is Right for You?</h2>", choiceText)

print("Done")
