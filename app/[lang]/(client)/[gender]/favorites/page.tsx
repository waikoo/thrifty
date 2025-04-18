import { Gender, Locales } from "@/types/link"
import FavoritesOrCart from "@/app/components/FavoritesOrCart"
import FavoritesContent from "@/app/components/favorites/FavoritesContent"

type PageProps = {
  params: {
    lang: Locales,
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, gender }, searchParams, }: PageProps) {

  return (
    <main className="bg-white dark:bg-black text-t_black dark:text-t_white mx-auto mt-6 flex w-full max-w-[1600px] flex-col rounded-[35px] items-center lg:max-w-[1500px] mb-[60px]">
      <FavoritesOrCart lang={lang} gender={gender} />

      <FavoritesContent />
    </main>
  )
}
