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

const getBeadBaseColor = (el: string) => {
  switch(el) {
    case 'Wood': return '#10B981'; // Emerald Green
    case 'Fire': return '#EF4444'; // Red
    case 'Earth': return '#F59E0B'; // Amber Gold
    case 'Metal': return '#94A3B8'; // Slate/Silver
    case 'Water': return '#3B82F6'; // Blue
    default: return '#9CA3AF';
  }
};

const getGanZhiElement = (ganzhi: string) => {
  if (!ganzhi || ganzhi === '未知') return 'Neutral';
  const stem = ganzhi[0];
  return FIVE_ELEMENTS_MAP[stem as keyof typeof FIVE_ELEMENTS_MAP] || 'Neutral';
};

const constitutionDescriptions: Record<string, { title: string; desc: string; advice: string }> = {
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
};

const quotes: Record<string, string> = {
  'Wood': '万物生发，不破不立。您需要扎根大地的勇气，来对抗风雨中的焦虑。',
  'Fire': '心火炽盛，向阳而生。与其在内耗中燃烧自己，不如将热情化作照亮前路的明灯。',
  'Earth': '厚德载物，固本培元。放下那些不属于您的重担，给自己一片可以安静降落的土壤。',
  'Metal': '百炼成钢，断舍离尘。斩断那些混乱的羁绊，在极简与秩序中找回内心的锋芒。',
  'Water': '上善若水，顺流而下。不必时刻紧绷对抗，允许自己像水一样，在静默中积蓄千钧之力。'
};

