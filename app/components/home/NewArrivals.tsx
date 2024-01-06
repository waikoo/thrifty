import { createTranslation } from '@/i18n/server'
import { Category, Locales } from '@/types/home'
import { useSupabaseServer } from '../hooks/serverIndex';
import { ProductItemType } from '@/types/productItem';
import { NewArrivalsControls } from './';
import Link from 'next/link';

type NewArrivalsProps = {
  lang: Locales
  gender: Category['category']
  notHome: boolean
}

export default async function NewArrivals({ lang, gender, notHome = false }: NewArrivalsProps) {
  const { t } = await createTranslation(lang, 'home')
  const supabase = useSupabaseServer()

  let { data, error } = await supabase
    .from('products')
    .select('*')
    .filter('gender', 'eq', gender)
    .order('created_at', { ascending: false })
    .limit(12)

  return (
    <section className={`${notHome ? 'bg-bkg w-full' : 'bg-content w-screen px-24 pb-10'} flex flex-col`}>
      <div className={`${notHome ? '' : 'mx-auto w-[80%]'}`}>
        <h3 className={`text-bkg py-10 text-2xl font-bold 
        ${notHome ? 'text-content text-center text-[1rem]' : ''}`}
        >
          {notHome ? 'HOT NEW ARRIVALS YOU MIGHT LIKE' : t('newArrivals.title')}
        </h3>

        <NewArrivalsControls
          data={data as ProductItemType[]}
          gender={gender}
        />

        {!notHome && (
          <Link href={`/${lang}/${gender}/products?gender=${gender}&shop-by=new+in`} className="self-end">
            <span
              className="text-bkg cursor-pointer underline underline-offset-2" >
              {t('newArrivals.viewAll')}
            </span>
          </Link>
        )}
      </div>
    </section>
  )
}
