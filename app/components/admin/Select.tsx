import { useProductStore } from '@/state/productState';
import { twMerge as tm } from 'tailwind-merge'

type SelectProps = {
  name: string;
  content: string[];
  defaultSelect?: string;
}

export default function Select({ name, content, defaultSelect = '- Select -' }: SelectProps) {
  const lowerCaseName = name.toLowerCase()
  const { setGender, setType, setColor, setBrand, setMaterial, setCondition } = useProductStore()

  return (
    <select
      name={lowerCaseName}
      id={lowerCaseName}
      className={tm(`adminBorder text-content bg-bkg relative p-2 pr-[10.3rem] w-full`)}
      onChange={(e) => {
        if (lowerCaseName === 'gender') {
          setGender(e.target.value)
        } else if (lowerCaseName === 'product type') {
          setType(e.target.value)
        } else if (lowerCaseName === 'color') {
          setColor(e.target.value)
        } else if (lowerCaseName === 'brand') {
          setBrand(e.target.value)
        } else if (lowerCaseName === 'material') {
          setMaterial(e.target.value)
        } else if (lowerCaseName === 'condition') {
          setCondition(+e.target.value)
        }
      }}
    >

      <option className="">{defaultSelect}</option>

      {content.map((item) => (
        <option key={item} value={item.toLowerCase()}>{item}</option>
      ))}
    </select>

  )
}
