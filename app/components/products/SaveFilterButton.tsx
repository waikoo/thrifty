import { albert_700 } from '@/utils/fonts'
import { useFilterStore } from "@/state/client/filterState";

type SaveFilterButtonProps = {
  className?: string
  font?: string
}

export default function SaveFilterButton({ className, font = `${albert_700.className} text-[13px]` }: SaveFilterButtonProps) {
  const { setShowNewFilterPopup, setShowMiniFilters } = useFilterStore()

  return (
    <button className={`bg-t_mustard hover:bg-[#C9CC2C] rounded-full tracking-wider mx-auto whitespace-nowrap py-2 text-black ${font} ${className}`}
      onClick={() => {
        setShowMiniFilters(false)
        setShowNewFilterPopup(true)
      }}
    >
      SAVE FILTER
    </button>
  )
}

