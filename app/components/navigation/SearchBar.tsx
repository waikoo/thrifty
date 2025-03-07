/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { RxCross2 } from "react-icons/rx";

import { useTranslation } from '@/i18n/client';
import { IconSearch } from '@/app/components/navigation/icons';
import getLinkWithSearchParams from '@/utils/getLinkWithSearchParams';
import useViewport from '@/app/components/hooks/useViewport';
import { viewport } from '@/app/components/data/universalStyles';
import getLangAndGender from '@/utils/getLangAndGender';
import { useNavigationStore } from "@/state/client/navigationState";
import { albert, albert_700, albert_800 } from '@/utils/fonts';
import useSearchSuggestions from '@/app/components/hooks/useSearchSuggestions';
import useFiltersInSearchBar from '@/app/components/hooks/useFiltersInSearchBar';
import SearchSuggestions from '@/app/components/navigation/SearchSuggestions';
import SavedFiltersInSearchBar from '@/app/components/navigation/SavedFiltersInSearchBar';
import { useThemeStore } from '@/state/themeState';
import useSupabaseGetSession from '../hooks/useSupabaseGetSession';
import { useUIStore } from '@/state/client/uiState';
import { supabase } from '@/app/supabase';

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
  const { showMobileSearch, setShowMobileSearch } = useNavigationStore()
  const viewportWidth = useViewport()
  const inputRef = useRef<HTMLInputElement>(null)
  const showClearIcon = searchTerm !== '' && showMobileSearch
  const { suggestions } = useSearchSuggestions(showSuggestions, searchTerm, setCompletedWord)
  const { savedFilters } = useFiltersInSearchBar()
  const { theme } = useThemeStore()
  const { setShowSignIn } = useUIStore()
  const [isSession, setIsSession] = useState(false)

  useEffect(() => {
    if (showMobileSearch) {
      inputRef.current?.focus()
    }

    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        setIsSession(true)
      }
    }

    fetchSession()
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

  return (
    <div className={`relative`}>
      <form className={`text-t_black relative flex items-end gap-2 ${className} w-full pt-2 px-[20px] pb-2 xl:pb-0`}
        onSubmit={(e: React.FormEvent) => handleSubmit(e)}
      >
        {showClearIcon && (
          <div onClick={() => setSearchTerm("")} className="absolute right-[6rem] md:right-[7rem] top-[0.75rem]">
            <RxCross2 className="" size={20} color={theme === 'light' ? "t_black" : "t_white"} />
          </div>
        )}

        {viewportWidth < viewport.xl && showMobileSearch && (
          <span className={`${albert_700.className} absolute right-[1rem] md:right-[0.6rem] top-[0.8rem] text-[12px] text-t_black dark:text-t_white`}
            onClick={() => setShowMobileSearch(false)}>
            CLOSE
          </span>
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
          className={`text-t_black dark:text-t_white w-full appearance-none border-none self-end bg-transparent p-0 outline-0 ring-0 placeholder:text-[0.8rem] placeholder:text-[#616161] placeholder:dark:text-t_white placeholder:${albert.className} focus:outline-none focus:ring-0 focus:placeholder-transparent ${albert.className} text-[1.0625rem]`}
          style={{ WebkitAppearance: 'none' }}
          spellCheck="false"
          onChange={handleOnChange}
          ref={inputRef}
        />
      </form>

      {showMobileSearch && (
        <div className={`bg-t_black text-t_white dark:bg-t_white dark:text-t_black p-2 w-screen text-center text-[13px] sm:text-[17px] ${albert_800.className}`}>
          SAVED FILTERS
        </div>
      )
      }

      {showMobileSearch && savedFilters?.length > 0 ? (
        <SavedFiltersInSearchBar savedFilters={savedFilters} />
      ) : showMobileSearch && !isSession && !searchTerm ? (
        <div className="text-t_black text-[14px] mx-auto w-[75%] text-center mt-[30px]">
          <p>Don't miss out on your personalized shopping experience!</p>
          <p><span className={`${albert_700.className}`} onClick={() => setShowSignIn(true)}>Sign in</span> to access your saved filters.</p>
        </div>
      ) : showMobileSearch && isSession && savedFilters?.length === 0 ? (
        <p className="text-center text-t_black">It looks like you haven't saved any filters yet.</p>
      ) : null}

      {showSuggestions && (
        <SearchSuggestions
          suggestions={suggestions}
          setShowSuggestions={setShowSuggestions}
          completedWord={completedWord}
          lang={lang}
          gender={gender}
        />
      )}
    </div>
  );
}
