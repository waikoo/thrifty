"use client"
import { useState } from "react";

import ProductItem from "@/app/components/products/ProductItem"
import IconHeart from "@/app/components/products/icons/IconHeart"
import { ProductItemType } from "@/types/productItem";

type ProductRecommendationsGridProps = {
  products: ProductItemType[]
  imagesRef: React.RefObject<HTMLDivElement>;
}

export default function ProductRecommendationsGrid({ products, imagesRef }: ProductRecommendationsGridProps) {
  const [favoritedProducts, setFavoritedProducts] = useState<Record<string, boolean>>({})

  function onClickHandler(e: React.MouseEvent<HTMLDivElement>): void {
    const productUuid = e.currentTarget.dataset.uuid
    if (productUuid) {
      setFavoritedProducts(prevState => ({
        ...prevState,
        [productUuid]: !prevState[productUuid]
      }));
    }
  }

  return (
    <div className="scrollbar scrollbar-thumb-darkgrey scrollbar-thumb-rounded grid h-auto w-full snap-x snap-mandatory auto-cols-auto grid-flow-col gap-[0.313rem] overflow-x-auto overscroll-x-contain" ref={imagesRef} draggable={false}>

      {products?.map((product, index) => {

        return (
          <div className="relative" key={product.uuid}>
            <ProductItem
              product={product}
              index={index}
              className={"w-[19.5rem] select-none"}
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
