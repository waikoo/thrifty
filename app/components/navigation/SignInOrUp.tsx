"use client"
import { Auth, AuthModes } from '@/types/auth'
import { useState } from 'react'
import { Input, StateButtonContainer, SubmitButton } from '../generic'
import CheckBox from '../generic/CheckBox'
import { useSignIn, useSignUp, useUserEmail, useUserPassword } from '../hooks'
import { useUIStore } from '@/state'

const SignInOrUp = () => {
  const [selected, setSelected] = useState<AuthModes>(Auth.LOGIN)
  const [checked, setChecked] = useState(false)
  const { email, setEmail } = useUserEmail()
  const { password, setPassword } = useUserPassword()
  const { setShowSignIn } = useUIStore()

  const { signInHook, loading: signInLoading } = useSignIn()
  const { signUpHook, loading: signUpLoading } = useSignUp()

  return (
    <dialog className="border-content fixed inset-0 flex place-items-center border-[0.1rem] ">
      <section className="bg-bkg relative flex min-w-max flex-col gap-16 p-10">
        <span className="text-content absolute right-4 top-3  cursor-pointer" onClick={() => setShowSignIn(false)}>X</span>
        <StateButtonContainer
          selected={selected}
          setSelected={setSelected}
        />

        <form className="bg-bkg flex min-w-max flex-col items-center justify-center gap-5 ">
          <Input type="email" value={email} setValue={setEmail} />
          <Input type="password" value={password} setValue={setPassword} />

          <CheckBox checked={checked} setChecked={setChecked} />
          <SubmitButton
            loading={signInLoading ?? signUpLoading}
            onClick={selected === Auth.LOGIN ? signInHook : signUpHook} >
            {selected === Auth.LOGIN ? Auth.LOGIN : Auth.SIGNUP}
          </SubmitButton>

        </form>
      </section>
    </dialog>
  )
}

export default SignInOrUp

