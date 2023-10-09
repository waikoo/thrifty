type InputProps = {
  type: string;
  value: string;
  setValue: (value: string) => void
}

const Input = ({ type, value, setValue }: InputProps) => {
  const placeholder = type[0].toUpperCase() + type.slice(1)

  return (
    <input type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => setValue(e.target.value)}
      className="p-2 border-fade border-2" />
  )
}

export default Input
