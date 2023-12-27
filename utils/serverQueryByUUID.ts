import { useSupabaseServer } from "@/app/components/hooks/serverIndex"
import { ProductItemType } from "@/types/productItem"

export type queryByUUID = {
  tableOfOrigin: string
  value: ProductItemType[]
}

export default async function serverQueryByUUID(uuid: string): Promise<queryByUUID | ProductItemType[]> {
  const supabase = useSupabaseServer()

  let { data: draft, error: draftError } = await supabase
    .from('draft')
    .select('*')
    .eq('uuid', uuid)
  if (draftError) console.warn(draftError.message)

  let { data: products, error: productsError } = await supabase
    .from('products')
    .select('*')
    .eq('uuid', uuid)
  if (productsError) console.warn(productsError.message)

  let { data: edited, error: editedError } = await supabase
    .from('edited')
    .select('*')
    .eq('uuid', uuid)
  if (editedError) console.warn(editedError.message)

  if (draft && draft.length > 0) {
    return {
      tableOfOrigin: 'draft',
      value: draft
    }
  }

  if (edited && edited.length > 0) {
    return {
      tableOfOrigin: 'edited',
      value: edited
    }
  }

  if (products && products.length > 0) {
    return {
      tableOfOrigin: 'products',
      value: products
    }
  }

  return [{
    uuid: '',
    img_url: [],
    gender: '',
    category: '',
    type: '',
    price: 0,
    discount: 0,
    size: '',
    color: '',
    brand: '',
    condition: '',
    material: '',
    created_at: ''
  }]
}
