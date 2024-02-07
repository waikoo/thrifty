"use client"
import { useUIStore } from "@/state"
import { useDarkMode } from "@/app/components/hooks"
import { Logo, SearchBar, WithHome } from '@/app/components/navigation/'
import NavIcons from "@/app/components/navigation/NavIcons"

type NavBarProps = {
  isAdmin?: boolean
  params?: { [key: string]: string | string[] | undefined }
}

const NavBar = ({ isAdmin, params }: NavBarProps) => {

  const htmlDataset = typeof document !== 'undefined' ? document.documentElement.dataset : undefined
  if (htmlDataset) {
    useDarkMode(htmlDataset)
  }

  const { setShowCategoryMenu } = useUIStore()

  return (
    <section className="w-full max-w-[1440px] ">
      <div className={`border-content relative mx-auto grid w-full grid-cols-3 border-b-2 pb-2 pt-4`}
        onMouseEnter={() => setShowCategoryMenu(false)} // makes categorymenu disappear when exiting with mouseover on top
      >
        <SearchBar className="self-end" />

        <WithHome> <Logo className="self-end" /> </WithHome>

        <NavIcons className="self-end justify-self-end" />
      </div>
    </section>
  )
}

export default NavBar
