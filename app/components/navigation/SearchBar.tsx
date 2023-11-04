"use client"
import { Locales } from '@/types/home';
import { useParams } from 'next/dist/client/components/navigation';
import { IconSearch } from './icons';
import { useTranslation } from '@/i18n/client';

type SearchBarProps = {
}

export default function SearchBar({ }: SearchBarProps) {
  let lang = useParams()?.lang as Locales
  const { t } = useTranslation(lang, 'layout')

  return (
    <section className={`text-bkg flex gap-2 items-end`}>
      <IconSearch home />
      <input
        type="search"
        placeholder={t('search')}
        className={`bg-transparent text-content outline-0 appearance-none focus:outline-none pt-2 w-full self-baseline placeholda`}
        style={{ WebkitAppearance: 'none', appearance: 'none' }}
      />
    </section>
  );
}
