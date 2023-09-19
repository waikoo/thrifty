import Link from 'next/link'
import { useTranslation } from '../../i18n'

type PageProps = {
  params: {
    locale: string
  }
}

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await useTranslation(locale)

  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${locale}`}>
        {t('back-to-home')}
      </Link>
    </>
  )
}
