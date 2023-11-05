import { ApparelGrid, HeroCarousel, PopularBrands, NewArrivals, ColorCarousel, NewsletterSubscription } from "@/app/components/home"
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
      <HeroCarousel {... { lang, category }} />
      <ColorCarousel {... { lang, category }} />
      <NewArrivals {... { lang }} />
      <ApparelGrid {...{ lang }} />
      <PopularBrands {... { lang, category }} />
      <NewsletterSubscription {... { lang }} />
    </main>
  )
}
