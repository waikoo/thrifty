"use client";
import { useState } from "react";
import { bannerMessages } from "../data";

const useBanner = () => {
  const [closeBanner, setCloseBanner] = useState(false);

  const closeBannerElement = () => {
    setCloseBanner(true);
  };

  return { closeBanner, closeBannerElement, bannerMessages };
};

export default useBanner;
