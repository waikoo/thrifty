"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

const HeroCarousel = () => {
  const params = useSearchParams()
  const carouselBg = params.get('theme') === 'dark' ? 'bkg' : 'content'
  const carouselText = params.get('theme') === 'dark' ? 'content' : 'bkg'

  return (
    <>
      <section className={`flex gap-2 px-12 rounded-3xl m-0 bg-${carouselBg} text-${carouselText} max-w-full`}>
        <img src="https://picsum.photos/150/220" alt="" className="w-1/3 border" />
        <img src="https://picsum.photos/150/220" alt="" className="w-1/3 border" />
        <img src="https://picsum.photos/250/220" alt="" className="w-2/3 border" />
        <article className="flex flex-col justify-around gap-2 py-12 items-end gap-10">
          <h1 className="vertical-text text-5xl font-bold ml-auto">NEW IN</h1>
          <div className="flex flex-col gap-10 px-8 self-right max-w-xs">
            <p className="max-w-xs text-xs font-light ml-auto leading-tight ">Lorem ipsum dolor sit amet consectetur. Vitae orci libero posuere quis elementum non feugiat mi tellus. Nam pellentesque parturient rhoncus odio. Tristique cras cursus in massa nunc tempor adipiscing gravida.</p>
            <button className="border-2 px-5 py-2 text-xs">SHOP NOW</button>
          </div>
        </article>
      </section>
    </>
  )
}

export default HeroCarousel
