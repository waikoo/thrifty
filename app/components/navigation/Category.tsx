"use client"
import { useTranslation } from '@/i18n/client';
import { Locales } from '@/types/home';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  // const categories = ['men', 'women', 'kids'];
  const [, currentLocale, currentCategory,] = usePathname().split('/');
  return (
    <nav className="mx-auto w-5/12 pt-2">
      <ul className="grid w-full cursor-pointer grid-cols-3 justify-items-center">
        {categories.map((category) => (
          <li
            key={category}
            className={`text-${currentCategory === category ? 'content font-extrabold' : 'faded'
              }`}
          >
            <Link
              href={`/${currentLocale}/${category}`}
            >
              {category.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Category;

