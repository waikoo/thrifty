import { Category, Locales } from '@/types/home'
import Image from 'next/image'
import { createTranslation } from '@/i18n/server'
import { brandImages } from "../data/"
import Link from 'next/link'

type PopularBrandsProps = {
  lang: Locales
  gender: Category['category']
}
export default async function PopularBrands({ lang, gender }: PopularBrandsProps) {
  const { t } = await createTranslation(lang, 'home')

  return (
    <section className="bg-bkg flex w-screen">
      <div className="grid w-[40%] place-items-center gap-24 pt-20">
        <h3 className="text-content text-center text-xl font-semibold">
          {t('popularBrands.title1')}
          <span className="block">{t('popularBrands.title2')}</span></h3>

        <Link
          href={`/${lang}/${gender}/brands`}
          className="text-xs font-bold underline underline-offset-2">
          {t('popularBrands.viewAll')}
        </Link>
      </div>

      <div className="flex w-[60%]">
        {
          brandImages.map((image, index) => {
            const altKey = `brand image${index}`
            return (
              <Image
                src={image}
                alt={altKey}
                width={100}
                height={100}
                key={altKey}
                className="w-full object-cover"
              />

            )
          })
        }
      </div>
    </section>
  )
}
