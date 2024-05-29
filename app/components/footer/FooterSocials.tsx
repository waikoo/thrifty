import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

type FooterSocialsProps = {
  className?: string
  theme: 'light' | 'dark'
  instaSize: number
  fbSize: number
  invert?: boolean
}

export default function FooterSocials({ className, theme, instaSize, fbSize, invert }: FooterSocialsProps) {
  const socialColor = invert ? 'black' : 'white'

  return (
    <div className={className}>
      <FaFacebook size={fbSize} color={socialColor} />
      <AiFillInstagram size={instaSize} color={socialColor} />
    </div>
  )
}

