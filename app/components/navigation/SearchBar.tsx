/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useTranslation } from '@/i18n/client';
import { IconSearch } from '@/app/components/navigation/icons';
import getLinkWithSearchParams from '@/utils/getLinkWithSearchParams';
import useViewport from '@/app/components/hooks/useViewport';
import { viewport } from '@/app/components/data/universalStyles';
import getLangAndGender from '@/utils/getLangAndGender';
import useDebounce from '@/app/components/hooks/useDebounce';
import { useNavigationStore } from "@/state/client/navigationState";
import { RxCross2 } from "react-icons/rx";
import { albert } from '@/utils/fonts';
import useSearchSuggestions from '../hooks/useSearchSuggestions';
import useFiltersInSearchBar from '../hooks/useFiltersInSearchBar';
import { TSavedFilters } from '@/types/filters';

type SearchBarProps = {
  className?: string
}

export default function SearchBar({ className }: SearchBarProps) {
  const pathname = usePathname()
  const { lang, gender } = getLangAndGender(pathname)
  const { t } = useTranslation(lang, 'layout')
  const router = useRouter()
  const currentViewport = useViewport()
  const hide = currentViewport < viewport.lg

  const [searchTerm, setSearchTerm] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [completedWord, setCompletedWord] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const { showMobileSearch, setShowMobileSearch } = useNavigationStore()
  const viewportWidth = useViewport()
  const inputRef = useRef<HTMLInputElement>(null)
  const showClearIcon = searchTerm !== '' && showMobileSearch
  const { suggestions } = useSearchSuggestions(showSuggestions, debouncedSearchTerm, setCompletedWord)
  const { savedFilters } = useFiltersInSearchBar()

  console.log(savedFilters)

  useEffect(() => {
    if (showMobileSearch) {
      inputRef.current?.focus()
    }
  }, [])

  useEffect(() => {
    if (searchTerm.length > 2) {
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }

  }, [searchTerm])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setShowMobileSearch(false)
    setShowSuggestions(false)
    if (searchTerm) {
      router.push(
        getLinkWithSearchParams(searchTerm.toString(), lang, gender)
      );
    }
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value)
  }

  function handleSearchByIcon() {
    setShowMobileSearch(false)
    router.push(
      getLinkWithSearchParams(searchTerm, lang, gender)
    )
  }

  const handleFilterClick = (item: TSavedFilters) => {
    const newParams = new URLSearchParams(item.filters) // create new searchParams from saved filters
    newParams.set('sort-by', 'newfirst') // reset default sorting params
    newParams.set('shop-by', 'new in')
    newParams.set('page', '1')

    router.push(`${pathname}/products?${newParams}`);
  }

  return (
    <div>
      <form className={`text-bkg relative flex items-end gap-2 ${className} w-full`}
        onSubmit={(e: React.FormEvent) => handleSubmit(e)}
      >
        {showClearIcon && (
          <div onClick={() => setSearchTerm("")}>
            <RxCross2 className="absolute right-8 top-1" size={20} />
          </div>
        )}

        <div
          className="cursor-pointer"
          onClick={handleSearchByIcon}
        >
          <IconSearch className="self-end" />
        </div>

        <input
          type="search"
          name="search-bar"
          value={searchTerm}
          placeholder={hide ? '' : t('search')}
          className={`text-t_black dark:text-t_white w-full appearance-none border-none self-end bg-transparent p-0 outline-0 ring-0 placeholder:text-[0.8rem] placeholder:text-t_black placeholder:dark:text-t_white placeholder:font-semibold focus:outline-none focus:ring-0 ${albert.className} text-[1.0625rem]`}
          style={{ WebkitAppearance: 'none' }}
          spellCheck="false"
          onChange={handleOnChange}
          ref={inputRef}
        />
      </form>
      <br />
      <div className="h-[0.1rem] bg-t_black dark:bg-t_white w-screen -ml-[1.7rem]" />

      {savedFilters.length > 0 && (
        <div className="w-full absolute bg-t_white dark:bg-t_black top-[5rem] flex flex-col gap-4 p-4">

          {savedFilters.map((item) => (
            <div key={item.filterId} onClick={() => handleFilterClick(item)}>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}

      {showSuggestions && (
        <div className="w-full absolute bg-t_white dark:bg-t_black top-[5rem] flex flex-col gap-4 p-4">

          {suggestions.map((item) => (
            <div key={item.uuid} onClick={() => {
              setShowSuggestions(false)
              router.push(
                getLinkWithSearchParams(`${item.brand} ${item.type} ${item.gender}`, lang, gender)
              )
            }} className="cursor-pointer">
              <span>{completedWord === item.brand ? '' : completedWord}</span>
              <span>{item.brand}</span>
              <span className="ml-2">{item.type}</span>
              <span className="ml-2">{item.gender}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
