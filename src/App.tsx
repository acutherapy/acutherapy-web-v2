
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MapPin, Clock, PhoneCall, Calendar, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Automatically imports all pages
import HomePage from './pages/HomePage';
import AcupunctureHonoluluPage from './pages/AcupunctureHonoluluPage';
import BackPainAcupunctureHonoluluPage from './pages/BackPainAcupunctureHonoluluPage';
import SciaticaAcupunctureHonoluluPage from './pages/SciaticaAcupunctureHonoluluPage';
import NeckPainTreatmentHonoluluPage from './pages/NeckPainTreatmentHonoluluPage';
import AutoAccidentInjuryTreatmentHonoluluPage from './pages/AutoAccidentInjuryTreatmentHonoluluPage';
import WhiplashTreatmentHonoluluPage from './pages/WhiplashTreatmentHonoluluPage';
import FireCuppingTherapyHonoluluPage from './pages/FireCuppingTherapyHonoluluPage';
import MedicalMassageHonoluluPage from './pages/MedicalMassageHonoluluPage';
import DoesAcupunctureHelpSciaticaPage from './pages/DoesAcupunctureHelpSciaticaPage';
import ShoulderPainAcupunctureHonoluluPage from './pages/ShoulderPainAcupunctureHonoluluPage';
import KneePainAcupunctureHonoluluPage from './pages/KneePainAcupunctureHonoluluPage';
import HeadacheMigraineAcupunctureHonoluluPage from './pages/HeadacheMigraineAcupunctureHonoluluPage';
import HerniatedDiscAcupunctureHonoluluPage from './pages/HerniatedDiscAcupunctureHonoluluPage';
import ArthritisAcupunctureHonoluluPage from './pages/ArthritisAcupunctureHonoluluPage';
import PlantarFasciitisAcupunctureHonoluluPage from './pages/PlantarFasciitisAcupunctureHonoluluPage';
import FrozenShoulderAcupunctureHonoluluPage from './pages/FrozenShoulderAcupunctureHonoluluPage';
import TennisElbowAcupunctureHonoluluPage from './pages/TennisElbowAcupunctureHonoluluPage';
import HipPainAcupunctureHonoluluPage from './pages/HipPainAcupunctureHonoluluPage';
import SciaticaTreatmentHonoluluPage from './pages/SciaticaTreatmentHonoluluPage';
import ChronicPainTreatmentHonoluluPage from './pages/ChronicPainTreatmentHonoluluPage';
import SportsInjuryAcupunctureHonoluluPage from './pages/SportsInjuryAcupunctureHonoluluPage';
import AcupunctureWaikikiPage from './pages/AcupunctureWaikikiPage';
import AcupunctureKahalaPage from './pages/AcupunctureKahalaPage';
import AcupunctureManoaPage from './pages/AcupunctureManoaPage';
import AcupunctureHawaiiKaiPage from './pages/AcupunctureHawaiiKaiPage';
import AcupunctureKaimukiPage from './pages/AcupunctureKaimukiPage';
import AcupunctureAlaMoanaPage from './pages/AcupunctureAlaMoanaPage';
import AcupunctureKapahuluPage from './pages/AcupunctureKapahuluPage';
import AcupunctureMoiliiliPage from './pages/AcupunctureMoiliiliPage';
import HowAcupunctureTreatsBackPainPage from './pages/HowAcupunctureTreatsBackPainPage';
import HowManyAcupunctureSessionsForSciaticaPage from './pages/HowManyAcupunctureSessionsForSciaticaPage';
import IsAcupunctureGoodForHerniatedDiscPage from './pages/IsAcupunctureGoodForHerniatedDiscPage';
import CanAcupunctureHelpNeckPainPage from './pages/CanAcupunctureHelpNeckPainPage';
import AcupunctureVsChiropracticBackPainPage from './pages/AcupunctureVsChiropracticBackPainPage';
import RotatorCuffAcupunctureHonoluluPage from './pages/RotatorCuffAcupunctureHonoluluPage';
import DoesCuppingHelpBackPainPage from './pages/DoesCuppingHelpBackPainPage';
import WhatToExpectFirstAcupunctureVisitPage from './pages/WhatToExpectFirstAcupunctureVisitPage';
import IsAcupunctureCoveredByInsuranceHawaiiPage from './pages/IsAcupunctureCoveredByInsuranceHawaiiPage';
import HowFastDoesAcupunctureWorkPage from './pages/HowFastDoesAcupunctureWorkPage';
import PatientReviewsPage from './pages/PatientReviewsPage';
import TreatmentProcessPage from './pages/TreatmentProcessPage';
import InsuranceAcceptedPage from './pages/InsuranceAcceptedPage';
import FrequentlyAskedQuestionsPage from './pages/FrequentlyAskedQuestionsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import NewPatientGuidePage from './pages/NewPatientGuidePage';
import ClinicPoliciesPage from './pages/ClinicPoliciesPage';
import AcupunctureSafetyPage from './pages/AcupunctureSafetyPage';
import AboutTraditionalChineseMedicinePage from './pages/AboutTraditionalChineseMedicinePage';
import ContactHonoluluAcupuncturePage from './pages/ContactHonoluluAcupuncturePage';
import AcupunctureHonoluluChinesePage from './pages/AcupunctureHonoluluChinesePage';
import AcupunctureHonoluluJapanesePage from './pages/AcupunctureHonoluluJapanesePage';
import AcupunctureHonoluluKoreanPage from './pages/AcupunctureHonoluluKoreanPage';
import WorkersCompAcupunctureHonoluluPage from './pages/WorkersCompAcupunctureHonoluluPage';
import VeteransCareAcupunctureHonoluluPage from './pages/VeteransCareAcupunctureHonoluluPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import AboutDrDavidCaiPage from './pages/AboutDrDavidCaiPage';
import AcupuncturePearlCityPage from './pages/AcupuncturePearlCityPage';
import AcupunctureWaipahuPage from './pages/AcupunctureWaipahuPage';
import AcupunctureKapoleiPage from './pages/AcupunctureKapoleiPage';
import AcupunctureKakaakoPage from './pages/AcupunctureKakaakoPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import SitemapPage from './pages/SitemapPage';

