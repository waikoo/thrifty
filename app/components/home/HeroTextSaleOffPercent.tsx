type HeroTextSaleOffPercentProps = {
  children: React.ReactNode
  className: string
}

export default function HeroTextSaleOffPercent({ children, className }: HeroTextSaleOffPercentProps) {
  return (
    <span className={`absolute text-[6.875rem] sm:text-[15rem] xl:text-[11.25rem] left-0 right-0 mx-auto text-center font-avant_garde text-[#e8e500] text-shadow-upto shadow-black/50 ${className}`}>{children}</span>
  )
}

