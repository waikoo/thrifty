"use client"
import AccountMenuBarItem from "@/app/components/navigation/AccountMenuBarItem"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel"
import { usePathname, useRouter } from "next/navigation"
import useUserSession from "../hooks/useUserSession"
import { useUIStore } from "@/state/client/uiState"
import getLangAndGender from "@/utils/getLangAndGender"
import { albert_600, albert_900 } from "@/utils/fonts"
import { useState } from "react"

export default function AccountMenuBar() {
  const accountMenuBarItems = ['addresses', 'orders', 'returns', 'settings', 'help']
  const { gender, lang } = getLangAndGender(usePathname())
  const { showSignIn, setShowSignIn } = useUIStore()
  const { session, error } = useUserSession()
  const router = useRouter()
  const pathname = usePathname()
  const endpoint = pathname.split('/')[3]
  const selectedStyles = endpoint === 'profile' ? `bg-t_black text-t_white ${albert_900.className}` : ''
  const [isHovered, setIsHovered] = useState(false)
  const hoveredStyles = isHovered ? `${albert_900.className}` : ''

  return (
    <section className="*:text-t_black bg-t_mustard w-screen justify-center gap-16 mt-2">
      <div className="">

        <Carousel>
          <CarouselContent className="sm:grid sm:grid-cols-6 sm:justify-items-center sm:max-w-[700px] sm:mx-auto">
            <div className="flex items-center gap-2">
              <span onClick={() => !session
                ? setShowSignIn(showSignIn ? false : true)
                : router.push(`/${lang}/${gender}/profile`)}
                className={`cursor-pointer p-3 px-5 text-[0.8125rem] sm:text-[1rem] xl:text-[0.875rem] ${albert_600.className} ${selectedStyles} ${hoveredStyles}`}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              >
                PROFILE
              </span>
            </div>

            {accountMenuBarItems.map((item) => (
              <CarouselItem key={item} className="basis-1/3 flex justify-center">
                <AccountMenuBarItem>{item.toUpperCase()}</AccountMenuBarItem>
              </CarouselItem>
            ))}

          </CarouselContent>
        </Carousel>

      </div>
    </section>
  )
}
