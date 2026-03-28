# 本地黄页/目录发布主控表 (Local SEO Master NAP File)

**使用指南:** 未来无论是在任何本地黄页（Yelp, Healthgrades, Apple Maps）还是聚合器平台（BrightLocal, Yext）上注册，**请务必 100% 复制粘贴这里的文字**！不要多加空格，不要简写（比如 Suite 不要写成 Ste. 不要把 St 写成 Street），Google 的机器爬虫对哪怕是一点点的 NAP 数据误差都很敏感。

---

## 🏢 Location 1: Honolulu (Liliha)
- **Business Name:** AcuTherapy Clinics
- **Address Line 1:** 1650 Liliha St
- **Address Line 2:** Suite 208
- **City:** Honolulu
- **State:** HI
- **Zip Code:** 96817
- **Primary Phone:** (808) 528-7177
- **Website URL:** https://acutherapy.com
- **Categories (分类):** Acupuncture Clinic, Pain Management Clinic, Alternative Medicine Practitioner
- **Hours of Operation:** 
  - Monday - Friday: 09:00 AM - 01:00 PM
  - Saturday: 08:00 AM - 12:00 PM
  - Sunday: Closed

## 🏢 Location 2: Aiea / Pearl City
- **Business Name:** AcuTherapy Clinics
- **Address Line 1:** 98-211 Pali Momi St
- **Address Line 2:** Suite 604
- **City:** Aiea
- **State:** HI
- **Zip Code:** 96701
- **Primary Phone:** (808) 452-1900
- **Website URL:** https://acutherapy.com/aiea-clinic
- **Categories (分类):** Acupuncture Clinic, Pain Management Clinic, Alternative Medicine Practitioner
- **Hours of Operation:** 
  - Monday - Friday: 09:00 AM - 01:00 PM
  - Saturday: 08:00 AM - 12:00 PM
  - Sunday: Closed

---

# 💬 诊所简介库 (Business Descriptions)

根据不同平台的字数限制，请直接选用以下对应的模板。

## 📌 短版本 (Short Description - ~50 Words)
**适用平台:** Twitter, Apple Maps, 紧凑型工商名录

AcuTherapy Clinics in Honolulu and Aiea offers premier acupuncture, medical massage, and pain management. Led by Dr. David Cai with 30+ years of experience, we provide holistic, non-surgical relief for back pain, sciatica, and auto injuries.

## 📌 中版本 (Medium Description - ~100 Words)
**适用平台:** Yelp, Bing Places, Healthgrades, 多数中级分类网站

Welcome to AcuTherapy Clinics, Oahu's trusted destination for medical-grade acupuncture and holistic pain management. Led by Dr. David Cai, L.Ac., L.M.T., who brings over 30 years of clinical expertise, we specialize in treating severe conditions including chronic back pain, sciatica, frozen shoulder, sports injuries, and auto accident trauma. With convenient clinics in Liliha (Honolulu) and Aiea, our multidisciplinary approach combines advanced electro-acupuncture, fire cupping, and medical massage to address the root cause of your pain. Skip the heavy medications and discover natural, lasting relief today.

## 📌 长版本 (Long Description - ~200+ Words)
**适用平台:** Google Business Profile, Facebook, 官网 About 页, WebMD, 专业黄页

At AcuTherapy Clinics, we believe that living with chronic pain is not your only option. Proudly serving the communities of Honolulu, Aiea, and across Oahu, our clinics are committed to delivering the highest standard of Traditional Chinese Medicine (TCM) and advanced orthopedic acupuncture. 

Our Clinical Director and Founder, Dr. David Cai (L.Ac., L.M.T.), leverages over three decades of medical experience to design customized, non-surgical treatment plans tailored to each patient. We don't just mask symptoms; we treat the actual root cause of the discomfort. Whether you are struggling with debilitating sciatica, recovering from an auto accident under Hawaii PIP insurance, or dealing with stubborn joint arthritis, our comprehensive modalities—including targeted electro-acupuncture, medical massage (Tui-Na), and fire cupping—are engineered for maximum relief.

We are dedicated to regulating your nervous system, drastically improving localized blood circulation, and releasing deep myofascial tension without relying on heavy pharmaceuticals or invasive procedures. Both our Honolulu (Liliha) and Aiea/Pearl City locations are designed as pristine, deeply relaxing clinical environments where true healing begins. Book your assessment today and experience the holistic difference.

---

# 💻 JSON-LD LocalBusiness Schema (全站底层聚合代码)

