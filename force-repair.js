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

    // Find reason
    const reasonMatch = content.match(/reason:\s*'([^']+)'/);
    const reason = reasonMatch ? reasonMatch[1] : 'Form Submission';
    const isChinese = file.includes('Zh');

    const fnStart = content.indexOf('const submitForm = async');
    const fnEnd = content.indexOf('    };', fnStart) + 6;

    const newSubmitForm = "const submitForm = async (e: React.FormEvent) => {\n" +
"        e.preventDefault();\n" +
"        setIsSubmitting(true);\n" +
"        try {\n" +
"            const res = await fetch('/api/send', {\n" +
"                method: 'POST',\n" +
"                headers: { 'Content-Type': 'application/json' },\n" +
"                body: JSON.stringify({ ...formData, reason: '" + reason + "' })\n" +
"            });\n" +
"            if (res.ok) setIsSuccess(true);\n" +
"            else alert('" + (isChinese ? "发送请求失败，请直接致电我们。" : "Failed to send request. Please call us directly.") + "');\n" +
"        } catch (err) {\n" +
"            console.error(err);\n" +
"            alert('" + (isChinese ? "服务器连接错误，请直接致电诊所。" : "Error connecting to server. Please call us directly.") + "');\n" +
"        } finally {\n" +
"            setIsSubmitting(false);\n" +
"        }\n" +
"    };";

    content = content.substring(0, fnStart) + newSubmitForm + content.substring(fnEnd);

    fs.writeFileSync(filePath, content);
    console.log("fixed " + file);
}
