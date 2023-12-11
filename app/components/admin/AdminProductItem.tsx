import { ProductItemType } from "@/types/productItem";
import { capitalize } from "@/utils/capitalize";

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
      <span className="justify-self-end">{children}: </span>
      <span className="justify-self-start">{getValue(type)}</span>
    </>
  )
}
