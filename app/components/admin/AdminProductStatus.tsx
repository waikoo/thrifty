import { ProductItemType } from "@/types/productItem";
import { ImEnlarge } from "react-icons/im";

type AdminProductStatusProps = {
  draft?: ProductItemType[]
  children: React.ReactNode
}

export default function AdminProductStatus({ draft, children }: AdminProductStatusProps) {
  return (
    <div className="absolute bottom-2 flex w-full justify-between px-6">
      <span className="font-bold">{children}: {draft?.length || '0'}</span>
      <ImEnlarge />
    </div>

  )
}
