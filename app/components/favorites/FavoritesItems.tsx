"use client"
import { useEffect, useState } from "react"

import { supabase } from "@/app/supabase"

import { ProductItemType } from "@/types/productItem"
import { getFromLocalStorage } from "@/utils/getFromLocalStorage"
import { fetchProductsByUuids } from "@/utils/fetchProductsByUuids"
import CartItem from "@/app/components/cart/CartItem"
import FavoritesControls from "@/app/components/favorites/FavoritesControls"
import FavoritesItem from "@/app/components/favorites/FavoritesItem"
import { useFavoriteStore } from "@/state/client/favoriteState"

export default function FavoritesItems() {
  const [products, setProducts] = useState<ProductItemType[]>([])
  const { favorites } = useFavoriteStore()

  useEffect(() => {
    const favoritesUuids = getFromLocalStorage('favorites')
    if (favoritesUuids) {
      fetchProductsByUuids(supabase, favoritesUuids).then((products => {
        if (products) {
          setProducts(products)
        }
      }))
    }
  }, [favorites])

  return (
    <section className="">
      <FavoritesControls />

      <div className="mt-10 grid grid-cols-2 gap-12">
        {products.map((product) => (
          <FavoritesItem key={product.uuid} product={product} />
        ))}
      </div>

    </section>
  )
}
