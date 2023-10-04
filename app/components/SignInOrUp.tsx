import React, { useState } from 'react'
import Button from './Button'

const SignInOrUp = () => {
  const [checked, setChecked] = useState(false)

  return (
    <dialog className="fixed inset-0 flex items-center justify-center border-[0.1rem] border-content">
      <section className="p-10 min-w-max bg-bkg flex flex-col gap-16">

        <div className="flex w-4/5 mx-auto">
          <Button>Log In</Button>
          <Button inverse border>Sign Up</Button>
        </div>

        <form className="bg-bkg flex items-center flex-col gap-5 justify-center min-w-max ">
          <input type="email" placeholder="Email" className="p-2 border-fade border-2" />
          <input type="password" placeholder="Password" className="p-2 border-fade border-2" />
          <label htmlFor="radio" className="flex gap-2 min-w-full text-content user-select-none">
            <input type="checkbox" id="radio" className="pr-2" checked={checked} onChange={() => setChecked(!checked)} />
            <span className="no-select">Keep me logged in</span>
          </label>
          <Button>Log In</Button>border 
        </form>

      </section>
    </dialog>
  )
}

export default SignInOrUp
