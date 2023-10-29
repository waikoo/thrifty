import ProductState from "@/app/components/admin/ProductState"

export default function Page() {
  const border = 'border-content border-[1px]'

  return (
    <form action="">
      <ProductState border={border} />

      <button className={`${border} w-16 mx-auto p-6 px-12 text-center block`}
      >
        SAVE
      </button>

    </form>
  )
}
