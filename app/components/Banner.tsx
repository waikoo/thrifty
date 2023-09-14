"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { bannerMessages } from "./data";
import { useMessageDisplay } from "./hooks";
// import { SBanner, StyledMessage } from "./styled";

export default function Banner() {
  const idx = useMessageDisplay(bannerMessages, 5000);
  const searchParams = useSearchParams();
  const banner = searchParams.get("b");

  return (
    <>
      {/* {banner === "true" ? ( */}
      {/*   <SBanner className="banner"> */}
      {/*     <StyledMessage className="message">{bannerMessages[idx]}</StyledMessage> */}
      {/*     <Link href={`/?b=false`} className="close"> */}
      {/*       X */}
      {/*     </Link> */}
      {/*   </SBanner> */}
      {/* ) : null} */}
    </>
  );
}

// TODO: render with ThemeToggler component to maitain server state
