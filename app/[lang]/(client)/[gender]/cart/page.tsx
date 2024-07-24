import FavoritesOrCart from "@/app/components/FavoritesOrCart"
import CartContent from "@/app/components/cart/CartContent"
import NewArrivals from "@/app/components/home/NewArrivals"
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
    <main className="bg-[#fff] text-t_black mx-auto mt-6 flex w-full max-w-[1600px] flex-col items-center lg:max-w-[1500px] rounded-[35px]">

      <FavoritesOrCart lang={lang} gender={gender} />

      <CartContent />

      <NewArrivals lang={lang} gender={gender} notHome={true} />

    </main>
  )
}
