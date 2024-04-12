"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { useTranslation } from '@/i18n/client';

import { useUIStore } from '@/state/client/uiState';
import { Gender, Locales } from '@/types/link';
import GenderMenu from '@/app/components/navigation/GenderMenu';

export default function Gender() {
  const [_, lang, gender] = usePathname().split('/')
  const { t } = useTranslation(lang as Locales, 'layout')
  const categories = [
    t('category.men') as Gender,
    t('category.women') as Gender,
    t('category.kids') as Gender,
  ]
  const [, currentLocale, currentCategory,] = usePathname().split('/');
  const { showCategoryMenu, setCategory, setShowCategoryMenu } = useUIStore()

  return (
    <nav className="relative w-full">
      <div className="mx-auto w-[500px] pt-2">

        <ul className="grid w-full cursor-pointer grid-cols-3 justify-items-center gap-36"
        >
          {categories.map((category: Gender) => (
            <li
              key={category}
              className={`text-${currentCategory === category ? 'content font-extrabold' : 'faded'}`}
            >
              <Link
                href={`/${currentLocale}/${category.toLowerCase()}`}
                onMouseOver={() => {
                  setShowCategoryMenu(true)
                  setCategory(category.toLowerCase() as Gender)
                }}
              >
                {category.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {showCategoryMenu && <GenderMenu />}
    </nav>
  );
};
