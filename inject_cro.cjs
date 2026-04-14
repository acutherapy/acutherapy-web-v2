const fs = require('fs');
const path = require('path');

const dir = './src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('HonoluluPage.tsx'));

const expStr = "            {/* CRO Expectation Module */}\n" +
"            <div className=\"bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-10 shadow-sm mt-8\">\n" +
"              <p className=\"text-lg text-slate-900 font-semibold mb-1\">Most patients see improvement in 3–5 visits.</p>\n" +
"              <p className=\"text-slate-600\">Full recovery may take 4–10+ sessions.</p>\n" +
"              \n" +
"              <div className=\"mt-4 pt-4 border-t border-slate-200\">\n" +
"                <p className=\"font-bold text-slate-900 mb-2\">What to Expect:</p>\n" +
"                <ul className=\"space-y-1 text-slate-700 font-medium\">\n" +
"                  <li><span className=\"text-blue-600 mr-2\">→</span> <strong>Visit 1:</strong> Evaluation + Immediate treatment</li>\n" +
"                  <li><span className=\"text-blue-600 mr-2\">→</span> <strong>Week 1–2:</strong> Massive pain reduction</li>\n" +
"                  <li><span className=\"text-blue-600 mr-2\">→</span> <strong>Week 3+:</strong> Structural repair & function recovery</li>\n" +
"                </ul>\n" +
"              </div>\n" +
"            </div>\n";

const compStr = "\n            {/* CRO Comparison Module */}\n" +
"            <div className=\"my-16\">\n" +
"              <h2 className=\"text-3xl font-bold text-slate-900 mb-8 border-b pb-2 text-center\">Why Most Treatments Don't Last</h2>\n" +
"              <div className=\"bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200\">\n" +
"                <div className=\"grid grid-cols-2 bg-slate-50 border-b border-slate-200\">\n" +
"                  <div className=\"p-6 text-center border-r border-slate-200\">\n" +
"                    <h3 className=\"font-bold text-slate-500 text-lg\">Standard Clinics</h3>\n" +
"                  </div>\n" +
"                  <div className=\"p-6 text-center bg-blue-600\">\n" +
"                    <h3 className=\"font-bold text-white text-lg flex items-center justify-center gap-2\">AcuTherapy Clinics</h3>\n" +
"                  </div>\n" +
"                </div>\n" +
"                <div className=\"grid grid-cols-2 border-b border-slate-100\">\n" +
"                  <div className=\"p-6 text-center border-r border-slate-100 text-slate-600\">15-minute quick visits</div>\n" +
"                  <div className=\"p-6 text-center font-semibold text-blue-900 bg-blue-50/50\">Full 60-minute intensive sessions</div>\n" +
"                </div>\n" +
"                <div className=\"grid grid-cols-2 border-b border-slate-100\">\n" +
"                  <div className=\"p-6 text-center border-r border-slate-100 text-slate-600\">Treat just the symptoms</div>\n" +
"                  <div className=\"p-6 text-center font-semibold text-blue-900 bg-blue-50/50\">Treat the mechanical root cause</div>\n" +
"                </div>\n" +
"                <div className=\"grid grid-cols-2\">\n" +
"                  <div className=\"p-6 text-center border-r border-slate-100 text-slate-600\">Temporary masking</div>\n" +
"                  <div className=\"p-6 text-center font-semibold text-blue-900 bg-blue-50/50\">Permanent tissue repair</div>\n" +
"                </div>\n" +
"              </div>\n" +
"            </div>\n";

const botTarget = "<div className=\"mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8\">\n<h2 className=\"text-3xl font-bold text-blue-900 mb-4\">Ready to find relief?</h2>\n<p className=\"text-lg text-blue-700 mb-8\">Stop living in discomfort. Located right here in Honolulu, we are here to help you restore your well-being.</p>\n<Link to=\"/book-appointment\"><Button className=\"bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all\">Book Your Session Today</Button></Link>\n</div>";

const botRepl = "<div className=\"mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mb-8\">\n<h2 className=\"text-3xl font-bold text-blue-900 mb-4\">Ready to find relief?</h2>\n<p className=\"text-lg text-blue-700 mb-8\">Stop living in discomfort. Located right here in Honolulu, we are here to help you restore your well-being.</p>\n<Link to=\"/book-appointment\"><Button className=\"bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all\">Get Your Personalized Recovery Plan</Button></Link>\n<p className=\"text-blue-600 text-sm mt-3 opacity-80 font-medium tracking-wide\">Takes less than 60 seconds</p>\n<p className=\"text-red-500 font-bold mt-4\">The longer you wait, the harder it is to fix.</p>\n</div>";

const sbTarget = "                <h3 className=\"text-2xl font-bold text-slate-900 mb-2\">Book Your Visit</h3>\n                <p className=\"text-slate-600 mb-8 text-sm\">Don't wait for the pain to become chronic. Book an evaluation today.</p>\n                <div className=\"flex flex-col gap-4\">\n                  <Link to=\"/book-appointment\">\n                    <Button className=\"w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg\">\n                      <Calendar className=\"mr-2\" /> Schedule Online\n                    </Button>\n                  </Link>";

const sbRepl = "                <h3 className=\"text-2xl font-bold text-slate-900 mb-2\">Book Your Visit</h3>\n                <p className=\"text-slate-600 mb-8 text-sm\">Don't wait for the pain to become chronic. Book an evaluation today.</p>\n                <div className=\"flex flex-col gap-4\">\n                  <div className=\"flex flex-col gap-1 items-center\">\n                    <Link to=\"/book-appointment\" className=\"w-full\">\n                      <Button className=\"w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg\">\n                        Get My Recovery Plan\n                      </Button>\n                    </Link>\n                    <p className=\"text-slate-500 text-xs font-medium\">Takes less than 60 seconds</p>\n                  </div>";

for (let file of files) {
  if (file === 'HomePage.tsx' || file === 'AutoAccidentInjuryTreatmentHonoluluPage.tsx') continue;
  let changed = false;
  let filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Expectation below article
  if (!content.includes('CRO Expectation Module')) {
    content = content.replace(/(<article className="md:col-span-8">\s*)(<p className="text-xl|<h1 className="text-3xl|<h2 className="text-3xl)/m, '$1' + expStr + '\n$2');
    changed = true;
  }

  // Comparison before FAQ
  if (content.includes('Frequently Asked Questions') && !content.includes('CRO Comparison Module')) {
    content = content.replace(/(<h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">Frequently Asked Questions<\/h2>)/m, compStr + "\n$1");
    changed = true;
  }

  // Bottom text
  if (content.includes('Book Your Session Today</Button>')) {
    content = content.replace(botTarget, botRepl);
    changed = true;
  }

  // Sidebar text
  if (content.includes('Schedule Online')) {
    content = content.replace(sbTarget, sbRepl);
    content = content.replace(/Calendar,\\s*/, '');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log('Updated', file);
  }
}
