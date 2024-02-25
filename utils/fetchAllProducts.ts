import { ProductItemType } from "@/types/productItem";

type TTable = 'products' | 'draft' | 'edited'

export async function fetchAllProducts(supabase: any, table: TTable): Promise<ProductItemType[] | null> {
  const { data, error } = await supabase
    .from(table)
    .select('*');

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
