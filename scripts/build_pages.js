import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
    // 10 core pages from user prompt
    { url: '/', title: 'Acupuncture Honolulu | Pain & Injury Treatment | AcuTherapy Clinics', h1: 'Honolulu Pain & Injury Acupuncture Clinic', h2s: ['Expert Acupuncture Treatment in Honolulu', 'Why Patients Choose AcuTherapy Clinics', 'Conditions We Treat', 'Our Treatments'], images: ['honolulu-acupuncture-clinic.jpg', 'acupuncture-treatment-honolulu.jpg', 'dr-cai-acupuncture-treatment.jpg'], meta: 'If you are suffering from chronic pain, injury, or stress-related health problems, acupuncture can help restore your body’s natural balance in Honolulu.' },
    { url: '/acupuncture-honolulu', title: 'Acupuncture Honolulu | Natural Pain Relief | AcuTherapy Clinics', h1: 'Professional Acupuncture Treatment in Honolulu', h2s: ['How Acupuncture Works', 'Acupuncture for Pain Relief'], images: ['acupuncture-needles-treatment.jpg', 'acupuncture-point-diagram.jpg', 'acupuncture-therapy-honolulu.jpg'], meta: 'Acupuncture is a natural and effective treatment that has been used for thousands of years to relieve pain and improve overall health in Honolulu.' },
    { url: '/back-pain-acupuncture-honolulu', title: 'Back Pain Acupuncture Honolulu | Natural Pain Relief', h1: 'Acupuncture for Back Pain in Honolulu', h2s: ['Benefits of Acupuncture for Back Pain'], images: ['back-pain-acupuncture-treatment.jpg', 'spine-acupuncture-points.jpg', 'lower-back-acupuncture.jpg'], meta: 'Back pain is one of the most common reasons patients seek acupuncture treatment in Honolulu.' },
    { url: '/sciatica-acupuncture-honolulu', title: 'Sciatica Acupuncture Honolulu | Natural Sciatic Nerve Pain Relief', h1: 'Acupuncture Treatment for Sciatica', h2s: ['How Acupuncture Helps Sciatica'], images: ['sciatica-nerve-diagram.jpg', 'sciatica-acupuncture-treatment.jpg'], meta: 'Sciatica pain occurs when the sciatic nerve becomes compressed or irritated. Acupuncture helps reduce nerve inflammation.' },
    { url: '/neck-pain-treatment-honolulu', title: 'Neck Pain Treatment Honolulu | AcuTherapy Clinics', h1: 'Acupuncture for Neck Pain', h2s: ['Common Causes of Neck Pain'], images: ['neck-pain-acupuncture-treatment.jpg', 'neck-muscle-diagram.jpg'], meta: 'Neck pain is often caused by muscle tension, poor posture, or injury. Acupuncture helps relieve neck pain by relaxing muscles.' },
    { url: '/auto-accident-injury-treatment-honolulu', title: 'Auto Accident Acupuncture Honolulu | Injury Recovery Treatment', h1: 'Acupuncture for Auto Accident Injuries', h2s: ['Common Auto Accident Injuries'], images: ['car-accident-neck-injury.jpg', 'whiplash-acupuncture-treatment.jpg'], meta: 'Auto accidents often cause injuries such as whiplash, back pain, and muscle strain. Acupuncture can help accelerate recovery.' },
    { url: '/whiplash-treatment-honolulu', title: 'Whiplash Treatment Honolulu | Fast Recovery', h1: 'Whiplash Treatment with Acupuncture', h2s: ['Symptoms of Whiplash'], images: ['whiplash-neck-injury-diagram.jpg', 'whiplash-acupuncture-treatment.jpg'], meta: 'Whiplash is a common injury after car accidents. Acupuncture can help reduce inflammation and restore mobility.' },
    { url: '/fire-cupping-therapy-honolulu', title: 'Fire Cupping Therapy Honolulu | AcuTherapy Clinics', h1: 'Fire Cupping Therapy in Honolulu', h2s: ['Benefits of Cupping Therapy'], images: ['fire-cupping-therapy.jpg', 'cupping-back-treatment.jpg'], meta: 'Cupping therapy is a traditional Chinese medicine technique that helps relieve muscle tension and improve circulation.' },
    { url: '/medical-massage-honolulu', title: 'Medical Massage Therapy Honolulu | AcuTherapy', h1: 'Medical Massage Therapy in Honolulu', h2s: ['Conditions Treated With Massage'], images: ['deep-tissue-medical-massage.jpg', 'massage-therapy-honolulu.jpg'], meta: 'Medical massage focuses on treating pain and muscle dysfunction for sports injuries and back tension.' },
    { url: '/does-acupuncture-help-sciatica', title: 'Does Acupuncture Help Sciatica? | Honolulu Blog', h1: 'Does Acupuncture Help Sciatica?', h2s: ['Research & Clinical Experience'], images: ['sciatica-nerve-pain-diagram.jpg', 'acupuncture-for-sciatica.jpg'], meta: 'Many patients ask whether acupuncture can help relieve sciatica pain. Learn the clinical facts.' },

    // Condtion Pages
    { url: '/shoulder-pain-acupuncture-honolulu', title: 'Shoulder Pain Acupuncture Honolulu | Natural Pain Relief', h1: 'Acupuncture Treatment for Shoulder Pain', h2s: ['Understanding Shoulder Pain', 'How Acupuncture Can Help'], images: ['shoulder-pain-acupuncture-treatment.jpg', 'rotator-cuff-acupuncture.jpg'], meta: 'Looking for shoulder pain treatment in Honolulu? Acupuncture can help reduce inflammation, improve mobility, and relieve chronic shoulder pain.' },
    { url: '/knee-pain-acupuncture-honolulu', title: 'Knee Pain Acupuncture Honolulu', h1: 'Knee Pain Acupuncture in Honolulu', h2s: ['Arthritis and Knee Surgery Recovery'], images: ['knee-pain-acupuncture-treatment.jpg', 'knee-joint-acupuncture-points.jpg'], meta: 'Knee pain acupuncture treatment in Honolulu for arthritis, sports injuries, and chronic knee pain relief.' },
    { url: '/headache-migraine-acupuncture-honolulu', title: 'Migraine Acupuncture Honolulu', h1: 'Acupuncture for Migraines and Headaches', h2s: ['Treating Chronic Migraines Naturally'], images: ['migraine-acupuncture-treatment.jpg'], meta: 'Acupuncture for migraines and chronic headaches in Honolulu. Safe and natural pain relief treatment.' },
    { url: '/herniated-disc-acupuncture-honolulu', title: 'Herniated Disc Treatment Honolulu', h1: 'Herniated Disc Pain Relief', h2s: ['Non-surgical Spine Recovery'], images: ['herniated-disc-spine-diagram.jpg'], meta: 'Acupuncture for herniated disc pain relief in Honolulu. Improve spinal mobility and reduce inflammation naturally.' },
    { url: '/arthritis-acupuncture-honolulu', title: 'Arthritis Acupuncture Honolulu', h1: 'Acupuncture for Arthritis', h2s: ['Joint Inflammation Relief'], images: ['arthritis-acupuncture-treatment.jpg'], meta: 'Acupuncture for arthritis pain relief in Honolulu. Natural treatment for joint pain and inflammation.' },
    { url: '/plantar-fasciitis-acupuncture-honolulu', title: 'Plantar Fasciitis Acupuncture Honolulu', h1: 'Plantar Fasciitis and Foot Pain', h2s: ['Heel Pain Relief'], images: ['plantar-fasciitis-acupuncture.jpg'], meta: 'Acupuncture treatment for plantar fasciitis and heel pain in Honolulu.' },
    { url: '/frozen-shoulder-acupuncture-honolulu', title: 'Frozen Shoulder Treatment Honolulu', h1: 'Frozen Shoulder Acupuncture', h2s: ['Restoring Shoulder Mobility'], images: ['frozen-shoulder-acupuncture.jpg'], meta: 'Frozen shoulder acupuncture treatment in Honolulu. Improve mobility and relieve shoulder stiffness.' },
    { url: '/tennis-elbow-acupuncture-honolulu', title: 'Tennis Elbow Acupuncture Honolulu', h1: 'Tennis Elbow Pain Relief', h2s: ['Joint Health'], images: ['tennis-elbow-acupuncture-treatment.jpg'], meta: 'Acupuncture for tennis elbow pain relief in Honolulu.' },
    { url: '/hip-pain-acupuncture-honolulu', title: 'Hip Pain Acupuncture Honolulu', h1: 'Hip Joint Acupuncture Treatment', h2s: ['Stiffness Relief'], images: ['hip-pain-acupuncture-treatment.jpg'], meta: 'Acupuncture treatment for hip pain and joint stiffness in Honolulu.' },
    { url: '/sciatica-treatment-honolulu', title: 'Sciatica Treatment Honolulu', h1: 'Natural Sciatica Treatment', h2s: ['Sciatic Nerve Pain'], images: ['sciatica-nerve-pain-diagram.jpg'], meta: 'Natural sciatica treatment in Honolulu with acupuncture therapy.' },
    { url: '/chronic-pain-treatment-honolulu', title: 'Chronic Pain Management Honolulu', h1: 'Chronic Pain Acupuncture', h2s: ['Long-term Pain Solutions'], images: ['chronic-pain-acupuncture-treatment.jpg'], meta: 'Chronic pain acupuncture treatment in Honolulu. Effective relief for long-term pain conditions.' },
    { url: '/sports-injury-acupuncture-honolulu', title: 'Sports Injury Acupuncture Honolulu', h1: 'Sports Injury Recovery', h2s: ['Athletic Performance'], images: ['sports-injury-acupuncture.jpg'], meta: 'Sports injury acupuncture treatment in Honolulu for faster recovery and pain relief.' },

    // Location Pages
    { url: '/acupuncture-waikiki', title: 'Acupuncture Near Waikiki', h1: 'Waikiki Acupuncture Clinic', h2s: ['Pain Treatment Near You'], images: ['waikiki-acupuncture-clinic.jpg'], meta: 'Acupuncture clinic near Waikiki Honolulu. Professional pain relief treatment.' },
    { url: '/acupuncture-kahala', title: 'Acupuncture Near Kahala', h1: 'Kahala Acupuncture Clinic', h2s: ['Pain Treatment Near Kahala'], images: ['honolulu-acupuncture-clinic.jpg'], meta: 'Acupuncture treatment near Kahala.' },
    { url: '/acupuncture-manoa', title: 'Acupuncture Near Manoa', h1: 'Manoa Acupuncture Services', h2s: [], images: [], meta: 'Acupuncture near Manoa.' },
    { url: '/acupuncture-hawaii-kai', title: 'Acupuncture Near Hawaii Kai', h1: 'Hawaii Kai Acupuncture', h2s: [], images: [], meta: 'Acupuncture near Hawaii Kai.' },
    { url: '/acupuncture-kaimuki', title: 'Acupuncture Kaimuki', h1: 'Kaimuki Pain Relief Clinic', h2s: [], images: [], meta: 'Acupuncture near Kaimuki.' },
    { url: '/acupuncture-ala-moana', title: 'Acupuncture Ala Moana', h1: 'Ala Moana Acupuncture Clinic', h2s: [], images: [], meta: 'Acupuncture Ala Moana.' },
    { url: '/acupuncture-kapahulu', title: 'Acupuncture Kapahulu', h1: 'Kapahulu Acupuncture', h2s: [], images: [], meta: 'Acupuncture Kapahulu.' },
    { url: '/acupuncture-moiliili', title: 'Acupuncture Moiliili', h1: 'Moiliili Acupuncture Center', h2s: [], images: ['acupuncture-near-moiliili.jpg'], meta: 'Acupuncture Moiliili.' },

    // Blog Pages
    { url: '/how-acupuncture-treats-back-pain', title: 'How Acupuncture Treats Back Pain', h1: 'How Acupuncture Treats Back Pain', h2s: [], images: [], meta: 'Learn how acupuncture helps relieve back pain naturally.' },
    { url: '/how-many-acupuncture-sessions-for-sciatica', title: 'How Many Acupuncture Sessions for Sciatica?', h1: 'Sessions Needed for Sciatica', h2s: [], images: [], meta: 'Sciatica acupuncture recovery rates.' },
    { url: '/is-acupuncture-good-for-herniated-disc', title: 'Is Acupuncture Good for Herniated Disc?', h1: 'Herniated Disc and Acupuncture', h2s: [], images: [], meta: 'Can acupuncture treat a herniated disc?' },
    { url: '/can-acupuncture-help-neck-pain', title: 'Can Acupuncture Help Neck Pain?', h1: 'Neck Pain Acupuncture Effectiveness', h2s: [], images: [], meta: 'Effect of acupuncture on neck pain.' },
    { url: '/acupuncture-vs-chiropractic-back-pain', title: 'Acupuncture vs Chiropractic for Back Pain', h1: 'Acupuncture vs Chiropractic', h2s: [], images: [], meta: 'Which is better: acupuncture or chiropractic?' },
    { url: '/acupuncture-for-shoulder-pain', title: 'Acupuncture for Shoulder Pain Blog', h1: 'Acupuncture for Shoulder Pain', h2s: [], images: [], meta: 'Details about shoulder pain.' },
    { url: '/does-cupping-help-back-pain', title: 'Does Cupping Help Back Pain?', h1: 'Cupping Therapy for Back Pain', h2s: [], images: [], meta: 'Cupping to relieve back pain.' },
    { url: '/what-to-expect-first-acupuncture-visit', title: 'What to Expect First Acupuncture Visit', h1: 'Your First Visit', h2s: [], images: [], meta: 'Guide to your first acupuncture visit.' },
    { url: '/is-acupuncture-covered-by-insurance-hawaii', title: 'Is Acupuncture Covered By Insurance Hawaii?', h1: 'Insurance Coverage', h2s: [], images: [], meta: 'Hawaii acupuncture insurance coverage.' },
    { url: '/how-fast-does-acupuncture-work', title: 'How Fast Does Acupuncture Work?', h1: 'Acupuncture Recovery Timeline', h2s: [], images: [], meta: 'Expected timeline for acupuncture recovery.' },

    // Support Pages
    { url: '/patient-reviews', title: 'Patient Reviews | AcuTherapy Clinics', h1: 'Patient Reviews & Success Stories', h2s: [], images: [], meta: 'Read recent patient reviews for AcuTherapy Clinics.' },
    { url: '/treatment-process', title: 'Treatment Process | AcuTherapy Clinics', h1: 'Our Treatment Process', h2s: [], images: [], meta: 'Learn exactly what to expect.' },
    { url: '/insurance-accepted', title: 'Insurance Accepted | Honolulu', h1: 'Health Insurance We Accept', h2s: [], images: [], meta: 'Accepted insurances at our clinic.' },
    { url: '/frequently-asked-questions', title: 'Clinics FAQ | AcuTherapy', h1: 'Frequently Asked Questions', h2s: [], images: [], meta: 'Frequently asked questions.' },
    { url: '/case-studies', title: 'Case Studies | Pain Relief', h1: 'Clinical Case Studies', h2s: [], images: [], meta: 'Detailed case studies.' },
    { url: '/new-patient-guide', title: 'New Patient Guide', h1: 'New Patient Guide', h2s: [], images: [], meta: 'Forms and guides for new patients.' },
    { url: '/clinic-policies', title: 'Clinic Policies | Honolulu', h1: 'Clinic Policies & Guidelines', h2s: [], images: [], meta: 'Cancellation and payment policies.' },
    { url: '/acupuncture-safety', title: 'Acupuncture Safety', h1: 'Acupuncture Safety & Hygiene', h2s: [], images: [], meta: 'Safety standards.' },
    { url: '/about-traditional-chinese-medicine', title: 'About TCM | Honolulu', h1: 'Understanding TCM', h2s: [], images: [], meta: 'Principles of TCM.' },
    { url: '/contact-honolulu-acupuncture', title: 'Contact | AcuTherapy', h1: 'Contact & Book Appointment', h2s: [], images: [], meta: 'Contact details.' },

    // Multilingual Landing Pages
    { url: '/acupuncture-honolulu-chinese', title: '夏威夷针灸治疗 | 檀香山中医诊所', h1: '夏威夷檀香山专业中医针灸与痛症治疗', h2s: ['蔡医生简介', '擅长病症', '诊所位置与预约方式'], images: ['honolulu-acupuncture-clinic.jpg'], meta: '位于夏威夷檀香山 (Honolulu) 的专业中医针灸诊所。Dr. Cai 拥有30年临床经验，专精于滑脉、车祸后遗症、坐骨神经痛及各类急慢性痛症。' },
    { url: '/acupuncture-honolulu-japanese', title: 'ホノルル鍼灸クリニック | 肩こり・腰痛治療', h1: 'ハワイ・ホノルルの専門的な鍼灸・マッサージ治療', h2s: ['経験30年以上の実績', '主な対応症状', 'ご予約・アクセス'], images: ['honolulu-acupuncture-clinic.jpg'], meta: 'ハワイ・ホノルルにある信頼の鍼灸クリニック。肩こり、腰痛、スポーツ障害などを30年の経験を持つ専門家が安全に治療します。' },
    { url: '/acupuncture-honolulu-korean', title: '호놀룰루 침술 클리닉 | 허리 통증 치료', h1: '호놀룰루 한방 침술 전문 클리닉', h2s: ['30년 임상 경력', '주요 치료 분야', '예약 및 위치 안내'], images: ['honolulu-acupuncture-clinic.jpg'], meta: '하와이 호놀룰루에 위치한 침술 및 통증 치료 전문 클리닉입니다. 30년 경력 마스터의 안전하고 효과적인 한방 치료를 경험해 보세요.' }
];

