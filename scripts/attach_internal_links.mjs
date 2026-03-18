import fs from 'fs';
import path from 'path';

const pagesToUpdate = [
    {
        file: 'src/pages/ChronicPainTreatmentHonoluluPage.tsx',
        tag: 'pain-management'
    },
    {
        file: 'src/pages/AutoAccidentInjuryTreatmentHonoluluPage.tsx',
        tag: 'auto-accident'
    },
    {
        file: 'src/pages/WorkersCompAcupunctureHonoluluPage.tsx',
        tag: 'workers-comp'
    },
    {
        file: 'src/pages/VeteransCareAcupunctureHonoluluPage.tsx',
        tag: 'veterans'
    }
];

pagesToUpdate.forEach(page => {
    let content = fs.readFileSync(page.file, 'utf-8');

    if (!content.includes('TreatmentInternalLinks')) {
        // Add import right after import { Link }
        if (content.includes("import { Link } from 'react-router-dom';")) {
            content = content.replace(
                "import { Link } from 'react-router-dom';",
                "import { Link } from 'react-router-dom';\nimport TreatmentInternalLinks from '@/components/TreatmentInternalLinks';"
            );
        } else {
            content = "import TreatmentInternalLinks from '@/components/TreatmentInternalLinks';\n" + content;
        }

        // Replace </article> with <TreatmentInternalLinks ... />\n</article>
        content = content.replace(
            "</article>",
            `\n        <TreatmentInternalLinks currentPage="${page.tag}" />\n          </article>`
        );

        fs.writeFileSync(page.file, content);
        console.log(`Updated: ${page.file} with tag ${page.tag}`);
    }
});
console.log("INTERNAL LINKS ATTACHED");
