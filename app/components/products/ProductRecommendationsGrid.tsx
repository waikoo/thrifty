import ProductItem from "@/app/components/products/ProductItem"
import IconHeart from "@/app/components/products/icons/IconHeart"
import { ProductItemType } from "@/types/productItem";

type ProductRecommendationsGridProps = {
  products: ProductItemType[]
  imagesRef: React.RefObject<HTMLDivElement>;
}

export default function ProductRecommendationsGrid({ products, imagesRef }: ProductRecommendationsGridProps) {

  return (
    <div className="scrollbar scrollbar-thumb-darkgrey scrollbar-thumb-rounded grid h-auto w-full snap-x snap-mandatory auto-cols-auto grid-flow-col gap-[0.313rem] overflow-x-auto overscroll-x-contain" ref={imagesRef} draggable={false}>

      {products?.map((product, index) => {
        console.log(product)
        return (
          <div className="relative" key={product.uuid}>
            <ProductItem
              product={product}
              index={index}
              className={"w-[19.5rem]"}
            />
            <IconHeart className="absolute right-0 top-0" />
          </div>
        );
      })}
    </div>

  )
}
