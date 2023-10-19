"use client"
import { useTranslation } from '@/i18n/client';
import { useUIStore } from '@/state';
import { Category, Locales } from '@/types/home';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CategoryMenu from './CategoryMenu';

const Category = () => {
  const [_, lang, category] = usePathname().split('/')
  const { t } = useTranslation(lang as Locales, 'layout')
  const categories = [
    t('category.men') as Category['category'],
    t('category.women') as Category['category'],
    t('category.kids') as Category['category'],
  ]
  const [, currentLocale, currentCategory,] = usePathname().split('/');
  const { showCategoryMenu, setCategory, setShowCategoryMenu } = useUIStore()

  return (
    <nav className="relative w-full">
      <div className="mx-auto w-5/12 pt-2">

        <ul className="grid w-full cursor-pointer grid-cols-3 justify-items-center"
        >
          {categories.map((category: Category['category']) => (
            <li
              key={category}
              className={`text-${currentCategory === category ? 'content font-extrabold' : 'faded'}`}
            >
              <Link
                href={`/${currentLocale}/${category.toLowerCase()}`}
                onMouseOver={() => {
                  setShowCategoryMenu(true)
                  setCategory(category.toLowerCase() as Category['category'])
                }}
              >
                {category.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {showCategoryMenu && <CategoryMenu />}
    </nav>
  );
};

export default Category;

