import FooterPhoneAndEmail from "@/app/components/footer/FooterPhoneAndEmail";
import FooterSocials from "@/app/components/footer/FooterSocials";
import useViewport from "@/app/components/hooks/useViewport";
import { viewport } from "@/app/components/data/universalStyles";
import { useThemeStore } from "@/state/themeState";
import { Logo, WithHome } from "@/app/components/navigation";

export default function FooterContact() {
  const viewportWidth = useViewport()
  const { theme } = useThemeStore()

  const isDark = document.documentElement.classList.contains('dark')

  return (
    <div className="flex flex-col gap-7">

      {viewportWidth > viewport.xl && (
        <WithHome className="" >
          <Logo
            logoColor={isDark ? 'white' : 'black'}
            width="100%"
            invert={false}
          />
        </WithHome>)}

      <FooterPhoneAndEmail invert={false} />
      <FooterSocials theme={theme} className="flex gap-4 items-center" fbSize={28} instaSize={35} />
    </div>
  )
}
