type ProductInfoItemProps = {
  category: string
  children: React.ReactNode
  className?: string
  inverse?: boolean
}

export const ProductInfoItem = ({ category, children, className, inverse = false }: ProductInfoItemProps) => {
  const inverse1 = !inverse ? 'text-[0.75rem] font-semibold' : 'whitespace-nowrap text-[0.875rem] font-bold'
  const inverse2 = inverse ? 'whitespace-nowrap text-[0.75rem] font-semibold' : 'whitespace-nowrap text-[0.875rem] font-bold'

  return (
    <div className={`flex items-baseline gap-2 ${className}`}>
      <span className={`${inverse1}`}>
        {category}:
      </span>

      <span className={`${inverse2}`}>
        {children}
      </span>
    </div>
  )
}
