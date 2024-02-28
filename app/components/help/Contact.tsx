import HelpTitle from "@/app/components/help/HelpTitle"
import OpeningHours from "@/app/components/footer/OpeningHours"
import FooterContact from "@/app/components/footer/FooterContact"

export default function Contact() {

  return (
    <>
      <HelpTitle>CONTACT</HelpTitle>
      <OpeningHours />
      <br />
      <FooterContact noTitle={true} />
    </>
  )
}
