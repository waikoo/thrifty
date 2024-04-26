"use client"
import Link from "next/link";

import Logo from "@/app/components/navigation/Logo";
import WithHome from "@/app/components/navigation/WithHome";
import { useThemeStore } from "@/state/themeState";
import { albert_500, albert_600 } from "@/utils/fonts";
import FooterSmallDropdown from "@/app/components/footer/FooterSmallDropdown";
import FooterSocials from "@/app/components/footer/FooterSocials";
import { Gender, Locales } from "@/types/link";

type FooterSmallProps = {
  lang: Locales
  gender: Gender
}

export default function FooterSmall({ lang, gender }: FooterSmallProps) {
  const { theme } = useThemeStore()
  const logoColor = theme === 'dark' ? "#3e3e3e" : "#e3e3e3"

  return (
    <footer className="py-16 pt-10 w-full">
      <WithHome className=""><Logo logoColor={logoColor} /></WithHome>

      <div className={`flex flex-col gap-3 text-[0.8125rem] mt-10 ${albert_600.className}`}>
        <FooterSmallDropdown theme={theme} title="ACCOUNT">
          <Link href={`${lang}/${gender}/profile`}>Profile</Link>
          <Link href={`${lang}/${gender}/orders`}>Orders</Link>
          <Link href={`${lang}/${gender}/returns`}>Returns</Link>
          <Link href={`${lang}/${gender}/settings`}>Settings</Link>
        </FooterSmallDropdown>

        <FooterSmallDropdown theme={theme} title="HELP">
          <Link href={`${lang}/${gender}/help`}>About Us</Link>
          <Link href={`${lang}/${gender}/help?section=1`}>Shipping & Delivery</Link>
          <Link href={`${lang}/${gender}/returns`}>Returns</Link>
          <Link href={`${lang}/${gender}/help?section=3`}>FAQ</Link>
          <Link href={`${lang}/${gender}/help?section=4`}>Contact</Link>
        </FooterSmallDropdown>
      </div>

      <FooterSocials className="flex w-full justify-center items-center gap-7 my-10" theme={theme} instaSize={35} fbSize={28} />


      <small className={`flex justify-center text-[0.875rem] mt-6 ${albert_500.className}`}>2024 Triftstudio.</small>
    </footer>
  )
}

