'use client'

import { albert_800 } from '@/utils/fonts'
import CheckoutContactTitleIcons from '@/app/components/checkout/CheckoutContactTitleIcons'
import CheckoutContactTitleVisibility from '@/app/components/checkout/CheckoutContactTitleVisibility'

type CheckoutContactTitleProps = {
  number: string
  title: string
  isBlockHidden: boolean
}

export default function CheckoutContactTitle({
  number,
  title,
  isBlockHidden
}: CheckoutContactTitleProps) {

  return (
    <div className="relative flex items-center justify-between">
      <div className="bg-[#f2f2f2] absolute -top-[3.2rem] left-0 right-0 mx-auto grid h-[2.5rem] w-[2.5rem] place-items-center rounded-full">

        <CheckoutContactTitleIcons number={number} title={title} />

        <span className={`text-t_dark absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[13px] sm:text-[18px] xl:text-[14px] ${albert_800.className}`}>
          {' '}{number}{' '}
        </span>
      </div>

      <h2 className={`col-start-1 col-end-2 text-[13px] sm:text-[17px] xl:text-[15px] ${albert_800.className} ${isBlockHidden ? 'text-gray-500' : 'text-t_black'} tracking-wide`}>
        {title}
      </h2>

      <CheckoutContactTitleVisibility title={title} />
    </div>
  )
}
