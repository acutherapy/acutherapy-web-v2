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

    content = content.replace(
        `if (res.ok || window.location.hostname === 'localhost') setIsSuccess(true);`,
        `if (res.ok) setIsSuccess(true);`
    );

    content = content.replace(
        `} catch (err) {
            console.error(err);
            if (window.location.hostname === 'localhost') {
                setIsSuccess(true);
            } else {
                alert(`,
        `} catch (err) {
            console.error(err);
            alert(`
    );

    content = content.replace(
        `                alert('Error connecting to server. Please call us directly.');
            }
        } finally {`,
        `                alert('Error connecting to server. Please call us directly.');
        } finally {`
    );

    content = content.replace(
        `                alert('服务器连接错误，请直接致电诊所。');
            }
        } finally {`,
        `                alert('服务器连接错误，请直接致电诊所。');
        } finally {`
    );

    fs.writeFileSync(filePath, content);
    console.log(`Reverted ${file}`);
}
