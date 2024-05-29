import FooterPhoneAndEmail from "@/app/components/footer/FooterPhoneAndEmail";
import FooterSocials from "@/app/components/footer/FooterSocials";
import useViewport from "@/app/components/hooks/useViewport";
import { viewport } from "@/app/components/data/universalStyles";
import { useThemeStore } from "@/state/themeState";
import { Logo, WithHome } from "@/app/components/navigation";

type FooterContactProps = {
  hideLogo?: boolean
  invertSocials?: boolean
}

export default function FooterContact({ hideLogo = false, invertSocials = false }: FooterContactProps) {
  const viewportWidth = useViewport()
  const { theme } = useThemeStore()

  return (
    <div className="flex flex-col gap-7">

      {viewportWidth > viewport.xl && !hideLogo && (
        <WithHome className="" >
          <Logo
            logoColor={'#d2d62e'}
            width="100%"
            invert={false}
          />
        </WithHome>)}

      <FooterPhoneAndEmail invert={invertSocials} />
      <FooterSocials theme={theme}
        className="flex gap-4 items-center"
        fbSize={28}
        instaSize={35}
        invert={true}
      />
    </div>
  )
}
