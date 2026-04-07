# Enterprise Architecture & Technical Specification: Medical Clinic Geo-SEO SPA
**Codename**: AcuTherapy Project Vertex

## 1. Executive Summary
This document serves as the **Master Blueprint (System Prompts & Architecture)** for constructing a hyper-localized, visually stunning, and SEO-dominant Single Page Application (SPA) for a multi-location medical clinic. 

**Objective**: If fed into an Advanced Agentic AI, the AI must be able to autonomously scaffold, style, and deploy an application that achieves lightning fast rendering (100% Lighthouse scores), dominates Google Local Search Pack (Geo-SEO ranks), and provides a zero-friction conversion funnel.

---

## 2. Technology Stack & Infrastructure
- **Core Framework**: React 18 + TypeScript + Vite (for high-speed Hot Module Replacement and highly optimized production bundles).
- **Styling Engine**: Tailwind CSS (Utility-first, heavily utilizing flexbox, `grid md:grid-cols-12`, and fluid responsive modifiers).
- **Component Library**: `radix-ui` / `shadcn/ui` primitives for accessible, headless UI (Cards, Buttons, Inputs).
- **Iconography**: `lucide-react` (SVG, responsive stroke vectors mapped to semantic user actions).
- **Routing**: `react-router-dom` (Declarative path mapping for client-side routing).
- **SEO Head Management**: `react-helmet-async` (Crucial for injecting localized JSON-LD schema markup dynamically into the DOM `<head>` asynchronously).
- **Deployment & Edge Logic**: Vercel Serverless Edge (Controlled via `vercel.json` for strict HTTP caching and routing overrides).

---

## 3. Core Architectural Modules & Implementation Methodology

### 3.1. Local & Geo-SEO Matrix (Entity Domination)
**Problem**: Geographic relevance dilution is the #1 failure point for multi-location clinics. Engine bots need definitive data.
**Implementation Protocol**:
1. **JSON-LD Injection**: Every mapped route must utilize a `<Helmet>` provider to inject `application/ld+json`. The schema must define a parent `"@type": "MedicalClinic"` and an array of `department` nodes for each geographic location (e.g., Honolulu & Aiea). Each node must map `address`, explicit `GeoCoordinates` (Latitude/Longitude), `telephone`, and `openingHoursSpecification`.
2. **Standardized Right-Sidebar (`<aside>`)**: Internal content pages must use a 12-column CSS Grid (`max-w-7xl`). The left reading pane (`<article>`) spans 8 columns. The right persistent CTA (`<aside>`) spans 4 columns (`lg:sticky`).
3. **Geo-Signals in DOM**: The sidebar must broadcast exact-match NAP (Name, Address, Phone) values. Crucially, the UI must wrap address strings with explicit `href="https://www.google.com/maps/search/?api=1&query=..."` anchor tags to natively interface with Google Maps Mobile Apps, driving spatial CTR.

### 3.2. Technical SEO & Crawlability Hardening
**Problem**: Legacy URL migrations (like moving from WordPress) cause fatal 404s and search rank obliteration.
**Implementation Protocol**:
1. **Semantic DOM Hierarchy**: Native HTML5 elements (`<header>`, `<footer>`, `<main>`, `<article>`, `<aside>`) are strictly enforced. Title hierarchy must never skew (`h1` -> `h2` -> `h3`); `<h1>` is mathematically singular per page.
2. **Edge Network Routing (`vercel.json`)**: Implement regex-based 301 Permanent Redirects at the CDN level. Define a `redirects` matrix mapping legacy WordPress query strings (e.g., `source: "/?p=(.*)"`) and nested `/about-us/` directories to their new semantic React routes, securing 100% of historical Link/PageRank Equity.

### 3.3. Conversion-Driven UX/UI Patterns (CRO)
**Problem**: High traffic with poor visual engineering results in bounce-rate inflation.
**Implementation Protocol**:
1. **Micro-Interactions**: Buttons must utilize `transition-all`, soft shadows (`shadow-blue-900/20`), and pronounced hover states (`hover:bg-blue-700`) to increase tangibility.
2. **Mobile-First CTA Primitives**: All rendered phone numbers must hook the OS dialer via the native `tel:+1...` protocol. Forms and touch targets must pass the 48px accessibility minimum.
3. **Recursive Linking Engine**: At the base of every `<article>`, inject a unified `<TreatmentInternalLinks />` matrix component. This drastically decreases bounce rate by cross-pollinating related services visually.

---

## 4. Initialization Master Prompt (For LLM Re-generation)

*To instantly order an AI to clone or expand this architecture, strictly provide the following Master Prompt:*

> **"SYSTEM ROLE: Elite Principal Frontend Architect & Technical SEO Engineer"**
> 
> **YOUR MISSION**: Scaffold, design, and optimize a professional SPA for a multi-location medical clinic.
> 
> **EXECUTION REQUIREMENTS**:
> 1. **Repository Setup**: Execute `npx create-vite@latest ./ --template react-ts`. Install Tailwind CSS and its dependencies. Install `react-router-dom`, `lucide-react`, `clsx`, `tailwind-merge`, and `react-helmet-async`.
> 2. **Layout Blueprint**: Construct a master layout wrapper featuring a persistent `<Header sticky>` and an `<Outlet>` for page views.
> 3. **Page Topology (Grid Systems)**: For all informational routes, forcibly implement a Tailwind 12-column grid container (`grid md:grid-cols-12 gap-12`). Left content mounts to `<article className="md:col-span-8">`. The booking CTA card mounts to `<aside className="md:col-span-4 lg:sticky lg:top-24">`.
> 4. **Geo-Location Component (`aside`)**: Construct a highly-styled `<Card>` component in the right sidebar. It MUST hardcode exact NAP (Name, Address, Phone) information. You MUST include a click-to-call `<Button>` using `<a href="tel:...">` and wrap addresses in Google Maps intent URLs for algorithmic indexing.
> 5. **SEO & Schema Registry**: Inside every Page Component, return `<Helmet>` mapping `application/ld+json`. Write a nested schema for `MedicalClinic` delineating exactly the separate locations with explicit `geo` lat/long coordinates.
> 6. **Migration Configuration**: Generate a `vercel.json` file in the root defining `"cleanUrls": true` and a `"redirects"` array mapping legacy `.html` and `?p=` routes to the new paths via 301.
> 7. **Styling Aesthetics**: Target a high-fidelity, enterprise healthcare look. Liberally apply `bg-slate-50` for page grounds, `bg-white` for content, vast whitespace padding (`py-16`, `p-8`), and `rounded-3xl` for image borders. Integrate `bg-blue-900` gradient heroes. Do not halt at MVP; generate dense, production-grade output.
