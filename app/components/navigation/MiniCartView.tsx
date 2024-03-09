"use client"
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import { usePathname } from "next/navigation";

import { supabase } from "@/app/supabase";
import IconCheckMark from "@/app/components/navigation/icons/IconCheckMark";
import getLangAndGender from "@/utils/getLangAndGender";
import { useCartStore } from "@/state/uiState";
import { ProductItemType } from "@/types/productItem";
import { capitalize } from "@/utils/capitalize";
import { EURO } from "@/app/components/data/orderSummary";

type MinICartViewProps = {
  miniCartViewRef: React.RefObject<HTMLDivElement>
  setShowMiniCartView: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MiniCartView({ miniCartViewRef, setShowMiniCartView }: MinICartViewProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const { cart, removeFromCart } = useCartStore()
  const [cartItems, setCartItems] = useState<ProductItemType[]>([])

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

  return (
    <div className="bg-bkg text-content absolute right-0 top-8 z-50 flex flex-col justify-center gap-5 p-4" ref={miniCartViewRef}
    >

      <div className="flex flex-col gap-3">
        {cartItems.map((item) => (
          <div key={item.uuid}>
            <div className="flex items-baseline justify-center gap-2">
              <IconCheckMark />
              <span className="whitespace-nowrap text-[0.75rem] font-medium">Added To Cart</span>
            </div>

            <div className="flex gap-2">
              <Image src={item.img_url[0]} alt="cart image" width={100} height={100} />
              <div className="flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[0.625rem] font-medium">{item.brand.toUpperCase()}</span>
                  <span className="cursor-pointer p-2 text-[0.625rem]" onClick={() => removeFromCart(item.uuid)}>X</span>
                </div>
                <span className="text-[0.625rem] font-light">{capitalize(item.color)} {capitalize(item.material)} {capitalize(item.category)}</span>
                <span className="text-[0.625rem] font-light">Size: {item.size}</span>
                <span className="text-[0.6875rem] font-semibold">{EURO}{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between gap-2">

        <Link href={`/${lang}/${gender}/cart`}>
          <button className="bg-bkg text-content border-content whitespace-nowrap border-[0.1rem] px-4 py-2">
            VIEW CART ({cart.length})
          </button>
        </Link>

        <Link href={`/${lang}/checkout`}>
          <button className="bg-content text-bkg border-bkg border-[0.1rem] px-4 py-2">
            CHECKOUT
          </button>
        </Link>

      </div>
    </div>
  )
}
