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

const targetDirs = ['./src'];

targetDirs.forEach(dir => {
    walkSync(dir, function (filePath) {
        if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
            let content = fs.readFileSync(filePath, 'utf-8');
            if (content.includes('Ph.D.')) {
                let newContent = content.replace(/Ph\.D\./g, 'L.M.T.');
                fs.writeFileSync(filePath, newContent);
                console.log('Updated:', filePath);
            }
        }
    });
});

console.log("REPLACEMENT COMPLETE");
