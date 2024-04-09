import { useEffect, useState } from "react";

import { supabase } from "@/app/supabase";
import { fetchAllFromTable } from "@/db/fetchAllFromTable";
import { ProductItemType } from "@/types/productItem";
import { useProductStore } from "@/state/admin/uploadNewProductToDb";

export default function useStatusImages() {
  const { isSaved } = useProductStore();
  const [data, setData] = useState<ProductItemType[]>([]);

  useEffect(() => {
    const fetchDrafts = async () => {
      const result = await fetchAllFromTable(supabase, 'draft')
      if (result !== null) setData(result)
    }
    fetchDrafts()
  }, [isSaved])

  return data
}
