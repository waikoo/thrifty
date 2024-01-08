import { useSupabaseServer } from "@/app/components/hooks/serverIndex"
import ProductBreadcrumb from "@/app/components/products/ProductBreadcrumb"
import { Category, Locales } from "@/types/home"
import { ProductItemType } from "@/types/productItem"
import { singleProduct } from "@/app/components/data/mock/singleProduct"
import ProductImages from "@/app/components/products/ProductImages"
import { ProductInfo } from "@/app/components/products/ProductInfo"

type PageProps = {
  params: {
    productId: string
    lang: Locales,
    gender: Category['category']
  }
  searchParams: URLSearchParams
}

export default async function Page({ params: { lang, gender, productId }, searchParams }: PageProps) {
  // const supabase = useSupabaseServer()
  // const { data, error } = await supabase
  //   .from('products')
  //   .select('*')
  //   .eq('uuid', productId)
  //   .single()
  const data = singleProduct
  const matchedProduct: ProductItemType = data

  return (
    <>
      <ProductBreadcrumb {...{ matchedProduct }} />
      <main className="bg-bkg text-content mx-auto px-20 pt-10 lg:max-w-[1500px]">
        <section className="flex gap-10">
          <ProductImages matchedProduct={matchedProduct} />
          <ProductInfo matchedProduct={matchedProduct} />
        </section>
      </main>
    </>
  )
}

