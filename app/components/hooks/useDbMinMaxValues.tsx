import { supabase } from "@/app/supabase"
import { useEffect } from "react"

export default function useDbMinMaxValues(
  type: "DISCOUNT" | "PRICE",
  setLeft: React.Dispatch<React.SetStateAction<number>>,
  setRight: React.Dispatch<React.SetStateAction<number>>,
  left: number,
  right: number) {

  useEffect(() => {
    const getData = async (field: string) => {
      const { data, error } = await supabase
        .from('products')
        .select(field)
        .range(left, right)
        .order(field, { ascending: true })

      if (error) {
        console.error("Error fetching data: ", error)
        return
      }

      return data
    }

    const handleData = (field: string, data: any[]) => {
      if (data) {
        setLeft(data.at(0)[field])
        setRight(data.at(-1)?.[field])
      }
    }

    getData(type.toLowerCase()).then(data => {
      if (Array.isArray(data)) {
        handleData(type.toLowerCase(), data)
      }
    })

  }, [])

  return (
    <div>useMinMaxValues</div>
  )
}
