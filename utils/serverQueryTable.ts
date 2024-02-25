import useSupabaseServer from "@/app/components/hooks/useSupabaseServer";
import { TTable } from "@/types/tables";
import { fetchAllProducts } from "@/utils/fetchAllProducts";

export default async function serverQueryTable(table: TTable) {
  const data = await fetchAllProducts(
    useSupabaseServer(),
    table
  )

  if (!data || !Array.isArray(data)) {
    throw new Error("Products is either null or not an array");
  }

  return data
}
