"use client"
import { useRef } from "react";

import { useUIStore } from "@/state/client/uiState";
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
    <dialog className="fixed inset-0 z-40 grid sm:h-screen w-full sm:place-items-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
      ref={dialogRef}
    >
      {showRecovery ? <RecoverPassword /> : <SignInOrUp />}
    </dialog>
  )
}
