import Image from 'next/image'
import { useSupabaseServer } from '../hooks/serverIndex'
import { Category } from '@/types/home'

type NewArrivalsGridProps = {
  category: Category['category']
}

export default async function NewArrivalsGrid({ category }: NewArrivalsGridProps) {
  const supabase = useSupabaseServer()

  let { data, error } = await supabase
    .from('products')
    .select('*')
    .filter('category', 'eq', category)
    .order('created_at', { ascending: false })
    .limit(12)

  return (
    <div className="flex w-full gap-[0.313rem]">
      {data?.map((product) => (
        <div className="w-[20%]" key={product.id}>
          <Image
            src={product.img_url[0]}
            alt={product.name}
            width={100}
            height={100}
            className="w-full" />
        </div>
      ))}
    </div>
  )
}
