import { ProductInfoItem } from "@/app/components/products/ProductInfoItem"
import ProductShippingReturnsInfo from "@/app/components/products/ProductShippingReturnsInfo"
import { getDeliveryDate } from "@/utils/getDeliveryDate"
import { capitalize } from "@/utils/capitalize"
import { ProductItemType } from "@/types/productItem"
import ProductAddToCart from "@/app/components/products/ProductAddToCart"
import { albert_500, albert_800, albert_900 } from "@/utils/fonts"
import { EURO } from "@/app/components/data/orderSummary"
import ProductFavoriteAndShare from "@/app/components/products/ProductFavoriteAndShare"

type ProductInfoProps = {
  matchedProduct: ProductItemType
}

export const ProductInfo = ({ matchedProduct }: ProductInfoProps) => {

  return (
    <div className="relative max-w-[500px]">
      <div className="flex w-1/2 flex-col">
        <div className="flex gap-2 flex-col">
          <span className={`whitespace-nowrap xl:text-[20px] ${albert_800.className}`}>
            {matchedProduct.brand.toUpperCase()}
          </span>

          <span className={`xl:text-[15px] ${albert_500.className}`}>
            {capitalize(matchedProduct.type)}
          </span>
        </div>

        <span className={`mb-4 pt-2 pb-6 xl:text-[22px] ${albert_900.className}`}>
          {EURO}{matchedProduct.price}
        </span>

        <div className="flex flex-col gap-2">
          <ProductInfoItem category="Size">{capitalize(matchedProduct.size)}</ProductInfoItem>
          <ProductInfoItem category="Color">{capitalize(matchedProduct.color)}</ProductInfoItem>
          <ProductInfoItem category="Material">{capitalize(matchedProduct.material)}</ProductInfoItem>
          <ProductInfoItem category="Condition">{capitalize(matchedProduct.condition)}</ProductInfoItem>
          <ProductInfoItem
            category="Estimated Delivery"
            inverse={true}
            className="pt-8">
            {getDeliveryDate(new Date())}
          </ProductInfoItem>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-5 min-w-full">
        <ProductAddToCart
          uuid={matchedProduct.uuid}
          className="xl:hover:bg-[#C9CC2C] border-none w-[275px]"
          bgColor="bg-t_mustard"
          textColor="text-t_black"
        >
          ADD TO CART
        </ProductAddToCart>

        <ProductFavoriteAndShare matchedProduct={matchedProduct} />
      </div>

      <ProductShippingReturnsInfo />
    </div>
  )
}
