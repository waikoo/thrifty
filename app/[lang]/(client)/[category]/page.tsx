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
    <>
      <HeroCarousel {... { lang, category }} />
      <ColorCarousel {... { lang, category }} />
      <NewArrivals {... { lang }} />
      <ApparelGrid {...{ lang }} />
      <PopularBrands {... { lang, category }} />
      <NewsletterSubscription {... { lang }} />
    </>
  )
}
