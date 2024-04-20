import { ApparelGrid, PopularBrands, NewsletterSubscription } from "@/app/components/home"
import Hero from "@/app/components/home/Hero"
import { Gender, Locales } from "@/types/link"
import HeroBarSwitch from "@/app/components/home/HeroBarSwitch"
import ColorCarousel from "@/app/components/home/ColorCarousel"

type PageProps = {
  params: {
    lang: Locales,
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, gender }, searchParams, }: PageProps) {

  return (
    <main className="mx-auto mt-2 w-full overflow-hidden max-w-[90vw] xl:max-w-[1280px]">
      <Hero />
      <HeroBarSwitch />

      <ColorCarousel gender={gender} />

      {/* <ApparelGrid {...{ lang }} /> */}
      {/* <PopularBrands {... { lang, gender }} /> */}
      {/* <NewsletterSubscription {... { lang }} /> */}
    </main>
  )
}
