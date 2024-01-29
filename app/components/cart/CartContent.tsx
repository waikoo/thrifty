"use client"
import { useCartStore } from "@/state/uiState"
import CartIsEmpty from "@/app/components/cart/CartIsEmpty";
import CartItems from "@/app/components/cart/CartItems";

export default function CartContent() {
  const { cartLength } = useCartStore()

  return cartLength < 1 ? <CartIsEmpty /> : <CartItems />
}
