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
];

const PAGE_DATA = {
  '/': {
    title: 'AcuTherapy Clinics – Acupuncture & TCM in Honolulu, Hawaii',
    description:
      'Licensed acupuncture and Traditional Chinese Medicine clinics in Honolulu. Expert treatment for back pain, sciatica, neck pain, sports injuries. Multiple Oahu locations. New patient specials.',
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

function buildJsonLd(route, description) {
  const hours = [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '12:00',
    },
  ];
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      '@id': `${BASE_URL}/#liliha`,
      name: 'AcuTherapy Clinics – Liliha (Honolulu)',
      url: `${BASE_URL}/`,
      description: description,
      medicalSpecialty: 'Acupuncture',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1650 Liliha St, Suite 208',
        addressLocality: 'Honolulu',
        addressRegion: 'HI',
        postalCode: '96817',
        addressCountry: 'US',
      },
      telephone: '+18085287177',
      image: OG_IMAGE,
      priceRange: '$$',
      openingHoursSpecification: hours,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '59',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      '@id': `${BASE_URL}/#aiea`,
      name: 'AcuTherapy Clinics – Aiea (Pearl City)',
      url: `${BASE_URL}/aiea-clinic`,
      description: description,
      medicalSpecialty: 'Acupuncture',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '98-211 Pali Momi St, Suite 604',
        addressLocality: 'Aiea',
        addressRegion: 'HI',
        postalCode: '96701',
        addressCountry: 'US',
      },
      telephone: '+18084521900',
      image: OG_IMAGE,
      priceRange: '$$',
      openingHoursSpecification: hours,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '15',
        bestRating: '5',
        worstRating: '1',
      },
    },
  ];

  // Append Person schemas based on route
  const personSchemas = [];
  if (route === '/dr-david-cai-honolulu-acupuncturist') {
    personSchemas.push(PERSON_SCHEMAS.davidCai);
  } else if (route === '/about') {
    personSchemas.push(PERSON_SCHEMAS.davidCai, PERSON_SCHEMAS.lisaLong);
  }

  const allSchemas = [...schemas, ...personSchemas];
  return `<script type="application/ld+json">\n${JSON.stringify(allSchemas, null, 2)}\n</script>`;
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
