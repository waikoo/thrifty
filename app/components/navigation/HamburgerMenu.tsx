"use client"
import { useRef, useState } from "react";

import { useNavigationStore } from "@/state/client/navigationState";
import HamburgerAccountBar from "@/app/components/navigation/HamburgerAccountBar";
import HamburgerGender from "@/app/components/navigation/HamburgerGender";

export default function HamburgerMenu() {
  const [selectedGender, setSelectedGender] = useState('')
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

        <HamburgerGender
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender} />

      </div>
    </section>
  )
}

