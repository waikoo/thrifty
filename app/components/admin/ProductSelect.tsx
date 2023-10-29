import { twMerge as tm } from 'tailwind-merge'

type ProductSelectProps = {
  obj: {
    name: string
    content: string[]
  }
  className?: string
  select?: string
}

export default function ProductSelect({ obj, className, select = '- Select -' }: ProductSelectProps) {
  const lowerCaseName = obj.name.toLowerCase()

  return (
    <fieldset className="relative flex w-[50%] items-center gap-4">
      <legend hidden>{obj.name}</legend>
      {obj.name === 'MATERIAL' ? <span className="text-grey absolute left-[-2rem]">Optional</span> : null}
      <label htmlFor="gender" className="w-32 whitespace-nowrap text-right">{obj.name}</label>
      <select
        name={lowerCaseName}
        id={lowerCaseName}
        className={tm(`text-content bg-bkg relative right-0 p-2 ${className}`)}>

        <option value="" disabled selected className="">{select}</option>

        {obj.content.map((item) => (
          <option key={item} value={item.toLowerCase()}>{item}</option>
        ))}

      </select>
    </fieldset>

  )
}
