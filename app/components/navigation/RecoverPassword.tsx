"use client"
import { useRef } from "react";
import { useRouter } from "next/navigation";

import { useUIStore } from "@/state/client/uiState";
import { handleRecoverPassword } from "@/db/handleRecoverPassword";
import { SubmitButton } from "@/app/components/generic";
import { useUserStore } from "@/state/client/userState";
import { RxCross2 } from "react-icons/rx";
import { useThemeStore } from "@/state/themeState";
import { albert, albert_900 } from "@/utils/fonts";
import AnimatedInput from "../AnimatedInput";

export default function RecoverPassword() {
  const { email, setEmail } = useUserStore()
  const { setShowRecovery, setShowSignIn, setShowPasswordConfirmation } = useUIStore()
  const router = useRouter()
  const dialogRef = useRef(null)
  const { theme } = useThemeStore()

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) {
      setShowRecovery(false)
    }
  }

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    handleRecoverPassword(e, email, setShowRecovery, setShowSignIn)
    setShowRecovery(false)
    setShowPasswordConfirmation(true)
    setTimeout(() => setShowPasswordConfirmation(false), 3000)
  }

  return (
    <dialog className="fixed inset-0 z-[60] grid sm:h-screen w-full sm:place-items-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
      ref={dialogRef}
    >
      <form
        className="relative px-8 py-14 sm:w-[500px] xl:w-auto flex flex-col justify-center gap-10 bg-t_white dark:bg-t_black z-[60] h-screen sm:h-auto sm:rounded-[2.1875rem] border-[0.625rem] border-t_mustard text-[0.875rem] sm:text-[1.0625rem] xl:text-[0.875rem] xl:min-w-[400px]"
        onSubmit={onSubmitHandler}>
        <span className="absolute right-6 top-3 cursor-pointer"
          onClick={() => setShowRecovery(false)}>
          <RxCross2 color={theme === 'light' ? "black" : 'white'}
            size={20} />
        </span>

        <span className={`text-content text-center ${albert_900.className}`}>
          FORGOT PASSWORD?
        </span>
        <p className={`sm:max-w-[500px] xl:max-w-[300px] tracking-wider text-center mx-auto ${albert.className}`}>Please enter your email address. We will send you a link to reset your password.</p>
        <AnimatedInput
          type="email"
          value={email}
          id="password-recovery-email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          font="text-[#9d9d9d]"
        />

        <SubmitButton>RESET PASSWORD</SubmitButton>

      </form >
    </dialog>
  )
}
