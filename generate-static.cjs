'use strict';

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://acutherapy.com';
const OG_IMAGE = 'https://acutherapy.com/acutherapy-clinic-honolulu.png';

const ALL_ROUTES = [
  '/',
  '/about',
  '/acupuncture-honolulu',
  '/back-pain-acupuncture-honolulu',
  '/sciatica-acupuncture-honolulu',
  '/neck-pain-treatment-honolulu',
  '/auto-accident-injury-honolulu',
  '/whiplash-treatment-honolulu',
  '/fire-cupping-therapy-honolulu',
  '/medical-massage-honolulu',
  '/does-acupuncture-help-sciatica',
  '/shoulder-pain-acupuncture-honolulu',
  '/knee-pain-acupuncture-honolulu',
  '/headache-migraine-acupuncture-honolulu',
  '/herniated-disc-acupuncture-honolulu',
  '/arthritis-acupuncture-honolulu',
  '/plantar-fasciitis-acupuncture-honolulu',
  '/frozen-shoulder-acupuncture-honolulu',
  '/tennis-elbow-acupuncture-honolulu',
  '/hip-pain-acupuncture-honolulu',
  '/sciatica-treatment-honolulu',
  '/pain-management-honolulu',
  '/sports-injury-acupuncture-honolulu',
  '/acupuncture-waikiki',
  '/acupuncture-kahala',
  '/acupuncture-manoa',
  '/acupuncture-hawaii-kai',
  '/acupuncture-kaimuki',
  '/acupuncture-ala-moana',
  '/acupuncture-kapahulu',
  '/acupuncture-moiliili',
  '/acupuncture-pearl-city',
  '/acupuncture-waipahu',
  '/acupuncture-kapolei',
  '/acupuncture-kakaako',
  '/how-acupuncture-treats-back-pain',
  '/how-many-acupuncture-sessions-for-sciatica',
  '/is-acupuncture-good-for-herniated-disc',
  '/can-acupuncture-help-neck-pain',
  '/acupuncture-vs-chiropractic-back-pain',
  '/privacy-policy',
  '/terms-of-service',
  '/sitemap',
  '/rotator-cuff-acupuncture-honolulu',
  '/does-cupping-help-back-pain',
  '/what-to-expect-first-acupuncture-visit',
  '/is-acupuncture-covered-by-insurance-hawaii',
  '/how-fast-does-acupuncture-work',
  '/patient-reviews',
  '/treatment-process',
  '/insurance-accepted',
  '/frequently-asked-questions',
  '/case-studies',
  '/new-patient-guide',
  '/clinic-policies',
  '/acupuncture-safety',
  '/about-traditional-chinese-medicine',
  '/contact-honolulu-acupuncture',
  '/acupuncture-honolulu-chinese',
  '/acupuncture-honolulu-japanese',
  '/acupuncture-honolulu-korean',
  '/workers-comp-injury-honolulu',
  '/veterans-pain-relief-honolulu',
  '/dr-david-cai-honolulu-acupuncturist',
  '/book-appointment',
  '/honolulu-clinic',
  '/aiea-pearl-city-clinic',
  '/en/contact-us-honolulu',
  '/honolulu-acupuncture',
  '/waikiki-acupuncture',
  '/aiea-acupuncture',
  '/kahala-acupuncture',
  '/en/services',
  '/en/services/acupuncture',
  '/en/services/medical-massage',
  '/cupping-gua-sha-honolulu',
  '/en/services/insurance-payment',
  '/back-neck-pain',
  '/stress-anxiety',
  '/auto-injury',
  '/workers-injury',
  '/veterans-care',
  '/hawaii-auto-accident-acupuncture-guide',
  '/oahu-workers-comp-acupuncture-approval',
  '/veterans-acupuncture-honolulu-aiea',
  '/fertility-acupuncture-honolulu',
  '/moxibustion-honolulu',
  '/acupuncture-makiki',
  '/brainreset',
  '/weight-loss',
  '/facial-acupuncture-honolulu',
  '/stress-relief-acupuncture-honolulu',
  '/sleep-acupuncture-honolulu',
  '/wellness-acupuncture-honolulu',
  '/lgzf',
  '/constitution-test',
  '/constitution-teaser',
];

const PAGE_DATA = {
  '/brainreset': {
    title: 'Brain Reset Through Your Ear™ | Needle-Free Ear Seed Therapy Honolulu HI | AcuTherapy',
    description: 'Needle-free ear seed therapy in Honolulu & Aiea, HI. Auricular acupressure for stress, anxiety, sleep & pain — no needles, no downtime. AcuTherapy Clinics · (808) 528-7177.',
    h1: 'Brain Reset Through Your Ear™ — Needle-Free Ear Seed Therapy',
  },
  '/weight-loss': {
    title: 'Brain Reset for Weight Loss™ | Ear Seed Therapy for Cravings & Appetite | Honolulu HI | AcuTherapy',
    description: 'Ear seed therapy for craving reduction & weight loss support in Honolulu, HI. Calm stress eating naturally — drug-free, no needles. Ozempic-compatible. AcuTherapy Clinics · (808) 528-7177.',
    h1: 'Brain Reset for Weight Loss™ — Ear Seed Therapy for Cravings',
  },
  '/stress-relief-acupuncture-honolulu': {
    title: 'Stress Relief Acupuncture Honolulu | Anxiety · Tension · Burnout | AcuTherapy Clinics',
    description: 'Acupuncture for stress relief in Honolulu, HI. Reduce anxiety, release tension, and restore calm with Traditional Chinese Medicine + CenterGy method. Dr. David Cai O.M.D. · (808) 528-7177.',
    h1: 'Stress Relief Acupuncture in Honolulu, HI',
  },
  '/sleep-acupuncture-honolulu': {
    title: 'Acupuncture for Sleep Honolulu | Insomnia · Restless Nights · Poor Sleep | AcuTherapy Clinics',
    description: 'Acupuncture for insomnia and sleep improvement in Honolulu, HI. Whether you can\'t fall asleep or wake exhausted, TCM + CenterGy method addresses the root. Dr. David Cai O.M.D. · (808) 528-7177.',
    h1: 'Acupuncture for Sleep in Honolulu, HI',
  },
  '/wellness-acupuncture-honolulu': {
    title: 'Wellness Acupuncture Honolulu | Preventive Care · Energy · Immunity | AcuTherapy Clinics',
    description: 'Preventive wellness acupuncture in Honolulu, HI. Energy optimization, immune support, and whole-body balance through Traditional Chinese Medicine + CenterGy method. Dr. David Cai O.M.D. · (808) 528-7177.',
    h1: 'Wellness Acupuncture in Honolulu, HI',
  },
  '/facial-acupuncture-honolulu': {
    title: 'Facial Acupuncture Honolulu | Anti-Aging · Skin Lifting · Collagen | AcuTherapy Clinics',
    description: 'Facial acupuncture in Honolulu, HI — traditional Chinese technique + AcuTherapy\'s signature method. Lift, brighten & renew skin naturally. Anti-aging, acne, radiance. Dr. David Cai O.M.D. · (808) 528-7177.',
    h1: 'Facial Acupuncture in Honolulu, HI',
  },
  '/constitution-test': {
    title: '中医体质与生命节律评估 | AcuTherapy Clinics',
    description: 'AcuTherapy Clinics 中医体质与生命节律评估测试。结合先天五行与《上古天真论》年龄节律提供个性化调理对策。',
    h1: '中医体质与生命节律评估',
  },
  '/constitution-teaser': {
    title: '探索您的先天五行与生命节律 | AcuTherapy Clinics',
    description: 'AcuTherapy Clinics 中医五行体质与生命节律评估营销推广页。扫码即可解锁个人身心密码。',
    h1: '探索您的先天五行与生命节律',
  },
  '/lgzf': {
    title: '灵龟八法开穴助手 | AcuTherapy Clinics Honolulu',
    description: 'AcuTherapy Clinics 灵龟八法开穴推算助手。根据当前时间、天干地支及奇经八脉自动推算针灸按时开穴的主穴与配穴。',
    h1: '灵龟八法按时开穴助手',
  },
  '/': {
    title: 'AcuTherapy Clinics – Acupuncture & TCM in Honolulu, Hawaii',
    description:
      'Licensed acupuncture & TCM clinics in Honolulu and Aiea. Expert treatment for back pain, sciatica, and injuries. Two Oahu locations. New patient specials available.',
    h1: "AcuTherapy Clinics – Honolulu’s Trusted Acupuncture Provider",
  },
  '/about': {
    title: "About AcuTherapy Clinics | Honolulu's Acupuncture & TCM Practice",
    description:
      "Founded in 2014 in Honolulu by Dr. David Cai, AcuTherapy Clinics offers acupuncture, Traditional Chinese Medicine, and the signature CenterGy method across two Oahu locations. Multilingual care, broad insurance accepted.",
    h1: 'About AcuTherapy Clinics',
  },
  '/acupuncture-honolulu': {
    title: 'Acupuncture in Honolulu, Hawaii | AcuTherapy Clinics',
    description:
      'Top-rated acupuncture clinic in Honolulu. Dr. David Cai and licensed acupuncturists treat back pain, sciatica, neck pain, and more. New patient specials. Book today.',
    h1: 'Acupuncture in Honolulu, Hawaii',
  },
  '/back-pain-acupuncture-honolulu': {
    title: 'Back Pain Acupuncture in Honolulu | AcuTherapy Clinics',
    description:
      'Relieve chronic and acute back pain with acupuncture in Honolulu. AcuTherapy Clinics specializes in evidence-based acupuncture for lower back pain, disc pain, and muscle tension.',
    h1: 'Back Pain Acupuncture – Honolulu, Hawaii',
  },
  '/sciatica-acupuncture-honolulu': {
    title: 'Sciatica Acupuncture in Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture for sciatica pain in Honolulu. Treats radiating leg pain, nerve compression, and sciatic nerve pain. Same-week appointments available.',
    h1: 'Sciatica Acupuncture – Honolulu, Hawaii',
  },
  '/neck-pain-treatment-honolulu': {
    title: 'Neck Pain Treatment – Acupuncture in Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture for neck pain and stiffness in Honolulu. Treat cervical strain, whiplash, and pinched nerves with Traditional Chinese Medicine.',
    h1: 'Neck Pain Acupuncture – Honolulu, Hawaii',
  },
  '/auto-accident-injury-honolulu': {
    title: 'Auto Accident Injury Treatment Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture and medical massage for auto accident injuries in Honolulu. Accepts MVA cases. Treat whiplash, back pain, and soft tissue injuries.',
    h1: 'Auto Accident Injury Acupuncture – Honolulu',
  },
  '/whiplash-treatment-honolulu': {
    title: 'Whiplash Treatment in Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture for whiplash injury in Honolulu. Treat neck stiffness, headaches, and soft tissue damage from auto accidents with Traditional Chinese Medicine.',
    h1: 'Whiplash Treatment – Honolulu, Hawaii',
  },
  '/medical-massage-honolulu': {
    title: 'Medical Massage in Honolulu, Hawaii | AcuTherapy Clinics',
    description:
      'Licensed medical massage therapy in Honolulu. Combines medical massage with acupuncture for deep tissue relief, sports recovery, and chronic pain management.',
    h1: 'Medical Massage – Honolulu, Hawaii',
  },
  '/fire-cupping-therapy-honolulu': {
    title: 'Fire Cupping & Gua Sha Therapy in Honolulu | AcuTherapy Clinics',
    description:
      'Fire cupping and gua sha therapy in Honolulu. Relieve deep muscle tension, improve circulation, and accelerate recovery. AcuTherapy Clinics, Liliha & Aiea.',
    h1: 'Fire Cupping & Gua Sha Therapy – Honolulu, Hawaii',
  },
  '/acupuncture-waikiki': {
    title: 'Acupuncture in Waikiki, Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture clinic near Waikiki, Honolulu. Treats pain, stress, and injuries for Waikiki residents and visitors. Walk-ins welcome.',
    h1: 'Acupuncture Near Waikiki – Honolulu',
  },
  '/acupuncture-kahala': {
    title: 'Acupuncture in Kahala, Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture clinic serving Kahala and Diamond Head neighborhoods, Honolulu. Expert TCM treatment for pain relief and wellness.',
    h1: 'Acupuncture in Kahala – Honolulu',
  },
  '/acupuncture-kapolei': {
    title: 'Acupuncture in Kapolei, Hawaii | AcuTherapy Clinics',
    description:
      'Licensed acupuncture clinic in Kapolei, Hawaii. Serving West Oahu with expert pain treatment and Traditional Chinese Medicine.',
    h1: 'Acupuncture in Kapolei, Hawaii',
  },
  '/acupuncture-manoa': {
    title: 'Acupuncture in Manoa, Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture clinic serving Manoa Valley, Honolulu. Expert TCM care for pain, stress, and injuries near University of Hawaii.',
    h1: 'Acupuncture in Manoa – Honolulu',
  },
  '/acupuncture-hawaii-kai': {
    title: 'Acupuncture in Hawaii Kai, Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture clinic serving Hawaii Kai and East Honolulu. Expert pain treatment and Traditional Chinese Medicine for East Oahu residents.',
    h1: 'Acupuncture in Hawaii Kai – Honolulu',
  },
  '/acupuncture-kaimuki': {
    title: 'Acupuncture in Kaimuki, Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture clinic in Kaimuki, Honolulu. Treating back pain, stress, and sports injuries with Traditional Chinese Medicine.',
    h1: 'Acupuncture in Kaimuki – Honolulu',
  },
  '/dr-david-cai-honolulu-acupuncturist': {
    title: 'Dr. David Cai – Licensed Acupuncturist in Honolulu, Hawaii',
    description:
      'Dr. David Cai is a licensed acupuncturist and TCM practitioner in Honolulu, Hawaii. Founder of AcuTherapy Clinics with expertise in pain management, sports injuries, and holistic healing.',
    h1: 'Dr. David Cai – Honolulu Acupuncturist',
  },
  '/patient-reviews': {
    title: 'Patient Reviews | AcuTherapy Clinics Honolulu',
    description:
      'Read patient reviews and testimonials for AcuTherapy Clinics in Honolulu. See why hundreds of patients trust Dr. David Cai for acupuncture and TCM care.',
    h1: 'Patient Reviews – AcuTherapy Clinics',
  },
  '/frequently-asked-questions': {
    title: 'Acupuncture FAQ – Honolulu | AcuTherapy Clinics',
    description:
      'Frequently asked questions about acupuncture in Honolulu. Does acupuncture hurt? How many sessions? Is acupuncture covered by insurance in Hawaii? Get answers.',
    h1: 'Acupuncture FAQ – Your Questions Answered',
  },
  '/workers-comp-injury-honolulu': {
    title: 'Workers Comp Acupuncture in Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture for workers compensation injuries in Honolulu. Accepts workers comp cases for back pain, repetitive strain, and workplace injuries.',
    h1: 'Workers Comp Injury Treatment – Honolulu',
  },
  '/veterans-pain-relief-honolulu': {
    title: 'Veterans Pain Relief – Acupuncture Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture for veterans in Honolulu. Pain management, PTSD relief, and holistic care for military veterans. VA community care accepted.',
    h1: 'Veterans Pain Relief – Acupuncture in Honolulu',
  },
  '/book-appointment': {
    title: 'Book Acupuncture Appointment | AcuTherapy Clinics Honolulu',
    description:
      'Book your acupuncture appointment at AcuTherapy Clinics in Honolulu. New patient specials. Multiple Oahu locations. Same-week appointments available.',
    h1: 'Book Your Acupuncture Appointment',
  },
  '/shoulder-pain-acupuncture-honolulu': {
    title: 'Shoulder Pain Acupuncture in Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture for shoulder pain, frozen shoulder, and rotator cuff injuries in Honolulu. Evidence-based TCM treatment for shoulder conditions.',
    h1: 'Shoulder Pain Acupuncture – Honolulu',
  },
  '/knee-pain-acupuncture-honolulu': {
    title: 'Knee Pain Acupuncture in Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture for knee pain, arthritis, and sports injuries in Honolulu. Treat knee conditions without surgery using Traditional Chinese Medicine.',
    h1: 'Knee Pain Acupuncture – Honolulu',
  },
  '/sports-injury-acupuncture-honolulu': {
    title: 'Sports Injury Acupuncture in Honolulu | AcuTherapy Clinics',
    description:
      'Acupuncture for sports injuries in Honolulu. AcuTherapy Clinics treats athletic injuries, muscle strains, and joint pain for faster recovery.',
    h1: 'Sports Injury Acupuncture – Honolulu',
  },
  '/pain-management-honolulu': {
    title: 'Pain Management in Honolulu | Acupuncture | AcuTherapy Clinics',
    description:
      'Comprehensive pain management with acupuncture and TCM in Honolulu. AcuTherapy Clinics treats chronic and acute pain without medication.',
    h1: 'Pain Management – Acupuncture in Honolulu',
  },
  '/hawaii-auto-accident-acupuncture-guide': {
    title: 'Hawaii Auto Accident PIP Acupuncture Guide | AcuTherapy Clinics',
    description: 'Suffering from whiplash or back pain after a car crash on Oahu? Get 100% covered care ($0 out-of-pocket) under Hawaii PIP No-Fault insurance. We handle all paperwork.',
    h1: 'Hawaii Auto Accident PIP Acupuncture Guide',
  },
  '/oahu-workers-comp-acupuncture-approval': {
    title: "Hawaii Workers' Comp Acupuncture Approval | AcuTherapy Clinics",
    description: "Hurt at work on Oahu? Learn how to get Hawaii Workers' Comp authorization for acupuncture and medical massage. 100% covered rehabilitation with $0 out-of-pocket.",
    h1: "Hurt at Work on Oahu? Get Workers' Comp Acupuncture Approval",
  },
  '/veterans-acupuncture-honolulu-aiea': {
    title: 'VA Community Care Acupuncture for Oahu Veterans | AcuTherapy Clinics',
    description: 'Oahu veterans can receive 100% covered acupuncture and pain management care. We are an authorized VA Community Care Network (CCN) provider. Learn how to get a referral.',
    h1: 'VA Community Care Acupuncture for Oahu Veterans',
  },
  '/sciatica-treatment-honolulu': {
    title: 'Sciatica Treatment in Honolulu | AcuTherapy Clinics',
    description: 'Sciatica acupuncture in Honolulu — relieve radiating leg pain, nerve compression, and disc-related sciatica with TCM at AcuTherapy Clinics. Two Oahu locations.',
    h1: 'Sciatica Treatment – Honolulu, Hawaii',
  },
  '/herniated-disc-acupuncture-honolulu': {
    title: 'Herniated Disc Acupuncture in Honolulu | AcuTherapy Clinics',
    description: 'Acupuncture for herniated disc in Honolulu. Reduce nerve pain, inflammation, and muscle spasm without surgery. AcuTherapy Clinics, Liliha & Aiea.',
    h1: 'Herniated Disc Acupuncture – Honolulu, Hawaii',
  },
  '/arthritis-acupuncture-honolulu': {
    title: 'Arthritis Acupuncture in Honolulu | AcuTherapy Clinics',
    description: 'Acupuncture for arthritis pain in Honolulu. Reduce joint inflammation, improve mobility, and manage osteoarthritis or rheumatoid arthritis with TCM.',
    h1: 'Arthritis Acupuncture – Honolulu, Hawaii',
  },
  '/does-acupuncture-help-sciatica': {
    title: 'Does Acupuncture Help Sciatica? | AcuTherapy Clinics Honolulu',
    description: 'Does acupuncture help sciatica? Yes — clinical evidence supports acupuncture for sciatic nerve pain relief. Learn how AcuTherapy Clinics treats sciatica on Oahu.',
    h1: 'Does Acupuncture Help Sciatica?',
  },
  '/honolulu-clinic': {
    title: 'AcuTherapy Clinics Honolulu – Liliha Location',
    description: 'AcuTherapy Clinics Honolulu — 1650 Liliha St, Suite 208. Licensed acupuncture, TCM, and medical massage. Call (808) 528-7177. Mon–Sat 9–1.',
    h1: 'AcuTherapy Clinics – Honolulu (Liliha)',
  },
  '/aiea-pearl-city-clinic': {
    title: 'AcuTherapy Clinics Aiea – Pearl City Location',
    description: 'AcuTherapy Clinics Aiea — 98-211 Pali Momi St, Suite 604. Licensed acupuncture and TCM near Pearl City. Call (808) 452-1900. Tue–Sat 9–5.',
    h1: 'AcuTherapy Clinics – Aiea (Pearl City)',
  },
  '/insurance-accepted': {
    title: 'Insurance Accepted | AcuTherapy Clinics Honolulu',
    description: "AcuTherapy Clinics accepts Workers' Comp, Auto Accident PIP, Veterans Care, UHA, HMAA, AARP, Humana, AshLink, and more. Many patients pay $0 out of pocket.",
    h1: 'Insurance Accepted – AcuTherapy Clinics',
  },
  '/cupping-gua-sha-honolulu': {
    title: 'Cupping & Gua Sha Therapy in Honolulu | AcuTherapy Clinics',
    description: 'Cupping and gua sha therapy in Honolulu for muscle tension, circulation, and pain relief. TCM-trained practitioners at AcuTherapy Clinics, Liliha & Aiea.',
    h1: 'Cupping & Gua Sha Therapy – Honolulu, Hawaii',
  },
  '/fertility-acupuncture-honolulu': {
    title: 'Fertility Acupuncture in Honolulu, Hawaii | AcuTherapy Clinics',
    description: 'Fertility acupuncture in Honolulu to support IVF, IUI, and natural conception. TCM-based hormonal balance and uterine blood flow at AcuTherapy Clinics, Oahu.',
    h1: 'Fertility Acupuncture – Honolulu, Hawaii',
  },
  '/moxibustion-honolulu': {
    title: 'Moxibustion Therapy in Honolulu, Hawaii | AcuTherapy Clinics',
    description: 'Moxibustion therapy in Honolulu — traditional TCM heat therapy for chronic pain, cold conditions, menstrual health, and fatigue. AcuTherapy Clinics, Oahu.',
    h1: 'Moxibustion Therapy – Honolulu, Hawaii',
  },
  '/acupuncture-makiki': {
    title: 'Acupuncture Near Makiki, Honolulu | AcuTherapy Clinics',
    description: 'Acupuncture clinic near Makiki and downtown Honolulu. Expert TCM for back pain, stress, auto injuries, and sports recovery. AcuTherapy Clinics, Liliha.',
    h1: 'Acupuncture Near Makiki – Honolulu',
  },
};

