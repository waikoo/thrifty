import { albert_500 } from "@/utils/fonts"

type FilteredResultsProps = {
  children: React.ReactNode
  className?: string
}

export default function FilteredResults({ children, className }: FilteredResultsProps) {

  return (
    <span className={`${albert_500.className} text-[#616161] sm:text-[17px] xl:text-[14px] ${className}`}>
      {children} Results
    </span>
  )
}

