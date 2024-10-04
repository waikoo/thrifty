import ColorCarousel from "@/app/components/home/ColorCarousel"
import PopularBrands from "@/app/components/home/PopularBrands"
import { Gender, Locales } from "@/types/link"
import FilterHome from "@/app/components/home/FilterHome"
import HeroCarousel from "@/app/components/home/HeroCarousel"
import NewsletterSubscription from "@/app/components/home/NewsletterSubscription"
import Head from "next/head"

type PageProps = {
  params: {
    lang: Locales,
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, gender }, searchParams, }: PageProps) {

  return (
    <>
      <Head>
        <link rel="preload" as="image" href={`/images/hero/new_in_${gender}.avif`} />
      </Head>
      <main className="relative bg-t_white dark:bg-t_black text-t_black dark:text-t_white mx-auto w-full overflow-hidden">
        <HeroCarousel />

        <ColorCarousel gender={gender} />

        <PopularBrands gender={gender} lang={lang} />

        <FilterHome gender={gender} lang={lang} />

        <NewsletterSubscription />

      </main>
    </>
  )
}
