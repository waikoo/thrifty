import { ProductItemType } from "@/types/productItem"

export const fetchProductsByUuids = async (supabase: any, uuids: string[]): Promise<ProductItemType[] | []> => {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .in('uuid', uuids)

  if (error) console.log(error.message)
  return products
}
