import { filter } from "@/app/components/data/filterArrays"
import { getLastDayISO } from "@/utils/getLastDayISO"

export async function fetchProductsByFilters(
  supabase: any,
  searchParams: { [key: string]: string | string[] | undefined }
) {
  const categoryArr = searchParams.category?.toString().split(',')
  const productTypeArr = searchParams['product-type']?.toString().split(',')
  const materialArr = searchParams.material?.toString().split(',')
  const sizeArr = searchParams.size?.toString().split(',')

  let query = supabase
    .from('products')
    .select('*')
    .in('category', categoryArr || filter.category.map(fil => fil.toLowerCase()))
    .in('product-type', productTypeArr || filter.productType.map(fil => fil.toLowerCase()))
    .in('material', materialArr || filter.material.map(fil => fil.toLowerCase()))
    .in('size', sizeArr || filter.size.map(fil => fil))

  if (searchParams['shop-by'] === 'new in') {
    query = query.order('created_at', { ascending: false })
  }

  if (searchParams['shop-by'] === 'promos') {
    query = query.gt('discount', 0)
  }

  return await query
}
