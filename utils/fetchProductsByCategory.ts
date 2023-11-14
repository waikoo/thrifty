import { ProductItemType } from "@/types/productItem";
import { fetchAllProducts } from "./fetchAllProducts";

export async function fetchProductsByCategory(supabase: any, searchParams: { [key: string]: string | string[] | undefined }) {
  const categoryArr = searchParams.category?.toString().split(',')

  if (categoryArr?.length === 3 || categoryArr?.length === 0) {
    return await fetchAllProducts(supabase)
  }

  const { data, error }: { data: ProductItemType[] | null, error: any } =
    await supabase
      .from('products')
      .select('*')
      .in('category', [categoryArr]);
  return data
}
