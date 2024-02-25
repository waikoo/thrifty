import { ProductItemType } from "@/types/productItem";
import { TTable } from "@/types/tables";


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
