"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { bannerMessages } from "./data";
import { useMessageDisplay } from "./hooks";

export default function Banner() {
  const idx = useMessageDisplay(bannerMessages, 5000);
  const searchParams = useSearchParams();
  const banner = searchParams.get("b");

  return (
    <>
      {banner === "true" ? (
        <section className="grid grid-cols-3 gap-4 py-3 px-0">
          <span className="col-span-2 col-start-2 col-end-3 justify-self-center">{bannerMessages[idx]}</span>
          <Link href={`/?b=false`} className="col-start-3 col-end-4 justify-self-end">
            X
          </Link>
        </section>
      ) : null}
    </>
  );
}

// TODO: render with ThemeToggler component to maitain server state
