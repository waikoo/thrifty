"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { useTranslation } from '@/i18n/client';

import { type Gender, Locales } from '@/types/link';
import GenderMenu from '@/app/components/navigation/GenderMenu';
import { useGenderStore } from '@/state/client/genderState';
import useViewport from '@/app/components/hooks/useViewport';
import { viewport } from '@/app/components/data/universalStyles';

export default function Gender() {
  const [, currentLocale, currentGender,] = usePathname().split('/');
  const { showGenderMenu, setGender, setShowGenderMenu } = useGenderStore()
  const viewportWidth = useViewport()

  const { t } = useTranslation(currentLocale as Locales, 'layout')
  const categories = [
    t('category.men') as Gender,
    t('category.women') as Gender,
    t('category.kids') as Gender,
  ]

  return (
    <nav className="w-screen md:w-full">
      <div className="mx-auto w-[70%] pt-2">

        <ul className="grid cursor-pointer grid-cols-3 text-[0.75rem] justify-items-center dark:text-t_white text-t_black"
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
      {viewportWidth > viewport.lg && showGenderMenu && <GenderMenu />}
    </nav>
  );
};
