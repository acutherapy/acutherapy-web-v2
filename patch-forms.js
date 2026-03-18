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

    // Make local development simulate a success
    // Target:
    //             if (res.ok) setIsSuccess(true);
    //             else alert('Failed to send request. Please call us directly.');
    //         } catch (err) {
    //             console.error(err);
    //             alert('Error connecting to server. Please call us directly.');

    content = content.replace(
        `            if (res.ok) setIsSuccess(true);
            else alert(`,
        `            if (res.ok || window.location.hostname === 'localhost') setIsSuccess(true);
            else alert(`
    );

    content = content.replace(
        `} catch (err) {
            console.error(err);
            alert(`,
        `} catch (err) {
            console.error(err);
            if (window.location.hostname === 'localhost') {
                setIsSuccess(true);
            } else {
                alert(`
    );

    // Also need to close out the else block correctly for the catch
    content = content.replace(
        `
                alert('Error connecting to server. Please call us directly.');
        } finally {`,
        `                alert('Error connecting to server. Please call us directly.');
            }
        } finally {`
    );

    // Some files have different Chinese alert string!
    content = content.replace(
        `                alert('服务器连接错误，请直接致电诊所。');
        } finally {`,
        `                alert('服务器连接错误，请直接致电诊所。');
            }
        } finally {`
    );

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
}
