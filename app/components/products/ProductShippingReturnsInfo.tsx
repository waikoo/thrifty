"use client"
import { albert, albert_500, albert_600, albert_700 } from "@/utils/fonts"
import getLangAndGender from "@/utils/getLangAndGender"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function ProductShippingReturnsInfo() {
  const pathname = usePathname()
  const { lang, gender } = getLangAndGender(pathname)
  const [info, setInfo] = useState('shipping')
  const selectedStyles = `text-t_black ${albert_600.className}`
  const unselectedStyles = `${albert.className} text-[#9d9d9d]`
  const shippingStyle = info === 'shipping' ? selectedStyles : unselectedStyles
  const returnsStyle = info === 'returns' ? selectedStyles : unselectedStyles

  return (
    <div className="pt-8">
      <div className="flex w-full justify-between">
        <span className={`cursor-pointer xl:text-[14px] ${shippingStyle}`} onClick={() => setInfo('shipping')}>SHIPPING INFO</span>
        <span className={`cursor-pointer xl:text-[14px] ${returnsStyle}`} onClick={() => setInfo('returns')}>RETURNS INFO</span>
      </div>

      <div className="bg-[#f2f2f2] xl:text-[12px] text-t_black dark:text-t_white mt-2 h-[7.8rem] p-5 relative">
        {info === 'shipping' ? (
          <div className="flex flex-col gap-3">
            <p className="flex gap-1">
              <strong className={`${albert_700.className}`}>€5</strong>
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

        <Link href={`/${lang}/${gender}/help?section=1`}
          className={`${albert_500.className} absolute cursor-pointer text-right underline underline-offset-4 bottom-3 right-3`}>
          More Info
        </Link>
      </div>

    </div>
  )
}
