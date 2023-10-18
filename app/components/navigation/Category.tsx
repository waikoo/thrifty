"use client"
import { useTranslation } from '@/i18n/client';
import { useUIStore } from '@/state';
import { Locales } from '@/types/home';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CategoryMenu from './CategoryMenu';

type CategoryProps = {
  // lang: Locales
};

const Category = ({ }: CategoryProps) => {
  const [_, lang, category] = usePathname().split('/')
  const { t } = useTranslation(lang as Locales, 'layout')
  const categories = [
    t('category.men'),
    t('category.women'),
    t('category.kids'),
  ]
  const [, currentLocale, currentCategory,] = usePathname().split('/');

  const { showCategoryMenu, setShowCategoryMenu } = useUIStore()

  return (
    <nav className="relative w-full">
      <div className="mx-auto w-5/12 pt-2">

        <ul className="grid w-full cursor-pointer grid-cols-3 justify-items-center">
          {categories.map((category) => (
            <li
              key={category}
              className={`text-${currentCategory === category ? 'content font-extrabold' : 'faded'
                }`}
            >
              <Link
                href={`/${currentLocale}/${category}`}
                onMouseOver={() => { setShowCategoryMenu(true) }}
              >
                {category.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
        {showCategoryMenu && (
          <CategoryMenu />
        )}
      </div>
    </nav>
  );
};

export default Category;

