import fs from 'fs';
import path from 'path';

const pagesDir = '/Users/guestaccount/.gemini/antigravity/playground/NW/acutherapy-website/src/pages';
const files = [
  { name: 'SpringPromoEnPage.tsx', zh: false },
  { name: 'InjuryRecoveryEnPage.tsx', zh: false },
  { name: 'NewPatientSpecialEnPage.tsx', zh: false },
  { name: 'SpringPromoZhPage.tsx',  zh: true },
  { name: 'InjuryRecoveryZhPage.tsx', zh: true }
];

for (const { name, zh } of files) {
  const filePath = path.join(pagesDir, name);
  let content = fs.readFileSync(filePath, 'utf8');
  const actualText = zh ? '扫描二维码在手机上打开或分享' : 'Scan to open on mobile or share';
  content = content.replace('{text}', `{"${actualText}"}`);
  fs.writeFileSync(filePath, content);
}
