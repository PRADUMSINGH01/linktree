"use client";

import HeroSection from "./component/Header";
import Features from "./component/Feature";
import Footer from "./component/Footer";
import Faq from "./component/FandQ";
import BasicThem from "./component/themes/BasicTheme";
import Themethree from "./component/themes/ThemeThree";
import StanderTheme from "./component/themes/StanderTheme";
export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col w-full justify-center items-center ">
        {<BasicThem Title={"basic "} URL={"/"} />}
        <StanderTheme />
        <Themethree />
      </div>
      <HeroSection />
      <Features />
      <Faq />
      <Footer />
    </div>
  );
}
