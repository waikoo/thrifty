import { HeroCarousel } from "@/app/components/home"
import ColorCarousel from "@/app/components/home/ColorCarousel"
import { Category, PageProps } from "@/types/home"

type SharedPageProps = {
  params: {
    lang: string,
    category: Category['category']
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function SharedPage({ params: { lang, category }, searchParams, }: SharedPageProps) {

  return (
    <>
      <HeroCarousel category={category} />
      <ColorCarousel category={category} />
    </>
  )
}
