import SuccessSVG from "@/app/components/checkout/SuccessSVG"
import { Gender, Locales } from "@/types/link"
import { albert, albert_700, albert_900 } from "@/utils/fonts"
import Link from "next/link"

type PageProps = {
  params: {
    lang: Locales
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({
  params: { lang, gender },
  searchParams,
}: PageProps) {

  return (
    <main className="bg-faded text-content mx-auto px-[44px] xl:px-20 pb-10 h-[calc(100svh)] bg-white">
      <div className="flex w-full flex-col items-center pt-20">
        <h1 className={`text-t_black py-4 text-center text-[22px] sm:text-[22px] ${albert_900.className} tracking-wide mb-5`}>
          THANK YOU FOR YOUR PURCHASE
        </h1>

        <SuccessSVG />

        <p className={`text-center max-w-[233px] sm:max-w[382px] xl:w-[27%] xl:max-w-[392px] mt-10 text-[13px] sm:text-[17px] xl:text-[15px] ${albert.className}`}>
          Your order has been confirmed, and we’re excited to get it ready for you! You will receive an email shortly with the details.
        </p>

        <Link href={`/${lang}/${gender}/products/?gender=${gender}&shop-by=new+in&sort-by=newfirst&page=1`}
          className={`bg-t_black text-t_white px-6 py-3 mt-10 rounded-full text-[13px] sm:text-[15px] xl:text-[13px] whitespace-nowrap ${albert_700.className}`}
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    </main>
  )
}
