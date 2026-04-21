import os

def insert_html(filepath, target_str, html_to_insert, after=True):
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} - NOT FOUND")
        return
    with open(filepath, 'r') as f:
        content = f.read()
    
    if "👉" in html_to_insert and html_to_insert in content:
        print(f"Already inserted in {filepath}")
        return
        
    if target_str in content:
        if after:
            content = content.replace(target_str, target_str + '\n' + html_to_insert, 1)
        else:
            content = content.replace(target_str, html_to_insert + '\n' + target_str, 1)
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Success: {filepath}")
    else:
        print(f"Failed to find target in {filepath}: {target_str[:40]}...")

def fmt(text, link, anchor, suffix=""):
    return f"""<div className="bg-blue-50/50 border border-blue-100 border-l-4 border-l-blue-500 p-4 rounded-xl text-slate-800 font-medium my-6 shadow-sm">
  <p className="flex items-center gap-2">
    <span className="text-xl">👉</span>
    <span>{text} <Link to="{link}" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4">{anchor}</Link>{suffix}</span>
  </p>
</div>"""

pages_dir = "src/pages"

# ====== 1. Back Pain ======
p1 = os.path.join(pages_dir, "BackPainAcupunctureHonoluluPage.tsx")
target1_1 = "blocks the flow of Qi and blood.\n            </p>"
html1_1 = fmt("If your pain involves nerve irritation, you may also want to read about", "/sciatica-treatment-honolulu", "sciatica treatment options", ".")
insert_html(p1, target1_1, html1_1)

target1_2 = "completely as the surrounding core muscles stop spasming.\"</p>\n              </div>"
target1_2_alt = "timeframe after your first exam.</p>\n              </div>"
html1_2 = fmt("Many patients also ask", "/how-fast-does-acupuncture-work", "how fast acupuncture works", " and what to expect over time.")
insert_html(p1, target1_2_alt, html1_2)

target1_3 = "individuals with a history of herniated discs or heavy lifting injuries.</li>\n</ul>"
html1_3 = fmt("You can also see a", "/case-auto-accident-neck-pain-honolulu", "real recovery case", " to understand how symptoms may improve.")
insert_html(p1, target1_3, html1_3) # wait, I will use a more generic target

# ====== 2. Sciatica ======
p2 = os.path.join(pages_dir, "SciaticaTreatmentHonoluluPage.tsx")
target2_1 = "down the leg.\n            </p>"
html2_1 = fmt("Sciatica often overlaps with", "/back-pain-acupuncture-honolulu", "lower back pain conditions", ".")
insert_html(p2, target2_1, html2_1)

target2_2 = "muscles stop spasming.\"\n              </p>\n            </div>"
html2_2 = fmt("Some patients begin to notice changes after a few sessions—learn more about", "/how-fast-does-acupuncture-work", "how quickly acupuncture may work", ".")
insert_html(p2, target2_2, html2_2)

target2_3 = "leading to persistent discomfort.</p>" # last paragraph before CTA
html2_3 = fmt("See how similar cases progressed in our", "/case-chronic-back-pain-honolulu", "chronic back pain case study", ".")
insert_html(p2, target2_3, html2_3)

# ====== 3. How Fast Does Acupuncture Work ======
p3 = os.path.join(pages_dir, "HowFastDoesAcupunctureWorkPage.tsx")
target3_1 = "Some patients notice a difference immediately, while others see slower, cumulative changes.</p>"
html3_1 = fmt("If you're dealing with conditions like", "/back-pain-acupuncture-honolulu", "back pain", " or <Link to=\"/sciatica-treatment-honolulu\" className=\"text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4\">sciatica</Link>, response time may vary.")
insert_html(p3, target3_1, html3_1)

target3_2 = "Long-Term (10+ Sessions)</h3>"
target3_2_regex = "months of deep-rooted blockages.</p>\n                  </div>"
html3_2 = fmt("You can see an example timeline in this", "/case-auto-accident-neck-pain-honolulu", "real case study", ".")
insert_html(p3, "months of deep-rooted blockages.</p>", html3_2)

target3_3 = "your body's readiness to heal.</p>"
html3_3 = fmt("Many patients also check", "/is-acupuncture-covered-by-insurance-hawaii", "insurance coverage options", " before starting care.")
insert_html(p3, target3_3, html3_3)

# ====== 4. Case Auto Accident Neck Pain ======
p4 = os.path.join(pages_dir, "CaseAutoAccidentNeckPainHonoluluPage.tsx")
target4_1 = "Difficulty sleeping due to discomfort</li>\n</ul>"
html4_1 = fmt("This type of condition is often related to", "/neck-pain-treatment-honolulu", "neck pain treatment", " after injury.")
insert_html(p4, target4_1, html4_1)

