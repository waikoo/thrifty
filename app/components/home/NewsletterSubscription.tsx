"use client"
import { useState } from "react"
import { albert_600 } from "@/utils/fonts"

import AnimatedInput from "@/app/components/AnimatedInput"

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (data.success) {
      alert("You are now subscribed to our newsletter!");
    }
  };

  return (
    <section className={`text-t_black bg-t_mustard grid w-screen place-items-center gap-4 py-[4rem] text-[35px]`}>
      <h3 className="font-allenoire max-w-[300px] text-center text-[2rem] md:text-[2.1875rem] xl:text-[3.125rem] whitespace-nowrap flex flex-col items-center">
        subscribe to our
        <span className="-mt-2">newsletter</span>
      </h3>

      <form className="flex flex-col gap-7 w-[80%] max-w-[400px] xl:max-w-[350px]" onSubmit={handleSubmit}>
        <AnimatedInput type="text" id="newsletter" placeholder="Enter your email address" value={email} onChange={handleOnChange} />

        <button className={`bg-t_black text-t_white rounded-full p-3 text-[20px] tracking-wide w-full xl:px-8 xl:py-3 xl:mt-3 xl:mx-auto ${albert_600.className}`}>
          SUBSCRIBE
        </button>
      </form>
    </section>
  )
}
