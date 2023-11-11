"use client"
import { Category, Locales } from "@/types/home"
import { createBrowserClient } from "@supabase/ssr"
import { useEffect, useState } from "react"
import { ProductItemType } from "@/types/productItem"
import { ProductItem } from "."

type ProductListProps = {
  lang: Locales
  category: Category['category']
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ProductList({ lang, category, searchParams }: ProductListProps) {
  const [productData, setProductData] = useState<ProductItemType[]>([]);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const fetchDrafts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (productData !== data) {
        setProductData(data as ProductItemType[])
      }
    }
    fetchDrafts()
  }, [])

  return (
    <div className="mx-auto flex w-[80%] flex-wrap justify-between gap-8">
      {productData.map((product: ProductItemType) => {
        return (
          <ProductItem
            key={product.uuid}
            product={product} />
        )
      })
      }
    </div>
  )
}
