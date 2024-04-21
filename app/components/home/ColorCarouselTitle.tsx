import { albert } from '@/utils/fonts'

export default function ColorCarouselTitle() {

  return (
    <p className="grid grid-cols-1 grid-rows-[auto_auto_auto] justify-items-center">
      <span className={`${albert.className} text-[0.8125rem] md:text-[1rem] lg:text-[1.25rem] tracking-[0.35rem] ml-2 md:tracking-[0.77rem] lg:tracking-[0.95rem] md:ml-4 lg:ml-5`}>DISCOVER YOUR</span>
      <span className={`${albert.className} text-[0.8125rem] md:text-[1rem] lg:text-[1.25rem] tracking-[0.35rem] ml-2 md:tracking-[0.77rem] lg:tracking-[0.95rem] ml:ml-4 lg:ml-4`}>PERFECT</span>
      <span className='font-futura_bold text-[3.125rem] md:text-[5rem] lg:text-[6.25rem] tracking-tightest -mt-3'>PALETTE</span>
    </p>
  )
}

