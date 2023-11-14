import { fetchAllProducts } from "./fetchAllProducts";
import { fetchProductsByCategory } from "./fetchProductsByCategory";

export async function fetchProductsByFilters(
  supabase: any,
  searchParams: { [key: string]: string | string[] | undefined }
) {
  if (Object.keys(searchParams).length === 0) {
    return await fetchAllProducts(supabase)
  }
  if (searchParams.category) {
    return await fetchProductsByCategory(supabase, searchParams)
  }
  // if (searchParams['shop-by']) {
  //   return await fetchProductsByShopBy(supabase, searchParams)
  // }
}
