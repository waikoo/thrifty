import { supabase } from "@/app/supabase";
import { useUIStore } from "@/state";
import { ProductItemType } from "@/types/productItem";
import { fetchAllProducts } from "@/utils/fetchAllProducts";
import { useEffect, useState } from "react";

export default function useStatusImages() {
  const { isSaved } = useUIStore();
  const [data, setData] = useState<ProductItemType[]>([]);

  useEffect(() => {
    const fetchDrafts = async () => {
      const result = await fetchAllProducts(supabase, 'draft')
      if (result !== null) setData(result)
    }
    fetchDrafts()
  }, [isSaved])

  return data
}
