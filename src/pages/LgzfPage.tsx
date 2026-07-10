import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

const organMap: Record<string, string> = {
  "子": "胆-胆经 (GB)",
  "丑": "肝-肝经 (LR)",
  "寅": "肺-肺经 (LU)",
  "卯": "大肠-大肠经 (LI)",
  "辰": "胃-胃经 (ST)",
  "巳": "脾-脾经 (SP)",
  "午": "心-心经 (HT)",
  "未": "小肠-小肠经 (SI)",
  "申": "膀胱-膀胱经 (BL)",
  "酉": "肾-肾经 (KI)",
  "戌": "心包-心包经 (PC)",
  "亥": "三焦-三焦经 (TE)"
};

const timeLabels = [
  "子时 (23:00-01:00)", "丑时 (01:00-03:00)", "寅时 (03:00-05:00)", "卯时 (05:00-07:00)",
  "辰时 (07:00-09:00)", "巳时 (09:00-11:00)", "午时 (11:00-13:00)", "未时 (13:00-15:00)",
  "申时 (15:00-17:00)", "酉时 (17:00-19:00)", "戌时 (19:00-21:00)", "亥时 (21:00-23:00)"
];

const dayStemCodes: Record<string, number> = { '甲': 10, '己': 10, '乙': 9, '庚': 9, '丁': 8, '壬': 8, '丙': 7, '辛': 7, '戊': 7, '癸': 7 };
const dayBranchCodes: Record<string, number> = { '子': 7, '亥': 7, '丑': 10, '未': 10, '辰': 10, '戌': 10, '寅': 8, '卯': 8, '巳': 7, '午': 7, '申': 9, '酉': 9 };

const hourStemCodes: Record<string, number> = { '甲': 9, '己': 9, '乙': 8, '庚': 8, '丙': 7, '辛': 7, '丁': 6, '壬': 6, '戊': 5, '癸': 5 };
const hourBranchCodes: Record<string, number> = { '子': 9, '午': 9, '丑': 8, '未': 8, '寅': 7, '申': 7, '卯': 6, '酉': 6, '辰': 5, '戌': 5, '巳': 4, '亥': 4 };

interface PointInfo {
  point: string;
  channel: string;
  code: string;
  coupledPoint: string;
  coupledChannel: string;
  coupledCode: string;
  indications: string;
}

const pointMap: Record<number, PointInfo> = {
  1: { 
    point: '申脉', channel: '阳跷脉', code: 'BL62', 
    coupledPoint: '后溪', coupledChannel: '督脉', coupledCode: 'SI3',
    indications: '目内眦、颈项、耳、肩膊、背部及小肠膀胱系疾病' 
  },
  2: { 
    point: '照海', channel: '阴跷脉', code: 'KI6', 
    coupledPoint: '列缺', coupledChannel: '任脉', coupledCode: 'LU7',
    indications: '咽喉、胸膈、肺系及阴跷任脉系疾病' 
  },
  3: { 
    point: '外关', channel: '阳维脉', code: 'TE5', 
    coupledPoint: '临泣', coupledChannel: '带脉', coupledCode: 'GB41',
    indications: '目外眦、耳后、颊、颈、肩部及胆经三焦经系疾病' 
  },
  4: { 
    point: '临泣', channel: '带脉', code: 'GB41', 
    coupledPoint: '外关', coupledChannel: '阳维脉', coupledCode: 'TE5',
    indications: '目外眦、耳后、颊、颈、肩部及胆经三焦经系疾病' 
  },
  6: { 
    point: '公孙', channel: '冲脉', code: 'SP4', 
    coupledPoint: '内关', coupledChannel: '阴维脉', coupledCode: 'PC6',
    indications: '心、胸、胃部及冲脉阴维脉系疾病' 
  },
  7: { 
    point: '后溪', channel: '督脉', code: 'SI3', 
    coupledPoint: '申脉', coupledChannel: '阳跷脉', coupledCode: 'BL62',
    indications: '目内眦、颈项、耳、肩膊、背部及小肠膀胱系疾病' 
  },
  8: { 
    point: '内关', channel: '阴维脉', code: 'PC6', 
    coupledPoint: '公孙', coupledChannel: '冲脉', coupledCode: 'SP4',
    indications: '心、胸、胃部及冲脉阴维脉系疾病' 
  },
  9: { 
    point: '列缺', channel: '任脉', code: 'LU7', 
    coupledPoint: '照海', coupledChannel: '阴跷脉', coupledCode: 'KI6',
    indications: '咽喉、胸膈、肺系及阴跷任脉系疾病' 
  }
};

