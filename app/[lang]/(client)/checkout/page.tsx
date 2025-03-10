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

  const { data: { session } } = await supabase.auth.getSession()

  return (
    <main className="bg-[#f2f2f2] text-t_black mx-auto flex w-full flex-col items-center xl:px-20 overflow-hidden">

      <div id="popup-root"></div>

      <div className={`mt-10 flex flex-col sm:gap-0 xl:flex-row xl:gap-12 ${borderBottomRadius}`}>
        <CheckoutForm className="inline" showSignIn={!session} />

        <div className={`w-[90vw] sm:w-auto ${borderBottomRadius}`}>
          <CartOrderSummary isCheckout={true} products={products} />

          <div className="h-[0.2rem] w-full bg-t_white border-t-[2px] border-[#f2f2f2]"></div>
          <CheckoutCart />
        </div>

      </div>
    </main>
  )
}
