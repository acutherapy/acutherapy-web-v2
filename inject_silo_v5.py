import os

def insert_before_cta(filepath, html):
    if not os.path.exists(filepath): return
    with open(filepath, 'r') as f:
        lines = f.read().split('\n')
    if html in "\n".join(lines): return
    
    # find </article>
    article_idx = -1
    for i, line in enumerate(lines):
        if '</article>' in line:
            article_idx = i
            break
            
    if article_idx == -1: return
    
    # backtrack to find the start of the CTA div
    insert_idx = article_idx
    for i in range(article_idx, 0, -1):
        if '<div className="mt-' in lines[i] and 'bg-blue' in lines[i]:
            insert_idx = i
            break
            
    lines.insert(insert_idx, html)
    with open(filepath, 'w') as f:
         f.write('\n'.join(lines))
    print(f"Success CTA: {filepath}")

def insert_after(filepath, keyword, html):
    if not os.path.exists(filepath): return
    with open(filepath, 'r') as f:
        lines = f.read().split('\n')
    if html in "\n".join(lines): return
    
    for i, line in enumerate(lines):
        if keyword.lower() in line.lower() and '<h2' in line:
            # find next empty space or end of paragraph
            j = i + 1
            while j < len(lines) and not ('<h2' in lines[j] or '</article' in lines[j]):
                if '</ul>' in lines[j] or '</div>' in lines[j] or '</p>' in lines[j]:
                    j += 1
                    break
                j += 1
            lines.insert(j, html)
            with open(filepath, 'w') as f:
                f.write('\n'.join(lines))
            print(f"Success After: {filepath} -> {keyword}")
            return
    print(f"Failed After: {filepath} -> {keyword}")

def fmt(text, link, anchor, suffix=""):
    return f"""<div className="bg-blue-50/50 border border-blue-100 border-l-4 border-l-blue-500 p-4 rounded-xl text-slate-800 font-medium my-6 shadow-sm">
  <p className="flex items-center gap-2">
    <span className="text-xl">👉</span>
    <span>{text} <Link to="{link}" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4 font-bold">{anchor}</Link>{suffix}</span>
  </p>
</div>"""

pages = "src/pages"

# How fast
p3 = os.path.join(pages, "HowFastDoesAcupunctureWorkPage.tsx")
insert_before_cta(p3, fmt("Many patients also check", "/is-acupuncture-covered-by-insurance-hawaii", "insurance coverage options", " before starting care."))

# Case Auto Accident
p4 = os.path.join(pages, "CaseAutoAccidentNeckPainHonoluluPage.tsx")
insert_before_cta(p4, fmt("In many auto accident cases, treatment may be covered. Learn more about", "/is-acupuncture-covered-by-insurance-hawaii", "insurance and payment options", "."))

# Case Chronic Back Pain
p5 = os.path.join(pages, "CaseChronicBackPainHonoluluPage.tsx")
insert_before_cta(p5, fmt("Patients often ask about cost—see", "/is-acupuncture-covered-by-insurance-hawaii", "insurance coverage details", "."))

# Insurance
p6 = os.path.join(pages, "IsAcupunctureCoveredByInsuranceHawaiiPage.tsx")
insert_before_cta(p6, fmt("If you're new, you can read", "/what-to-expect-first-acupuncture-visit", "what to expect at your first visit", "."))

# What to Expect
p7 = os.path.join(pages, "WhatToExpectFirstAcupunctureVisitPage.tsx")
insert_after(p7, "during your session", fmt("If you're concerned about discomfort, see", "/acupuncture-safety", "does acupuncture hurt", "."))
insert_after(p7, "after your session", fmt("Many patients also want to know", "/how-fast-does-acupuncture-work", "how quickly results may appear", "."))
insert_before_cta(p7, fmt("You can also review a", "/case-auto-accident-neck-pain-honolulu", "real patient case", "."))

# Acu vs Chiro
p8 = os.path.join(pages, "AcupunctureVsChiropracticBackPainPage.tsx")
insert_before_cta(p8, fmt("You can also review a", "/case-chronic-back-pain-honolulu", "real recovery case", "."))
