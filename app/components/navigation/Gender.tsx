"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { useTranslation } from '@/i18n/client';

import { type Gender, Locales } from '@/types/link';
import GenderMenu from '@/app/components/navigation/GenderMenu';
import { useGenderStore } from '@/state/client/genderState';

export default function Gender() {
  const [, currentLocale, currentGender,] = usePathname().split('/');
  const { showGenderMenu, setGender, setShowGenderMenu } = useGenderStore()

  const { t } = useTranslation(currentLocale as Locales, 'layout')
  const categories = [
    t('category.men') as Gender,
    t('category.women') as Gender,
    t('category.kids') as Gender,
  ]

  return (
    <nav className="w-screen md:w-full">
      <div className="mx-auto w-[300px] pt-2">

        <ul className="grid cursor-pointer grid-cols-3 justify-items-center dark:text-t_white text-t_black"
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
