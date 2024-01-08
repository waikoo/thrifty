import { ProductItemType } from "@/types/productItem"
import { capitalize } from "@/utils/capitalize"
import { ProductInfoItem } from "@/app/components/products/ProductInfoItem"
import { getDeliveryDate } from "@/utils/getDeliveryDate"
import ProductShippingReturnsInfo from "@/app/components/products/ProductShippingReturnsInfo"

type ProductInfoProps = {
  matchedProduct: ProductItemType
}

export const ProductInfo = ({ matchedProduct }: ProductInfoProps) => {

  return (
    <div>
      <div className="flex w-1/2 flex-col">
        <div className="flex gap-2">
          <span className="whitespace-nowrap text-[0.875rem] font-semibold"> {matchedProduct.brand.toUpperCase()} </span> <span> {capitalize(matchedProduct.type)}</span>
        </div>

        <span className="mb-4 py-6 text-[1.125rem] font-semibold">€{matchedProduct.price}</span>

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

      <div className="flex flex-col justify-center">
        <button className="bg-content text-bkg mt-10 py-2 text-[0.75rem] font-semibold">ADD TO CART</button>
        <p className="pt-5 text-center text-[0.625rem] font-semibold">AND RESERVE FOR 30 MINUTES</p>
      </div>

      <ProductShippingReturnsInfo />
    </div>
  )
}
