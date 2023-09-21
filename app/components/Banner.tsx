"use client";
import React from 'react'
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { bannerMessages } from "./data";
import { useMessageDisplay } from "./hooks";

export default function Banner() {
  const idx = useMessageDisplay(bannerMessages, 5000);
  const searchParams = useSearchParams();
  const pathname = usePathname()

  return (
    <>
      {searchParams.get("b") === "true" ? (
        <section className="grid grid-cols-3 gap-4 py-2 px-3 bg-grey text-bkg">
          <span className="col-span-2 col-start-2 col-end-3 justify-self-center">{bannerMessages[idx]}</span>
          <Link href={{
            pathname: pathname,
            query: {
              b: "false",
              theme: searchParams.get("theme"),
              category: searchParams.get("category")
            }
          }} className="col-start-3 col-end-4 justify-self-end">
            X
          </Link>
        </section>
      ) : null}
    </>
  );
}