const LOWERCASE_WORDS = new Set(['in', 'of', 'for', 'the', 'and', 'a', 'an']);

function slugToReadable(route) {
  let slug = route.replace(/^\//, '');
  // Strip known prefixes
  slug = slug.replace(/^en\/services\//, '').replace(/^en\//, '');
  if (!slug) return 'Home';

  const words = slug.split('-');
  return words
    .map((word, index) => {
      const lower = word.toLowerCase();
      if (index !== 0 && index !== words.length - 1 && LOWERCASE_WORDS.has(lower)) {
        return lower;
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
}

function autoGenerateMeta(route) {
  const readable = slugToReadable(route);
  return {
    title: `${readable} | AcuTherapy Clinics Honolulu`,
    description: `Expert ${readable} at AcuTherapy Clinics in Honolulu, Hawaii. Licensed acupuncture and Traditional Chinese Medicine by Dr. David Cai. New patient specials available. Book today.`,
    h1: readable,
  };
}

function getPageMeta(route) {
  return PAGE_DATA[route] || autoGenerateMeta(route);
}

function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const PERSON_SCHEMAS = {
  davidCai: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#dr-david-cai`,
    name: 'Dr. David Cai',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'O.M.D., L.Ac., L.M.T.',
    jobTitle: 'Licensed Acupuncturist & Founder',
    description:
      "Founder of AcuTherapy Clinics with over 30 years of clinical experience. Graduate of Beijing University of Chinese Medicine (1991). Former research consultant on NIH-funded acupuncture trial at George Washington University Medical Center. Co-developer of the CenterGy (Synergies) precision diagnostic and energy-therapy method. Specializes in pain after injuries, stress, sleep, and women's health.",
    image: `${BASE_URL}/images/dr-david-cai-portrait.jpg`,
    url: `${BASE_URL}/dr-david-cai-honolulu-acupuncturist`,
    worksFor: { '@id': `${BASE_URL}/#liliha` },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Hawaii Licensed Massage Therapist', identifier: '7543' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Hawaii Licensed Acupuncturist', identifier: 'ACU-1125' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'NCCAOM Diplomate of Acupuncture (Dipl. Ac.)', identifier: '962-1001-522' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'NCCAOM Diplomate of Chinese Herbology (Dipl. C.H.)', identifier: '962-1001-522' },
    ],
    alumniOf: [
      { '@type': 'EducationalOrganization', name: 'Beijing University of Chinese Medicine', address: 'Beijing, China' },
    ],
    knowsLanguage: ['English', 'Mandarin Chinese'],
    memberOf: [
      { '@type': 'Organization', name: 'American Association of Acupuncture and Oriental Medicine' },
      { '@type': 'Organization', name: 'AcuPlan Hawaii' },
    ],
    knowsAbout: [
      'Acupuncture', 'Traditional Chinese Medicine', 'Pain Management', 'Sports Injuries',
      'Auto Accident Recovery', "Workers' Compensation Injuries", 'Veterans Care',
      'Tuina (Therapeutic Massage)', 'Chinese Herbal Medicine', 'CenterGy (Synergies)',
    ],
  },
  lisaLong: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#lisa-long`,
    name: 'Lisa Long',
    honorificSuffix: 'O.M.D., L.M.T.',
    jobTitle: 'Senior Licensed Massage Therapist',
    description:
      'Senior licensed massage therapist at AcuTherapy Clinics with 30+ years of clinical experience in acupuncture and therapeutic massage. Graduate of Jin Hua College of Beijing University of Chinese Medicine. Co-developer of CenterGy (Synergies). Specializes in pain relief, rehabilitation, holistic wellness, weight loss, and facial rejuvenation.',
    image: `${BASE_URL}/images/doctor-lisa.png`,
    worksFor: [
      { '@id': `${BASE_URL}/#liliha` },
      { '@id': `${BASE_URL}/#aiea` },
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Hawaii Licensed Massage Therapist', identifier: 'MAT-17832' },
    ],
    alumniOf: { '@type': 'EducationalOrganization', name: 'Jin Hua College of Beijing University of Chinese Medicine', address: 'Beijing, China' },
    knowsLanguage: ['English', 'Mandarin Chinese'],
    knowsAbout: [
      'Therapeutic Massage', 'Pain Management', 'Rehabilitation', 'Holistic Wellness',
      'Weight Loss', 'Facial Rejuvenation', 'Tuina', 'CenterGy (Synergies)',
    ],
  },
};

const ABOUT_NOSCRIPT_BODY = `<h1>About AcuTherapy Clinics</h1>
<h2>Our Mission</h2>
<p>To relieve pain, restore function, and support whole-person wellness through evidence-based acupuncture, Traditional Chinese Medicine, and our signature CenterGy method &mdash; making expert care accessible to patients across Oahu.</p>
<h2>Our Story</h2>
<p>AcuTherapy Clinics was founded in 2014 in Honolulu by Dr. David Cai, an O.M.D., L.Ac., and L.M.T. with more than 30 years of clinical experience. After training at Beijing University of Chinese Medicine and serving as a lecturer at its affiliated hospital, conducting NIH-funded acupuncture research at George Washington University Medical Center, and building practices in Beijing and the Washington DC metropolitan area, Dr. Cai relocated to Hawaii to bring this combined Eastern and Western expertise to Oahu patients.</p>
<p>Together with Dr. Lisa Long &mdash; a senior licensed massage therapist with over 30 years of training under renowned Chinese medicine physicians &mdash; Dr. Cai developed CenterGy (Synergies), a precision diagnostic and energy-therapy method now central to the clinic&rsquo;s approach. Today AcuTherapy Clinics operates two convenient Oahu locations &mdash; Honolulu (Liliha) and Aiea (Pearl City) &mdash; supported by a multilingual team (English and Mandarin Chinese) accepting a wide range of insurance plans, including Workers&rsquo; Compensation, Auto Accident PIP, Veterans Community Care, UHA, HMAA, AARP, Humana, AshLink, and more.</p>
<h2>What Sets Us Apart</h2>
<ul>
<li><strong>30+ years of clinical expertise</strong> at the founder level, with senior practitioners contributing additional decades of TCM, rehabilitation, and sports-medicine experience.</li>
<li><strong>Signature CenterGy (Synergies) method</strong> &mdash; a precision diagnostic and energy-therapy system that can be administered with or without needles, accessible to patients with needle anxiety.</li>
<li><strong>Research-grounded practice</strong> &mdash; founder Dr. David Cai served as a research consultant at George Washington University Medical Center on an NIH-sponsored acupuncture trial.</li>
<li><strong>Two Oahu locations</strong> &mdash; Honolulu (Liliha) and Aiea (Pearl City) &mdash; with consistent hours and direct phone lines.</li>
<li><strong>Broad insurance acceptance</strong> &mdash; Workers&rsquo; Compensation, Auto Accident PIP, Veterans Community Care, UHA, HMAA, Medicare Supplement, AARP, Humana, AshLink, and more. Many patients pay $0 out of pocket.</li>
</ul>
<h2>Our Locations</h2>
<ul>
<li><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</li>
<li><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</li>
</ul>
<h2>Hours</h2>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const DAVID_NOSCRIPT_BODY = `<h1>Dr. David Cai, O.M.D., L.Ac., L.M.T.</h1>
<p>Founder of AcuTherapy Clinics in Honolulu and Aiea, Hawaii. Licensed acupuncturist with over 30 years of clinical experience.</p>
<h2>About Dr. Cai</h2>
<p>Dr. David Cai graduated in 1991 from the Beijing University of Chinese Medicine with specialties in Chinese Medicine, Tuina (therapeutic massage), and herbal medicine. He later served as a distinguished lecturer and practitioner at the university and its affiliated hospital. Over more than three decades, Dr. Cai has built clinics across Beijing, the Washington DC metropolitan area, and Honolulu.</p>
<p>From 1999 to 2002, he served as a research consultant at George Washington University Medical Center on an NIH-funded clinical trial of acupuncture for carpal tunnel syndrome (sponsored by NIAMS). He is co-editor of <em>An Illustrated Chinese Materia Medica</em> (Oxford University Press, 2005).</p>
<h2>Credentials</h2>
<ul>
<li>Hawaii Licensed Acupuncturist (License #ACU-1125)</li>
<li>Hawaii Licensed Massage Therapist (License #7543)</li>
<li>NCCAOM Diplomate of Acupuncture (Dipl. Ac.) (#962-1001-522)</li>
<li>NCCAOM Diplomate of Chinese Herbology (Dipl. C.H.) (#962-1001-522)</li>
<li>O.M.D. &mdash; Doctor of Oriental Medicine, Beijing University of Chinese Medicine, 1991</li>
<li>Member, American Association of Acupuncture and Oriental Medicine (AAAOM)</li>
<li>Member, AcuPlan Hawaii</li>
</ul>
<h2>The CenterGy (Synergies) Method</h2>
<p>Together with Dr. Lisa Long, Dr. Cai co-developed <strong>CenterGy (Synergies)</strong> &mdash; the clinic&rsquo;s signature precision-diagnostic and energy-therapy approach. CenterGy combines precision diagnostics with energy techniques to define a comprehensive approach to healing the body, mind, and spirit.</p>
<p>As an injury specialist, Dr. Cai has developed special techniques to localize meridian acupuncture points precisely. A defining feature of CenterGy: it can be administered <strong>with or without needles</strong>, making it accessible to patients who are uncomfortable with traditional acupuncture needles.</p>
<h2>Conditions Treated</h2>
<ul>
<li>Back pain (acute and chronic)</li>
<li>Sciatica and herniated disc</li>
<li>Neck pain and whiplash</li>
<li>Sports injuries</li>
<li>Auto accident injuries</li>
<li>Workers&rsquo; compensation injuries</li>
<li>Veterans care</li>
<li>Headaches and migraines</li>
<li>Stress, anxiety, and sleep issues</li>
<li>Women&rsquo;s health concerns</li>
</ul>
<h2>Languages</h2>
<p>English, Mandarin Chinese</p>
<h2>Locations</h2>
<ul>
<li><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</li>
<li><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</li>
</ul>
<h2>Hours</h2>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, Medicare Supplement, AARP, Humana, AshLink, and more.</p>`;
const HOME_NOSCRIPT_BODY = `<h1>AcuTherapy Clinics &ndash; Honolulu&rsquo;s Trusted Acupuncture Provider</h1>
<p>AcuTherapy Clinics offers licensed acupuncture, Traditional Chinese Medicine, and medical massage at two convenient Oahu locations &mdash; Honolulu (Liliha) and Aiea (Pearl City). Founded in 2014 by Dr. David Cai, O.M.D., L.Ac., L.M.T., the clinic has helped thousands of Hawaii patients recover from pain, injury, and chronic conditions using evidence-based Eastern medicine techniques.</p>
<h2>Conditions We Treat</h2>
<ul>
<li>Back pain &mdash; acute and chronic, lower back, disc herniation</li>
<li>Sciatica and nerve pain</li>
<li>Neck pain and whiplash from auto accidents</li>
<li>Shoulder, knee, hip, and joint pain</li>
<li>Sports injuries and workers&rsquo; compensation injuries</li>
<li>Headaches and migraines</li>
<li>Stress, anxiety, and sleep disorders</li>
<li>Women&rsquo;s health and fertility support</li>
</ul>
<h2>Our Services</h2>
<ul>
<li><strong>Acupuncture</strong> &mdash; precision needle therapy targeting pain and systemic conditions</li>
<li><strong>CenterGy (Synergies)</strong> &mdash; our signature diagnostic and energy-therapy method, available with or without needles</li>
<li><strong>Medical Massage</strong> &mdash; therapeutic massage for musculoskeletal pain and recovery</li>
<li><strong>Fire Cupping</strong> &mdash; traditional negative-pressure therapy for deep muscle tension</li>
</ul>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, Medicare Supplement, AARP, Humana, AshLink, and more. Many patients pay $0 out of pocket under Workers&rsquo; Comp and Auto PIP coverage.</p>
<h2>Our Locations</h2>
<ul>
<li><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</li>
<li><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</li>
</ul>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years of clinical experience, Beijing University of Chinese Medicine graduate, NIH-funded research consultant at George Washington University Medical Center.</p>
<p>Lisa Long, O.M.D., L.M.T. &mdash; Senior massage therapist with 30+ years of experience, co-developer of CenterGy (Synergies), serving both Liliha and Aiea locations.</p>
<h2>Patient Reviews</h2>
<p>Rated 4.9 stars across 79 Google reviews at both locations. Patients consistently highlight pain relief outcomes, Dr. Cai&rsquo;s holistic approach, and the clinic&rsquo;s welcoming atmosphere.</p>`;

const CUPPING_NOSCRIPT_BODY = `<h1>Cupping &amp; Gua Sha Therapy in Honolulu</h1>
<p>AcuTherapy Clinics offers traditional fire cupping and gua sha therapy at our Honolulu (Liliha) and Aiea (Pearl City) locations. These time-honored Traditional Chinese Medicine techniques are used alongside acupuncture and medical massage to relieve deep muscle tension, improve circulation, and accelerate recovery from pain and injury.</p>
<h2>What Is Cupping Therapy?</h2>
<p>Cupping is a negative-pressure therapy in which glass cups are applied to the skin to create suction. This lifts connective tissue, draws stagnant blood to the surface, and floods the underlying muscles with fresh, oxygenated blood. Fire cupping — the traditional method using heated glass cups — is particularly effective for chronic muscle tightness, sports injuries, and pain related to auto accidents or workers&rsquo; compensation injuries.</p>
<h2>What Is Gua Sha?</h2>
<p>Gua sha involves firm stroking of the skin with a smooth-edged tool to break up fascial adhesions, release heat, and stimulate the body&rsquo;s natural healing response. It is commonly used for neck and shoulder tension, headaches, and upper respiratory conditions.</p>
<h2>Conditions We Treat</h2>
<ul>
<li>Chronic back and neck muscle tension</li>
<li>Sports injuries and muscle strains</li>
<li>Auto accident and workplace injury recovery</li>
<li>Headaches and migraines</li>
<li>Poor circulation and lymphatic stagnation</li>
<li>Upper respiratory congestion (cupping on upper back)</li>
</ul>
<h2>What to Expect</h2>
<p>Cupping sessions typically last 20&ndash;30 minutes as part of a combined treatment. Circular marks left by cupping indicate areas of blood stagnation clearing and typically fade within 3&ndash;7 days. Most patients report significant muscle relaxation and reduced pain immediately following treatment.</p>
<h2>Insurance &amp; Locations</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, Medicare Supplement, AARP, Humana, and AshLink accepted.</p>
<ul>
<li><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</li>
<li><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</li>
</ul>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const FERTILITY_NOSCRIPT_BODY = `<h1>Fertility Acupuncture in Honolulu, Hawaii</h1>
<p>AcuTherapy Clinics offers fertility acupuncture as part of a comprehensive women&rsquo;s health program at our two Oahu locations &mdash; Honolulu (Liliha) and Aiea (Pearl City). Drawing on Traditional Chinese Medicine principles and more than 30 years of clinical experience, Dr. David Cai and Lisa Long support patients who are trying to conceive naturally, preparing for IVF or IUI, or managing reproductive health conditions such as PCOS and endometriosis.</p>
<h2>How Acupuncture May Support Fertility</h2>
<p>In Traditional Chinese Medicine, fertility is closely linked to the smooth flow of Qi and blood through the reproductive organs. Acupuncture targets specific meridian points to regulate the hypothalamic-pituitary-ovarian axis, improve uterine blood flow, reduce cortisol and stress hormones, and support a balanced hormonal environment. Research suggests acupuncture may complement assisted reproductive technologies. Results vary by individual; we recommend coordinating with your reproductive endocrinologist.</p>
<h2>Conditions We May Help</h2>
<ul>
<li>Difficulty conceiving (unexplained infertility)</li>
<li>Irregular menstrual cycles and hormonal imbalance</li>
<li>Polycystic ovary syndrome (PCOS)</li>
<li>Endometriosis-related fertility challenges</li>
<li>IVF and IUI preparation and recovery support</li>
<li>Recurrent miscarriage support</li>
<li>Stress and anxiety related to fertility treatments</li>
</ul>
<h2>Our CenterGy Approach</h2>
<p>Our signature CenterGy (Synergies) method &mdash; co-developed by Dr. David Cai and Lisa Long &mdash; uses precision constitutional diagnosis to identify reproductive imbalances at their root. CenterGy can be delivered with or without acupuncture needles, making it accessible to patients with needle sensitivity, which is common during the emotionally demanding journey of fertility treatment.</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, graduate of Beijing University of Chinese Medicine (1991), 30+ years of clinical experience including women&rsquo;s health. Hawaii Licensed Acupuncturist ACU-1125, NCCAOM Dipl. Ac. &amp; Dipl. C.H. #962-1001-522.</p>
<p>Lisa Long, O.M.D., L.M.T. &mdash; Senior licensed massage therapist with 30+ years of experience, co-developer of CenterGy (Synergies), specializing in women&rsquo;s health, holistic wellness, and reproductive support. Hawaii LMT MAT-17832.</p>
<h2>Our Locations</h2>
<ul>
<li><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</li>
<li><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</li>
</ul>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const INSURANCE_NOSCRIPT_BODY = `<h1>Insurance Accepted &ndash; AcuTherapy Clinics Honolulu</h1>
<p>AcuTherapy Clinics accepts a wide range of insurance plans at our Honolulu (Liliha) and Aiea (Pearl City) locations. Many patients pay $0 out of pocket. Below is a complete list of accepted plans and how each one works for acupuncture and medical massage in Hawaii.</p>
<h2>Workers&rsquo; Compensation</h2>
<p>Hawaii Workers&rsquo; Compensation covers acupuncture and medical massage for workplace injuries including back pain, repetitive strain, and soft tissue injuries. We handle all direct billing and authorization paperwork. $0 out of pocket for qualifying patients.</p>
<h2>Auto Accident PIP (Hawaii No-Fault)</h2>
<p>Hawaii&rsquo;s mandatory Personal Injury Protection (PIP) insurance covers acupuncture and massage therapy at 100% for injuries sustained in auto accidents &mdash; whiplash, back pain, neck injuries, and more. No deductibles. We bill your auto insurer directly.</p>
<h2>Veterans Community Care (VA CCN)</h2>
<p>We are an authorized VA Community Care Network (CCN) provider. Eligible veterans can receive acupuncture and pain management care covered by the VA with a community care referral from their primary VA provider.</p>
<h2>UHA (University Health Alliance)</h2>
<p>UHA members with acupuncture benefits can use their coverage at both AcuTherapy locations. Contact our front desk to verify your plan&rsquo;s visit limits and copay amounts.</p>
<h2>HMAA (Hawaii Mainland Administrators)</h2>
<p>HMAA members may have acupuncture benefits through their employer-sponsored health plan. We bill HMAA directly &mdash; call us to verify your specific coverage before your first visit.</p>
<h2>Medicare Supplement, AARP &amp; Humana</h2>
<p>Medicare now covers acupuncture for chronic low back pain (up to 12 sessions per year, extendable to 20 with demonstrated improvement). AARP and Humana Medicare Supplement plans may provide additional coverage. We verify benefits at no cost to you.</p>
<h2>AshLink and More</h2>
<p>We also accept AshLink and additional plans. Call (808) 528-7177 (Honolulu) or (808) 452-1900 (Aiea) to verify your coverage before scheduling.</p>
<h2>Our Locations</h2>
<ul>
<li><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</li>
<li><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</li>
</ul>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const KAKAAKO_NOSCRIPT_BODY = `<h1>Acupuncture Near Kakaako &ndash; Honolulu, Hawaii</h1>
<p>AcuTherapy Clinics provides expert acupuncture, Traditional Chinese Medicine, and medical massage for patients living and working in the Kakaako and Ward Village neighborhoods of Honolulu. Our Liliha clinic is minutes from Kakaako with convenient parking &mdash; a stress-free alternative to navigating downtown congestion.</p>
<h2>Why Kakaako Residents Choose AcuTherapy</h2>
<p>Kakaako&rsquo;s active, professional community faces common physical demands: long hours at standing desks, intense gym training, repetitive strain from retail or hospitality work, and the cumulative stress of urban living. Dr. David Cai and Lisa Long bring 30+ years of combined clinical experience to address these patterns with precision TCM diagnosis and personalized treatment.</p>
<h2>Conditions We Treat</h2>
<ul>
<li>Tech neck and cervical strain from computer and desk work</li>
<li>Lower back pain and lumbar stiffness</li>
<li>Sports injuries: shoulder impingement, knee pain, tennis elbow</li>
<li>Stress, anxiety, and sleep disruption</li>
<li>Headaches and migraines</li>
<li>Post-workout muscle recovery</li>
<li>Workplace injuries (Workers&rsquo; Compensation accepted)</li>
<li>Auto accident injuries (Hawaii No-Fault PIP, 100% covered)</li>
</ul>
<h2>Our Services</h2>
<ul>
<li><strong>Acupuncture</strong> &mdash; precision needle therapy along meridians to relieve pain and restore function</li>
<li><strong>CenterGy (Synergies)</strong> &mdash; our proprietary diagnostic and energy-therapy method, available with or without needles</li>
<li><strong>Medical Massage (Tui-Na)</strong> &mdash; deep-tissue therapeutic massage for musculoskeletal conditions</li>
<li><strong>Fire Cupping &amp; Gua Sha</strong> &mdash; negative-pressure therapy to release deep muscle tension and improve circulation</li>
</ul>
<h2>Insurance &amp; Location</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP, Veterans Community Care, UHA, HMAA, Medicare Supplement, AARP, Humana, and AshLink accepted. Many patients pay $0 out of pocket.</p>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const MOXIBUSTION_NOSCRIPT_BODY = `<h1>Moxibustion Therapy in Honolulu, Hawaii</h1>
<p>AcuTherapy Clinics offers moxibustion therapy at our Honolulu (Liliha) and Aiea (Pearl City) locations. Moxibustion is a Traditional Chinese Medicine technique in which dried mugwort (moxa) is burned near or on acupuncture points to generate therapeutic heat, stimulate circulation, and strengthen the body&rsquo;s Qi. It is one of the foundational modalities of TCM and is often used alongside acupuncture for enhanced therapeutic effect.</p>
<h2>What Is Moxibustion?</h2>
<p>Moxibustion uses the sustained heat of burning compressed mugwort (Artemisia argyi) to warm meridian channels and resolve cold or stagnant conditions. Two primary methods are used: <strong>indirect moxibustion</strong> (moxa held above the skin or placed on a medium such as ginger or salt) and <strong>moxa on needle</strong> (warming the needle handle to direct heat precisely into the acupuncture point). The treatment produces a deeply penetrating warmth that patients often describe as profoundly relaxing.</p>
<h2>Conditions Commonly Treated</h2>
<ul>
<li>Chronic cold-type back pain and joint stiffness</li>
<li>Menstrual irregularities, dysmenorrhea, and cold uterus patterns</li>
<li>Fatigue and low energy (Yang deficiency)</li>
<li>Digestive weakness, bloating, and chronic loose stools</li>
<li>Immune deficiency and frequent illness (recurrent colds)</li>
<li>Arthritis aggravated by cold and damp weather</li>
<li>Breech presentation support in late pregnancy (under licensed practitioner supervision)</li>
</ul>
<h2>What to Expect</h2>
<p>Your moxibustion session begins with a TCM constitutional assessment by Dr. David Cai to identify cold or deficient patterns. Treatment typically lasts 20&ndash;40 minutes and is often combined with acupuncture or medical massage for enhanced effect. Please advise us of any respiratory sensitivities so we can use smokeless moxa alternatives when appropriate.</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years of TCM clinical experience, graduate of Beijing University of Chinese Medicine (1991). Hawaii Licensed Acupuncturist ACU-1125, NCCAOM Dipl. Ac. &amp; Dipl. C.H. #962-1001-522.</p>
<h2>Our Locations</h2>
<ul>
<li><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</li>
<li><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</li>
</ul>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const MAKIKI_NOSCRIPT_BODY = `<h1>Acupuncture Near Makiki &ndash; Honolulu, Hawaii</h1>
<p>AcuTherapy Clinics serves patients from the Makiki neighborhood and surrounding areas including Punchbowl, Nuuanu, and downtown Honolulu. Our Liliha clinic is just minutes from Makiki with convenient parking, offering expert acupuncture, Traditional Chinese Medicine, and medical massage for the full range of pain, injury, and wellness needs.</p>
<h2>Why Makiki Residents Choose AcuTherapy</h2>
<p>Makiki&rsquo;s mix of families, students, and working professionals deals with chronic pain, auto accident injuries, workplace stress, and the everyday physical toll of Oahu life. Dr. David Cai and Lisa Long have helped hundreds of patients from this community recover from pain and restore balance through personalized TCM care. With 30+ years of combined experience and multilingual staff (English and Mandarin Chinese), we make every patient feel at home.</p>
<h2>Conditions We Treat</h2>
<ul>
<li>Neck and back pain from commuting and desk work</li>
<li>Auto accident injuries (100% covered under Hawaii No-Fault PIP)</li>
<li>Sports and recreational injuries</li>
<li>Stress, anxiety, and insomnia</li>
<li>Headaches and migraines</li>
<li>Workplace injuries (Workers&rsquo; Compensation accepted)</li>
<li>Women&rsquo;s health and fertility support</li>
<li>General wellness and immune support</li>
</ul>
<h2>Our Services</h2>
<ul>
<li><strong>Acupuncture</strong> &mdash; precision needle therapy for pain and systemic conditions</li>
<li><strong>CenterGy (Synergies)</strong> &mdash; signature diagnostic and energy-therapy method, available without needles</li>
<li><strong>Medical Massage (Tui-Na)</strong> &mdash; therapeutic massage for musculoskeletal pain and recovery</li>
<li><strong>Fire Cupping &amp; Gua Sha</strong> &mdash; traditional suction and scraping therapy for deep tension</li>
<li><strong>Moxibustion</strong> &mdash; heat therapy for cold-pattern pain and fatigue</li>
</ul>
<h2>Insurance &amp; Location</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP, Veterans Community Care, UHA, HMAA, Medicare Supplement, AARP, Humana, and AshLink accepted. Many patients pay $0 out of pocket.</p>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const BACK_PAIN_NOSCRIPT_BODY = `<h1>Acupuncture for Back Pain in Honolulu, Hawaii</h1>
<p>Back pain is one of the most common reasons patients seek acupuncture at AcuTherapy Clinics in Honolulu. Whether you are dealing with an acute flare-up, a chronic condition, or a workplace or auto accident injury, our licensed practitioners provide targeted Traditional Chinese Medicine (TCM) care at our Liliha and Aiea locations.</p>
<h2>How Acupuncture Addresses Back Pain</h2>
<p>In TCM, back pain most commonly arises from Qi and blood stagnation in the lumbar meridians, Kidney deficiency (especially in chronic or age-related cases), or cold-damp invasion causing stiffness and heavy, aching pain. Acupuncture needles placed along the Bladder, Governing Vessel, and Kidney meridians work to move stagnant Qi, warm cold patterns, and support the body&rsquo;s own healing response.</p>
<p>Clinically, acupuncture may help reduce muscle spasm, decrease local inflammation, and improve circulation to injured or compressed tissue. When combined with Dr. Cai&rsquo;s CenterGy (Synergies) constitutional diagnostic approach, treatment is tailored to the specific root pattern driving each patient&rsquo;s pain.</p>
<h2>Conditions We Treat</h2>
<ul>
<li>Acute lower back pain (sudden onset, muscle strain)</li>
<li>Chronic low back pain (lasting 3+ months)</li>
<li>Lumbar disc herniation and nerve root compression</li>
<li>Piriformis syndrome and sciatica-related back pain</li>
<li>Postural strain from desk work or long commutes</li>
<li>Back pain from auto accidents (covered under Hawaii No-Fault PIP)</li>
<li>Workplace back injuries (Workers&rsquo; Compensation accepted)</li>
</ul>
<h2>Frequently Asked Questions</h2>
<p><strong>Does acupuncture help back pain?</strong> Research suggests acupuncture may help reduce pain intensity and improve function in patients with low back pain. Individual results vary based on the type and duration of the condition.</p>
<p><strong>How many sessions are needed?</strong> Many patients notice improvement within the first 4&ndash;6 sessions. Chronic conditions typically require a longer course of care. Dr. Cai will outline a treatment plan at your first visit.</p>
<p><strong>Is back pain treatment covered by insurance?</strong> Yes — Workers&rsquo; Compensation and Auto Accident PIP (Hawaii No-Fault) fully cover acupuncture for back injuries with $0 out of pocket. We also accept UHA, HMAA, Veterans Community Care, AARP, Humana, AshLink, and more.</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder. Graduate of Beijing University of Chinese Medicine (1991), 30+ years of clinical experience specializing in pain management and injury recovery. Hawaii Licensed Acupuncturist ACU-1125, NCCAOM Dipl. Ac. &amp; Dipl. C.H. #962-1001-522.</p>
<p>Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner, 30+ years experience, co-developer of CenterGy (Synergies). Hawaii LMT MAT-17832.</p>
<h2>Locations &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</p>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const SCIATICA_NOSCRIPT_BODY = `<h1>Sciatica Treatment in Honolulu | Acupuncture for Sciatic Nerve Pain</h1>
<p>Sciatica — the sharp, shooting pain that radiates from the lower back down through the buttock and leg — is one of the most debilitating pain conditions we treat at AcuTherapy Clinics. Our Honolulu and Aiea clinics offer targeted acupuncture and TCM care for patients dealing with sciatic nerve compression, piriformis syndrome, and lumbar disc-related nerve pain.</p>
<h2>TCM Approach to Sciatica</h2>
<p>In Traditional Chinese Medicine, sciatica is most commonly classified as a Bi (obstruction) syndrome affecting the Bladder and Gallbladder meridians that run through the lower back, hip, and leg. Cold, damp, and wind pathogens invade these meridians, causing the characteristic burning, shooting, or aching pain that worsens with cold or prolonged sitting.</p>
<p>Acupuncture points along the lumbar spine, sacrum, Gallbladder 30 (huantiao), and the posterior leg are selected to open obstruction, release piriformis tension, and reduce pressure on the sciatic nerve root. For disc-related sciatica (L4-L5, L5-S1 compression), treatment focuses on reducing local inflammation and muscle guarding around the compressed segment.</p>
<h2>Conditions We Address</h2>
<ul>
<li>Lumbar disc herniation with nerve root compression (L4&ndash;S1)</li>
<li>Piriformis syndrome causing sciatic nerve entrapment</li>
<li>Spinal stenosis with radiating leg pain</li>
<li>Sciatica from auto accidents or workplace injuries</li>
<li>Chronic sciatica that has not responded to rest or medication</li>
<li>Post-surgical sciatica and residual nerve pain</li>
</ul>
<h2>Frequently Asked Questions</h2>
<p><strong>Can acupuncture help sciatica?</strong> Clinical research suggests acupuncture may reduce sciatic pain and improve function. It is commonly used alongside physical therapy and may help reduce reliance on pain medications.</p>
<p><strong>How many sessions does sciatica require?</strong> Acute flare-ups may resolve in 4&ndash;8 sessions. Long-standing or disc-related sciatica typically requires a longer course. Dr. Cai will assess your case at the first visit and provide a realistic timeline.</p>
<p><strong>Is acupuncture for sciatica covered by insurance?</strong> Workers&rsquo; Compensation and Hawaii No-Fault Auto PIP cover sciatica treatment at $0 out of pocket when caused by a workplace or auto accident. We also accept UHA, HMAA, Veterans Community Care, AARP, Humana, and AshLink.</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, specialist in pain management and nerve-related conditions. Graduate of Beijing University of Chinese Medicine (1991). Hawaii Licensed Acupuncturist ACU-1125, NCCAOM Dipl. Ac. &amp; Dipl. C.H. #962-1001-522.</p>
<p>Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner, 30+ years experience, co-developer of CenterGy (Synergies). Hawaii LMT MAT-17832.</p>
<h2>Locations &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</p>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const NECK_PAIN_NOSCRIPT_BODY = `<h1>Neck Pain Acupuncture in Honolulu &amp; Aiea, Hawaii</h1>
<p>AcuTherapy Clinics provides acupuncture for neck pain at our Honolulu (Liliha) and Aiea locations. Neck pain is one of the most common complaints we treat &mdash; from stiff mornings and desk-related tension to cervical disc issues, whiplash, and chronic pain that hasn&rsquo;t responded to physical therapy. Our licensed acupuncturists address both the immediate pain and the underlying root cause through individualized treatment.</p>
<h2>How Acupuncture Addresses Neck Pain</h2>
<p>In Traditional Chinese Medicine, neck pain is often related to stagnation of Qi and Blood in the cervical meridians, combined with Wind, Cold, or Dampness invasion. Acupuncture points along the Gallbladder, Bladder, and Triple Warmer meridians are selected to release muscle tension, reduce inflammation, and restore circulation to compressed or irritated tissues. Specific points at the base of the skull, along the trapezius, and in the cervical paraspinal muscles provide direct local relief.</p>
<p>For chronic or structural neck problems &mdash; including disc herniations, cervical spondylosis, and nerve impingement &mdash; we combine acupuncture with Dr. David Cai&rsquo;s CenterGy (Synergies) method, which uses precision energy work to address deeper musculoskeletal patterns. This integrative approach reduces dependence on pain medication and supports long-term recovery without surgery or injections.</p>
<h2>Conditions We Treat</h2>
<ul>
<li>Acute and chronic neck pain</li>
<li>Cervical disc herniation and spondylosis</li>
<li>Whiplash and post-accident neck strain</li>
<li>Tech neck and postural tension from desk or phone use</li>
<li>Cervicogenic headaches and migraines</li>
<li>Shoulder and upper back pain related to cervical dysfunction</li>
<li>Neck injuries covered by Workers&rsquo; Compensation or Auto Accident PIP insurance</li>
</ul>
<h2>Frequently Asked Questions</h2>
<p><strong>Is acupuncture effective for neck pain?</strong> Clinical research supports acupuncture for both acute and chronic neck pain. A 2017 Cochrane review found acupuncture more effective than sham or no treatment for reducing neck pain intensity and improving function. Most patients report noticeable relief within 3&ndash;6 sessions.</p>
<p><strong>How many sessions will I need?</strong> A typical acute neck strain responds in 4&ndash;8 sessions. Chronic neck pain, disc issues, or post-surgical cases may require 10&ndash;16 sessions. We reassess after the first 4 visits and adjust the plan based on your progress.</p>
<p><strong>Does insurance cover acupuncture for neck pain?</strong> AcuTherapy Clinics accepts Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, Medicare Supplement, AARP, Humana, AshLink, and more. Please call our office to verify coverage before your first visit.</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder and primary practitioner with over 30 years of experience. Beijing University of Chinese Medicine, 1991. Hawaii L.Ac. ACU-1125, Hawaii LMT 7543, NCCAOM Dipl. Ac. 962-1001-522.</p>
<p>Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner, 30+ years experience, co-developer of CenterGy (Synergies). Hawaii LMT MAT-17832.</p>
<h2>Locations &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</p>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const WORKERS_COMP_NOSCRIPT_BODY = `<h1>Workers&rsquo; Compensation Acupuncture in Honolulu &amp; Aiea, Hawaii</h1>
<p>AcuTherapy Clinics accepts Workers&rsquo; Compensation insurance at both our Honolulu (Liliha) and Aiea locations. If you have been injured on the job, Hawaii&rsquo;s Workers&rsquo; Comp system covers acupuncture and medical massage — with $0 out of pocket for the patient. We handle all insurance paperwork and billing directly with your employer&rsquo;s carrier.</p>
<h2>What Hawaii Workers&rsquo; Comp Covers</h2>
<p>Under Hawaii Revised Statutes Chapter 386, Workers&rsquo; Compensation provides medical benefits for work-related injuries, including acupuncture by a licensed acupuncturist. You do not need a referral from a medical doctor to begin acupuncture treatment. Once your claim is open with your employer, contact us directly and we will coordinate with the adjuster to start your care as quickly as possible.</p>
<h2>Common Workplace Injuries We Treat</h2>
<ul>
<li>Lower back strain and lumbar disc injury from lifting or repeated bending</li>
<li>Neck pain and whiplash from falls or equipment accidents</li>
<li>Shoulder injuries (rotator cuff strain, impingement) from overhead work</li>
<li>Repetitive strain injuries (carpal tunnel, tendinitis) from keyboard, tool use, or assembly work</li>
<li>Knee pain from prolonged standing, kneeling, or impact</li>
<li>Post-surgical pain and rehabilitation support</li>
</ul>
<h2>How to Get Started</h2>
<p>Report your injury to your employer and file a WC-1 form (Workers&rsquo; Compensation claim) with the Hawaii Department of Labor. Once your claim number is confirmed, call us at (808) 528-7177 (Liliha) or (808) 452-1900 (Aiea). We handle all authorization and billing — you pay nothing out of pocket.</p>
<h2>Frequently Asked Questions</h2>
<p><strong>Is acupuncture covered by Workers&rsquo; Comp in Hawaii?</strong> Yes. Licensed acupuncturists are recognized providers under Hawaii&rsquo;s Workers&rsquo; Compensation system. Treatment must be related to the workplace injury and authorized by the claim.</p>
<p><strong>Do I need a doctor&rsquo;s referral?</strong> No. In Hawaii, you can see a licensed acupuncturist directly under Workers&rsquo; Comp without a referral. We will coordinate with your adjuster to confirm coverage before your first visit.</p>
<p><strong>How soon can I start treatment?</strong> In most cases, we can schedule your first appointment within the same week your claim is confirmed. Early treatment typically leads to faster recovery and reduced total claim costs.</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years of clinical experience, extensive background in injury recovery and pain management. Hawaii Licensed Acupuncturist ACU-1125, NCCAOM Dipl. Ac. &amp; Dipl. C.H. #962-1001-522.</p>
<p>Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner, 30+ years experience, co-developer of CenterGy (Synergies), specializing in musculoskeletal recovery. Hawaii LMT MAT-17832.</p>
<h2>Locations &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</p>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const AUTO_ACCIDENT_NOSCRIPT_BODY = `<h1>Auto Accident Injury Treatment in Honolulu | Hawaii No-Fault PIP</h1>
<p>Hawaii&rsquo;s No-Fault law (HRS &sect;431:10C) requires every auto insurance policy to include Personal Injury Protection (PIP) benefits of at least $10,000. This means that if you were injured in a car accident in Hawaii — regardless of who was at fault — your auto insurance covers acupuncture and medical massage at $0 out of pocket. AcuTherapy Clinics is a participating PIP provider at our Honolulu and Aiea locations.</p>
<h2>Injuries Commonly Caused by Auto Accidents</h2>
<p>Even a low-speed collision creates significant biomechanical force on the spine and soft tissue. Common injuries we treat include:</p>
<ul>
<li>Whiplash (cervical acceleration-deceleration injury) — neck pain, stiffness, headaches</li>
<li>Lower back sprain and lumbar disc aggravation</li>
<li>Shoulder pain and rotator cuff strain from seatbelt or airbag impact</li>
<li>Hip and sacroiliac joint dysfunction</li>
<li>Soft tissue injuries to the mid-back and thoracic spine</li>
<li>Tension headaches and post-concussion symptoms</li>
</ul>
<h2>Why Early Treatment Matters</h2>
<p>Scar tissue begins forming within days of a soft tissue injury. Untreated whiplash and spinal injuries can progress into chronic pain conditions. Early acupuncture treatment helps reduce acute inflammation, break the muscle-spasm cycle, and prevent long-term structural changes. We recommend beginning treatment within the first 1&ndash;2 weeks after your accident.</p>
<h2>How PIP Billing Works</h2>
<p>You do not need a referral. Contact your auto insurance carrier to confirm your PIP coverage, then call us. We handle all billing and paperwork directly with your insurer. In most cases you pay $0 at the time of service.</p>
<h2>Frequently Asked Questions</h2>
<p><strong>Does Hawaii PIP cover acupuncture?</strong> Yes. Hawaii No-Fault PIP covers acupuncture by a licensed acupuncturist for injuries sustained in a covered auto accident.</p>
<p><strong>Do I need a police report to use PIP?</strong> Not necessarily. A police report strengthens your claim but is not always required to open a PIP claim. Contact your insurer as soon as possible after the accident.</p>
<p><strong>What if my PIP runs out?</strong> If your PIP benefit ($10,000 minimum) is exhausted, we can transition billing to other insurance such as UHA, HMAA, Medicare Supplement, or continue care on a private-pay basis.</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years clinical experience with extensive injury and trauma recovery expertise. Hawaii Licensed Acupuncturist ACU-1125, NCCAOM Dipl. Ac. &amp; Dipl. C.H. #962-1001-522.</p>
<p>Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner, 30+ years experience, co-developer of CenterGy (Synergies). Hawaii LMT MAT-17832.</p>
<h2>Locations &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</p>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const EAR_SEED_NOSCRIPT_BODY = `
<h1>Brain Reset Through Your Ear™ — Needle-Free Ear Seed Therapy in Honolulu &amp; Aiea, HI</h1>
<p>AcuTherapy Clinics offers <strong>Brain Reset Through Your Ear™</strong>, a needle-free auricular acupressure treatment using tiny vaccaria seeds or gold beads placed on specific points of the outer ear. No needles penetrate the skin. No downtime. Appointments available at our Liliha (Honolulu) and Aiea locations.</p>
<h2>What Are Ear Seeds?</h2>
<p>Ear seeds are small seeds or gold beads taped to precise acupuncture points on your ear. They stay in place 3–7 days while you go about normal life. You press each seed gently 3–5 times daily to activate the point and send a calming signal through the vagus nerve to your brain and body. The World Health Organization recognized auricular acupuncture as a valid therapeutic system in 1990. The U.S. Department of Defense uses the Battlefield Acupuncture ear protocol to treat pain and stress in military personnel.</p>
<h2>Conditions Addressed</h2>
<p>Stress &amp; Anxiety | Insomnia &amp; Sleep Issues | Chronic Pain | Headaches &amp; Migraines | PTSD &amp; Trauma Stress | Fertility Support | Digestive Issues | Smoking Cessation | Neck &amp; Shoulder Tension | Low Energy &amp; Fatigue | Emotional Eating | Seasonal Allergies</p>
<h2>Why Your Ear? The Vagus Nerve Connection</h2>
<p>Your ear is the only place on the body's surface where you can directly access the vagus nerve — the main highway of the parasympathetic nervous system. The vagus nerve runs from your brainstem through your heart, lungs, and digestive tract, regulating stress response, inflammation, sleep, mood, and more. Stimulating auricular points produces measurable changes in heart rate variability, cortisol levels, and neural activity.</p>
<h2>How It Works</h2>
<p><strong>Step 1 — Precise Placement:</strong> Dr. Cai maps your ear and places seeds on the points corresponding to your specific symptoms — stress, pain, sleep, digestion, or others.</p>
<p><strong>Step 2 — Continuous Stimulation:</strong> You gently press each seed 3–5 times daily, activating the point and sending a signal through the vagus nerve to your brain and body.</p>
<p><strong>Step 3 — Cumulative Benefit:</strong> Each session builds on the last. Most patients notice a meaningful shift within 2–3 visits; lasting change typically takes 6–8 sessions.</p>
<h2>Frequently Asked Questions</h2>
<p><strong>Is this treatment truly needle-free?</strong> Yes. Brain Reset Through Your Ear™ uses tiny vaccaria seeds or gold beads taped to specific points on the outer ear — no needles penetrate the skin at any point.</p>
<p><strong>I'm afraid of needles. Can I still get acupuncture benefits?</strong> Absolutely. Auricular acupressure activates many of the same meridian points as needle acupuncture, delivered through gentle pressure. Many needle-phobic patients find this an ideal entry point.</p>
<p><strong>How long do the ear seeds stay on?</strong> Ear seeds typically stay in place 3–7 days. You press them gently 3–5 times per day to stimulate the points.</p>
<p><strong>Can ear seeds help with anxiety and stress?</strong> Yes — the Shen Men (Spirit Gate) and autonomic nervous system points on the ear have well-documented calming effects. Stimulating these points activates the vagus nerve, helping shift the body out of fight-or-flight.</p>
<p><strong>How many sessions will I need?</strong> Most patients notice a difference within 2–3 sessions. For chronic stress, anxiety, or pain, a course of 6–8 weekly sessions is typical, followed by maintenance visits every 2–4 weeks.</p>
<p><strong>Can I drive home after the treatment?</strong> Yes. Ear seed therapy produces no sedation or impairment. Most patients return to normal activities immediately after their appointment.</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, Doctor of Oriental Medicine trained at Beijing University of Chinese Medicine, 30+ years clinical experience. Hawaii Licensed Acupuncturist ACU-1125, LMT 7543, NCCAOM Dipl. Ac. &amp; Dipl. C.H. #962-1001-522.</p>
<p>Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner, 30+ years experience, co-developer of CenterGy (Synergies). Hawaii LMT MAT-17832.</p>
<h2>Locations &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</p>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const WEIGHT_LOSS_NOSCRIPT_BODY = `
<h1>Brain Reset for Weight Loss™ — Ear Seed Therapy for Cravings &amp; Appetite in Honolulu, HI</h1>
<p>AcuTherapy Clinics offers <strong>Brain Reset for Weight Loss™</strong>, a needle-free auricular acupressure treatment targeting the Hunger Point, Shen Men, and Endocrine ear points to reduce food cravings, stress eating, and emotional hunger. Drug-free, no needles, no downtime. Ozempic-compatible. Available at our Liliha (Honolulu) and Aiea locations.</p>
<h2>Why Your Brain Keeps Sabotaging Your Diet</h2>
<p>Most weight loss approaches treat hunger as a stomach problem. But cravings, stress eating, and emotional hunger are driven by your brain — specifically the hypothalamus, cortisol stress cycle, and reward pathways. Until those are addressed, willpower alone rarely wins. Ear seeds work by calming the nervous system and reducing the cortisol spike that drives stress eating, rather than directly suppressing metabolic appetite.</p>
<h2>What Patients Typically Notice</h2>
<p>Fewer intense cravings between meals | Less urge to stress-eat in the evening | Reduced emotional eating episodes | Smaller appetite for sweets and processed foods | Lower overall anxiety and tension | Improved sleep quality | More consistent energy levels | Feeling more in control of food choices</p>
<h2>For Patients on Ozempic or GLP-1 Medications</h2>
<p>GLP-1 medications like semaglutide (Ozempic, Wegovy) are highly effective at reducing physical appetite — but many users still struggle with emotional eating, stress-driven cravings, and food habits that the medication does not directly address. Ear seed therapy targets exactly these patterns through the nervous system, complementing your medication without any interaction. No prescription changes needed.</p>
<h2>How Brain Reset for Weight Loss™ Works</h2>
<p><strong>Step 1 — Target the Right Points:</strong> Dr. Cai identifies the Hunger Point, Shen Men (calming), and Endocrine points on your ear — the specific locations linked to appetite regulation and stress response.</p>
<p><strong>Step 2 — Seeds Go On. You Leave.</strong> Tiny vaccaria seeds are taped in place. No injections, no needles. You press them 3–5× daily between sessions, reinforcing the signal throughout the week.</p>
<p><strong>Step 3 — Cravings Quiet Down.</strong> Over 6–8 sessions, most patients find stress-driven cravings become less intense, emotional eating episodes decrease, and food choices become less effortful.</p>
<h2>Frequently Asked Questions</h2>
<p><strong>Can ear seeds actually reduce cravings?</strong> Clinical studies show that stimulating specific ear points — particularly the Hunger Point, Shen Men, and Endocrine point — can reduce appetite signals and the intensity of food cravings.</p>
<p><strong>Is this for emotional eating or physical hunger?</strong> Both, but it's especially effective for stress-driven and emotional eating — the kind where you're not physically hungry but find yourself reaching for food anyway.</p>
<p><strong>Will ear seed therapy make me lose weight?</strong> Ear seed therapy is a supportive tool, not a weight-loss medication. It does not directly burn fat or alter metabolism. What it does is help reduce the cravings, stress eating, and sleep disruption that make it harder to stick to healthier habits.</p>
<p><strong>I'm on Ozempic. Can I combine ear seed therapy?</strong> Yes. Ear seed therapy and GLP-1 medications work through entirely different mechanisms and do not interact. It is a complementary approach, not a replacement.</p>
<p><strong>How many sessions does it take?</strong> Many patients notice reduced craving intensity within 2–3 sessions. For sustained behavior change, a course of 6–8 weekly sessions followed by monthly maintenance is typical.</p>
<p><strong>Medical disclaimer:</strong> Ear seed therapy supports weight management by addressing stress eating and cravings. It is not a substitute for medical weight loss treatment, prescription medication, or dietary counseling. Individual results vary. Consult your primary care provider about your weight loss plan.</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, Doctor of Oriental Medicine trained at Beijing University of Chinese Medicine, 30+ years clinical experience. Hawaii Licensed Acupuncturist ACU-1125, LMT 7543, NCCAOM Dipl. Ac. &amp; Dipl. C.H. #962-1001-522.</p>
<p>Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner, 30+ years experience, co-developer of CenterGy (Synergies). Hawaii LMT MAT-17832.</p>
<h2>Locations &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</p>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const STRESS_NOSCRIPT_BODY = `
<h1>Stress Relief Acupuncture in Honolulu, HI</h1>
<p>Persistent stress rewires your nervous system, tightens muscles, disrupts sleep, and depletes energy. Acupuncture at AcuTherapy addresses the root — not just the symptoms — using Traditional Chinese Medicine and Dr. Cai's CenterGy diagnostic method.</p>

<h2>What Stress Does to the Body</h2>
<p>When stress is chronic, the body operates as though the threat is permanent. Cortisol stays elevated. Muscles hold tension that never fully releases. Sleep becomes shallow. Acupuncture interrupts this cycle by directly engaging the autonomic nervous system — shifting the body from 'fight or flight' into a restorative state. In Traditional Chinese Medicine, stress maps to Liver Qi stagnation (tension, frustration, tightness) or Heart-Spleen deficiency (anxiety, fatigue, worry).</p>

<h2>The AcuTherapy Difference — CenterGy Method</h2>
<p>Dr. Cai uses the CenterGy diagnostic system to identify your specific stress pattern before treatment. Rather than a standard protocol, he distinguishes Liver stagnation from Heart deficiency from Kidney depletion — each requiring a different point strategy. Needle-free CenterGy therapy is also available for patients who prefer it.</p>

<h2>What Brings People In</h2>
<p><strong>Persistent Tension:</strong> Tight neck and shoulders, headaches, jaw clenching — the body carrying stress as physical load day after day.</p>
<p><strong>Anxiety and Worry:</strong> Racing mind, difficulty unwinding, irritability — mental patterns that don't switch off when circumstances improve.</p>
<p><strong>Burnout and Depletion:</strong> Exhausted despite sleep, no motivation, pushing through on empty — when reserves have been withdrawn faster than replenished.</p>
<p><strong>Emotional Overload:</strong> Mood swings, feeling overwhelmed by ordinary demands, short fuse — when the nervous system's bandwidth is saturated.</p>

<h2>What Happens in a Session</h2>
<p><strong>Step 1 — Pattern Assessment:</strong> Dr. Cai identifies your stress pattern using the CenterGy diagnostic method.</p>
<p><strong>Step 2 — Targeted Needling:</strong> Points are placed to calm the nervous system and restore Qi flow. Most patients feel the shift within minutes.</p>
<p><strong>Step 3 — Deep Rest Phase:</strong> 25–30 minutes of quiet. Most patients describe this as the deepest rest they've felt in months.</p>

<h2>Frequently Asked Questions</h2>
<p><strong>How does acupuncture help with stress?</strong> Acupuncture activates the parasympathetic nervous system, reducing cortisol, relaxing muscle tension, and slowing heart rate. It also addresses the TCM pattern — Liver Qi stagnation or Heart-Spleen deficiency — driving the stress response.</p>
<p><strong>How quickly will I notice a difference?</strong> Many patients feel a measurable shift during the first session. By sessions 3–5, most report sleeping better and reacting less intensely to stressors.</p>
<p><strong>How many sessions do I need?</strong> For acute stress: 4–6 sessions. For chronic stress or burnout: 8–12 sessions, with monthly maintenance to sustain results.</p>
<p><strong>Can acupuncture help with anxiety too?</strong> Yes — physical tension and mental anxiety arise from the same dysregulation. Acupuncture addresses both simultaneously.</p>

<h2>Our Locations</h2>
<p>Honolulu (Liliha): 1650 Liliha St, Suite 208, Honolulu, HI 96817. Phone: (808) 528-7177.</p>
<p>Aiea / Pearl City: 98-211 Pali Momi St, Suite 604, Aiea, HI 96701. Phone: (808) 452-1900.</p>
<p>Hours: Monday–Friday 9am–1pm, Saturday 9am–12pm.</p>

<h2>About Dr. David Cai</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. — Doctor of Oriental Medicine, trained at Beijing University of Chinese Medicine. Hawaii L.Ac. ACU-1125, NCCAOM Dipl. Ac. #962-1001-522. 30+ years of clinical practice in Honolulu. Co-developer of the CenterGy diagnostic and therapeutic method.</p>
`;

const SLEEP_NOSCRIPT_BODY = `
<h1>Acupuncture for Sleep in Honolulu, HI</h1>
<p>Whether you can't fall asleep, wake through the night, or rise exhausted after hours in bed — acupuncture works on the root cause of sleep disruption, not just the surface symptoms. Traditional Chinese Medicine combined with Dr. Cai's CenterGy diagnostic method.</p>

<h2>Why Sleep Problems Resist Simple Solutions</h2>
<p>Poor sleep rarely comes down to bedtime habits alone. The body has a sophisticated biological architecture for sleep — one that depends on hormonal balance, nervous system regulation, and the proper flow of energy through internal organ systems. In TCM, every sleep pattern has a specific signature: inability to fall asleep despite exhaustion typically indicates Heart Yin deficiency; waking between 2 and 4am is the classic presentation of Liver Qi stagnation; sleeping long but rising depleted points to Kidney or Spleen deficiency.</p>

<h2>The AcuTherapy Difference — CenterGy Method</h2>
<p>Dr. Cai uses the CenterGy diagnostic system to distinguish between the patterns causing your sleep disruption — Heart, Kidney, Liver, or Spleen — before any needles are placed. This precision is what makes the treatment effective where generic approaches have failed. Needle-free CenterGy therapy is also available.</p>

<h2>What Brings People In</h2>
<p><strong>Can't Fall Asleep:</strong> Lying awake with a mind that won't stop — unable to cross the threshold into sleep despite physical fatigue.</p>
<p><strong>Waking in the Night:</strong> Falling asleep without difficulty but waking at 2, 3, or 4am — and struggling to return to sleep.</p>
<p><strong>Unrefreshing Sleep:</strong> Hours in bed, but waking as tired as when you lay down.</p>
<p><strong>Stress-Driven Sleep Disruption:</strong> Sleep that tracks with anxiety levels — good during calm periods, poor when life gets demanding.</p>

<h2>What Happens in a Session</h2>
<p><strong>Step 1 — Sleep Pattern Assessment:</strong> Dr. Cai evaluates your type of sleep disruption and maps it to a TCM pattern.</p>
<p><strong>Step 2 — Targeted Needling:</strong> Points are selected to calm the Heart, anchor Kidney energy, smooth Liver Qi, or nourish the Spleen depending on your pattern.</p>
<p><strong>Step 3 — Deep Rest Phase:</strong> Most patients enter a deeply relaxed state within minutes — many fall asleep on the table. This rest is part of the treatment.</p>

<h2>Frequently Asked Questions</h2>
<p><strong>Can acupuncture really help me sleep better?</strong> Yes. Acupuncture stimulates melatonin secretion, reduces night-time cortisol through HPA axis modulation, and activates parasympathetic tone that allows the body to transition into sleep.</p>
<p><strong>How long before I notice improvement?</strong> Many patients sleep better the night of their first session. Consistent improvement typically emerges after sessions 2–4.</p>
<p><strong>Is it safe with sleep medication?</strong> Yes. Acupuncture does not interact with sleep medications. Always consult your prescribing physician before changing medication.</p>
<p><strong>How many sessions will I need?</strong> For recent-onset insomnia: 4–6 sessions. For chronic insomnia: 8–12 sessions, with monthly maintenance to prevent regression.</p>

<h2>Our Locations</h2>
<p>Honolulu (Liliha): 1650 Liliha St, Suite 208, Honolulu, HI 96817. Phone: (808) 528-7177.</p>
<p>Aiea / Pearl City: 98-211 Pali Momi St, Suite 604, Aiea, HI 96701. Phone: (808) 452-1900.</p>
<p>Hours: Monday–Friday 9am–1pm, Saturday 9am–12pm.</p>

<h2>About Dr. David Cai</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. — Doctor of Oriental Medicine, trained at Beijing University of Chinese Medicine. Hawaii L.Ac. ACU-1125, NCCAOM Dipl. Ac. #962-1001-522. 30+ years of clinical practice in Honolulu. Co-developer of the CenterGy diagnostic and therapeutic method.</p>
`;

const WELLNESS_NOSCRIPT_BODY = `
<h1>Wellness Acupuncture in Honolulu, HI</h1>
<p>You don't have to be in pain to benefit from acupuncture. Many patients at AcuTherapy come to maintain their health, build resilience, and keep their body functioning at its best — before problems arise. Traditional Chinese Medicine has always understood that the highest form of care is prevention.</p>

<h2>Acupuncture Is Not Just for When Something Goes Wrong</h2>
<p>The body gives signals long before it gives symptoms — a slow accumulation of fatigue, energy that doesn't quite recover, sleep that's lighter than it used to be, immunity that feels less robust. Wellness acupuncture uses Dr. Cai's CenterGy diagnostic system to read these early signals — mapping energy distribution across organ systems and identifying where reserves are being depleted. Treatment at this stage is gentle, efficient, and highly effective.</p>

<h2>The AcuTherapy Difference — CenterGy Method</h2>
<p>At AcuTherapy, every wellness session begins with a CenterGy precision assessment — evaluating your energy distribution across meridians and organ systems. This makes treatment specific to where your body actually is right now, not a standard tonic protocol. Seasonal attunement, individualized point selection, and needle-free options are all available.</p>

<h2>What Brings People In</h2>
<p><strong>Low Energy and Fatigue:</strong> Functional but not thriving — getting through the day but never feeling energized.</p>
<p><strong>Immune Support:</strong> Getting sick more than usual, slow to recover, defenses that feel less robust than they once were.</p>
<p><strong>Preventive Maintenance:</strong> Proactively investing in long-term health — detecting and correcting subtle imbalances before they become symptoms.</p>
<p><strong>Mental Clarity and Focus:</strong> Brain fog, difficulty concentrating, mental fatigue that doesn't clear with rest.</p>

<h2>The Seasonal Framework</h2>
<p>TCM aligns wellness care with seasonal energy shifts. Spring treats the Liver — movement, renewal, detoxification. Summer nourishes the Heart — joy, vitality, sustained energy. Autumn strengthens the Lung and Wei Qi — immune defense, respiratory support. Winter restores the Kidney — deep rest, essence replenishment, reserves for the year ahead.</p>

<h2>Frequently Asked Questions</h2>
<p><strong>Do I need to have a health problem to benefit?</strong> No. Some of our most consistent long-term patients come specifically because they are healthy and want to stay that way. Acupuncture builds resilience before imbalances become symptoms.</p>
<p><strong>How often should a healthy person receive acupuncture?</strong> Most wellness patients come monthly or seasonally — at the transition of each season. Dr. Cai will recommend a frequency based on your assessment.</p>
<p><strong>Can acupuncture support immune function?</strong> Yes. Regular acupuncture is associated with increased natural killer cell activity, improved T-lymphocyte function, and regulated inflammatory cytokine production.</p>

<h2>Our Locations</h2>
<p>Honolulu (Liliha): 1650 Liliha St, Suite 208, Honolulu, HI 96817. Phone: (808) 528-7177.</p>
<p>Aiea / Pearl City: 98-211 Pali Momi St, Suite 604, Aiea, HI 96701. Phone: (808) 452-1900.</p>
<p>Hours: Monday–Friday 9am–1pm, Saturday 9am–12pm.</p>

<h2>About Dr. David Cai</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. — Doctor of Oriental Medicine, trained at Beijing University of Chinese Medicine. Hawaii L.Ac. ACU-1125, NCCAOM Dipl. Ac. #962-1001-522. 30+ years of clinical practice in Honolulu. Co-developer of the CenterGy diagnostic and therapeutic method.</p>
`;

const FACIAL_NOSCRIPT_BODY = `
<h1>Facial Acupuncture in Honolulu, HI — Traditional Chinese Technique + AcuTherapy Signature Method</h1>
<p>AcuTherapy Clinics offers <strong>facial acupuncture</strong> combining classical Chinese cosmetic acupuncture with Dr. David Cai's proprietary CenterGy diagnostic method. Ultra-fine needles are placed at precise facial, scalp, and body points to stimulate collagen production, increase local circulation, and rebalance the internal meridian patterns that drive skin aging, dullness, and acne. Available at our Liliha (Honolulu) and Aiea locations. Self-pay — not covered by insurance.</p>
<h2>What Facial Acupuncture Treats</h2>
<p><strong>Anti-Aging &amp; Fine Lines:</strong> Fibroblast activation stimulates new collagen and elastin synthesis, reducing the appearance of fine lines, crow's feet, and forehead creases — without toxins or paralysis.</p>
<p><strong>Skin Lifting &amp; Firming:</strong> Micro-trauma from needling tightens facial fascia and retrains muscle tone, producing visible lifting at the jawline, cheeks, and brow over a treatment course.</p>
<p><strong>Brightening &amp; Radiance:</strong> Increased micro-circulation delivers more oxygen and nutrients to skin cells, fading dark spots, reducing dullness, and restoring healthy glow.</p>
<p><strong>Acne &amp; Breakout Control:</strong> Addresses the TCM root patterns driving acne — Liver Heat, Stomach Fire, Dampness — while reducing local inflammation and promoting faster healing of active blemishes.</p>
<h2>The AcuTherapy Difference</h2>
<p>Dr. Cai integrates the <strong>CenterGy</strong> precision diagnostic system to map your individual energy patterns before any needles are placed. Classical Chinese facial and scalp point selection is combined with body points chosen specifically for your constitution — producing deeper and longer-lasting results than standard facial acupuncture protocols.</p>
<h2>Treatment Timeline</h2>
<p><strong>Sessions 1–3:</strong> Immediate brightening and glow. Skin texture begins to smooth. Puffiness and dullness visibly reduce.</p>
<p><strong>Sessions 4–6:</strong> Fine lines soften. Skin tone evens. Active acne decreases. Lifting effect becomes noticeable at jawline and cheeks.</p>
<p><strong>Sessions 7–12:</strong> Cumulative collagen remodeling produces significant lifting, firming, and wrinkle reduction. Acne scarring improves.</p>
<p><strong>Monthly Maintenance:</strong> Results are preserved and enhanced. Collagen built through acupuncture is your own — it improves over successive courses rather than wearing off.</p>
<h2>Frequently Asked Questions</h2>
<p><strong>How many sessions do I need to see results?</strong> Most patients notice improved brightness after 3–4 sessions. Visible lifting and fine line reduction emerge over a course of 8–12 weekly sessions.</p>
<p><strong>Does facial acupuncture hurt?</strong> Facial needles are among the finest used in practice. Most patients describe brief pressure at insertion, followed by deep relaxation. Many fall asleep on the table.</p>
<p><strong>Can facial acupuncture replace Botox?</strong> It works through a different mechanism — stimulating your body's own collagen synthesis rather than temporarily paralyzing muscles. Results look natural and improve over time. Many patients use it as a natural alternative or to extend the interval between injectables.</p>
<p><strong>Is it effective for acne?</strong> Yes. Acne in TCM corresponds to internal Heat, Dampness, or Liver Qi stagnation. Targeting these root causes can significantly reduce breakouts and calm inflamed, acne-scarred skin.</p>
<p><strong>Is this covered by insurance?</strong> No. Facial acupuncture is a self-pay cosmetic treatment. It is not covered by health insurance, Workers' Compensation, or Auto PIP. Call (808) 528-7177 for current pricing.</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Doctor of Oriental Medicine, trained at Beijing University of Chinese Medicine, 30+ years clinical experience. Hawaii Licensed Acupuncturist ACU-1125, LMT 7543, NCCAOM Dipl. Ac. &amp; Dipl. C.H. #962-1001-522.</p>
<p>Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner, 30+ years experience, co-developer of CenterGy (Synergies). Hawaii LMT MAT-17832.</p>
<h2>Locations &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</p>
<p>Liliha hours: Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Aiea hours: Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday closed</p>`;

const WAIKIKI_NOSCRIPT_BODY = `<h1>Acupuncture Near Waikiki &ndash; Honolulu, Hawaii</h1>
<p>AcuTherapy Clinics provides acupuncture, Traditional Chinese Medicine, and medical massage for patients living and working in and around Waikiki. Our Liliha clinic is approximately 10 minutes from Waikiki by car&mdash;a straightforward drive via McCully Street or along Kapiolani Boulevard. Convenient on-site parking is available at our Liliha location.</p>
<h2>Who We Treat in the Waikiki Area</h2>
<p>Waikiki&rsquo;s economy runs on hospitality and tourism, which means a large share of our patients from this area are hotel workers, restaurant staff, and retail employees who spend long hours on their feet. Prolonged standing and repetitive motion in service roles are among the leading causes of lower back pain, plantar fasciitis, knee strain, and neck and shoulder tension. We also see Waikiki residents and visitors active in water sports&mdash;surfers, paddleboarders, and outrigger canoe paddlers&mdash;with shoulder impingement, rotator cuff strain, and low back pain. Stress and sleep disruption from shift work and irregular schedules are equally common presenting concerns.</p>
<h2>Conditions We Commonly Treat</h2>
<ul>
<li>Lower back pain from prolonged standing in hotel and service roles</li>
<li>Plantar fasciitis and foot pain</li>
<li>Shoulder and rotator cuff strain from water sports</li>
<li>Neck and shoulder tension from device use</li>
<li>Stress, anxiety, and insomnia from shift work</li>
<li>Auto accident injuries covered under Hawaii No-Fault PIP</li>
</ul>
<h2>Our Approach</h2>
<p>Every patient begins with a full constitutional assessment using Dr. Cai&rsquo;s CenterGy (Synergies) diagnostic method&mdash;a precision system that identifies the root pattern driving each condition. Treatment may include acupuncture, medical massage, and needle-free CenterGy energy therapy for needle-sensitive patients.</p>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; 30+ years clinical experience. Hawaii L.Ac. ACU-1125, NCCAOM #962-1001-522. Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner and CenterGy co-developer. Hawaii LMT MAT-17832.</p>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, AARP, Humana, AshLink, and more.</p>
<h2>Location &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p>Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Sunday closed</p>`;

const KAHALA_NOSCRIPT_BODY = `<h1>Acupuncture in Kahala &ndash; Honolulu, Hawaii</h1>
<p>AcuTherapy Clinics serves patients from the Kahala and Diamond Head neighborhoods of Honolulu from our Liliha clinic, approximately 20 minutes away via Kalanianaole Highway and the H-1 westbound. Our clinic offers convenient on-site parking and same-week appointments for new patients.</p>
<h2>Who We Treat in the Kahala Area</h2>
<p>Kahala and Diamond Head attract a health-conscious, wellness-oriented patient base. Many of our Kahala-area patients are professionals, retirees, and active adults who come to us for ongoing wellness maintenance, chronic pain management, and preventive care. Women&rsquo;s health concerns&mdash;hormonal balance, fertility support, and perimenopausal symptoms&mdash;are also common. We regularly treat age-related joint conditions, arthritis, and the kind of deep postural imbalances that accumulate over years of desk work or athletic activity.</p>
<h2>Conditions We Commonly Treat</h2>
<ul>
<li>Chronic back and joint pain management</li>
<li>Arthritis and osteoarthritis pain relief</li>
<li>Women&rsquo;s health: hormonal balance, fertility, perimenopausal support</li>
<li>Stress, anxiety, and burnout recovery</li>
<li>Preventive wellness and seasonal tune-ups</li>
<li>Sports injuries from golf, tennis, hiking, and swimming</li>
</ul>
<h2>Our Approach</h2>
<p>AcuTherapy Clinics uses the CenterGy (Synergies) constitutional diagnostic method co-developed by Dr. David Cai and Lisa Long. This precision system maps Qi distribution across organ systems and meridians to identify imbalances before they produce serious symptoms&mdash;making it especially effective for wellness-focused patients who want to maintain peak health, not just manage acute pain.</p>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years experience. Hawaii L.Ac. ACU-1125, NCCAOM #962-1001-522. Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner. Hawaii LMT MAT-17832.</p>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, AARP, Humana, AshLink, and more.</p>
<h2>Location &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p>Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Sunday closed</p>`;

const MANOA_NOSCRIPT_BODY = `<h1>Acupuncture in Manoa &ndash; Honolulu, Hawaii</h1>
<p>AcuTherapy Clinics provides expert acupuncture, Traditional Chinese Medicine, and medical massage for patients from the Manoa Valley area of Honolulu. Our Liliha clinic is approximately 15 minutes from Manoa via University Avenue and Beretania Street, with on-site parking available.</p>
<h2>Who We Treat in the Manoa Area</h2>
<p>Manoa is home to the University of Hawaii at Manoa campus, which means a significant share of our patients from this area are students, faculty, and research staff dealing with academic stress, postural strain from long hours at a desk or computer, tension headaches, and burnout. University athletes and recreational sports participants come to us with ankle sprains, knee injuries, shoulder strain, and recovery needs after competition. We also serve Manoa Valley families and long-term residents dealing with chronic pain and age-related conditions.</p>
<h2>Conditions We Commonly Treat</h2>
<ul>
<li>Academic and work-related stress, anxiety, and insomnia</li>
<li>Tension headaches and migraines</li>
<li>Tech neck and postural strain from computer use</li>
<li>Sports injuries for student and recreational athletes</li>
<li>Lower back pain from prolonged sitting</li>
<li>Digestive issues and immune support</li>
</ul>
<h2>Our Approach</h2>
<p>Dr. Cai&rsquo;s CenterGy (Synergies) constitutional method tailors each treatment to the patient&rsquo;s individual root pattern rather than addressing symptoms in isolation. For stress and headache patients, treatment focuses on regulating the Liver and Heart meridians and calming the nervous system. For athletes, we focus on Qi and blood movement through the affected channels to reduce inflammation and accelerate tissue recovery.</p>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years experience. Hawaii L.Ac. ACU-1125, NCCAOM #962-1001-522. Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner. Hawaii LMT MAT-17832.</p>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, AARP, Humana, AshLink, and more.</p>
<h2>Location &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p>Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Sunday closed</p>`;

const HAWAII_KAI_NOSCRIPT_BODY = `<h1>Acupuncture in Hawaii Kai &ndash; East Honolulu, Hawaii</h1>
<p>AcuTherapy Clinics serves patients from Hawaii Kai and East Honolulu at our Liliha clinic, approximately 25&ndash;30 minutes away via Kalanianaole Highway. On-site parking is available, making the drive from East Oahu straightforward for patients scheduling morning appointments during our regular hours.</p>
<h2>Who We Treat in the Hawaii Kai Area</h2>
<p>Hawaii Kai attracts active outdoor enthusiasts&mdash;hikers tackling Koko Head and Makapuu, surfers at Sandy Beach and Portlock, scuba divers, and paddlers. This active lifestyle produces a predictable set of musculoskeletal injuries: knee pain from steep trail descents, shoulder strain from surfing and paddling, ankle sprains, and hip flexor tightness from repetitive athletic activity. We also treat auto accident injuries that occur frequently on Kalanianaole Highway, and see patients managing age-related joint conditions and chronic pain from years of active use.</p>
<h2>Conditions We Commonly Treat</h2>
<ul>
<li>Knee pain from hiking, trail running, and impact sports</li>
<li>Shoulder and rotator cuff injuries from surfing and paddling</li>
<li>Ankle sprains and ligament recovery</li>
<li>Hip pain and iliotibial band syndrome</li>
<li>Auto accident injuries (whiplash, back pain) covered under Hawaii No-Fault PIP</li>
<li>Chronic joint pain and arthritis management</li>
</ul>
<h2>Our Approach</h2>
<p>Our practitioners use the CenterGy (Synergies) diagnostic system to assess both the acute injury and the underlying constitutional factors that affect recovery speed. Athletes often respond well to a combination of acupuncture for inflammation and nerve signaling alongside medical massage to address soft tissue restriction and adhesion.</p>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years experience. Hawaii L.Ac. ACU-1125, NCCAOM #962-1001-522. Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner. Hawaii LMT MAT-17832.</p>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, AARP, Humana, AshLink, and more.</p>
<h2>Location &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p>Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Sunday closed</p>`;

const KAIMUKI_NOSCRIPT_BODY = `<h1>Acupuncture in Kaimuki &ndash; Honolulu, Hawaii</h1>
<p>AcuTherapy Clinics provides acupuncture, Traditional Chinese Medicine, and medical massage for patients from the Kaimuki neighborhood of Honolulu. Our Liliha clinic is approximately 15 minutes from Kaimuki via Waialae Avenue and the H-1, with on-site parking at our Liliha location.</p>
<h2>Who We Treat in the Kaimuki Area</h2>
<p>Kaimuki is one of Honolulu&rsquo;s most eclectic and livable neighborhoods&mdash;a mix of long-time local families, young professionals, and a thriving restaurant and retail scene. Many of our Kaimuki-area patients are restaurant workers, baristas, and small business owners dealing with the physical demands of service work: lower back strain from long shifts, neck and shoulder tension from kitchen and counter work, and wrist and hand issues from repetitive tasks. We also see Kaimuki residents who work downtown or in corporate settings with postural and stress-related complaints, as well as athletes from the nearby Waialae Golf Course and recreational sports community.</p>
<h2>Conditions We Commonly Treat</h2>
<ul>
<li>Lower back and neck pain from service industry work</li>
<li>Wrist and forearm repetitive strain</li>
<li>Stress, anxiety, and fatigue from demanding schedules</li>
<li>Sports injuries and recovery</li>
<li>Headaches and migraines</li>
<li>General wellness maintenance</li>
</ul>
<h2>Our Approach</h2>
<p>We use the CenterGy (Synergies) constitutional diagnostic system to identify the specific root pattern behind each patient&rsquo;s condition. For Kaimuki&rsquo;s working population, we frequently address patterns of Qi stagnation and Liver imbalance driving stress and tension, combined with local acupuncture and massage for structural relief.</p>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years experience. Hawaii L.Ac. ACU-1125, NCCAOM #962-1001-522. Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner. Hawaii LMT MAT-17832.</p>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, AARP, Humana, AshLink, and more.</p>
<h2>Location &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p>Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Sunday closed</p>`;

const ALA_MOANA_NOSCRIPT_BODY = `<h1>Acupuncture Near Ala Moana &ndash; Honolulu, Hawaii</h1>
<p>AcuTherapy Clinics is located just minutes from the Ala Moana district on Liliha Street in Honolulu. For patients working or living near Ala Moana Center, our clinic is approximately 5&ndash;10 minutes by car via Beretania Street or the H-1, with on-site parking available.</p>
<h2>Who We Treat in the Ala Moana Area</h2>
<p>Ala Moana is one of Honolulu&rsquo;s most active commercial hubs, home to one of the world&rsquo;s largest open-air shopping centers, hotels, and a dense concentration of restaurant and retail businesses. The working population in this corridor includes retail associates, hotel staff, restaurant workers, and office employees&mdash;all of whom face significant physical demands. Common issues include foot and lower leg pain from standing on hard floors, lower back strain from long shifts, carpal tunnel and wrist pain from retail scanning and checkout work, and chronic stress and fatigue from high-volume service environments.</p>
<h2>Conditions We Commonly Treat</h2>
<ul>
<li>Plantar fasciitis and foot pain from standing on hard surfaces</li>
<li>Lower back pain from retail and hospitality work</li>
<li>Carpal tunnel syndrome and wrist repetitive strain</li>
<li>Neck and shoulder tension</li>
<li>Stress, adrenal fatigue, and insomnia</li>
<li>Workers&rsquo; Compensation claims for workplace injuries</li>
</ul>
<h2>Our Approach</h2>
<p>Dr. Cai&rsquo;s CenterGy (Synergies) method provides a root-cause diagnosis at every visit, ensuring that symptom relief is paired with correction of the underlying constitutional imbalance. For retail and service workers, we often address Kidney and Spleen deficiency patterns that drive fatigue and structural weakness, alongside targeted local treatment for the presenting injury.</p>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years experience. Hawaii L.Ac. ACU-1125, NCCAOM #962-1001-522. Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner. Hawaii LMT MAT-17832.</p>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, AARP, Humana, AshLink, and more.</p>
<h2>Location &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p>Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Sunday closed</p>`;

const KAPAHULU_NOSCRIPT_BODY = `<h1>Acupuncture in Kapahulu &ndash; Honolulu, Hawaii</h1>
<p>AcuTherapy Clinics serves patients from the Kapahulu neighborhood and surrounding areas including Moiliili, St. Louis Heights, and Palolo from our Liliha Street clinic in Honolulu. Kapahulu is approximately 10 minutes from our clinic via Kapahulu Avenue and the H-1 westbound, with convenient on-site parking at our location.</p>
<h2>Who We Treat in the Kapahulu Area</h2>
<p>Kapahulu is a busy mixed residential and commercial corridor connecting Waikiki to the broader Honolulu neighborhoods. Patients from this area include restaurant and food service workers dealing with the physical demands of kitchen and counter work, active residents who use the nearby Diamond Head State Monument trails and Kapiolani Park for fitness, and families seeking care for injury recovery and chronic pain. We also see a number of patients from the Kapahulu area who have been in auto accidents on the H-1 on-ramps and surface streets and need Hawaii No-Fault PIP treatment.</p>
<h2>Conditions We Commonly Treat</h2>
<ul>
<li>Lower back and shoulder pain from food service work</li>
<li>Sports and trail injuries from Diamond Head and Kapiolani Park activities</li>
<li>Knee and hip pain from recreational running</li>
<li>Auto accident injuries (whiplash, cervical strain) under Hawaii PIP</li>
<li>Stress, fatigue, and disrupted sleep</li>
<li>General wellness and preventive care</li>
</ul>
<h2>Our Approach</h2>
<p>Each patient receives a full constitutional assessment using the CenterGy (Synergies) method before treatment begins. This allows Dr. Cai and Lisa Long to address both the structural complaint and the deeper energy pattern behind it&mdash;producing more lasting results than symptom-only treatment.</p>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years experience. Hawaii L.Ac. ACU-1125, NCCAOM #962-1001-522. Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner. Hawaii LMT MAT-17832.</p>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, AARP, Humana, AshLink, and more.</p>
<h2>Location &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p>Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Sunday closed</p>`;

const MOILIILI_NOSCRIPT_BODY = `<h1>Acupuncture in Moiliili &ndash; Honolulu, Hawaii</h1>
<p>AcuTherapy Clinics provides acupuncture, Traditional Chinese Medicine, and medical massage for patients from the Moiliili neighborhood of Honolulu. Our Liliha clinic is approximately 10 minutes from Moiliili via King Street or University Avenue, with on-site parking available at our location.</p>
<h2>Who We Treat in the Moiliili Area</h2>
<p>Moiliili is a diverse, urban neighborhood adjacent to the University of Hawaii and McCully-Moiliili district. The patient base from this area reflects the neighborhood&rsquo;s character: university students and young professionals managing academic and work stress, residents of Japanese, Korean, and Filipino heritage with a cultural appreciation for holistic medicine, small business owners dealing with physical demands and burnout, and active adults who use the nearby Ala Wai Golf Course and Ala Wai Canal paths for daily exercise. We also regularly treat women from the Moiliili area seeking acupuncture for hormonal balance, fertility support, and cycle regulation.</p>
<h2>Conditions We Commonly Treat</h2>
<ul>
<li>Stress, anxiety, and academic or work burnout</li>
<li>Women&rsquo;s health: cycle regulation, fertility, perimenopause</li>
<li>Lower back and neck pain from desk work and commuting</li>
<li>Digestive issues and immune support</li>
<li>Sleep disorders and fatigue</li>
<li>General wellness and preventive seasonal care</li>
</ul>
<h2>Our Approach</h2>
<p>The CenterGy (Synergies) diagnostic method used at AcuTherapy Clinics is particularly effective for complex or multi-symptom presentations common in stressed, overextended patients. It identifies the constitutional root pattern&mdash;whether Kidney deficiency, Liver Qi stagnation, Heart-Spleen weakness, or another pattern&mdash;and builds treatment around correcting that root cause.</p>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years experience. Hawaii L.Ac. ACU-1125, NCCAOM #962-1001-522. Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner. Hawaii LMT MAT-17832.</p>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, AARP, Humana, AshLink, and more.</p>
<h2>Location &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177</p>
<p>Monday&ndash;Saturday 9:00 AM &ndash; 1:00 PM | Sunday closed</p>`;

const HONOLULU_GENERIC_NOSCRIPT_BODY = `<h1>Acupuncture in Honolulu, Hawaii &ndash; AcuTherapy Clinics</h1>
<p>AcuTherapy Clinics is Honolulu&rsquo;s trusted acupuncture and Traditional Chinese Medicine provider, with two convenient Oahu locations: our main clinic on Liliha Street in Honolulu and a branch clinic in Aiea serving Pearl City and West Oahu. Founded by Dr. David Cai, O.M.D., L.Ac., L.M.T., the practice brings over 30 years of clinical expertise in pain management, injury recovery, and whole-body wellness to patients across the island.</p>
<h2>Services We Offer</h2>
<p>AcuTherapy Clinics provides a full range of Traditional Chinese Medicine services, including acupuncture, medical massage, fire cupping therapy, moxibustion, and the proprietary CenterGy (Synergies) diagnostic and energy therapy method co-developed by Dr. Cai and senior practitioner Lisa Long. CenterGy can be applied with or without needles, making it accessible to patients with needle sensitivity.</p>
<h2>Conditions We Treat</h2>
<ul>
<li>Back pain, sciatica, and herniated disc</li>
<li>Neck pain, whiplash, and cervical strain</li>
<li>Shoulder, knee, hip, and joint pain</li>
<li>Auto accident injuries (Hawaii No-Fault PIP covered)</li>
<li>Workers&rsquo; Compensation workplace injuries</li>
<li>Veterans pain management (VA Community Care)</li>
<li>Stress, anxiety, insomnia, and burnout</li>
<li>Women&rsquo;s health, fertility, and hormonal balance</li>
<li>Facial acupuncture and cosmetic wellness</li>
</ul>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, AARP, Humana, AshLink, and more. New patient self-pay specials are also available.</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, graduate of Beijing University of Chinese Medicine (1991), 30+ years experience. Hawaii L.Ac. ACU-1125, NCCAOM Dipl. Ac. #962-1001-522, LMT 7543. Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner, 30+ years experience, CenterGy co-developer. Hawaii LMT MAT-17832.</p>
<h2>Locations &amp; Hours</h2>
<p><strong>Honolulu (Liliha):</strong> 1650 Liliha St, Suite 208, Honolulu, HI 96817 &mdash; (808) 528-7177 &mdash; Mon&ndash;Sat 9:00 AM &ndash; 1:00 PM</p>
<p><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900 &mdash; Tue&ndash;Sat 9:00 AM &ndash; 5:00 PM</p>
<p>Sunday closed at both locations.</p>`;

const WAIPAHU_NOSCRIPT_BODY = `<h1>Acupuncture in Waipahu &ndash; West Oahu, Hawaii</h1>
<p>AcuTherapy Clinics serves patients from Waipahu and surrounding West Oahu communities at our Aiea clinic on Pali Momi Street, approximately 15 minutes from Waipahu via H-1 eastbound. Our Aiea location offers convenient on-site parking and extended afternoon hours Tuesday through Saturday.</p>
<h2>Who We Treat in the Waipahu Area</h2>
<p>Waipahu is a working community with a strong manufacturing, construction, and service industry base. Many of our Waipahu-area patients come to us with workplace injuries sustained in physically demanding jobs: lower back strain from lifting, neck and shoulder injuries from overhead work, repetitive strain from assembly or construction tasks, and knee pain from prolonged kneeling or standing on hard surfaces. Workers&rsquo; Compensation is accepted at our Aiea clinic, and we handle all billing and authorization paperwork directly with your employer&rsquo;s carrier.</p>
<p>We also see a significant number of Waipahu patients who have been injured in auto accidents on the H-1 and surrounding roads. Hawaii&rsquo;s No-Fault PIP insurance covers acupuncture with $0 out of pocket, and we manage all billing with your insurer directly.</p>
<h2>Conditions We Commonly Treat</h2>
<ul>
<li>Workplace lower back injuries (Workers&rsquo; Compensation accepted)</li>
<li>Shoulder and rotator cuff strain from labor and overhead work</li>
<li>Repetitive strain injuries: carpal tunnel, tendinitis</li>
<li>Neck pain and whiplash from auto accidents (Hawaii PIP covered)</li>
<li>Knee pain from standing and kneeling work</li>
<li>Stress, fatigue, and recovery support</li>
</ul>
<h2>Our Approach</h2>
<p>Dr. David Cai&rsquo;s CenterGy (Synergies) method provides a full constitutional assessment at the first visit, ensuring that treatment addresses both the acute injury and the underlying patterns that affect recovery. Lisa Long, our senior practitioner, specializes in musculoskeletal recovery and deep tissue medical massage.</p>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years experience. Hawaii L.Ac. ACU-1125, NCCAOM #962-1001-522. Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner. Hawaii LMT MAT-17832.</p>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, AARP, Humana, AshLink, and more.</p>
<h2>Location &amp; Hours</h2>
<p><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</p>
<p>Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday&ndash;Monday closed</p>`;

const KAPOLEI_NOSCRIPT_BODY = `<h1>Acupuncture in Kapolei &ndash; West Oahu, Hawaii</h1>
<p>AcuTherapy Clinics provides acupuncture, Traditional Chinese Medicine, and medical massage for patients from Kapolei and Ewa Beach at our Aiea clinic on Pali Momi Street, approximately 20&ndash;25 minutes from Kapolei via the H-1 eastbound. Our Aiea location offers on-site parking and afternoon appointment availability Tuesday through Saturday.</p>
<h2>Who We Treat in the Kapolei Area</h2>
<p>Kapolei is West Oahu&rsquo;s fastest-growing community&mdash;a mix of young families, government and military personnel, commuters, and active residents who use the region&rsquo;s expanding parks, golf courses, and beach facilities. Long daily commutes on the H-1 are a significant driver of lower back pain, hip tightness, and neck strain for Kapolei residents. We also see Kapolei patients dealing with auto accident injuries from the H-1 corridor, workers&rsquo; compensation claims from construction and trade industries, and sports injuries from the area&rsquo;s recreational facilities.</p>
<p>Kapolei&rsquo;s growing military and veterans population is also well served by our Aiea clinic, which accepts VA Community Care referrals for acupuncture and pain management at no cost to the veteran.</p>
<h2>Conditions We Commonly Treat</h2>
<ul>
<li>Lower back and hip pain from long commutes</li>
<li>Auto accident injuries (H-1 corridor) under Hawaii No-Fault PIP</li>
<li>Workers&rsquo; Compensation workplace injuries</li>
<li>Veterans pain management (VA Community Care accepted)</li>
<li>Sports injuries from golf, tennis, and recreational activities</li>
<li>Stress and fatigue from demanding work-life schedules</li>
</ul>
<h2>Our Approach</h2>
<p>The CenterGy (Synergies) diagnostic system used at AcuTherapy Clinics identifies the constitutional root pattern behind each condition&mdash;not just the presenting symptom. For commuter-related musculoskeletal issues, we typically address patterns of Kidney and Bladder meridian imbalance alongside local structural treatment.</p>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years experience. Hawaii L.Ac. ACU-1125, NCCAOM #962-1001-522. Lisa Long, O.M.D., L.M.T. &mdash; Senior practitioner. Hawaii LMT MAT-17832.</p>
<h2>Insurance Accepted</h2>
<p>Workers&rsquo; Compensation, Auto Accident PIP (Hawaii No-Fault), Veterans Community Care, UHA, HMAA, AARP, Humana, AshLink, and more.</p>
<h2>Location &amp; Hours</h2>
<p><strong>Aiea (Pearl City):</strong> 98-211 Pali Momi St, Suite 604, Aiea, HI 96701 &mdash; (808) 452-1900</p>
<p>Tuesday&ndash;Saturday 9:00 AM &ndash; 5:00 PM | Sunday&ndash;Monday closed</p>`;

function buildJsonLd(route, description) {
  const hoursAiea = [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
  ];

  const hoursHonolulu = [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '13:00',
    },
  ];

  // 1. Home Page
  if (route === '/' || route === '') {
    const lilihaSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      'name': 'AcuTherapy Clinics - Liliha',
      'image': 'https://acutherapy.com/acutherapy-clinic-honolulu.png',
      '@id': 'https://acutherapy.com/#liliha',
      'url': 'https://acutherapy.com',
      'telephone': '+1-808-528-7177',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '1650 Liliha St, Suite 208',
        'addressLocality': 'Honolulu',
        'addressRegion': 'HI',
        'postalCode': '96817',
        'addressCountry': 'US'
      },
      'openingHoursSpecification': hoursHonolulu,
      'priceRange': '$$',
      'medicalSpecialty': 'Acupuncture',
      'knowsAbout': ['Pain Management', 'Sciatica', 'Whiplash', 'Cupping'],
      'provider': {
        '@type': 'MedicalOrganization',
        'name': 'AcuTherapy Clinics',
        'url': 'https://acutherapy.com',
        'employee': {
          '@type': 'Person',
          'name': 'Dr. David Cai',
          'jobTitle': 'Licensed Acupuncturist & Founder'
        }
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '64',
        'bestRating': '5',
        'worstRating': '1'
      },
      'review': [
        {
          '@type': 'Review',
          'author': { '@type': 'Person', 'name': 'Sarah L.' },
          'datePublished': '2026-05-20',
          'reviewBody': 'Best acupuncture on Oahu. They helped me run through my HMSA insurance seamlessly with zero hassle. The medical massage is incredible too.',
          'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' }
        },
        {
          '@type': 'Review',
          'author': { '@type': 'Person', 'name': 'Froebel Garcia' },
          'datePublished': '2026-03-16',
          'reviewBody': "I can't thank Dr. David Cai enough! He is the owner and founder of Acutherapy Clinic, and I have been with him since the very beginning when he first opened his doors. Before I met Dr. Cai, I was in constant pain and struggling every day. Thanks to his care, expertise, and dedication, he was the one who truly healed me. From the moment I walked into his clinic, I felt welcomed, understood, and confident that I was in the best hands. If you are looking for a doctor who genuinely cares about your well-being and can help you live pain-free, I wholeheartedly recommend Dr. Cai and Acutherapy Clinic. He has truly changed my life.",
          'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' }
        },
        {
          '@type': 'Review',
          'author': { '@type': 'Person', 'name': 'Mila Ildefonso' },
          'datePublished': '2025-09-08',
          'reviewBody': "I came to Acutherapy Clinic at Liliha Office for my back and hips chronic pain that I'd been dealing with for months. After just some sessions, the constant pain I had been experiencing has significantly reduced. What sets Dr David Cai apart is his compassionate approach and willingness to listen. He takes time to understand my pain and explained the treatment plan clearly. I'm now feeling better and would highly recommended his services anyone suffering from pain",
          'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' }
        },
        {
          '@type': 'Review',
          'author': { '@type': 'Person', 'name': 'Ryan Ganeku' },
          'datePublished': '2025-09-15',
          'reviewBody': 'Clinic is clean and is very welcoming in Liliha. Lots of parking which I believe is always important. Easy to schedule appointments. Been going there for about a month now and recommend this place. I believe I am slowly recovering from my car accident thanx to Acutherapy Clinic!! Go check them out!',
          'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' }
        }
      ],
      'healthPlanNetworkId': [
        'HMSA Acupuncture Network',
        'Kaiser Permanente Alternative Care Network',
        'UHA Health Insurance',
        'HMAA Medical Plan',
        'UnitedHealthcare Medicare Solutions',
        'VA Community Care Network / TriWest'
      ],
      'offers': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'MedicalTherapy',
            'name': 'Auto Accident PIP Injury Rehab',
            'description': '100% fully covered therapy with zero out-of-pocket costs under Hawaii PIP insurance.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'MedicalTherapy',
            'name': 'Workers Compensation Pain Management',
            'description': 'Specialized clinical rehabilitation for job-related injuries on Oahu.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'MedicalTherapy',
            'name': 'VA Community Care Acupuncture',
            'description': 'Providing zero-cost specialized pain relief for military veterans via VA TriWest referral.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'MedicalTherapy',
            'name': 'Traditional Fire Cupping Therapy',
            'description': 'Clinical negative-pressure cupping to unlock severe deep muscular knots and blood stagnation.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'MedicalTherapy',
            'name': 'New Patient Special for Self-Pay Patients',
            'description': 'Affordable introductory package for self-pay acupuncture patients on Oahu.'
          }
        }
      ]
    };
    const aieaHomeSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      'name': 'AcuTherapy Clinics - Aiea',
      '@id': 'https://acutherapy.com/#aiea',
      'url': 'https://acutherapy.com/aiea-pearl-city-clinic',
      'telephone': '+1-808-452-1900',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '98-211 Pali Momi St, Suite 604',
        'addressLocality': 'Aiea',
        'addressRegion': 'HI',
        'postalCode': '96701',
        'addressCountry': 'US'
      },
      'openingHoursSpecification': hoursAiea,
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '15',
        'bestRating': '5',
        'worstRating': '1'
      },
      'review': [
        {
          '@type': 'Review',
          'author': { '@type': 'Person', 'name': 'Brian Gorberg' },
          'datePublished': '2025-02-17',
          'reviewBody': "Incredible experience! I never tried acupuncture before my first visit. I had suffered a disc herniation in September, which resulted in nerve damage in my left leg. Doctor David helped relieve this with acupuncture. I was very scared because I have needles but David made me feel comfortable and confident in his skills. When he put the needles in me, I felt a crazy muscle twitching sensation in my whole left leg. It felt like an electric shock. It wasn't painful at all, but it sure did feel weird. I laid still for 20 minutes with the needles in my leg. It felt like my muscle knot was being released. I honestly didn't feel the true effects until two days later. I finally was able to surf again with no pain! My muscle knot released a lot of tension and my sciatica calmed down. My back felt strong and my whole body feels so much looser. I would recommend this treatment to anyone who has been suffering from mental and physical pain. David is a great doctor!",
          'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' }
        }
      ]
    };
    lilihaSchema.sameAs = [
      'https://maps.app.goo.gl/j2tVyh4dqUh2Ly1h6',
      'https://www.yelp.com/biz/acutherapy-clinics-honolulu-2'
    ];
    aieaHomeSchema.sameAs = [
      'https://maps.app.goo.gl/1XQ73VZBLDMwyEBW9',
      'https://www.yelp.com/biz/acutherapy-clinics-aiea'
    ];
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalOrganization',
      '@id': 'https://acutherapy.com/#organization',
      'name': 'AcuTherapy Clinics',
      'url': 'https://acutherapy.com',
      'logo': 'https://acutherapy.com/logo.png',
      'medicalSpecialty': 'Acupuncture',
      'areaServed': {
        '@type': 'AdministrativeArea',
        'name': 'Oahu, Hawaii'
      },
      'sameAs': [
        'https://maps.app.goo.gl/j2tVyh4dqUh2Ly1h6',
        'https://maps.app.goo.gl/1XQ73VZBLDMwyEBW9',
        'https://www.yelp.com/biz/acutherapy-clinics-honolulu-2',
        'https://www.yelp.com/biz/acutherapy-clinics-aiea'
      ],
      'location': [
        { '@id': 'https://acutherapy.com/#liliha' },
        { '@id': 'https://acutherapy.com/#aiea' }
      ]
    };
    return `<script type="application/ld+json">
${JSON.stringify(lilihaSchema, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(aieaHomeSchema, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(orgSchema, null, 2)}
</script>`;
  }

    // 2. Aiea Clinic / Pearl City pages
  if (route === '/aiea-pearl-city-clinic' || route === '/aiea-acupuncture' || route === '/acupuncture-pearl-city') {
    const aieaSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      'name': 'AcuTherapy Clinics - Aiea (Pali Momi)',
      'logo': `${BASE_URL}/logo.png`,
      'image': `${BASE_URL}/images/dr-david-cai-portrait.jpg`,
      'url': `${BASE_URL}${route}`,
      'description': 'Premier medical acupuncture and pain management branch clinic in Aiea / Pearl City, led by Dr. David Cai.',
      'telephone': '+1-808-452-1900',
      'fax': '+1-808-452-1521',
      'parentOrganization': {
        '@type': 'MedicalOrganization',
        'name': 'AcuTherapy Clinics',
        'url': `${BASE_URL}`
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '98-211 Pali Momi St, Suite 604',
        'addressLocality': 'Aiea',
        'addressRegion': 'HI',
        'postalCode': '96701',
        'addressCountry': 'US'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 21.3853,
        'longitude': -157.9427
      },
      'openingHoursSpecification': hoursAiea,
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '15',
        'bestRating': '5',
        'worstRating': '1'
      },
      'medicalSpecialty': [
        'Acupuncture',
        'PainManagement'
      ]
    };
    aieaSchema.sameAs = [
      'https://maps.app.goo.gl/1XQ73VZBLDMwyEBW9',
      'https://www.yelp.com/biz/acutherapy-clinics-aiea'
    ];
    return `<script type="application/ld+json">
${JSON.stringify(aieaSchema, null, 2)}
</script>`;
  }

  // 3. Honolulu Clinic / Liliha pages
  if (route === '/honolulu-clinic' || route === '/honolulu-acupuncture' || route === '/contact-honolulu-acupuncture' || route === '/en/contact-us-honolulu') {
    const honoluluSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      'name': 'AcuTherapy Clinics - Honolulu (Liliha)',
      'logo': `${BASE_URL}/logo.png`,
      'image': `${BASE_URL}/images/dr-david-cai-portrait.jpg`,
      'url': `${BASE_URL}${route}`,
      'description': 'Premier medical acupuncture and pain management main clinic in Honolulu (Liliha), led by Dr. David Cai.',
      'telephone': '+1-808-528-7177',
      'fax': '+1-808-212-9459',
      'parentOrganization': {
        '@type': 'MedicalOrganization',
        'name': 'AcuTherapy Clinics',
        'url': `${BASE_URL}`
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '1650 Liliha St, Suite 208',
        'addressLocality': 'Honolulu',
        'addressRegion': 'HI',
        'postalCode': '96817',
        'addressCountry': 'US'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 21.321289,
        'longitude': -157.860155
      },
      'openingHoursSpecification': hoursHonolulu,
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '59',
        'bestRating': '5',
        'worstRating': '1'
      },
      'medicalSpecialty': [
        'Acupuncture',
        'PainManagement'
      ]
    };
    honoluluSchema.sameAs = [
      'https://maps.app.goo.gl/j2tVyh4dqUh2Ly1h6',
      'https://www.yelp.com/biz/acutherapy-clinics-honolulu-2'
    ];
    return `<script type="application/ld+json">
${JSON.stringify(honoluluSchema, null, 2)}
</script>`;
  }

  // 4. FAQ page
  if (route === '/frequently-asked-questions') {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'I was in a car accident in Hawaii. Are my acupuncture treatments covered?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes! Hawaii Auto Accident (PIP) claims are typically covered at 100% with $0 out-of-pocket costs at AcuTherapy Clinics. We handle all direct billing and insurance paperwork for you so you can focus completely on your rehabilitation.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you accept HMSA or Kaiser insurance at your clinics?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, we accept major Hawaii health insurance including HMSA, Kaiser, UHA, HMAA, and Medicare. Acupuncture benefits vary by your specific plan tier, and our front desk will happily verify your coverage details for you.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Does acupuncture hurt?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Most patients feel minimal to no pain. The needles are hair-thin, and the treatment is generally very relaxing. Many patients even fall asleep during their session.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How many acupuncture sessions will I need?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The number of sessions depends on your specific condition. Acute issues may resolve in 3-5 sessions, while chronic pain may require 10 or more sessions for lasting relief.'
          }
        }
      ]
    };
    return `<script type="application/ld+json">
${JSON.stringify(faqSchema, null, 2)}
</script>`;
  }

  // 5. Doctor page
  if (route === '/dr-david-cai-honolulu-acupuncturist') {
    const doctorSchema = {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      '@id': `${BASE_URL}/#dr-david-cai`,
      'name': 'Dr. David Cai',
      'honorificPrefix': 'Dr.',
      'honorificSuffix': 'O.M.D., L.Ac., L.M.T.',
      'jobTitle': 'Licensed Acupuncturist & Founder',
      'description': PERSON_SCHEMAS.davidCai.description,
      'image': `${BASE_URL}/images/dr-david-cai-portrait.jpg`,
      'url': `${BASE_URL}/dr-david-cai-honolulu-acupuncturist`,
      'telephone': '+1-808-528-7177',
      'medicalSpecialty': 'Acupuncture',
      'knowsLanguage': ['English', 'Mandarin Chinese'],
      'knowsAbout': [
        'Acupuncture', 'Traditional Chinese Medicine', 'Pain Management', 'Sports Injuries',
        'Auto Accident Recovery', 'Workers\' Compensation Injuries', 'Veterans Care'
      ]
    };
    return `<script type="application/ld+json">
${JSON.stringify(doctorSchema, null, 2)}
</script>`;
  }

  // 6. Fertility page
  if (route === '/fertility-acupuncture-honolulu') {
    const fertilitySchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      '@id': `${BASE_URL}/#liliha`,
      'name': 'AcuTherapy Clinics',
      'url': `${BASE_URL}`,
      'telephone': '+1-808-528-7177',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '1650 Liliha St, Suite 208',
        'addressLocality': 'Honolulu',
        'addressRegion': 'HI',
        'postalCode': '96817',
        'addressCountry': 'US'
      },
      'medicalSpecialty': ['Acupuncture', 'WomensHealth'],
      'knowsAbout': ['Fertility Acupuncture', 'IVF Support', 'PCOS Treatment', 'Women\'s Health TCM', 'CenterGy'],
      'availableService': {
        '@type': 'MedicalProcedure',
        'name': 'Fertility Acupuncture',
        'procedureType': 'https://schema.org/TherapeuticProcedure',
        'description': 'Acupuncture and Traditional Chinese Medicine to support fertility, including IVF preparation, PCOS management, and hormonal regulation.',
        'bodyLocation': 'Reproductive System'
      }
    };
    return `<script type="application/ld+json">
${JSON.stringify(fertilitySchema, null, 2)}
</script>`;
  }

  // 7. Moxibustion page
  if (route === '/moxibustion-honolulu') {
    const moxSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      '@id': `${BASE_URL}/#liliha`,
      'name': 'AcuTherapy Clinics',
      'url': `${BASE_URL}`,
      'telephone': '+1-808-528-7177',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '1650 Liliha St, Suite 208',
        'addressLocality': 'Honolulu',
        'addressRegion': 'HI',
        'postalCode': '96817',
        'addressCountry': 'US'
      },
      'medicalSpecialty': 'Acupuncture',
      'availableService': {
        '@type': 'MedicalProcedure',
        'name': 'Moxibustion',
        'procedureType': 'https://schema.org/TherapeuticProcedure',
        'description': 'Traditional Chinese Medicine heat therapy using burning mugwort to warm meridian channels, relieve cold-pattern pain, and strengthen Qi.'
      }
    };
    return `<script type="application/ld+json">
${JSON.stringify(moxSchema, null, 2)}
</script>`;
  }

  // 8. Brain Reset Through Your Ear page
  if (route === '/brainreset') {
    const earFaqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Is this treatment truly needle-free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Brain Reset Through Your Ear™ uses tiny vaccaria seeds or gold beads taped to specific points on the outer ear — no needles penetrate the skin at any point. It is a form of auricular acupressure, not acupuncture with needles.' } },
        { '@type': 'Question', 'name': "I'm afraid of needles. Can I still get acupuncture benefits?", 'acceptedAnswer': { '@type': 'Answer', 'text': 'Absolutely. Auricular acupressure activates many of the same meridian points as needle acupuncture, delivered through gentle pressure. Many patients who come to us specifically because of needle phobia find this an ideal entry point.' } },
        { '@type': 'Question', 'name': 'How long do the ear seeds stay on?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ear seeds typically stay in place 3–7 days. You press them gently 3–5 times per day to stimulate the points.' } },
        { '@type': 'Question', 'name': 'Can ear seeds help with anxiety and stress?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes — the Shen Men (Spirit Gate) and autonomic nervous system points on the ear have well-documented calming effects. Stimulating these points activates the vagus nerve, helping shift the body out of fight-or-flight and into a more restful state.' } },
        { '@type': 'Question', 'name': 'Can ear seeds help with PTSD or trauma responses?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The U.S. Department of Defense and VA have used the Battlefield Acupuncture protocol — an ear seed variant — with veterans experiencing PTSD and combat stress.' } },
        { '@type': 'Question', 'name': 'Can ear seeds improve sleep?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Many patients report improved sleep quality within the first week of treatment. Points targeting the Shen Men, Heart, and Kidney zones on the ear help quiet the mind and support deeper, more restorative rest.' } },
        { '@type': 'Question', 'name': 'How many sessions will I need?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Most patients notice a difference within 2–3 sessions. For chronic stress, anxiety, or pain, a course of 6–8 weekly sessions is typical, followed by maintenance visits every 2–4 weeks.' } },
        { '@type': 'Question', 'name': 'Is ear seed therapy covered by insurance?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Sessions are often covered under Workers' Compensation, Auto Accident PIP (Hawaii No-Fault), and Veterans Community Care. UHA, HMAA, and select Medicare Supplement plans may also apply. Call us at (808) 528-7177 to verify your specific coverage before your first visit." } },
        { '@type': 'Question', 'name': 'Can I drive home after the treatment?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Unlike some procedures that require recovery time, ear seed therapy produces no sedation or impairment. Most patients return to normal activities immediately after their appointment.' } },
      ]
    };
    return `<script type="application/ld+json">
${JSON.stringify(earFaqSchema, null, 2)}
</script>`;
  }

  // 9. Brain Reset for Weight Loss page
  if (route === '/weight-loss') {
    const weightLossFaqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Can ear seeds actually reduce cravings?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Clinical studies show that stimulating specific ear points — particularly the Hunger Point, Shen Men, and Endocrine point — can reduce appetite signals and the intensity of food cravings.' } },
        { '@type': 'Question', 'name': 'Is this for emotional eating or physical hunger?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Both, but it's especially effective for stress-driven and emotional eating — the kind where you're not physically hungry but find yourself reaching for food anyway." } },
        { '@type': 'Question', 'name': 'Will ear seed therapy actually make me lose weight?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ear seed therapy is a supportive tool, not a weight-loss medication. It does not directly burn fat or alter metabolism. What it does is help reduce the cravings, stress eating, and sleep disruption that make it harder to stick to healthier habits.' } },
        { '@type': 'Question', 'name': "I'm on Ozempic (semaglutide). Can I combine ear seed therapy?", 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Ear seed therapy and GLP-1 medications work through entirely different mechanisms and do not interact. Many patients on Ozempic still struggle with stress eating and emotional triggers — ear seeds specifically address these patterns.' } },
        { '@type': 'Question', 'name': 'How many sessions does it take to notice a difference?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Many patients notice reduced craving intensity within 2–3 sessions. For sustained behavior change, a course of 6–8 weekly sessions followed by monthly maintenance is typical.' } },
        { '@type': 'Question', 'name': 'What is the Auricular Hunger Point?', 'acceptedAnswer': { '@type': 'Answer', 'text': "The Hunger Point (also called the Appetite Control point) is a specific location on the inner edge of the ear's tragus. Stimulating it is thought to influence hypothalamic hunger signals and reduce the urge to eat between meals." } },
        { '@type': 'Question', 'name': 'Is this covered by insurance?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Craving and appetite support visits are typically not covered as standalone weight-loss treatments. However, if stress, anxiety, or pain are documented contributing factors, Workers' Compensation, Auto Accident PIP, Veterans Community Care, and certain UHA / HMAA plans may apply. Call (808) 528-7177 to discuss your coverage before booking." } },
      ]
    };
    return `<script type="application/ld+json">
${JSON.stringify(weightLossFaqSchema, null, 2)}
</script>`;
  }

  // 10. Facial Acupuncture page
  if (route === '/facial-acupuncture-honolulu') {
    const facialFaqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'What is facial acupuncture and how does it work?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Facial acupuncture uses ultra-fine needles placed at precise points on the face, scalp, and body to stimulate collagen production, increase local circulation, and activate the skin's natural repair cycle. In Traditional Chinese Medicine, the face is a map of internal organ health — by addressing both the surface and the underlying Qi flow, facial acupuncture produces results that topical skincare alone cannot achieve." } },
        { '@type': 'Question', 'name': "How is AcuTherapy's approach different from standard facial acupuncture?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Dr. Cai combines classical Chinese facial acupuncture technique with AcuTherapy's signature CenterGy diagnostic method — a precision energy-mapping system he co-developed with Lisa Long. Before any needles are placed, Dr. Cai identifies the specific meridian imbalances contributing to your skin concerns, allowing point selection to be individualized to your constitution." } },
        { '@type': 'Question', 'name': 'How many sessions do I need to see results?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Most patients notice improved brightness, reduced puffiness, and a more even skin tone after 3–4 sessions. Visible lifting and fine line reduction typically emerge over a course of 8–12 weekly sessions. Results are cumulative — each session builds on the last.' } },
        { '@type': 'Question', 'name': 'Does facial acupuncture hurt?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Facial needles are among the finest used in acupuncture practice — most patients describe a brief pressure sensation at insertion, followed by a deep relaxation during the session. Many patients fall asleep on the table.' } },
        { '@type': 'Question', 'name': 'Can facial acupuncture replace Botox or dermal fillers?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Facial acupuncture works by stimulating the body's own collagen synthesis and retraining facial muscle tone — the result looks more natural and improves over time. Many patients choose it as a natural alternative or to extend the interval between injectable appointments." } },
        { '@type': 'Question', 'name': 'Is facial acupuncture effective for acne?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Acne in TCM is often linked to excess Heat, Dampness, or Liver Qi stagnation. Facial acupuncture combined with body points targeting these root causes can significantly reduce active breakouts, calm inflammation, and improve acne-scarred skin over a treatment course.' } },
        { '@type': 'Question', 'name': 'How long do results last?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'After a full course (8–12 sessions), results typically persist 6–12 months with monthly maintenance. Collagen built through acupuncture is your own — the quality of results tends to improve over successive treatment courses.' } },
        { '@type': 'Question', 'name': 'Is facial acupuncture covered by insurance?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Facial acupuncture is a cosmetic / elective treatment and is not covered by health insurance, Workers\' Compensation, or Auto PIP. Sessions are self-pay. Please call (808) 528-7177 for current pricing and package options.' } },
      ]
    };
    return `<script type="application/ld+json">
${JSON.stringify(facialFaqSchema, null, 2)}
</script>`;
  }

  // 11. Stress Relief page
  if (route === '/stress-relief-acupuncture-honolulu') {
    return `<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'How does acupuncture help with stress?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Acupuncture activates the parasympathetic nervous system — reducing cortisol, relaxing muscle tension, and slowing heart rate. It also addresses the TCM root pattern: Liver Qi stagnation or Heart-Spleen deficiency.' } },
    { '@type': 'Question', 'name': 'How quickly will I notice a difference?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Many patients feel a measurable shift during the first session. By sessions 3–5, most report sleeping better and reacting less intensely to stressors.' } },
    { '@type': 'Question', 'name': 'How many sessions do I need?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'For acute stress: 4–6 sessions. For chronic stress or burnout: 8–12 sessions, with monthly maintenance to sustain results.' } },
    { '@type': 'Question', 'name': 'Can acupuncture help with anxiety as well as physical tension?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes — physical tension and mental anxiety arise from the same underlying dysregulation. Acupuncture addresses both simultaneously.' } },
    { '@type': 'Question', 'name': 'What makes AcuTherapy different for stress relief?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Dr. Cai uses the CenterGy diagnostic method to identify your specific stress pattern — Liver, Heart, or Kidney — and builds a personalized session rather than applying a standard protocol. Needle-free CenterGy therapy is also available.' } },
  ]
}, null, 2)}
</script>`;
  }

  // 12. Sleep Improvement page
  if (route === '/sleep-acupuncture-honolulu') {
    return `<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'Can acupuncture really help me sleep better?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Acupuncture stimulates melatonin secretion, reduces night-time cortisol through HPA axis modulation, and activates parasympathetic tone. In TCM, sleep disruption traces to Heart Yin deficiency, Liver stagnation, or Kidney deficiency — each treated differently.' } },
    { '@type': 'Question', 'name': 'How long before I notice improvement?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Many patients sleep better the night of their first session. Consistent improvement across the week typically emerges after sessions 2–4.' } },
    { '@type': 'Question', 'name': 'What types of sleep problems does acupuncture address?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Difficulty falling asleep, waking in the night (especially 2–4am), non-restorative sleep, and sleep disrupted by anxiety or stress. Treatment is individualized to the pattern causing your specific type of disruption.' } },
    { '@type': 'Question', 'name': 'Is it safe to receive acupuncture while taking sleep medication?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Acupuncture does not interact with sleep medications. Many patients use it to gradually reduce reliance on sleep aids. Always consult your prescribing physician before changing medication.' } },
    { '@type': 'Question', 'name': 'How many sessions will I need?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'For recent-onset insomnia: 4–6 sessions. For chronic insomnia: 8–12 sessions, with monthly maintenance to prevent regression.' } },
  ]
}, null, 2)}
</script>`;
  }

  // 13. General Wellness page
  if (route === '/wellness-acupuncture-honolulu') {
    return `<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'Do I need to have a health problem to benefit from acupuncture?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. Many of our most consistent patients come specifically because they are healthy and want to stay that way. Acupuncture builds resilience — strengthening organ function, regulating immune response, and optimizing energy distribution before imbalances become symptoms.' } },
    { '@type': 'Question', 'name': 'How often should a healthy person receive acupuncture?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Most wellness patients come monthly or seasonally — at the transition of each season. TCM traditionally recommends a tune-up as the body\'s dominant energy shifts with the natural cycle. Dr. Cai will make a specific recommendation based on your assessment.' } },
    { '@type': 'Question', 'name': 'Can acupuncture support immune function?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Regular acupuncture increases natural killer cell activity, T-lymphocyte function, and regulates inflammatory cytokine production — building the body\'s defensive capacity over time.' } },
    { '@type': 'Question', 'name': 'What is the CenterGy method and how does it apply to wellness?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'CenterGy is a precision diagnostic and therapeutic system co-developed by Dr. Cai and Lisa Long. It maps energy distribution across meridians and organ systems, identifying patterns of imbalance that aren\'t yet producing symptoms — allowing correction at the earliest stage. It can be applied with or without needles.' } },
    { '@type': 'Question', 'name': 'What is the difference between wellness acupuncture and treatment for a condition?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The goal differs, not the quality of care. Wellness acupuncture is maintenance-oriented — less intensive, more preventive. The diagnostic rigor is the same: Dr. Cai conducts a full CenterGy assessment at every visit.' } },
  ]
}, null, 2)}
</script>`;
  }

  // 14. Condition pages → FAQPage schema (Q&As sourced from noscript bodies)
  if (route === '/back-pain-acupuncture-honolulu') {
    return `<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'Does acupuncture help back pain?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Research suggests acupuncture may help reduce pain intensity and improve function in patients with low back pain. Individual results vary based on the type and duration of the condition.' } },
    { '@type': 'Question', 'name': 'How many sessions are needed for back pain?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Many patients notice improvement within the first 4–6 sessions. Chronic conditions typically require a longer course of care. Dr. Cai will outline a treatment plan at your first visit.' } },
    { '@type': 'Question', 'name': 'Is back pain acupuncture covered by insurance in Hawaii?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Yes — Workers' Compensation and Auto Accident PIP (Hawaii No-Fault) fully cover acupuncture for back injuries with $0 out of pocket. We also accept UHA, HMAA, Veterans Community Care, AARP, Humana, AshLink, and more." } },
  ]
}, null, 2)}
</script>`;
  }

  if (route === '/sciatica-treatment-honolulu' || route === '/sciatica-acupuncture-honolulu') {
    return `<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'Can acupuncture help sciatica?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Clinical research suggests acupuncture may reduce sciatic pain and improve function. It is commonly used alongside physical therapy and may help reduce reliance on pain medications.' } },
    { '@type': 'Question', 'name': 'How many sessions does sciatica treatment require?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Acute flare-ups may resolve in 4–8 sessions. Long-standing or disc-related sciatica typically requires a longer course. Dr. Cai will assess your case at the first visit and provide a realistic timeline.' } },
    { '@type': 'Question', 'name': 'Is acupuncture for sciatica covered by insurance in Hawaii?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Workers' Compensation and Hawaii No-Fault Auto PIP cover sciatica treatment at $0 out of pocket when caused by a workplace or auto accident. We also accept UHA, HMAA, Veterans Community Care, AARP, Humana, and AshLink." } },
  ]
}, null, 2)}
</script>`;
  }

  if (route === '/workers-comp-injury-honolulu') {
    return `<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': "Is acupuncture covered by Workers' Comp in Hawaii?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Yes. Licensed acupuncturists are recognized providers under Hawaii's Workers' Compensation system. Treatment must be related to the workplace injury and authorized by the claim." } },
    { '@type': 'Question', 'name': "Do I need a doctor's referral for Workers' Comp acupuncture?", 'acceptedAnswer': { '@type': 'Answer', 'text': "No. In Hawaii, you can see a licensed acupuncturist directly under Workers' Comp without a referral. We will coordinate with your adjuster to confirm coverage before your first visit." } },
    { '@type': 'Question', 'name': 'How soon can I start acupuncture after a workplace injury?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'In most cases, we can schedule your first appointment within the same week your claim is confirmed. Early treatment typically leads to faster recovery and reduced total claim costs.' } },
  ]
}, null, 2)}
</script>`;
  }

  if (route === '/auto-accident-injury-honolulu') {
    return `<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'Does Hawaii PIP insurance cover acupuncture after a car accident?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Hawaii No-Fault PIP covers acupuncture by a licensed acupuncturist for injuries sustained in a covered auto accident.' } },
    { '@type': 'Question', 'name': 'Do I need a police report to use Hawaii PIP for acupuncture?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Not necessarily. A police report strengthens your claim but is not always required to open a PIP claim. Contact your insurer as soon as possible after the accident.' } },
    { '@type': 'Question', 'name': 'What happens if my PIP benefit runs out?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'If your PIP benefit ($10,000 minimum) is exhausted, we can transition billing to other insurance such as UHA, HMAA, Medicare Supplement, or continue care on a private-pay basis.' } },
  ]
}, null, 2)}
</script>`;
  }

  // 15. Neighborhood / locality pages → MedicalClinic with areaServed
  const NEIGHBORHOOD_MAP = {
    '/acupuncture-waikiki':    { area: 'Waikiki',    clinic: 'liliha' },
    '/waikiki-acupuncture':    { area: 'Waikiki',    clinic: 'liliha' },
    '/acupuncture-kahala':     { area: 'Kahala',     clinic: 'liliha' },
    '/kahala-acupuncture':     { area: 'Kahala',     clinic: 'liliha' },
    '/acupuncture-manoa':      { area: 'Manoa',      clinic: 'liliha' },
    '/acupuncture-hawaii-kai': { area: 'Hawaii Kai', clinic: 'liliha' },
    '/acupuncture-kaimuki':    { area: 'Kaimuki',    clinic: 'liliha' },
    '/acupuncture-ala-moana':  { area: 'Ala Moana',  clinic: 'liliha' },
    '/acupuncture-kapahulu':   { area: 'Kapahulu',   clinic: 'liliha' },
    '/acupuncture-moiliili':   { area: 'Moiliili',   clinic: 'liliha' },
    '/acupuncture-kakaako':    { area: 'Kakaako',    clinic: 'liliha' },
    '/acupuncture-makiki':     { area: 'Makiki',     clinic: 'liliha' },
    '/honolulu-acupuncture':   { area: 'Honolulu',   clinic: 'liliha' },
    '/acupuncture-waipahu':    { area: 'Waipahu',    clinic: 'aiea'   },
    '/acupuncture-kapolei':    { area: 'Kapolei',    clinic: 'aiea'   },
  };
  const neighborhoodInfo = NEIGHBORHOOD_MAP[route];
  if (neighborhoodInfo) {
    const isLiliha = neighborhoodInfo.clinic === 'liliha';
    const neighborhoodSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      'name': isLiliha ? 'AcuTherapy Clinics - Liliha (Honolulu)' : 'AcuTherapy Clinics - Aiea',
      '@id': isLiliha ? 'https://acutherapy.com/#liliha' : 'https://acutherapy.com/#aiea',
      'url': isLiliha ? 'https://acutherapy.com/honolulu-clinic' : 'https://acutherapy.com/aiea-pearl-city-clinic',
      'telephone': isLiliha ? '+1-808-528-7177' : '+1-808-452-1900',
      'address': isLiliha ? {
        '@type': 'PostalAddress',
        'streetAddress': '1650 Liliha St, Suite 208',
        'addressLocality': 'Honolulu',
        'addressRegion': 'HI',
        'postalCode': '96817',
        'addressCountry': 'US'
      } : {
        '@type': 'PostalAddress',
        'streetAddress': '98-211 Pali Momi St, Suite 604',
        'addressLocality': 'Aiea',
        'addressRegion': 'HI',
        'postalCode': '96701',
        'addressCountry': 'US'
      },
      'geo': isLiliha ? {
        '@type': 'GeoCoordinates',
        'latitude': 21.321289,
        'longitude': -157.860155
      } : {
        '@type': 'GeoCoordinates',
        'latitude': 21.3853,
        'longitude': -157.9427
      },
      'areaServed': {
        '@type': 'Place',
        'name': neighborhoodInfo.area + ', Oahu, Hawaii'
      },
      'openingHoursSpecification': isLiliha ? hoursHonolulu : hoursAiea,
      'medicalSpecialty': 'Acupuncture',
      'priceRange': '$$',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': isLiliha ? '64' : '15',
        'bestRating': '5',
        'worstRating': '1'
      },
      'parentOrganization': {
        '@type': 'MedicalOrganization',
        'name': 'AcuTherapy Clinics',
        'url': 'https://acutherapy.com'
      }
    };
    return `<script type="application/ld+json">\n${JSON.stringify(neighborhoodSchema, null, 2)}\n</script>`;
  }

  // 15. Default clean WebPage schema for other pages
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': description ? description.split('.')[0] : 'AcuTherapy Clinics',
    'description': description || 'AcuTherapy Clinics provides expert acupuncture, massage therapy, and Traditional Chinese Medicine in Honolulu and Aiea, Hawaii.',
    'url': `${BASE_URL}${route}`,
    'publisher': {
      '@type': 'MedicalOrganization',
      'name': 'AcuTherapy Clinics',
      'url': `${BASE_URL}`
    }
  };
  return `<script type="application/ld+json">
${JSON.stringify(webPageSchema, null, 2)}
</script>`;
}

