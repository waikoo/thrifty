"use client"
import { ProductInput, ProductSelect } from "@/app/components/admin"
import { top, bottom } from "@/app/components/data"
import { useProductState } from "../hooks"
import { findContentByName } from "@/utils/findContentByName"
import { getDayMonthYear } from "@/utils/getDayMonthYear"
import { ProductItemType } from "@/types/productItem"

type ProductStateProps = {
  uuidMatch?: ProductItemType[]
}

export default function ProductState({ uuidMatch }: ProductStateProps) {
  const { productArray: brands, addItem: addBrand } =
    useProductState(findContentByName(bottom, 'BRAND'))

  const { productArray: materials, addItem: addMaterial } =
    useProductState(findContentByName(bottom, 'MATERIAL'))

  return (
    <section className="flex flex-col gap-4">

      <ProductSelect
        obj={top.find((item) => item.name === 'GENDER')!}
        value={uuidMatch?.[0]?.gender} />

      <ProductSelect
        obj={top.find((item) => item.name === 'CATEGORY')!}
        value={uuidMatch?.[0]?.category} />

      <ProductSelect
        obj={top.find((item) => item.name === 'PRODUCT TYPE')!}
        value={uuidMatch?.[0]?.type} />

      <ProductInput icon="€" name="price" placeholder="Ex: 25"
        value={uuidMatch?.[0]?.price.toString()} />

      <ProductInput icon="%" name="discount" placeholder="Ex: 50"
        value={uuidMatch?.[0]?.discount.toString()} />

      <ProductInput icon="" name="size" placeholder="Ex: M"
        value={uuidMatch?.[0]?.size} />

      <ProductSelect
        obj={bottom.find((item) => item.name === 'COLOR')!}
        value={uuidMatch?.[0]?.color} />

      {brands && <ProductSelect
        obj={{
          name: 'BRAND',
          content: brands,
        }}
        handleAddItem={addBrand}
        value={uuidMatch?.[0]?.brand}
      />}

      <ProductSelect
        obj={bottom.find((item) => item.name === 'CONDITION')!}
        value={uuidMatch?.[0]?.condition} />

      {materials && <ProductSelect
        obj={{
          name: 'MATERIAL',
          content: materials,
        }}
        handleAddItem={addMaterial}
        value={uuidMatch?.[0]?.material}
      />}

      <div className="text-content ml-[2.87rem] mt-4 flex gap-4 text-[0.8125rem] font-semibold">
        <span>DATE ADDED</span>
        <span className="font-normal">{getDayMonthYear()}</span>
      </div>
    </section>
  );
}
