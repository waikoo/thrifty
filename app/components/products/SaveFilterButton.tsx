import { albert_500 } from '@/utils/fonts'
import { useFilterStore } from "@/state/client/filterState";

type SaveFilterButtonProps = {
  className?: string
  font?: string
}

export default function SaveFilterButton({ className, font = `${albert_500.className} text-[14px]` }: SaveFilterButtonProps) {
  const { setShowNewFilterPopup } = useFilterStore()

  return (
    <button className={`bg-t_mustard rounded-full tracking-wider mx-auto whitespace-nowrap py-2 text-black ${font} ${className}`}
      onClick={() => setShowNewFilterPopup(true)}
    >
      SAVE FILTER
    </button>
  )
}

