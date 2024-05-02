import { capitalize } from "@/utils/capitalize";

type InputProps = {
  type: string;
  value: string;
  setValue: (value: string) => void
}

const Input = ({ type, value, setValue }: InputProps) => {

  return (
    <input type={type}
      placeholder={capitalize(type)}
      value={value}
      onChange={e => setValue(e.target.value)}
      className="p-2 border-fade border-2"
      spellCheck={false}
    />
  )
}

export default Input
