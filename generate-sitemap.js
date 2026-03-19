import fs from 'fs';
import path from 'path';

// Parse App.tsx
const appTsxPath = '/Users/guestaccount/.gemini/antigravity/playground/NW/acutherapy-website/src/App.tsx';
const content = fs.readFileSync(appTsxPath, 'utf8');

// Regex to find all <Route path="/..." />
const routesRegex = /<Route\s+path="([^"]+)"/g;
let match;
const urls = [];

// Base domain
const domain = 'https://acutherapy.com';

while ((match = routesRegex.exec(content)) !== null) {
  const route = match[1];
  // Ignore wildcard or parameter routes if any (like *)
  if (route.includes('*')) continue;
  
  // Clean default trailing slash logic if any
  const fullUrl = domain + (route === '/' ? '' : route);
  
  // Set priority based on path depth or importance
  let priority = "0.8";
  if (route === '/') priority = "1.0";
  if (route.includes('/landing/')) priority = "0.9";
  if (route.includes('-zh') || route.includes('-chinese')) priority = "0.7";

  urls.push(`
  <url>
    <loc>\${fullUrl}</loc>
    <lastmod>\${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>\${priority}</priority>
  </url>`);
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\${urls.join('')}
</urlset>`;

fs.writeFileSync('/Users/guestaccount/.gemini/antigravity/playground/NW/acutherapy-website/public/sitemap.xml', sitemapXml);

console.log('Generated public/sitemap.xml with ' + urls.length + ' URLs');
