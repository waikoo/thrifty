import { twMerge as tm } from "tailwind-merge"

type OptionalProps = {
  className?: string
}

export default function Optional({ className }: OptionalProps) {

  return (
    <span className={tm(`text-grey ${className}`)}>Optional</span>)
}
