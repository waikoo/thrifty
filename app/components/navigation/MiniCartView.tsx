"use client"
import { useEffect, useRef, useState } from "react";

import { supabase } from "@/app/supabase";
import IconCheckMark from "@/app/components/navigation/icons/IconCheckMark";
import MiniCartItem from "@/app/components/navigation/MiniCartItem";
import { ProductItemType } from "@/types/productItem";
import { useNavigationStore } from "@/state/client/navigationState";
import { useCartStore } from "@/state/client/cartState";

export default function MiniCartView() {
  const { cart } = useCartStore()
  const [cartItems, setCartItems] = useState<ProductItemType[]>([])
  const miniCartViewRef = useRef<HTMLDivElement>(null)
  const { showMiniCartView, setShowMiniCartView } = useNavigationStore()

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
    <div className="absolute bg-t_white dark:bg-t_black text-t_black dark:text-t_white scrollbar scrollbar-thumb-darkgrey scrollbar-thumb-rounded right-0 top-8 z-50 flex min-w-[16rem] flex-col justify-center gap-5 overflow-y-scroll p-4"
      ref={miniCartViewRef}
      onMouseLeave={onMouseLeave}
      onMouseEnter={() => setShowMiniCartView(true)}
    >

      <div className="relative h-[15rem]">
        <div className="bg-bkg flex h-[14rem] w-full flex-col gap-6">

          {cartItems.length > 0 && cartItems.map((item) => (
            <div key={item.uuid} className="max-w-content">
              <div className="flex w-full items-baseline justify-center gap-2">
                <IconCheckMark />
                <span className="whitespace-nowrap text-[0.75rem] font-medium">Added To Cart</span>
              </div>

              <MiniCartItem item={item} />
            </div>
          ))}

          {cart.length > 0 && cartItems.length === 0 && (
            <span className="mt-20 text-center">Something went wrong</span>
          )}

          <br />
        </div>
      </div>

    </div>
  )
}
