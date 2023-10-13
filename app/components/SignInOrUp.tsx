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
      <span className="text-content absolute top-3 right-4  cursor-pointer" onClick={() => setShowSignIn(false)}>X</span>

      <StateButtonContainer
        selected={selected}
        setSelected={setSelected}
      />

      <form className="bg-bkg grid place-items-center gap-5 min-w-max pt-16">
        <Input type="email" value={email} setValue={setEmail} />
        <Input type="password" value={password} setValue={setPassword} />

        <CheckBox checked={checked} setChecked={setChecked} />

        <SubmitButton
          loading={signInLoading ?? signUpLoading}
          onClick={selected === Auth.LOGIN ? signInHook : signUpHook} >
          {selected === Auth.LOGIN ? Auth.LOGIN : Auth.SIGNUP}
        </SubmitButton>

        <span className="underline underline-offset-6 cursor-pointer text-content font-normal"
          onClick={() => setShowRecovery(true)}>
          Forgot password?
        </span>

        <div className="flex gap-2 text-content">
          <span className="p-2 border-[0.1rem] border-content cursor-pointer">F</span>
          <span className="p-2 border-[0.1rem] border-content cursor-pointer">G</span>
          <span className="p-2 border-[0.1rem] border-content cursor-pointer">A</span>
          <span className="p-2 border-[0.1rem] border-content cursor-pointer">X</span>
        </div>

        <span className="text-content">Don't have an account? <span
          className="underline underline-offset-6 font-normal text-content"
          onClick={signUpHook}
        >Sign up
        </span>
        </span>

      </form>
    </>
  )
}

export default SignInOrUp

