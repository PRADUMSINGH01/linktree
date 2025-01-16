"use client";
import Plan from "./component/Plan";
import HeroSection from "./component/Header";
import Features from "./component/Feature";
import Footer from "./component/Footer";
import FAQ from "./component/FandQ";
import Navbar from "./component/Navbar";
import LinkFeatureComponent from "./component/Featuestwo";

export default function Home() {
  return (
    <div className="bg-white/50">
      <Navbar />
      <HeroSection />
      <LinkFeatureComponent />

      <Features />
      <Plan />
      <FAQ />
      <Footer />
    </div>
  );
}
