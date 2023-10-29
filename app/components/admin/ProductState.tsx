"use client"
import { ProductInput, ProductSelect } from "@/app/components/admin"
import { top, bottom } from "@/app/components/data"
import { getCurrentDate } from "@/utils/getCurrentDate"
import { useProductState } from "../hooks"
import { findContentByName } from "@/utils/findContentByName"

type ProductStateProps = {
  border: string
}

export default function ProductState({ border }: ProductStateProps) {
  const paddingRight = 'pr-[10.3rem]';
  const className = border + ' ' + paddingRight;

  const { productArray: brands, addItem: addBrand } =
    useProductState(findContentByName(bottom, 'BRAND'))
  const { productArray: materials, addItem: addMaterial } =
    useProductState(findContentByName(bottom, 'MATERIAL'))

  return (
    <section className="flex flex-col gap-4">
      {top.map((item) => (
        <ProductSelect key={item.name} obj={item} className={className} />
      ))}

      <ProductInput icon="€" name="price" placeholder="Ex: 25" className={border} />
      <ProductInput icon="%" name="discount" placeholder="Ex: 50" className={border} />
      <ProductInput icon="" name="size" placeholder="Ex: M" className={border} />

      <ProductSelect obj={bottom.find((item) => item.name === 'COLOR')!} className={className} />

      {brands && <ProductSelect
        obj={{
          name: 'BRAND',
          content: brands,
        }}
        className={className}
        handleAddItem={addBrand}
      />}

      <ProductSelect obj={bottom.find((item) => item.name === 'CONDITION')!} className={className} />

      {materials && <ProductSelect
        obj={{
          name: 'MATERIAL',
          content: materials,
        }}
        className={className}
        handleAddItem={addMaterial}
      />}

      <div className="flex gap-4">
        <span>DATE ADDED</span>
        <span>{getCurrentDate()}</span>
      </div>
    </section>
  );
}
