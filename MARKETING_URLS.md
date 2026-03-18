# AcuTherapy Landing Pages & Smart Redirects

This document contains the core URLs built into the Vercel architecture specifically optimized for high-conversion marketing campaigns, QR codes, and SMS messaging.

## 🎯 5 High-Conversion Landing Pages
These dedicated pages are specifically designed without top navigation bars (no "Home", "Services", etc.). This psychology-driven design removes distractions, intentionally forcing visitors to either read the unique selling proposition or complete the focal appointment booking form.

**English Campaigns:**
1. **Spring Promo Special**
   - URL Path: \`/en/landing/spring-promo\`
   - Full URL: [https://acutherapy.com/en/landing/spring-promo](https://acutherapy.com/en/landing/spring-promo)
2. **Auto Collision & Injury Recovery**
   - URL Path: \`/en/landing/injury-recovery\`
   - Full URL: [https://acutherapy.com/en/landing/injury-recovery](https://acutherapy.com/en/landing/injury-recovery)
3. **New Patient Assessment Offer**
   - URL Path: \`/en/landing/new-patient-special\`
   - Full URL: [https://acutherapy.com/en/landing/new-patient-special](https://acutherapy.com/en/landing/new-patient-special)

**Chinese Campaigns (中文推广页):**
4. **春季特惠闪促页 (Spring Promo ZH)**
   - URL Path: \`/zh/landing/spring-promo\`
   - Full URL: [https://acutherapy.com/zh/landing/spring-promo](https://acutherapy.com/zh/landing/spring-promo)
5. **车祸与工伤理赔复健页 (Injury Recovery ZH)**
   - URL Path: \`/zh/landing/injury-recovery\`
   - Full URL: [https://acutherapy.com/zh/landing/injury-recovery](https://acutherapy.com/zh/landing/injury-recovery)

---

## 🚀 3 Smart Redirect Links (Vercel Edge Rewrites)
These ultra-short URLs are physically embedded into the server's routing rules (\`vercel.json\`). They perform a zero-latency redirect to third-party endpoints. They are ideal for printing on physical marketing collateral, business cards, front-desk QR codes, and automated SMS flows.

1. **Direct Google Review Link**
   - URL Path: \`/go/review\`
   - Full URL: [https://acutherapy.com/go/review](https://acutherapy.com/go/review)
   - *Use Case: Print as a QR code at the front desk ("Scan to leave Dr. Cai a 5-Star Review!")*

2. **Direct Video Presentation Link**
   - URL Path: \`/go/video\`
   - Full URL: [https://acutherapy.com/go/video](https://acutherapy.com/go/video)
   - *Use Case: Redirects users directly to educational YouTube content.*

3. **Direct Booking Flow Link**
   - URL Path: \`/go/book\`
   - Full URL: [https://acutherapy.com/go/book](https://acutherapy.com/go/book)
   - *Use Case: Print on the back of Dr. David Cai's business cards as "Scan to Book".*

---
*Note: Before the primary DNS (acutherapy.com) is fully mapped to Vercel, replace \`acutherapy.com\` with the Vercel-generated domain (e.g., \`acutherapy-web-v2.vercel.app\`) to preview these paths in production.*
