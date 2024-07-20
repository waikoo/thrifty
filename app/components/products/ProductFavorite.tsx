"use client"
import { ProductItemType } from "@/types/productItem"
import { useEffect, useState } from "react";
import IconHeart from "@/app/components/products/icons/IconHeart"
import updateLocalStorage from "@/utils/updateLocalStorage";
import { useFavoriteStore } from "@/state/client/favoriteState";

type ProductFavoriteProps = {
  product: ProductItemType
  products: ProductItemType[]
}

export default function ProductFavorite({ product, products }: ProductFavoriteProps) {
  const [favoritedProducts, setFavoritedProducts] = useState<Record<string, boolean>>({})
  const { favorites, toggleFavorite } = useFavoriteStore()

  function onClickHandler(e: React.MouseEvent<HTMLDivElement>): void {
    const productUuid = e.currentTarget.dataset.uuid

    if (productUuid) {
      setFavoritedProducts(prevState => ({
        ...prevState,
        [productUuid]: !prevState[productUuid]
      }));
      toggleFavorite(productUuid)
      updateLocalStorage(productUuid, favorites)
    }
  }

  useEffect(() => {
    const favoritesLocal = JSON.parse(localStorage.getItem('favorites') || '[]')
    products.forEach(product => {
      if (favoritesLocal.includes(product.uuid)) {
        setFavoritedProducts(prevState => ({
          ...prevState,
          [product.uuid]: true
        }));
      } else {
        setFavoritedProducts(prevState => ({
          ...prevState,
          [product.uuid]: false
        }));
      }
    })

  }, [])
  return (
    <div
      className="bg-content absolute right-3 top-3 z-20 grid cursor-pointer place-items-center rounded-full p-2"
      onClick={onClickHandler}
      data-uuid={product.uuid}>
      <IconHeart className="" isFavorited={!!favoritedProducts[product.uuid]} />
    </div>
  )
}

