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
  const isSetNewFilter = placeholder !== 'Jackets in black and brown'
  const placeholderStyle = isSetNewFilter ? 'placeholder-transparent' : ''

  return (
    <div className="relative w-full">
      <input
        className={tm(`${className} bg-t_white border-b-[#9d9d9d] peer w-full border-x-0 border-b-[0.1rem] border-t-0 border-solid pl-0 ${placeholderStyle} focus:border-sky-500 focus:outline-none focus:ring-0`)}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        spellCheck="false"
        required
      />
      <label
        className={tm(`${font} peer-placeholder-shown:text-black-400 peer-focus:text-black-100 absolute -top-3.5 left-0  text-[0.6875rem] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm`)}
        htmlFor={id}>
        {isSetNewFilter && placeholder}
      </label>
    </div>
  )
}
