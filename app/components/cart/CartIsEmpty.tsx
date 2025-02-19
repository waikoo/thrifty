import { usePathname } from "next/navigation";

import { albert_500, albert_700, albert_900 } from "@/utils/fonts";
import HeroButton from "@/app/components/home/HeroButton";
import getLangAndGender from "@/utils/getLangAndGender";

export default function CartIsEmpty() {
  const { gender, lang } = getLangAndGender(usePathname())

  return (
    <div className="bg-white text-t_black w-screen py-20 px-20 text-center tracking-wider h-[calc(80dvh)]">
      <h4 className={`mb-[1.375rem] text-[17px] sm:text-[21px] xl:text-[18px] ${albert_900.className}`}>
        Your cart is empty.
      </h4>

      <p className={`sm:text-[17px] text-[14px] xl:text-[14px] pb-10 ${albert_500.className}`}>
        Looks like you haven't added any items to your cart yet!
      </p>

      <HeroButton
        gender={gender}
        lang={lang}
        heroState="new_in"
        position="static"
        bgColor="bg-t_mustard"
        textColor="text-t_black"
        font={albert_700.className}
      />
    </div>
  )
}
