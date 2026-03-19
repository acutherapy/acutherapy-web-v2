import fs from 'fs';
import path from 'path';

const pagesDir = '/Users/guestaccount/.gemini/antigravity/playground/NW/acutherapy-website/src/pages';
const files = [
  { name: 'SpringPromoEnPage.tsx', pathUrl: '/en/landing/spring-promo', zh: false },
  { name: 'SpringPromoZhPage.tsx', pathUrl: '/zh/landing/spring-promo', zh: true },
  { name: 'InjuryRecoveryEnPage.tsx', pathUrl: '/en/landing/injury-recovery', zh: false },
  { name: 'InjuryRecoveryZhPage.tsx', pathUrl: '/zh/landing/injury-recovery', zh: true },
  { name: 'NewPatientSpecialEnPage.tsx', pathUrl: '/en/landing/new-patient-special', zh: false }
];

for (const { name, pathUrl, zh } of files) {
  const filePath = path.join(pagesDir, name);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add the import to the top if not exists
  if (!content.includes('LandingPageShareBubble')) {
    content = content.replace("import { Button } from '@/components/ui/button';", "import { Button } from '@/components/ui/button';\nimport LandingPageShareBubble from '@/components/LandingPageShareBubble';");
  }

  // Find the static QR code block and remove it carefully by locating the {/* Share QR Code */} comment and its entire div.
  // Instead of complex regex, let's just obliterate everything between {/* Share QR Code */} and the closing </div></div></div>
  
  const qrCodeStartIdx = content.indexOf('{/* Share QR Code */}');
  if (qrCodeStartIdx !== -1) {
    const staticStringBeforeQr = content.substring(0, qrCodeStartIdx);
    // Usually the QR code block is about ~10-15 lines before the end of the form card.
    // It's placed before `<LandingPageShareBubble />` 
  }

  // Regex to remove the entire Share QR code block:
  const oldQrRegex = /\s*\{\/\*\s*Share QR Code\s*\*\/\}.*?<img src="https:\/\/api\.qrserver\.com[^>]+>\s*<\/div>\s*<\/div>/s;
  content = content.replace(oldQrRegex, '');

  // Inject the new bubble component at the absolute root of the component (right before the final </div>)
  const bubbleInjectStr = `\n            {/* Floating Share Bubble */}\n            <LandingPageShareBubble urlPath="${pathUrl}" isChinese={${zh}} />\n        </div>\n    );\n}`;
  content = content.replace(/<\/div>\s*\);\s*\}/s, bubbleInjectStr);

  fs.writeFileSync(filePath, content);
}
console.log('Landing pages injected with Floating QR bubbles.');
