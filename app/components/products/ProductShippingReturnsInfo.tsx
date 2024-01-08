"use client"
import { useState } from "react"

export default function ProductShippingReturnsInfo() {
  const [info, setInfo] = useState('shipping')
  const shippingStyle = info === 'shipping' ? 'text-content font-semibold' : 'font-regular text-grey'
  const returnsStyle = info === 'returns' ? 'text-content font-semibold' : 'font-regular text-grey'

  return (
    <div className="pt-8">
      <div className="flex w-full justify-between">
        <span className={`cursor-pointer ${shippingStyle}`} onClick={() => setInfo('shipping')}>SHIPPING INFO</span>
        <span className={`cursor-pointer ${returnsStyle}`} onClick={() => setInfo('returns')}>RETURNS INFO</span>
      </div>

      <div className="bg-faded text-bkg mt-5 p-5">
        {info === 'shipping' ? (
          <div className="flex flex-col gap-3">
            <p className="flex gap-1 text-[0.625rem] font-medium">
              <strong className="font-bold">€5</strong>
              <span>STANDARD DELIVERY (2-4 DAYS)</span>
            </p>

            <p className="flex gap-1 text-[0.625rem] font-medium">
              <strong className="font-bold">FREE</strong>
              <span>SHIPPING ABOVE €30</span>
            </p>

            <p className="flex gap-1 text-[0.625rem] font-medium">
              <strong className="font-bold">FREE</strong>
              <span>COLLECT FROM STORE</span>
            </p>
          </div>
        ) : (
          <div>
            <span>FREE<span>30-DAY RETURN POLICY</span></span>
          </div>
        )}
        <span className="font-regular block text-right text-[0.6875rem] underline underline-offset-4">More Info</span>
      </div>

    </div>
  )
}
