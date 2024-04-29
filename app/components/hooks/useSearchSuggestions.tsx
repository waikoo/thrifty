import { useEffect, useState } from "react"

import { supabase } from "@/app/supabase"
import { ProductItemType } from "@/types/productItem"
import { completeWord } from "@/utils/home"

export default function useSearchSuggestions(showSuggestions: boolean, searchTerm: string, setCompletedWord: React.Dispatch<React.SetStateAction<string>>) {
  const [suggestions, setSuggestions] = useState<ProductItemType[] | []>([])

  useEffect(() => {
    const getResults = async (): Promise<ProductItemType[] | []> => {
      if (!searchTerm) {
        return []
      }
      const columns = ['gender', 'type', 'category', 'brand']
      let results: ProductItemType[] = []

      for (const column of columns) {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .ilike(column, `%${searchTerm}%`)
          .order('created_at', { ascending: false })
          .limit(5)

        if (error) {
          console.error(error)
        }

        if (data) {
          results = [...results, ...data]
          setCompletedWord(completeWord(searchTerm, data, columns) as string)
        }
      }
      const uniqueResults = Array.from(
        new Set(results.map(item => item.uuid))
      ).map(id => results.find(item => item.uuid === id))
        .filter((item): item is ProductItemType => item !== undefined);

      return uniqueResults
    }

    getResults().then((results) => {
      if (results) {
        setSuggestions(results)
      }
    })

  }, [showSuggestions, searchTerm])

  return { suggestions }
}

