import { albert } from '@/utils/fonts'
import React from 'react'

export default function ColorCarouselTitle() {

  return (
    <p className="grid grid-cols-1 grid-rows-[auto_auto_auto] justify-items-center">
      <span className={`${albert.className} text-[0.8125rem] tracking-[0.2rem]`}>DISCOVER YOUR</span>
      <span className={`${albert.className} text-[0.8125rem] tracking-[0.2rem]`}>PERFECT</span>
      <span className='font-futura text-[3.125rem] tracking-tighter -mt-3'>PALETTE</span>
    </p>
  )
}

