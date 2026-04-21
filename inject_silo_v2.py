import os
import re

def insert_html(filepath, html, search_regex, insert_before=True):
    if not os.path.exists(filepath):
        print(f"File missing: {filepath}")
        return
    with open(filepath, 'r') as f:
        content = f.read()
    if "👉" in html and html[:20] in content:
        print(f"Already injected: {filepath}")
        return
    
    match = re.search(search_regex, content)
    if match:
        if insert_before:
            new_content = content[:match.start()] + html + "\n" + content[match.start():]
        else:
            new_content = content[:match.end()] + "\n" + html + "\n" + content[match.end():]
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Success: {filepath}")
    else:
        print(f"Failed targeting {search_regex} in {filepath}")

def fmt(text, link, anchor, suffix=""):
    return f"""<div className="bg-blue-50/50 border border-blue-100 border-l-4 border-l-blue-500 p-4 rounded-xl text-slate-800 font-medium my-6 shadow-sm">
  <p className="flex items-center gap-2">
    <span className="text-xl">👉</span>
    <span>{text} <Link to="{link}" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4">{anchor}</Link>{suffix}</span>
  </p>
</div>"""

pages = "src/pages"
cta_regex = r'<div[^>]*>[\s\n]*<h2[^>]*>Ready to find relief\?</h2>'

# 1. Back Pain (only the 3rd insert remains)
p1 = os.path.join(pages, "BackPainAcupunctureHonoluluPage.tsx")
insert_html(p1, fmt("You can also see a", "/case-auto-accident-neck-pain-honolulu", "real recovery case", " to understand how symptoms may improve."), cta_regex)

# 3. How Fast Does Acupuncture Work
p3 = os.path.join(pages, "HowFastDoesAcupunctureWorkPage.tsx")
insert_html(p3, fmt("If you're dealing with conditions like", "/back-pain-acupuncture-honolulu", "back pain", " or <Link to=\"/sciatica-treatment-honolulu\" className=\"text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4\">sciatica</Link>, response time may vary."), r'</p>', insert_before=False)
insert_html(p3, fmt("You can see an example timeline in this", "/case-auto-accident-neck-pain-honolulu", "real case study", "."), r'<h2[^>]*>Our 3-Phase Recovery Timeline</h2>[\s\S]*?</ul>', insert_before=False)
insert_html(p3, fmt("Many patients also check", "/is-acupuncture-covered-by-insurance-hawaii", "insurance coverage options", " before starting care."), cta_regex)

# 4. Case Auto Accident Neck Pain
p4 = os.path.join(pages, "CaseAutoAccidentNeckPainHonoluluPage.tsx")
insert_html(p4, fmt("This type of condition is often related to", "/neck-pain-treatment-honolulu", "neck pain treatment", " after injury."), r'<h2[^>]*>Initial Condition</h2>[\s\S]*?</ul>', insert_before=False)
insert_html(p4, fmt("Recovery timelines can vary—learn more about", "/how-fast-does-acupuncture-work", "how fast acupuncture works", "."), r'<h2[^>]*>Recovery Timeline</h2>[\s\S]*?</ul>', insert_before=False)
insert_html(p4, fmt("In many auto accident cases, treatment may be covered. Learn more about", "/is-acupuncture-covered-by-insurance-hawaii", "insurance and payment options", "."), cta_regex)

# 5. Case Chronic Back Pain
p5 = os.path.join(pages, "CaseChronicBackPainHonoluluPage.tsx")
insert_html(p5, fmt("Chronic conditions often relate to", "/back-pain-acupuncture-honolulu", "long-term back pain patterns", "."), r'<h2[^>]*>Initial Condition</h2>[\s\S]*?</ul>', insert_before=False)
insert_html(p5, fmt("Progress may take several visits—see", "/how-fast-does-acupuncture-work", "expected timelines", "."), r'<h2[^>]*>Recovery Timeline</h2>[\s\S]*?</ul>', insert_before=False)
insert_html(p5, fmt("Patients often ask about cost—see", "/is-acupuncture-covered-by-insurance-hawaii", "insurance coverage details", "."), cta_regex)

# 6. Insurance
p6 = os.path.join(pages, "IsAcupunctureCoveredByInsuranceHawaiiPage.tsx")
insert_html(p6, fmt("Many patients come in for conditions like", "/back-pain-acupuncture-honolulu", "back pain", " or <Link to=\"/sciatica-treatment-honolulu\" className=\"text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4\">sciatica</Link>."), r'<h2[^>]*>Common Types of Insurance Accepted</h2>', insert_before=True)
insert_html(p6, fmt("If you're new, you can read", "/what-to-expect-first-acupuncture-visit", "what to expect at your first visit", "."), cta_regex)

# 7. What to Expect
p7 = os.path.join(pages, "WhatToExpectFirstAcupunctureVisitPage.tsx")
insert_html(p7, fmt("If you're concerned about discomfort, see", "/acupuncture-safety", "does acupuncture hurt", "."), r'<h2[^>]*>What to Expect During Your Session</h2>[\s\S]*?</p>', insert_before=False)
insert_html(p7, fmt("Many patients also want to know", "/how-fast-does-acupuncture-work", "how quickly results may appear", "."), r'<h2[^>]*>Immediately After Your Session</h2>[\s\S]*?</p>', insert_before=False)
insert_html(p7, fmt("You can also review a", "/case-auto-accident-neck-pain-honolulu", "real patient case", "."), cta_regex)

# 8. Acu vs Chiro
p8 = os.path.join(pages, "AcupunctureVsChiropracticBackPainPage.tsx")
insert_html(p8, fmt("If you're dealing with chronic issues, see", "/back-pain-acupuncture-honolulu", "back pain treatment options", "."), r'</p>', insert_before=False)
insert_html(p8, fmt("You can also review a", "/case-chronic-back-pain-honolulu", "real recovery case", "."), cta_regex)

# 9. Acupuncture Safety (Does it hurt)
p9 = os.path.join(pages, "AcupunctureSafetyPage.tsx")
insert_html(p9, fmt("If you're preparing for your first session, see", "/what-to-expect-first-acupuncture-visit", "what to expect", "."), cta_regex)

print("Pass 2 complete.")
