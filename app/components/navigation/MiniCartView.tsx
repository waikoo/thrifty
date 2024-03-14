"use client"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { supabase } from "@/app/supabase";
import IconCheckMark from "@/app/components/navigation/icons/IconCheckMark";
import { useCartStore, useNavigationStore } from "@/state/uiState";
import MiniCartItem from "@/app/components/navigation/MiniCartItem";
import getLangAndGender from "@/utils/getLangAndGender";
import { ProductItemType } from "@/types/productItem";

export default function MiniCartView() {
  const { lang, gender } = getLangAndGender(usePathname())
  const { cart } = useCartStore()
  const [cartItems, setCartItems] = useState<ProductItemType[]>([])
  const miniCartViewRef = useRef<HTMLDivElement>(null)
  const { setShowMiniCartView } = useNavigationStore()

  useEffect(() => {
    const getCartProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .in('uuid', cart)
      if (error) console.error(error)
      return data
    }
    getCartProducts().then(data => {
      if (data) {
        setCartItems(data)
      }
    })
  }, [cart])

  const onMouseLeave = (e: React.MouseEvent) => {
    // if cursor leaves MiniCartView, hide MiniCartView 
    if (e.target === miniCartViewRef.current) {
      setShowMiniCartView(false)
    }
  }

  return (
    <div className="bg-bkg text-content absolute right-0 top-8 z-50 flex min-w-[16rem] flex-col justify-center gap-5 overflow-y-scroll p-4"
      ref={miniCartViewRef}
      onMouseLeave={onMouseLeave}
    >

      <div className="relative h-[15rem]">
        <div className="bg-bkg flex h-[14rem] w-full flex-col gap-6">

          {cartItems.map((item) => (
            <div key={item.uuid} className="max-w-content">
              <div className="flex w-full items-baseline justify-center gap-2">
                <IconCheckMark />
                <span className="whitespace-nowrap text-[0.75rem] font-medium">Added To Cart</span>
              </div>

              <MiniCartItem item={item} />
            </div>
          ))}

        </div>
        <div className="bg-bkg fixed top-[19.4rem] z-50 flex justify-between gap-2 pb-[0.55rem]">

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
      </div>

    </div>
  )
}
