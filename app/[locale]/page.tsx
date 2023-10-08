import { ColorCarousel, HeroCarousel } from '../components/home'
import { useTranslation } from '../i18n'

type PageProps = {
  params: {
    locale: string,
  },
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({ params: { locale }, searchParams }: PageProps) {
  const { t } = await useTranslation(locale)

  return (
    <>
      <HeroCarousel />
      <ColorCarousel />
      {/* <h1 className="text-4xl font-bold text-content bg-bkg">{t('title')}</h1> */}
      {/* <Link href={`/${locale}/second-page`}> */}
      {/*   {t('to-second-page')} */}
      {/* </Link> */}
    </>
  )
}
