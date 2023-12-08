import { supabase } from "@/app/supabase";
import { useUIStore } from "@/state";
import { ProductItemType } from "@/types/productItem";
import { fetchAllProducts } from "@/utils/fetchAllProducts";
import { useEffect, useState } from "react";

export default function useDraftTable() {
  const { isSaved } = useUIStore();
  const [draft, setData] = useState<ProductItemType[]>([]);

  useEffect(() => {
    const fetchDrafts = async () => {
      const result = await fetchAllProducts(supabase, 'draft')
      if (result !== null) setData(result)
    }
    fetchDrafts()
  }, [isSaved])

  return draft
}

