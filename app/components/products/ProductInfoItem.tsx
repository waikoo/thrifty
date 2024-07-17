import { albert_300, albert_500, albert_700 } from "@/utils/fonts"

type ProductInfoItemProps = {
  category: string
  children: React.ReactNode
  className?: string
  inverse?: boolean
}

export const ProductInfoItem = ({ category, children, className, inverse = false }: ProductInfoItemProps) => {
  const inverse1 = !inverse ? 'text-[0.75rem] font-semibold' : 'whitespace-nowrap text-[0.875rem] font-bold'
  const inverse2 = inverse ? 'whitespace-nowrap text-[0.75rem] font-semibold' : 'whitespace-nowrap text-[0.875rem] font-bold'
  const valueWeight = category === 'Estimated Delivery' ? albert_300.className : albert_700.className
  const categoryColor = category === 'Estimated Delivery' ? 'text-t_black' : 'text-[#484848]'

  return (
    <div className={`flex items-baseline gap-2 ${className}`}>
      <span className={`${inverse1} xl:text-[15px] ${albert_500.className} ${categoryColor}`}>
        {category}:
      </span>

      <span className={`${inverse2} xl:text-[15px] ${valueWeight}`}>
        {children}
      </span>
    </div>
  )
}
