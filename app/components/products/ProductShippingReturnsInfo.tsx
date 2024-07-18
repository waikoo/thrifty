"use client"
import { useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { albert, albert_500, albert_600, albert_700 } from "@/utils/fonts"
import getLangAndGender from "@/utils/getLangAndGender"

type ProductShippingReturnsInfoProps = {
  className: string
}

export default function ProductShippingReturnsInfo({ className }: ProductShippingReturnsInfoProps) {
  const pathname = usePathname()
  const { lang, gender } = getLangAndGender(pathname)
  const [info, setInfo] = useState('shipping')
  const selectedStyles = `text-t_black ${albert_600.className}`
  const unselectedStyles = `${albert.className} text-[#9d9d9d]`
  const shippingStyle = info === 'shipping' ? selectedStyles : unselectedStyles
  const returnsStyle = info === 'returns' ? selectedStyles : unselectedStyles

  return (
    <div className={`${className} pt-8 w-full whitespace-nowrap min-w-[280px] sm:min-w-[330px]`}>
      <div className={`flex w-full gap-3 justify-between`}>
        <span className={`cursor-pointer text-[13px] sm:text-[17px] xl:text-[14px] ${shippingStyle}`} onClick={() => setInfo('shipping')}>SHIPPING INFO</span>
        <span className={`cursor-pointer text-[13px] sm:text-[17px] xl:text-[14px] ${returnsStyle}`} onClick={() => setInfo('returns')}>RETURNS INFO</span>
      </div>

      <div className="bg-[#f2f2f2] text-[12px] sm:text-[16px] xl:text-[12px] text-t_black dark:text-t_white mt-2 p-5 relative min-w-[280px] sm:min-w-[330px]">
        {info === 'shipping' ? (
          <div className="flex flex-col gap-3">
            <p className="flex gap-1">
              <strong className={`${albert_700.className}`}>€15</strong>
              <span className={`${albert.className}`}>STANDARD DELIVERY (2-4 DAYS)</span>
            </p>

            <p className="flex gap-1">
              <strong className={`${albert_700.className}`}>FREE</strong>
              <span className={`${albert.className}`}>SHIPPING ABOVE €30</span>
            </p>

            <p className="flex gap-1">
              <strong className={`${albert_700.className}`}>FREE</strong>
              <span className={`${albert.className}`}>COLLECT FROM STORE</span>
            </p>
          </div>
        ) : (
          <p className="flex gap-1">
            <strong className={`${albert_700.className}`}>FREE</strong>
            <span className={`${albert.className}`}>30-DAY RETURN POLICY</span>
          </p>
        )}

        <p className="text-right">
          <Link href={`/${lang}/${gender}/help?section=1`}
            className={`${albert_500.className} m-0 cursor-pointer ml-auto underline underline-offset-4`}>
            More Info
          </Link>
        </p>
      </div>

    </div>
  )
}