export default function LgzfPage() {
  const [mode, setMode] = useState<'realtime' | 'query'>('realtime');
  const [isMale, setIsMale] = useState<boolean>(true);
  const [queryDate, setQueryDate] = useState<string>('');
  const [queryTime, setQueryTime] = useState<string>('');
  const [timeText, setTimeText] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    setQueryDate(now.toISOString().split('T')[0]);
    setQueryTime(now.toTimeString().split(' ')[0].substring(0, 5));
    setTimeText(now.toLocaleString());

    if (mode === 'realtime') {
      const interval = setInterval(() => {
        const d = new Date();
        setTimeText(d.toLocaleString());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [mode]);

  function getDayGanZhi(year: number, month: number, day: number, hour: number) {
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

    let stemIndex = (4 + diffDays) % 10;
    if (stemIndex < 0) stemIndex += 10;

    let branchIndex = (6 + diffDays) % 12;
    if (branchIndex < 0) branchIndex += 12;

    return {
      stem: stems[stemIndex],
      branch: branches[branchIndex],
      stemIdx: stemIndex,
      adjustedDate: `${calcYear}-${calcMonth}-${calcDay}`
    };
  }

  function getHourSlotIndex(hour: number) {
    return Math.floor((hour + 1) / 2) % 12;
  }

  function calculateAcupoints(dayStemIdx: number, dayBranch: string, slotIdx: number) {
    const dStem = stems[dayStemIdx];
    const hBranch = branches[slotIdx];

    const startStemIndex = (dayStemIdx % 5) * 2 % 10;
    const hourStemIndex = (startStemIndex + slotIdx) % 10;
    const hStem = stems[hourStemIndex];

    const dStemCode = dayStemCodes[dStem];
    const dBranchCode = dayBranchCodes[dayBranch];
    const hStemCode = hourStemCodes[hStem];
    const hBranchCode = hourBranchCodes[hBranch];

    const sum = dStemCode + dBranchCode + hStemCode + hBranchCode;
    const isYang = ['甲', '丙', '戊', '庚', '壬'].includes(dStem);
    const divisor = isYang ? 9 : 6;
    
    let remainder = sum % divisor;
    if (remainder === 0) remainder = divisor;

    let point = pointMap[remainder];
    if (remainder === 5) {
      if (isMale) {
        point = { 
          point: '照海', channel: '阴跷脉', code: 'KI6', 
          coupledPoint: '列缺', coupledChannel: '任脉', coupledCode: 'LU7',
          indications: '咽喉、胸膈、肺系及阴跷任脉系疾病' 
        };
      } else {
        point = { 
          point: '内关', channel: '阴维脉', code: 'PC6', 
          coupledPoint: '公孙', coupledChannel: '冲脉', coupledCode: 'SP4',
          indications: '心、胸、胃部及冲脉阴维脉系疾病' 
        };
      }
    }

    return {
      hourGanZhi: hStem + hBranch,
      point: point
    };
  }

  // Perform calculation
  let year = 2000, month = 1, day = 1, hour = 12;
  if (mode === 'realtime') {
    const now = new Date();
    year = now.getFullYear();
    month = now.getMonth() + 1;
    day = now.getDate();
    hour = now.getHours();
  } else if (queryDate && queryTime) {
    const dParts = queryDate.split('-');
    year = parseInt(dParts[0]) || 2000;
    month = parseInt(dParts[1]) || 1;
    day = parseInt(dParts[2]) || 1;
    const tParts = queryTime.split(':');
    hour = parseInt(tParts[0]) || 0;
  }

  const dayGanzhi = getDayGanZhi(year, month, day, hour);
  const currentSlotIdx = getHourSlotIndex(hour);
  const activeResult = calculateAcupoints(dayGanzhi.stemIdx, dayGanzhi.branch, currentSlotIdx);

  return (
    <>
      <Helmet>
        <title>灵龟八法开穴助手 | AcuTherapy Clinics</title>
        <meta name="description" content="AcuTherapy Clinics 灵龟八法按时开穴助手，为您提供精准主配穴计算与脏腑经络对应说明。" />
      </Helmet>

      <section className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          {/* Header Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">灵龟八法开穴助手</h1>
            <p className="text-sm text-slate-500 mt-2">结合干支历与奇经八脉的按时取穴工具</p>
          </div>

          {/* Web App Card */}
          <div className="bg-white text-slate-800 rounded-2xl shadow-xl border border-slate-200 p-6 flex flex-col gap-4">
            
            {/* Mode Selector */}
            <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button 
                className={`flex-1 text-center py-2 rounded-md text-xs font-bold transition-all ${mode === 'realtime' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setMode('realtime')}
              >
                实时开穴
              </button>
              <button 
                className={`flex-1 text-center py-2 rounded-md text-xs font-bold transition-all ${mode === 'query' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setMode('query')}
              >
                时辰推算
              </button>
            </div>

            {/* Query inputs */}
            {mode === 'query' && (
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] text-slate-500 font-bold">查询日期</span>
                  <input 
                    type="date" 
                    value={queryDate} 
                    onChange={(e) => setQueryDate(e.target.value)}
                    className="bg-white border border-slate-300 rounded-md p-2 text-xs text-slate-950 outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] text-slate-500 font-bold">查询时间</span>
                  <input 
                    type="time" 
                    value={queryTime} 
                    onChange={(e) => setQueryTime(e.target.value)}
                    className="bg-white border border-slate-300 rounded-md p-2 text-xs text-slate-950 outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Gender Toggle */}
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-slate-500 font-bold">患者性别 (取穴余数5时有用)</span>
              <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button 
                  className={`flex-1 text-center py-1.5 rounded-md text-xs font-bold transition-all ${isMale ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500'}`}
                  onClick={() => setIsMale(true)}
                >
                  男 ♂
                </button>
                <button 
                  className={`flex-1 text-center py-1.5 rounded-md text-xs font-bold transition-all ${!isMale ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500'}`}
                  onClick={() => setIsMale(false)}
                >
                  女 ♀
                </button>
              </div>
            </div>

            {/* Main Result Display */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-amber-500" />
              
              <div className="flex justify-center gap-4 mb-4">
                <span className="bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {dayGanzhi.stem + dayGanzhi.branch}日
                </span>
                <span className="bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {activeResult.hourGanZhi}时
                </span>
              </div>

              <div className="text-center text-[10px] text-slate-500 tracking-wider uppercase mb-1 font-semibold">今日开穴配对</div>
              
              <div className="flex items-center justify-center gap-4 my-2">
                <div className="flex-1 text-center">
                  <div className="text-3xl font-black text-amber-600 drop-shadow-sm">
                    {activeResult.point.point}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    <span className="font-bold text-slate-800">{activeResult.point.code}</span> / {activeResult.point.channel}
                  </div>
                </div>
                <div className="text-xl text-slate-400 font-light">⇄</div>
                <div className="flex-1 text-center">
                  <div className="text-3xl font-black text-blue-600 drop-shadow-sm">
                    {activeResult.point.coupledPoint}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    <span className="font-bold text-slate-800">{activeResult.point.coupledCode}</span> / {activeResult.point.coupledChannel}
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-amber-50 border border-amber-100 p-3 rounded-lg text-xs leading-relaxed">
                <span className="text-amber-800 font-bold block mb-1">八脉合治主治：</span>
                <span className="text-slate-600">{activeResult.point.indications}</span>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <div className="text-xs font-bold text-blue-600 mb-2">
                {mode === 'realtime' ? '今日开穴一览表' : `${dayGanzhi.adjustedDate} 开穴一览表`}
              </div>
              <div className="flex flex-col gap-2 max-h-52 overflow-y-auto pr-1">
                {Array.from({ length: 12 }).map((_, i) => {
                  const slotResult = calculateAcupoints(dayGanzhi.stemIdx, dayGanzhi.branch, i);
                  const isActive = i === currentSlotIdx;
                  const branchChar = branches[i];
                  return (
                    <div 
                      key={i} 
                      className={`flex items-center justify-between p-3 rounded-lg border text-xs transition-all ${isActive ? 'bg-blue-50/80 border-blue-300 shadow-sm' : 'bg-white border-slate-200'}`}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-slate-900">{timeLabels[i]}</span>
                        <span className="text-[10px] text-slate-500 font-medium">配属：{organMap[branchChar]}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-amber-600 font-bold">{slotResult.point.point}</span>
                        <span className="text-slate-400 font-light mx-1">-</span>
                        <span className="text-blue-600 font-bold">{slotResult.point.coupledPoint}</span>
                        <div className="text-[10px] text-slate-500 font-semibold">{slotResult.point.code}-{slotResult.point.coupledCode}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Time display / Refresh button */}
          <div className="flex justify-between items-center mt-4 px-2">
            <span className="text-[11px] text-slate-500 font-medium">{timeText}</span>
            {mode === 'realtime' && (
              <button 
                onClick={() => setTimeText(new Date().toLocaleString())}
                className="bg-white hover:bg-slate-50 text-slate-700 px-3 py-1.5 rounded-md text-[11px] font-bold transition-all shadow-sm border border-slate-200"
              >
                手动刷新
              </button>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
