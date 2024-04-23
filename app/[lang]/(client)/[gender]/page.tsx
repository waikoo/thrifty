import { NewsletterSubscription } from "@/app/components/home"
import Hero from "@/app/components/home/Hero"
import HeroBarSwitch from "@/app/components/home/HeroBarSwitch"
import ColorCarousel from "@/app/components/home/ColorCarousel"
import NavBarMobile from "@/app/components/navigation/NavBarMobile"
import PopularBrands from "@/app/components/home/PopularBrands"
import { Gender, Locales } from "@/types/link"
import FilterHome from "@/app/components/home/FilterHome"

type PageProps = {
  params: {
    lang: Locales,
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, gender }, searchParams, }: PageProps) {

  return (
    <main className="relative mx-auto mt-2 w-full overflow-hidden">
      <div className="max-w-[90vw] xl:max-w-[1290px] mx-auto">
        <Hero />
        <HeroBarSwitch />

        <NavBarMobile />
      </div>
      <ColorCarousel gender={gender} />

      <PopularBrands />

      <FilterHome gender={gender} />

      {/* <NewsletterSubscription {... { lang }} /> */}
    </main>
  )
}
