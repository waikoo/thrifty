import { Button, ProductImage, ProductState } from "@/app/components/admin"

export default async function Manage() {

  return (
    <section className="flex flex-col gap-12">

      <div className="flex h-[60vh] gap-10">
        <ProductState />

        <ProductImage />
      </div>

      <Button />

    </section>

  )
}
