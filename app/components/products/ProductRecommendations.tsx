
import { ProductItemType } from "@/types/productItem"
import { fetchAllProducts } from "@/utils/fetchAllProducts"
import ProductRecommendationsControls from "@/app/components/products/ProductRecommendationsControls"
import useSupabaseServer from "@/app/components/hooks/useSupabaseServer"

type ProductRecommendationsProps = {
  matchedProduct: ProductItemType
}

export default async function ProductRecommendations({ matchedProduct }: ProductRecommendationsProps) {
  const products = await fetchAllProducts(useSupabaseServer(), 'products')
  const eightProducts = products?.filter(product => product.category === matchedProduct.category).slice(0, 8)

  return (
    <section className="mb-20">
      <h1 className="text-content block whitespace-nowrap py-20 text-center text-[1rem] font-semibold">SIMILAR PRODUCTS YOU MIGHT LIKE</h1>
      <ProductRecommendationsControls products={eightProducts} />
    </section>
  );
}
