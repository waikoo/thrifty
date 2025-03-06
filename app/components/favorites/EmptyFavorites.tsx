import useViewport from '@/app/components/hooks/useViewport'
import { albert, albert_800 } from '@/utils/fonts'

export default function EmptyFavorites() {
  const viewportWidth = useViewport()
  const tapOrClick = viewportWidth < 1280 ? 'Tap' : 'Click'

  return (
    <div>
      <div className="text-content w-screen py-20 px-20 text-center tracking-wider h-[calc(80dvh)]">
        <h4 className={`mb-[1.375rem] text-[17px] sm:text-[21px] xl:text-[18px] ${albert_800.className}`}>
          No favorites yet.
        </h4>

        <span className={`${albert.className} text-[14px] sm:text-[17px] xl:text-[14px]`}>
          {tapOrClick} the heart icon to keep track of the items you love!
        </span>
      </div>
    </div>
  )
}
