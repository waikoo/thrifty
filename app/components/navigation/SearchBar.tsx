"use client"
import { useParams, useRouter } from 'next/navigation';

import { useTranslation } from '@/i18n/client';
import { IconSearch } from '@/app/components/navigation/icons';
import getLinkWithSearchParams from '@/utils/getLinkWithSearchParams';
import { Gender, Locales } from '@/types/link';

type SearchBarProps = {
  className?: string
}

export default function SearchBar({ className }: SearchBarProps) {
  let lang = useParams()?.lang as Locales
  let gender = useParams()?.gender as Gender
  const { t } = useTranslation(lang, 'layout')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const searchTerm = formData.get('search')

    if (searchTerm) {
      router.push(
        getLinkWithSearchParams(searchTerm.toString(), lang, gender)
      );
    }
  }

  return (
    <form className={`text-bkg relative flex items-end gap-2 ${className} w-full`}
      onSubmit={(e: React.FormEvent) => handleSubmit(e)}
    >

      <div onClick={() => console.log('icon clicked')} className="cursor-pointer">
        <IconSearch className="self-end" />
      </div>

      <input
        type="search"
        name="search"
        placeholder={t('search')}
        className={`text-content placeholda w-full appearance-none self-end border-none bg-transparent p-0 outline-0 ring-0 placeholder:text-[0.8rem] placeholder:font-semibold focus:outline-none focus:ring-0`}
        style={{ WebkitAppearance: 'none' }}
      />
    </form>
  );
}
