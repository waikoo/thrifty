import { ProductItemType } from "@/types/productItem";

export async function fetchAllProducts(supabase: any, table: string): Promise<ProductItemType[] | null> {
  const { data, error } = await supabase
    .from(table)
    .select('*');

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
