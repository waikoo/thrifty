import NewArrivals from "@/app/components/home/NewArrivals"
import { Category, Locales } from "@/types/home"

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
      <div className="text-content w-screen py-20 text-center tracking-wider">
        <h4 className="mb-[1.375rem] font-extrabold">No favorites yet!</h4>
        <span className="font-semibold">Tap or click the heart icon to keep track of the items you love.</span>
      </div>

      <NewArrivals lang={lang} gender={gender} />

    </main>
  )
}
