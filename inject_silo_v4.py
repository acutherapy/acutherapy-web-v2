import os

def insert(filepath, keyword, html, place='before'):
    if not os.path.exists(filepath): return
    with open(filepath, 'r') as f: content = f.read()
    if html in content: return

    lines = content.split('\n')
    for i, line in enumerate(lines):
        if keyword.lower() in line.lower():
            if place == 'before':
                lines.insert(i, html)
            else:
                # If placing after a heading, it's better to place after the paragraph/list that follows.
                # Let's handle 'after' by finding the next empty line or next H2.
                j = i + 1
                while j < len(lines) and not ('<h2' in lines[j] or '</article' in lines[j]):
                    if '</ul>' in lines[j] or '</div>' in lines[j] or '</p>' in lines[j]:
                         j += 1
                         break
                    j += 1
                lines.insert(j, html)
            
            with open(filepath, 'w') as f:
                f.write('\n'.join(lines))
            print(f"Success: {filepath} -> {keyword}")
            return
    print(f"Failed: {filepath} -> {keyword}")

def fmt(text, link, anchor, suffix=""):
    return f"""<div className="bg-blue-50/50 border border-blue-100 border-l-4 border-l-blue-500 p-4 rounded-xl text-slate-800 font-medium my-6 shadow-sm">
  <p className="flex items-center gap-2">
    <span className="text-xl">👉</span>
    <span>{text} <Link to="{link}" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4 font-bold">{anchor}</Link>{suffix}</span>
  </p>
</div>"""

pages = "src/pages"
cta_keyword = "Ready to find relief"

# 3. How Fast
p3 = os.path.join(pages, "HowFastDoesAcupunctureWorkPage.tsx")
insert(p3, "Timeline", fmt("You can see an example timeline in this", "/case-auto-accident-neck-pain-honolulu", "real case study", "."), 'after')
insert(p3, cta_keyword, fmt("Many patients also check", "/is-acupuncture-covered-by-insurance-hawaii", "insurance coverage options", " before starting care."), 'before')

# 4. Case Auto Accident Neck Pain
p4 = os.path.join(pages, "CaseAutoAccidentNeckPainHonoluluPage.tsx")
insert(p4, "Initial Condition", fmt("This type of condition is often related to", "/neck-pain-treatment-honolulu", "neck pain treatment", " after injury."), 'after')
insert(p4, cta_keyword, fmt("In many auto accident cases, treatment may be covered. Learn more about", "/is-acupuncture-covered-by-insurance-hawaii", "insurance and payment options", "."), 'before')

# 5. Case Chronic Back Pain
p5 = os.path.join(pages, "CaseChronicBackPainHonoluluPage.tsx")
insert(p5, "Initial Condition", fmt("Chronic conditions often relate to", "/back-pain-acupuncture-honolulu", "long-term back pain patterns", "."), 'after')
insert(p5, "Recovery Timeline", fmt("Progress may take several visits—see", "/how-fast-does-acupuncture-work", "expected timelines", "."), 'after')
insert(p5, cta_keyword, fmt("Patients often ask about cost—see", "/is-acupuncture-covered-by-insurance-hawaii", "insurance coverage details", "."), 'before')

# 6. Insurance
p6 = os.path.join(pages, "IsAcupunctureCoveredByInsuranceHawaiiPage.tsx")
insert(p6, cta_keyword, fmt("If you're new, you can read", "/what-to-expect-first-acupuncture-visit", "what to expect at your first visit", "."), 'before')

# 7. What to Expect
p7 = os.path.join(pages, "WhatToExpectFirstAcupunctureVisitPage.tsx")
insert(p7, "What to Expect During Your Session", fmt("If you're concerned about discomfort, see", "/acupuncture-safety", "does acupuncture hurt", "."), 'after')
insert(p7, "Immediately After Your Session", fmt("Many patients also want to know", "/how-fast-does-acupuncture-work", "how quickly results may appear", "."), 'after')
insert(p7, cta_keyword, fmt("You can also review a", "/case-auto-accident-neck-pain-honolulu", "real patient case", "."), 'before')

# 8. Acu vs Chiro
p8 = os.path.join(pages, "AcupunctureVsChiropracticBackPainPage.tsx")
insert(p8, cta_keyword, fmt("You can also review a", "/case-chronic-back-pain-honolulu", "real recovery case", "."), 'before')

