import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, Lock, Check } from 'lucide-react';
// @ts-ignore
import { Lunar } from 'lunar-javascript';

type ElementType = 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';

type Bead = {
  element: string;
  type: 'innate' | 'acquired' | 'subconscious';
  char: string;
};

const FIVE_ELEMENTS_MAP = {
  '甲': 'Wood', '乙': 'Wood',
  '丙': 'Fire', '丁': 'Fire',
  '戊': 'Earth', '己': 'Earth',
  '庚': 'Metal', '辛': 'Metal',
  '壬': 'Water', '癸': 'Water',
  '子': 'Water', '丑': 'Earth',
  '寅': 'Wood', '卯': 'Wood',
  '辰': 'Earth', '巳': 'Fire',
  '午': 'Fire', '未': 'Earth',
  '申': 'Metal', '酉': 'Metal',
  '戌': 'Earth', '亥': 'Water'
} as const;

const elementNamesZh: Record<string, string> = {
  'Wood': '木 (肝胆)',
  'Fire': '火 (心神)',
  'Earth': '土 (脾胃)',
  'Metal': '金 (肺卫)',
  'Water': '水 (肾骨)'
};

const elementNamesEn: Record<string, string> = {
  'Wood': 'Wood (Liver)',
  'Fire': 'Fire (Heart)',
  'Earth': 'Earth (Spleen)',
  'Metal': 'Metal (Lung)',
  'Water': 'Water (Kidney)'
};

const elementNamesJa: Record<string, string> = {
  'Wood': '木 (肝胆)',
  'Fire': '火 (心神)',
  'Earth': '土 (脾胃)',
  'Metal': '金 (肺衛)',
  'Water': '水 (腎骨)'
};

const getBeadBaseColor = (el: string) => {
  switch(el) {
    case 'Wood': return '#10B981'; // Emerald Green
    case 'Fire': return '#EF4444'; // Red
    case 'Earth': return '#F59E0B'; // Amber Gold
    case 'Metal': return '#64748B'; // Slate/Silver
    case 'Water': return '#3B82F6'; // Blue
    default: return '#9CA3AF';
  }
};

const getGanZhiElement = (ganzhi: string) => {
  if (!ganzhi || ganzhi === '未知') return 'Neutral';
  const stem = ganzhi[0];
  return FIVE_ELEMENTS_MAP[stem as keyof typeof FIVE_ELEMENTS_MAP] || 'Neutral';
};

const constitutionDescriptions = {
  zh: {
    'Wood': {
      title: '木型体质 (肝气偏旺/易郁型)',
      desc: '您的先天格局中木元素偏强。中医认为，木气对应肝胆。木型体质者通常精力充沛、工作效率高，但在压力下极易“肝气郁结”或“肝阳上亢”，表现为长期慢性的肩膀颈椎酸痛、头痛或情绪波动。',
      advice: '建议日常多饮玫瑰花茶以疏肝理气。多做拉伸运动以柔筋。按压太冲穴 (LR3) 每次3分钟，可显著缓解气血郁滞。'
    },
    'Fire': {
      title: '火型体质 (心火偏旺/神浮型)',
      desc: '您的先天格局中火元素偏强。火对应心神。火型体质的人充满热情、思维敏捷，但也容易“心火上炎”，在休息不足或压力大时容易出现心慌、失眠、焦虑或多梦易醒。',
      advice: '建议下午或晚上避免饮用咖啡和浓茶。睡前用温水泡脚以引火下行。按压神门穴 (HT7) 或内关穴 (PC6) 以安神助眠。'
    },
    'Earth': {
      title: '土型体质 (脾胃气虚/湿滞型)',
      desc: '您的先天格局中土元素偏弱。土对应脾胃。脾胃为后天之本。如果土气不足，脾的运化水分和营养功能容易减退，临床表现为容易消化不良、饭后腹胀、全身困重、经常感到慢性疲劳，且容易伴随肌肉无力。',
      advice: '建议坚持三餐规律，避免暴饮暴食和过量生冷食物。可多食山药、薏米以健脾祛湿。常按足三里穴 (ST36) 可增强脾胃之气。'
    },
    'Metal': {
      title: '金型体质 (肺卫气虚/敏感型)',
      desc: '您的先天格局中金元素偏弱。金对应肺与大肠。肺主皮毛，是身体防御外界风寒的防线。金气不足的人容易对花粉、冷空气过敏，免疫力偏低容易感冒，或经常皮肤干燥、肠道不调。',
      advice: '建议多做深呼吸训练，增强肺活量。少吃辛辣刺激食物。多饮百合银耳汤润肺。按压合谷穴 (LI4) 和列缺穴 (LU7) 以固表御卫。'
    },
    'Water': {
      title: '水型体质 (肾气偏弱/骨软型)',
      desc: '您的先天格局中水元素偏弱。水对应肾脏。肾主骨生髓，是人的先天之本。水气偏弱者容易在疲劳时出现慢性的腰膝酸痛、四肢怕冷，或晚上频繁起夜，性功能或精力感到低下。',
      advice: '注意腰部和足部的保暖，避免熬夜伤阴。可适量食用黑芝麻、黑豆等黑色食物以补肾。常灸或按摩太溪穴 (KI3) 和涌泉穴 (KI1) 以培元固本。'
    }
  },
  en: {
    'Wood': {
      title: 'Wood Constitution (Liver Qi Excess / Stagnation Type)',
      desc: "Your innate constitution has a strong Wood element. In TCM, Wood corresponds to the Liver and Gallbladder. Wood archetypes are energetic and highly efficient, but under stress, they are prone to Liver Qi stagnation or Liver Yang rising, manifesting as chronic shoulder and neck tension, headaches, or mood swings.",
      advice: "We suggest drinking rose tea daily to soothe the Liver Qi. Incorporate stretching exercises to soften the tendons. Massage the Taichong point (LR3) for 3 minutes daily to relieve stagnation."
    },
    'Fire': {
      title: 'Fire Constitution (Heart Fire Excess / Overactive Mind Type)',
      desc: "Your innate constitution has a strong Fire element. Fire corresponds to the Heart and Shen (spirit). Fire archetypes are passionate, quick-thinking, and creative, but are prone to Heart Fire flaring up, manifesting as heart palpitations, insomnia, anxiety, or vivid dreams when sleep-deprived.",
      advice: "Avoid caffeine or strong tea in the afternoon or evening. Soak your feet in warm water before sleep to draw heat downwards. Press Shenmen (HT7) or Neiguan (PC6) to calm the mind."
    },
    'Earth': {
      title: 'Earth Constitution (Spleen Qi Deficiency / Damp Retention Type)',
      desc: "Your innate constitution has a weaker Earth element. Earth corresponds to the Spleen and Stomach, which are the root of post-natal life. Weak Earth energy impairs digestion and fluid transport, manifesting as indigestion, bloating, body heaviness, chronic fatigue, and weak muscles.",
      advice: "Maintain regular eating hours and avoid raw, cold, or overly greasy foods. Consume Chinese Yam or Job's Tears to strengthen the Spleen. Regularly press Zusanli (ST36) to boost Spleen Qi."
    },
    'Metal': {
      title: 'Metal Constitution (Lung Qi Deficiency / Sensitive Skin & Lung Type)',
      desc: "Your innate constitution has a weaker Metal element. Metal corresponds to the Lungs and Large Intestine. The Lung controls the skin and defensive Qi (Wei Qi) against external pathogons. Deficient Metal makes you susceptible to seasonal allergies, frequent colds, dry skin, and irregular bowel movements.",
      advice: "Engage in deep breathing exercises to expand lung capacity. Avoid overly spicy foods. Drink lily bulb and snow fungus soup to moisten the lungs. Press Hegu (LI4) and Lieque (LU7) to boost immunity."
    },
    'Water': {
      title: 'Water Constitution (Kidney Qi Deficiency / Vitality Depletion Type)',
      desc: "Your innate constitution has a weaker Water element. Water corresponds to the Kidneys, the storehouse of prenatal essence (Jing). Weakened Kidney energy leads to chronic lower back pain, knee weakness, cold extremities, nocturia, and low vitality or libido under exhaustion.",
      advice: "Keep your lower back and feet warm, and avoid staying up late. Eat black sesame or black beans to nourish Kidney Qi. Regularly massage Taixi (KI3) and Yongquan (KI1) to replenish your body's vital essence."
    }
  },
  ja: {
    'Wood': {
      title: '木型体質（肝気鬱結・ストレス蓄積型）',
      desc: 'あなたの生まれ持った五行パターンでは「木」のエネルギーが強く現れています。東洋医学において「木」は肝胆（肝臓・胆嚢）に対応します。木型体質の方はエネルギーに満ち、仕事の効率も高いですが、ストレスを受けると「肝気鬱結」を起こしやすく、肩こりや頭痛、情緒不安定になりやすい傾向があります。',
      advice: '日常的にローズティーやマイカイ花茶を飲み、肝の気を巡らせることをお勧めします。ストレッチで筋をほぐし、太衝穴（LR3）を毎日3分間マッサージして気の滞りを解消しましょう。'
    },
    'Fire': {
      title: '火型体質（心火旺盛・のぼせ型）',
      desc: 'あなたの生まれ持った五行パターンでは「火」のエネルギーが強く現れています。東洋医学において「火」は心神（心臓・自律神経）に対応します。火型体質の方は情熱的で直感に優れますが、心火が燃え上がりやすく、睡眠不足や過労の際に動悸、不眠、焦燥感、多夢の症状が出やすくなります。',
      advice: '午後以降のカフェインや濃いお茶の摂取は避けましょう。就寝前に温水で足湯を行い、頭部の熱を下げてください。神門穴（HT7）や内関穴（PC6）を揉むと、心を落ち着かせて睡眠をサポートできます。',
    },
    'Earth': {
      title: '土型体質（脾胃虚弱・湿気停滞型）',
      desc: 'あなたの生まれ持った五行パターンでは「土」のエネルギーが弱めです。東洋医学において「土」は脾胃（消化器系）に対応し、生きるエネルギーを生み出す根本です。脾胃が弱いと水分の代謝や栄養吸収が滞り、食後の胃もたれ、体が重だるい、慢性疲労、筋肉の低下が現れやすくなります。',
      advice: '規則正しい食生活を心がけ、生冷ものや油っこいものを控えましょう。山芋やハトムギを食べると脾が潤います。足三里穴（ST36）を日々マッサージして胃腸の機能を高めてください。'
    },
    'Metal': {
      title: '金型体質（肺気虚弱・バリア機能低下型）',
      desc: 'あなたの生まれ持った五行パターンでは「金」のエネルギーが弱めです。東洋医学において「金」は肺・大腸に対応します。肺は皮膚を司り、風邪など外邪から体を守る役割（衛気）があります。金が不足すると、寒暖差やアレルギーに弱く、風邪を引きやすくなり、肌が乾燥しやすくなります。',
      advice: '深呼吸の習慣をつけ、肺活量を高めましょう。辛い刺激物の摂りすぎを控え、ユリの根や白キクラゲのスープで肺を潤します。合谷穴（LI4）や列欠穴（LU7）を押すことで免疫力を補います。'
    },
    'Water': {
      title: '水型体質（腎気不足・エネルギー消耗型）',
      desc: 'あなたの生まれ持った五行パターンでは「水」のエネルギーが弱めです。東洋医学において「水」は腎臓（生命力の源）に対応します。腎は骨や生殖を司る先天の生命力の源です。水が不足すると、腰痛や膝の力不足、手足の冷え、夜間頻尿、極度の疲労感を感じやすくなります。',
      advice: '腰元や足を冷やさないようにし、夜更かしを避けましょう。黒ゴマや黒豆などの黒い食材が腎の機能を補います。太渓穴（KI3）や湧泉穴（KI1）をお灸やマッサージで刺激して精気を補いましょう。'
    }
  }
};

const quotes = {
  zh: {
    'Wood': '万物生发，不破不立。您需要扎根大地的勇气，来对抗风雨中的焦虑。',
    'Fire': '心火炽盛，向阳而生。与其在内耗中燃烧自己，不如将热情化作照亮前路的明灯。',
    'Earth': '厚德载物，固本培元。放下那些不属于您的重担，给自己一片可以安静降落的土壤。',
    'Metal': '百炼成钢，断舍离尘。斩断那些混乱的羁绊，在极简与秩序中找回内心的锋芒。',
    'Water': '上善若水，顺流而下。不必时刻紧绷对抗，允许自己像水一样，在静默中积蓄千钧之力。'
  },
  en: {
    'Wood': 'All things grow; breakthrough requires destruction. You need the courage to root deep into the earth to withstand the winds of anxiety.',
    'Fire': 'The heart fire burns bright, growing towards the light. Instead of burning out in self-sabotage, turn your passion into a beacon to light your path.',
    'Earth': 'Great virtue carries all; nourish your roots. Lay down the burdens that do not belong to you, and give yourself a peaceful ground to land.',
    'Metal': 'Tempered steel cuts through dust. Sever chaotic ties and find your inner sharp focus through simplicity and order.',
    'Water': "The highest good is like water, flowing downwards. No need to fight constantly; allow yourself, like water, to accumulate strength in silence."
  },
  ja: {
    'Wood': '万物は芽吹き、古い殻を破ることで生まれます。風雨の不安に立ち向かうには、大地に深く根を張る勇気が必要です。',
    'Fire': '心火は燃え上がり、光に向かって生きています。葛藤の中で身を削るのではなく、その情熱で前路を照らし出しましょう。',
    'Earth': '厚徳は万物を載せ、根本を養います。自分のものではない重荷を下ろし、心が静かに着地できる土壌を与えてください。',
    'Metal': '百錬の鋼は塵を断ちます。混乱した絆を断ち切り、極限のシンプルさと秩序の中で内なる強さを見出しましょう。',
    'Water': '上善は水のごとく、下流へと流れます。常に緊張して対抗する必要はありません。静寂の中で莫大な力を蓄えましょう。'
  }
};

