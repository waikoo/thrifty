import { Category, Locales } from "@/types/home"
import NewArrivals from "@/app/components/home/NewArrivals"
import FavoritesOrCart from "@/app/components/FavoritesOrCart"
import FavoritesContent from "@/app/components/favorites/FavoritesContent"

type PageProps = {
  params: {
    lang: Locales,
    gender: Category['category']
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, gender }, searchParams, }: PageProps) {

  return (
    <main className="bg-bkg text-content mx-auto mt-6 flex w-full max-w-[1600px] flex-col items-center px-20 lg:max-w-[1500px] ">
      <FavoritesOrCart lang={lang} gender={gender} />

      <FavoritesContent />

      <NewArrivals lang={lang} gender={gender} notHome={true} />
    </main>
  )
}
