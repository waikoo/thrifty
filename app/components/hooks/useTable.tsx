import { supabase } from "@/app/supabase";
import { useUIStore } from "@/state";
import { ProductItemType } from "@/types/productItem";
import { fetchAllProducts } from "@/utils/fetchAllProducts";
import { useEffect, useState } from "react";

export default function useTable(table: 'draft' | 'edited' | 'products') {
  const { isSaved } = useUIStore();
  const [draft, setData] = useState<ProductItemType[]>([]);
  const { setDraftLength } = useUIStore()

  useEffect(() => {
    const fetchDrafts = async () => {
      const result = await fetchAllProducts(supabase, table)
      if (result !== null) {
        setData(result)
        setDraftLength(result.length)
      }
    }
    fetchDrafts()
  }, [isSaved])

  return draft
}

