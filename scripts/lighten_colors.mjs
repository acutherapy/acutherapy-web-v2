import fs from 'fs';
import path from 'path';

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

walkSync('./src', function (filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf-8');
        let originalContent = content;

        // This will change all hero sections and dark footers to a brilliant, lighter classic "medical navy blue"
        content = content.replace(/bg-slate-900/g, 'bg-blue-900');
        content = content.replace(/from-slate-900/g, 'from-blue-900');
        content = content.replace(/to-slate-900/g, 'to-blue-900');

        // Ensure any border-slate-800 or similar transitions correctly
        content = content.replace(/border-slate-800/g, 'border-blue-800');
        content = content.replace(/bg-slate-800/g, 'bg-blue-800');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content);
            console.log('Lightened colors in:', filePath);
        }
    }
});
console.log('GLOBAL THEME LIGHTENING COMPLETE');
