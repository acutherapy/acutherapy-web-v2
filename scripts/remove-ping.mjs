import fs from 'fs';
import path from 'path';

const pagesDir = '/Users/guestaccount/.gemini/antigravity/playground/NW/acutherapy-website/src/pages';
const searchSnippet = ` <span className="flex h-2 w-2 rounded-full bg-emerald-500 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400"></span></span>`;

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let count = 0;
for (const file of files) {
    if (file === 'HomePage.tsx') continue;

    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    if (content.includes(searchSnippet)) {
        // Some files might have it multiple times
        content = content.replaceAll(searchSnippet, '');
        fs.writeFileSync(filePath, content, 'utf-8');
        count++;
        console.log('Updated', file);
    }
}

console.log('Update complete, modified ' + count + ' files.');
