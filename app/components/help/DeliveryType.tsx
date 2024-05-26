import { albert_500, albert_600, albert_800 } from "@/utils/fonts"

export type DeliveryTypeProps = {
  children: React.ReactNode
  cost: string
  duration?: string
  details: string
}

export default function DeliveryType({ children, cost, duration, details }: DeliveryTypeProps) {

  return (
    <div className="">
      <span className={`${albert_800.className} xl:text-[15px]`}>{children}</span>

      <div className="bg-[#f2f2f2] rounded-[40px] p-6">

        <div className="xl:text-[14px]">
          <span className={`${albert_600.className} text-right`}>Cost: </span>
          <span className={`${albert_500.className}`}>{cost}</span>
        </div>

        <div className="xl:text-[14px]">
          <span className={`${albert_600.className}`}>Duration: </span>
          <span className={`${albert_500.className}`}>{duration} business days</span>
        </div>


        <div className="flex gap-1 xl:text-[14px]">
          <span className={`${albert_600.className}`}>Details:</span>
          <p className={`${albert_500.className}`}>{details}</p>
        </div>

      </div>
    </div>
  )
}

