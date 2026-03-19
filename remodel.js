import fs from 'fs';
import path from 'path';

// 1. Remodel landing pages
const pagesDir = '/Users/guestaccount/.gemini/antigravity/playground/NW/acutherapy-website/src/pages';
const files = [
  'SpringPromoEnPage.tsx',
  'SpringPromoZhPage.tsx',
  'InjuryRecoveryEnPage.tsx',
  'InjuryRecoveryZhPage.tsx',
  'NewPatientSpecialEnPage.tsx'
];

for (const name of files) {
  const filePath = path.join(pagesDir, name);
  let content = fs.readFileSync(filePath, 'utf8');

  // Change root containers to extremely beautiful light Mint green / Slate-50 exactly matching Image 1
  content = content.replace(/className="min-h-screen[^"]*bg-slate-900[^"]*"/, 'className="min-h-screen bg-[#F0FDF4] py-20 px-4 relative overflow-hidden"');
  content = content.replace(/className="min-h-screen[^"]*bg-gradient-to-br[^"]*"/, 'className="min-h-screen bg-[#F0FDF4] py-20 px-4 relative overflow-hidden"');
  
  // Left side text: titles and paragraphs need to be crisp dark
  content = content.replace(/text-white leading-tight/g, 'text-slate-900 leading-tight');
  content = content.replace(/text-slate-300 leading-relaxed/g, 'text-slate-600 leading-relaxed');
  content = content.replace(/text-slate-300 mt-8/g, 'text-slate-700 mt-8 font-medium');
  content = content.replace(/text-slate-400 mb-8/g, 'text-slate-500 mb-8');

  // The Header span (like "Holistic Detox") should be a striking green to match Image 1
  content = content.replace(/<span className="text-white">/g, '<span className="text-emerald-700">');

  // Form Card transformation to Dark Navy Blue
  const oldFormCardRegex1 = /className="md:w-1\/2 w-full max-w-md bg-slate-800[^"]*"/;
  const oldFormCardRegex2 = /className="md:w-1\/2 w-full max-w-md bg-white[^"]*"/;
  const newFormCardClass = 'className="md:w-1/2 w-full max-w-md bg-[#1e293b] rounded-[1.5rem] p-10 shadow-2xl relative border-none z-20"';
  content = content.replace(oldFormCardRegex1, newFormCardClass);
  content = content.replace(oldFormCardRegex2, newFormCardClass);

  // Red Circular Sale Badge matching image 1
  if(!content.includes('bg-[#e11d48] text-white rounded-full')) {
     const badge = `\n                    {/* Circular Red Promo Badge */}\n                    <div className="absolute -top-6 -right-6 w-[110px] h-[110px] bg-[#e11d48] text-white rounded-full flex flex-col items-center justify-center shadow-xl transform rotate-12 z-50 hover:scale-105 transition-transform">\n                        <span className="text-[11px] font-bold uppercase tracking-widest opacity-90 drop-shadow-sm">Ends On</span>\n                        <span className="text-[22px] font-extrabold leading-none my-0.5 drop-shadow-sm">Mar 30</span>\n                        <span className="text-[10px] font-bold opacity-75">12:00 PM</span>\n                    </div>`;
     content = content.replace(newFormCardClass + '>', newFormCardClass + '>' + badge);
  }

  // Inside Dark Card: Make labels light text
  content = content.replace(/text-slate-700 mb-2/g, 'text-slate-300 mb-2');
  content = content.replace(/text-slate-300 mb-2/g, 'text-slate-300 mb-2 text-xs uppercase tracking-wider'); // match image 1 style

  // Inside Dark Card: Make inputs White with Dark text
  content = content.replace(/bg-slate-900 text-white border-slate-600/g, 'bg-white text-slate-900 border-none placeholder-slate-400');
  content = content.replace(/bg-slate-50 focus:bg-white/g, 'bg-white text-slate-900 border-none placeholder-slate-400');
  
  // Headers inside the Dark Card should be White
  content = content.replace(/text-slate-900 mb-2/g, 'text-white mb-2');
  content = content.replace(/text-slate-900 mb-4/g, 'text-white mb-4');
  
  // Submit Button
  content = content.replace(/bg-teal-600/g, 'bg-emerald-600');
  content = content.replace(/hover:bg-teal-700/g, 'hover:bg-emerald-700');

  // Fix App Logo text thickness we just added in nav
  content = content.replace(/text-3xl font-extrabold tracking-tighter text-slate-800/g, 'text-2xl font-bold tracking-tight text-slate-900');

  fs.writeFileSync(filePath, content);
}

// 2. Fix MARKETING_URLS.md to use HTML img tags that guarantee visual rendering
const mdPath = '/Users/guestaccount/.gemini/antigravity/playground/NW/acutherapy-website/MARKETING_URLS.md';
let mdContent = fs.readFileSync(mdPath, 'utf8');

// Replace markdown image syntax with HTML img elements
mdContent = mdContent.replace(/\!\[QR Code\]\((https:\/\/api\.qrserver\.com\/v1\/create-qr-code\/\?size=150x150&data=[^)]+)\)/g, '<img src="$1" alt="QR Code" width="150" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-top: 8px;" />');

fs.writeFileSync(mdPath, mdContent);
console.log('Remodel complete!');
