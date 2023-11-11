import { Category, Locales } from "@/types/home"
import { cache } from "react"
import { ProductItemType } from "@/types/productItem"
import { ProductItem } from "."
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

type ProductListProps = {
  lang: Locales
  category: Category['category']
  searchParams: { [key: string]: string | string[] | undefined }
}

export const getProducts = cache(async () => {
  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const { data, error } = await supabase.from('products').select('*');
  return data
})

export default async function ProductList({ lang, category, searchParams }: ProductListProps) {
  const data = await getProducts()
  console.log(data)

  return (
    <div className="mx-auto flex w-[80%] flex-wrap justify-between gap-8">
      {data!.map((product: ProductItemType, i: number) => {
        return (
          <ProductItem
            key={product.uuid}
            product={product}
            index={i}
          />
        )
      })
      }
    </div>
  )
}
