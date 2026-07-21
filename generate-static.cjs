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
  '/lgzf',
  '/constitution-test',
  '/constitution-teaser',
];

const PAGE_DATA = {
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
    title: 'Fire Cupping Therapy in Honolulu | AcuTherapy Clinics',
    description:
      'Traditional fire cupping therapy in Honolulu. Relieves muscle tension, improves circulation, and treats back pain and sports injuries.',
    h1: 'Fire Cupping Therapy – Honolulu, Hawaii',
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
    description: 'AcuTherapy Clinics Honolulu — 1650 Liliha St, Suite 208. Licensed acupuncture, TCM, and medical massage. Call (808) 528-7177. Mon–Fri 9–1, Sat 9–12.',
    h1: 'AcuTherapy Clinics – Honolulu (Liliha)',
  },
  '/aiea-pearl-city-clinic': {
    title: 'AcuTherapy Clinics Aiea – Pearl City Location',
    description: 'AcuTherapy Clinics Aiea — 98-211 Pali Momi St, Suite 604. Licensed acupuncture and TCM near Pearl City. Call (808) 452-1900. Mon–Fri 9–1, Sat 9–12.',
    h1: 'AcuTherapy Clinics – Aiea (Pearl City)',
  },
  '/insurance-accepted': {
    title: 'Insurance Accepted | AcuTherapy Clinics Honolulu',
    description: "AcuTherapy Clinics accepts Workers' Comp, Auto Accident PIP, Veterans Care, UHA, HMAA, AARP, Humana, AshLink, and more. Many patients pay $0 out of pocket.",
    h1: 'Insurance Accepted – AcuTherapy Clinics',
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
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'NCCAOM Diplomate of Acupuncture', identifier: '962-1001-522' },
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
<p>Monday&ndash;Friday 9:00 AM &ndash; 1:00 PM | Saturday 9:00 AM &ndash; 12:00 PM | Sunday closed</p>`;

const DAVID_NOSCRIPT_BODY = `<h1>Dr. David Cai, O.M.D., L.Ac., L.M.T.</h1>
<p>Founder of AcuTherapy Clinics in Honolulu and Aiea, Hawaii. Licensed acupuncturist with over 30 years of clinical experience.</p>
<h2>About Dr. Cai</h2>
<p>Dr. David Cai graduated in 1991 from the Beijing University of Chinese Medicine with specialties in Chinese Medicine, Tuina (therapeutic massage), and herbal medicine. He later served as a distinguished lecturer and practitioner at the university and its affiliated hospital. Over more than three decades, Dr. Cai has built clinics across Beijing, the Washington DC metropolitan area, and Honolulu.</p>
<p>From 1999 to 2002, he served as a research consultant at George Washington University Medical Center on an NIH-funded clinical trial of acupuncture for carpal tunnel syndrome (sponsored by NIAMS). He is co-editor of <em>An Illustrated Chinese Materia Medica</em> (Oxford University Press, 2005).</p>
<h2>Credentials</h2>
<ul>
<li>Hawaii Licensed Acupuncturist (License #ACU-1125)</li>
<li>Hawaii Licensed Massage Therapist (License #7543)</li>
<li>NCCAOM Diplomate of Acupuncture (#962-1001-522)</li>
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
<p>Monday&ndash;Friday 9:00 AM &ndash; 1:00 PM | Saturday 9:00 AM &ndash; 12:00 PM | Sunday closed</p>
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
<p>Hours: Monday&ndash;Friday 9:00 AM &ndash; 1:00 PM | Saturday 9:00 AM &ndash; 12:00 PM | Sunday closed</p>
<h2>Our Practitioners</h2>
<p>Dr. David Cai, O.M.D., L.Ac., L.M.T. &mdash; Founder, 30+ years of clinical experience, Beijing University of Chinese Medicine graduate, NIH-funded research consultant at George Washington University Medical Center.</p>
<p>Lisa Long, O.M.D., L.M.T. &mdash; Senior massage therapist with 30+ years of experience, co-developer of CenterGy (Synergies), serving both Liliha and Aiea locations.</p>
<h2>Patient Reviews</h2>
<p>Rated 4.9 stars across 79 Google reviews at both locations. Patients consistently highlight pain relief outcomes, Dr. Cai&rsquo;s holistic approach, and the clinic&rsquo;s welcoming atmosphere.</p>`;

function buildJsonLd(route, description) {
  const hoursAiea = [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00',
    },
  ];

  const hoursHonolulu = [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00',
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
    return `<script type="application/ld+json">
${JSON.stringify(lilihaSchema, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(aieaHomeSchema, null, 2)}
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

  // 6. Default clean WebPage schema for other pages
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