// Helper to sanitize route to component name
function toComponentName(url) {
    if (url === '/') return 'HomePage';
    return url.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('') + 'Page';
}

// Generate the placeholder SEO text
function generateSeoText(h1, meta, targetLength = 800) {
    const base = `At AcuTherapy Clinics in Honolulu, we provide highly specialized and effective treatment for your specific condition. ${meta} Dr. David Cai utilizes over 30 years of clinical experience in Traditional Chinese Medicine (TCM) to bring you lasting relief without relying on surgery or heavy medications. `;
    let dummyText = "When patients seek our specialized care, they immediately experience the difference that decades of clinical expertise make. Acupuncture works by stimulating specific strategic points on the body, which significantly increases peripheral blood flow, acts as a natural anti-inflammatory, and effectively down-regulates pain receptors in the brain. ";

    // repeat to make it longer
    for (let i = 0; i < 6; i++) {
        dummyText += `Whether you are dealing with acute trauma or long-standing chronic discomfort related to ${h1.toLowerCase()}, our customized protocols are designed to restore your structural harmony. The mechanism of our therapy deeply impacts your nervous system. By signaling the body to release endorphins—our natural painkillers—and increasing circulation to affected tissues, the rate of natural cellular repair is vastly accelerated. Our advanced, holistic integration of acupuncture, medical massage, and fire cupping therapy means that your recovery is optimized from all angles. `;
    }
    return base + dummyText;
}

