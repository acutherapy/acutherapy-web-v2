import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';
import { PKPass } from 'passkit-generator';

let cachedCerts = null;

async function getCerts() {
  if (cachedCerts) return cachedCerts;
  const certsDir = path.join(process.cwd(), 'certs');
  const [wwdr, signerCert, signerKey] = await Promise.all([
    fs.readFile(path.join(certsDir, 'wwdr.pem')),
    fs.readFile(path.join(certsDir, 'signerCert.pem')),
    fs.readFile(path.join(certsDir, 'signerKey.pem')),
  ]);
  cachedCerts = { wwdr, signerCert, signerKey, signerKeyPassphrase: '1111' };
  return cachedCerts;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const certs = await getCerts();
    const modelDir = path.join(process.cwd(), 'model.pass');
    
    const tempId = Math.random().toString(36).substring(2, 10);
    const tempDir = path.join(os.tmpdir(), `mana-pass-${tempId}.pass`);
    await fs.mkdir(tempDir, { recursive: true });

    try {
      const files = await fs.readdir(modelDir);
      for (const file of files) {
        await fs.copyFile(path.join(modelDir, file), path.join(tempDir, file));
      }

      const passJsonPath = path.join(tempDir, 'pass.json');
      const passJson = JSON.parse(await fs.readFile(passJsonPath, 'utf8'));

      const body = req.body;
      passJson.serialNumber = Math.random().toString(36).substring(2, 10);

      if (body.element) {
        passJson.storeCard.secondaryFields[0].value = body.element;
      }
      
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      passJson.storeCard.secondaryFields[2].value = `${yyyy}-${mm}-${dd}`;

      // Update URL to acutherapy.com/constitution-test
      if (passJson.barcodes && passJson.barcodes.length > 0) {
        const lang = body.lang || 'zh';
        passJson.barcodes[0].message = `https://acutherapy.com/constitution-test?lang=${lang}`;
        if (passJson.barcode) {
          passJson.barcode.message = `https://acutherapy.com/constitution-test?lang=${lang}`;
        }
      }

      if (body.thumbnail) {
        const thumbnailBuffer = Buffer.from(body.thumbnail, 'base64');
        await fs.writeFile(path.join(tempDir, 'strip.png'), thumbnailBuffer);
        await fs.writeFile(path.join(tempDir, 'strip@2x.png'), thumbnailBuffer);
        await fs.writeFile(path.join(tempDir, 'strip@3x.png'), thumbnailBuffer);
      }

      await fs.writeFile(passJsonPath, JSON.stringify(passJson));

      const pass = await PKPass.from({
        model: tempDir,
        certificates: certs,
      });

      const buffer = pass.getAsBuffer();

      res.setHeader('Content-Type', 'application/vnd.apple.pkpass');
      res.setHeader('Content-Disposition', 'attachment; filename=talisman.pkpass');
      return res.status(200).send(buffer);
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true }).catch(() => {});
    }
  } catch (error) {
    console.error("Wallet serverless error:", error);
    return res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}
