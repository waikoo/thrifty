import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { IoMdCheckmark } from "react-icons/io";

type SortByMiniProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function SortByMini({ searchParams }: SortByMiniProps) {
  const [searchParamos, pathname, router] = [useSearchParams(), usePathname(), useRouter()]
  const sortByElements = [
    {
      textContent: 'Newest To Oldest',
      dataValue: 'newfirst'
    },
    {
      textContent: 'Price Low To High',
      dataValue: 'cheapfirst'
    },
    {
      textContent: 'Price High To Low',
      dataValue: 'expensivefirst'
    }
  ]

  const handleOnClick = (e: React.MouseEvent) => {
    const newParams = new URLSearchParams(searchParamos);
    const target = e.target as HTMLDivElement
    const value = target.dataset.value;
    const queryParamCategory = 'sort-by'

    if (value) {
      newParams.set(queryParamCategory, value);
    }
    router.push(`${pathname}?${newParams.toString()}`);
  }

  return (
    <div className="absolute right-0 top-14 z-[100] bg-t_black/85 rounded-[10px] text-[13px] sm:text-[17px] sm:w-[275px]">

      {sortByElements.map((el, i) => (
        <>
          <div
            key={`sort-by-element-${i}`}
            className="whitespace-nowrap text-t_white p-2 px-10 relative"
            data-value={el.dataValue}
            onClick={handleOnClick}
          >
            {searchParams['sort-by'] === el.dataValue && (
              <IoMdCheckmark className="absolute left-3 top-3" />
            )}
            {el.textContent}
          </div>
          <div className="bg-[#f2f2f2]/20 h-[0.5px] w-full" />
        </>
      ))}
    </div>
  )
}

