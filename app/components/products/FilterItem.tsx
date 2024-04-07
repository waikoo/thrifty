import IconDelete from "@/app/components/cart/icons/IconDelete";
import { borderRadius } from "../data/universalStyles";
import { useFilterStore } from "@/state/client/filterState";

type FilterItemProps = {
  children: React.ReactNode
  objectKey: string
}

export default function FilterItem({ children, objectKey }: FilterItemProps) {
  const { removeFilter } = useFilterStore()

  return (
    <div className={`border-bkg flex w-min items-baseline gap-4 whitespace-nowrap text-[0.8125rem] font-medium ${borderRadius} mt-2 border-[0.1rem] bg-gray-200 px-5 py-2`}>
      <span>{children}</span>
      <div
        onClick={() => removeFilter(objectKey, children as string)}
      >
        <IconDelete size={"15"} className="ml-auto cursor-pointer" />
      </div>
    </div>
  )
}
