"use client"
import { usePathname, useRouter } from "next/navigation";

import getLangAndGender from "@/utils/getLangAndGender";
import { useUserSession } from "@/app/components/hooks"
import { useUIStore } from "@/state/client/uiState";
import FooterTitle from "@/app/components/footer/FooterTitle";
import { capitalize } from "@/utils/capitalize";

type FooterAccountProps = {
  textColor: string
  textSize: string
  tracking: string
}

export default function FooterAccount({ textColor, textSize, tracking }: FooterAccountProps) {
  const { gender, lang } = getLangAndGender(usePathname())
  const { showSignIn, setShowSignIn } = useUIStore()
  const { session, error } = useUserSession()
  const router = useRouter()
  const links = ['profile', 'orders', 'returns', 'settings']

  return (
    <div className={`footerText flex flex-col gap-7 text-[#f2f2f2] ${textSize}`}>
      <FooterTitle>ACCOUNT</FooterTitle>

      <div className={`flex flex-col gap-2 ${textColor} ${tracking}`}>

        {links.map((link) => (
          <span
            className={`cursor-pointer`}
            key={link}
            onClick={() => !session
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
