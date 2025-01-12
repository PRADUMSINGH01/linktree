"use client";
import StanderTheme from "../component/themes/StanderTheme";
import Themethree from "../component/themes/ThemeThree";
import BasicThem from "../component/themes/BasicTheme";
import { useState, useEffect } from "react";
export const ChooseTheme = ({ theme, links }) => {
  if (theme == "ocen") {
    return (
      <>
        <Themethree />
      </>
    );
  }
  if (theme == "Stander") {
    return (
      <>
        <StanderTheme />
      </>
    );
  }
  return (
    <>
      <BasicThem link={links} />
    </>
  );
};
