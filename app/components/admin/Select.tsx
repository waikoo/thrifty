import { useProductStore } from '@/state/productState';
import { twMerge as tm } from 'tailwind-merge'
import useSelectUtils from '../hooks/useSelectUtils';

type SelectProps = {
  name: string;
  content: string[];
  defaultSelect?: string;
}

export default function Select({ name, content, defaultSelect = '- Select -' }: SelectProps) {
  const lowerCaseName = name.toLowerCase()
  const { getValue, getOnChange } = useSelectUtils()

  return (
    <select
      name={lowerCaseName}
      id={lowerCaseName}
      className={tm(`adminBorder text-content bg-bkg relative p-2 pr-[10.3rem] w-full`)}
      value={getValue(lowerCaseName)}
      onChange={(e) => getOnChange(e, lowerCaseName)}
    >

      <option className="">{defaultSelect}</option>

      {content.map((item) => (
        <option key={item} value={item.toLowerCase()}>{item}</option>
      ))}
    </select>

  )
}
