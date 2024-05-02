"use client"
import { useState } from 'react'

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
  const { setShowSignIn } = useUIStore()
  const { theme } = useThemeStore()

  const { signInHook, loading: signInLoading } = useSignIn()
  const { signUpHook, loading: signUpLoading } = useSignUp()

  return (
    <dialog className="border-content fixed inset-0 flex place-items-center border-[0.1rem] rounded-[2.1875rem]">
      <section className="bg-t_white dark:bg-t_dark relative flex min-w-max flex-col gap-2 pt-10 pb-6 rounded-[2.1875rem] border-[0.625rem] border-t_mustard *:text-[0.875rem]">
        <span className="absolute right-4 top-3  cursor-pointer"
          onClick={() => setShowSignIn(false)}>
          <RxCross2 color={theme === 'light' ? "black" : 'white'}
            size={20} />
        </span>

        <StateButtonContainer
          selected={selected}
          setSelected={setSelected}
        />

        <div className="flex flex-col gap-2 px-10 mt-5">
          <button className="flex gap-2 items-center w-full border-[0.1rem] border-t_black mx-auto rounded-full py-2 px-11">
            <FcGoogle />
            <span className={`${albert_600.className} cursor-pointer`}>Continue with Google</span>
          </button>

          <span className={`mx-auto ${albert.className}`}>or</span>
        </div>

        <form className="flex min-w-max flex-col items-center justify-center gap-5 px-10">
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

        <span className={`underline underline-offset-2 mx-auto mt-2 cursor-pointer ${albert_600.className}`}>
          Forgot password?
        </span>

        <span className={`block mx-auto mt-8 ${albert.className}`}>
          Don't have an account?
          <span className={`underline underline-offset-2 cursor-pointer ml-2 ${albert_600.className}`}>
            Sign Up
          </span>
        </span>
      </section>
    </dialog>
  )
}

export default SignInOrUp

