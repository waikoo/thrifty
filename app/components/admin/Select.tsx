import { twMerge as tm } from 'tailwind-merge'

type SelectProps = {
  name: string;
  content: string[];
  defaultSelect?: string;
}

export default function Select({ name, content, defaultSelect = '- Select -' }: SelectProps) {
  const lowerCaseName = name.toLowerCase()

  return (
    <select
      name={lowerCaseName}
      id={lowerCaseName}
      className={tm(`adminBorder text-content bg-bkg relative right-0 p-2 pr-[10.3rem] `)}>

      <option className="">{defaultSelect}</option>

      {content.map((item) => (
        <option key={item} value={item.toLowerCase()}>{item}</option>
      ))}
    </select>

  )
}
