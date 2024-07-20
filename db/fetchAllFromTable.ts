import { ProductItemType } from "@/types/productItem";
import { TTable } from "@/types/tables";
import { SupabaseClient } from "@supabase/supabase-js";

export async function fetchAllFromTable(supabase: SupabaseClient<any, "public", any>, table: TTable): Promise<ProductItemType[] | null> {
  const { data, error } = await supabase
    .from(table)
    .select('*');

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
