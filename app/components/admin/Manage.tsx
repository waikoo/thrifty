import { Button, ProductImage, ProductState } from "@/app/components/admin"
import { useSupabaseServer } from "../hooks/serverIndex"
import { ProductItemType } from "@/types/productItem"

type ManageProps = {
  uuid: string
}

export default async function Manage({ uuid }: ManageProps) {
  const supabase = useSupabaseServer()

  let { data: uuidMatch, error } = await supabase
    .from('draft')
    .select('*')
    .eq('uuid', uuid)
  if (error) console.warn(error.message)

  return (
    <section className="grid w-full grid-cols-2 px-16">
      <ProductState uuidMatch={uuidMatch as ProductItemType[]} />
      <ProductImage uuidMatch={uuidMatch as ProductItemType[]} />

      <Button />
    </section>

  )
}
