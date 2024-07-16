"use client"
import { useRef, useState } from 'react'

import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

import { Auth, AuthModes } from '@/types/auth'
import { StateButtonContainer, SubmitButton } from '@/app/components/generic'
import CheckBox from '@/app/components/generic/CheckBox'
import { useSignIn, useSignUp } from '@/app/components/hooks'
import { useUIStore } from '@/state/client/uiState'
import { useUserStore } from '@/state/client/userState'
import { useThemeStore } from '@/state/themeState'
import { albert, albert_500, albert_600 } from '@/utils/fonts';
import AnimatedInput from '@/app/components/AnimatedInput';

const SignInOrUp = () => {
  const [selected, setSelected] = useState<AuthModes>(Auth.LOGIN)
  const [checked, setChecked] = useState(false)
  const { email, setEmail, password, setPassword } = useUserStore()
  const { setShowSignIn, showRecovery, setShowRecovery } = useUIStore()
  const { theme } = useThemeStore()

  const { signInHook, loading: signInLoading } = useSignIn()
  const { signUpHook, loading: signUpLoading } = useSignUp()
  const dialogRef = useRef(null)

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) {
      setShowSignIn(false)
    }
  }

  const handleShowForgotPassword = () => {
    setShowSignIn(false)
    setShowRecovery(true)
  }

  return (
    <dialog className="fixed inset-0 z-[60] grid sm:h-screen w-full sm:place-items-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
      ref={dialogRef}
    >
      <section className="h-screen sm:h-auto sm:w-[500px] xl:w-auto bg-t_white dark:bg-t_dark relative flex flex-col justify-start gap-2 pt-10 pb-6 rounded-0 sm:rounded-[2.1875rem] border-[0.625rem] border-t_mustard text-[0.8125rem] sm:text-[1.0625rem] xl:*:text-[0.875rem] z-[60]">
        <span className="absolute right-6 top-3  cursor-pointer"
          onClick={() => setShowSignIn(false)}>
          <RxCross2 color={theme === 'light' ? "black" : 'white'}
            size={20} />
        </span>

        <StateButtonContainer
          selected={selected}
          setSelected={setSelected}
        />

        <div className="flex flex-col gap-2 px-5 sm:px-10 mt-5">
          <button className="xl:w-auto flex gap-2 items-center justify-center w-full border-[0.1rem] border-t_black mx-auto rounded-full py-2 sm:px-11">
            <FcGoogle />
            <span className={`${albert_600.className} cursor-pointer whitespace-nowrap`}>Continue with Google</span>
          </button>

          <span className={`mx-auto ${albert.className}`}>or</span>
        </div>

        <form className="flex min-w-max flex-col items-center justify-center gap-5 px-5 sm:px-10">
          <AnimatedInput type="email" value={email} id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} font="text-[#9d9d9d] text-[0.875rem]" />
          <AnimatedInput type="password" value={password} id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} font="text-[#9d9d9d] text-[0.875rem]" />

          <CheckBox checked={checked} setChecked={setChecked} />

          <SubmitButton
            loading={signInLoading ?? signUpLoading}
            onClick={selected === Auth.LOGIN ? signInHook : signUpHook}
            className={`${albert_500.className}`}
          >
            {selected === Auth.LOGIN ? Auth.LOGIN : Auth.SIGNUP}
          </SubmitButton>

        </form>

        {selected === Auth.LOGIN && (
          <span className={`underline underline-offset-2 mx-auto mt-2 cursor-pointer ${albert_600.className}`}
            onClick={handleShowForgotPassword}
          >
            Forgot password?
          </span>
        )}

        <span className={`block mx-auto mt-8 ${albert.className}`}>
          {selected === Auth.LOGIN ? "Don't have an account?" : "Already a member?"}
          <span className={`underline underline-offset-2 cursor-pointer ml-2 ${albert_600.className}`}
            onClick={() => setSelected(
              selected === Auth.LOGIN ? Auth.SIGNUP : Auth.LOGIN
            )}
          >
            {selected === Auth.LOGIN ? "Sign Up" : "Log In"}
          </span>
        </span>

      </section>
    </dialog>
  )
}

export default SignInOrUp

