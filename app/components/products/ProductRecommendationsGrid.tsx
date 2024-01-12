"use client"
import { useEffect, useState } from "react";

import ProductItem from "@/app/components/products/ProductItem"
import IconHeart from "@/app/components/products/icons/IconHeart"
import { ProductItemType } from "@/types/productItem";
import { useFavoriteStore } from "@/state/uiState";
import useLocalStorage from '@/app/components/hooks/useLocalStorage'
import updateLocalStorage from "@/utils/updateLocalStorage";

type ProductRecommendationsGridProps = {
  products: ProductItemType[]
  imagesRef: React.RefObject<HTMLDivElement>;
}

export default function ProductRecommendationsGrid({ products, imagesRef }: ProductRecommendationsGridProps) {
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
    <div className="scrollbar-none mb-20 grid h-auto w-full snap-x snap-mandatory auto-cols-auto grid-flow-col justify-center gap-16 overflow-x-auto overscroll-x-contain" ref={imagesRef} draggable={false}>

      {products?.map((product, index) => {

        return (
          <div className="relative" key={product.uuid}>
            <ProductItem
              product={product}
              index={index}
              className={"w-[16rem] select-none"}
            />
            <div className="bg-content absolute right-3 top-3 z-20 grid cursor-pointer place-items-center rounded-full p-2" onClick={onClickHandler} data-uuid={product.uuid}>
              <IconHeart className="" isFavorited={!!favoritedProducts[product.uuid]} />
            </div>
          </div>
        );
      })}
    </div>

  )
}
