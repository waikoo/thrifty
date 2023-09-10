"use client";
import React from "react";
import { StyledMessage, SBanner } from "./styled";
import { useMessageDisplay } from "./hooks";

interface BannerProps {
  bannerMessages: string[];
  closeBanner: () => void;
}
export function Banner({ bannerMessages, closeBanner }: BannerProps) {
  return (
    <SBanner className="banner">
      {" "}
      <StyledMessage className="message">
        {bannerMessages[useMessageDisplay(bannerMessages, 5000)]}
      </StyledMessage>
      <span className="close" onClick={closeBanner}>
        X
      </span>
    </SBanner>
  );
}
