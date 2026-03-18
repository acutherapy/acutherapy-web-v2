import fs from 'fs';
import path from 'path';

const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace <Link to="/contact...">...
    content = content.replace(
        /<Link to="\/contact-honolulu-acupuncture">\s*<Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">\s*<Calendar className="mr-2" \/> Schedule Online\s*<\/Button>\s*<\/Link>/g,
        '<Link to="/book-appointment">\n                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">\n                      <Calendar className="mr-2" /> Schedule Online\n                    </Button>\n                  </Link>'
    );

    // Replace naked <Button>...
    content = content.replace(
        /(\s*)<Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">\s*<Calendar className="mr-2" \/> Schedule Online\s*<\/Button>/g,
        '$1<Link to="/book-appointment">\n$1  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">\n$1    <Calendar className="mr-2" /> Schedule Online\n$1  </Button>\n$1</Link>'
    );

    // Ensure Link is imported if it's newly inserted and not present
    if (content.includes('<Link to="/book-appointment">') && !content.includes("Link } from 'react-router-dom'")) {
        content = content.replace(/import \{ Helmet \} from 'react-helmet-async';/, "import { Helmet } from 'react-helmet-async';\nimport { Link } from 'react-router-dom';");
    }

    fs.writeFileSync(filePath, content);
}

// ------------------------------------
// App.tsx
// ------------------------------------
let appContent = fs.readFileSync('./src/App.tsx', 'utf-8');
if (!appContent.includes("import BookAppointmentPage")) {
    appContent = appContent.replace(
        "import VeteransCareAcupunctureHonoluluPage from './pages/VeteransCareAcupunctureHonoluluPage';",
        "import VeteransCareAcupunctureHonoluluPage from './pages/VeteransCareAcupunctureHonoluluPage';\nimport BookAppointmentPage from './pages/BookAppointmentPage';"
    );
}

appContent = appContent.replace(
    /<Button className="bg-blue-600 hover:bg-blue-700 shadow-md">([\s\S]*?)<\/Button>/g,
    '<a href="/book-appointment"><Button className="bg-blue-600 hover:bg-blue-700 shadow-md">$1</Button></a>'
);

appContent = appContent.replace(
    /<Route path="\/veterans-care-acupuncture-honolulu" element=\{<VeteransCareAcupunctureHonoluluPage \/>\} \/>/g,
    '<Route path="/veterans-care-acupuncture-honolulu" element={<VeteransCareAcupunctureHonoluluPage />} />\n          <Route path="/book-appointment" element={<BookAppointmentPage />} />'
);

fs.writeFileSync('./src/App.tsx', appContent);

// ------------------------------------
// HomePage.tsx
// ------------------------------------
let homeContent = fs.readFileSync('./src/pages/HomePage.tsx', 'utf-8');
homeContent = homeContent.replace(
    /<Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-lg font-semibold shadow-lg shadow-blue-900\/40">\s*<Calendar className="mr-2 h-5 w-5" \/> Schedule Your Visit\s*<\/Button>/g,
    '<Link to="/book-appointment">\n                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-lg font-semibold shadow-lg shadow-blue-900/40">\n                    <Calendar className="mr-2 h-5 w-5" /> Schedule Your Visit\n                  </Button>\n                </Link>'
);
homeContent = homeContent.replace(
    /<Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-bold rounded-xl shadow-md">\s*<Calendar className="mr-2 h-5 w-5" \/> Schedule Online\s*<\/Button>/g,
    '<Link to="/book-appointment">\n                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-bold rounded-xl shadow-md">\n                        <Calendar className="mr-2 h-5 w-5" /> Schedule Online\n                      </Button>\n                    </Link>'
);
fs.writeFileSync('./src/pages/HomePage.tsx', homeContent);

console.log("SUCCESSFULLY UPDATED BOOKING LINKS!");
