import { filter } from "@/app/components/data/filterArrays"

export async function fetchProductsByFilters(
  supabase: any,
  searchParams: { [key: string]: string | string[] | undefined }
) {
  const categoryArr = searchParams.category?.toString().split(',')
  const productTypeArr = searchParams['product-type']?.toString().split(',')
  const materialArr = searchParams.material?.toString().split(',')

  let query = supabase
    .from('products')
    .select('*')
    .in('category', categoryArr || filter.category.map(fil => fil.toLowerCase()))
    .in('product-type', productTypeArr || filter.productType.map(fil => fil.toLowerCase()))
    .in('material', materialArr || filter.material.map(fil => fil.toLowerCase()))

  return await query
}
