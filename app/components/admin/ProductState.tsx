"use client"
import { ProductInput, ProductSelect } from "@/app/components/admin"
import { top, bottom } from "@/app/components/data"
import { useProductState } from "../hooks"
import { findContentByName } from "@/utils/findContentByName"
import { getDayMonthYear } from "@/utils/getDayMonthYear"

type ProductStateProps = {
}

export default function ProductState({ }: ProductStateProps) {
  const { productArray: brands, addItem: addBrand } =
    useProductState(findContentByName(bottom, 'BRAND'))

  const { productArray: materials, addItem: addMaterial } =
    useProductState(findContentByName(bottom, 'MATERIAL'))

  return (
    <section className="flex flex-col gap-4">

      {top.map((item) => (
        <ProductSelect key={item.name} obj={item} />
      ))}

      <ProductInput icon="€" name="price" placeholder="Ex: 25" />
      <ProductInput icon="%" name="discount" placeholder="Ex: 50" />
      <ProductInput icon="" name="size" placeholder="Ex: M" />

      <ProductSelect obj={bottom.find((item) => item.name === 'COLOR')!} />

      {brands && <ProductSelect
        obj={{
          name: 'BRAND',
          content: brands,
        }}
        handleAddItem={addBrand}
      />}

      <ProductSelect obj={bottom.find((item) => item.name === 'CONDITION')!} />

      {materials && <ProductSelect
        obj={{
          name: 'MATERIAL',
          content: materials,
        }}
        handleAddItem={addMaterial}
      />}

      <div className="text-content ml-[2.87rem] mt-4 flex gap-4 text-[0.8125rem] font-semibold">
        <span>DATE ADDED</span>
        <span className="font-normal">{getDayMonthYear()}</span>
      </div>
    </section>
  );
}
