import React, { useState } from 'react'

const SignInOrUp = () => {
  const [checked, setChecked] = useState(false)

  {/* <dialog className="absolute min-w-full h-5/7 bg-transparent top-64 right-2 flex items-center justify-center p-6 "> */ }
  return (
    <dialog className="fixed inset-0 flex items-center justify-center">
      <section className="p-10 min-w-max bg-bkg flex flex-col gap-16">

        <div className="flex w-4/5 mx-auto">
          <button className="bg-content text-bkg block w-full p-2">Log In</button>
          <button className="bg-bkg text-content block w-full p-2 border-black border-2">Sign Up</button>
        </div>

        <form className="bg-bkg flex items-center flex-col gap-5 justify-center min-w-max ">
          <input type="email" placeholder="Email" className="p-2 border-fade border-2" />
          <input type="password" placeholder="Password" className="p-2 border-fade border-2" />
          <label htmlFor="radio" className="flex gap-2 min-w-full">
            <input type="checkbox" id="radio" className="pr-2" checked={checked} onChange={() => setChecked(!checked)} />
            Keep me logged in
          </label>
          <button className="bg-content text-bkg block w-full p-2">Log In</button>
        </form>

      </section>
    </dialog>
  )
}

export default SignInOrUp
