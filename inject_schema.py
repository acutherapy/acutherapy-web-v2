import os
import json

base_schema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "name": "Acutherapy Clinics",
  "image": "https://acutherapy.com/og-image.jpg",
  "url": "https://acutherapy.com",
  "telephone": "+1-808-528-7177",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Honolulu",
    "addressRegion": "HI",
    "addressCountry": "US"
  },
  "areaServed": [
    "Honolulu",
    "Waikiki",
    "Kakaako",
    "Oahu",
    "Hawaii"
  ],
  "priceRange": "$$",
  "medicalSpecialty": [
    "Acupuncture",
    "PainManagement"
  ],
  "founder": {
    "@type": "Person",
    "name": "Dr. David Cai"
  },
  "description": "Acutherapy Clinics in Honolulu provides acupuncture, medical massage, and supportive care for pain relief, injury recovery, and functional improvement.",
  "sameAs": []
}

schemas = {
    "src/pages/BackPainAcupunctureHonoluluPage.tsx": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": "Does acupuncture help back pain?", "acceptedAnswer": {"@type": "Answer", "text": "Acupuncture may help reduce muscle tension, improve circulation, and support the body’s natural response to back pain."}},
            {"@type": "Question", "name": "How long does it take for acupuncture to work for back pain?", "acceptedAnswer": {"@type": "Answer", "text": "Some patients notice changes after the first few sessions, while others may need a longer course of care depending on the condition."}},
            {"@type": "Question", "name": "Can acupuncture help chronic back pain?", "acceptedAnswer": {"@type": "Answer", "text": "Acupuncture may help support pain relief and improve daily function in some patients with chronic back pain."}}
        ]
    },
    "src/pages/SciaticaTreatmentHonoluluPage.tsx": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": "Can acupuncture help sciatica?", "acceptedAnswer": {"@type": "Answer", "text": "Acupuncture may help reduce muscle tension and support the body’s response to nerve-related pain associated with sciatica."}},
            {"@type": "Question", "name": "How many acupuncture sessions are needed for sciatica?", "acceptedAnswer": {"@type": "Answer", "text": "Many patients begin to notice improvement within several sessions, but the number varies depending on symptom severity and duration."}},
            {"@type": "Question", "name": "Is acupuncture safe for sciatica?", "acceptedAnswer": {"@type": "Answer", "text": "When performed by a licensed professional using sterile, single-use needles, acupuncture is generally considered safe."}}
        ]
    },
    "src/pages/NeckPainTreatmentHonoluluPage.tsx": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": "Can acupuncture help neck pain?", "acceptedAnswer": {"@type": "Answer", "text": "Acupuncture may help reduce neck muscle tension, improve mobility, and support the body’s natural pain response."}},
            {"@type": "Question", "name": "Can acupuncture help tension headaches related to neck pain?", "acceptedAnswer": {"@type": "Answer", "text": "Acupuncture may help relieve muscle tightness and support the body’s response to headache-related discomfort."}},
            {"@type": "Question", "name": "How many acupuncture sessions are needed for neck pain?", "acceptedAnswer": {"@type": "Answer", "text": "Some patients notice changes within a few visits, while others may benefit from a longer course of treatment."}}
        ]
    },
    "src/pages/IsAcupunctureCoveredByInsuranceHawaiiPage.tsx": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": "Is acupuncture covered by insurance in Hawaii?", "acceptedAnswer": {"@type": "Answer", "text": "Coverage may vary depending on the plan, the reason for treatment, and specific policy details."}},
            {"@type": "Question", "name": "Is acupuncture covered after a car accident?", "acceptedAnswer": {"@type": "Answer", "text": "In some cases, acupuncture may be covered under no-fault auto insurance depending on the policy."}},
            {"@type": "Question", "name": "Does Medicare cover acupuncture?", "acceptedAnswer": {"@type": "Answer", "text": "Medicare may cover acupuncture for certain conditions such as chronic low back pain, subject to eligibility and benefit limits."}},
            {"@type": "Question", "name": "Do I need to verify my benefits before my appointment?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Verification of benefits is recommended before your first visit to help clarify coverage, visit limits, and out-of-pocket costs."}}
        ]
    },
    "src/pages/WhatToExpectFirstAcupunctureVisitPage.tsx": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": "What happens at a first acupuncture visit?", "acceptedAnswer": {"@type": "Answer", "text": "A first acupuncture visit typically includes a consultation, symptom review, assessment, and a treatment session if appropriate."}},
            {"@type": "Question", "name": "What should I wear to my first acupuncture appointment?", "acceptedAnswer": {"@type": "Answer", "text": "Loose, comfortable clothing is generally recommended so treatment areas can be accessed more easily."}},
            {"@type": "Question", "name": "Should I eat before acupuncture?", "acceptedAnswer": {"@type": "Answer", "text": "A light meal before treatment is usually recommended rather than arriving on an empty stomach."}},
            {"@type": "Question", "name": "How will I feel after my first acupuncture session?", "acceptedAnswer": {"@type": "Answer", "text": "Some patients feel relaxed or slightly tired, while others feel more energized. Responses vary."}}
        ]
    },
    "src/pages/AcupunctureSafetyPage.tsx": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": "Does acupuncture hurt?", "acceptedAnswer": {"@type": "Answer", "text": "Most patients describe acupuncture as a mild sensation rather than pain. Some feel a brief pinch, warmth, or tingling."}},
            {"@type": "Question", "name": "What does acupuncture feel like?", "acceptedAnswer": {"@type": "Answer", "text": "Patients may feel heaviness, warmth, or mild tingling during treatment. Many find the overall experience relaxing."}},
            {"@type": "Question", "name": "Can acupuncture be adjusted for sensitive patients?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Treatment can be adjusted based on the patient’s comfort level and sensitivity."}}
        ]
    },
    "src/pages/HowFastDoesAcupunctureWorkPage.tsx": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": "How fast does acupuncture work?", "acceptedAnswer": {"@type": "Answer", "text": "Some patients notice changes after the first session, while others experience more gradual improvement over multiple visits."}},
            {"@type": "Question", "name": "How many sessions before acupuncture starts working?", "acceptedAnswer": {"@type": "Answer", "text": "Many patients begin to notice changes within three to six sessions, depending on the condition and individual response."}},
            {"@type": "Question", "name": "Why does acupuncture take multiple sessions?", "acceptedAnswer": {"@type": "Answer", "text": "Acupuncture is often used in a series because gradual improvement may require repeated support for muscle relaxation, circulation, and recovery."}}
        ]
    },
    "src/pages/AcupunctureVsChiropracticBackPainPage.tsx": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": "Is acupuncture better than chiropractic for back pain?", "acceptedAnswer": {"@type": "Answer", "text": "The better option depends on the type of back pain. Acupuncture may help more with muscle tension and pain response, while chiropractic care may focus more on alignment and joint restriction."}},
            {"@type": "Question", "name": "Can acupuncture and chiropractic be used together?", "acceptedAnswer": {"@type": "Answer", "text": "Some patients use both approaches as part of a broader care plan, depending on the condition and provider guidance."}},
            {"@type": "Question", "name": "Which works faster for back pain?", "acceptedAnswer": {"@type": "Answer", "text": "Some patients notice an immediate change with chiropractic care, while acupuncture may provide more gradual relief over time."}}
        ]
    },
    "src/pages/CaseAutoAccidentNeckPainHonoluluPage.tsx": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": "How long can neck pain last after a car accident?", "acceptedAnswer": {"@type": "Answer", "text": "Recovery time varies. Some patients improve within weeks, while others may take longer depending on the severity of injury and treatment response."}},
            {"@type": "Question", "name": "Can acupuncture help neck pain after a car accident?", "acceptedAnswer": {"@type": "Answer", "text": "Acupuncture may help reduce muscle tension and support the body’s natural recovery process after an accident."}},
            {"@type": "Question", "name": "Is treatment after an auto accident covered by insurance?", "acceptedAnswer": {"@type": "Answer", "text": "In some cases, treatment may be covered through auto insurance depending on the policy and claim details."}}
        ]
    },
    "src/pages/CaseChronicBackPainHonoluluPage.tsx": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": "Can chronic back pain improve with acupuncture?", "acceptedAnswer": {"@type": "Answer", "text": "Acupuncture may help reduce pain, ease muscle tension, and improve function in some patients with chronic back pain."}},
            {"@type": "Question", "name": "How long does it take to improve chronic back pain?", "acceptedAnswer": {"@type": "Answer", "text": "Improvement varies by individual. Some patients notice changes over several visits, while others may require a longer treatment course."}},
            {"@type": "Question", "name": "Does chronic back pain always improve at the same speed?", "acceptedAnswer": {"@type": "Answer", "text": "No. Recovery may depend on the severity of symptoms, duration of the condition, and consistency of care."}}
        ]
    }
}

