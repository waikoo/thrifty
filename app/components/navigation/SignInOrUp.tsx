"use client"
import { Auth, AuthModes } from '@/types/auth'
import { useState } from 'react'
import { Input, StateButtonContainer } from '..'
import { SubmitButton } from '../generic'
import CheckBox from '../generic/CheckBox'
import { useSignIn, useSignInOrUp, useSignUp, useUserEmail, useUserPassword } from '../hooks'

const SignInOrUp = () => {
  const [selected, setSelected] = useState<AuthModes>(Auth.LOGIN)
  const [checked, setChecked] = useState(false)
  const { email, setEmail } = useUserEmail()
  const { password, setPassword } = useUserPassword()
  const { setShowSignIn } = useSignInOrUp()

  const { signInHook, loading: signInLoading } = useSignIn()
  const { signUpHook, loading: signUpLoading } = useSignUp()

  return (
    <dialog className="fixed inset-0 flex place-items-center border-[0.1rem] border-content ">
      <section className="p-10 min-w-max bg-bkg flex flex-col gap-16 relative">
        <span className="text-content absolute top-3 right-4  cursor-pointer" onClick={() => setShowSignIn(false)}>X</span>
        <StateButtonContainer
          selected={selected}
          setSelected={setSelected}
        />

        <form className="bg-bkg flex items-center flex-col gap-5 justify-center min-w-max ">
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

