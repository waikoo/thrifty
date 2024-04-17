import { ApparelGrid, HeroCarousel, PopularBrands, ColorCarousel, NewsletterSubscription } from "@/app/components/home"
import { NewArrivals } from "@/app/components/home/serverIndex"
import Hero from "@/app/components/home/Hero"
import { Gender, Locales } from "@/types/link"

type PageProps = {
  params: {
    lang: Locales,
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, gender }, searchParams, }: PageProps) {

  return (
    <main className="bg-bkg text-content mx-auto mt-6 flex w-full flex-col items-center xl:max-w-[1280px] max-w-[90vw]">
      <Hero />

      {/* <HeroCarousel {... { lang, gender }} /> */}
      {/* <ColorCarousel {... { lang, gender }} /> */}
      {/* <NewArrivals {... { lang, gender }} /> */}
      {/* <ApparelGrid {...{ lang }} /> */}
      {/* <PopularBrands {... { lang, gender }} /> */}
      {/* <NewsletterSubscription {... { lang }} /> */}
    </main>
  )
}
