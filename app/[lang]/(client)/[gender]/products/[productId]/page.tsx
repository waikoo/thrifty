import { useSupabaseServer } from "@/app/components/hooks/serverIndex"
import { Gender, Locales } from "@/types/link"
import { ProductItemType } from "@/types/productItem"
import ProductImages from "@/app/components/products/ProductImages"
import { ProductInfo } from "@/app/components/products/ProductInfo"
import ProductRecommendations from "@/app/components/products/ProductRecommendations"
import ProductImagesMini from "@/app/components/products/ProductImagesMini"

type PageProps = {
  params: {
    productId: string
    lang: Locales,
    gender: Gender
  }
  searchParams: URLSearchParams
}

export default async function Page({ params: { lang, gender, productId }, searchParams }: PageProps) {
  const supabase = useSupabaseServer()
  const { data: matched, error } = await supabase
    .from('products')
    .select('*')
    .eq('uuid', productId)
    .single()
  const matchedProduct: ProductItemType = matched

  return (
    <main className="bg-t_white dark:bg-t_black text-t_black dark:text-t_white mx-auto pt-2">
      <ProductImagesMini
        matchedProduct={matchedProduct}
        className="xl:hidden" />
      <section className="flex gap-16">
        <ProductImages
          matchedProduct={matchedProduct}
          className="hidden xl:grid" />

        <ProductInfo matchedProduct={matchedProduct} />

      </section>
      <ProductRecommendations matchedProduct={matchedProduct} />
    </main>
  )
}

