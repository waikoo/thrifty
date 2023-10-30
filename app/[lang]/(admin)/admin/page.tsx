import { Button, ProductImage, ProductState, StatusBar } from "@/app/components/admin"

export default function Page() {

  return (
    <section className="flex flex-col gap-12">

      <div className="flex h-[60vh] gap-10">
        <ProductState />

        <ProductImage />
      </div>

      <Button />

      <StatusBar />
    </section>
  )
}
