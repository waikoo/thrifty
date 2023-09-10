"use client";
import { useState } from "react";

type Props = {};

const useBanner = (props: Props) => {
  const [showBanner, setShowBanner] = useState(true);
  const closeBanner = () => {
    setShowBanner(!showBanner);
  };
  return { showBanner, closeBanner };
};

export default useBanner;
