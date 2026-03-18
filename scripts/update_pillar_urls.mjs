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

const replacements = {
    '/about-dr-david-cai': '/dr-david-cai-honolulu-acupuncturist',
    '/chronic-pain-treatment-honolulu': '/pain-management-honolulu',
    '/auto-accident-injury-treatment-honolulu': '/auto-accident-injury-honolulu',
    '/workers-comp-acupuncture-honolulu': '/workers-comp-injury-honolulu',
    '/veterans-care-acupuncture-honolulu': '/veterans-pain-relief-honolulu'
};

walkSync('./src', function (filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf-8');
        let modified = false;
        for (let [oldUrl, newUrl] of Object.entries(replacements)) {
            if (content.includes(oldUrl)) {
                content = content.split(oldUrl).join(newUrl);
                modified = true;
            }
        }
        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log('Updated URLs in:', filePath);
        }
    }
});
console.log("URL UPGRADE COMPLETE");
