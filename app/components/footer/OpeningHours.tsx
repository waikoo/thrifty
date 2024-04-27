type OpeningHoursProps = {
  textSize: string
  tracking: string
  theme: string
}

export default function OpeningHours({ textSize, tracking, theme }: OpeningHoursProps) {
  const weekdaysColor = theme === 'light' ? "text-t_black" : "text-t_white"
  const textColor = theme === 'light' ? "text-[#484848]" : "text-[#c2c2c2]"

  return (
    <div className={`footerText flex flex-col gap-7 ${textSize}`}>
      <h5 className={`text-[0.875rem] font-bold`}>Store Opening Hours</h5>

      <div className={`flex flex-col gap-2 whitespace-nowrap ${tracking}`}>
        <span className={weekdaysColor}>MO-FRI: <span className={textColor}>08:00 - 18:00</span></span>
        <span className={weekdaysColor}>SAT: <span className={textColor}>09:00 - 14:00</span></span>
        <span className={weekdaysColor}>SUN: <span className={textColor}>Closed</span></span>
        <span className={`whitespace-nowrap pt-4 ${textColor}`}>Lemon Road 23, Lime Town</span>
      </div>
    </div>
  )
}