target4_2 = "No restriction in range of motion</li>\n</ul>"
html4_2 = fmt("Recovery timelines can vary—learn more about", "/how-fast-does-acupuncture-work", "how fast acupuncture works", ".")
insert_html(p4, target4_2, html4_2)

target4_3 = 'className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8"'
html4_3 = fmt("In many auto accident cases, treatment may be covered. Learn more about", "/is-acupuncture-covered-by-insurance-hawaii", "insurance and payment options", ".")
insert_html(p4, target4_3, html4_3, after=False)

# ====== 5. Case Chronic Back Pain ======
p5 = os.path.join(pages_dir, "CaseChronicBackPainHonoluluPage.tsx")
target5_1 = "Reduced flexibility and inability to exercise comfortably</li>\n</ul>"
html5_1 = fmt("Chronic conditions often relate to", "/back-pain-acupuncture-honolulu", "long-term back pain patterns", ".")
insert_html(p5, target5_1, html5_1)

target5_2 = "Sustained pain relief over time</li>\n</ul>"
html5_2 = fmt("Progress may take several visits—see", "/how-fast-does-acupuncture-work", "expected timelines", ".")
insert_html(p5, target5_2, html5_2)

target5_3 = 'className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8"'
html5_3 = fmt("Patients often ask about cost—see", "/is-acupuncture-covered-by-insurance-hawaii", "insurance coverage details", ".")
insert_html(p5, target5_3, html5_3, after=False)

# ====== 6. Insurance ======
p6 = os.path.join(pages_dir, "IsAcupunctureCoveredByInsuranceHawaiiPage.tsx")
target6_1 = "to call and verify the specifics for you.</p>"
html6_1 = fmt("Many patients come in for conditions like", "/back-pain-acupuncture-honolulu", "back pain", " or <Link to=\"/sciatica-treatment-honolulu\" className=\"text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4\">sciatica</Link>.")
insert_html(p6, target6_1, html6_1)

target6_2 = "your path to a pain-free life.</p>"
html6_2 = fmt("If you're new, you can read", "/what-to-expect-first-acupuncture-visit", "what to expect at your first visit", ".")
insert_html(p6, target6_2, html6_2)

# ====== 7. What to Expect ======
p7 = os.path.join(pages_dir, "WhatToExpectFirstAcupunctureVisitPage.tsx")
target7_1 = "Needles are safely discarded after a single use.</p>\n              </div>"
html7_1 = fmt("If you're concerned about discomfort, see", "/acupuncture-safety", "does acupuncture hurt", ".")
insert_html(p7, target7_1, html7_1)

target7_2 = "ensure long-term healing rather than just temporary relief.</p>"
html7_2 = fmt("Many patients also want to know", "/how-fast-does-acupuncture-work", "how quickly results may appear", ".")
insert_html(p7, target7_2, html7_2)

target7_3 = 'className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8"'
html7_3 = fmt("You can also review a", "/case-auto-accident-neck-pain-honolulu", "real patient case", ".")
insert_html(p7, target7_3, html7_3, after=False)

# ====== 8. Acu vs Chiro ======
p8 = os.path.join(pages_dir, "AcupunctureVsChiropracticBackPainPage.tsx")
target8_1 = "the best healing strategy.</p>"
html8_1 = fmt("If you're dealing with chronic issues, see", "/back-pain-acupuncture-honolulu", "back pain treatment options", ".")
insert_html(p8, target8_1, html8_1)

target8_2 = 'className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8"'
html8_2 = fmt("You can also review a", "/case-chronic-back-pain-honolulu", "real recovery case", ".")
insert_html(p8, target8_2, html8_2, after=False)

# ====== 9. Does Acu Hurt (Safety) ======
p9 = os.path.join(pages_dir, "AcupunctureSafetyPage.tsx")
target9_1 = "sterile, and comfortable healing experience.</p>"
html9_1 = fmt("If you're preparing for your first session, see", "/what-to-expect-first-acupuncture-visit", "what to expect", ".")
insert_html(p9, target9_1, html9_1)

# ====== 10. Chinese Page ======
p10 = os.path.join(pages_dir, "AcupunctureHonoluluChinesePage.tsx")
target10_1 = "<li>长期肌肉紧张</li>\n              </ul>"
html10_1 = f"""<div className="bg-blue-50/50 border border-blue-100 border-l-4 border-l-blue-500 p-4 rounded-xl text-slate-800 font-medium my-6 shadow-sm">
  <p className="flex items-center gap-2">
    <span className="text-xl">👉</span>
    <span>如果你有背痛或坐骨神经痛，可以参考：<Link to="/back-pain-acupuncture-honolulu" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4 text-sm font-bold">背痛治疗</Link> 或 <Link to="/sciatica-treatment-honolulu" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-4 text-sm font-bold">坐骨神经痛</Link></span>
  </p>
</div>"""
insert_html(p10, target10_1, html10_1)

print("Linking script execution completed.")
