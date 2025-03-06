"use client"
import { usePathname, useRouter } from "next/navigation";

import getLangAndGender from "@/utils/getLangAndGender";
import { useUIStore } from "@/state/client/uiState";
import FooterTitle from "@/app/components/footer/FooterTitle";
import { capitalize } from "@/utils/capitalize";
import useSupabaseGetSession from "../hooks/useSupabaseGetSession";
import { albert } from "@/utils/fonts";

type FooterAccountProps = {
  textColor: string
  textSize: string
  tracking: string
}

export default function FooterAccount({ textColor, textSize, tracking }: FooterAccountProps) {
  const { gender, lang } = getLangAndGender(usePathname())
  const { showSignIn, setShowSignIn } = useUIStore()
  const { isSession } = useSupabaseGetSession()
  const router = useRouter()
  const links = ['profile', 'orders', 'returns', 'settings']

  return (
    <div className={`footerText flex flex-col gap-7 text-[#f2f2f2] ${textSize}`}>
      <FooterTitle>ACCOUNT</FooterTitle>

      <div className={`flex flex-col gap-2 ${textColor} ${tracking}`}>

        {links.map((link) => (
          <span
            className={`cursor-pointer ${albert.className}`}
            key={link}
            onClick={() => !isSession
              ? setShowSignIn(showSignIn ? false : true)
              : router.push(`/${lang}/${gender}/${link}`)}
          >
            {capitalize(link)}
          </span>
        ))}
      </div>
    </div>
  )
}
