import { fetchAllProducts } from "@/utils/fetchAllProducts";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from 'next/headers'
import Image from 'next/image'

export default async function StatusImages() {
  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        }
      }
    }
  )

  const data = await fetchAllProducts(supabase, 'draft')

  return (
    <div className="flex h-[26.8rem] p-6">
      <div className="hover:bg-darkgrey flex h-full max-w-[50%] flex-wrap gap-[0.5rem] overflow-y-scroll rounded-lg p-6">
        {data?.filter(el => el.img_url && el.img_url.length > 0)
          .map((el, i) => (
            <div className="w-[19.1%] flex-grow-0 object-cover"
              key={i}
            >
              <Image
                className="block min-w-full"
                src={el.img_url[0]}
                alt={`new-product-${i}`}
                width={100}
                height={100} />
            </div>
          ))}
      </div>


      <div className="max-w-[50%]">right</div>
    </div>
  )
}
