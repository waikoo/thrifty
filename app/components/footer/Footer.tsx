import { FooterAccount, FooterHelp, FooterShop, FooterContact } from ".";
import { ThemeToggler } from "../generic";
import { Logo, WithHome } from "../navigation";
import OpeningHours from "./OpeningHours";

export default function Footer() {

  return (
    <footer className="bg-bkg text-content h-10rem relative flex w-full justify-evenly gap-5 bg-green-300 py-12">
      <div className="flex flex-col gap-7">

        <WithHome className="justify-start" > <Logo /> </WithHome>
        <OpeningHours />
        <ThemeToggler />

      </div>

      <FooterShop />
      <FooterAccount />
      <FooterHelp />
      <FooterContact />

      <div className="absolute bottom-12 text-[0.875rem]">
        <span className="font-bold">SITEMAP</span><span> | </span><span>2023 Triftstudio.</span>
      </div>
    </footer>

  )
}
