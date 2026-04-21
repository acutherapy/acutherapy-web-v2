import os
import re

def insert_html(filepath, html, search_regex, insert_before=True):
    if not os.path.exists(filepath): return
    with open(filepath, 'r') as f: content = f.read()
    if "👉" in html and html[:20] in content: return # skip already injected links
    if "schema.org" in html and "FAQPage" in content: return
    
    match = re.search(search_regex, content)
    if match:
        if insert_before:
            new_content = content[:match.start()] + html + "\n" + content[match.start():]
        else:
            new_content = content[:match.end()] + "\n" + html + "\n" + content[match.end():]
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Success: {filepath}")

def replace_html(filepath, old_str, new_str):
    if not os.path.exists(filepath): return
    with open(filepath, 'r') as f: content = f.read()
    if old_str in content:
        content = content.replace(old_str, new_str)
        with open(filepath, 'w') as f: f.write(content)
        print(f"Success replace: {filepath}")

# 1. HomePage
p1 = "src/pages/HomePage.tsx"
# First screen text:
replace_html(p1, 
    "Start Your Recovery. <br />\n                <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300\">\n                  Not Just Temporary Relief.\n                </span>",
    "Acupuncture for pain relief in Honolulu <br />\n                <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 text-3xl lg:text-5xl mt-2 block\">\n                  (back pain, sciatica, neck pain)\n                </span>"
)

faq_schema = """
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Does acupuncture hurt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most patients feel it’s easier than expected and describe it as a relaxing experience using hair-thin needles."
                }
              },
              {
                "@type": "Question",
                "name": "How fast does acupuncture work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Response time varies. Immediate relief is common for some, while chronic issues may take 3-6 sessions to see sustained improvement."
                }
              }
            ]
          }
          `}
        </script>
"""
insert_html(p1, faq_schema, r'</Helmet>', insert_before=True)

# Add Insurance/Cost module to homepage
insurance_module = """
      {/* CRO Module 4: Insurance & Cost */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Insurance & Cost Details</h2>
          <p className="text-lg text-slate-600 mb-8">Many of our patients are fully covered depending on their exact policy.</p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-xl">1. Auto (PIP)</h3>
              <p className="text-sm text-slate-600">Often covered at 100% with zero out-of-pocket for accident victims.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-xl">2. Workers' Comp</h3>
              <p className="text-sm text-slate-600">We handle authorization directly with your adjuster.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-xl">3. Major Medical</h3>
              <p className="text-sm text-slate-600">HMSA, Kaiser, UHA, Medicare UHC, and VA accepted.</p>
            </div>
          </div>
        </div>
      </section>
"""
insert_html(p1, insurance_module, r'\{/\* Meet The Doctor \*/\}', insert_before=True)

print("Pass 1 (Homepage) done.")
