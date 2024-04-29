"use client"
import { useRef } from "react";

import { useNavigationStore } from "@/state/client/navigationState";
import HamburgerAccountBar from "@/app/components/navigation/HamburgerAccountBar";

export default function HamburgerMenu() {
  const { setShowHamburgerMenu } = useNavigationStore()
  const bgRef = useRef(null)

  const handleCloseHamburgerMenu = (e: React.MouseEvent) => {
    if (e.target === bgRef.current) {
      setShowHamburgerMenu(false)
    }
  }

  return (
    <section className="absolute inset-0 z-[60] h-screen w-screen bg-[rgba(0,0,0,0.5)]"
      ref={bgRef}
      onClick={handleCloseHamburgerMenu}
    >
      <div className="p-4 w-[80%] bg-t_white dark:bg-t_black">

        <HamburgerAccountBar />
        <div className="grid grid-cols-3 w-full p-2 justify-items-center mt-2">
          <span>MEN</span>
          <span>WOMEN</span>
          <span>KIDS</span>
        </div>

      </div>
    </section>
  )
}

