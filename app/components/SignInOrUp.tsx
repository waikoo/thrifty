"use client"
import React, { useState } from 'react'
import { Button, Input, StateButton } from './'
import { useAuthMethods, useUserSession, useUserEmail, useUserPassword } from './hooks'
import { Auth, AuthModes } from '@/types/auth'

const SignInOrUp = () => {
  const [selected, setSelected] = useState<AuthModes>(Auth.LOGIN)
  const [checked, setChecked] = useState(false)
  const session = useUserSession()

  const { email, setEmail } = useUserEmail()
  const { password, setPassword } = useUserPassword()
  const { signIn, signUp } = useAuthMethods()

  //     email: email,
  //     password: password
  //   })
  //   console.log(error?.message)
  // }

  // const signIn = async () => {
  //   let { data, error } = await supabase.auth.signInWithPassword({
  //     email: email,
  //     password: password
  //   })
  //   console.log(error?.message)
  //   console.log(data)
  //   // if (data.user) {
  //   //   setUser(data.user.id)
  //   // }
  // }

  return (
    <dialog className="fixed inset-0 flex place-items-center border-[0.1rem] border-content ">
      <section className="p-10 min-w-max bg-bkg flex flex-col gap-16">

        <div className="flex w-4/5 mx-auto">
          <StateButton
            selected={selected === 'login'}
            authValue={Auth.LOGIN}
            setSelected={setSelected}
          >Log In</StateButton>

          <StateButton
            selected={selected === 'signup'}
            authValue={Auth.SIGNUP}
            setSelected={setSelected}
          >Sign Up</StateButton>
        </div>

        <form className="bg-bkg flex items-center flex-col gap-5 justify-center min-w-max ">
          <Input type="email" value={email} setValue={setEmail} />
          <Input type="password" value={password} setValue={setPassword} />

          <label htmlFor="radio" className="flex gap-2 min-w-full text-content user-select-none">
            <input type="checkbox" id="radio" className="pr-2" checked={checked} onChange={() => setChecked(!checked)} />
            <span className="no-select">Keep me logged in</span>
          </label>

          <Button submit selected
            onClick={selected === Auth.LOGIN ? signIn : signUp}
          >
            {selected === Auth.LOGIN ? 'Log In' : 'Sign Up'}
          </Button>

        </form>
      </section>
    </dialog>
  )
}

export default SignInOrUp

