"use client"
import { useUIStore } from '@/state/uiState'
import { Auth, AuthModes } from '@/types/auth'
import { useState } from 'react'
import { CheckBox, SubmitButton } from './'
import { Input, StateButtonContainer } from './generic/'
import { useSignIn, useSignInOrUp, useSignUp, useUserEmail, useUserPassword } from './hooks'

const SignInOrUp = () => {
  const [selected, setSelected] = useState<AuthModes>(Auth.LOGIN)
  const [checked, setChecked] = useState(false)
  const { email, setEmail } = useUserEmail()
  const { password, setPassword } = useUserPassword()
  const { setShowSignIn } = useSignInOrUp()
  const setShowRecovery = useUIStore((state) => state.setShowRecovery)

  const { signInHook, loading: signInLoading } = useSignIn()
  const { signUpHook, loading: signUpLoading } = useSignUp()

  return (
    <>
      <span className="text-content absolute right-4 top-3  cursor-pointer" onClick={() => setShowSignIn(false)}>X</span>

      <StateButtonContainer
        selected={selected}
        setSelected={setSelected}
      />

      <form className="bg-bkg grid min-w-max place-items-center gap-5 pt-16">
        <Input type="email" value={email} setValue={setEmail} />
        <Input type="password" value={password} setValue={setPassword} />

        <CheckBox checked={checked} setChecked={setChecked} />

        <SubmitButton
          loading={signInLoading ?? signUpLoading}
          onClick={selected === Auth.LOGIN ? signInHook : signUpHook} >
          {selected === Auth.LOGIN ? Auth.LOGIN : Auth.SIGNUP}
        </SubmitButton>

        <span className="underline-offset-6 text-content cursor-pointer font-normal underline"
          onClick={() => setShowRecovery(true)}>
          Forgot password?
        </span>

        <div className="text-content flex gap-2">
          <span className="border-content cursor-pointer border-[0.1rem] p-2">F</span>
          <span className="border-content cursor-pointer border-[0.1rem] p-2">G</span>
          <span className="border-content cursor-pointer border-[0.1rem] p-2">A</span>
          <span className="border-content cursor-pointer border-[0.1rem] p-2">X</span>
        </div>

        <span className="text-content">Don&apos;t have an account?
          <span className="underline-offset-6 text-content font-normal underline" onClick={signUpHook} >Sign up </span>
        </span>

      </form>
    </>
  )
}

export default SignInOrUp

