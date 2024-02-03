import CartOrderSummary from "@/app/components/cart/CartOrderSummary"
import CheckoutForm from "@/app/components/checkout/CheckoutForm"
import { Category, Locales } from "@/types/home"
import { FaPlus } from "react-icons/fa6";

type PageProps = {
  params: {
    lang: Locales,
    gender: Category['category']
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default function Page({ params: { lang, gender }, searchParams, }: PageProps) {

  return (
    <main className="bg-faded text-content mx-auto mt-6 flex w-full flex-col items-center px-20 ">

      <h1 className="text-bkg py-4 text-[1rem] font-extrabold">CHECKOUT</h1>

      <div className="flex gap-8 ">
        <CheckoutForm className="flex-shrink-0 flex-grow-0" />
        <div className="bg-bkg flex-shrink-0 flex-grow-0">
          <CartOrderSummary isCheckout={true} />

          <div className="bg-bkg border-content flex justify-between border-[0.1rem] p-6">
            <span className="flex-shrink-0 flex-grow-0">YOUR CART</span>
            <FaPlus className="flex-shrink-0 flex-grow-0" />
          </div>
        </div>
      </div>
    </main>
  )
}
