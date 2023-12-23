import { useSupabaseServer } from "../hooks/serverIndex"
import Image from 'next/image'

export default async function ProductsContent() {
  const supabase = useSupabaseServer()

  let { data: draft, error } = await supabase
    .from('products')
    .select('*')

  if (error) console.log(error.message)

  return (
    <section className="bg-content max-h-[50vh]">
      <div className="grid grid-cols-[repeat(20,minmax(30px,1fr))] gap-2 p-6">
        {draft?.filter(el => el.img_url && el.img_url.length > 0).map((el, i) => (
          <div className={`relative aspect-square`}
            key={i}
            data-uuid={el.uuid}
          >
            <Image
              className="relative block h-full w-full cursor-pointer object-cover"
              src={el.img_url[0]}
              alt={`new-product-${i}`}
              width={100}
              height={100}
            />
          </div>
        ))
        }
      </div >
    </section>
  )
}
