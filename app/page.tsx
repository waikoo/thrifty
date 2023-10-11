import { HeroCarousel } from "@/app/components/home"
import ColorCarousel from "@/app/components/home/ColorCarousel"
import { PageProps } from "@/types/home"

export default async function SharedPage({ params: { lang, category }, searchParams, }: PageProps) {

  return (
    <>
      <HeroCarousel category={category} />
      <ColorCarousel category={category} />
    </>
  )
}
