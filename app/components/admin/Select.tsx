"use client"
import { twMerge as tm } from 'tailwind-merge'
import useSelectUtils, { FieldName } from '../hooks/useSelectUtils';
import { useDynamicCategory } from '../hooks';
import { capitalize } from '@/utils/capitalize';
import { useEffect } from 'react';

type SelectProps = {
  name: string;
  content: string[];
  defaultSelect?: string;
  value?: string
}

export default function Select({ name, content, value, defaultSelect = '- Select -' }: SelectProps) {
  const lowerCaseName = name.toLowerCase() as FieldName
  const { getValue, getOnChange, setters } = useSelectUtils()
  useDynamicCategory(name)

  useEffect(() => {
    if (value) {
      setters[lowerCaseName](value)
    }
  }, [])

  return (
    <select
      name={lowerCaseName}
      id={lowerCaseName}
      className={tm("adminBorder focus:ring-yellow text-white bg-black relative w-full appearance-none p-2 pr-[10.3rem] text-[0.8125rem] font-normal focus:outline-none focus:ring-[0.15rem]")}
      value={getValue(lowerCaseName)}
      onChange={(e) => getOnChange(e, lowerCaseName)}
    >

      <option className="">{value && capitalize(value) || defaultSelect}</option>

      {content.map((item) => (
        <option key={item} value={item.toLowerCase()}>{item}</option>
      ))}
    </select>

  )
}
