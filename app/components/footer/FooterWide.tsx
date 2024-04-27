import { FooterAccount, FooterHelp, FooterShop, FooterContact } from "@/app/components/footer";
import { Logo, WithHome } from "@/app/components/navigation";
import OpeningHours from "@/app/components/footer/OpeningHours";
import useViewport from "../hooks/useViewport";
import { viewport } from "../data/universalStyles";
import { useThemeStore } from "@/state/themeState";

export default function FooterWide() {
  const viewportWidth = useViewport()
  const { theme } = useThemeStore()
  const logoColor = theme === 'dark' ? "#3e3e3e" : "#e3e3e3"
  const textColor = theme === 'light' ? "*:text-[#484848]" : "*:text-[#c2c2c2]"
  const textSize = '*:text-[1rem]'
  const tracking = '*:tracking-wider'

  return (
    <footer className="dark:bg-t_black bg-t_white relative w-full py-[4rem] pb-[8rem]">
      {viewportWidth < viewport.xl && <WithHome className="w-[90%] mx-auto"> <Logo logoColor={logoColor} /> </WithHome>}
      <div className="flex justify-evenly gap-5 sm:mt-16">

        <FooterContact />
        <FooterShop textColor={textColor} textSize={textSize} tracking={tracking} />
        <FooterAccount textColor={textColor} textSize={textSize} tracking={tracking} />
        <FooterHelp textColor={textColor} textSize={textSize} tracking={tracking} />

        {viewportWidth > viewport.xl && (
          <OpeningHours
            textSize={textSize}
            tracking={tracking}
            theme={theme}
          />
        )}

        <div className="absolute bottom-10 text-[0.875rem]">
          <span>2024 Triftstudio.</span>
        </div>
      </div>
    </footer>
  )
}
