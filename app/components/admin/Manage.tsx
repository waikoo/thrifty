import { Button, ProductImage, ProductState } from "@/app/components/admin"

export default async function Manage() {

  return (
    <section className="grid w-full grid-cols-2 px-16">
      <ProductState />
      <ProductImage />

      <Button />
    </section>

  )
}
