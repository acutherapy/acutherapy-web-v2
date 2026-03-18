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
        let modified = false;

        // Use a regex replace with global flag to replace all occurrences within a file
        const regex = /Mon-Fri:\s*8am\s*-\s*5pm/g;
        if (regex.test(content)) {
            content = content.replace(regex, 'Mon-Fri: 9am - 1pm');
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log('Updated hours in:', filePath);
        }
    }
});
console.log('HOURS UPDATE COMPLETE');
