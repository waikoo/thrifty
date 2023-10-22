import { createTranslation } from '@/i18n/server'
import { Locales } from '@/types/home'

type NewArrivalsProps = {
  lang: Locales
}

export default async function NewArrivals({ lang }: NewArrivalsProps) {
  const { t } = await createTranslation(lang, 'home')

  return (
    <section className="bg-content flex w-screen flex-col px-24">
      <h3 className="text-bkg text-2xl font-bold">{t('newArrivals.title')}</h3>

      <span className="text-bkg self-end">{t('newArrivals.viewAll')}</span>
    </section>
  )
}
