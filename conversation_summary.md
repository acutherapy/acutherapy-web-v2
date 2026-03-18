# AcuTherapy Clinics Website Project Summary

## Project Overview
We are building a comprehensive, 53-page React/Vite Single Page Application (SPA) for **AcuTherapy Clinics**, a pain and injury acupuncture clinic in Honolulu, Hawaii led by Dr. David Cai. 

The goal of this project is to create a modern, SEO-optimized, highly-performant web application to replace previous legacy setups (which involved HostGator, Vercel, Netlify remnants).

## Current Progress
1. **Repository Structure**: The project is located under `NW/acutherapy-website`.
2. **Framework & Tooling**: React, Vite, TypeScript, Tailwind CSS, `react-router-dom`, `react-helmet-async`, and `shadcn/ui` (Radix UI) components.
3. **Pages & Routing**: All 53 pages have been successfully scaffolded in `src/pages/` and are fully configured inside the central `<Routes>` in `src/App.tsx`. 
4. **Layout**: A persistent `<Layout>` wrapper is implemented in `App.tsx` containing the Top Notification Bar, Main Navigation, and Footer.
5. **SEO & Vercel Cleanup (Previous sessions)**: We have ensured clean indexing rules by removing legacy Vercel/Netlify test domains from canonical tags, setting up correct `robots.txt`, and configuring canonical URLs strictly to `acutherapy.com`.
6. **Form & Promotion (Previous sessions)**: Logic for the "Submit" button email workflow and Spring Promo API routing has been ironed out, dropping Chinese language targeting aggressively on that specific promo page in favor of an english-only embedded flow that auto-submits to the clinic API.
7. **Current Action Items**: We are actively designing specific UI elements and refining the content of core pages (starting with `HomePage.tsx`), inserting real imagery, enhancing structured data (GEO/Local SEO), and injecting internal contextual links.

## Next Steps
- Continue fleshing out content and UI for other high-traffic pages (Treatments, Conditions, Locations).
- Verify internal linking architecture.
- Optimize images and assets.
- Test responsive behaviors across mobile devices.
