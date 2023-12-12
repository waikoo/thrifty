import { twMerge as tm } from 'tailwind-merge'
import useSelectUtils, { FieldName } from '../hooks/useSelectUtils';

type SelectProps = {
  name: string;
  content: string[];
  defaultSelect?: string;
}

export default function Select({ name, content, defaultSelect = '- Select -' }: SelectProps) {
  const lowerCaseName = name.toLowerCase() as FieldName
  const { getValue, getOnChange } = useSelectUtils()

  return (
    <select
      name={lowerCaseName}
      id={lowerCaseName}
      className={tm("adminBorder text-content bg-bkg relative w-full p-2 pr-[10.3rem] text-[0.8125rem] font-normal")}
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
