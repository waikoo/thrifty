import HelpTitle from "@/app/components/help/HelpTitle"
import OpeningHours from "@/app/components/footer/OpeningHours"
import FooterContact from "@/app/components/footer/FooterContact"

type ContactProps = {
  children: React.ReactNode
}

export default function Contact({ children }: ContactProps) {

  return (
    <>
      <HelpTitle>{children}</HelpTitle>
      <OpeningHours />
      <br />
      <FooterContact />
    </>
  )
}
