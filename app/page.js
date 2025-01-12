"use client";

import HeroSection from "./component/Header";
import Features from "./component/Feature";
import Footer from "./component/Footer";
import Faq from "./component/FandQ";
import Navbar from "./component/Navbar";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Features />
      <Faq />
      <Footer />
    </div>
  );
}