你可以直接将这段代码**放在 `index.html` 的 `<head>` 里，或者作为 `src/pages/HomePage.tsx` 中 `<Helmet>` 的一部分**。它通过向 Google 发送结构化的 `JSON-LD` 医疗实体数据，极大增强你的本地搜索关联性。它向爬虫明确宣示：这是**一家企业、两个地点**，共用一个品牌名。

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "AcuTherapy Clinics",
  "logo": "https://acutherapy.com/logo.png",
  "image": "https://acutherapy.com/images/dr-david-cai-portrait.jpg",
  "url": "https://acutherapy.com",
  "description": "Premier medical acupuncture and pain management clinics in Honolulu and Aiea, led by Dr. David Cai specializing in chronic pain, auto accidents, and sports injuries.",
  "department": [
    {
      "@type": "MedicalClinic",
      "name": "AcuTherapy Clinics - Honolulu (Liliha)",
      "telephone": "+1-808-528-7177",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1650 Liliha St",
        "addressLine2": "Suite 208",
        "addressLocality": "Honolulu",
        "addressRegion": "HI",
        "postalCode": "96817",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.321289,
        "longitude": -157.860155
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "13:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "12:00"
        }
      ]
    },
    {
      "@type": "MedicalClinic",
      "name": "AcuTherapy Clinics - Aiea / Pearl City",
      "telephone": "+1-808-452-1900",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "98-211 Pali Momi St",
        "addressLine2": "Suite 604",
        "addressLocality": "Aiea",
        "addressRegion": "HI",
        "postalCode": "96701",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "13:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "12:00"
        }
      ]
    }
  ],
  "medicalSpecialty": [
    "Acupuncture",
    "PainManagement"
  ]
}
</script>
```

---

# 📋 核心服务项目列表 (Services & Specialties List)

无论是在 Yelp, Google Business 还是其他黄页，都会要求你勾选或填入“Services Offered”。请直接使用以下高度优化的长尾服务词汇，它们能完美匹配患者的搜索意图：

**主要治疗技术 (Treatment Modalities):**
- Advanced Orthopedic Acupuncture (高级骨科针灸)
- Electro-Acupuncture Therapy (电针理疗)
- Traditional Chinese Medicine / TCM (传统中医疗法)
- Medical Massage Therapy / Tui-Na (推拿与医疗级按摩)
- Fire Cupping Therapy (传统火罐排毒疗法)

**权威主治病症 (Specialized Pain Management):**
- Lower Back Pain & Sciatica Relief (下背痛与坐骨神经痛缓解)
- Neck Pain & Whiplash Recovery (颈椎病与车祸扭伤恢复)
- Frozen Shoulder & Rotator Cuff Treatment (肩周炎与肩袖损伤理疗)
- Migraine & Tension Headache Relief (偏头痛与紧张性头痛缓解)
- Knee Osteoarthritis & Joint Pain (膝关节炎与关节酸痛)
- Plantar Fasciitis & Tennis Elbow (足底筋膜炎与网球肘)
- Auto Accident Injury Rehab / Hawaii PIP (车祸创伤与PIP保险理疗)
- Sports Injury Rehabilitation (各类运动损伤康复)

---

# 📸 本地 SEO 标准图片命名目录 (SEO-Optimized Image Filenames)

上传图片到 Google Business Profile 或黄页目录前，**绝对不能**使用原图自带的名称（如 `IMG_8273.jpg`）。Google 爬虫会读取图片文件名作为相关性排名的极其重要指标。

当你准备上传你们的诊室或治疗照片时，请将这 **15 个**预先配置了顶级本地 SEO 结构（病症词 + 地理位置 + 诊所名）的图片名逐一应用：

**诊所外观与环境 (环境图对于通过 Google Maps 审核与展示极大加分):**
1. `dr-david-cai-acupuncturist-portrait-honolulu.jpg` (戴维医生官方肖像照)
2. `acutherapy-clinics-honolulu-liliha-front-entrance.jpg` (Liliha 诊所正门图 - 帮患者找路)
3. `aiea-pearl-city-acupuncture-clinic-entrance.jpg` (Aiea 诊所正门图)
4. `acutherapy-pain-clinic-clean-waiting-room-honolulu.jpg` (檀香山总店干净整洁的大厅)
5. `relaxing-acupuncture-treatment-room-aiea-hi.jpg` (Aiea 分店温馨舒适的治疗室)

**核心疗法与过程 (展示专精技术):**
6. `advanced-electro-acupuncture-therapy-honolulu.jpg` (电针通电理疗过程)
7. `fire-cupping-therapy-for-muscle-detox-hawaii.jpg` (火罐治疗背部肌肉痉挛图)
8. `medical-massage-tui-na-therapy-trigger-point.jpg` (精准推拿与触发点按摩图)

**专治病痛场景 (搜索对应病症时，这类图片曝光极高):**
9. `sciatica-low-back-pain-acupuncture-treatment.jpg` (腰背痛/坐骨神经痛下针图)
10. `frozen-shoulder-rehabilitation-acupuncture-honolulu.jpg` (肩周炎手臂活动图/肩膀治疗图)
11. `neck-pain-migraine-relief-acupuncture-dr-cai.jpg` (治疗颈椎病或头部偏头痛的图片)
12. `knee-osteoarthritis-joint-pain-acupuncture.jpg` (针对膝关节炎的穴位图)
13. `plantar-fasciitis-heel-pain-relief-hawaii.jpg` (足底筋膜炎/脚跟痛治疗图)
14. `auto-accident-whiplash-recovery-acupuncture-pip.jpg` (针对车祸脖子扭伤的理疗图)
15. `tennis-elbow-sports-injury-acupuncture-recovery.jpg` (网球肘/腕管综合征手臂治疗图)

*(附注：在 Mac 上重命名非常简单，选中图片按 `Enter` 键粘贴这些名称即可。尽量上传清晰且不带太多文字 Logo 的真实实拍图。)*
