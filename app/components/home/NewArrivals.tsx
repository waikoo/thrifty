import { createTranslation } from '@/i18n/server'
import { Category, Locales } from '@/types/home'
import { NewArrivalsGrid } from './serverIndex'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type NewArrivalsProps = {
  lang: Locales
  category: Category['category']
}

export default async function NewArrivals({ lang, category }: NewArrivalsProps) {
  const { t } = await createTranslation(lang, 'home')

  return (
    <section className="bg-content flex w-screen flex-col px-24 pb-10">
      <h3 className="text-bkg py-10 text-2xl font-bold">{t('newArrivals.title')}</h3>

      <div className="flex w-full items-center">
        <FiChevronLeft className="text-bkg cursor-pointer pr-4 text-4xl" />

        <NewArrivalsGrid {...{ category }} />

        <FiChevronRight className="text-bkg cursor-pointer pl-4 text-4xl" />
      </div>

      <span className="text-bkg cursor-pointer self-end underline underline-offset-2">{t('newArrivals.viewAll')}</span>
    </section>
  )
}
