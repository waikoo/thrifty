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
      <p className={`${albert_800.className} text-left w-full text-[13px] sm:text-[17px] xl:text-[15px]`}>{children}</p>

      <div className="bg-[#f2f2f2] rounded-[40px] p-6">

        <div className="text-[13px] sm:text-[17px] xl:text-[14px]">
          <span className={`${albert_600.className} text-right`}>Cost: </span>
          <span className={`${albert.className}`}>{cost}</span>
        </div>

        <div className="text-[13px] sm:text-[17px] xl:text-[14px]">
          <span className={`${albert_600.className}`}>Duration: </span>
          <span className={`${albert.className}`}>{duration} business days</span>
        </div>


        <div className="flex gap-1 text-[13px] sm:text-[17px] xl:text-[14px]">
          <span className={`${albert_600.className}`}>Details:</span>
          <p className={`${albert.className}`}>{details}</p>
        </div>

      </div>
    </div>
  )
}

