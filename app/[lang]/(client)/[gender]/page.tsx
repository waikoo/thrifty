import { ApparelGrid, HeroCarousel, PopularBrands, ColorCarousel, NewsletterSubscription } from "@/app/components/home"
import { NewArrivals } from "@/app/components/home/serverIndex"
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
      <HeroCarousel {... { lang, gender }} />
      <ColorCarousel {... { lang, gender }} />
      <NewArrivals {... { lang, gender }} />
      <ApparelGrid {...{ lang }} />
      <PopularBrands {... { lang, gender }} />
      <NewsletterSubscription {... { lang }} />
    </main>
  )
}
