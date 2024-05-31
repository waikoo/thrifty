/* eslint-disable @next/next/no-img-element */
import HelpTitle from "@/app/components/help/HelpTitle"
import OpeningHours from "@/app/components/footer/OpeningHours"
import FooterContact from "@/app/components/footer/FooterContact"
import { albert_900 } from "@/utils/fonts"

type ContactProps = {
  children: React.ReactNode
  className?: string
}

export default function Contact({ children, className }: ContactProps) {

  return (
    <div className={`${className} flex`}>
      <div className={`p-4`}>
        <HelpTitle>{children}</HelpTitle>
        <OpeningHours invert={true} />
        <br />

        <span className={`text-[14px] ${albert_900.className} text-t_black mb-10`}>CUSTOMER SUPPORT</span>

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
