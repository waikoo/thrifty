import { twMerge as tm } from 'tailwind-merge'

type SelectProps = {
  name: string;
  content: string[];
  className?: string;
  defaultSelect?: string;
}

export default function Select({ name, content, className, defaultSelect = '- Select -' }: SelectProps) {
  const lowerCaseName = name.toLowerCase()

  return (
    <select
      name={lowerCaseName}
      id={lowerCaseName}
      className={tm(`text-content bg-bkg relative right-0 p-2 ${className}`)}>

      <option className="">{defaultSelect}</option>

      {content.map((item) => (
        <option key={item} value={item.toLowerCase()}>{item}</option>
      ))}
    </select>

  )
}
