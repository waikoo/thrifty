import { useSupabaseServer } from "@/app/components/hooks/serverIndex"
import ProductBreadcrumb from "@/app/components/products/ProductBreadcrumb"
import { Gender, Locales } from "@/types/link"
import { ProductItemType } from "@/types/productItem"
import ProductImages from "@/app/components/products/ProductImages"
import { ProductInfo } from "@/app/components/products/ProductInfo"
import ProductRecommendations from "@/app/components/products/ProductRecommendations"
import ProductFavoriteAndShare from "@/app/components/products/ProductFavoriteAndShare"

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
      <section className="flex gap-10">
        <ProductImages matchedProduct={matchedProduct} />
        <ProductInfo matchedProduct={matchedProduct} />
        {/* <ProductFavoriteAndShare matchedProduct={matchedProduct} /> */}

      </section>
      <ProductRecommendations matchedProduct={matchedProduct} />
    </main>
  )
}

