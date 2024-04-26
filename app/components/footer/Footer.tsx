"use client"
import { viewport } from "@/app/components/data/universalStyles"
import useViewport from "@/app/components/hooks/useViewport"
import FooterSmall from "@/app/components/footer/FooterSmall"
import FooterWide from "@/app/components/footer/FooterWide"
import { Gender, Locales } from "@/types/link"

type FooterProps = {
  lang: Locales
  gender: Gender
}

export default function Footer({ lang, gender }: FooterProps) {
  const viewportWidth = useViewport()

  return (
    <>
      {viewportWidth < viewport.sm ? <FooterSmall lang={lang} gender={gender} /> : <FooterWide />}
    </>
  )
}
