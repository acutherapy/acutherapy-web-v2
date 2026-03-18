import fs from 'fs';
import path from 'path';

const pagesDir = '/Users/guestaccount/.gemini/antigravity/playground/NW/acutherapy-website/src/pages';
const filesToModify = [
    'SpringPromoEnPage.tsx',
    'InjuryRecoveryEnPage.tsx',
    'NewPatientSpecialEnPage.tsx',
    'SpringPromoZhPage.tsx',
    'InjuryRecoveryZhPage.tsx'
];

for (const file of filesToModify) {
    const filePath = path.join(pagesDir, file);
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf8');

    // Replace English version
    content = content.replace(
        `            if (window.location.hostname === 'localhost') {
                setIsSuccess(true);
            } else {                alert('Error connecting to server. Please call us directly.');
        } finally {`,
        `            alert('Error connecting to server. Please call us directly.');
        } finally {`
    );

    // Replace Chinese version
    content = content.replace(
        `            if (window.location.hostname === 'localhost') {
                setIsSuccess(true);
            } else {                alert('服务器连接错误，请直接致电诊所。');
        } finally {`,
        `            alert('服务器连接错误，请直接致电诊所。');
        } finally {`
    );

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
}
