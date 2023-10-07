"use client"
import React, { useState } from 'react'
import { SubmitButton, Input, StateButton, StateButtonContainer, Spinner, CheckBox } from './'
import { useAuthMethods, useUserSession, useUserEmail, useUserPassword, useSignIn, useSignUp } from './hooks'
import { Auth, AuthModes } from '@/types/auth'

type SignInOrUpProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const SignInOrUp = ({ setShow }: SignInOrUpProps) => {
  const [selected, setSelected] = useState<AuthModes>(Auth.LOGIN)
  const [checked, setChecked] = useState(false)
  const { email, setEmail } = useUserEmail()
  const { password, setPassword } = useUserPassword()

  const { signInHook, loading } = useSignIn(setShow)
  // const session = useUserSession()
  // const { signIn, signUp } = useAuthMethods()

  return (
    <dialog className="fixed inset-0 flex place-items-center border-[0.1rem] border-content ">
      <section className="p-10 min-w-max bg-bkg flex flex-col gap-16 relative">
        <span className="text-content absolute top-3 right-4  cursor-pointer" onClick={() => setShow(false)}>X</span>
        <StateButtonContainer
          selected={selected}
          setSelected={setSelected}
        />

        <form className="bg-bkg flex items-center flex-col gap-5 justify-center min-w-max ">
          <Input type="email" value={email} setValue={setEmail} />
          <Input type="password" value={password} setValue={setPassword} />

          <CheckBox checked={checked} setChecked={setChecked} />
          {loading ? <Spinner /> : null}
          <SubmitButton onClick={selected === Auth.LOGIN ? signInHook : useSignUp} >
            {selected === Auth.LOGIN ? Auth.LOGIN : Auth.SIGNUP}
          </SubmitButton>

        </form>
      </section>
    </dialog>
  )
}

export default SignInOrUp

