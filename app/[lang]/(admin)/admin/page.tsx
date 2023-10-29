import { ProductImage } from "@/app/components/admin"
import ProductState from "@/app/components/admin/ProductState"

export default function Page() {
  const border = 'border-content border-[1px]'

  return (
    <section className="flex flex-col gap-12">

      <div className="flex gap-10">
        <ProductState border={border} />

        <ProductImage border={border} />
      </div>

      <button className={`${border} w-16 mx-auto py-3 px-24 items-center justify-center flex`} >
        SAVE
      </button>

    </section>
  )
}
