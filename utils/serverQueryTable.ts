import useSupabaseServer from "@/app/components/hooks/useSupabaseServer";
import { fetchAllProducts } from "./fetchAllProducts";

export default async function serverQueryTable(table: string) {
  const data = await fetchAllProducts(
    useSupabaseServer(),
    table
  )

  if (!data || !Array.isArray(data)) {
    throw new Error("Products is either null or not an array");
  }

  return data
}
