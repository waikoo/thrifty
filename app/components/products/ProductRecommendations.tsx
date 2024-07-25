import { ProductItemType } from "@/types/productItem"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

import ProductItem from "@/app/components/products/ProductItem"
import ProductFavorite from "@/app/components/products/ProductFavorite"
import { supabase } from "@/app/supabase"

type ProductRecommendationsProps = {
  matchedProduct: ProductItemType
}

export default async function ProductRecommendations({ matchedProduct }: ProductRecommendationsProps) {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', matchedProduct.category)
    .eq('gender', matchedProduct.gender)
    .eq('size', matchedProduct.size)
    .neq('uuid', matchedProduct.uuid)

  if (error) {
    console.error(error);
    return null;
  }

  return products.length === 0 ? null : (

    <section className="mb-20 mx-auto w-full overflow-hidden">
      <h1 className="text-content block whitespace-nowrap py-20 text-center text-[1rem] font-semibold">
        NEW ARRIVALS IN THIS SIZE
      </h1>

      <Carousel className="mx-auto sm:w-[75%]"
        opts={{ loop: true }}
      >
        <CarouselContent className="">

          {products?.map((product, index) => {
            return (
              <CarouselItem
                key={`product-recommendation-${index}`}
                className={`basis-1/8 mx-auto`}
              >

                <div className="relative w-[18rem]" key={product.uuid}>
                  <ProductItem
                    product={product}
                    index={index}
                    className={"h-[20rem] w-[100%] select-none "}
                  />
                  <ProductFavorite product={product} products={products} />
                </div>

              </CarouselItem>
            )
          })}

        </CarouselContent>

        <CarouselPrevious variant={'ghost'} />
        <CarouselNext variant={'ghost'} />

      </Carousel>

    </section>
  )
}