const deficientTeasers = {
  zh: {
    'Wood': '您的不足能量为木元素。这代表您目前缺乏生长、活力与远见，可能感到缺乏动力、方向模糊，或是难以规划未来。',
    'Fire': '您的不足能量为火元素。这代表您目前缺乏温热、喜悦与情绪的舒展，可能感到情绪平淡、内心寒冷，或失去了灵感的火花。',
    'Earth': '您的不足能量为土元素。这代表您目前缺乏根基、稳定与滋养，可能感到焦虑、漂浮不定，没有一个能够让您安心落脚的安全土壤。',
    'Metal': '您的不足能量为金元素。这代表您目前缺乏界限感、清晰度与断舍离的能力，容易被混乱所包围，或抓着旧有的情绪垃圾不放。',
    'Water': '您的不足能量为水元素。这代表您目前缺乏休息、深层储备与内心的宁静，正处于透支状态，难以链接内心的深层智慧。'
  },
  en: {
    'Wood': 'Your deficient energy is Wood. This means you currently lack growth, vitality, and vision, potentially feeling unmotivated, aimless, or finding it hard to plan your future.',
    'Fire': 'Your deficient energy is Fire. This means you currently lack warmth, joy, and emotional openness, potentially feeling emotionally flat, cold inside, or lacking creative inspiration.',
    'Earth': 'Your deficient energy is Earth. This means you currently lack grounding, stability, and nourishment, potentially feeling anxious, unanchored, and without a safe soil to land.',
    'Metal': 'Your deficient energy is Metal. This means you currently lack boundaries, clarity, and the ability to let go, potentially feeling overwhelmed by clutter or holding onto emotional baggage.',
    'Water': 'Your deficient energy is Water. This means you currently lack rest, deep reserves, and inner tranquility, potentially feeling depleted and disconnected from your inner wisdom.'
  },
  ja: {
    'Wood': 'あなたの不足するエネルギーは「木」です。これは現在、成長や活力、未来へのビジョンが欠けていることを意味し、やる気が出ない、方向性が見えない、将来の計画が立てにくいと感じている可能性があります。',
    'Fire': 'あなたの不足するエネルギーは「火」です。これは現在、温かさや喜び、感情の広がりが欠けていることを意味し、感情が平坦で心が冷たく感じられたり、インスピレーションの火花を失っている可能性があります。',
    'Earth': 'あなたの不足するエネルギーは「土」です。これは現在、根付きや安定、滋養が欠けていることを意味し、焦燥感や浮遊感があり、心が安らぐ安全な土壌がないと感じている可能性があります。',
    'Metal': 'あなたの不足するエネルギーは「金」です。これは現在、境界線や明晰さ、断捨離する力が欠けていることを意味し、身の回りの混乱に巻き込まれやすく、過去の感情的なゴミを手放せない可能性があります。',
    'Water': 'あなたの不足するエネルギーは「水」です。これは現在、休息や深い備え、内面の静寂が欠けていることを意味し、エネルギーを消耗し尽くしており、内なる深い知恵とつながりにくくなっている可能性があります。'
  }
};

const symptomTexts = {
  zh: [
    { code: 'A', text: '常感到心烦或脑子转个不停，难以静下来' },
    { code: 'B', text: '睡眠很轻、易醒，或者睡醒后还是觉得累' },
    { code: 'C', text: '胃口时好时坏，吃点东西就容易肚子胀、不舒服' },
    { code: 'D', text: '身体经常发紧，肩颈绷得很紧或有说不出的酸痛' },
    { code: 'E', text: '总觉得力不从心，身体没电，容易疲倦和打不起精神' },
    { code: 'none', text: '以上皆无，感觉身心状态良好' }
  ],
  en: [
    { code: 'A', text: 'Mind racing, easily anxious, or finding it hard to quiet your thoughts' },
    { code: 'B', text: 'Light sleeper, easily awoken, or waking up still feeling tired' },
    { code: 'C', text: 'Fluctuating appetite, sensitive stomach, or bloating after eating' },
    { code: 'D', text: 'Body stiffness, tight neck and shoulders, or unexplained muscle aches' },
    { code: 'E', text: 'Running on low battery, chronically drained, or lacking physical vitality' },
    { code: 'none', text: 'None of the above, feeling perfectly balanced' }
  ],
  ja: [
    { code: 'A', text: 'イライラしやすい、焦りを感じる、または考えすぎて頭が休まらない' },
    { code: 'B', text: '眠りが浅い、夜中に目が覚める、または朝起きた時にスッキリしない' },
    { code: 'C', text: '食欲にムラがある、または食べると胃もたれやお腹の張りを感じやすい' },
    { code: 'D', text: '首や肩のコリが抜けない、体が強張る、またはすっきりしない鈍痛がある' },
    { code: 'E', text: '疲れが取れにくい、常に体が重だるい、またはエネルギー不足を感じる' },
    { code: 'none', text: '上記のいずれでもなく、心身ともに非常に良好' }
  ]
};

const clinicalAcupuncturePlans = {
  zh: {
    A: {
      title: "针灸疏肝解郁方案 (Acupuncture for Overthinking & Anxiety)",
      desc: "针对紧张焦虑、脑力过度。针灸可通过调节神经递质，有效安定心神。长期的过度思虑会耗伤脾气与心血，导致消化不良与脑雾。我们针刺头皮及相关经络穴位，帮助松弛神经，缓解肩颈肌肉紧绷。"
    },
    B: {
      title: "针灸交通心肾安神方案 (Acupuncture for Insomnia & Poor Sleep)",
      desc: "针对睡眠质量差、易醒多梦。针灸有助于调节人体的昼夜节律。通过针刺神门、三阴交等要穴，调和阴阳、滋阴降火，帮助您缩短入睡时间，延长深睡眠，恢复精力。"
    },
    C: {
      title: "针灸调理脾胃消滞方案 (Acupuncture for Digestive Discomfort)",
      desc: "针对饮食不节、脾胃虚弱。针灸可通过兴奋迷走神经，促进胃肠蠕动和消化液分泌。我们选用中脘、足三里等中焦核心穴位，有效缓解饭后腹胀、反酸及慢性胃痛。"
    },
    D: {
      title: "针灸通络止痛方案 (Acupuncture for Pain Relief)",
      desc: "针对肌肉酸痛、游走性疼痛。中医认为“不通则痛”。针灸可刺激局部神经释放内源性内啡肽（天然镇痛剂），改善微循环。针对您的酸痛点，实施靶向透刺，快速缓解痛症、改善关节活动度。"
    },
    E: {
      title: "针灸培元固本补虚方案 (Acupuncture for Fatigue & Libido)",
      desc: "针对慢性疲劳、腰膝酸软、精力低下。这代表肾气亏虚、元气不足。针灸通过艾灸气海、关元，针刺太溪等强壮穴位，温补下元、温通经络，激发机体免疫力，重塑生机活力。"
    },
    none: {
      title: "节气防病与未病调理方案 (Preventative Seasonal Wellness)",
      desc: "针对目前没有明显突出的身体不适。中医最高境界为“治未病”。David Cai 医生建议您进行定期的节气调理。针灸通过调和经络气血、培补元气，能够增强机体免疫防线，保持阴阳平衡，达到预防衰老、延年益寿的目的。"
    }
  },
  en: {
    A: {
      title: "Acupuncture for Overthinking & Anxiety",
      desc: "Targeting stress and mental fatigue. Acupuncture helps quiet the mind by regulating neurotransmitters. Chronic worry overtaxes the Spleen and Heart Qi, leading to indigestion and brain fog. We utilize specific cranial and meridian points to calm your nervous system and release muscle tension."
    },
    B: {
      title: "Acupuncture for Insomnia & Poor Sleep",
      desc: "Targeting poor sleep quality and insomnia. Acupuncture helps regulate your body's natural circadian rhythm. By targeting specific points like Shenmen (HT7) and Sanyinjiao (SP6), we balance Yin and Yang, reduce night sweat or dry throat, helping you fall asleep faster and experience deeper rest."
    },
    C: {
      title: "Acupuncture for Digestive Discomfort",
      desc: "Targeting irregular diet and indigestion. Acupuncture stimulates the vagus nerve to enhance gastric motility and improve enzyme secretion. By using central points like Zhongwan (CV12) and Zusanli (ST36), we effectively relieve post-meal bloating, acid reflux, and chronic discomfort."
    },
    D: {
      title: "Acupuncture for Chronic Pain Relief",
      desc: "Targeting body aches and localized tension. In TCM, pain arises when Qi and Blood are blocked. Acupuncture triggers the release of endorphins (natural painkillers) and improves local micro-circulation. We apply targeted treatment at your trigger points to quickly resolve pain and restore joint mobility."
    },
    E: {
      title: "Acupuncture for Fatigue & Vitality",
      desc: "Targeting chronic fatigue, lower back weakness, and low libido. This signals Kidney essence depletion. By applying warm moxibustion to Qihai (CV6) and Guanyuan (CV4), combined with acupuncture at Taixi (KI3), we warm the lower dantian, boost immunity, and restore physical stamina."
    },
    none: {
      title: "Preventative Seasonal Wellness Plan",
      desc: "For individuals with no acute health concerns. In TCM, the highest form of medicine is 'treating before disease arises' (preventative care). Dr. David Cai suggests periodic seasonal acupuncture. This helps maintain balanced Qi and Blood, optimizes your immune system, and promotes longevity."
    }
  },
  ja: {
    A: {
      title: "脳疲労と不安を和らげる鍼灸アプローチ",
      desc: "過度な緊張や考えすぎを対象とします。鍼治療は神経伝達物質を調整することで、興奮した精神を穏やかにし脳を休ませます。長年の心配事は脾胃（消化器系）と心を損ない、消化不良やブレインフォグを起こします。頭部や手足の経穴を刺激し、神経と肩首のこりを優しく緩和します。"
    },
    B: {
      title: "睡眠導入・心身安定鍼灸プラン",
      desc: "睡眠の質の低下や不眠を対象とします。鍼治療は自律神経を整え、体内時計の正常なリズムを取り戻す手助けをします。神門や三陰交などの主要な経穴を刺激することで、陰陽のバランスを調和させ、深い睡眠時間を延ばします。"
    },
    C: {
      title: "脾胃（胃腸）調整・消化促進プラン",
      desc: "食生活の乱れや胃腸の弱りを対象とします。鍼刺激は迷走神経を活発にし、胃腸の蠕動運動と消化液の分泌を改善します。中脘や足三里といった腹部・足の経穴を使用し、食後のもたれや慢性的な胃痛を効果的に和らげます。"
    },
    D: {
      title: "気血促進・慢性疼痛緩和プラン",
      desc: "慢性的な筋肉痛や関節の張りを対象とします。東洋医学では「通じざればすなわち痛む（気血の滞りが痛みを起こす）」と考えます。鍼は痛みを抑える物質（エンドルフィン）の分泌を促し、局所の循環を高めて痛みを素早く和らげ、可動域を広げます。"
    },
    E: {
      title: "生命力充填・疲労回復お灸ケア",
      desc: "慢性的な疲労、精力減退、腰痛を対象とします。これは腎気や生命エネルギー（元気）が枯渇しているサインです。気海や関元へのお灸治療、太渓への鍼治療を通じて下腹部を温め、自己免疫力を高め、全身に活力をみなぎらせます。"
    },
    none: {
      title: "未病防衛・季節の養生鍼灸プラン",
      desc: "現在、目立った体調不良がない方を対象とします。中医学の最高峰は「未病を治す（病気になる前に防ぐ）」ことです。デビッド医師は、季節の変わり目に定期的な調律鍼治療を受けることをお勧めします。これにより気血を整え、自己免疫力を高め、健康的な長寿を維持できます。"
    }
  }
};

