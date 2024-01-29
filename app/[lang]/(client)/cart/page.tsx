import CartContent from "@/app/components/cart/CartContent"
import NewArrivals from "@/app/components/home/NewArrivals"
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
    <main className="bg-bkg text-content mx-auto mt-6 flex w-full max-w-[1600px] flex-col items-center px-20 lg:max-w-[1500px] ">

      <CartContent />
      <NewArrivals lang={lang} gender={gender} notHome={true} />

    </main>
  )
}
