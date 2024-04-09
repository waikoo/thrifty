import useSupabaseServer from "@/app/components/hooks/useSupabaseServer";
import { fetchAllFromTable } from "@/db/fetchAllFromTable";
import { TTable } from "@/types/tables";

export default async function serverQueryTable(table: TTable) {
  const data = await fetchAllFromTable(
    useSupabaseServer(),
    table
  )

  if (!data || !Array.isArray(data)) {
    throw new Error("Products is either null or not an array");
  }

  return data
}
