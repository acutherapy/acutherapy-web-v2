const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && f !== 'HomePage.tsx');

const generateSEOContent = (filename) => {
  let friendlyName = filename.replace('Page.tsx', '').replace(/([A-Z])/g, ' $1').trim();
  let urlPath = '/' + filename.replace('Page.tsx', '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

  // Determine category
  let category = 'Condition';
  if (filename.includes('Waikiki') || filename.includes('Kahala') || filename.includes('Manoa') || filename.includes('HawaiiKai') || filename.includes('Kaimuki') || filename.includes('AlaMoana') || filename.includes('Kapahulu') || filename.includes('Moiliili')) {
    category = 'Location';
  } else if (filename.includes('Chinese') || filename.includes('Japanese') || filename.includes('Korean')) {
    category = 'Language';
  } else if (filename.startsWith('How') || filename.startsWith('Does') || filename.startsWith('Is') || filename.startsWith('Can') || filename.startsWith('What') || filename.includes('Reviews') || filename.includes('Guide') || filename.includes('Policies') || filename.includes('Questions') || filename.includes('Process') || filename.includes('Insurance') || filename.includes('Safety') || filename.includes('About') || filename.includes('Contact') || filename.includes('CaseStudies')) {
    category = 'FAQ';
  } else if (filename.includes('Massage') || filename.includes('Cupping') || filename.includes('WorkersComp') || filename.includes('VeteransCare') || filename === 'AcupunctureHonoluluPage.tsx' || filename === 'HomePage.tsx') {
    category = 'Service';
  }

  if (filename === 'HomePage.tsx') {
    friendlyName = 'Honolulu Pain & Injury Acupuncture Clinic';
    urlPath = '/';
  }

  // Dynamic SEO Titles & Descriptions based on category
  let title = `${friendlyName} | Pain & Injury Treatment | AcuTherapy Clinics`;
  let description = `Top-rated ${friendlyName} services in Honolulu. Dr. David Cai specializes in pain management, auto accident recovery, and chronic conditions.`;

  if (category === 'Location') {
    let loc = friendlyName.replace('Acupuncture', '').trim();
    title = `Acupuncture Near ${loc}, Honolulu | Top Pain Relief Clinic`;
    description = `Looking for the best acupuncture near ${loc}? AcuTherapy Clinics offers expert natural pain relief for back pain, sciatica, and auto injury just minutes away.`;
  } else if (category === 'Condition') {
    title = `${friendlyName} Treatment in Honolulu | AcuTherapy Clinics`;
    description = `Tired of ${friendlyName}? Dr. David Cai provides effective, non-surgical relief using advanced acupuncture and traditional Chinese medicine in Honolulu.`;
  } else if (category === 'FAQ') {
    title = `${friendlyName} | Honolulu Acupuncture Guide`;
    description = `Learn more about ${friendlyName}. Dr. David Cai from AcuTherapy Clinics answers your questions about acupuncture efficacy and treatment processes.`;
  }

  // Dynamic Image Selection
  let imageFigureHtml = '';
  let heroImage = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200";

  if (filename === 'HomePage.tsx' || filename === 'AcupunctureHonoluluPage.tsx') {
    imageFigureHtml = `
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <figure className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group">
          <img src="/images/dr-cai-preparing-acupuncture.jpg" alt="Dr. Cai preparing acupuncture" className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }} />
          <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-12 text-white font-medium">Dr. Cai Preparing Acupuncture Protocol</figcaption>
        </figure>
        <figure className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mt-8 md:mt-0">
          <img src="/images/facial-acupuncture-treatment.jpg" alt="Facial acupuncture" className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }} />
          <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-12 text-white font-medium">Precision Needling & Peripheral Blood Flow</figcaption>
        </figure>
      </div>`;
  } else if (filename.includes('Massage') || filename.includes('Neck') || filename.includes('Shoulder') || filename.includes('Whiplash')) {
    imageFigureHtml = `
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <figure className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group">
          <img src="/images/acupressure-facial-massage.jpg" alt="Acupressure massage" className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }} />
          <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-12 text-white font-medium">Tension Release Massage</figcaption>
        </figure>
        <figure className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mt-8 md:mt-0">
          <img src="/images/neck-shoulder-acupressure.jpg" alt="Neck shoulder massage" className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }} />
          <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-12 text-white font-medium">Trapezius Muscle Medical Massage</figcaption>
        </figure>
      </div>`;
    heroImage = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000";
  } else if (filename.includes('Cupping') || filename.includes('Back') || filename.includes('Sciatica')) {
    imageFigureHtml = `
      <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
        <img src="/images/fire-cupping-therapy.jpg" alt="Fire cupping therapy" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }} />
        <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-16 text-white text-lg font-medium">Traditional Fire Cupping Therapy for Deep Tissue Detox</figcaption>
      </div>`;
  } else if (category === 'FAQ' && !filename.includes('Reviews')) {
    imageFigureHtml = `
      <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
        <img src="/images/traditional-chinese-herbs.jpg" alt="Traditional Chinese Herbs" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800'; }} />
        <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-16 text-white text-lg font-medium">Holistic Healing Methods inside AcuTherapy</figcaption>
      </div>`;
  } else {
    imageFigureHtml = `
      <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 group mb-12 w-full max-w-3xl mx-auto">
        <img src="/images/abdominal-acupuncture.jpg" alt="${friendlyName}" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'; }} />
        <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-16 text-white text-lg font-medium">Advanced Acupuncture Treatments</figcaption>
      </div>`;
  }

  // Generate Body based on category
  let customBodyHtml = '';

  if (category === 'Language') {
    if (filename.includes('Chinese')) {
      title = '檀香山针灸诊所，中医痛症与车祸理疗专家 | AcuTherapy Clinics';
      description = 'Dr. David Cai (蔡医生) 在夏威夷檀香山拥有30年中医针灸临床经验，专精各类痛症、车祸后遗症、坐骨神经痛及运动损伤。接受各大医疗保险。';
      customBodyHtml = `
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">夏威夷檀香山顶级中医针灸与疼痛治疗中心</h2>
              <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
                蔡医生 (Dr. David Cai) 拥有超过30年的中美临床针灸与中药经验。我们在檀香山 (Honolulu) 及珍珠城 (Aiea) 提供专业、安全的针灸、推拿与拔罐治疗，致力于帮助患者远离手术与强效止痛药的副作用。
              </p>
              ${imageFigureHtml}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">我们的核心治疗项目</h3>
              <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
                <li><strong>车祸理疗 (Auto Accident / PIP)：</strong> 我们对处理车祸理疗有着极其丰富的经验。通常您的汽车保险(PIP)会100%覆盖您的针灸与推拿治疗跨度，无需自费。</li>
                <li><strong>严重痛症管理：</strong> 专治坐骨神经痛、严重颈椎病、长期腰背痛、肩周炎、关节炎以及偏头痛。</li>
                <li><strong>运动损伤与工伤 (Worker's Comp)：</strong> 加速肌肉撕裂修复，降低炎症，恢复肢体灵活性。</li>
              </ul>
              <div className="bg-slate-100 p-6 rounded-lg my-8 border-l-4 border-blue-600">
                <p className="text-lg font-medium text-slate-800">我们在诊所提供全中文沟通服务。接受 HMSA, Kaiser, UHA, HMAA 各种主要医疗保险。如果您刚经历了车祸受伤，请立刻联系我们进行评估。</p>
              </div>`;
    } else if (filename.includes('Japanese')) {
      title = 'ホノルルの鍼灸院 | 痛み治療と交通事故リハビリ | AcuTherapy Clinics';
      description = 'Dr. David Caiはハワイ・ホノルルで30年の経験を持つ鍼灸と漢方の専門家です。腰痛、肩こり、坐骨神経痛、むち打ちの治療に特化しています。各種保険適用。';
      customBodyHtml = `
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">ホノルル最高峰の鍼灸・ペインクリニック</h2>
              <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
                Dr. David Cai は30年以上の臨床経験を持つ鍼灸と伝統中国医学 (TCM) の専門家です。ホノルルとアイエアにクリニックを構え、手術や強力な薬に頼らない自然な痛みの緩和と回復を提供しています。
              </p>
              ${imageFigureHtml}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">主な治療内容</h3>
              <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
                <li><strong>交通事故のむち打ち治療：</strong> ハワイの自動車保険（PIP）を利用して、自己負担なしで治療を受けられるケースがほとんどです。</li>
                <li><strong>慢性的な痛みの改善：</strong> 坐骨神経痛、腰痛、肩こり、関節炎、五十肩、偏頭痛への優れたアプローチ。</li>
                <li><strong>スポーツ障害：</strong> 筋肉の炎症を抑え、パフォーマンスの回復を早めます。</li>
              </ul>
              <div className="bg-slate-100 p-6 rounded-lg my-8 border-l-4 border-blue-600">
                <p className="text-lg font-medium text-slate-800">HMSA、Kaiserをはじめとするハワイの各種医療保険に対応しております。旅行中の方の急な痛みや、交通事故に遭われた方は、お早めにご相談ください。</p>
              </div>`;
    } else {
      // Korean fallback, or other
      title = '호놀룰루 침술 클리닉 | 통증 및 교통사고 치료 | AcuTherapy Clinics';
      description = '하와이 호놀룰루에 위치한 한의원입니다. 통증 관리, 침술, 교통사고 후유증, 좌골 신경통 치료를 전문으로 합니다.';
      customBodyHtml = `
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">호놀룰루 통증 및 침술 전문 클리닉</h2>
              <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
                David Cai 박사는 30년 이상의 임상 경험을 가진 전통 중의학 및 침술 전문가입니다. 수술이나 진통제 없이 자연스럽고 안전하게 통증을 치료합니다.
              </p>
              ${imageFigureHtml}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">전문 치료 분야</h3>
              <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
                <li><strong>교통사고 후유증 및 채찍질 손상:</strong> 자동차 보험(PIP)을 통해 치료비 전액을 지원받을 수 있습니다.</li>
                <li><strong>만성 통증 관리:</strong> 허리 통증, 좌골 신경통, 목/어깨 통증, 관절염 및 편두통.</li>
              </ul>`;
    }
  } else if (category === 'Location') {
    let loc = friendlyName.replace('Acupuncture', '').trim();
    customBodyHtml = `
              <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
                If you live or work near <strong>${loc}</strong> and are searching for a highly-rated, professional clinic to treat chronic pain or auto injuries, AcuTherapy Clinics is just a short drive away. Dr. David Cai provides profound relief utilizing advanced Acupuncture and Traditional Chinese Medicine.
              </p>
              ${imageFigureHtml}
              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Convenient Top-Rated Care for ${loc} Residents</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our clinics in Honolulu and Aiea are perfectly positioned to serve the <strong>${loc}</strong> community. Instead of dealing with the frustration of temporary pain relievers, our methodology stimulates your body's intrinsic healing nervous system. We target the neuro-muscular root of the issue—whether that's sciatica, severe back pain, migraines, or joint degradation.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Hawaii Patients Choose Us</h3>
              <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
                <li>30+ years of clinical excellence in complex pain cases.</li>
                <li>We accept local insurance including HMSA, Kaiser, UHA, and HMAA.</li>
                <li><strong>Zero out-of-pocket costs</strong> for most Auto Accident (PIP) claims and Workers' Comp.</li>
                <li>A clean, sterile, modern medical environment utilizing single-use ultra-fine needles.</li>
              </ul>
        `;
  } else if (category === 'Condition') {
    customBodyHtml = `
              <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
                Suffering from <strong>${friendlyName}</strong> can deeply disrupt your daily life, making basic movements agonizing and draining your energy. At AcuTherapy Clinics in Honolulu, Dr. David Cai applies over 30 years of medical acupuncture experience to resolve the root cause of ${friendlyName.toLowerCase()}, offering a lasting alternative to surgery or heavy pharmaceuticals.
              </p>
              ${imageFigureHtml}
              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">The Science of Treating ${friendlyName} with Acupuncture</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                ${friendlyName} is often the result of trapped inflammation, peripheral nerve irritation, or deep myofascial tension that standard treatments fail to reach. Our specific needle protocols for ${friendlyName.toLowerCase()} stimulate local vasodilation—massively increasing blood flow to oxygen-starved tissues.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Furthermore, precise stimulation signals the central nervous system to release natural endorphins and opioid-like neuropeptides, dramatically downregulating the pain signals caused by ${friendlyName.toLowerCase()} before they reach the brain.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6 border-b pb-2">Our Highly Effective Treatment Process</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We don't use a "one size fits all" approach. Your treatment for ${friendlyName.toLowerCase()} may integrate multiple modalities for optimal effectiveness:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
                <li><strong>Targeted Electro-Acupuncture:</strong> To relieve severe nerve pain or muscle spasms.</li>
                <li><strong>Medical Massage (Tui-Na):</strong> To physically break down scar tissue and fascia adhesions compounding the structural issue.</li>
                <li><strong>Fire Cupping Therapy:</strong> To pull stagnant blood and lactic acid out of deep muscle layers.</li>
              </ul>
        `;
  } else if (category === 'FAQ') {
    customBodyHtml = `
              <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
                At AcuTherapy Clinics, we believe that informed patients heal faster. If you are exploring options and wondering about <strong>${friendlyName.toLowerCase()}</strong>, Dr. David Cai and our clinical team have compiled the following medical insights based on decades of practice in Honolulu.
              </p>
              ${imageFigureHtml}
              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Understanding ${friendlyName}</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When discussing ${friendlyName.toLowerCase()}, it's important to differentiate between western symptom-masking and the holistic root-cause methodology we practice here. Traditional Chinese Medicine (TCM) views the body as a systemic interconnected network. Any symptom you experience is a localized manifestation of a deeper structural or energetic imbalance.
              </p>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 my-8 shadow-sm">
                 <h3 className="text-xl font-bold text-slate-900 mb-4">Patient FAQ: The Core Answer</h3>
                 <p className="text-lg text-slate-700">
                    If you are asking yourself about ${friendlyName.toLowerCase()}, the short answer is that <strong>yes, professional acupuncture is statistically proven to be highly efficacious</strong> for these types of clinical inquiries. The treatment works by modulating the nervous system, reducing chronic inflammation, and resetting muscular firing patterns. However, every patient's body responds differently—which is why day-one diagnostic evaluations are critical.
                 </p>
              </div>
        `;
  } else {
    // Generic Service Fallback (original template)
    customBodyHtml = `
              <p className="text-xl text-slate-800 leading-relaxed font-medium mb-8">
                If you are suffering from chronic pain, an injury, or stress-related health problems, <strong>${friendlyName}</strong> provides a natural, effective pathway to healing. At AcuTherapy Clinics in Honolulu, Dr. David Cai utilizes over 30 years of clinical expertise in Traditional Chinese Medicine (TCM).
              </p>
              ${imageFigureHtml}
              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">The Medical Science Behind ${friendlyName}</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When patients seek specialized care for ${friendlyName.toLowerCase()}, they immediately experience the difference that decades of clinical expertise make. Acupuncture works by stimulating specific strategic points on the body, which significantly increases peripheral blood flow, acts as a natural anti-inflammatory, and effectively down-regulates pain receptors in the brain. 
              </p>
              <ul className="list-disc pl-6 space-y-4 text-lg text-slate-700 mb-8">
                <li>Detailed diagnostic consultation on day one</li>
                <li>Clean, sterile, and relaxing clinic environment</li>
                <li>Highly compatible with Hawaii insurance providers like HMSA, Kaiser, HMAA, and Workers Comp</li>
              </ul>
        `;
  }

  let doctorTitle = 'Clinical Director & Founder';
  let doctorHeadline = 'Leading Honolulu Pain Clinic';
  let doctorBio = 'With over 30 years of clinical experience, <strong>Dr. David Cai</strong> is a master of Traditional Chinese Medicine (TCM) and advanced acupuncture protocols. He specializes in severe pain management, sports injuries, and complex auto accident recoveries, bringing world-class holistic healthcare to the Honolulu community.';
  let teamTitle = 'AcuTherapy Clinics Medical Team';
  let teamQuote = '"Our multidisciplinary medical team is highly trained and committed to finding the root cause of your condition, providing relief that lasts."';

  let clinicTitle1 = 'Honolulu Clinic (Liliha)';
  let clinicTitle2 = 'Aiea / Pearl City Clinic';
  let hoursTitle = 'Hours of Operation';
  let hoursText = 'Mon-Fri: 8am - 5pm, Sat: 8am - 12pm';
  let alsoServing = 'Also serving:';
  let reviewTitle = 'Patient Reviews';
  let reviewText = '"Dr. Cai completely resolved my shoulder pain after just 3 visits. I had been suffering for months. The clinic is pristine, professional, and very welcoming!"';
  let residentText = 'Honolulu Resident';

  let linkWaikiki = 'Waikiki';
  let linkKahala = 'Kahala';
  let linkKaimuki = 'Kaimuki';
  let linkAlaMoana = 'Ala Moana';
  let linkAcupuncture = 'Acupuncture Honolulu';

  if (category === 'Language' && filename.includes('Chinese')) {
    doctorTitle = '临床总监兼创始人';
    doctorHeadline = '夏威夷顶尖疼痛与康复中心';
    doctorBio = '<strong>蔡大卫医生 (Dr. David Cai)</strong> 拥有超过30年的临床经验，是传统中医（TCM）与现代针灸疗法的大师。他专精于严重痛症管理、运动损伤修复以及复杂的车祸后遗症康复，为檀香山社区提供世界级的全方位医疗服务。';
    teamTitle = 'AcuTherapy 医疗团队';
    teamQuote = '“我们的多学科医疗团队经过严格培训，致力于找到您病痛的根本原因，提供持久的有效缓解。”';

    clinicTitle1 = '檀香山诊所 (Liliha)';
    clinicTitle2 = '珍珠城 / Aiea 诊所';
    hoursTitle = '营业时间';
    hoursText = '周一至周五: 8am - 5pm, 周六: 8am - 12pm (预约制)';
    alsoServing = '更多周边服务区域:';
    reviewTitle = '患者好评';
    reviewText = '“蔡医生在短短几天的时间内就彻底治好了困扰我几个月的肩痛。诊所非常干净、专业，让人感到极其安心与放松！”';
    residentText = '檀香山居民';

    linkWaikiki = '威基基 (Waikiki)';
    linkKahala = '卡哈拉 (Kahala)';
    linkKaimuki = '卡伊穆基 (Kaimuki)';
    linkAlaMoana = '阿拉莫阿那 (Ala Moana)';
  } else if (category === 'Language' && filename.includes('Japanese')) {
    doctorTitle = '臨床ディレクター兼創設者';
    doctorHeadline = 'ホノルルを代表するペインクリニック';
    doctorBio = '30年以上の臨床経験を持つ <strong>Dr. David Cai</strong> は、伝統中国医学 (TCM) と高度な鍼灸プロトコルのマスターです。重度の痛みの管理、スポーツ障害、複雑な交通事故後の回復を専門とし、ホノルルのコミュニティに世界最高水準のホリスティック医療を提供しています。';
    teamTitle = 'AcuTherapy 医療チーム';
    teamQuote = '「私たちの学際的な医療チームは高度な訓練を受けており、あなたの症状の根本原因を見つけ、持続的な痛みの緩和を提供することに専念しています。」';

    clinicTitle1 = 'ホノルルクリニック (Liliha)';
    clinicTitle2 = 'アイエア / パールシティクリニック';
    hoursTitle = '営業時間';
    hoursText = '月〜金: 午前8時 - 午後5時, 土: 午前8時 - 午後12時';
    alsoServing = '対応エリア:';
    reviewTitle = '患者様の声';
    reviewText = '「Cai先生はわずか3回の治療で私の肩の痛みを完全に解決してくれました。数ヶ月も苦しんでいたのに。クリニックはとても清潔でプロフェッショナルです！」';
    residentText = 'ホノルル在住';

    linkWaikiki = 'ワイキキ';
    linkKahala = 'カハラ';
    linkKaimuki = 'カイムキ';
    linkAlaMoana = 'アラモアナ';
  } else if (category === 'Language' && filename.includes('Korean')) {
    doctorTitle = '임상 책임자 및 설립자';
    doctorHeadline = '호놀룰루 최고의 통증 클리닉';
    doctorBio = '30년 이상의 임상 경험을 가진 <strong>Dr. David Cai</strong>는 전통 중의학(TCM) 및 고급 침술 치료의 대가입니다. 그는 심각한 통증 관리, 스포츠 부상 및 복잡한 교통사고 회복을 전문으로 하여 호놀룰루 지역 사회에 최고 수준의 진료를 제공합니다.';
    teamTitle = 'AcuTherapy 의료진';
    teamQuote = '"우리의 다학제 의료팀은 체계적인 훈련을 받았으며 환자의 근본적인 원인을 파악하여 지속적인 완화를 제공하는 데 전념하고 있습니다."';

    clinicTitle1 = '호놀룰루 클리닉 (Liliha)';
    clinicTitle2 = '아이에아 / 펄시티 클리닉';
    hoursTitle = '영업 시간';
    hoursText = '월-금: 8am - 5pm, 토: 8am - 12pm';
    alsoServing = '서비스 지역:';
    reviewTitle = '환자 리뷰';
    reviewText = '"Cai 원장님은 단 3번의 방문으로 지난 몇 달간 저를 괴롭히던 어깨 통증을 완전히 해결해 주셨습니다. 클리닉은 매우 깨끗하고 친절합니다!"';
    residentText = '호놀룰루 거주자';

    linkWaikiki = '와이키키';
    linkKahala = '카할라';
    linkKaimuki = '카이무키';
    linkAlaMoana = '알라모아나';
  }

  const aboutDoctorHtml = `
      <div className="mt-16 mb-16 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-2 bg-slate-100 relative">
            <img 
              src="/images/dr-david-cai-portrait.jpg" 
              alt="Dr. David Cai, L.Ac., Ph.D." 
              className="w-full h-full object-cover min-h-[400px]"
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800'; }}
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 text-white text-center">
               <span className="font-bold text-xl">Dr. David Cai</span>
               <p className="text-blue-300 text-sm">L.Ac., Ph.D.</p>
            </div>
          </div>
          <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">${doctorTitle}</h3>
            <h4 className="text-3xl font-extrabold text-slate-900 mb-4">${doctorHeadline}</h4>
            <p className="text-slate-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: '${doctorBio}' }}></p>
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
               <img src="/images/acutherapy-medical-team.jpg" alt="AcuTherapy Clinics Medical Team" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
               <div>
                 <h5 className="font-bold text-slate-900 mb-1">${teamTitle}</h5>
                 <p className="text-sm text-slate-500 italic leading-relaxed">${teamQuote}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    `;

  let specificLinks = '';

  if (category === 'Location' || category === 'Service') {
    specificLinks = `
        <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> ${linkAcupuncture}
        </Link>
        <Link to="/back-pain-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Back Pain Treatment
        </Link>
        <Link to="/sciatica-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Sciatica Relief
        </Link>
        <Link to="/contact-honolulu-acupuncture" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <PhoneCall className="text-emerald-500 mr-3 h-5 w-5" /> Contact Clinic
        </Link>
    `;
  } else if (category === 'Condition') {
    specificLinks = `
        <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <ShieldCheck className="text-blue-500 mr-3 h-5 w-5" /> ${linkAcupuncture}
        </Link>
        <Link to="/contact-honolulu-acupuncture" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <PhoneCall className="text-emerald-500 mr-3 h-5 w-5" /> Contact Our Clinic
        </Link>
        <Link to="/auto-accident-injury-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Auto Accident PIP
        </Link>
    `;
    if (filename.toLowerCase().includes('sciatica')) {
      specificLinks += `
        <Link to="/herniated-disc-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Herniated Disc
        </Link>`;
    } else if (filename.toLowerCase().includes('neck') || filename.toLowerCase().includes('whiplash')) {
      specificLinks += `
        <Link to="/whiplash-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Whiplash Therapy
        </Link>`;
    } else if (filename.toLowerCase().includes('shoulder')) {
      specificLinks += `
        <Link to="/rotator-cuff-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Rotator Cuff
        </Link>`;
    } else {
      specificLinks += `
        <Link to="/medical-massage-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <Activity className="text-blue-500 mr-3 h-5 w-5" /> Medical Massage
        </Link>`;
    }
  } else { /* FAQ & Trust pages */
    let faqConditionLink = '';
    if (filename.toLowerCase().includes('sciatica')) faqConditionLink = '<Link to="/sciatica-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold"><Activity className="text-blue-500 mr-3 h-5 w-5" /> Sciatica Acupuncture</Link>';
    else if (filename.toLowerCase().includes('back')) faqConditionLink = '<Link to="/back-pain-acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold"><Activity className="text-blue-500 mr-3 h-5 w-5" /> Back Pain Recovery</Link>';
    else if (filename.toLowerCase().includes('neck')) faqConditionLink = '<Link to="/neck-pain-treatment-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold"><Activity className="text-blue-500 mr-3 h-5 w-5" /> Neck Pain Therapy</Link>';

    specificLinks = `
        ${faqConditionLink}
        <Link to="/acupuncture-honolulu" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <ShieldCheck className="text-blue-500 mr-3 h-5 w-5" /> ${linkAcupuncture}
        </Link>
        <Link to="/contact-honolulu-acupuncture" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group text-sm font-semibold">
          <PhoneCall className="text-emerald-500 mr-3 h-5 w-5" /> Contact Us
        </Link>
    `;
  }

  const internalLinksHtml = `
      <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Explore Related Treatments & Information</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        ${specificLinks}
      </div>
    `;

  return `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PhoneCall, CheckCircle2, ArrowRight, Activity, MapPin, ShieldCheck } from "lucide-react";

export default function ${filename.split('.')[0]}() {
  return (
    <>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <script type="application/ld+json">
          {\`
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "${title}",
            "headline": "${friendlyName}",
            "description": "${description}",
            "url": "https://acutherapy.com${urlPath}",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "AcuTherapy Clinics",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1650 Liliha St, Suite 208",
                "addressLocality": "Honolulu",
                "addressRegion": "HI",
                "postalCode": "96817",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 21.321289,
                "longitude": -157.860155
              },
              "telephone": "+1-808-528-7177"
            }
          }
          \`}
        </script>
      </Helmet>

      {/* Page Header */}
      <section className="bg-slate-900 text-white relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="${heroImage}" 
            alt="Acupuncture therapy background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-sm mb-6 backdrop-blur-sm">
            <ShieldCheck size={16} /> <span>Trusted Honolulu Pain Clinic</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">${category === 'Language' ? title.split('|')[0] : friendlyName}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">${category === 'Language' ? description.split('.')[0] + '.' : 'Medical-grade treatments customized for lasting relief and recovery in Honolulu.'}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12">
          
          <article className="md:col-span-8">
            ${customBodyHtml}
            ${aboutDoctorHtml}
            ${category === 'Language' ? '' : internalLinksHtml}
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <Card className="bg-white border-blue-100 shadow-xl lg:sticky lg:top-24 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 h-2 w-full"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">${category === 'Language' && filename.includes('Chinese') ? '在线预约' : category === 'Language' && filename.includes('Japanese') ? 'オンライン予約' : 'Book Your Visit'}</h3>
                <p className="text-slate-600 mb-8 text-sm">Bridge the gap to a pain-free life today.</p>
                <div className="flex flex-col gap-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">
                    <Calendar className="mr-2" /> ${category === 'Language' && filename.includes('Chinese') ? '立刻预约' : 'Schedule Online'}
                  </Button>
                  <Button variant="outline" className="w-full h-14 text-lg border-2 border-slate-200" onClick={() => window.location.href='tel:+18085287177'}>
                    <PhoneCall className="mr-2 h-5 w-5 text-blue-600" /> (808) 528-7177
                  </Button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 text-left">
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">${clinicTitle1}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        1650 Liliha St, Suite 208<br/>Honolulu, HI 96817
                      </p>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 528-7177 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 212-9459</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">${clinicTitle2}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-1">
                        98-211 Pali Momi St, Suite 604<br/>Aiea, HI 96701
                      </p>
                      <p className="text-slate-600 text-sm"><strong>Ph:</strong> (808) 452-1900 <span className="mx-1">|</span> <strong>Fax:</strong> (808) 452-1521</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                      <p className="font-bold text-slate-900 mb-1 text-sm">${hoursTitle}</p>
                      <p className="text-slate-600 text-sm">${hoursText}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 text-left">
                    <p className="font-bold text-slate-900 mb-3 text-sm">${alsoServing}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                        <Link to="/acupuncture-waikiki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">${linkWaikiki}</Link>
                        <Link to="/acupuncture-kaimuki" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">${linkKaimuki}</Link>
                        <Link to="/acupuncture-ala-moana" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">${linkAlaMoana}</Link>
                        <Link to="/acupuncture-kahala" className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md hover:bg-blue-50">${linkKahala}</Link>
                    </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">${reviewTitle} <span className="flex h-2 w-2 rounded-full bg-emerald-500 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span></span></h4>
              <p className="text-slate-300 italic text-sm leading-relaxed mb-4">${reviewText}</p>
              <div className="flex items-center gap-4 mt-6">
                 <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white shadow-inner">ST</div>
                 <div>
                    <p className="text-white font-semibold text-sm">Sarah T.</p>
                    <p className="text-blue-400 text-xs">${residentText}</p>
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
`;
}

files.forEach(file => {
  // Write new content to every file
  const newContent = generateSEOContent(file);
  fs.writeFileSync(path.join(dir, file), newContent, 'utf8');
});
console.log('Successfully rewrote ' + files.length + ' SEO pages with newly categorized deep content templates.');
