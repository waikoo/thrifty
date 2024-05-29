import Email from "@/app/components/footer/icons/Email";
import Phone from "@/app/components/footer/icons/Phone";

type FooterPhoneAndEmailProps = {
  invert?: boolean
}

export default function FooterPhoneAndEmail({ invert }: FooterPhoneAndEmailProps) {
  const invertedStyle = invert ? 'text-t_white' : 'text-t_black'

  return (
    <div className={`flex flex-col gap-3 ${invertedStyle}`}>
      <div className="flex items-center gap-2 underline underline-offset-2">
        <Phone invert={invert} />
        <span>1234567890</span>
      </div>
      <div className="flex items-center gap-2 underline underline-offset-2">
        <Email invert={invert} />
        <a href="mailto:thriftshop@shop.com">thriftshop@shop.com</a>
      </div>
    </div>
  )
}

