import { useEffect } from "react"

import { top } from "@/app/components/data"
import { capitalize } from "@/utils/capitalize"
import { useProductStore } from "@/state/admin/uploadNewProductToDb"
import { useUIStore } from "@/state/uiState"

export default function useDynamicCategory(name: string) {
  const { type, setCategory } = useProductStore()
  const { setDynamicCategory } = useUIStore()

  useEffect(() => {
    const contentList = Object.values(top[2].content)
    for (let i = 1; i < contentList.length; i++) {
      if (contentList[i].includes(capitalize(type))) {
        const typeKeys = Object.keys(top[2].content)
        typeKeys.forEach((key) => {
          if (((top[2].content as { [key: string]: string[] }))[key].includes(capitalize(type))) {
            if (name === 'PRODUCT TYPE') setDynamicCategory(capitalize(key))
            if (name === 'CATEGORY') setCategory(key)
          }
        })
      }
    }
  }, [type])
}
