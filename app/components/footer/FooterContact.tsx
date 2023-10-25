import { twMerge as tm } from 'tailwind-merge'

type FooterContactProps = {
  // className?: string
}

export default function({ }: FooterContactProps) {

  return (
    <div className="flex flex-col">
      <h3 className={`footerTitles`}>CONTACT</h3>
      <span>123456789</span>
      <a href="thriftshop@shop.com">thriftshop@shop.com</a>
    </div>
  )
}
