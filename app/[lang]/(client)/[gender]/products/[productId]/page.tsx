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
    <>
      <ProductBreadcrumb {...{ matchedProduct }} />
      <main className="bg-bkg text-content mx-auto px-20 pt-10 lg:max-w-[1500px]">
        <section className="flex gap-10">
          <ProductImages matchedProduct={matchedProduct} />
          <ProductInfo matchedProduct={matchedProduct} />
          <ProductFavoriteAndShare matchedProduct={matchedProduct} />

        </section>
        <ProductRecommendations matchedProduct={matchedProduct} />
      </main>
    </>
  )
}

