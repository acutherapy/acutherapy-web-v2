import fs from 'fs';
import path from 'path';

const pagesDir = '/Users/guestaccount/.gemini/antigravity/playground/NW/acutherapy-website/src/pages';

const files = [
  { name: 'SpringPromoEnPage.tsx', pathUrl: '/en/landing/spring-promo' },
  { name: 'InjuryRecoveryEnPage.tsx', pathUrl: '/en/landing/injury-recovery' },
  { name: 'NewPatientSpecialEnPage.tsx', pathUrl: '/en/landing/new-patient-special' },
  { name: 'SpringPromoZhPage.tsx', pathUrl: '/zh/landing/spring-promo', zh: true },
  { name: 'InjuryRecoveryZhPage.tsx', pathUrl: '/zh/landing/injury-recovery', zh: true }
];

for (const { name, pathUrl, zh } of files) {
  const filePath = path.join(pagesDir, name);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  const text = zh ? '扫描二维码在手机上打开或分享' : 'Scan to open on mobile or share';

  const qrBlock = `
                    {/* Share QR Code */}
                    <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col items-center text-center">
                        <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">\${text}</p>
                        <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                           <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://acutherapy.com\${pathUrl}" alt="QR Code" className="w-24 h-24" />
                        </div>
                    </div>
                </div>`;

  // We find '                </div>\r?\n            </div>\r?\n        </div>\r?\n    );\r?\n}'
  // since this was the end of the form card.
  // We can just replace '                </div>\n            </div>\n        </div>\n    );\n}'
  
  // Safe replacement logic using regex
  const regex = /                <\/div>\s*<\/div>\s*<\/div>\s*\);\s*\}/;
  content = content.replace(regex, qrBlock + '\n            </div>\n        </div>\n    );\n}');

  fs.writeFileSync(filePath, content);
  console.log(`Injected QR code into ${name}`);
}
