"use client"
import { albert, albert_500 } from "@/utils/fonts"

export default function NewsletterSubscription() {

  return (
    <section className={`text-t_black bg-t_mustard grid w-screen place-items-center gap-4 py-[4rem] text-[2rem]`}>
      <h3 className="font-allenoire max-w-[300px] text-center text-[1.5rem] md:text-[2.1875rem] xl:text-[3.125rem] whitespace-nowrap flex flex-col items-center">subscribe to our <span className="-mt-2">newsletter</span></h3>

      <form className="flex flex-col gap-7 w-[80%] max-w-[400px] xl:max-w-[350px]">
        <input
          type="text"
          placeholder="Enter your email address"
          className={`bg-bkg text-content flex-grow p-2 border-0 bg-transparent border-b-[0.12rem] border-t_black focus:outline-0 ${albert.className} text-[0.8125rem] md:text-[1rem] tracking-wide text-[#484848]`}
          spellCheck="false"
        />
        <button className={`bg-t_black text-t_white rounded-full p-3 text-[0.8125rem] tracking-wide xl:max-w-[70%] xl:px-8 xl:py-2 xl:mt-3 xl:mx-auto ${albert_500.className}`}>SUBSCRIBE</button>
      </form>
    </section>
  )
}
