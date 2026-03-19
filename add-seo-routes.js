import fs from 'fs';

const appPath = '/Users/guestaccount/.gemini/antigravity/playground/NW/acutherapy-website/src/App.tsx';
let content = fs.readFileSync(appPath, 'utf8');

const additionalRoutes = `
          {/* SEO Legacy/Direct URL Aliases Requested by User Sitemap */}
          <Route path="/en/contact-us-honolulu" element={<ContactHonoluluAcupuncturePage />} />
          <Route path="/honolulu-acupuncture" element={<AcupunctureHonoluluPage />} />
          <Route path="/waikiki-acupuncture" element={<AcupunctureWaikikiPage />} />
          <Route path="/aiea-acupuncture" element={<AieaClinicLocationPage />} />
          <Route path="/kahala-acupuncture" element={<AcupunctureKahalaPage />} />
          
          <Route path="/en/services" element={<TreatmentProcessPage />} />
          <Route path="/en/services/acupuncture" element={<AcupunctureHonoluluPage />} />
          <Route path="/en/services/medical-massage" element={<MedicalMassageHonoluluPage />} />
          <Route path="/cupping-gua-sha-honolulu" element={<FireCuppingTherapyHonoluluPage />} />
          <Route path="/en/services/insurance-payment" element={<InsuranceAcceptedPage />} />
          
          <Route path="/back-neck-pain" element={<BackPainAcupunctureHonoluluPage />} />
          <Route path="/stress-anxiety" element={<ChronicPainTreatmentHonoluluPage />} />
          <Route path="/auto-injury" element={<AutoAccidentInjuryTreatmentHonoluluPage />} />
          <Route path="/workers-injury" element={<WorkersCompAcupunctureHonoluluPage />} />
          <Route path="/veterans-care" element={<VeteransCareAcupunctureHonoluluPage />} />
`;

content = content.replace('</Routes>', additionalRoutes + '\n        </Routes>');
fs.writeFileSync(appPath, content);
console.log('App.tsx updated with 15 SEO aliases.');
