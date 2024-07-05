import { albert_500 } from '@/utils/fonts'
import { useFilterStore } from "@/state/client/filterState";

type SaveFilterButtonProps = {
  className?: string
}

export default function SaveFilterButton({ className }: SaveFilterButtonProps) {
  const { setShowNewFilterPopup } = useFilterStore()

  return (
    <button className={`bg-t_mustard rounded-full tracking-wider mx-auto whitespace-nowrap py-2 text-[14px] ${albert_500.className} text-black ${className}`}
      onClick={() => setShowNewFilterPopup(true)}
    >
      SAVE FILTER
    </button>
  )
}

