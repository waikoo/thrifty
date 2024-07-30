import CartOrderSummary from "@/app/components/cart/CartOrderSummary"
import CheckoutCart from "@/app/components/checkout/CheckoutCart"
import CheckoutForm from "@/app/components/checkout/CheckoutForm"
import { borderBottomRadius } from "@/app/components/data/universalStyles"
import { useSupabaseServer } from "@/app/components/hooks/serverIndex"
import { Gender, Locales } from "@/types/link"

type PageProps = {
  params: {
    lang: Locales,
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, gender }, searchParams, }: PageProps) {
  const supabase = useSupabaseServer()
  let { data: products, error } = await supabase
    .from('products')
    .select('*')
  if (error) {
    console.log(error.message)
  }

  return (
    <main className="bg-[#f2f2f2] text-t_black mx-auto flex w-full flex-col items-center px-20 ">

      <div id="popup-root"></div>

      <div className={`flex gap-12 ${borderBottomRadius}`}>
        <CheckoutForm className="inline" />

        <div className={`${borderBottomRadius}`}>
          <CartOrderSummary isCheckout={true} products={products} />

          <CheckoutCart />
        </div>

      </div>
    </main>
  )
}
