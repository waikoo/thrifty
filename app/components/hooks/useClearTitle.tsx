import { usePathname, useSearchParams } from "next/navigation"

export default function useClearTitle(type: string) {
  let queryParamToDelete: string
  if (type.split(' ').length > 1) {
    queryParamToDelete = type.split(' ').join('-').toLowerCase()
  } else {
    queryParamToDelete = type.toLowerCase()
  }

  const sp = useSearchParams()
  const pathname = usePathname()
  const searchP = new URLSearchParams(sp)
  searchP.delete(queryParamToDelete)

  const newSearchParams = searchP.toString()
  const clearedLink = `${pathname}?${newSearchParams}`

  return clearedLink
}
