import { useProductStore } from "@/state/productState"

export default function useSelectUtils() {
  const { gender, type, color, brand, material, condition, setGender, setType, setColor, setBrand, setMaterial, setCondition } = useProductStore()

  const getValue = (lowerCaseName: string) => {
    switch (lowerCaseName) {
      case 'gender': return gender
      case 'product type': return type
      case 'color': return color
      case 'brand': return brand
      case 'material': return material
      case 'condition': return condition
      default: throw new Error('getValue in Select component: "name" does not match')
    }
  }

  const getOnChange = (e: React.ChangeEvent<HTMLSelectElement>, lowerCaseName: string) => {
    const value = e.target.value

    switch (lowerCaseName) {
      case 'gender': return setGender(value)
      case 'product type': return setType(value)
      case 'color': return setColor(value)
      case 'brand': return setBrand(value)
      case 'material': return setMaterial(value)
      case 'condition': return setCondition(+value)
      default: throw new Error('getOnChange in Select component: "name" does not match')
    }
  }
  return {
    getValue,
    getOnChange
  }

}
