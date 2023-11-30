import { useProductStore } from "@/state/productState"

export type FieldName = 'gender' | 'category' | 'type' | 'color' | 'brand' | 'material' | 'condition';

export default function useSelectUtils() {
  const { gender, category, type, color, brand, material, condition, setGender, setCategory, setType, setColor, setBrand, setMaterial, setCondition } = useProductStore()

  const values = {
    gender,
    category,
    type,
    color,
    brand,
    material,
    condition
  }
  const getValue = (lowerCaseName: FieldName) => {
    return values[lowerCaseName]
  }

  const setters: Record<FieldName, (value: string) => void> = {
    gender: setGender,
    category: setCategory,
    type: setType,
    color: setColor,
    brand: setBrand,
    material: setMaterial,
    condition: setCondition,
  };

  const getOnChange = (e: React.ChangeEvent<HTMLSelectElement>, lowerCaseName: FieldName) => {
    const value = e.target.value;
    const setter = setters[lowerCaseName];
    if (!setter) {
      throw new Error('getOnChange in Select component: "name" does not match');
    }
    setter(value);
  };


  return {
    getValue,
    getOnChange
  }
}
