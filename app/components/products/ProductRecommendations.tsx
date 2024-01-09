import { MockDBProvider } from "@/db/MockDBProvider"
import { ProductItemType } from "@/types/productItem"
import ProductItem from "@/app/components/products/ProductItem"
import IconHeart from "@/app/components/products/icons/IconHeart"

type ProductRecommendationsProps = {
  matchedProduct: ProductItemType
}

export default async function ProductRecommendations({ matchedProduct }: ProductRecommendationsProps) {
  const db = new MockDBProvider()
  const products = await db.fetchAllProducts('products')
  const eightProductsInCategory = products.filter(product => product.category === matchedProduct.category).slice(0, 8)

  return (
    <div className="flex w-full gap-2">
      {eightProductsInCategory.map((product, index) => (
        <div className="relative"
          key={product.uuid}>
          <ProductItem
            product={product}
            index={index}
            className={""}
          />
          <IconHeart className="absolute right-0 top-0" />
        </div>
      ))}
    </div>
  )
}
