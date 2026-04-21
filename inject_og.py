import os
import re

metadata_map = {
    "src/pages/HomePage.tsx": {
        "url": "https://acutherapy.com/",
        "title": "Honolulu Pain & Injury Acupuncture Clinic | Dr. David Cai | AcuTherapy",
        "description": "Top-rated Honolulu Pain & Injury Acupuncture Clinic. Dr. David Cai specializes in pain management, auto accident recovery, and traditional Chinese medicine with over 30 years of clinical experience."
    },
    "src/pages/BackPainAcupunctureHonoluluPage.tsx": {
        "url": "https://acutherapy.com/back-pain-acupuncture-honolulu",
        "title": "Acupuncture for Back Pain Honolulu | Lower Back Relief | AcuTherapy",
        "description": "Suffering from lower back pain in Honolulu? Discover how targeted medical acupuncture and traditional Chinese medicine can relieve your severe back pain today."
    },
    "src/pages/SciaticaTreatmentHonoluluPage.tsx": {
        "url": "https://acutherapy.com/sciatica-treatment-honolulu",
        "title": "Sciatica Treatment Honolulu | Fast Nerve Pain Relief | AcuTherapy",
        "description": "Suffering from shooting leg pain and sciatica in Honolulu? Get fast, non-surgical relief using targeted medical acupuncture to decompress the sciatic nerve."
    },
    "src/pages/CaseAutoAccidentNeckPainHonoluluPage.tsx": {
        "url": "https://acutherapy.com/case-auto-accident-neck-pain-honolulu",
        "title": "Auto Accident Neck Pain Recovery | Case Study | AcuTherapy Honolulu",
        "description": "Read our Honolulu case study on recovering from auto accident neck pain. See the 4-week timeline for reducing stiffness and achieving full pain-free mobility."
    },
    "src/pages/CaseChronicBackPainHonoluluPage.tsx": {
        "url": "https://acutherapy.com/case-chronic-back-pain-honolulu",
        "title": "Chronic Back Pain Recovery | Case Study | AcuTherapy Honolulu",
        "description": "Read our Honolulu case study on chronic back pain. See how we improved symptoms by 70% in 6 visits using acupuncture and medical massage."
    },
    "src/pages/IsAcupunctureCoveredByInsuranceHawaiiPage.tsx": {
        "url": "https://acutherapy.com/is-acupuncture-covered-by-insurance-hawaii",
        "title": "Acupuncture Insurance Hawaii | Auto PIP & Medicare | AcuTherapy",
        "description": "Is acupuncture covered by insurance in Hawaii? We accept HMSA, Kaiser, UHA, Medicare UHC, Auto PIP, Workers' Comp & VA. Learn about our verification process."
    },
    "src/pages/WhatToExpectFirstAcupunctureVisitPage.tsx": {
        "url": "https://acutherapy.com/what-to-expect-first-acupuncture-visit",
        "title": "What to Expect at Your First Acupuncture Visit | AcuTherapy Honolulu",
        "description": "Preparing for your first acupuncture visit in Honolulu? Learn about our comfortable, sterile process, what to wear, and how you will feel post-treatment."
    },
    "src/pages/AcupunctureSafetyPage.tsx": {
        "url": "https://acutherapy.com/acupuncture-safety",
        "title": "Does Acupuncture Hurt? | Safety & FDA Needles | Honolulu AcuTherapy",
        "description": "Does acupuncture hurt? Learn how we use sterile, hair-thin FDA-approved needles to ensure a completely safe, practically painless healing experience."
    },
    "src/pages/HowFastDoesAcupunctureWorkPage.tsx": {
        "url": "https://acutherapy.com/how-fast-does-acupuncture-work",
        "title": "How Fast Does Acupuncture Work? | Treatment Timeline | Honolulu",
        "description": "Wondering how fast acupuncture takes to work? See our exact clinical recovery timelines for immediate relief, mid-term healing, and long-term repair."
    },
    "src/pages/AcupunctureVsChiropracticBackPainPage.tsx": {
        "url": "https://acutherapy.com/acupuncture-vs-chiropractic-back-pain",
        "title": "Acupuncture vs Chiropractic for Back Pain | Which is Better? | Honolulu",
        "description": "Acupuncture vs Chiropractic care for back pain? Learn the difference and find out which treatment is best for your specific muscular or structural injury."
    },
    "src/pages/AcupunctureHonoluluChinesePage.tsx": {
        "url": "https://acutherapy.com/acupuncture-honolulu-chinese",
        "title": "檀香山针灸 (Acupuncture Honolulu) | 夏威夷正宗中医诊所",
        "description": "檀香山/夏威夷华人首选针灸中医诊所。Dr. David Cai 提供专业的背痛、坐骨神经痛及车祸理赔治疗。可预约当日看诊，接受大多数医疗保险。"
    }
}

for filepath, meta in metadata_map.items():
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}")
        continue
        
    with open(filepath, 'r') as f:
        content = f.read()

    # check if OpenGraph tags already exist
    if 'property="og:title"' in content:
        print(f"Skipping {filepath} (Already has OG tags)")
        continue
        
    og_tags = f"""
        <meta property="og:title" content="{meta['title']}" />
        <meta property="og:description" content="{meta['description']}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{meta['url']}" />
        <meta property="og:image" content="https://acutherapy.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
"""
    
    # Insert exactly before the first JSON-LD script or before </Helmet>
    idx = content.find('<script type="application/ld+json">')
    if idx == -1:
        idx = content.find('</Helmet>')
        
    if idx != -1:
        new_content = content[:idx] + og_tags + content[idx:]
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Injected OG metadata into {filepath}")
    else:
        print(f"Failed to find Helmet in {filepath}")

print("Done injecting OpenGraph metadata")
