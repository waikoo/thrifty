import { useEffect, useState } from "react"

import { supabase } from "@/app/supabase"
import { ProductItemType } from "@/types/productItem"
import { completeWord } from "@/utils/home"
import { Gender } from "@/types/link"

export default function useSearchSuggestions(showSuggestions: boolean, searchTerm: string, gender: Gender, setCompletedWord: React.Dispatch<React.SetStateAction<string>>) {
  const [suggestions, setSuggestions] = useState<ProductItemType[] | []>([])

  useEffect(() => {
    const getResults = async (): Promise<ProductItemType[] | []> => {
      if (!searchTerm) {
        return []
      }
      const columns = ['gender', 'type', 'category', 'brand', 'color', 'material']
      let results: ProductItemType[] = []

      for (const column of columns) {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('gender', gender)
          .ilike(column, `%${searchTerm}%`)
          .order('created_at', { ascending: false })
          .limit(5)

        if (error) {
          console.error(error)
        }

        if (data && data.length > 0) {
          results = [...results, ...data]
          setCompletedWord(completeWord(searchTerm, data, columns) as string)
        }
      }
      const uniqueResults = Array.from(
        new Set(results.map(item => item.uuid))
      ).map(id => results.find(item => item.uuid === id))
        .filter((item): item is ProductItemType => item !== undefined);

      return uniqueResults.length > 0 ? uniqueResults : []
    }

    if (showSuggestions && searchTerm.length > 2) {
      getResults().then((results) => {
        if (results) {
          setSuggestions(results)
        }
      })
    } else {
      setSuggestions([])
    }

  }, [showSuggestions, searchTerm])

  return { suggestions }
}

