import { albert, albert_800 } from "@/utils/fonts"

type OpeningHoursProps = {
  textSize?: string
  tracking?: string
  theme?: string
  invert?: boolean
}

export default function OpeningHours({ textSize, tracking, theme, invert }: OpeningHoursProps) {
  const weekdaysColor = invert ? `text-t_black` : "text-t_white"
  const textColor = invert ? 'text-t_black' : "text-[#c2c2c2]"

  return (
    <div className={`footerText flex flex-col gap-7 ${textSize}`}>
      <span className={`text-[13px] sm:text-[17px] xl:text-[16px] whitespace-nowrap ${albert_800.className} ${weekdaysColor}`}>STORE OPENING HOURS</span>

      <div className={`flex flex-col gap-2 whitespace-nowrap ${tracking}`}>
        <span>
          <span className={`text-[13px] sm:text-[17px] xl:text-[14px] ${albert_800.className} ${weekdaysColor}`}>MO-FRI: </span>
          <span className={`${textColor} text-[13px] sm:text-[17px] xl:text-[16px] ${albert.className}`}>08:00 - 18:00</span>
        </span>

        <span>
          <span className={`text-[13px] sm:text-[17px] xl:text-[14px] ${albert_800.className} ${weekdaysColor}`}>SAT: </span>
          <span className={`${textColor} text-[13px] sm:text-[17px] xl:text-[16px] ${albert.className}`}>09:00 - 14:00</span>
        </span>

        <span>
          <span className={`text-[13px] sm:text-[17px] xl:text-[14px] ${albert_800.className} ${weekdaysColor}`}>SUN: </span>
          <span className={`${textColor} text-[13px] sm:text-[17px] xl:text-[16px] ${albert.className}`}>Closed</span>
        </span>

        <span className={`whitespace-nowrap pt-4 ${textColor} ${albert.className} text-[13px] sm:text-[17px] xl:text-[16px]`}>Lemon Road 23, Lime Town</span>

      </div>
    </div>
  )
}
