"use client"
import React, { useState } from 'react'
import { HeroCarouselNavigator } from '.'

const HeroCarousel = () => {
  const [selectedCircle, setSelectedCircle] = useState(0);
  const dynamicTitle = selectedCircle === 0 ? 'NEW IN' : selectedCircle === 1 ? 'PROMOS' : 'FILTERS'

  return (
    <section className="flex flex-col gap-5 max-h-fit max-w-full pt-2">
      <div className={`flex gap-2 px-12 rounded-[2.8125rem] m-0 bg-content text-bkg max-w-[calc(100% - 28xp)] max-h-fit `}>
        <div className="bg-green-200 flex flex-8 flex-grow">
          <img src="https://loremflickr.com/150/450/clothes,europe/all" alt="" className="w-1/4 border max-w-full" />
          <img src="https://loremflickr.com/150/450/clothes,europe/all" alt="" className="w-1/4 border max-w-full" />
          <img src="https://loremflickr.com/380/450/clothes,europe/all" alt="" className="w-2/4 border max-w-full" />
        </div>

        <article className="grid grid-rows-2 gap-5 py-10 max-h-[100%] max-w-[20%]">
          <h1 className="vertical-text text-5xl font-bold ml-auto height-half self-end mb-5">
            {dynamicTitle}
          </h1>
          <div className={`flex flex-col gap-10 max-w-[90%] pr-0 pl-5 ml-auto height-sm max-h-full self-start `}>
            <p className="text-xs font-light ml-auto min-w-xs pl-auto leading-none">
              Lorem ipsum dolor sit amet consectetur. Vitae orci libero posuere quis elementum non feugiat mi tellus. Nam pellentesque parturient rhoncus odio. Tristique cras cursus in massa nunc tempor adipiscing gravida.
            </p>
            <button className="border-2 px-5 py-2 text-xs block">SHOP NOW</button>
          </div>
        </article>
      </div>
      <HeroCarouselNavigator selectedCircle={selectedCircle} setSelectedCircle={setSelectedCircle} />
    </section>
  )
}

export default HeroCarousel
