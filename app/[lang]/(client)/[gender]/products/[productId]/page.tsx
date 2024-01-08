import { useSupabaseServer } from "@/app/components/hooks/serverIndex"
import ProductBreadcrumb from "@/app/components/products/ProductBreadcrumb"
import { Category, Locales } from "@/types/home"
import { ProductItemType } from "@/types/productItem"
import { capitalize } from "@/utils/capitalize"
import { singleProduct } from "@/app/components/data/mock/singleProduct"
import ProductImages from "@/app/components/products/ProductImages"


type PageProps = {
  params: {
    productId: string
    lang: Locales,
    gender: Category['category']
  }
  searchParams: { [key: string]: string | string[] | undefined }
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
  console.log(matchedProduct)

  return (
    <>
      <ProductBreadcrumb {...{ matchedProduct }} />
      <main className="bg-bkg text-content mx-auto px-20 pt-10 lg:max-w-[1500px]">
        <section className="flex">
          <ProductImages matchedProduct={matchedProduct} />
          {/* ProductInfo */}
          <div>
            <div className="flex w-1/2 flex-col">
              <div className="flex gap-2">
                <span className="whitespace-nowrap"> {matchedProduct.brand.toUpperCase()} </span> <span> {capitalize(matchedProduct.type)}</span>
              </div>

              <span>€{matchedProduct.price}</span>
              <span>Size: {matchedProduct.size}</span>
              <span>Color: {matchedProduct.color}</span>
              <span>Material: {matchedProduct.material}</span>
              <span>Condition: {matchedProduct.condition}</span>
              <span>Estimated Delivery:<span></span></span>
            </div>

            <div className="flex flex-col justify-center">
              <button>ADD TO CART</button>
              <p>AND RESERVE FOR 30 MINUTES</p>
            </div>

            <div>
              <div className="flex justify-between">
                <span>SHIPPING INFO</span>
                <span>RETURNS INFO</span>
              </div>
              <div className="bg-grey">
                <p><strong>€5</strong> STANDARD DELIVERY (2-4 DAYS)</p>
                <p><strong>FREE</strong>SHIPPING ABOVE €30</p>
                <p><strong>FREE</strong>COLLECT FROM STORE</p>
                <span className="underline underline-offset-4">More Info</span>
              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  )
}

