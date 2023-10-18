import { useUIStore } from "@/state/uiState"


type CategoryGroupProps = {
  title: string,
  items: string[]
  brands?: boolean
}

export default function CategoryGroup({ title, items, brands }: CategoryGroupProps) {
  const { showCategoryMenu, setShowCategoryMenu } = useUIStore()

  return (
    <div
      className=""
    >
      <h3 className="text-content text-[1.2rem] font-bold">{title}</h3>
      <ul className="flex cursor-pointer flex-col  gap-4 pt-8">
        {items.map((item: string, i: number) =>
          <li key={`${item}-${i}`}>{item}</li>)}
      </ul>
      <span className="mt-4 block underline underline-offset-4">{brands && 'See More'}</span>
    </div>
  )
}
