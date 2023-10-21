import { HeroCarousel } from "@/app/components/home"
import ColorCarousel from "@/app/components/home/ColorCarousel"
import NewArrivals from "@/app/components/home/NewArrivals"
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
    <>
      <HeroCarousel {... { lang, category }} />
      <ColorCarousel {... { lang, category }} />
      <NewArrivals />
    </>
  )
}
