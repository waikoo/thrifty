type CheckBoxProps = {
  checked: boolean
  setChecked: (checked: boolean) => void
}

export default function CheckBox({ checked, setChecked }: CheckBoxProps) {

  return (
    <label htmlFor="radio" className="text-content user-select-none flex min-w-full gap-2">
      <input type="checkbox" id="radio" className="pr-2" checked={checked} onChange={() => setChecked(!checked)} />
      <span className="no-select">Keep me logged in</span>
    </label>
  )
}
