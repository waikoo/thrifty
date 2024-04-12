"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { useTranslation } from '@/i18n/client';

import { Gender, Locales } from '@/types/link';
import GenderMenu from '@/app/components/navigation/GenderMenu';
import { useGenderStore } from '@/state/client/genderState';

export default function Gender() {
  const [_, lang, gender] = usePathname().split('/')
  const { t } = useTranslation(lang as Locales, 'layout')
  const categories = [
    t('category.men') as Gender,
    t('category.women') as Gender,
    t('category.kids') as Gender,
  ]
  const [, currentLocale, currentGender,] = usePathname().split('/');
  const { showGenderMenu, setGender, setShowGenderMenu } = useGenderStore()

  return (
    <nav className="relative w-full">
      <div className="mx-auto w-[500px] pt-2">

        <ul className="grid w-full cursor-pointer grid-cols-3 justify-items-center gap-36"
        >
          {categories.map((gender: Gender) => (
            <li
              key={gender}
              className={`text-${currentGender === gender ? 'content font-extrabold' : 'faded'}`}
            >
              <Link
                href={`/${currentLocale}/${gender.toLowerCase()}`}
                onMouseOver={() => {
                  setShowGenderMenu(true)
                  setGender(gender.toLowerCase() as Gender)
                }}
              >
                {gender.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {showGenderMenu && <GenderMenu />}
    </nav>
  );
};
