"use client"
import { useParams } from 'next/navigation';

import { useTranslation } from '@/i18n/client';
import { IconSearch } from '@/app/components/navigation/icons';
import { Locales } from '@/types/home';

type SearchBarProps = {
  className?: string
}

export default function SearchBar({ className }: SearchBarProps) {
  let lang = useParams()?.lang as Locales
  const { t } = useTranslation(lang, 'layout')

  return (
    <section className={`text-bkg relative flex items-end gap-2 ${className} w-full`}>
      <IconSearch className="self-end" />
      <input
        type="search"
        placeholder={t('search')}
        className={`text-content placeholda w-full appearance-none self-end border-none bg-transparent p-0 outline-0 ring-0 focus:outline-none focus:ring-0`}
        style={{ WebkitAppearance: 'none' }}
      />
    </section>
  );
}