import HonoluluClinicLocationPage from './pages/HonoluluClinicLocationPage';
import AieaClinicLocationPage from './pages/AieaClinicLocationPage';
import AIChatbot from './components/AIChatbot';
import SpringPromoEnPage from './pages/SpringPromoEnPage';
import InjuryRecoveryEnPage from './pages/InjuryRecoveryEnPage';
import NewPatientSpecialEnPage from './pages/NewPatientSpecialEnPage';
import SpringPromoZhPage from './pages/SpringPromoZhPage';
import InjuryRecoveryZhPage from './pages/InjuryRecoveryZhPage';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (menuName: string) => {
    setOpenMobileDropdown(prev => prev === menuName ? null : menuName);
  };

  const { pathname } = useLocation();
  const isLandingPage = pathname.includes('/landing/');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [pathname]);

  let navHome = 'Home';
  let navTreatments = 'Services';
  let navConditions = 'Conditions';
  let navReviews = 'Reviews';
  let navTopics = 'Q&A';
  let navAbout = 'About Us';
  let navBook = 'Book Appointment';

  let footerDesc = "Honolulu's premier clinic for natural pain relief, acupuncture, and traditional Chinese medicine, led by Dr. David Cai.";
  let footerTreatments = 'Services';
  let footerConditions = 'Conditions';
  let footerLocations = 'Locations';

  let linkAcupuncture = 'Acupuncture Honolulu';
  let linkMassage = 'Medical Massage';
  let linkCupping = 'Fire Cupping';
  let linkSports = 'Sports Injuries';

  let linkBack = 'Back Pain';
  let linkSciatica = 'Sciatica Treatment';
  let linkNeck = 'Neck Pain';
  let linkAuto = 'Auto Accident';

  let linkWaikiki = 'Waikiki';
  let linkKahala = 'Kahala';
  let linkKaimuki = 'Kaimuki';
  let linkAlaMoana = 'Ala Moana';

  if (pathname.includes('chinese')) {
    navHome = '首页';
    navTreatments = '特色疗法';
    navConditions = '对应病症';
    navReviews = '患者评价';
    navAbout = '关于我们';
    navBook = '预约就诊';
    footerDesc = '夏威夷檀香山最权威的自然疼痛缓解与正统中医针灸中心，由拥有30年临床经验的蔡大卫医生主理。';
    footerTreatments = '特色疗法';
    footerConditions = '常见病症';
    footerLocations = '服务区域';

    linkAcupuncture = '檀香山针灸';
    linkMassage = '中医医疗推拿';
    linkCupping = '专业火罐排毒';
    linkSports = '运动损伤理疗';

    linkBack = '腰背痛缓解';
    linkSciatica = '坐骨神经痛治疗';
    linkNeck = '颈肩痛与富贵包';
    linkAuto = '车祸理疗 (PIP)';

    linkWaikiki = '威基基 (Waikiki)';
    linkKahala = '卡哈拉 (Kahala)';
    linkKaimuki = '卡伊穆基 (Kaimuki)';
    linkAlaMoana = '阿拉莫阿那 (Ala Moana)';
  } else if (pathname.includes('japanese')) {
    navHome = 'ホーム';
    navTreatments = '治療内容';
    navConditions = '対象症状';
    navReviews = '患者様の声';
    navAbout = '当院について';
    navBook = 'ご予約';
    footerDesc = 'Dr. David Caiが率いる、ホノルル最高峰の自然な痛みの緩和、鍼灸、そして伝統中国医学のクリニックです。';
    footerTreatments = '治療内容';
    footerConditions = '対象症状';
    footerLocations = '対応エリア';

    linkAcupuncture = 'ホノルル鍼治療';
    linkMassage = '医療マッサージ';
    linkCupping = 'カッピング療法';
    linkSports = 'スポーツ障害';

    linkBack = '腰痛治療';
    linkSciatica = '坐骨神経痛の治療';
    linkNeck = '首の痛み・むち打ち';
    linkAuto = '交通事故のリハビリ';

    linkWaikiki = 'ワイキキ';
    linkKahala = 'カハラ';
    linkKaimuki = 'カイムキ';
    linkAlaMoana = 'アラモアナ';
  } else if (pathname.includes('korean')) {
    navHome = '홈';
    navTreatments = '치료법';
    navConditions = '치료 질환';
    navReviews = '환자 리뷰';
    navAbout = '소개';
    navBook = '예약하기';
    footerDesc = 'Dr. David Cai가 이끄는 호놀룰루 최고의 자연 통증 완화, 침술 및 전통 한의학 클리닉입니다.';
    footerTreatments = '치료법';
    footerConditions = '치료 질환';
    footerLocations = '서비스 지역';

    linkAcupuncture = '호놀룰루 침술';
    linkMassage = '의료 마사지';
    linkCupping = '부항 요법';
    linkSports = '스포츠 부상';

    linkBack = '허리 통증';
    linkSciatica = '좌골 신경통 치료';
    linkNeck = '목 통증';
    linkAuto = '교통사고 치료';

    linkWaikiki = '와이키키';
    linkKahala = '카할라';
    linkKaimuki = '카이무키';
    linkAlaMoana = '알라모아나';
  }


  return (
    <div className="min-h-screen font-sans bg-slate-50 flex flex-col">
      {/* Top Notification Bar */}
      {!isLandingPage && (
      <div className="bg-blue-600 text-white py-2 px-4 text-sm font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Honolulu, HI</span>
            <span className="hidden sm:flex items-center gap-1.5"><Clock size={14} /> Mon-Fri: 9am-1pm | Sat: 8am-12pm</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+18085287177" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
              <PhoneCall size={14} /> (808) 528-7177
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="/acupuncture-honolulu-chinese" className="hidden sm:inline hover:text-blue-200 transition-colors">中文</a>
            <span className="hidden sm:inline">|</span>
            <a href="/acupuncture-honolulu-japanese" className="hidden sm:inline hover:text-blue-200 transition-colors">日本語</a>
          </div>
        </div>
      </div>
      )}

      {/* Main Navigation */}
      {isLandingPage ? (
        <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b-2 border-green-700/10 shadow-sm bg-gradient-to-b from-white to-green-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center decoration-transparent gap-3 outline-none cursor-default">
              <img src="/images/logo-landing.png" alt="AcuTherapy Clinics" className="h-12 md:h-14 w-auto drop-shadow-sm transition-transform" />
              <div className="flex flex-col justify-center">
                <span className="text-2xl md:text-[1.65rem] leading-none font-black tracking-tight text-slate-800 font-sans">AcuTherapy</span>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] text-emerald-700/80 mt-1 uppercase leading-none">
                  {pathname.includes('spring') ? 'Spring Wellness' : pathname.includes('injury') ? 'Injury Recovery' : 'Patient Assessment'}
                </span>
              </div>
            </div>
            <div className="text-right flex flex-col items-end">
              <div className="text-[15px] font-bold text-slate-800 mb-0.5">Honolulu & Aiea (Pearl Harbor)</div>
              <a href="tel:+18085287177" className="text-[15px] font-semibold text-green-700 flex items-center justify-end gap-1 hover:text-green-800 transition-colors">
                <PhoneCall size={15} /> (808) 528-7177
              </a>
            </div>
          </div>
        </nav>
      ) : (
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center decoration-transparent gap-2.5">
            <img src="/images/logo-main.png" alt="AcuTherapy Clinics" className="h-12 w-auto drop-shadow-sm transition-transform hover:scale-105" />
          </a>
          <div className="hidden lg:flex items-center gap-6 font-medium text-slate-600">
            <a href="/" className="hover:text-blue-600 transition-colors py-4">{navHome}</a>
            <a href="/dr-david-cai-honolulu-acupuncturist" className="hover:text-blue-600 transition-colors py-4">{navAbout}</a>

            {/* Core Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors py-4">
                {navTreatments} <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-12 left-0 w-64 bg-white border border-slate-200 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                <a href="/pain-management-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 font-bold border-b border-slate-100">Pain Management</a>
                <a href="/auto-accident-injury-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 border-b border-slate-100">Auto Accident Injury</a>
                <a href="/workers-comp-injury-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 border-b border-slate-100">Workers Comp Injury</a>
                <a href="/veterans-pain-relief-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 border-b border-slate-100">Veterans Pain Relief</a>
                <a href="/acupuncture-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Acupuncture Honolulu</a>
                <a href="/medical-massage-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Medical Massage</a>
                <a href="/fire-cupping-therapy-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Fire Cupping Therapy</a>
                <a href="/sports-injury-acupuncture-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Sports Injury Treatment</a>
              </div>
            </div>

            {/* Conditions Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors py-4">
                {navConditions} <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-12 left-0 w-64 bg-white border border-slate-200 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                <a href="/back-pain-acupuncture-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Back Pain</a>
                <a href="/sciatica-treatment-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Sciatica</a>
                <a href="/neck-pain-treatment-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Neck Pain</a>
                <a href="/shoulder-pain-acupuncture-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Shoulder Pain</a>
                <a href="/knee-pain-acupuncture-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Knee Pain</a>
                <a href="/headache-migraine-acupuncture-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Headache & Migraine</a>
                <a href="/whiplash-treatment-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Whiplash</a>
                <a href="/herniated-disc-acupuncture-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Herniated Disc</a>
                <a href="/arthritis-acupuncture-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Arthritis</a>
                <a href="/plantar-fasciitis-acupuncture-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Plantar Fasciitis</a>
                <a href="/frozen-shoulder-acupuncture-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Frozen Shoulder</a>
                <a href="/tennis-elbow-acupuncture-honolulu" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Tennis Elbow</a>
              </div>
            </div>

            {/* Blog SEO Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors py-4">
                {navTopics} <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-12 left-0 w-[300px] bg-white border border-slate-200 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                <a href="/does-acupuncture-help-sciatica" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Does Acupuncture Help Sciatica?</a>
                <a href="/how-acupuncture-treats-back-pain" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">How Acupuncture Treats Back Pain</a>
                <a href="/how-many-acupuncture-sessions-for-sciatica" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">How Many Sessions For Sciatica?</a>
                <a href="/is-acupuncture-good-for-herniated-disc" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Is It Good for Herniated Disc?</a>
                <a href="/can-acupuncture-help-neck-pain" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Can Acupuncture Help Neck Pain?</a>
                <a href="/acupuncture-vs-chiropractic-back-pain" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Acupuncture vs Chiropractic</a>
                <a href="/does-cupping-help-back-pain" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Does Cupping Help Back Pain?</a>
                <a href="/what-to-expect-first-acupuncture-visit" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">What to Expect First Visit</a>
                <a href="/is-acupuncture-covered-by-insurance-hawaii" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Insurance Coverage in Hawaii</a>
                <a href="/how-fast-does-acupuncture-work" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">How Fast Does It Work?</a>
              </div>
            </div>

            {/* Locations & Contact Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors py-4">
                Locations & Contact <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-12 left-0 w-52 bg-white border border-slate-200 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                <a href="/honolulu-clinic" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">Honolulu Clinic (Liliha)</a>
                <a href="/aiea-pearl-city-clinic" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 border-b border-slate-100">Aiea / Pearl City Clinic</a>
                <a href="/contact-honolulu-acupuncture" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 border-b border-slate-100">Contact Us</a>
                <a href="tel:+18085287177" className="block px-4 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50">(808) 528-7177</a>
              </div>
            </div>

            <a href="/patient-reviews" className="hover:text-blue-600 transition-colors py-4">{navReviews}</a>
            <a href="/book-appointment"><Button className="bg-blue-600 hover:bg-blue-700 shadow-md">
              <Calendar className="mr-2 h-4 w-4" /> {navBook}
            </Button></a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-slate-600 hover:text-blue-600 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-2xl overflow-y-auto max-h-[75vh]">
            <div className="flex flex-col py-4 px-6 space-y-2">
              <a href="/" className="text-lg font-semibold text-slate-800 border-b border-slate-100 py-3">{navHome}</a>
              
              <button onClick={() => toggleMobileDropdown('treatments')} className="flex items-center justify-between text-lg font-semibold text-slate-800 border-b border-slate-100 py-3">
                {navTreatments} <ChevronDown className={`h-5 w-5 transition-transform ${openMobileDropdown === 'treatments' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'treatments' && (
                <div className="pl-4 py-3 space-y-4 bg-slate-50 border-b border-slate-100 rounded-b-lg">
                  <a href="/pain-management-honolulu" className="block text-slate-600 font-medium">Pain Management</a>
                  <a href="/auto-accident-injury-honolulu" className="block text-slate-600 font-medium">Auto Accident Injury</a>
                  <a href="/workers-comp-injury-honolulu" className="block text-slate-600 font-medium">Workers Comp Injury</a>
                  <a href="/acupuncture-honolulu" className="block text-slate-600 font-medium">Acupuncture Honolulu</a>
                  <a href="/medical-massage-honolulu" className="block text-slate-600 font-medium">Medical Massage</a>
                  <a href="/fire-cupping-therapy-honolulu" className="block text-slate-600 font-medium">Fire Cupping</a>
                </div>
              )}

              <button onClick={() => toggleMobileDropdown('conditions')} className="flex items-center justify-between text-lg font-semibold text-slate-800 border-b border-slate-100 py-3">
                {navConditions} <ChevronDown className={`h-5 w-5 transition-transform ${openMobileDropdown === 'conditions' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'conditions' && (
                <div className="pl-4 py-3 space-y-4 bg-slate-50 border-b border-slate-100 rounded-b-lg">
                  <a href="/back-pain-acupuncture-honolulu" className="block text-slate-600 font-medium">Back Pain</a>
                  <a href="/sciatica-treatment-honolulu" className="block text-slate-600 font-medium">Sciatica</a>
                  <a href="/neck-pain-treatment-honolulu" className="block text-slate-600 font-medium">Neck Pain</a>
                  <a href="/shoulder-pain-acupuncture-honolulu" className="block text-slate-600 font-medium">Shoulder Pain</a>
                  <a href="/headache-migraine-acupuncture-honolulu" className="block text-slate-600 font-medium">Headache &amp; Migraine</a>
                  <a href="/herniated-disc-acupuncture-honolulu" className="block text-slate-600 font-medium">Herniated Disc</a>
                </div>
              )}

              <a href="/patient-reviews" className="text-lg font-semibold text-slate-800 border-b border-slate-100 py-3">{navReviews}</a>
              <a href="/frequently-asked-questions" className="text-lg font-semibold text-slate-800 border-b border-slate-100 py-3">{navTopics}</a>
              <a href="/dr-david-cai-honolulu-acupuncturist" className="text-lg font-semibold text-slate-800 border-b border-slate-100 py-3">{navAbout}</a>
              
              <button onClick={() => toggleMobileDropdown('locations')} className="flex items-center justify-between text-lg font-semibold text-slate-800 border-b border-slate-100 py-3">
                Locations &amp; Contact <ChevronDown className={`h-5 w-5 transition-transform ${openMobileDropdown === 'locations' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'locations' && (
                <div className="pl-4 py-3 space-y-4 bg-slate-50 border-b border-slate-100 rounded-b-lg">
                  <a href="/honolulu-clinic" className="block text-slate-600 font-medium">Honolulu Clinic</a>
                  <a href="/aiea-pearl-city-clinic" className="block text-slate-600 font-medium">Aiea / Pearl City</a>
                  <a href="/contact-honolulu-acupuncture" className="block text-slate-600 font-medium">Contact Us</a>
                  <a href="tel:+18085287177" className="block font-bold text-blue-600">(808) 528-7177</a>
                </div>
              )}

              <a href="/book-appointment" className="mt-4 pb-4"><Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">
                <Calendar className="mr-2 h-5 w-5" /> {navBook}
              </Button></a>
            </div>
          </div>
        )}
      </nav>
      )}

      <main className="flex-1">{children}</main>

      {/* Footer */}
      {!isLandingPage && (
      <footer className="bg-blue-900 text-slate-300 py-16 mt-auto border-t-[8px] border-blue-600">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">AcuTherapy<span className="text-blue-500">Clinics</span></h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {footerDesc}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{footerTreatments}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/acupuncture-honolulu" className="hover:text-blue-400">{linkAcupuncture}</a></li>
              <li><a href="/medical-massage-honolulu" className="hover:text-blue-400">{linkMassage}</a></li>
              <li><a href="/fire-cupping-therapy-honolulu" className="hover:text-blue-400">{linkCupping}</a></li>
              <li><a href="/sports-injury-acupuncture-honolulu" className="hover:text-blue-400">{linkSports}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{footerConditions}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/back-pain-acupuncture-honolulu" className="hover:text-blue-400">{linkBack}</a></li>
              <li><a href="/sciatica-treatment-honolulu" className="hover:text-blue-400">{linkSciatica}</a></li>
              <li><a href="/neck-pain-treatment-honolulu" className="hover:text-blue-400">{linkNeck}</a></li>
              <li><a href="/auto-accident-injury-honolulu" className="hover:text-blue-400">{linkAuto}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{footerLocations}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/honolulu-clinic" className="font-semibold text-white hover:text-blue-300">{pathname.includes('/zh') ? '檀香山总院 (Liliha)' : 'Honolulu Clinic (Liliha)'}</a></li>
              <li><a href="/aiea-pearl-city-clinic" className="font-semibold text-white hover:text-blue-300 pb-2 border-b border-blue-800/50 block mb-2">{pathname.includes('/zh') ? '阿伊亚分院 (Aiea)' : 'Aiea Clinic (Pearl City)'}</a></li>
              <li><a href="/acupuncture-waikiki" className="hover:text-blue-400">{linkWaikiki}</a></li>
              <li><a href="/acupuncture-kahala" className="hover:text-blue-400">{linkKahala}</a></li>
              <li><a href="/acupuncture-kaimuki" className="hover:text-blue-400">{linkKaimuki}</a></li>
              <li><a href="/acupuncture-ala-moana" className="hover:text-blue-400">{linkAlaMoana}</a></li>
            </ul>
          </div>
          <div className="md:col-span-4 mt-8 pt-8 border-t border-blue-800 text-center">
            <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Areas We Serve in Hawaii</h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-4xl mx-auto">
              Our clinics proudly provide top-rated acupuncture and pain management services to patients across Oahu, including:
              <span className="text-slate-400 font-medium"> Honolulu, Kaimuki, Kahala, Kapahulu, Diamond Head, Waikiki, Kakaako, Moiliili, McCully, Hawaii Kai, Kalihi, Aiea, Pearl City, Waipahu, Kapolei, Mililani, Kailua, Kaneohe, Waianae, & Wahiawa.</span>
            </p>
          </div>
          <div className="md:col-span-4 mt-8 pt-6 border-t border-blue-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
            <p>© 2026 AcuTherapy. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-blue-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
      )}

      {/* Real AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/acupuncture-honolulu" element={<AcupunctureHonoluluPage />} />
          <Route path="/back-pain-acupuncture-honolulu" element={<BackPainAcupunctureHonoluluPage />} />
          <Route path="/sciatica-acupuncture-honolulu" element={<SciaticaAcupunctureHonoluluPage />} />
          <Route path="/neck-pain-treatment-honolulu" element={<NeckPainTreatmentHonoluluPage />} />
          <Route path="/auto-accident-injury-honolulu" element={<AutoAccidentInjuryTreatmentHonoluluPage />} />
          <Route path="/whiplash-treatment-honolulu" element={<WhiplashTreatmentHonoluluPage />} />
          <Route path="/fire-cupping-therapy-honolulu" element={<FireCuppingTherapyHonoluluPage />} />
          <Route path="/medical-massage-honolulu" element={<MedicalMassageHonoluluPage />} />
          <Route path="/does-acupuncture-help-sciatica" element={<DoesAcupunctureHelpSciaticaPage />} />
          <Route path="/shoulder-pain-acupuncture-honolulu" element={<ShoulderPainAcupunctureHonoluluPage />} />
          <Route path="/knee-pain-acupuncture-honolulu" element={<KneePainAcupunctureHonoluluPage />} />
          <Route path="/headache-migraine-acupuncture-honolulu" element={<HeadacheMigraineAcupunctureHonoluluPage />} />
          <Route path="/herniated-disc-acupuncture-honolulu" element={<HerniatedDiscAcupunctureHonoluluPage />} />
          <Route path="/arthritis-acupuncture-honolulu" element={<ArthritisAcupunctureHonoluluPage />} />
          <Route path="/plantar-fasciitis-acupuncture-honolulu" element={<PlantarFasciitisAcupunctureHonoluluPage />} />
          <Route path="/frozen-shoulder-acupuncture-honolulu" element={<FrozenShoulderAcupunctureHonoluluPage />} />
          <Route path="/tennis-elbow-acupuncture-honolulu" element={<TennisElbowAcupunctureHonoluluPage />} />
          <Route path="/hip-pain-acupuncture-honolulu" element={<HipPainAcupunctureHonoluluPage />} />
          <Route path="/sciatica-treatment-honolulu" element={<SciaticaTreatmentHonoluluPage />} />
          <Route path="/pain-management-honolulu" element={<ChronicPainTreatmentHonoluluPage />} />
          <Route path="/sports-injury-acupuncture-honolulu" element={<SportsInjuryAcupunctureHonoluluPage />} />
          <Route path="/acupuncture-waikiki" element={<AcupunctureWaikikiPage />} />
          <Route path="/acupuncture-kahala" element={<AcupunctureKahalaPage />} />
          <Route path="/acupuncture-manoa" element={<AcupunctureManoaPage />} />
          <Route path="/acupuncture-hawaii-kai" element={<AcupunctureHawaiiKaiPage />} />
          <Route path="/acupuncture-kaimuki" element={<AcupunctureKaimukiPage />} />
          <Route path="/acupuncture-ala-moana" element={<AcupunctureAlaMoanaPage />} />
          <Route path="/acupuncture-kapahulu" element={<AcupunctureKapahuluPage />} />
          <Route path="/acupuncture-moiliili" element={<AcupunctureMoiliiliPage />} />
          <Route path="/acupuncture-pearl-city" element={<AcupuncturePearlCityPage />} />
          <Route path="/acupuncture-waipahu" element={<AcupunctureWaipahuPage />} />
          <Route path="/acupuncture-kapolei" element={<AcupunctureKapoleiPage />} />
          <Route path="/acupuncture-kakaako" element={<AcupunctureKakaakoPage />} />
          <Route path="/how-acupuncture-treats-back-pain" element={<HowAcupunctureTreatsBackPainPage />} />
          <Route path="/how-many-acupuncture-sessions-for-sciatica" element={<HowManyAcupunctureSessionsForSciaticaPage />} />
          <Route path="/is-acupuncture-good-for-herniated-disc" element={<IsAcupunctureGoodForHerniatedDiscPage />} />
          <Route path="/can-acupuncture-help-neck-pain" element={<CanAcupunctureHelpNeckPainPage />} />
          <Route path="/acupuncture-vs-chiropractic-back-pain" element={<AcupunctureVsChiropracticBackPainPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/rotator-cuff-acupuncture-honolulu" element={<RotatorCuffAcupunctureHonoluluPage />} />
          <Route path="/does-cupping-help-back-pain" element={<DoesCuppingHelpBackPainPage />} />
          <Route path="/what-to-expect-first-acupuncture-visit" element={<WhatToExpectFirstAcupunctureVisitPage />} />
          <Route path="/is-acupuncture-covered-by-insurance-hawaii" element={<IsAcupunctureCoveredByInsuranceHawaiiPage />} />
          <Route path="/how-fast-does-acupuncture-work" element={<HowFastDoesAcupunctureWorkPage />} />
          <Route path="/patient-reviews" element={<PatientReviewsPage />} />
          <Route path="/treatment-process" element={<TreatmentProcessPage />} />
          <Route path="/insurance-accepted" element={<InsuranceAcceptedPage />} />
          <Route path="/frequently-asked-questions" element={<FrequentlyAskedQuestionsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/new-patient-guide" element={<NewPatientGuidePage />} />
          <Route path="/clinic-policies" element={<ClinicPoliciesPage />} />
          <Route path="/acupuncture-safety" element={<AcupunctureSafetyPage />} />
          <Route path="/about-traditional-chinese-medicine" element={<AboutTraditionalChineseMedicinePage />} />
          <Route path="/contact-honolulu-acupuncture" element={<ContactHonoluluAcupuncturePage />} />
          <Route path="/acupuncture-honolulu-chinese" element={<AcupunctureHonoluluChinesePage />} />
          <Route path="/acupuncture-honolulu-japanese" element={<AcupunctureHonoluluJapanesePage />} />
          <Route path="/acupuncture-honolulu-korean" element={<AcupunctureHonoluluKoreanPage />} />
          <Route path="/workers-comp-injury-honolulu" element={<WorkersCompAcupunctureHonoluluPage />} />
          <Route path="/veterans-pain-relief-honolulu" element={<VeteransCareAcupunctureHonoluluPage />} />
          <Route path="/dr-david-cai-honolulu-acupuncturist" element={<AboutDrDavidCaiPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/honolulu-clinic" element={<HonoluluClinicLocationPage />} />
          <Route path="/aiea-pearl-city-clinic" element={<AieaClinicLocationPage />} />
          <Route path="/en/landing/spring-promo" element={<SpringPromoEnPage />} />
          <Route path="/en/landing/injury-recovery" element={<InjuryRecoveryEnPage />} />
          <Route path="/en/landing/new-patient-special" element={<NewPatientSpecialEnPage />} />
          <Route path="/zh/landing/spring-promo" element={<SpringPromoZhPage />} />
          <Route path="/zh/landing/injury-recovery" element={<InjuryRecoveryZhPage />} />
        
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

        </Routes>
        <AIChatbot />
      </Layout>
    </HelmetProvider>
  );
}
