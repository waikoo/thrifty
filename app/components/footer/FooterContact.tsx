import { Email, Phone, Facebook, Instagram } from ".";

type FooterContactProps = {
  noTitle?: boolean
}

export default function FooterContact({ noTitle = false }: FooterContactProps) {

  return (
    <div className="footerText flex flex-col gap-7">
      {noTitle ? null :
        <h3 className={`footerTitles`}>CONTACT</h3>
      }

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Phone />
            <span>123456789</span>
          </div>

          <div className="flex items-center gap-2">
            <Email />
            <a href="mailto:thriftshop@shop.com">thriftshop@shop.com</a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>

    </div>
  )
}
// TODO: Add images & socials