for filepath, faq_schema in schemas.items():
    if not os.path.exists(filepath):
        print(f"File missing: {filepath}")
        continue
        
    with open(filepath, 'r') as f:
        content = f.read()
        
    if "FAQPage" in content and "mainEntity" in content:
        print(f"Skipping {filepath} (Already has schema)")
        continue
        
    # The elegant way to insert is formatting it nicely into the <Helmet> tag.
    # We will combine the base MedicalBusiness schema with the FAQ schema.
    schema_str1 = json.dumps(base_schema, indent=2)
    schema_str2 = json.dumps(faq_schema, indent=2)
    
    script_str = f"""
        <script type="application/ld+json">
          {{`{schema_str1}`}}
        </script>
        <script type="application/ld+json">
          {{`{schema_str2}`}}
        </script>"""
    
    if "</Helmet>" in content:
        new_content = content.replace("</Helmet>", script_str + "\n      </Helmet>")
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Injected into {filepath}")
    else:
        print(f"Failed to find </Helmet> in {filepath}")

# Also ensuring Homepage has MedicalBusiness (Homepage already got FAQPage earlier)
hp_path = "src/pages/HomePage.tsx"
if os.path.exists(hp_path):
    with open(hp_path, 'r') as f:
        hp_content = f.read()
    if "MedicalBusiness" not in hp_content:
       script_str = f"""
        <script type="application/ld+json">
          {{`{json.dumps(base_schema, indent=2)}`}}
        </script>"""
       hp_content = hp_content.replace('</Helmet>', script_str + '\n      </Helmet>')
       with open(hp_path, 'w') as f:
           f.write(hp_content)
       print(f"Injected base schema into {hp_path}")

print("Done with JSON-LD Schema injection.")
