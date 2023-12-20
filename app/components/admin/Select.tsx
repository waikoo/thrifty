"use client"
import { twMerge as tm } from 'tailwind-merge'
import useSelectUtils, { FieldName } from '../hooks/useSelectUtils';
import { useDynamicCategory } from '../hooks';

type SelectProps = {
  name: string;
  content: string[];
  defaultSelect?: string;
  value?: string
}

export default function Select({ name, content, value, defaultSelect = '- Select -' }: SelectProps) {
  const lowerCaseName = name.toLowerCase() as FieldName
  const { getValue, getOnChange } = useSelectUtils()
  useDynamicCategory(name)

  return (
    <select
      name={lowerCaseName}
      id={lowerCaseName}
      className={tm("adminBorder focus:ring-yellow text-content bg-bkg relative w-full appearance-none p-2 pr-[10.3rem] text-[0.8125rem] font-normal focus:outline-none focus:ring-[0.15rem]")}
      value={value || getValue(lowerCaseName)}
      onChange={(e) => getOnChange(e, lowerCaseName)}
    >

      <option className="">{defaultSelect}</option>

      {content.map((item) => (
        <option key={item} value={item.toLowerCase()}>{item}</option>
      ))}
    </select>

  )
}
