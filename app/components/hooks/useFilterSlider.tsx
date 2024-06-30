export default function useFilterSlider(
  setLeft: React.Dispatch<React.SetStateAction<number>>,
  setRight: React.Dispatch<React.SetStateAction<number>>,
  left: number,
  right: number,
) {

  const handleLeftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const newLeft = Number(target.value)
    setLeft(Math.min(newLeft, right - 1))
  }

  const handleRightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const newRight = Number(target.value)
    setRight(Math.max(left + 1, newRight))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const value = Number(target.value)

    if (Number.isNaN(value)) return

    if (target.name === 'left') {
      setLeft(value)
    } else if (target.name === 'right') {
      setRight(value)
    }
  }

  return {
    handleLeftChange,
    handleRightChange,
    handleInputChange
  }
}
