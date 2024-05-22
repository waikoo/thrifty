import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

type FooterSocialsProps = {
  className?: string
  theme: 'light' | 'dark'
  instaSize: number
  fbSize: number
}

export default function FooterSocials({ className, theme, instaSize, fbSize }: FooterSocialsProps) {
  const socialColor = 'white'

  return (
    <div className={className}>
      <FaFacebook size={fbSize} color={socialColor} />
      <AiFillInstagram size={instaSize} color={socialColor} />
    </div>
  )
}