const dict = {
  zh: {
    title: "中医体质与生命节律评估",
    hours: [
      { value: "00:00", label: "子时 (23:00-01:00)" },
      { value: "02:00", label: "丑时 (01:00-03:00)" },
      { value: "04:00", label: "寅时 (03:00-05:00)" },
      { value: "06:00", label: "卯时 (05:00-07:00)" },
      { value: "08:00", label: "辰时 (07:00-09:00)" },
      { value: "10:00", label: "巳时 (09:00-11:00)" },
      { value: "12:00", label: "午时 (11:00-13:00)" },
      { value: "14:00", label: "未时 (13:00-15:00)" },
      { value: "16:00", label: "申时 (15:00-17:00)" },
      { value: "18:00", label: "酉时 (17:00-19:00)" },
      { value: "20:00", label: "戌时 (19:00-21:00)" },
      { value: "22:00", label: "亥时 (21:00-23:00)" }
    ],
    subtitle: "结合《黄帝内经·上古天真论》与先天五运六气禀赋的临床测评",
    step1_title: "第一步：输入您的基本信息",
    step1_desc: "用于计算您的先天五行局与生命节律段",
    name_label: "您的尊称",
    name_placeholder: "例如：张先生 / David",
    gender_label: "生理性别 (生命成长节点男八女七)",
    gender_male: "男 ♂",
    gender_female: "女 ♀",
    dob_label: "公历出生日期",
    tob_label: "出生时辰 (可选)",
    next_btn_step1: "下一步：勾选身心感受",
    step2_title: "第二步：您最近的身心感受如何？",
    step2_desc: "请勾选您最近比较有共鸣的身心感受（可多选）",
    next_btn_step2: "下一步：解锁报告",
    back_btn: "返回上一步",
    step3_title: "报告已就绪！",
    step3_desc: "请输入您的电子邮箱，报告将立即生成，我们也会为您发送一份长期的节律养生指南。",
    email_placeholder: "输入您的邮箱（例如：example@gmail.com）",
    unlock_report_btn: "解锁体质报告 🔓",
    results_title: "您的专属身心能量分析",
    results_badge: "中医五行与生命节律报告",
    timezone_label: "时区：慢生命节律 (UTC-10)",
    book_btn: "预约门诊评估",
    beads_desc: "外圈 8 颗先天珠（出生局）与 8 颗后天珠（当前时空）匀速运转，内核心为 4 颗身心主观能量鱼眼",
    classic_title: "Classic Edition (免费版)",
    classic_desc: "免费基础排印版 & 主导能量",
    download_wallpaper: "下载您的专属能量护身壁纸 📥",
    dna_title: "DNA Edition (解锁版)",
    dna_desc: "深度能量图腾交织 & 临床调理建议",
    price_label: "一次性解锁",
    unlock_now_btn: "付费解锁完整报告",
    unlocked_badge: "DNA 完整报告已解锁",
    save_wallet_btn: "📥 保存至 Apple Wallet",
    downloading_pass: "正在生成 Pass 包...",
    birth_chart_title: "YOUR BIRTH CHART (先天出生局)",
    current_chart_title: "CURRENT HONOLULU (当前时空局)",
    dominant_energy_title: "Your Current Dominant Energy (先天与时空能量属性)",
    dominant_title: "Dominant Element",
    dominant_badge: "最强主导",
    deficient_badge: "偏弱缺失",
    deficient_title: "Deficient Energy",
    deficient_locked: "🔒 未解锁",
    deficient_quote_locked: "“解锁 DNA 专属报告，查看您的不足能量五脏分析与断舍离指南”",
    dominant_phys_title: "主导先天体质特征与理疗对策",
    weak_phys_title: "先天缺失/偏弱体质调养",
    neijing_title: "《黄帝内经》生命节律年龄段评估",
    consult_title: "临床对症针灸方案建议",
    consult_desc: "基于您所选择的身体症状，David Cai 医生为您量身定制的临床针灸及调养计划如下：",
    unlocked_booking_title: "已为您制定最佳调养建议！立即结合临床针灸进行治疗",
    unlocked_booking_desc: "David Cai 医生将根据您的先天弱项五行与生命岁数，利用精细的脉诊定位您体内的失衡点，实施精准的按时针灸治疗。",
    unlocked_booking_btn: "在线预约门诊治疗",
    radar_title: "先天五脏气血平衡度",
    radar_desc: "旁侧网状雷达图（Radar Chart）显示了您出生的五行气场。每个顶点对应中医五脏：越向外偏斜的代表气血偏旺，越往中心收敛的代表能量偏弱。",
    pay_modal_title: "安全解锁高级体质报告",
    pay_modal_subtitle: "一次性买断解锁，永久访问此报告",
    pay_card_num: "信用卡号码",
    pay_expiry: "有效期",
    pay_cvc: "CVC 安全码",
    pay_btn: "支付并解锁 $9.90",
    paying_status: "正在安全验证...",
    disclaimer: "* 提示：本测试为传统中医健康评估，基于天干地支数理与黄帝内经经典。测试报告提供建议与日常穴位理疗指导，不能代替专业医疗诊断与处方。如有严重疾病，请遵医嘱并预约医生面诊。"
  },
  en: {
    title: "TCM Constitution & Life Cycle Assessment",
    hours: [
      { value: "00:00", label: "Zi Hour (23:00-01:00)" },
      { value: "02:00", label: "Chou Hour (01:00-03:00)" },
      { value: "04:00", label: "Yin Hour (03:00-05:00)" },
      { value: "06:00", label: "Mao Hour (05:00-07:00)" },
      { value: "08:00", label: "Chen Hour (07:00-09:00)" },
      { value: "10:00", label: "Si Hour (09:00-11:00)" },
      { value: "12:00", label: "Wu Hour (11:00-13:00)" },
      { value: "14:00", label: "Wei Hour (13:00-15:00)" },
      { value: "16:00", label: "Shen Hour (15:00-17:00)" },
      { value: "18:00", label: "You Hour (17:00-19:00)" },
      { value: "20:00", label: "Xu Hour (19:00-21:00)" },
      { value: "22:00", label: "Hai Hour (21:00-23:00)" }
    ],
    subtitle: "Clinical evaluation combining Huangdi Neijing (Internal Classic) cycles and innate BaZi elements",
    step1_title: "Step 1: Enter Your Basic Information",
    step1_desc: "Used to calculate your innate Five Elements and life cycle milestone.",
    name_label: "Your Name",
    name_placeholder: "e.g., David / Mr. Smith",
    gender_label: "Biological Gender (Male: 8-year cycles, Female: 7-year cycles)",
    gender_male: "Male ♂",
    gender_female: "Female ♀",
    dob_label: "Date of Birth (Solar Calendar)",
    tob_label: "Hour of Birth (Optional)",
    next_btn_step1: "Next: How You're Feeling",
    step2_title: "Step 2: How has your body and mind been feeling lately?",
    step2_desc: "Select the feelings that resonate with you lately (multiple choices allowed)",
    next_btn_step2: "Next: Unlock Report",
    back_btn: "Back",
    step3_title: "Report Ready!",
    step3_desc: "Enter your email address to immediately generate your report and receive a long-term rhythm wellness guide.",
    email_placeholder: "Enter your email (e.g., example@gmail.com)",
    unlock_report_btn: "Unlock Report 🔓",
    results_title: "Your Body & Mind Energy Profile",
    results_badge: "TCM Five Elements & Life Cycle Report",
    timezone_label: "Timezone: Honolulu (UTC-10)",
    book_btn: "Book Appointment",
    beads_desc: "The outer circle contains 8 innate beads (birth chart) and 8 acquired beads (current Honolulu elements) rotating smoothly. The core has 4 subconscious beads.",
    classic_title: "Classic Edition (Free)",
    classic_desc: "Free sequential design & dominant energy details",
    download_wallpaper: "Download Custom Energy Talisman Wallpaper 📥",
    dna_title: "DNA Edition (Premium)",
    dna_desc: "Deep energy intertwining & clinical recommendations",
    price_label: "One-time purchase",
    unlock_now_btn: "Unlock Premium Report",
    unlocked_badge: "DNA Premium Report Unlocked",
    save_wallet_btn: "📥 Save to Apple Wallet",
    downloading_pass: "Compiling Pass File...",
    birth_chart_title: "YOUR BIRTH CHART",
    current_chart_title: "CURRENT HONOLULU",
    dominant_energy_title: "Your Current Dominant Energy",
    dominant_title: "Dominant Element",
    dominant_badge: "Dominant",
    deficient_badge: "Deficient",
    deficient_title: "Deficient Energy",
    deficient_locked: "🔒 Locked",
    deficient_quote_locked: "“Unlock the DNA Edition to view your deficient organ analysis and daily guidelines.”",
    dominant_phys_title: "Dominant Innate Constitution & Advice",
    weak_phys_title: "Deficient / Weakened Constitution Advice",
    neijing_title: "Huangdi Neijing Life Cycle Evaluation",
    consult_title: "Clinical Treatment Plan (Acupuncture Options)",
    consult_desc: "Based on your selected symptoms, Dr. David Cai recommends the following targeted clinical acupuncture treatment plans:",
    unlocked_booking_title: "Tailored clinical recommendations are ready! Book your face-to-face appointment",
    unlocked_booking_desc: "Dr. David Cai will use pulse diagnosis to locate blockages based on your deficient elements and current age cycle, applying target acupuncture treatments.",
    unlocked_booking_btn: "Book Clinic Treatment Now",
    radar_title: "Five Elements Qi & Blood Balance",
    radar_desc: "The adjacent Radar Chart displays your innate elemental Qi field. Vertices correspond to TCM organs: further out means excess, closer to the center means deficiency.",
    pay_modal_title: "Securely Unlock Advanced Report",
    pay_modal_subtitle: "One-time buyout, permanent access to this report",
    pay_card_num: "Credit Card Number",
    pay_expiry: "Expiry Date",
    pay_cvc: "CVC Code",
    pay_btn: "Pay & Unlock $9.90",
    paying_status: "Verifying secure payment...",
    disclaimer: "* Disclaimer: This test is a traditional Chinese medicine health assessment based on dry stem/branch numbers and Huangdi Neijing classics. Recommendations and daily acupressure guidelines do not replace professional medical diagnosis."
  },
  ja: {
    title: "東洋医学体質と生命リズムの評価",
    hours: [
      { value: "00:00", label: "子の刻 (23:00-01:00)" },
      { value: "02:00", label: "丑の刻 (01:00-03:00)" },
      { value: "04:00", label: "寅の刻 (03:00-05:00)" },
      { value: "06:00", label: "卯の刻 (05:00-07:00)" },
      { value: "08:00", label: "辰の刻 (07:00-09:00)" },
      { value: "10:00", label: "巳の刻 (09:00-11:00)" },
      { value: "12:00", label: "午の刻 (11:00-13:00)" },
      { value: "14:00", label: "未の刻 (13:00-15:00)" },
      { value: "16:00", label: "申の刻 (15:00-17:00)" },
      { value: "18:00", label: "酉の刻 (17:00-19:00)" },
      { value: "20:00", label: "戌の刻 (19:00-21:00)" },
      { value: "22:00", label: "亥の刻 (21:00-23:00)" }
    ],
    subtitle: "『黄帝内経・上古天真論』の成長周期と先天的五運六気のエネルギーを組み合わせた臨床評価",
    step1_title: "ステップ 1：基本情報の入力",
    step1_desc: "先天的五行パターンと生命リズムの成長期を算出するために使用します。",
    name_label: "お名前",
    name_placeholder: "例：山田さん / David",
    gender_label: "生理学的性別（男性は8年周期、女性は7年周期）",
    gender_male: "男性 ♂",
    gender_female: "女性 ♀",
    dob_label: "生年月日 (新暦)",
    tob_label: "出生時間 (任意)",
    next_btn_step1: "次へ：心身の調子を選択",
    step2_title: "ステップ 2：最近の心身の調子はいかがですか？",
    step2_desc: "最近共感できる心身の状態を選択してください (複数選択可)",
    next_btn_step2: "次へ：レポートを解析",
    back_btn: "戻る",
    step3_title: "レポートの準備ができました！",
    step3_desc: "メールアドレスを入力すると、レポートが即座に生成され、長期的な養生ガイドもお届けします。",
    email_placeholder: "メールアドレスを入力 (例：example@gmail.com)",
    unlock_report_btn: "レポートをロック解除 🔓",
    results_title: "あなたの心身エネルギー分析",
    results_badge: "中医学五行＆生命リズム診断書",
    timezone_label: "タイムゾーン：ホノルル (UTC-10)",
    book_btn: "クリニック予約",
    beads_desc: "外円の先天的エネルギービーズ8個と、ホノルルの現時宇宙エレメント8個がゆっくり回転し、中心の4個は静かに息づいています。",
    classic_title: "Classic エディション (無料版)",
    classic_desc: "無料基本設計図＆主導エネルギー解説",
    download_wallpaper: "五行エネルギー壁紙のダウンロード 📥",
    dna_title: "DNA エディション (完全版)",
    dna_desc: "深層エネルギー図騰＆鍼灸臨床アドバイス",
    price_label: "一回のみ購入",
    unlock_now_btn: "完全版レポートをアンロック",
    unlocked_badge: "DNA 完全版のロック解除済み",
    save_wallet_btn: "📥 Apple Wallet に追加",
    downloading_pass: "Passファイルを生成中...",
    birth_chart_title: "YOUR BIRTH CHART (出生命式局)",
    current_chart_title: "CURRENT HONOLULU (ホノルル現時局)",
    dominant_energy_title: "先天的＆現時のエネルギー属性",
    dominant_title: "優位な属性",
    dominant_badge: "最も優位",
    deficient_badge: "不足・偏り",
    deficient_title: "不足するエネルギー",
    deficient_locked: "🔒 未解除",
    deficient_quote_locked: "「DNA エディションを購入すると、不足するエネルギーの分析と養生法が表示されます」",
    dominant_phys_title: "優位な体質的特徴と養生法",
    weak_phys_title: "不足する体質の調律と鍼灸ケア",
    neijing_title: "『黄帝内経』生命周期リズム評価",
    consult_title: "臨床的鍼灸対策プラン (鍼灸アプローチ)",
    consult_desc: "選択された身体症状に基づき、デビッド・ツァイ（David Cai）医師が提案するパーソナライズされた臨床鍼灸治療方針は以下の通りです：",
    unlocked_booking_title: "あなたに最適な養生プランが完成しました！今すぐ医師の対面面診を予約",
    unlocked_booking_desc: "デビッド・ツァイ（David Cai）医師が、脈診により不足する経絡のブロックを特定し、あなたに最適なパーソナライズ鍼灸治療を行います。",
    unlocked_booking_btn: "今すぐ鍼灸予約",
    radar_title: "五臓気血のバランス度",
    radar_desc: "隣のレーダーチャートは、あなたの先天的五行気場を示します。外側に向かうほどエネルギーが強く、中心に向かうほど不足しています。",
    pay_modal_title: "完全版レポートのロック解除",
    pay_modal_subtitle: "買い切り型、無期限アクセス可能",
    pay_card_num: "クレジットカード番号",
    pay_expiry: "有効期限",
    pay_cvc: "セキュリティコード (CVC)",
    pay_btn: "決済してロック解除 $9.90",
    paying_status: "安全な決済を処理中...",
    disclaimer: "* 注意：このテストは伝統中医学の評価であり、天干地支および黄帝内経に基づいています。診断書のアドバイスは医師の直接の診断に代わるものではありません。"
  }
};

