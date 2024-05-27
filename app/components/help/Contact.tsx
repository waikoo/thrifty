import HelpTitle from "@/app/components/help/HelpTitle"
import OpeningHours from "@/app/components/footer/OpeningHours"
import FooterContact from "@/app/components/footer/FooterContact"

type ContactProps = {
  children: React.ReactNode
  className?: string
}

export default function Contact({ children, className }: ContactProps) {

  return (
    <div className={`${className}`}>
      <HelpTitle>{children}</HelpTitle>
      <OpeningHours />
      <br />
      <FooterContact />
    </div>
  )
}
