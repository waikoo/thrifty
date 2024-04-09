import { Button, ProductImage, ProductState } from "@/app/components/admin"
import serverQueryByUUID from "@/db/serverQueryByUUID"

type ManageProps = {
  uuid: string
}

export default async function Manage({ uuid }: ManageProps) {
  const uuidMatch = await serverQueryByUUID(uuid)

  return (
    <section className="grid w-full grid-cols-2 px-16">
      <ProductState uuidMatch={Array.isArray(uuidMatch) ? uuidMatch : uuidMatch.value} />
      <ProductImage uuidMatch={Array.isArray(uuidMatch) ? uuidMatch : uuidMatch.value} />

      <Button uuidMatch={uuidMatch} />
    </section>
  )
}
