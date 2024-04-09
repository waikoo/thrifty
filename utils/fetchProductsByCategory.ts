import { fetchAllFromTable } from "@/db/fetchAllFromTable";
import { ProductItemType } from "@/types/productItem";

export async function fetchProductsByCategory(supabase: any, searchParams: { [key: string]: string | string[] | undefined }) {
  const categoryArr = searchParams.category?.toString().split(',')

  if (categoryArr?.length === 3 || categoryArr?.length === 0) {
    return await fetchAllFromTable(supabase, 'products')
  }

  const { data, error }: { data: ProductItemType[] | null, error: any } =
    await supabase
      .from('products')
      .select('*')
      .in('category', [categoryArr]);
  return data
}
