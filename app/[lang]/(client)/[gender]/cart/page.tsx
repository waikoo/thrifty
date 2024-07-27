import FavoritesOrCart from "@/app/components/FavoritesOrCart"
import CartContent from "@/app/components/cart/CartContent"
import FillForFreeShipping from "@/app/components/home/FillForFreeShipping"
import { Gender, Locales } from "@/types/link"

type PageProps = {
  params: {
    lang: Locales,
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default function Page({ params: { lang, gender }, searchParams, }: PageProps) {

  return (
    <main className="text-t_black mx-auto mt-6 flex w-full max-w-[1600px] flex-col items-center lg:max-w-[1500px] rounded-[35px] overflow-hidden">

      <FavoritesOrCart lang={lang} gender={gender} />

      <CartContent />

      <FillForFreeShipping lang={lang} gender={gender} />

    </main>
  )
}
