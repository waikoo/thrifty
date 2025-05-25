import { capitalize } from "@/utils/capitalize";
import { getDayMonthYear } from "@/utils/getDayMonthYear";

type AdminProductItemProps = {
  children: React.ReactNode
  type: string | number
}

export default function AdminProductItem({ children, type }: AdminProductItemProps) {
  const getValue = (type: string | number) => {
    switch (typeof type) {
      case 'string': return capitalize(type);
      case 'number': return children === 'PRICE' ? `€${type}` : type === 0 ? '-' : type;
      default:
        throw new Error('"name" in getValue() from AdminProductItem does not match')
    }
  }

  return (
    <>
      <span className="justify-self-end text-[0.6875rem] font-light text-[#E6E6E6]">
        {children}:
      </span>

      <span className="justify-self-start whitespace-nowrap text-[0.75rem] font-medium text-[#E6E6E6]">
        {children === 'DATE ADDED' ? getDayMonthYear(type as string) : getValue(type)}
      </span>
    </>
  )
}
