"use client";
import React from 'react'
import { bannerMessages } from "./data";
import { useMessageDisplay } from "./hooks";

export default function Banner() {
  const [showBanner, setShowBanner] = React.useState(true);
  const idx = useMessageDisplay(bannerMessages, 5000);

  return (
    <>
      {showBanner ? (
        <section className="grid grid-cols-3 gap-4 py-1 px-3 bg-grey text-content">
          <span className="col-span-2 col-start-2 col-end-3 justify-self-center">{bannerMessages[idx]}</span>
          <span className="col-start-3 col-end-4 justify-self-end cursor-pointer"
            onClick={() => setShowBanner(!showBanner)}>
            X
          </span>
        </section>
      ) : null}
    </>
  );
}
