import { FaPlus } from "react-icons/fa6";

import CartOrderSummary from "@/app/components/cart/CartOrderSummary"
import CheckoutForm from "@/app/components/checkout/CheckoutForm"
import { Category, Locales } from "@/types/home"

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

      <h1 className="text-bkg py-4 text-[1rem] font-extrabold tracking-wide">CHECKOUT</h1>

      <div className="flex gap-12">
        <CheckoutForm className="inline" />

        <div className="">
          <CartOrderSummary isCheckout={true} />

          <div className="bg-bkg border-content flex justify-between border-[0.1rem] p-6">
            <span className="">YOUR CART</span>
            <FaPlus className="" />
          </div>
        </div>
      </div>
    </main>
  )
}
