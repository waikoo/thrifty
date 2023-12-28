import { useEffect } from "react"
import { useProductStore } from "@/state"
import { useSearchParams } from "next/navigation"

export default function useInitValues(value: string, name: string) {
  const { setPrice, setDiscount, setSize } = useProductStore()
  const searchParams = useSearchParams()

  return (
    useEffect(() => {
      if (name === 'price' && value) {
        setPrice(value)
      }
      if (name === 'discount' && value) {
        setDiscount(value === '0' ? '' : value)
      }
      if (name === 'size' && value) {
        setSize(value)
      }
    }, [searchParams])
  )
}
