"use client";

import HeroSection from "./component/Header";
import Features from "./component/Feature";
import Footer from "./component/Footer";
import Faq from "./component/FandQ";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Faq />
      <Footer />
    </>
  );
}
