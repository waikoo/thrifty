import { twMerge as tm } from 'tailwind-merge'

type AnimatedInputProps = {
  type: string
  id: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  font?: string
}

export default function AnimatedInput({ type, id, placeholder, value, onChange, className, font }: AnimatedInputProps) {

  return (
    <div className="relative">
      <input
        className={tm(`${className} bg-bkg text-content border-b-grey border-grey peer w-full border-x-0 border-b-[0.1rem] border-t-0 border-solid pl-0 placeholder-transparent focus:border-sky-500 focus:outline-none focus:ring-0`)}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        spellCheck="false"
        required
      />
      <label
        className={tm(`${font} font-regular text-grey peer-placeholder-shown:text-black-400 peer-focus:text-black-100 absolute -top-3.5 left-0  text-[0.6875rem] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm`)}
        htmlFor={id}>
        {placeholder}
      </label>
    </div>
  )
}
