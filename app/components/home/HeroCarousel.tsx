"use client"
import React, { useState } from 'react'
import { HeroCarouselNavigator } from '.'

const HeroCarousel = () => {
  const [selectedCircle, setSelectedCircle] = useState(0);
  const dynamicTitle = selectedCircle === 0 ? 'NEW IN' : selectedCircle === 1 ? 'PROMOS' : 'FILTERS'

  return (
    <section className="flex flex-col gap-5 max-h-fit max-w-full">
      <div className={`flex gap-2 px-12 rounded-[2.8125rem] m-0 bg-content text-bkg max-w-[calc(100% - 28xp)] max-h-fit `}>
        <div className="bg-green-200 flex flex-8 flex-grow">
          <img src="https://picsum.photos/150/480" alt="" className="w-1/4 border max-w-full" />
          <img src="https://picsum.photos/150/480" alt="" className="w-1/4 border max-w-full" />
          <img src="https://picsum.photos/380/480" alt="" className="w-2/4 border max-w-full" />
        </div>

        <article className="grid grid-rows-2 items-center py-2 max-h-[100%] max-w-[25%]">
          <h1 className="vertical-text text-5xl font-bold ml-auto height-half">
            {dynamicTitle}
          </h1>
          <div className={`flex flex-col gap-10 max-w-[90%] pr-0 self-center ml-auto height-half max-h-full`}>
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
