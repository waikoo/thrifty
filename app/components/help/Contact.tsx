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

        <span className={`${albert_900.className} text-[24px] sm:text-[45px]`}>CONTACT</span>
        <OpeningHours invert={true} />
        <br />

        <span className={`text-[13px] xl:text-[16px] ${albert_800.className} text-t_black mb-10`}>CUSTOMER SUPPORT</span>

        <FooterContact hideLogo={true}
          invertSocials={false}
        />
      </div>

      <div className="flex-grow h-dvh">
        <img src="/images/help/contact.jpg"
          className="object-cover h-full"
          alt="a lit up storefront from the outside street full with colorful clothes"
        />
      </div>
    </div>
  )
}
