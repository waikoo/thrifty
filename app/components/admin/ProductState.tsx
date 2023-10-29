"use client"
import { ProductInput, ProductSelect } from "@/app/components/admin"
import { top, bottom } from "@/app/components/data"
import { getCurrentDate } from "@/utils/getCurrentDate"
import { useEffect, useState } from "react"

type ProductStateProps = {
  border: string
}

export default function ProductState({ border }: ProductStateProps) {
  const paddingRight = 'pr-[10.3rem]';
  const className = border + ' ' + paddingRight;
  const [brands, setBrands] = useState(bottom.find((item) => item.name === 'BRAND')?.content || []);
  const [materials, setMaterials] = useState(bottom.find((item) => item.name === 'MATERIAL')?.content || []);

  const handleAddBrand = (newBrand: string) => {
    setBrands((prevBrands) => [newBrand, ...prevBrands]);
  };

  const handleAddMaterial = (newMaterial: string) => {
    setMaterials((prevMaterials) => [newMaterial, ...prevMaterials]);
  };

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
        handleAddItem={handleAddBrand}
      />}

      <ProductSelect obj={bottom.find((item) => item.name === 'CONDITION')!} className={className} />

      {materials && <ProductSelect
        obj={{
          name: 'MATERIAL',
          content: materials,
        }}
        className={className}
        handleAddItem={handleAddMaterial}
      />}

      <div className="flex gap-4">
        <span>DATE ADDED</span>
        <span>{getCurrentDate()}</span>
      </div>
    </section>
  );
}
