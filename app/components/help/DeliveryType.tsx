import { albert, albert_600, albert_800 } from "@/utils/fonts"

export type DeliveryTypeProps = {
  children: React.ReactNode
  cost: string
  duration?: string
  details: string
}

export default function DeliveryType({ children, cost, duration, details }: DeliveryTypeProps) {

  return (
    <div className="w-full">
      <p className={`${albert_800.className} mt-8 xl:mt-0 text-left w-full text-[13px] sm:text-[17px] xl:text-[15px]`}>{children}</p>

      <div className="mt-3 bg-[#f2f2f2] grid grid-cols-[auto_auto] gap-2 rounded-[40px] p-6 text-[13px] sm:text-[17px] xl:text-[14px]">

        <span className={`${albert_600.className} text-right`}>Cost: </span>
        <span className={`${albert.className}`}>{cost}</span>

        <span className={`${albert_600.className}`}>Duration: </span>
        <span className={`${albert.className}`}>{duration} business days</span>

        <span className={`${albert_600.className} text-right`}>Details:</span>
        <p className={`${albert.className}`}>{details}</p>

      </div>
    </div>
  )
}

