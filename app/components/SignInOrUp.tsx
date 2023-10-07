"use client"
import React, { useState } from 'react'
import { SubmitButton, Input, StateButton, StateButtonContainer } from './'
import { useAuthMethods, useUserSession, useUserEmail, useUserPassword, useSignIn, useSignUp } from './hooks'
import { Auth, AuthModes } from '@/types/auth'

const SignInOrUp = () => {
  const [selected, setSelected] = useState<AuthModes>(Auth.LOGIN)
  const [checked, setChecked] = useState(false)
  const { email, setEmail } = useUserEmail()
  const { password, setPassword } = useUserPassword()

  // const session = useUserSession()
  // const { signIn, signUp } = useAuthMethods()

  return (
    <dialog className="fixed inset-0 flex place-items-center border-[0.1rem] border-content ">
      <section className="p-10 min-w-max bg-bkg flex flex-col gap-16">

        <StateButtonContainer
          selected={selected}
          setSelected={setSelected}
        />

        <form className="bg-bkg flex items-center flex-col gap-5 justify-center min-w-max ">
          <Input type="email" value={email} setValue={setEmail} />
          <Input type="password" value={password} setValue={setPassword} />

          <label htmlFor="radio" className="flex gap-2 min-w-full text-content user-select-none">
            <input type="checkbox" id="radio" className="pr-2" checked={checked} onChange={() => setChecked(!checked)} />
            <span className="no-select">Keep me logged in</span>
          </label>

          <SubmitButton onClick={selected === Auth.LOGIN ? useSignIn : useSignUp} >
            {selected === Auth.LOGIN ? Auth.LOGIN : Auth.SIGNUP}
          </SubmitButton>

        </form>
      </section>
    </dialog>
  )
}

export default SignInOrUp