const elementLocales: Record<string, Record<string, string>> = {
  zh: { Wood: '木', Fire: '火', Earth: '土', Metal: '金', Water: '水' },
  ja: { Wood: '木', Fire: '火', Earth: '土', Metal: '金', Water: '水' },
  en: { Wood: 'Wood', Fire: 'Fire', Earth: 'Earth', Metal: 'Metal', Water: 'Water' }
};

const stemNames = {
  zh: { '甲': '甲', '乙': '乙', '丙': '丙', '丁': '丁', '戊': '戊', '己': '己', '庚': '庚', '辛': '辛', '壬': '壬', '癸': '癸' },
  ja: { '甲': '甲', '乙': '乙', '丙': '丙', '丁': '丁', '戊': '戊', '己': '己', '庚': '庚', '辛': '辛', '壬': '壬', '癸': '癸' },
  en: { '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu', '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui' }
};

const branchNames = {
  zh: { '子': '子', '丑': '丑', '寅': '寅', '卯': '卯', '辰': '辰', '巳': '巳', '午': '午', '未': '未', '申': '申', '酉': '酉', '戌': '戌', '亥': '亥' },
  ja: { '子': '子', '丑': '丑', '寅': '寅', '卯': '卯', '辰': '辰', '巳': '巳', '午': '午', '未': '未', '申': '申', '酉': '酉', '戌': '戌', '亥': '亥' },
  en: { '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si', '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai' }
};

