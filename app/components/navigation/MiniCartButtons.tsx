import Link from "next/link";
import { usePathname } from "next/navigation";

import getLangAndGender from "@/utils/getLangAndGender";
import { useCartStore } from "@/state/client/cartState";

export default function MiniCartButtons() {
  const { lang, gender } = getLangAndGender(usePathname())
  const { cart } = useCartStore()

  return (
    <div className="bg-bkg absolute -bottom-[17.5rem] right-6 z-50 flex justify-between gap-2 px-[0.55rem] pb-[0.55rem]">

      <Link href={`/${lang}/${gender}/cart`}>
        <button className="bg-bkg text-content border-content whitespace-nowrap border-[0.1rem] px-4 py-2 text-[10px] font-semibold">
          VIEW CART ({cart.length})
        </button>
      </Link>

      <Link href={`/${lang}/checkout`}>
        <button className="bg-content text-bkg border-bkg border-[0.1rem] px-4 py-2 text-[10px] font-semibold">
          CHECKOUT
        </button>
      </Link>

    </div>
  )
}