function buildNavLinks(currentRoute) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/acupuncture-honolulu', label: 'Acupuncture in Honolulu' },
    { href: '/book-appointment', label: 'Book an Appointment' },
  ].filter((l) => l.href !== currentRoute);

  return links
    .slice(0, 3)
    .map((l) => `<a href="${l.href}">${l.label}</a>`)
    .join('\n      ');
}

function buildHeadTags(route, meta) {
  const url = `${BASE_URL}${route}`;
  const safeTitle = escapeAttr(meta.title);
  const safeDesc = escapeAttr(meta.description);
  const safeUrl = escapeAttr(url);
  const safeImage = escapeAttr(OG_IMAGE);

  const tags = [
    `<meta name="description" content="${safeDesc}">`,
    `<link rel="canonical" href="${safeUrl}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${safeTitle}">`,
    `<meta property="og:description" content="${safeDesc}">`,
    `<meta property="og:url" content="${safeUrl}">`,
    `<meta property="og:image" content="${safeImage}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${safeTitle}">`,
    `<meta name="twitter:description" content="${safeDesc}">`,
    `<meta name="twitter:image" content="${safeImage}">`,
    buildJsonLd(route, meta.description),
  ];

  return tags.join('\n    ');
}

function buildRootContent(route, meta) {
    const navLinks = buildNavLinks(route);
    if (route === '/' || route === '') {
      return `<div id="root"></div><noscript>${HOME_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/about') {
      return `<div id="root"></div><noscript>${ABOUT_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/dr-david-cai-honolulu-acupuncturist') {
      return `<div id="root"></div><noscript>${DAVID_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/fire-cupping-therapy-honolulu' || route === '/cupping-gua-sha-honolulu') {
      return `<div id="root"></div><noscript>${CUPPING_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/fertility-acupuncture-honolulu') {
      return `<div id="root"></div><noscript>${FERTILITY_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/insurance-accepted') {
      return `<div id="root"></div><noscript>${INSURANCE_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/acupuncture-kakaako') {
      return `<div id="root"></div><noscript>${KAKAAKO_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/moxibustion-honolulu') {
      return `<div id="root"></div><noscript>${MOXIBUSTION_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/acupuncture-makiki') {
      return `<div id="root"></div><noscript>${MAKIKI_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/back-pain-acupuncture-honolulu') {
      return `<div id="root"></div><noscript>${BACK_PAIN_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/sciatica-treatment-honolulu') {
      return `<div id="root"></div><noscript>${SCIATICA_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/sciatica-acupuncture-honolulu') {
      return `<div id="root"></div><noscript>${SCIATICA_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/neck-pain-treatment-honolulu') {
      return `<div id="root"></div><noscript>${NECK_PAIN_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/workers-comp-injury-honolulu') {
      return `<div id="root"></div><noscript>${WORKERS_COMP_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/auto-accident-injury-honolulu') {
      return `<div id="root"></div><noscript>${AUTO_ACCIDENT_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/brainreset') {
      return `<div id="root"></div><noscript>${EAR_SEED_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/weight-loss') {
      return `<div id="root"></div><noscript>${WEIGHT_LOSS_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/stress-relief-acupuncture-honolulu') {
      return `<div id="root"></div><noscript>${STRESS_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/sleep-acupuncture-honolulu') {
      return `<div id="root"></div><noscript>${SLEEP_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/wellness-acupuncture-honolulu') {
      return `<div id="root"></div><noscript>${WELLNESS_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/facial-acupuncture-honolulu') {
      return `<div id="root"></div><noscript>${FACIAL_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/acupuncture-waikiki' || route === '/waikiki-acupuncture') {
      return `<div id="root"></div><noscript>${WAIKIKI_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/acupuncture-kahala' || route === '/kahala-acupuncture') {
      return `<div id="root"></div><noscript>${KAHALA_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/acupuncture-manoa') {
      return `<div id="root"></div><noscript>${MANOA_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/acupuncture-hawaii-kai') {
      return `<div id="root"></div><noscript>${HAWAII_KAI_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/acupuncture-kaimuki') {
      return `<div id="root"></div><noscript>${KAIMUKI_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/acupuncture-ala-moana') {
      return `<div id="root"></div><noscript>${ALA_MOANA_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/acupuncture-kapahulu') {
      return `<div id="root"></div><noscript>${KAPAHULU_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/acupuncture-moiliili') {
      return `<div id="root"></div><noscript>${MOILIILI_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/honolulu-acupuncture') {
      return `<div id="root"></div><noscript>${HONOLULU_GENERIC_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/acupuncture-waipahu') {
      return `<div id="root"></div><noscript>${WAIPAHU_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    if (route === '/acupuncture-kapolei') {
      return `<div id="root"></div><noscript>${KAPOLEI_NOSCRIPT_BODY}<nav>
      ${navLinks}
  </nav></noscript>`;
    }
    return `<div id="root"></div><noscript><h1>${meta.h1}</h1><p>${escapeAttr(meta.description)}</p><nav>
      ${navLinks}

  </nav></noscript>`;
  }

function generateHtml(template, route) {
  const meta = getPageMeta(route);
  let html = template;

  // Replace <title>...</title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(meta.title)}</title>`);

  // Inject head tags before </head>
  const headTags = buildHeadTags(route, meta);
  html = html.replace('</head>', `    ${headTags}\n  </head>`);

  // Replace <div id="root">...</div> (including any existing content, possibly multiline)
  const rootContent = buildRootContent(route, meta);
  html = html.replace(/<div id="root">[\s\S]*?<\/div>(\s*<noscript>[\s\S]*?<\/noscript>)?/, rootContent);

  return html;
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function getOutputPath(route) {
  if (route === '/') {
    return path.join('dist', 'index.html');
  }
  // Strip leading slash and build nested path
  const stripped = route.replace(/^\//, '');
  return path.join('dist', stripped, 'index.html');
}

// Main
const templatePath = path.join('dist', 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');
let count = 0;

for (const route of ALL_ROUTES) {
  const outputPath = getOutputPath(route);
  const outputDir = path.dirname(outputPath);

  ensureDir(outputDir);

  const html = generateHtml(template, route);
  fs.writeFileSync(outputPath, html, 'utf8');
  count++;
}

console.log(`✅ Generated static HTML for ${count} pages.`);
