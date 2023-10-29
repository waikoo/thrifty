import { ProductInput, ProductSelect } from "@/app/components/admin"
import { top, bottom } from "@/app/components/data"
import { getCurrentDate } from "@/utils/getCurrentDate"

type ProductStateProps = {
  border: string
}

export default function ProductState({ border }: ProductStateProps) {
  const paddingRight = 'pr-[10.3rem]'
  const className = border + ' ' + paddingRight

  return (
    <section className="flex flex-col gap-4">

      {top.map((item) => (
        <ProductSelect key={item.name} obj={item} className={className} />
      ))}

      <ProductInput name="price" placeholder="Ex: 25" className={border} />
      <ProductInput name="discount" placeholder="Ex: 50" className={border} />
      <ProductInput name="size" placeholder="Ex: M" className={border} />


      {bottom.map((item) => (
        <ProductSelect key={item.name} obj={item} className={className} />
      ))}

      <div className="flex gap-4">
        <span>DATE ADDED</span>
        <span>{getCurrentDate()}</span>
      </div>

    </section>
  )
}
