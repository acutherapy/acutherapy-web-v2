import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, QrCode } from 'lucide-react';

type Bead = {
  element: string;
  type: 'innate' | 'acquired' | 'subconscious';
  char: string;
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

const teaserDict = {
  zh: {
    title: "探索您的先天五行与生命节律",
    subtitle: "中医古法智慧与现代数字化身心评估",
    teaser_title: "您的灵魂属于哪一种五行能量？",
    teaser_desc: "根据天干地支数理与《黄帝内经·上古天真论》男女生命节点规律，我们利用精密的数字化算法，为您量身定制个人的“五行能量护身壁纸”与临床针灸调理处方。",
    card_title: "扫码或点击下方按钮开启测评",
    card_desc: "仅需 2 分钟，回答 5 项常见身体状况，解锁您最真实的身心密码。",
    cta_btn: "立即免费测试 ➔",
    scan_badge: "手机扫码体验",
    meta_desc: "AcuTherapy Clinics 中医五行体质与生命节律评估营销推广页。扫码即可解锁个人身心密码。"
  },
  en: {
    title: "Discover Your Innate Five Elements",
    subtitle: "Ancient TCM Wisdom Combined with Modern Digital Wellness Profiling",
    teaser_title: "Which Five Elements energy rules your body?",
    teaser_desc: "Combining dry stem/branch calculations and biological age milestones from the Huangdi Neijing, our algorithm determines your dominant elemental archetype and creates your custom 'Energy Talisman Wallpaper' with acupuncture advice.",
    card_title: "Scan QR Code or Click to Start",
    card_desc: "Takes only 2 minutes. Answer 5 health questions to unlock your personal body & mind energy charter.",
    cta_btn: "Start Free Test ➔",
    scan_badge: "Scan with Phone",
    meta_desc: "AcuTherapy Clinics TCM Constitution & Life Cycle Assessment teaser landing page. Scan or click to unlock your energy chart."
  },
  ja: {
    title: "先天的五行と生命リズムを解き明かす",
    subtitle: "東洋医学の智慧と現代デジタルテクノロジーの融合",
    teaser_title: "あなたの本質を構成する五行エネルギーは？",
    teaser_desc: "天干地支の数理と『黄帝内経』に記述される男女の生命周期に基づき、あなた専用の「五行お守り壁紙」と最適な臨床鍼灸ケアプランを自動算出します。",
    card_title: "スキャンまたはクリックで診断開始",
    card_desc: "所要時間はわずか2分。5つの身体症状に答えるだけで、あなたの深層エネルギーバランスが明らかになります。",
    cta_btn: "今すぐ無料診断 ➔",
    scan_badge: "スマホでスキャン",
    meta_desc: "東洋医学体質と生命リズムの評価プロモーションページ。QRコードをスキャンして心身エネルギーを測定。"
  }
};

const generateRandomBeads = (): Bead[] => {
  const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
  const beads: Bead[] = [];
  
  // 8 Innate
  for (let i = 0; i < 8; i++) {
    beads.push({
      element: elements[Math.floor(Math.random() * elements.length)],
      type: 'innate',
      char: ['年', '月', '日', '时'][i % 4]
    });
  }
  
  // 8 Acquired
  for (let i = 0; i < 8; i++) {
    beads.push({
      element: elements[Math.floor(Math.random() * elements.length)],
      type: 'acquired',
      char: ['年', '月', '日', '时'][i % 4]
    });
  }

  // 4 Subconscious
  const chars = ['念', '心', '意', '神'];
  for (let i = 0; i < 4; i++) {
    beads.push({
      element: elements[Math.floor(Math.random() * elements.length)],
      type: 'subconscious',
      char: chars[i]
    });
  }

  return beads;
};

const TeaserCanvas = ({ beads }: { beads: Bead[] }) => {
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

      const radiusBase = 90;
      const stepAngle = (Math.PI * 2) / totalBeads;

      const drawSpiral = (strandBeads: Bead[], phaseOffset: number, isAcquired: boolean) => {
        strandBeads.forEach((bead, i) => {
          const t = i * stepAngle + angleOffset + phaseOffset;
          const x = centerX + Math.cos(t) * radiusBase;
          const y = centerY + Math.sin(t) * radiusBase;

          const baseColor = getBeadBaseColor(bead.element);
          const size = 7;

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
      if (subBeads.length >= 2) {
        const yyRadius = 24;
        const color1 = getBeadBaseColor(subBeads[0].element);
        const color2 = getBeadBaseColor(subBeads[1].element);

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(-angleOffset);

        // Half 1
        ctx.beginPath();
        ctx.arc(0, 0, yyRadius, Math.PI/2, Math.PI*1.5);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        // Half 2
        ctx.beginPath();
        ctx.arc(0, 0, yyRadius, Math.PI*1.5, Math.PI/2);
        ctx.fillStyle = '#0F172A';
        ctx.fill();

        // Top medium circle
        ctx.beginPath();
        ctx.arc(0, -yyRadius/2, yyRadius/2, 0, Math.PI*2);
        ctx.fillStyle = '#0F172A';
        ctx.fill();

        // Bottom medium circle
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
  }, [beads]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default function ConstitutionTeaserPage() {
  const [lang, setLang] = useState<'zh' | 'en' | 'ja'>('zh');
  const [randomBeads, setRandomBeads] = useState<Bead[]>([]);

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
    }
    setRandomBeads(generateRandomBeads());
  }, []);

  // Update random beads periodically to show dynamic variations
  useEffect(() => {
    const timer = setInterval(() => {
      setRandomBeads(generateRandomBeads());
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const t = teaserDict[lang];

  return (
    <>
      <section className="bg-slate-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden">
        
        <Helmet>
          <title>{t.title} | AcuTherapy Clinics</title>
          <meta name="description" content={t.meta_desc} />
        </Helmet>

        {/* Outer space background glows */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#10B981]/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Floating Multi-Language selector */}
        <div className="max-w-4xl w-full flex justify-end mb-6 z-10">
          <div className="flex gap-1 bg-[#1E293B] p-1 rounded-xl shadow-lg border border-slate-800 text-[10px] font-bold">
            <button 
              onClick={() => setLang('zh')} 
              className={`px-3 py-1.5 rounded-lg transition-all ${lang === 'zh' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              中文
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-3 py-1.5 rounded-lg transition-all ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLang('ja')} 
              className={`px-3 py-1.5 rounded-lg transition-all ${lang === 'ja' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              日本語
            </button>
          </div>
        </div>

        <div className="max-w-4xl w-full bg-slate-900 rounded-[36px] shadow-2xl border border-slate-800 p-8 sm:p-12 relative overflow-hidden z-10 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Dynamic preview canvas */}
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-4 text-center">
            
            <div className="inline-flex items-center gap-2 text-blue-400 font-extrabold text-[10px] uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
              AcuTherapy Charter Preview
            </div>

            <div className="bg-[#0B1120] rounded-3xl border border-slate-800 p-6 w-full h-[300px] flex items-center justify-center relative overflow-hidden shadow-2xl">
              {randomBeads.length > 0 && <TeaserCanvas beads={randomBeads} />}
            </div>

            <span className="text-[10px] text-slate-500 tracking-wider uppercase font-bold mt-2">
              ☯ Interactive Vitality Map
            </span>
          </div>

          {/* Right Side: Marketing text & CTA with QR Code */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left text-slate-200">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                {t.teaser_title}
              </h1>
              <p className="text-xs text-blue-400 font-bold tracking-wider mt-1.5 uppercase">
                {t.subtitle}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mt-4">
                {t.teaser_desc}
              </p>
            </div>

            {/* QR Card Container */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5 mt-2">
              {/* QR Code fetched dynamically from official API */}
              <div className="relative w-[130px] h-[130px] bg-white rounded-xl p-2 shrink-0 flex items-center justify-center shadow-md">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://acutherapy.com/constitution-test"
                  alt="AcuTherapy Scan QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-2 text-center sm:text-left">
                <span className="inline-flex self-center sm:self-start items-center gap-1.5 text-[9px] bg-blue-900/60 text-blue-300 font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  <QrCode size={10} /> {t.scan_badge}
                </span>
                <h4 className="text-xs font-black text-white">{t.card_title}</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  {t.card_desc}
                </p>
              </div>
            </div>

            {/* Direct Link CTA Button */}
            <a 
              href="/constitution-test"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/20 text-xs flex items-center justify-center gap-2 transition-all group mt-2"
            >
              {t.cta_btn}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Footer info */}
        <div className="text-[10px] text-slate-500 mt-8 text-center max-w-sm px-4">
          AcuTherapy Clinics • Holistic Chinese Medicine & Acupuncture Service Honolulu
        </div>

      </section>
    </>
  );
}
