"use client"
import { useRef } from "react";

import { useUIStore } from "@/state";
import { RecoverPassword, SignInOrUp } from ".";

export default function CenterContainer() {
  const showRecovery = useUIStore((state) => state.showRecovery)
  const { setShowSignIn } = useUIStore()
  const dialogRef = useRef(null)

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) {
      setShowSignIn(false)
    }
  }

  return (
    <dialog className="fixed inset-0 z-40 grid h-screen w-full place-items-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
      ref={dialogRef}
    >
      <section className="bg-bkg relative p-8">

        {showRecovery ? <RecoverPassword /> : <SignInOrUp />}

      </section>

    </dialog>
  )
}
