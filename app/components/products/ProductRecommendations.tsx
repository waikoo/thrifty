import { ProductItemType } from "@/types/productItem"
import ProductRecommendationsControls from "@/app/components/products/ProductRecommendationsControls"
import serverQueryTable from "@/db/serverQueryTable"

type ProductRecommendationsProps = {
  matchedProduct: ProductItemType
}

export default async function ProductRecommendations({ matchedProduct }: ProductRecommendationsProps) {
  const products = await serverQueryTable('products')
  const eightProducts = products?.filter(product => product.category === matchedProduct.category).slice(0, 8)

  return (
    <section className="mb-20">
      <h1 className="text-content block whitespace-nowrap py-20 text-center text-[1rem] font-semibold">SIMILAR PRODUCTS YOU MIGHT LIKE</h1>

      {eightProducts && eightProducts?.length > 0 && (
        <ProductRecommendationsControls products={eightProducts} />
      )}
    </section>
  );
}
