import { Category, Locales } from "@/types/home"

type PageProps = {
  params: {
    lang: Locales,
    category: Category['category']
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, category }, searchParams, }: PageProps) {

  return (
    <main className="bg-bkg text-content mx-auto mt-6 flex w-full max-w-[1600px] flex-col items-center px-20 lg:max-w-[1500px] ">
      <div className="w-screen bg-gray-300 py-20 text-center tracking-wider text-black">
        <h4 className="font-extrabold">No favorites yet!</h4>
        <span className="font-semibold">Tap or click the heart icon to keep track of the items you love.</span>
      </div>
    </main>
  )
}
