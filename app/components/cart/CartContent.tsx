"use client"
import CartIsEmpty from "@/app/components/cart/CartIsEmpty";
import CartItems from "@/app/components/cart/CartItems";
import { useCartStore } from "@/state/client/cartState";

export default function CartContent() {
  const { cartLength } = useCartStore()

  return cartLength < 1 ? <CartIsEmpty /> : <CartItems />
}