// Write the template 
const outDir = path.join(__dirname, '../src/pages');
if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir, { recursive: true }); }

pages.forEach(p => {
    const compName = toComponentName(p.url);
    const outPath = path.join(outDir, `${compName}.tsx`);

    let h2Blocks = '';
    if (p.h2s && p.h2s.length > 0) {
        h2Blocks = p.h2s.map(h2 => `
        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">${h2}</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          ${generateSeoText(h2, p.meta).substring(0, 400)}
        </p>`).join('\\n');
    }

    let imagesBlock = '';
    if (p.images && p.images.length > 0) {
        imagesBlock = p.images.map(img => `
        <figure className="my-10 bg-white p-2 rounded-xl shadow-md inline-block mr-6 align-top max-w-sm">
          <img src="/images/\${'${img}'}" alt="${img.replace('.jpg', '')}" className="rounded-lg w-full h-auto object-cover aspect-video" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop'; }}/>
          <figcaption className="text-sm text-slate-500 mt-3 text-center">${img.replace(/-/g, ' ').replace('.jpg', '')}</figcaption>
        </figure>`).join('\\n');
    } else {
        imagesBlock = `
        <figure className="my-10 bg-white p-2 rounded-xl shadow-md">
          <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop" alt="Acupuncture Treatment Honolulu" className="rounded-lg w-full h-[400px] object-cover" />
        </figure>
    `;
    }

    const content = `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, CheckCircle2 } from "lucide-react";

export default function ${compName}() {
  return (
    <>
      <Helmet>
        <title>${p.title}</title>
        <meta name="description" content="${p.meta}" />
        <script type="application/ld+json">
          {\`
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "${p.title}",
            "headline": "${p.h1}",
            "description": "${p.meta}",
            "url": "https://acutherapy.com${p.url}",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "AcuTherapy Clinics",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Honolulu",
                "addressRegion": "HI",
                "addressCountry": "US"
              }
            }
          }
          \`}
        </script>
      </Helmet>

      {/* Page Header Header */}
      <section className="bg-blue-900 text-white pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">${p.h1}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">${p.meta}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-12">
          
          {/* Article Body */}
          <article className="md:col-span-8 prose prose-lg prose-blue max-w-none">
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
              ${generateSeoText(p.h1, p.meta).substring(0, 600)}
            </p>

            ${imagesBlock}
            ${h2Blocks}

            <p className="text-lg text-slate-700 leading-relaxed mt-8">
              ${generateSeoText(p.h1, p.meta).substring(600, 1600)}
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-2xl my-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Wait to Feel Better?</h3>
              <p className="text-slate-700 mb-6 font-medium">Dr. Cai has helped thousands of patients in Honolulu recover safely and naturally. Most patients experience relief within the first few sessions.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700"><CheckCircle2 className="text-emerald-500 mr-2 h-5 w-5" /> Detailed diagnostic consultation</li>
                <li className="flex items-center text-slate-700"><CheckCircle2 className="text-emerald-500 mr-2 h-5 w-5" /> Precision acupuncture treatment</li>
                <li className="flex items-center text-slate-700"><CheckCircle2 className="text-emerald-500 mr-2 h-5 w-5" /> Accepted by most Hawaii insurance providers</li>
              </ul>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <Card className="bg-white border-blue-100 shadow-lg top-24 sticky">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Book Your Visit</h3>
                <p className="text-slate-600 mb-8 text-sm">Our friendly staff in Honolulu is ready to assist you bridging the gap to a pain-free life.</p>
                <div className="flex flex-col gap-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">
                    <Calendar className="mr-2" /> Schedule Online
                  </Button>
                  <Button variant="outline" className="w-full h-14 text-lg border-2 border-slate-200">
                    <PhoneCall className="mr-2 h-5 w-5 text-blue-600" /> (808) 123-4567
                  </Button>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 text-left">
                  <p className="font-semibold text-slate-900 mb-2">Location</p>
                  <p className="text-slate-600 text-sm">1234 Medical Blvd, Suite 100<br/>Honolulu, HI 96814</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4">Patient Reviews</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"Dr. Cai completely resolved my shoulder pain after just 3 visits. I had been suffering for months. The clinic is clean, professional, and very welcoming!"</p>
              <p className="text-blue-400 font-semibold text-sm">- Sarah T., Honolulu</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
`;
    fs.writeFileSync(outPath, content);
});

