import { albert_800 } from "@/utils/fonts";

type SavedFiltersTitle = {
  className?: string
}

export default function SavedFiltersTitle({ className }: SavedFiltersTitle) {
  return (
    <h1 className={`${className} text-t_black xl:text-center text-[13px] sm:text-[19px] xl:text-[14px] ${albert_800.className}`}>
      SAVED FILTERS
    </h1>
  )
}