// BaZiCanvas Drawing Component from ManaReset
const BaZiCanvas = ({ beads, mode }: { beads: Bead[], mode: 'ring' | 'dna' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angleOffset = 0;
    
    const beads1 = beads.filter(b => b.type === 'innate');
    const beads2 = beads.filter(b => b.type === 'acquired');
    const totalBeads = beads1.length + beads2.length;

    const drawFrame = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      
      ctx.clearRect(0, 0, width, height);

      const isDna = mode === 'dna';
      const heightStep = isDna ? 18 : 0;
      const radiusBase = isDna ? 60 : 90;
      const spiralTurns = 1;
      const stepAngle = (Math.PI * spiralTurns * 2) / totalBeads;
      const tiltX = isDna ? 0.2 : 0;
      const tiltY = isDna ? -0.2 : 0;

      const drawSpiral = (strandBeads: Bead[], phaseOffset: number, isAcquired: boolean) => {
        strandBeads.forEach((bead, i) => {
          const t = i * stepAngle + angleOffset + phaseOffset;
          const spiralHeight = isDna ? (i - strandBeads.length / 2) * heightStep : 0;
          
          const x = centerX + Math.cos(t) * radiusBase + (isDna ? (i - strandBeads.length / 2) * tiltX : 0);
          const y = isDna 
            ? centerY + spiralHeight + (i - strandBeads.length / 2) * tiltY
            : centerY + Math.sin(t) * radiusBase;

          const baseColor = getBeadBaseColor(bead.element);
          const count = beads.filter(x => x.element === bead.element).length;
          const size = isDna ? (5 + count) : (7 + count);

          ctx.beginPath();
          const grad = ctx.createRadialGradient(x, y, 0, x, y, size);
          grad.addColorStop(0, '#FFFFFF');
          grad.addColorStop(1, baseColor);
          ctx.fillStyle = grad;
          ctx.shadowBlur = 15;
          ctx.shadowColor = baseColor;
          ctx.globalAlpha = 0.85;
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1.0;
          ctx.shadowBlur = 0;

          if (isAcquired) {
            ctx.beginPath();
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = 'rgba(255,255,255,0.5)';
            ctx.arc(x, y, size + 2.5, 0, Math.PI * 2);
            ctx.stroke();
          }
        });
      };

      drawSpiral(beads1, 0, false);
      drawSpiral(beads2, Math.PI, true);

      // Draw Center Yin-Yang
      const subBeads = beads.filter(b => b.type === 'subconscious');
      if (subBeads.length >= 2 && !isDna) {
        const yyRadius = 24;
        const color1 = getBeadBaseColor(subBeads[0].element);
        const color2 = getBeadBaseColor(subBeads[1].element);

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(-angleOffset);

        // Half 1 (White background)
        ctx.beginPath();
        ctx.arc(0, 0, yyRadius, Math.PI/2, Math.PI*1.5);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        // Half 2 (Dark background)
        ctx.beginPath();
        ctx.arc(0, 0, yyRadius, Math.PI*1.5, Math.PI/2);
        ctx.fillStyle = '#0F172A';
        ctx.fill();

        // Top medium circle (Dark)
        ctx.beginPath();
        ctx.arc(0, -yyRadius/2, yyRadius/2, 0, Math.PI*2);
        ctx.fillStyle = '#0F172A';
        ctx.fill();

        // Bottom medium circle (White)
        ctx.beginPath();
        ctx.arc(0, yyRadius/2, yyRadius/2, 0, Math.PI*2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        // Top fish eye
        ctx.beginPath();
        ctx.arc(0, -yyRadius/2, 9, 0, Math.PI*2);
        ctx.fillStyle = color1;
        ctx.fill();
        ctx.shadowBlur = 8;
        ctx.shadowColor = color1;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Bottom fish eye
        ctx.beginPath();
        ctx.arc(0, yyRadius/2, 9, 0, Math.PI*2);
        ctx.fillStyle = color2;
        ctx.fill();
        ctx.shadowBlur = 8;
        ctx.shadowColor = color2;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Outer border
        ctx.beginPath();
        ctx.arc(0, 0, yyRadius, 0, Math.PI*2);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.stroke();

        ctx.restore();
      }

      angleOffset += 0.006;
      animationFrameId = requestAnimationFrame(drawFrame);
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawFrame();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [beads, mode]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default function ConstitutionTestPage() {
  const [lang, setLang] = useState<'zh' | 'en' | 'ja'>('zh');
  const t = dict[lang];

  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [dob, setDob] = useState<string>('');
  const [tob, setTob] = useState<string>('00:00'); // Hour of birth
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [email, setEmail] = useState<string>('');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  
  // Dynamic Canvas states
  const [visualMode, setVisualMode] = useState<'ring' | 'dna'>('ring');
  const [beads, setBeads] = useState<Bead[]>([]);
  
  // Checkout Form states
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvc, setCardCvc] = useState<string>('');
  const [isPaying, setIsPaying] = useState<boolean>(false);
  const [isDownloadingPass, setIsDownloadingPass] = useState<boolean>(false);

  // Detect URL parameter or browser language on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'en' || urlLang === 'zh' || urlLang === 'ja') {
        setLang(urlLang);
      } else {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('ja')) setLang('ja');
        else if (browserLang.startsWith('en')) setLang('en');
        else setLang('zh');
      }

      // Load prefilled Bazi parameters if they came from an email link
      const paramName = params.get('name');
      const paramGender = params.get('gender');
      const paramDob = params.get('dob');
      const paramTob = params.get('tob');
      const paramSymptoms = params.get('symptoms');
      const paramUnlocked = params.get('unlocked');
      const paramEmail = params.get('email');

      if (paramName && paramDob) {
        setName(paramName);
        if (paramGender === 'male' || paramGender === 'female') {
          setGender(paramGender);
        }
        setDob(paramDob);
        if (paramTob) setTob(paramTob);
        if (paramEmail) setEmail(paramEmail);
        
        if (paramSymptoms) {
          try {
            const decoded = decodeURIComponent(paramSymptoms);
            setSelectedSymptoms(JSON.parse(decoded));
          } catch (e) {
            console.error('Failed to parse symptoms from URL:', e);
          }
        }
        
        if (paramUnlocked === 'true') {
          setIsUnlocked(true);
        }
        setStep(4);
      }
    }
  }, []);

  // Automatically calculate Bazi beads when step becomes 4
  useEffect(() => {
    if (step === 4 && dob) {
      const dParts = dob.split('-');
      const y = parseInt(dParts[0]) || 2000;
      const m = parseInt(dParts[1]) || 1;
      const d = parseInt(dParts[2]) || 1;
      
      let h = 12;
      if (tob) {
        const tParts = tob.split(':');
        h = parseInt(tParts[0]) || 0;
      }

      const birthDate = new Date(y, m - 1, d, h, 0);
      const lunar = Lunar.fromDate(birthDate);
      const bY = lunar.getYearInGanZhi();
      const bM = lunar.getMonthInGanZhi();
      const bD = lunar.getDayInGanZhi();
      const bT = lunar.getTimeInGanZhi() || '未知';

      const nowUtc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
      const honoluluTime = new Date(nowUtc - (10 * 3600000));
      const lunarNow = Lunar.fromDate(honoluluTime);
      const cY = lunarNow.getYearInGanZhi();
      const cM = lunarNow.getMonthInGanZhi();
      const cD = lunarNow.getDayInGanZhi();
      const cT = lunarNow.getTimeInGanZhi() || '未知';

      const innate = [
        { element: getGanZhiElement(bY), type: 'innate' as const, char: bY[0] || '年' },
        { element: getGanZhiElement(bY.length > 1 ? bY[1] : ''), type: 'innate' as const, char: bY[1] || '年' },
        { element: getGanZhiElement(bM), type: 'innate' as const, char: bM[0] || '月' },
        { element: getGanZhiElement(bM.length > 1 ? bM[1] : ''), type: 'innate' as const, char: bM[1] || '月' },
        { element: getGanZhiElement(bD), type: 'innate' as const, char: bD[0] || '日' },
        { element: getGanZhiElement(bD.length > 1 ? bD[1] : ''), type: 'innate' as const, char: bD[1] || '日' },
        { element: getGanZhiElement(bT), type: 'innate' as const, char: bT[0] || '时' },
        { element: getGanZhiElement(bT.length > 1 ? bT[1] : ''), type: 'innate' as const, char: bT[1] || '时' },
      ];

      const acquired = [
        { element: getGanZhiElement(cY), type: 'acquired' as const, char: cY[0] || '年' },
        { element: getGanZhiElement(cY.length > 1 ? cY[1] : ''), type: 'acquired' as const, char: cY[1] || '年' },
        { element: getGanZhiElement(cM), type: 'acquired' as const, char: cM[0] || '月' },
        { element: getGanZhiElement(cM.length > 1 ? cM[1] : ''), type: 'acquired' as const, char: cM[1] || '月' },
        { element: getGanZhiElement(cD), type: 'acquired' as const, char: cD[0] || '日' },
        { element: getGanZhiElement(cD.length > 1 ? cD[1] : ''), type: 'acquired' as const, char: cD[1] || '日' },
        { element: getGanZhiElement(cT), type: 'acquired' as const, char: cT[0] || '时' },
        { element: getGanZhiElement(cT.length > 1 ? cT[1] : ''), type: 'acquired' as const, char: cT[1] || '时' },
      ];

      // Calculate dominant and counts for subconscious
      const subCounts = getElementsCount(dob, tob);
      let subDominant: ElementType = 'Wood';
      let subMaxScore = -1;
      Object.keys(subCounts).forEach(key => {
        if (subCounts[key] > subMaxScore) {
          subMaxScore = subCounts[key];
          subDominant = key as ElementType;
        }
      });

      const elementList: string[] = [];
      selectedSymptoms.forEach(code => {
        if (code === 'A') elementList.push('Fire');
        if (code === 'B') elementList.push('Fire');
        if (code === 'C') elementList.push('Earth');
        if (code === 'D') elementList.push('Wood');
        if (code === 'E') elementList.push('Water');
      });
      while (elementList.length < 4) {
        elementList.push(subDominant);
      }
      const subconscious = [
        { element: elementList[0], type: 'subconscious' as const, char: '念' },
        { element: elementList[1], type: 'subconscious' as const, char: '心' },
        { element: elementList[2], type: 'subconscious' as const, char: '意' },
        { element: elementList[3], type: 'subconscious' as const, char: '神' },
      ];

      setBeads([...innate, ...acquired, ...subconscious]);
    }
  }, [step, dob, tob, selectedSymptoms]);

  // 2. Parse age and determine Huangdi Neijing Cycle
  function getNeijingCycle(birthDateStr: string, isFemale: boolean, language: 'zh' | 'en' | 'ja') {
    if (!birthDateStr) return { label: '', quote: '', clinical: '' };
    
    const birthYear = parseInt(birthDateStr.split('-')[0]) || 2000;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    const neijingData = {
      zh: {
        female: [
          { limit: 14, label: '女子一七 (肾气渐盛阶段)', quote: '女子七岁，肾气盛，齿更发长。', clinical: '此时处于儿童生长发育期，肾气开始充盈，乳齿脱落换为恒齿，头发快速生长。应注重全面营养，保障充足睡眠，避免暴饮暴食。' },
          { limit: 21, label: '女子二七 (天癸至/经期开端)', quote: '二七而天癸至，任脉通，太冲脉盛，月事以时下，故有子。', clinical: '此时女性生殖机能成熟，月经按时来潮，具备生育能力。此阶段情绪易波动，需注意经期保暖，避免剧烈运动与生冷饮食，理气调经是核心。' },
          { limit: 35, label: '女子三七至四七 (身体鼎盛状态)', quote: '三七肾气平均，真牙生而长极；四七筋骨坚，发长极，身体盛壮。', clinical: '这是您一生的身体黄金期，肌肉满壮，筋骨最为强健。这是备孕的最佳窗口，也是保养元气、防止透支的关键时期。' },
          { limit: 42, label: '女子五七 (阳明衰退/衰老起点)', quote: '五七，阳明脉衰，面始焦，发始堕。', clinical: '【临床警示】35岁起，手足阳明经（胃经与大肠经）的气血开始衰退。阳明经分布在面部，因此面部皮肤开始松弛干燥，头发开始脱落。调理核心在于“健脾胃、益气血”，通过针灸刺激足阳明经，可延缓衰老，保持皮肤红润。' },
          { limit: 49, label: '女子六七 (三阳脉衰阶段)', quote: '六七，三阳脉衰于上，面皆焦，发始白。', clinical: '【临床警示】42岁起，太阳、阳明、少阳三阳经气血全面衰退，面部皱纹增多，头发开始变白。此阶段身体代谢减慢，容易出现慢性酸痛和情绪抑郁，针灸调理重点在于“疏通三阳，温通经络”。' },
          { limit: 999, label: '女子七七 (天癸竭/更年期阶段)', quote: '七七，任脉虚，太冲脉衰少，天癸竭，地道不通，故形坏而无子也。', clinical: '【临床关怀】49岁前后，任冲两脉血气衰少，天癸干涸，进入绝经期。此时身体激素水平剧烈波动，容易出现潮热盗汗、失眠焦虑、骨质疏松等更年期综合征。针灸可通过调理任督二脉、滋阴清热，安全无副作用地平稳度过更年期。' }
        ],
        male: [
          { limit: 16, label: '丈夫一八 (肾气实阶段)', quote: '丈夫八岁，肾气实，发长齿更。', clinical: '处于儿童及少年发育期，肾气开始充实，骨骼牙齿快速发育。' },
          { limit: 24, label: '丈夫二八 (天癸至阶段)', quote: '二八，肾气盛，天癸至，精气溢写，阴阳和，故能有子。', clinical: '男性生殖机能成熟，精力旺盛，骨骼生长进入爆发期。' },
          { limit: 48, label: '丈夫三八至四八 (筋骨肌肉鼎盛期)', quote: '丈夫八岁，肾气平均，筋骨劲强；四八，筋骨隆盛，肌肉满壮。', clinical: '24岁至32岁是男性身体机能的最高峰，筋骨强壮，肌肉发达。应维持良好的作息以稳固阳气。' },
          { limit: 56, label: '丈夫五八至六八 (肾气与阳气衰退期)', quote: '五八，肾气衰，发堕齿槁；六八，阳气衰竭于上，面焦，发鬓颁白。', clinical: '【临床警示】40岁起肾气渐衰，开始出现脱发、牙齿松动；48岁起头部阳气衰退，额头面部出现疲态，两鬓变白。临床调理重点在于“补益肾气、维护骨骼关节”，预防腰椎间盘突出和慢性劳损。' },
          { limit: 64, label: '丈夫七八 (肝肾亏虚阶段)', quote: '七八，肝气衰，筋不能动，天癸竭，精少，肾藏衰，形体皆极。', clinical: '【临床警示】56岁起，肝血渐虚，筋脉失去滋养，导致关节僵硬、运动不灵活；肾脏功能衰退，易感体力不支、精力减退。针灸可以强肝肾、通关节，缓解中老年骨性关节炎和全身酸痛。' },
          { limit: 999, label: '丈夫八八 (衰老养生期)', quote: '八八，则齿发去……形体皆极。', clinical: '【临床关怀】64岁之后，进入深度老龄养生阶段。人体脏腑精气以固守为主，防寒保暖、养阴护阳为要。通过温和的艾灸和温针灸，可有效培元固本，延年益寿。' }
        ]
      },
      en: {
        female: [
          { limit: 14, label: "Female Cycle 1 (Kidney Qi Rising)", quote: "At 7 years of age, a girl's Kidney Qi becomes abundant, her teeth change, and hair grows.", clinical: "During childhood development, Kidney Qi begins to fill, baby teeth fall out to be replaced by permanent teeth, and hair grows rapidly. Focus on balanced nutrition and adequate sleep." },
          { limit: 21, label: "Female Cycle 2 (Tian Gui Arrives / Menarche)", quote: "At 14, the Tian Gui arrives, the Ren channel opens, the Taichong channel becomes abundant, menstruation occurs regularly, and she can conceive.", clinical: "Reproductive function matures, menstruation begins, and fertility is established. Emotions can fluctuate; keep warm during periods, avoid raw/cold foods, and focus on regulating Qi and blood." },
          { limit: 35, label: "Female Cycles 3 & 4 (Peak Physical Abundance)", quote: "At 21, Kidney Qi is balanced, wisdom teeth grow. At 28, bones and tendons are firm, hair grows fully, and the body is at its peak strength.", clinical: "This is the absolute golden period of your life, with peak muscle mass and strong bones. Excellent window for conception, and critical for protecting your essence (Jing) from over-exhaustion." },
          { limit: 42, label: "Female Cycle 5 (Yangming Decline / Aging Onset)", quote: "At 35, the Yangming channel begins to decline, the face starts to wither, and hair begins to fall out.", clinical: "[Clinical Warning] Starting at age 35, Qi and blood in the hand and foot Yangming channels (Stomach and Large Intestine) begin to decrease. Since these channels cover the face, skin starts losing elasticity and hair begins to thin. Therapy focuses on strengthening Spleen/Stomach and replenishing Qi/Blood. Acupuncture on the Yangming channel helps slow aging." },
          { limit: 49, label: "Female Cycle 6 (Three Yang Channels Declining)", quote: "At 42, the three Yang channels decline above, the entire face is withered, and hair begins to turn white.", clinical: "[Clinical Warning] From age 42, the three Yang channels (Taiyang, Yangming, Shaoyang) decline, resulting in facial wrinkles and graying hair. Metabolism slows down, making you prone to chronic pain and mood swings. Acupuncture focuses on clearing the three Yang channels and warming the meridians." },
          { limit: 999, label: "Female Cycle 7 (Tian Gui Exhausted / Menopause)", quote: "At 49, the Ren channel becomes empty, the Taichong channel declines, Tian Gui is exhausted, menstruation stops, and she can no longer bear children.", clinical: "[Clinical Care] Around age 49, the Ren and Chong channels decline, and essence dries up as she enters menopause. Hormonal fluctuations can cause hot flashes, night sweats, insomnia, and osteoporosis. Acupuncture regulates the Ren and Du channels, nourishing Yin and clearing heat for a smooth transition." }
        ],
        male: [
          { limit: 16, label: "Male Cycle 1 (Kidney Qi Filling)", quote: "At 8, a boy's Kidney Qi is solid, his hair grows, and his teeth change.", clinical: "During childhood and adolescence, Kidney Qi begins to fill, promoting rapid bone and dental development." },
          { limit: 24, label: "Male Cycle 2 (Tian Gui Arrives / Maturity)", quote: "At 16, Kidney Qi is abundant, Tian Gui arrives, essence overflows, Yin and Yang harmonize, and he can father children.", clinical: "Reproductive maturity is reached, energy is high, and bone growth enters a peak phase." },
          { limit: 48, label: "Male Cycles 3 & 4 (Peak Strength & Vitality)", quote: "At 24, Kidney Qi is balanced, tendons and bones are strong. At 32, bones and tendons are at their peak, and muscles are full and strong.", clinical: "Ages 24 to 32 mark the peak of male physical function, with strong bones and developed muscles. Maintain healthy lifestyle habits to protect your vital Yang Qi." },
          { limit: 56, label: "Male Cycles 5 & 6 (Kidney Qi & Yang Decline)", quote: "At 40, Kidney Qi declines, hair falls out, and teeth wither. At 48, Yang Qi declines above, the face is withered, and hair turns white.", clinical: "[Clinical Warning] Kidney Qi weakens from age 40, leading to thinning hair and dry teeth. By age 48, Yang Qi declines in the head, showing fatigue on the face and graying sideburns. Therapy focuses on tonifying Kidney Qi and protecting joints to prevent spinal herniation and chronic strain." },
          { limit: 64, label: "Male Cycle 7 (Liver & Kidney Deficiencies)", quote: "At 56, Liver Qi declines, tendons cannot move freely, Tian Gui is exhausted, Kidney Qi declines, and the body reaches its limits.", clinical: "[Clinical Warning] Starting at age 56, Liver Blood diminishes, depriving tendons of nourishment and causing joint stiffness. Kidney decline leads to low energy and stamina. Acupuncture tonifies the Liver and Kidneys to alleviate osteoarthritis and chronic aches." },
          { limit: 999, label: "Male Cycle 8 (Advanced Longevity Care)", quote: "At 64, teeth and hair are gone, and the body reaches its ultimate stage.", clinical: "[Clinical Care] Beyond age 64, enter a stage of deep longevity preservation. Focus on maintaining internal temperature, protecting Yin, and guarding Yang. Warm moxibustion and gentle acupuncture help fortify the Kidney essence and support overall longevity." }
        ]
      },
      ja: {
        female: [
          { limit: 14, label: '女子一七（腎気旺盛期）', quote: '女子七歳、腎気盛んにして、歯更まり髪長ず。', clinical: '幼少期の成長発育期であり、腎気が充実し始め、乳歯が永久歯に生え変わり、髪が急速に伸びます。バランスの取れた栄養と十分な睡眠が大切です。' },
          { limit: 21, label: '女子二七（天癸至る・月経開始）', quote: '二七にして天癸至り、任脈通じ、太衝脈盛んにして、月事時に下る。', clinical: '生殖機能が成熟し、月経が順調に始まり、妊娠が可能になります。情緒が不安定になりやすいため、生理期の保温を心がけ、生冷飲食を控えましょう。' },
          { limit: 35, label: '女子三七〜四七（身体の最盛期）', quote: '三七にして腎気平均し、真牙生じて長極まる。四七にして筋骨堅く、髪長極まり、身体盛壮なり。', clinical: '人生における身体の黄金期であり、筋肉が満ち、筋骨が最も強健になります。元気を養い、過労によるエネルギー枯渇を防ぐ重要な時期です。' },
          { limit: 42, label: '女子五七（陽明脈衰える・老化の始まり）', quote: '五七にして陽明脈衰え、顔始めて焦れ、髪始めて堕つ。', clinical: '【臨床的警告】35歳から、手足の陽明経（胃経・大腸経）の気血が衰え始めます。顔面を通る胃経の衰えにより、顔のハリが失われ、抜け毛が始まります。脾胃を健やかにし、気血を補う鍼治療が最適です。' },
          { limit: 49, label: '女子六七（三陽脈衰える・加齢進行）', quote: '六七にして三陽脈上において衰え、顔皆焦れ、髪始めて白し。', clinical: '【臨床的警告】42歳から、太陽・陽明・少陽の三陽経が衰え、顔のシワが増え、白髪が目立ち始めます。代謝が低下し、関節痛や気分の落ち込みが現れやすくなります。温熱経絡鍼治療が効果的です。' },
          { limit: 999, label: '女子七七（天癸尽きる・更年期前後）', quote: '七七にして任脈虚し、太衝脈衰少し、天癸竭き、地道通ぜず。', clinical: '【臨床的ケア】49歳前後で任脈と太衝脈が衰え、天癸（ホルモン）が尽きて閉経を迎えます。ほてり、寝汗、不眠、骨粗鬆症などの更年期症状が出やすくなります。鍼治療で経絡の陰陽を整え、穏やかに移行させます。' }
        ],
        male: [
          { limit: 16, label: '丈夫一八（腎気充実期）', quote: '丈夫八歳、腎気実し、髪長じ歯更まる。', clinical: '児童・思春期の成長期であり、腎気が満ち始め、骨や歯が急速に成長します。' },
          { limit: 24, label: '丈夫二八（天癸至る・成熟期）', quote: '二八にして腎気盛んにして天癸至り、精気溢写し、陰陽和す。', clinical: '生殖機能が成熟し、精力旺盛になり、骨格の成長がピークに達します。' },
          { limit: 48, label: '丈夫三八〜四八（筋骨隆盛・最盛期）', quote: '三八にして腎気平均し、筋骨勁強なり。四八にして筋骨隆盛し、筋肉満壮なり。', clinical: '24歳から32歳頃は男性の身体機能の頂点であり、筋骨が最も発達します。陽気を浪費しないよう規則正しい生活を送りましょう。' },
          { limit: 56, label: '丈夫五八〜六八（腎気・陽気減退期）', quote: '五八にして腎気衰え、髪堕ち歯槁る。六八にして陽気上に衰竭し、顔焦れ、発鬢斑白なり。', clinical: '【臨床的警告】40歳から腎気が衰え始め、抜け毛や歯の衰えが現れます。48歳からは頭部の陽気が衰え、顔のツヤが失われ白髪が混ざり始めます。腎気を補い関節を守る鍼治療が推奨されます。' },
          { limit: 64, label: '丈夫七八（肝腎虚損期）', quote: '七八にして肝気衰え、筋動くこと能わず、天癸竭き、精少なく、腎臓衰え、形体皆極まる。', clinical: '【臨床的警告】56歳から肝血が不足し、関節が強ばり動きづらくなります。腎の衰えから体力の低下を実感しやすくなります。肝腎を強化し、慢性関節痛を和らげる治療を行います。' },
          { limit: 999, label: '丈夫八八（養生老齢期）', quote: '八八にして、すなわち歯髪去り、形体皆極まる。', clinical: '【臨床的ケア】64歳以降は深い老後の養生期に入ります。冷えを防ぎ、体内エネルギーを温存することが大切です。温和な灸や鍼治療により元気を補い、長寿をサポートします。' }
        ]
      }
    };

    const list = isFemale ? neijingData[language].female : neijingData[language].male;
    for (const item of list) {
      if (age < item.limit) {
        return item;
      }
    }
    return list[list.length - 1];
  }

  // 1. Calculate Bazi elements count
  function getElementsCount(birthDateStr: string, birthTimeStr: string) {
    if (!birthDateStr) return { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };
    
    const dParts = birthDateStr.split('-');
    const year = parseInt(dParts[0]) || 2000;
    const month = parseInt(dParts[1]) || 1;
    const day = parseInt(dParts[2]) || 1;
    
    let hour = 12;
    if (birthTimeStr) {
      const tParts = birthTimeStr.split(':');
      hour = parseInt(tParts[0]) || 0;
    }

    const birthDate = new Date(year, month - 1, day, hour, 0);
    const lunar = Lunar.fromDate(birthDate);
    const bY = lunar.getYearInGanZhi();
    const bM = lunar.getMonthInGanZhi();
    const bD = lunar.getDayInGanZhi();
    const bT = lunar.getTimeInGanZhi() || '未知';

    // Count all 8 characters (Year, Month, Day, Hour stems & branches)
    const chars = [
      bY[0], bY.length > 1 ? bY[1] : '',
      bM[0], bM.length > 1 ? bM[1] : '',
      bD[0], bD.length > 1 ? bD[1] : '',
      bT[0], bT.length > 1 ? bT[1] : ''
    ];

    const counts: Record<string, number> = { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };
    
    // Base congenital seed counts
    counts.Wood = 1;
    counts.Fire = 1;
    counts.Earth = 1;
    counts.Metal = 1;
    counts.Water = 1;

    chars.forEach(char => {
      if (char) {
        const element = elementsMap[char];
        if (element) {
          counts[element] += 2;
        }
      }
    });

    return counts;
  }

  // Symptom toggles with mutually exclusive None selection
  function toggleSymptom(code: string) {
    if (code === 'none') {
      if (selectedSymptoms.includes('none')) {
        setSelectedSymptoms([]);
      } else {
        setSelectedSymptoms(['none']);
      }
    } else {
      const filtered = selectedSymptoms.filter(item => item !== 'none');
      if (filtered.includes(code)) {
        setSelectedSymptoms(filtered.filter(item => item !== code));
      } else {
        setSelectedSymptoms([...filtered, code]);
      }
    }
  }

  // Calculate dayGanzhi
  let year = 2000, month = 1, day = 1, hour = 12;
  if (dob) {
    const dParts = dob.split('-');
    year = parseInt(dParts[0]) || 2000;
    month = parseInt(dParts[1]) || 1;
    day = parseInt(dParts[2]) || 1;
  }
  if (tob) {
    const tParts = tob.split(':');
    hour = parseInt(tParts[0]) || 0;
  }

  // Get Neijing Phase
  const neijing = getNeijingCycle(dob, gender === 'female', lang);

  // Submit to Vercel production check
  function handleNextStep() {
    if (step === 1) {
      if (!name.trim()) {
        alert(lang === 'zh' ? "请输入您的姓名" : lang === 'ja' ? "お名前を入力してください" : "Please enter your name");
        return;
      }
      if (!dob) {
        alert(lang === 'zh' ? "请选择您的出生日期" : lang === 'ja' ? "生年月日を選択してください" : "Please select your date of birth");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (selectedSymptoms.length === 0) {
        alert(lang === 'zh' ? "请至少选择一项您关注的健康状况" : lang === 'ja' ? "健康状態を少なくとも1つ選択してください" : "Please select at least one health concern");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert(lang === 'zh' ? "请输入有效的电子邮箱地址" : lang === 'ja' ? "有効なメールアドレスを入力してください" : "Please enter a valid email address");
        return;
      }

      // Trigger email subscription API (asynchronous)
      fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          dob,
          tob,
          gender,
          symptoms: selectedSymptoms,
          dominant,
          deficient,
          lang
        })
      }).catch(err => console.error('Subscription email error:', err));

      setStep(4);
    }
  }

  // Simulated Checkout Submission
  function handleMockPay(e: React.FormEvent) {
    e.preventDefault();
    if (!cardNumber.trim() || !cardExpiry.trim() || !cardCvc.trim()) {
      alert("Please fill in complete details.");
      return;
    }
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setIsUnlocked(true);
      setShowCheckout(false);
      alert(lang === 'zh' ? "🎉 恭喜！已成功升级至 DNA 专属完整版报告！" : 
            lang === 'ja' ? "🎉 おめでとうございます！DNA完全版レポートが解除されました！" : 
            "🎉 Congratulations! DNA Premium Report is unlocked!");
    }, 1500);
  }

  // Dynamic Apple Wallet PKPass compiler trigger
  const handleDownloadWallet = async () => {
    setIsDownloadingPass(true);
    try {
      const canvas = document.querySelector('canvas');
      let thumbnail = null;
      if (canvas) {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = 1146; 
        tempCanvas.height = 300;
        const tCtx = tempCanvas.getContext('2d');
        if (tCtx) {
          tCtx.fillStyle = '#0B1120';
          tCtx.fillRect(0, 0, 1146, 300);
          const scale = 300 / canvas.height;
          const drawWidth = canvas.width * scale;
          tCtx.drawImage(canvas, (1146 - drawWidth) / 2, 0, drawWidth, 300);
          thumbnail = tempCanvas.toDataURL('image/jpeg', 0.9).split(',')[1];
        }
      }

      const res = await fetch('/api/wallet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          element: dominant, 
          thumbnail: thumbnail, 
          lang: lang 
        }),
      });

      if (!res.ok) throw new Error('Failed to generate wallet pass');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${dominant.toLowerCase()}_talisman.pkpass`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert(lang === 'zh' ? "生成 Apple Wallet Pass 失败，请检查网络。" : 
            lang === 'ja' ? "Apple Walletパスの生成に失敗しました。" : 
            "Failed to generate Apple Wallet pass.");
    } finally {
      setIsDownloadingPass(false);
    }
  };

  // Generate mobile lockscreen wallpaper dynamically from active canvas (Screenshot 6 styled)
  const handleDownloadCanvas = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const wp = document.createElement('canvas');
      wp.width = 1080;
      wp.height = 1920;
      const ctx = wp.getContext('2d');
      if (!ctx) return;

      // 1. Draw solid dark background gradient
      const grad = ctx.createLinearGradient(0, 0, 0, 1920);
      grad.addColorStop(0, '#0F172A');
      grad.addColorStop(1, '#020617');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1080, 1920);

      // 2. Draw gold border framing
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.15)';
      ctx.lineWidth = 4;
      ctx.strokeRect(40, 40, wp.width - 80, wp.height - 80);

      // 3. Draw header logo text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('ACUTHERAPY CLINICS', wp.width / 2, 200);

      ctx.fillStyle = 'rgba(245, 158, 11, 0.6)';
      ctx.font = '24px sans-serif';
      ctx.fillText('☯  FIVE ELEMENTS VITALITY CHARTER  ☯', wp.width / 2, 250);

      // 4. Draw active bead ring in center (maintaining aspect ratio circle crop)
      const minDim = Math.min(canvas.width, canvas.height);
      const sx = (canvas.width - minDim) / 2;
      const sy = (canvas.height - minDim) / 2;
      const beadSize = 750;
      ctx.drawImage(
        canvas, 
        sx,
        sy,
        minDim,
        minDim,
        (wp.width - beadSize) / 2, 
        (wp.height - beadSize) / 2 - 50, 
        beadSize, 
        beadSize
      );

      // 5. Draw Profile footer Bazi details
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 42px serif';
      ctx.fillText(name.toUpperCase() || 'VITALITY CHARTER', wp.width / 2, wp.height - 350);

      const color = getBeadBaseColor(dominant);
      ctx.fillStyle = color;
      ctx.font = '900 64px sans-serif';
      ctx.fillText(`${dominant.toUpperCase()} ELEMENT`, wp.width / 2, wp.height - 250);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = '20px sans-serif';
      ctx.fillText('Innate Balance Charter • acutherapy.com/constitution-test', wp.width / 2, wp.height - 150);

      // 6. Export and download
      const dataUrl = wp.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${name.replace(/\s+/g, '_') || 'my'}_energy_talisman.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      alert(lang === 'zh' ? "未检测到能量图，请稍后。" : 
            lang === 'ja' ? "エネルギー図が検出されませんでした。" : 
            "Energy charter not detected.");
    }
  };

  // Run Calculations for Dominant and Deficient
  const counts = getElementsCount(dob, tob);
  const elementsArray = Object.keys(counts).map(key => ({
    name: key as ElementType,
    score: counts[key]
  }));
  
  let dominant: ElementType = 'Wood';
  let maxScore = -1;
  let deficient: ElementType = 'Water';
  let minScore = 999;

  elementsArray.forEach(item => {
    if (item.score > maxScore) {
      maxScore = item.score;
      dominant = item.name;
    }
    if (item.score <= minScore) {
      minScore = item.score;
      deficient = item.name;
    }
  });

  // Calculate coordinates for the SVG Radar Chart
  const radius = 70;
  const radarCenter = 100;
  const orderedElements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
  const angles = [-Math.PI / 2, -Math.PI / 10, 3 * Math.PI / 10, 7 * Math.PI / 10, 11 * Math.PI / 10];

  const radarPoints = orderedElements.map((el, i) => {
    const val = counts[el] || 1;
    const scaledRadius = (val / 9) * radius;
    const x = radarCenter + scaledRadius * Math.cos(angles[i]);
    const y = radarCenter + scaledRadius * Math.sin(angles[i]);
    return `${x},${y}`;
  }).join(' ');

  const gridCircles = [0.25, 0.5, 0.75, 1];

  // Helper to draw vertical GanZhi columns
  const renderPillarColumn = (pillar: string, isLight: boolean = true) => {
    if (!pillar || pillar === '未知') return <div className="text-xs">未知</div>;
    const stem = pillar[0];
    const branch = pillar[1];
    const e1 = FIVE_ELEMENTS_MAP[stem as keyof typeof FIVE_ELEMENTS_MAP];
    const e2 = FIVE_ELEMENTS_MAP[branch as keyof typeof FIVE_ELEMENTS_MAP];
    
    const stem_local = stemNames[lang][stem as keyof typeof stemNames['en']] || stem;
    const branch_local = branchNames[lang][branch as keyof typeof branchNames['en']] || branch;
    const e1_local = elementLocales[lang][e1] || e1;
    const e2_local = elementLocales[lang][e2] || e2;

    const baseColor1 = getBeadBaseColor(e1);
    const baseColor2 = getBeadBaseColor(e2);

    return (
      <div className="flex flex-col items-center gap-0.5 select-none text-center">
        <span className="text-[10px] font-bold tracking-tight opacity-50">{stem_local}</span>
        <span 
          style={{ color: isLight ? baseColor1 : '#ffffff' }}
          className="text-[11px] font-black tracking-tight"
        >
          {e1_local}
        </span>
        <span className="text-[10px] font-bold tracking-tight opacity-50 mt-1">{branch_local}</span>
        <span 
          style={{ color: isLight ? baseColor2 : '#e2e8f0' }}
          className="text-[11px] font-black tracking-tight"
        >
          {e2_local}
        </span>
      </div>
    );
  };

  // Helper to format Bazi stems elements string
  const getBaziElementsString = (y: string, d: string) => {
    const eY = FIVE_ELEMENTS_MAP[y[0] as keyof typeof FIVE_ELEMENTS_MAP] || '';
    const eD = FIVE_ELEMENTS_MAP[d[0] as keyof typeof FIVE_ELEMENTS_MAP] || '';
    const eY_local = elementLocales[lang][eY] || eY;
    const eD_local = elementLocales[lang][eD] || eD;
    return `${eY_local} / ${eD_local}`;
  };

  const getElementNamesLocalized = (el: string) => {
    if (lang === 'en') return elementNamesEn[el] || el;
    if (lang === 'ja') return elementNamesJa[el] || el;
    return elementNamesZh[el] || el;
  };

  return (
    <>
      <section className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        
        <Helmet>
          <title>{t.title} | AcuTherapy Clinics</title>
          <meta name="description" content="AcuTherapy Clinics 中医五行体质与生命节律深度临床评估。" />
        </Helmet>

        {/* Floating Multi-Language selector */}
        <div className="max-w-2xl mx-auto flex justify-end mb-4">
          <div className="flex gap-1 bg-white p-1 rounded-xl shadow-sm border border-slate-100 text-[10px] font-bold">
            <button 
              onClick={() => setLang('zh')} 
              className={`px-3 py-1.5 rounded-lg transition-all ${lang === 'zh' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              中文
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-3 py-1.5 rounded-lg transition-all ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLang('ja')} 
              className={`px-3 py-1.5 rounded-lg transition-all ${lang === 'ja' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              日本語
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          
          {/* Top Logo & Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-blue-600 font-extrabold text-sm uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              AcuTherapy Clinics
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t.title}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              {t.subtitle}
            </p>
          </div>

          {/* Container Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 relative overflow-hidden">
            
            {/* Progress bar */}
            {step < 4 && (
              <div className="w-full bg-slate-100 rounded-full h-1 mb-6">
                <div 
                  className="bg-blue-600 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            )}

            {/* STEP 1: Basic info */}
            {step === 1 && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{t.step1_title}</h2>
                  <p className="text-xs text-slate-400 mt-0.5">{t.step1_desc}</p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500">{t.name_label}</label>
                  <input 
                    type="text" 
                    placeholder={t.name_placeholder} 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500">{t.gender_label}</label>
                  <div className="grid grid-cols-2 gap-4 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                    <button 
                      onClick={() => setGender('male')}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${gender === 'male' ? 'bg-blue-600 text-white shadow' : 'text-slate-500'}`}
                    >
                      {t.gender_male}
                    </button>
                    <button 
                      onClick={() => setGender('female')}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${gender === 'female' ? 'bg-blue-600 text-white shadow' : 'text-slate-500'}`}
                    >
                      {t.gender_female}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500">{t.dob_label}</label>
                    <input 
                      type="date" 
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500">{t.tob_label}</label>
                    <select 
                      value={tob}
                      onChange={(e) => setTob(e.target.value)}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white outline-none transition-all"
                    >
                      {t.hours.map((h: any) => (
                        <option key={h.value} value={h.value}>{h.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button 
                  onClick={handleNextStep}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 transition-all text-xs mt-3"
                >
                  {t.next_btn_step1}
                </button>
              </div>
            )}

            {/* STEP 2: Symptoms Selection */}
            {step === 2 && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{t.step2_title}</h2>
                  <p className="text-xs text-slate-400 mt-0.5">{t.step2_desc}</p>
                </div>

                <div className="flex flex-col gap-3">
                  {symptomTexts[lang].map((item) => {
                    const active = selectedSymptoms.includes(item.code);
                    return (
                      <div 
                        key={item.code}
                        onClick={() => toggleSymptom(item.code)}
                        className={`p-3.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex justify-between items-center ${active ? 'bg-blue-50 border-blue-400 text-blue-800' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                      >
                        <span>{item.text}</span>
                        <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${active ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'}`}>
                          {active && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6L9 17l-5-5"/></svg>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-3">
                  <button 
                    onClick={() => setStep(1)}
                    className="border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold py-3 rounded-xl text-xs"
                  >
                    {t.back_btn}
                  </button>
                  <button 
                    onClick={handleNextStep}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 text-xs"
                  >
                    {t.next_btn_step2}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Email Gate */}
            {step === 3 && (
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <div className="inline-flex w-14 h-14 rounded-full bg-blue-50 items-center justify-center text-blue-600 mb-3 animate-bounce">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                  </div>
                  <h2 className="text-xl font-black text-slate-900">{t.step3_title}</h2>
                  <p className="text-xs text-slate-400 mt-1 px-4 leading-relaxed">
                    {t.step3_desc}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    placeholder={t.email_placeholder} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 focus:border-blue-500 focus:bg-white outline-none transition-all text-center"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-3">
                  <button 
                    onClick={() => setStep(2)}
                    className="border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold py-3 rounded-xl text-xs"
                  >
                    {t.back_btn}
                  </button>
                  <button 
                    onClick={handleNextStep}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 text-xs"
                  >
                    {t.unlock_report_btn}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Comprehensive Report Results */}
            {step === 4 && (
              <div className="flex flex-col gap-8 text-slate-800 animate-in fade-in duration-500">
                
                {/* Header Profile */}
                <div className="border-b border-slate-100 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {t.results_badge}
                    </span>
                    <h2 className="text-xl font-black text-slate-950 mt-2">{t.results_title}</h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-500 font-medium">
                      <span>{t.name_label}：<strong className="text-slate-800">{name}</strong></span>
                      <span>{lang === 'zh' ? '性别' : lang === 'ja' ? '性別' : 'Gender'}：<strong className="text-slate-800">{gender === 'female' ? (lang === 'zh' ? '女' : lang === 'ja' ? '女' : 'Female') : (lang === 'zh' ? '男' : lang === 'ja' ? '男' : 'Male')}</strong></span>
                      <span>{t.timezone_label}</span>
                    </div>
                  </div>
                  <a 
                    href="/book-appointment"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-all self-stretch sm:self-auto text-center"
                  >
                    {t.book_btn}
                  </a>
                </div>

                {/* 🌟 1. DYNAMIC BEAD RING CARD (ManaReset Style) */}
                <div className="bg-[#0B1120] rounded-3xl border border-slate-800 p-6 flex flex-col items-center gap-4 relative overflow-hidden shadow-2xl">
                  
                  {/* Top Switch Tabs */}
                  <div className="flex justify-between items-center w-full z-10">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">TCM Bead Energy Circle</span>
                    
                    <div className="flex gap-1.5 bg-[#1E293B]/70 p-1 rounded-lg border border-slate-700">
                      <button 
                        onClick={() => setVisualMode('ring')}
                        className={`px-3 py-1 text-[10px] font-bold rounded transition-all ${visualMode === 'ring' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
                      >
                        Ring
                      </button>
                      <button 
                        onClick={() => setVisualMode('dna')}
                        className={`px-3 py-1 text-[10px] font-bold rounded transition-all ${visualMode === 'dna' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
                      >
                        DNA
                      </button>
                    </div>
                  </div>

                  {/* BaZiCanvas Rendering Area */}
                  <div className="relative w-full h-[220px] flex items-center justify-center">
                    <BaZiCanvas beads={beads} mode={visualMode} />
                  </div>

                  <span className="text-[9px] text-slate-500 text-center leading-relaxed max-w-sm z-10">
                    {t.beads_desc}
                  </span>
                </div>

                {/* 🌟 2. DOUBLE-CARD EDITION SELECTION PANELS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Free Classic Card */}
                  <div className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-black text-slate-900">{t.classic_title}</h4>
                      <p className="text-[10px] text-slate-400 font-medium">{t.classic_desc}</p>
                    </div>
                    <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
                      <a 
                        href="/book-appointment"
                        className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold py-2.5 rounded-xl text-center text-xs shadow-sm transition-all"
                      >
                        {t.book_btn}
                      </a>
                      <button 
                        onClick={handleDownloadCanvas}
                        className="text-[10px] text-blue-600 font-bold hover:underline flex items-center justify-center gap-1.5 mt-1"
                      >
                        <Download size={12} /> {t.download_wallpaper}
                      </button>
                    </div>
                  </div>

                  {/* Premium DNA Card */}
                  <div className="bg-white rounded-3xl border-2 border-blue-600 p-5 flex flex-col justify-between gap-4 shadow-md relative overflow-hidden">
                    <div className="absolute top-2.5 right-2.5 bg-yellow-500 text-white font-black text-[9px] px-2 py-0.5 rounded uppercase tracking-wider">
                      Premium
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-black text-slate-900">{t.dna_title}</h4>
                      <p className="text-[10px] text-slate-400 font-medium">{t.dna_desc}</p>
                    </div>
                    <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
                      {!isUnlocked ? (
                        <>
                          <div className="flex justify-between items-baseline">
                            <span className="text-[10px] text-slate-400 font-semibold">{t.price_label}</span>
                            <span className="text-base font-black text-slate-900">$9.90</span>
                          </div>
                          <button 
                            onClick={() => setShowCheckout(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-center text-xs shadow transition-all"
                          >
                            {t.unlock_now_btn}
                          </button>
                        </>
                      ) : (
                        <div className="flex flex-col gap-2">
                          <button 
                            onClick={handleDownloadWallet}
                            disabled={isDownloadingPass}
                            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-2.5 rounded-xl text-center text-xs shadow transition-all flex items-center justify-center gap-2"
                          >
                            {isDownloadingPass ? (
                              <>
                                <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                                {t.downloading_pass}
                              </>
                            ) : (
                              t.save_wallet_btn
                            )}
                          </button>
                          <div className="text-[10px] text-emerald-600 font-bold text-center flex items-center justify-center gap-1">
                            <Check size={12} /> {t.unlocked_badge}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* 🌟 3. ASTROLOGICAL ALIGNMENT PILLARS CARDS */}
                {beads.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto w-full">
                    
                    {/* Left: Your Birth Chart */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center shadow-sm flex flex-col items-center gap-2">
                      <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black">{t.birth_chart_title}</p>
                      <div className="text-xl text-slate-700">☯︎</div>
                      <div className="grid grid-cols-4 gap-3 w-full border-t border-slate-100 pt-3 mt-1">
                        {renderPillarColumn(Lunar.fromDate(new Date(year, month - 1, day, hour, 0)).getYearInGanZhi())}
                        {renderPillarColumn(Lunar.fromDate(new Date(year, month - 1, day, hour, 0)).getMonthInGanZhi())}
                        {renderPillarColumn(Lunar.fromDate(new Date(year, month - 1, day, hour, 0)).getDayInGanZhi())}
                        {renderPillarColumn(Lunar.fromDate(new Date(year, month - 1, day, hour, 0)).getTimeInGanZhi() || '未知')}
                      </div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-2 border-t border-slate-50 pt-2 w-full">
                        {getBaziElementsString(
                          Lunar.fromDate(new Date(year, month - 1, day, hour, 0)).getYearInGanZhi(),
                          Lunar.fromDate(new Date(year, month - 1, day, hour, 0)).getDayInGanZhi()
                        )} {t.dominant_badge}
                      </p>
                    </div>

                    {/* Right: Current Honolulu Chart */}
                    <div className="bg-[#0B1120] rounded-2xl border border-slate-800 p-5 text-center shadow-md flex flex-col items-center gap-2 text-white">
                      <p className="text-[9px] text-blue-400/80 uppercase tracking-widest font-black">{t.current_chart_title}</p>
                      <div className="text-xl text-blue-400">☲</div>
                      <div className="grid grid-cols-4 gap-3 w-full border-t border-slate-800 pt-3 mt-1">
                        {renderPillarColumn(Lunar.fromDate(new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000 - 10 * 3600000)).getYearInGanZhi(), false)}
                        {renderPillarColumn(Lunar.fromDate(new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000 - 10 * 3600000)).getMonthInGanZhi(), false)}
                        {renderPillarColumn(Lunar.fromDate(new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000 - 10 * 3600000)).getDayInGanZhi(), false)}
                        {renderPillarColumn(Lunar.fromDate(new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000 - 10 * 3600000)).getTimeInGanZhi() || '未知', false)}
                      </div>
                      <p className="text-[9px] text-blue-400/60 font-bold uppercase tracking-wider mt-2 border-t border-slate-800 pt-2 w-full">
                        {getBaziElementsString(
                          Lunar.fromDate(new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000 - 10 * 3600000)).getYearInGanZhi(),
                          Lunar.fromDate(new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000 - 10 * 3600000)).getDayInGanZhi()
                        )} {t.dominant_badge}
                      </p>
                    </div>

                  </div>
                )}

                {/* 🌟 4. CURRENT DOMINANT ENERGY CARDS */}
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col items-center gap-5">
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{t.dominant_energy_title}</span>
                  
                  <div className="flex justify-center gap-4 w-full max-w-sm">
                    {/* Dominant Element Badge */}
                    <div className="flex-1 bg-rose-50 border border-rose-200 rounded-2xl py-3 px-4 text-center">
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">{t.dominant_badge}</span>
                      <span className="text-xl font-black text-rose-700 mt-1 block font-serif">{getElementNamesLocalized(dominant)}</span>
                    </div>

                    {/* Deficient Element Badge */}
                    <div className="flex-1 bg-blue-50 border border-blue-200 rounded-2xl py-3 px-4 text-center">
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">{t.deficient_badge}</span>
                      <span className="text-xl font-black text-blue-700 mt-1 block font-serif">
                        {isUnlocked ? getElementNamesLocalized(deficient) : t.deficient_locked}
                      </span>
                    </div>
                  </div>

                  {/* Golden Quote Block */}
                  <div className="relative border border-slate-150 rounded-2xl p-5 bg-white text-center shadow-sm w-full mt-1">
                    <span className="text-2xl text-slate-300 absolute -top-3 left-4 bg-white px-2">“</span>
                    <p className="text-xs text-slate-700 leading-relaxed italic px-2 font-medium">
                      {quotes[lang][dominant]}
                    </p>
                  </div>

                  {/* Deficient Element Quote */}
                  <div className="text-center text-xs text-slate-500 leading-relaxed max-w-md px-4 italic mt-1">
                    {isUnlocked ? (
                      deficientTeasers[lang][deficient]
                    ) : (
                      <span className="text-slate-400">{t.deficient_quote_locked}</span>
                    )}
                  </div>
                </div>

                {/* 🌟 5. DOMINANT ELEMENT PHYSICAL ADVICE */}
                <div className="flex flex-col gap-4 border border-slate-200 rounded-3xl p-6 bg-slate-50/20">
                  <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-l-4 border-amber-500 pl-2">
                    {t.dominant_phys_title}
                  </h3>
                  <span className="text-base font-black text-amber-700">
                    {getElementNamesLocalized(dominant)}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {constitutionDescriptions[lang][dominant]?.desc}
                  </p>
                  <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl text-xs leading-relaxed text-slate-700">
                    <strong className="text-amber-800 block mb-1">💡 {lang === 'zh' ? '免费版·主导经络穴位理疗指导' : lang === 'ja' ? '無料版・主要な経穴のケアガイド' : 'Free Pass · Primary Meridian Acupressure Guidelines'}：</strong>
                    {constitutionDescriptions[lang][dominant]?.advice}
                  </div>
                </div>

                {/* 🌟 6. RADAR BALANCE CHART NESTED IN TEXT DESCRIPTIONS */}
                <div className="flex flex-col sm:flex-row items-center gap-6 border border-slate-200 rounded-3xl p-6 bg-slate-50/10">
                  
                  {/* Outer SVG Radar */}
                  <div className="relative w-[200px] h-[200px] flex items-center justify-center bg-white border border-slate-100 rounded-2xl p-2 shadow-sm shrink-0">
                    <svg width="200" height="200" className="overflow-visible">
                      {gridCircles.map((ratio, i) => (
                        <circle 
                          key={i} 
                          cx={radarCenter} 
                          cy={radarCenter} 
                          r={radius * ratio} 
                          fill="none" 
                          stroke="#f1f5f9" 
                          strokeWidth="1" 
                        />
                      ))}
                      {angles.map((angle, i) => {
                        const x = radarCenter + radius * Math.cos(angle);
                        const y = radarCenter + radius * Math.sin(angle);
                        return (
                          <line 
                            key={i} 
                            x1={radarCenter} 
                            y1={radarCenter} 
                            x2={x} 
                            y2={y} 
                            stroke="#e2e8f0" 
                            strokeWidth="1"
                          />
                        );
                      })}
                      <polygon 
                        points={radarPoints} 
                        fill="rgba(37, 99, 235, 0.15)" 
                        stroke="#2563eb" 
                        strokeWidth="2"
                      />
                      {orderedElements.map((el, i) => {
                        const labelX = radarCenter + (radius + 15) * Math.cos(angles[i]);
                        const labelY = radarCenter + (radius + 10) * Math.sin(angles[i]);
                        return (
                          <text 
                            key={i} 
                            x={labelX} 
                            y={labelY} 
                            textAnchor="middle" 
                            alignmentBaseline="middle"
                            fontSize="9" 
                            fontWeight="black" 
                            fill={getBeadBaseColor(el)}
                          >
                            {el[0]}
                          </text>
                        );
                      })}
                    </svg>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">{t.radar_title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {t.radar_desc}
                    </p>
                  </div>
                </div>

                {/* 🌟 7. PREMIUM UNLOCKED CONTENT (OR BLURRED PAYWALL) */}
                {!isUnlocked ? (
                  <div className="relative border border-slate-200 rounded-3xl p-6 bg-slate-50/50 flex flex-col gap-6 overflow-hidden">
                    {/* Blurred background mockup */}
                    <div className="filter blur-md select-none pointer-events-none opacity-40 flex flex-col gap-6">
                      <div>
                        <h3 className="text-xs font-bold text-slate-900 border-l-4 border-blue-600 pl-2">先天弱项与调养方案</h3>
                        <p className="text-xs mt-2">偏弱/缺失元素分析及每日理疗对策...</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-slate-900 border-l-4 border-blue-600 pl-2">黄帝内经生命黄金节点</h3>
                        <p className="text-xs mt-2">女子五七阳明脉衰面始焦发始堕调理重点...</p>
                      </div>
                    </div>

                    {/* Paywall Card */}
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                        <Lock size={18} />
                      </div>
                      <div>
                        <h4 className="text-base font-black text-slate-900">{lang === 'zh' ? '升级至高级 DNA 报告解锁完整项目' : lang === 'ja' ? 'DNA完全版レポートにアップグレードして全て解除' : 'Upgrade to DNA Edition to Unlock Full Report'}</h4>
                        <p className="text-[10px] text-slate-500 max-w-sm mt-1 mx-auto leading-relaxed">
                          {lang === 'zh' ? '升级后即可解锁：先天偏弱体质调理（弱项五行分析）、《黄帝内经》男女衰老退化节点提醒，以及 David Cai 医生亲自针对您的症状撰写的英文针灸处方建议。' :
                           lang === 'ja' ? 'アップグレードすると、不足する五行の分析、黄帝内経の加齢リスク警告、デビッド医師の鍼灸処方アプローチがすべて解除されます。' :
                           "Upgrade to unlock: deficient element profile, Huangdi Neijing aging milestone warning, and Dr. David Cai's personalized clinical acupuncture treatments."}
                        </p>
                      </div>

                      <button 
                        onClick={() => setShowCheckout(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl shadow transition-all text-xs"
                      >
                        {t.unlock_now_btn} (仅需 $9.90)
                      </button>
                    </div>
                  </div>
                ) : (
                  /* UNLOCKED FULL SECTIONS */
                  <div className="flex flex-col gap-8 transition-all duration-500">
                    
                    {/* Deficient Element */}
                    <div className="flex flex-col gap-4 border border-slate-200 rounded-3xl p-6 bg-slate-50/20">
                      <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-l-4 border-blue-600 pl-2">
                        {t.weak_phys_title}
                      </h3>
                      <span className="text-base font-black text-blue-700">
                        {getElementNamesLocalized(deficient)}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {constitutionDescriptions[lang][deficient]?.desc}
                      </p>
                      <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-xs leading-relaxed text-slate-700">
                        <strong className="text-blue-800 block mb-1">💡 {lang === 'zh' ? '弱项调养·日常穴位理疗指导' : lang === 'ja' ? '不足の調律・日常の経穴ケア' : 'Deficient Element · Acupressure Guidelines'}：</strong>
                        {constitutionDescriptions[lang][deficient]?.advice}
                      </div>
                    </div>

                    {/* Huangdi Neijing Cycle */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-l-4 border-blue-600 pl-2">
                        {t.neijing_title}
                      </h3>
                      <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5">
                        <div className="flex justify-between items-center border-b border-blue-100 pb-2 mb-2">
                          <span className="text-xs font-bold text-blue-800">{neijing.label}</span>
                          <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Life Cycle Milestone</span>
                        </div>
                        <div className="text-sm font-black text-blue-950 italic mb-2">
                          “{neijing.quote}”
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {neijing.clinical}
                        </p>
                      </div>
                    </div>

                    {/* Clinical Recommendations */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-l-4 border-blue-600 pl-2">
                        {t.consult_title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {t.consult_desc}
                      </p>

                      <div className="flex flex-col gap-4 mt-2">
                        {selectedSymptoms.map((code) => {
                          const plan = clinicalAcupuncturePlans[lang][code as keyof typeof clinicalAcupuncturePlans['en']];
                          if (!plan) return null;
                          return (
                            <div key={code} className="border border-slate-100 rounded-xl p-4 bg-slate-50/20">
                              <strong className="text-xs text-slate-900 uppercase block mb-1">{plan.title}</strong>
                              <p className="text-xs text-slate-600 leading-relaxed">{plan.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Unlocked Booking CTA */}
                    <div className="border-t border-slate-100 pt-6 mt-4 text-center flex flex-col gap-3">
                      <h4 className="text-sm font-black text-slate-950">
                        {t.unlocked_booking_title}
                      </h4>
                      <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                        {t.unlocked_booking_desc}
                      </p>
                      
                      <a 
                        href="/book-appointment"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-500/20 transition-all text-xs max-w-xs mx-auto"
                      >
                        {t.unlocked_booking_btn}
                      </a>
                    </div>

                  </div>
                )}

              </div>
            )}

          </div>

          {/* Bottom disclaimer */}
          <div className="text-center mt-6 text-[10px] text-slate-400 px-4 leading-relaxed">
            {t.disclaimer}
          </div>

        </div>
      </section>

      {/* MOCK CHECKOUT MODAL */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 bg-[#0B1120]/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 max-w-md w-full relative flex flex-col gap-5 animate-in fade-in zoom-in-95 duration-200">
            
            <button 
              onClick={() => setShowCheckout(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            <div className="text-center">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">AcuTherapy Clinics</span>
              <h3 className="text-lg font-black text-slate-900 mt-1">{t.pay_modal_title}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{t.pay_modal_subtitle}</p>
            </div>

            <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 flex justify-between items-center">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-bold text-slate-800">TCM Constitution Advanced Report</span>
                <span className="text-[9px] text-slate-400">Includes full cycle, deficient element and symptoms advice</span>
              </div>
              <span className="text-lg font-black text-slate-950">$9.90</span>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleMockPay} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{t.pay_card_num}</label>
                <input 
                  type="text" 
                  placeholder="4111 2222 3333 4444" 
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{t.pay_expiry}</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    className="bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{t.pay_cvc}</label>
                  <input 
                    type="text" 
                    placeholder="123" 
                    value={cardCvc}
                    onChange={(e) => setCardCvc(e.target.value)}
                    className="bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isPaying}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/25 transition-all text-xs flex items-center justify-center gap-2 mt-2 disabled:bg-blue-400"
              >
                {isPaying ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                    {t.paying_status}
                  </>
                ) : (
                  t.pay_btn
                )}
              </button>
            </form>

            <div className="text-center text-[9px] text-slate-400 flex items-center justify-center gap-1.5 mt-1 border-t border-slate-50 pt-3">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              SSL 256位安全加密支付系统，支持所有主流信用卡
            </div>

          </div>
        </div>
      )}
    </>
  );
}

// 2. Parse age and determine Huangdi Neijing Cycle
const elementsMap: Record<string, string> = {
  '甲': 'Wood', '乙': 'Wood', '寅': 'Wood', '卯': 'Wood',
  '丙': 'Fire', '丁': 'Fire', '巳': 'Fire', '午': 'Fire',
  '戊': 'Earth', '己': 'Earth', '辰': 'Earth', '戌': 'Earth', '丑': 'Earth', '未': 'Earth',
  '庚': 'Metal', '辛': 'Metal', '申': 'Metal', '酉': 'Metal',
  '壬': 'Water', '癸': 'Water', '亥': 'Water', '子': 'Water'
};
