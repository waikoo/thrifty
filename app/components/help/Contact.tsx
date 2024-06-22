/* eslint-disable @next/next/no-img-element */
import HelpTitle from "@/app/components/help/HelpTitle"
import OpeningHours from "@/app/components/footer/OpeningHours"
import FooterContact from "@/app/components/footer/FooterContact"
import { albert_800, albert_900 } from "@/utils/fonts"

type ContactProps = {
  children: React.ReactNode
  className?: string
}

export default function Contact({ children, className }: ContactProps) {

  return (
    <div className={`${className} flex flex-col xl:flex-row`}>
      <div className={`p-[48px] text-left`}>
        <HelpTitle>{children}</HelpTitle>

        <OpeningHours invert={true} />
        <br />

        <p className={`text-[13px] sm:text-[17px] xl:text-[16px] ${albert_800.className} text-t_black pb-6 mt-5`}>CUSTOMER SUPPORT</p>

        <FooterContact
          hideLogo={true}
          invertSocials={false}
          className="text-[13px] sm:text-[17px] xl:text-[16px] "
        />

      </div>

      <div className="flex-grow h-dvh">
        <img src="/images/help/contact.jpg"
          className="w-full"
          alt="a lit up storefront from the outside street full with colorful clothes"
        />
      </div>
    </div>
  )
}