const deficientTeasers: Record<string, string> = {
  'Wood': '您的不足能量为木元素。这代表您目前缺乏生长、活力与远见，可能感到缺乏动力、方向模糊，或是难以规划未来。',
  'Fire': '您的不足能量为火元素。这代表您目前缺乏温热、喜悦与情绪的舒展，可能感到情绪平淡、内心寒冷，或失去了灵感的火花。',
  'Earth': '您的不足能量为土元素。这代表您目前缺乏根基、稳定与滋养，可能感到焦虑、漂浮不定，没有一个能够让您安心落脚的安全土壤。',
  'Metal': '您的不足能量为金元素。这代表您目前缺乏界限感、清晰度与断舍离的能力，容易被混乱所包围，或抓着旧有的情绪垃圾不放。',
  'Water': '您的不足能量为水元素。这代表您目前缺乏休息、深层储备与内心的宁静，正处于透支状态，难以链接内心的深层智慧。'
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

  // 1. Calculate Bazi elements count
  function getElementsCount(birthDateStr: string, birthTimeStr: string) {
    if (!birthDateStr) return { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };
    
    const dParts = birthDateStr.split('-');
    const year = parseInt(dParts[0]) || 2000;
    const month = parseInt(dParts[1]) || 1;
    const day = parseInt(dParts[2]) || 1;
    const hour = parseInt(birthTimeStr.split(':')[0]) || 0;

    // Day Stem-Branch
    let calcYear = year;
    let calcMonth = month;
    let calcDay = day;
    if (hour >= 23) {
      const d = new Date(year, month - 1, day);
      d.setDate(d.getDate() + 1);
      calcYear = d.getFullYear();
      calcMonth = d.getMonth() + 1;
      calcDay = d.getDate();
    }

    const refUTC = Date.UTC(2000, 0, 1);
    const targetUTC = Date.UTC(calcYear, calcMonth - 1, calcDay);
    const diffDays = Math.round((targetUTC - refUTC) / (1000 * 60 * 60 * 24));

    let dayStemIndex = (4 + diffDays) % 10;
    if (dayStemIndex < 0) dayStemIndex += 10;
    let dayBranchIndex = (6 + diffDays) % 12;
    if (dayBranchIndex < 0) dayBranchIndex += 12;

    const dStem = stems[dayStemIndex];
    const dBranch = branches[dayBranchIndex];

    // Hour Stem-Branch (Wu Shu Dun)
    const slotIdx = Math.floor((hour + 1) / 2) % 12;
    const startStemIndex = (dayStemIndex % 5) * 2 % 10;
    const hourStemIndex = (startStemIndex + slotIdx) % 10;
    const hStem = stems[hourStemIndex];
    const hBranch = branches[slotIdx];

    // Count Elements
    const elements = [dStem, dBranch, hStem, hBranch];
    const counts: Record<string, number> = { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };
    
    // Base congenital seed counts
    counts.Wood = 1;
    counts.Fire = 1;
    counts.Earth = 1;
    counts.Metal = 1;
    counts.Water = 1;

    elements.forEach(item => {
      const element = elementsMap[item];
      if (element) {
        counts[element] += 2;
      }
    });

    return counts;
  }



  // 2. Parse age and determine Huangdi Neijing Cycle
  function getNeijingCycle(birthDateStr: string, isFemale: boolean) {
    if (!birthDateStr) return { label: '', quote: '', clinical: '' };
    
    const birthYear = parseInt(birthDateStr.split('-')[0]) || 2000;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (isFemale) {
      if (age < 14) {
        return {
          label: '女子一七 (肾气渐盛阶段)',
          quote: '女子七岁，肾气盛，齿更发长。',
          clinical: '此时处于儿童生长发育期，肾气开始充盈，乳齿脱落换为恒齿，头发快速生长。应注重全面营养，保障充足睡眠，避免暴饮暴食。'
        };
      } else if (age < 21) {
        return {
          label: '女子二七 (天癸至/经期开端)',
          quote: '二七而天癸至，任脉通，太冲脉盛，月事以时下，故有子。',
          clinical: '此时女性生殖机能成熟，月经按时来潮，具备生育能力。此阶段情绪易波动，需注意经期保暖，避免剧烈运动与生冷饮食，理气调经是核心。'
        };
      } else if (age < 28) {
        return {
          label: '女子三七至四七 (身体鼎盛状态)',
          quote: '三七肾气平均，真牙生而长极；四七筋骨坚，发长极，身体盛壮。',
          clinical: '这是您一生的身体黄金期，肌肉满壮，筋骨最为强健。这是备孕的最佳窗口，也是保养元气、防止透支的关键时期。'
        };
      } else if (age < 42) {
        return {
          label: '女子五七 (阳明衰退/衰老起点)',
          quote: '五七，阳明脉衰，面始焦，发始堕。',
          clinical: '【临床警示】35岁起，手足阳明经（胃经与大肠经）的气血开始衰退。阳明经分布在面部，因此面部皮肤开始松弛干燥，头发开始脱落。调理核心在于“健脾胃、益气血”，通过针灸刺激足阳明经，可延缓衰老，保持皮肤红润。'
        };
      } else if (age < 49) {
        return {
          label: '女子六七 (三阳脉衰阶段)',
          quote: '六七，三阳脉衰于上，面皆焦，发始白。',
          clinical: '【临床警示】42岁起，太阳、阳明、少阳三阳经气血全面衰退，面部皱纹增多，头发开始变白。此阶段身体代谢减慢，容易出现慢性酸痛和情绪抑郁，针灸调理重点在于“疏通三阳，温通经络”。'
        };
      } else {
        return {
          label: '女子七七 (天癸竭/更年期阶段)',
          quote: '七七，任脉虚，太冲脉衰少，天癸竭，地道不通，故形坏而无子也。',
          clinical: '【临床关怀】49岁前后，任冲两脉血气衰少，天癸干涸，进入绝经期。此时身体激素水平剧烈波动，容易出现潮热盗汗、失眠焦虑、骨质疏松等更年期综合征。针灸可通过调理任督二脉、滋阴清热，安全无副作用地平稳度过更年期。'
        };
      }
    } else {
      // Male 8-year cycles
      if (age < 16) {
        return {
          label: '丈夫一八 (肾气实阶段)',
          quote: '丈夫八岁，肾气实，发长齿更。',
          clinical: '处于儿童及少年发育期，肾气开始充实，骨骼牙齿快速发育。'
        };
      } else if (age < 24) {
        return {
          label: '丈夫二八 (天癸至阶段)',
          quote: '二八，肾气盛，天癸至，精气溢写，阴阳和，故能有子。',
          clinical: '男性生殖机能成熟，精力旺盛，骨骼生长进入爆发期。'
        };
      } else if (age < 32) {
        return {
          label: '丈夫三八至四八 (筋骨肌肉鼎盛期)',
          quote: '三八，肾气平均，筋骨劲强；四八，筋骨隆盛，肌肉满壮。',
          clinical: '24岁至32岁是男性身体机能的最高峰，筋骨强壮，肌肉发达。应维持良好的作息以稳固阳气。'
        };
      } else if (age < 48) {
        return {
          label: '丈夫五八至六八 (肾气与阳气衰退期)',
          quote: '五八，肾气衰，发堕齿槁；六八，阳气衰竭于上，面焦，发鬓颁白。',
          clinical: '【临床警示】40岁起肾气渐衰，开始出现脱发、牙齿松动；48岁起头部阳气衰退，额头面部出现疲态，两鬓变白。临床调理重点在于“补益肾气、维护骨骼关节”，预防腰椎间盘突出和慢性劳损。'
        };
      } else if (age < 64) {
        return {
          label: '丈夫七八 (肝肾亏虚阶段)',
          quote: '七八，肝气衰，筋不能动，天癸竭，精少，肾藏衰，形体皆极。',
          clinical: '【临床警示】56岁起，肝血渐虚，筋脉失去滋养，导致关节僵硬、运动不灵活；肾脏功能衰退，易感体力不支、精力减退。针灸可以强肝肾、通关节，缓解中老年骨性关节炎和全身酸痛。'
        };
      } else {
        return {
          label: '丈夫八八 (衰老养生期)',
          quote: '八八，则齿发去……形体皆极。',
          clinical: '【临床关怀】64岁之后，进入深度老龄养生阶段。人体脏腑精气以固守为主，防寒保暖、养阴护阳为要。通过温和的艾灸和温针灸，可有效培元固本，延年益寿。'
        };
      }
    }
  }

  // Symptom toggles
  function toggleSymptom(code: string) {
    if (selectedSymptoms.includes(code)) {
      setSelectedSymptoms(selectedSymptoms.filter(item => item !== code));
    } else {
      setSelectedSymptoms([...selectedSymptoms, code]);
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
  const neijing = getNeijingCycle(dob, gender === 'female');

  // Submit to Vercel production check
  function handleNextStep() {
    if (step === 1) {
      if (!name.trim()) {
        alert("请输入您的姓名");
        return;
      }
      if (!dob) {
        alert("请选择您的出生日期");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (selectedSymptoms.length === 0) {
        alert("请至少选择一项您关注的健康状况");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert("请输入有效的电子邮箱地址");
        return;
      }

      // 🔮 Initialize dynamic Bazi beads for BaZiCanvas on email submit
      const birthDate = new Date(year, month - 1, day, hour, 0);
      const lunar = Lunar.fromDate(birthDate);
      const bY = lunar.getYearInGanZhi();
      const bM = lunar.getMonthInGanZhi();
      const bD = lunar.getDayInGanZhi();
      const bT = lunar.getTimeInGanZhi() || '未知';

      // Current Honolulu local time
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

      // Match selected symptoms to elements for subconscious cores
      const elementList: string[] = [];
      selectedSymptoms.forEach(code => {
        if (code === 'A') elementList.push('Fire');
        if (code === 'B') elementList.push('Fire');
        if (code === 'C') elementList.push('Earth');
        if (code === 'D') elementList.push('Wood');
        if (code === 'E') elementList.push('Water');
      });
      while (elementList.length < 4) {
        elementList.push(dominant);
      }
      const subconscious = [
        { element: elementList[0], type: 'subconscious' as const, char: '念' },
        { element: elementList[1], type: 'subconscious' as const, char: '心' },
        { element: elementList[2], type: 'subconscious' as const, char: '意' },
        { element: elementList[3], type: 'subconscious' as const, char: '神' },
      ];

      setBeads([...innate, ...acquired, ...subconscious]);
      setStep(4);
    }
  }

  // Simulated Checkout Submission
  function handleMockPay(e: React.FormEvent) {
    e.preventDefault();
    if (!cardNumber.trim() || !cardExpiry.trim() || !cardCvc.trim()) {
      alert("请填写完整的支付信息");
      return;
    }
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setIsUnlocked(true);
      setShowCheckout(false);
      alert("🎉 恭喜！已成功升级至 DNA 专属完整版报告！");
    }, 1500);
  }

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
    if (item.score < minScore) {
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

  // Helper to draw vertical GanZhi columns (Screenshot 3 style)
  const renderPillarColumn = (pillar: string, isLight: boolean = true) => {
    if (!pillar || pillar === '未知') return <div className="text-sm">未知</div>;
    const stem = pillar[0];
    const branch = pillar[1];
    const e1 = FIVE_ELEMENTS_MAP[stem as keyof typeof FIVE_ELEMENTS_MAP];
    const e2 = FIVE_ELEMENTS_MAP[branch as keyof typeof FIVE_ELEMENTS_MAP];
    
    return (
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[10px] uppercase font-bold tracking-tight opacity-50">{stem}</span>
        <span className={`text-xs font-black ${isLight ? 'text-slate-800' : 'text-white'}`}>{e1}</span>
        <span className="text-[10px] uppercase font-bold tracking-tight opacity-50 mt-1">{branch}</span>
        <span className={`text-xs font-black ${isLight ? 'text-slate-500' : 'text-white/80'}`}>{e2}</span>
      </div>
    );
  };

  // Helper to format Bazi stems elements string
  const getBaziElementsString = (y: string, d: string) => {
    const eY = FIVE_ELEMENTS_MAP[y[0] as keyof typeof FIVE_ELEMENTS_MAP] || '';
    const eD = FIVE_ELEMENTS_MAP[d[0] as keyof typeof FIVE_ELEMENTS_MAP] || '';
    return `${eY} / ${eD}`;
  };

  return (
    <>
      <Helmet>
        <title>中医体质与生命节律评估 | AcuTherapy Clinics</title>
        <meta name="description" content="AcuTherapy Clinics 结合五运六气干支医学与黄帝内经上古天真论生命周期，为您提供深度中医体质分析。" />
      </Helmet>

      <section className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Top Logo & Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-blue-600 font-extrabold text-sm uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              AcuTherapy Clinics
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              中医体质与生命节律评估
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              结合《黄帝内经·上古天真论》与先天五运六气禀赋的临床测评
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
                  <h2 className="text-lg font-bold text-slate-900">第一步：输入您的基本信息</h2>
                  <p className="text-xs text-slate-400 mt-0.5">用于计算您的先天五行局与生命节律段</p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500">您的尊称</label>
                  <input 
                    type="text" 
                    placeholder="例如：张先生 / David" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500">生理性别 (生命成长节点男八女七)</label>
                  <div className="grid grid-cols-2 gap-4 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                    <button 
                      onClick={() => setGender('male')}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${gender === 'male' ? 'bg-blue-600 text-white shadow' : 'text-slate-500'}`}
                    >
                      男 ♂
                    </button>
                    <button 
                      onClick={() => setGender('female')}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${gender === 'female' ? 'bg-blue-600 text-white shadow' : 'text-slate-500'}`}
                    >
                      女 ♀
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500">公历出生日期</label>
                    <input 
                      type="date" 
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500">出生时辰 (可选)</label>
                    <select 
                      value={tob}
                      onChange={(e) => setTob(e.target.value)}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white outline-none transition-all"
                    >
                      <option value="00:00">子时 (23:00-01:00)</option>
                      <option value="02:00">丑时 (01:00-03:00)</option>
                      <option value="04:00">寅时 (03:00-05:00)</option>
                      <option value="06:00">卯时 (05:00-07:00)</option>
                      <option value="08:00">辰时 (07:00-09:00)</option>
                      <option value="10:00">巳时 (09:00-11:00)</option>
                      <option value="12:00">午时 (11:00-13:00)</option>
                      <option value="14:00">未时 (13:00-15:00)</option>
                      <option value="16:00">申时 (15:00-17:00)</option>
                      <option value="18:00">酉时 (17:00-19:00)</option>
                      <option value="20:00">戌时 (19:00-21:00)</option>
                      <option value="22:00">亥时 (21:00-23:00)</option>
                    </select>
                  </div>
                </div>

                <button 
                  onClick={handleNextStep}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 transition-all text-xs mt-3"
                >
                  下一步：勾选身体状况
                </button>
              </div>
            )}

            {/* STEP 2: Symptoms Selection */}
            {step === 2 && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">第二步：勾选您目前最主要的身体状况</h2>
                  <p className="text-xs text-slate-400 mt-0.5">临床中常见的5大健康痛点（可多选）</p>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    { code: 'A', text: '紧张焦虑，思路过度 (Anxiety & Overthinking)' },
                    { code: 'B', text: '睡眠不好，休息不足 (Poor Sleeping)' },
                    { code: 'C', text: '饮食不节，没有规律和控制饭量 (Stomach Upset)' },
                    { code: 'D', text: '疼痛，没有原因的痛 (Body Aches & Pain)' },
                    { code: 'E', text: '无力，疲惫，性功能低下 (Chronic Fatigue & Libido)' }
                  ].map((item) => {
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
                    返回上一步
                  </button>
                  <button 
                    onClick={handleNextStep}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 text-xs"
                  >
                    下一步：解锁报告
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
                  <h2 className="text-xl font-black text-slate-900">报告已就绪！</h2>
                  <p className="text-xs text-slate-400 mt-1 px-4 leading-relaxed">
                    请输入您的电子邮箱，报告将立即生成，同时我们也会为您发送一份长期的节律养生指南。
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    placeholder="输入您的邮箱（例如：example@gmail.com）" 
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
                    修改状况
                  </button>
                  <button 
                    onClick={handleNextStep}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 text-xs"
                  >
                    解锁体质报告 🔓
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
                      中医五行与生命节律评估
                    </span>
                    <h2 className="text-xl font-black text-slate-950 mt-2">您的专属身心能量分析</h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-500 font-medium">
                      <span>姓名：<strong className="text-slate-800">{name}</strong></span>
                      <span>性别：<strong className="text-slate-800">{gender === 'female' ? '女' : '男'}</strong></span>
                      <span>时区：<strong className="text-slate-800">檀香山 (Honolulu)</strong></span>
                    </div>
                  </div>
                  <a 
                    href="/book-appointment"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-all self-stretch sm:self-auto text-center"
                  >
                    预约诊所针灸
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
                    外圈 {beads.filter(b => b.type === 'innate').length} 颗先天珠（出生局）与 {beads.filter(b => b.type === 'acquired').length} 颗后天珠（当前时空）匀速运转，内核心为 4 颗身心主观能量鱼眼
                  </span>
                </div>

                {/* 🌟 2. DOUBLE-CARD EDITION SELECTION PANELS (Screenshot 5 Style) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Free Classic Card */}
                  <div className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-black text-slate-900">Classic Edition (免费版)</h4>
                      <p className="text-[10px] text-slate-400 font-medium">Free sequential design & dominant energy</p>
                    </div>
                    <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
                      <a 
                        href="/book-appointment"
                        className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold py-2.5 rounded-xl text-center text-xs shadow-sm transition-all"
                      >
                        在线预约门诊评估
                      </a>
                      <a 
                        href={`/assets/${dominant.toLowerCase()}_talisman.png`}
                        download
                        className="text-[10px] text-blue-600 font-bold hover:underline flex items-center justify-center gap-1.5 mt-1"
                      >
                        <Download size={12} /> 下载您的五行护身符壁纸
                      </a>
                    </div>
                  </div>

                  {/* Premium DNA Card */}
                  <div className="bg-white rounded-3xl border-2 border-blue-600 p-5 flex flex-col justify-between gap-4 shadow-md relative overflow-hidden">
                    <div className="absolute top-2.5 right-2.5 bg-yellow-500 text-white font-black text-[9px] px-2 py-0.5 rounded uppercase tracking-wider">
                      Premium
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-black text-slate-900">DNA Edition (解锁版)</h4>
                      <p className="text-[10px] text-slate-400 font-medium">Deep energy intertwining & clinical recommendations</p>
                    </div>
                    <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
                      {!isUnlocked ? (
                        <>
                          <div className="flex justify-between items-baseline">
                            <span className="text-[10px] text-slate-400 font-semibold">一次性解锁</span>
                            <span className="text-base font-black text-slate-900">$9.90</span>
                          </div>
                          <button 
                            onClick={() => setShowCheckout(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-center text-xs shadow transition-all"
                          >
                            付费解锁完整报告
                          </button>
                        </>
                      ) : (
                        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl py-2 px-3 text-xs font-bold text-center flex items-center justify-center gap-1.5">
                          <Check size={14} /> DNA 完整报告已解锁
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* 🌟 3. ASTROLOGICAL ALIGNMENT PILLARS CARDS (Screenshot 3 Style) */}
                {beads.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto w-full">
                    
                    {/* Left: Your Birth Chart */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center shadow-sm flex flex-col items-center gap-2">
                      <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black">YOUR BIRTH CHART</p>
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
                        )} Dominant
                      </p>
                    </div>

                    {/* Right: Current Honolulu Chart */}
                    <div className="bg-[#0B1120] rounded-2xl border border-slate-800 p-5 text-center shadow-md flex flex-col items-center gap-2 text-white">
                      <p className="text-[9px] text-blue-400/80 uppercase tracking-widest font-black">CURRENT HONOLULU</p>
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
                        )} Dominant
                      </p>
                    </div>

                  </div>
                )}

                {/* 🌟 4. CURRENT DOMINANT ENERGY CARDS (Screenshot 4 Style) */}
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col items-center gap-5">
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Your Current Dominant Energy</span>
                  
                  <div className="flex justify-center gap-4 w-full max-w-sm">
                    {/* Dominant Element Badge */}
                    <div className="flex-1 bg-rose-50 border border-rose-200 rounded-2xl py-3 px-4 text-center">
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Dominant Archetype</span>
                      <span className="text-xl font-black text-rose-700 mt-1 block font-serif">{dominant}</span>
                    </div>

                    {/* Deficient Element Badge */}
                    <div className="flex-1 bg-blue-50 border border-blue-200 rounded-2xl py-3 px-4 text-center">
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Deficient Energy</span>
                      <span className="text-xl font-black text-blue-700 mt-1 block font-serif">
                        {isUnlocked ? deficient : '🔒 Locked'}
                      </span>
                    </div>
                  </div>

                  {/* Golden Quote Block */}
                  <div className="relative border border-slate-150 rounded-2xl p-5 bg-white text-center shadow-sm w-full mt-1">
                    <span className="text-2xl text-slate-300 absolute -top-3 left-4 bg-white px-2">“</span>
                    <p className="text-xs text-slate-700 leading-relaxed italic px-2 font-medium">
                      {quotes[dominant]}
                    </p>
                  </div>

                  {/* Deficient Archetype Quote */}
                  <div className="text-center text-xs text-slate-500 leading-relaxed max-w-md px-4 italic mt-1">
                    {isUnlocked ? (
                      deficientTeasers[deficient]
                    ) : (
                      <span className="text-slate-400">“解锁 DNA 专属报告，查看您的不足能量五脏分析与断舍离指南”</span>
                    )}
                  </div>
                </div>

                {/* 🌟 5. DOMINANT ELEMENT PHYSICAL ADVICE (FREE VERSION CONTENT) */}
                <div className="flex flex-col gap-4 border border-slate-200 rounded-3xl p-6 bg-slate-50/20">
                  <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-l-4 border-amber-500 pl-2">
                    主导先天体质特征与理疗对策
                  </h3>
                  <span className="text-base font-black text-amber-700">
                    {elementNamesZh[dominant]} / {elementNamesEn[dominant]}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {constitutionDescriptions[dominant]?.desc}
                  </p>
                  <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl text-xs leading-relaxed text-slate-700">
                    <strong className="text-amber-800 block mb-1">💡 免费版·主导经络穴位理疗指导：</strong>
                    {constitutionDescriptions[dominant]?.advice}
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
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">先天五脏气血平衡度</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      旁侧网状雷达图（Radar Chart）显示了您出生的五行气场。每个顶点对应中医五脏：木主肝，火主心，土主脾，金主肺，水主肾。越向外偏斜的脏器代表气血偏旺，越往中心收敛的代表能量偏弱。
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
                        <h4 className="text-base font-black text-slate-900">升级至高级 DNA 报告解锁完整项目</h4>
                        <p className="text-[10px] text-slate-500 max-w-sm mt-1 mx-auto leading-relaxed">
                          升级后即可解锁：先天偏弱体质调理（弱项五行分析）、《黄帝内经》男女衰老退化节点提醒，以及 David Cai 医生亲自针对您的症状撰写的英文针灸处方建议。
                        </p>
                      </div>

                      <button 
                        onClick={() => setShowCheckout(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl shadow transition-all text-xs"
                      >
                        解锁高级评估报告 (仅需 $9.90)
                      </button>
                    </div>
                  </div>
                ) : (
                  /* UNLOCKED FULL SECTIONS */
                  <div className="flex flex-col gap-8 transition-all duration-500">
                    
                    {/* Deficient Element */}
                    <div className="flex flex-col gap-4 border border-slate-200 rounded-3xl p-6 bg-slate-50/20">
                      <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-l-4 border-blue-600 pl-2">
                        先天缺失/偏弱体质调养
                      </h3>
                      <span className="text-base font-black text-blue-700">
                        {elementNamesZh[deficient]} / {elementNamesEn[deficient]}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {constitutionDescriptions[deficient]?.desc}
                      </p>
                      <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-xs leading-relaxed text-slate-700">
                        <strong className="text-blue-800 block mb-1">💡 弱项调养·日常穴位理疗指导：</strong>
                        {constitutionDescriptions[deficient]?.advice}
                      </div>
                    </div>

                    {/* Huangdi Neijing Cycle */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-l-4 border-blue-600 pl-2">
                        《黄帝内经》生命节律年龄段评估
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
                        临床对症针灸方案建议 (Clinical Consultation)
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Based on your selected symptoms, Dr. David Cai recommends the following targeted clinical acupuncture treatment plans:
                      </p>

                      <div className="flex flex-col gap-4 mt-2">
                        {/* Anxiety */}
                        {selectedSymptoms.includes('A') && (
                          <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/20">
                            <strong className="text-xs text-slate-900 uppercase block mb-1">Acupuncture for Overthinking & Anxiety:</strong>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              Acupuncture can help quiet the mind by regulating neurotransmitters. Chronic worry overtaxes the spleen and heart Qi, leading to digestive issues and brain fog. We utilize specific cranial and meridian points to calm your nervous system and release muscle tension.
                            </p>
                          </div>
                        )}

                        {/* Poor Sleeping */}
                        {selectedSymptoms.includes('B') && (
                          <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/20">
                            <strong className="text-xs text-slate-900 uppercase block mb-1">Acupuncture Treatment for Poor Sleeping:</strong>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              Poor sleeping can lead to a host of health problems, including fatigue, depression, and anxiety. Acupuncture can help by regulating your body's natural sleep-wake cycle and promoting relaxation. By targeting specific points in your body, acupuncture can help you fall asleep faster, stay asleep longer, and wake up feeling refreshed.
                            </p>
                          </div>
                        )}

                        {/* Stomach Upset */}
                        {selectedSymptoms.includes('C') && (
                          <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/20">
                            <strong className="text-xs text-slate-900 uppercase block mb-1">Acupuncture Treatment for Stomach Upset:</strong>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              Stomach upset can be caused by a variety of factors, including stress, diet, and medication. Acupuncture can help by improving your digestion and reducing inflammation in your stomach. By stimulating specific points in your body, acupuncture can help regulate the production of stomach acid and reduce the frequency and severity of stomach upset.
                            </p>
                          </div>
                        )}

                        {/* Body Aches */}
                        {selectedSymptoms.includes('D') && (
                          <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/20">
                            <strong className="text-xs text-slate-900 uppercase block mb-1">Acupuncture Treatment for Body Aches & Pain:</strong>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              Body aches can be caused by a variety of factors, including injury, inflammation, and stress. Acupuncture can help by stimulating the production of endorphins, which are natural painkillers in your body. By targeting specific points in your body, acupuncture can help reduce pain and inflammation and improve your overall mobility.
                            </p>
                          </div>
                        )}

                        {/* Fatigue / Libido */}
                        {selectedSymptoms.includes('E') && (
                          <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/20 flex flex-col gap-3">
                            <div>
                              <strong className="text-xs text-slate-900 uppercase block mb-1">Acupuncture Treatment for Chronic Fatigue:</strong>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                Chronic fatigue is a debilitating condition that can significantly impact your quality of life. Acupuncture can help by stimulating specific points in your body that can improve your energy levels and reduce fatigue. By improving the flow of Qi or energy throughout your body, acupuncture can help you feel more energized and rejuvenated.
                              </p>
                            </div>
                            <div>
                              <strong className="text-xs text-slate-900 uppercase block mb-1">Acupuncture Treatment for Libido & Vitality:</strong>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                Low libido can be caused by a variety of factors, including stress, hormonal imbalances, and medication. Acupuncture can help by regulating your body's hormonal balance and improving blood flow to your reproductive organs. By targeting specific points in your body, acupuncture can help increase your sex drive and improve your sexual function.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Unlocked Booking CTA */}
                    <div className="border-t border-slate-100 pt-6 mt-4 text-center flex flex-col gap-3">
                      <h4 className="text-sm font-black text-slate-950">
                        已为您制定最佳调养建议！立即结合临床针灸进行治疗
                      </h4>
                      <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                        David Cai 医生将根据您的先天弱项五行与生命岁数，利用精细的脉诊定位您体内的失衡点，实施精准的按时针灸治疗。
                      </p>
                      
                      <a 
                        href="/book-appointment"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-500/20 transition-all text-xs max-w-xs mx-auto"
                      >
                        在线预约门诊治疗
                      </a>
                    </div>

                  </div>
                )}

              </div>
            )}

          </div>

          {/* Bottom disclaimer */}
          <div className="text-center mt-6 text-[10px] text-slate-400 px-4 leading-relaxed">
            * 提示：本测试为传统中医健康评估，基于天干地支数理与黄帝内经经典。测试报告提供建议与日常穴位理疗指导，不能代替专业医疗诊断与处方。如有严重疾病，请遵医嘱并预约医生面诊。
          </div>

        </div>
      </section>

      {/* MOCK CHECKOUT MODAL (Screenshot 1 Style) */}
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
              <h3 className="text-lg font-black text-slate-900 mt-1">安全解锁高级体质报告</h3>
              <p className="text-xs text-slate-400 mt-0.5">一次性买断解锁，永久访问此报告</p>
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
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">信用卡号码</label>
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
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">有效期</label>
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
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">CVC 安全码</label>
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
                    正在安全验证...
                  </>
                ) : (
                  `支付并解锁 $9.90`
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

const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const elementsMap: Record<string, string> = {
  '甲': 'Wood', '乙': 'Wood', '寅': 'Wood', '卯': 'Wood',
  '丙': 'Fire', '丁': 'Fire', '巳': 'Fire', '午': 'Fire',
  '戊': 'Earth', '己': 'Earth', '辰': 'Earth', '戌': 'Earth', '丑': 'Earth', '未': 'Earth',
  '庚': 'Metal', '辛': 'Metal', '申': 'Metal', '酉': 'Metal',
  '壬': 'Water', '癸': 'Water', '亥': 'Water', '子': 'Water'
};