// Write App Router
const appContent = `
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MapPin, Clock, PhoneCall, Activity, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Automatically imports all pages
${pages.map(p => `import ${toComponentName(p.url)} from './pages/${toComponentName(p.url)}';`).join('\\n')}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen font-sans bg-slate-50 flex flex-col">
      {/* Top Notification Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><MapPin size={14}/> Honolulu, HI</span>
            <span className="hidden sm:flex items-center gap-1.5"><Clock size={14}/> Mon-Sat: 9am - 6pm</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+18081234567" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
              <PhoneCall size={14} /> (808) 123-4567
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="/acupuncture-honolulu-chinese" className="hidden sm:inline hover:text-blue-200 transition-colors">中文</a>
            <span className="hidden sm:inline">|</span>
            <a href="/acupuncture-honolulu-japanese" className="hidden sm:inline hover:text-blue-200 transition-colors">日本語</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 decoration-transparent">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-inner">
              <Activity className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 m-0">AcuTherapy<span className="text-blue-600">Clinics</span></h1>
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase m-0 leading-tight">Honolulu Pain Center</p>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-8 font-medium text-slate-600">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="/acupuncture-honolulu" className="hover:text-blue-600 transition-colors">Treatments</a>
            <a href="/shoulder-pain-acupuncture-honolulu" className="hover:text-blue-600 transition-colors">Conditions</a>
            <a href="/patient-reviews" className="hover:text-blue-600 transition-colors">Reviews</a>
            <Button className="bg-blue-600 hover:bg-blue-700 shadow-md">
              <Calendar className="mr-2 h-4 w-4" /> Book Appointment
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">AcuTherapy<span className="text-blue-500">Clinics</span></h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Honolulu's premier clinic for natural pain relief, acupuncture, and traditional Chinese medicine, led by Dr. David Cai.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Treatments</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/acupuncture-honolulu" className="hover:text-blue-400">Acupuncture Honolulu</a></li>
              <li><a href="/medical-massage-honolulu" className="hover:text-blue-400">Medical Massage</a></li>
              <li><a href="/fire-cupping-therapy-honolulu" className="hover:text-blue-400">Fire Cupping</a></li>
              <li><a href="/sports-injury-acupuncture-honolulu" className="hover:text-blue-400">Sports Injuries</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Conditions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/back-pain-acupuncture-honolulu" className="hover:text-blue-400">Back Pain</a></li>
              <li><a href="/sciatica-treatment-honolulu" className="hover:text-blue-400">Sciatica Treatment</a></li>
              <li><a href="/neck-pain-treatment-honolulu" className="hover:text-blue-400">Neck Pain</a></li>
              <li><a href="/auto-accident-injury-treatment-honolulu" className="hover:text-blue-400">Auto Accident</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Locations</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/acupuncture-waikiki" className="hover:text-blue-400">Waikiki</a></li>
              <li><a href="/acupuncture-kahala" className="hover:text-blue-400">Kahala</a></li>
              <li><a href="/acupuncture-kaimuki" className="hover:text-blue-400">Kaimuki</a></li>
              <li><a href="/acupuncture-ala-moana" className="hover:text-blue-400">Ala Moana</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Layout>
        <Routes>
          ${pages.map(p => `<Route path="${p.url}" element={<${toComponentName(p.url)} />} />`).join('\\n          ')}
        </Routes>
      </Layout>
    </HelmetProvider>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../src/App.tsx'), appContent);
console.log('Successfully generated 53 pages and App router!');
