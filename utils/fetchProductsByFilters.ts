import { filter } from "@/app/components/data/filterArrays"

export async function fetchProductsByFilters(
  supabase: any,
  searchParams: { [key: string]: string | string[] | undefined },
) {
  const byGenderParams = searchParams.gender?.toString().split(',')
  const byCategoryParams = searchParams.category?.toString().split(',')
  const productTypeArr = searchParams.type?.toString().split(',')
  const materialArr = searchParams.material?.toString().split(',')
  const sizeArr = searchParams.size?.toString().split(',')

  let query = supabase
    .from('products')
    .select('*')
    .in('gender', byGenderParams || filter.gender.map(fil => fil.toLowerCase()))
    .in('category', byCategoryParams || filter.category.map((fil) => fil.toLowerCase()))
    .in('type', productTypeArr || filter.type.all.map(fil => fil.toLowerCase()))
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
