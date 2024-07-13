import IconDelete from "@/app/components/cart/icons/IconDelete";
import { borderRadius } from "../data/universalStyles";
import { useFilterStore } from "@/state/client/filterState";
import { albert_500 } from "@/utils/fonts";

type FilterItemProps = {
  children: React.ReactNode
  objectKey: string
}

export default function FilterItem({ children, objectKey }: FilterItemProps) {
  const { removeFilter } = useFilterStore()

  return (
    <div className={`border-bkg flex w-min items-baseline gap-4 whitespace-nowrap text-[13px] sm:text-[16px] xl:text-[13px] ${albert_500.className} ${borderRadius} mt-2 border-[0.1rem] bg-t_mustard px-5 py-2`}>
      <span>{children}</span>

      <div
        onClick={() => removeFilter(objectKey, children as string)}
      >
        <IconDelete size={"12"} className="ml-auto cursor-pointer" />
      </div>
    </div>
  )
}
