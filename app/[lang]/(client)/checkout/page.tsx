import CartOrderSummary from "@/app/components/cart/CartOrderSummary"
import CheckoutCart from "@/app/components/checkout/CheckoutCart"
import CheckoutForm from "@/app/components/checkout/CheckoutForm"
import { borderBottomRadius } from "@/app/components/data/universalStyles"
import { useSupabaseServer } from "@/app/components/hooks/serverIndex"
import { Category, Locales } from "@/types/home"

type PageProps = {
  params: {
    lang: Locales,
    gender: Category['category']
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
    <main className="bg-faded text-content mx-auto flex w-full flex-col items-center px-20 ">

      <h1 className="text-bkg py-4 text-[1rem] font-extrabold tracking-wide">CHECKOUT</h1>
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
