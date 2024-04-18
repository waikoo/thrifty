import { ApparelGrid, HeroCarousel, PopularBrands, ColorCarousel, NewsletterSubscription } from "@/app/components/home"
import { NewArrivals } from "@/app/components/home/serverIndex"
import Hero from "@/app/components/home/Hero"
import { Gender, Locales } from "@/types/link"
import HeroBarSwitch from "@/app/components/home/HeroBarSwitch"

type PageProps = {
  params: {
    lang: Locales,
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, gender }, searchParams, }: PageProps) {

  return (
    <main className="bg-bkg text-content mx-auto mt-2 flex w-full flex-col overflow-x-hidden overflow-y-hidden items-center xl:max-w-[1280px] max-w-[90vw]">
      <Hero />
      <HeroBarSwitch />

      {/* <HeroCarousel {... { lang, gender }} /> */}
      {/* <ColorCarousel {... { lang, gender }} /> */}
      {/* <NewArrivals {... { lang, gender }} /> */}
      {/* <ApparelGrid {...{ lang }} /> */}
      {/* <PopularBrands {... { lang, gender }} /> */}
      {/* <NewsletterSubscription {... { lang }} /> */}
    </main>
  )
}
