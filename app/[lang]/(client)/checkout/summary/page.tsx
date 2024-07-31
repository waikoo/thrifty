import CartOrderSummary from "@/app/components/cart/CartOrderSummary"
import CheckoutCart from "@/app/components/checkout/CheckoutCart"
import CheckoutSummaryItems from "@/app/components/checkout/CheckoutSummaryItems"
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
    <main className="bg-faded text-content mx-auto flex w-full flex-col items-center px-20 pb-10">

      <h1 className="text-bkg py-4 text-[1rem] font-extrabold tracking-wide">CHECKOUT</h1>

      <div className={`flex flex-col xl:flex-row gap-10 xl:gap-28 ${borderBottomRadius}`}>
        <CheckoutSummaryItems />

        <div className={`${borderBottomRadius}`}>
          <CartOrderSummary isCheckout={true} products={products} className="border-b-[0.1rem]" />

          <CheckoutCart />
        </div>

      </div>
    </main>
  )
}
