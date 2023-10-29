import { ProductImage, ProductState } from "@/app/components/admin"

export default function Page() {

  return (
    <section className="flex flex-col gap-12">

      <div className="flex gap-10">
        <ProductState />

        <ProductImage />
      </div>

      <button className={`adminBorder w-16 mx-auto py-3 px-24 items-center justify-center flex`} >
        SAVE
      </button>

    </section>
  )
}
