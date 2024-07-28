import IconShare from '@/app/components/cart/icons/IconShare'
import { FiShare2 } from "react-icons/fi"
import IconDelete from '@/app/components/cart/icons/IconDelete'
import { useFavoriteStore } from '@/state/client/favoriteState'
import { ProductItemType } from '@/types/productItem'
import BigMustardButton from '../generic/BigMustardButton'
import { RxCross1 } from 'react-icons/rx'

type FavoritesItemControlsProps = {
  product: ProductItemType
}

export default function FavoritesItemControls({ product }: FavoritesItemControlsProps) {
  const { favorites, removeFromFavorites } = useFavoriteStore()

  const removeFavoritesItem = () => {
    removeFromFavorites(product.uuid)

    const newFavorites = favorites.filter(
      (uuid: string) => uuid !== product.uuid
    )
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  return (
    <div className="flex flex-col justify-start gap-3 px-4 mt-3">
      <div title="Share">
        <BigMustardButton className="p-[14px]">
          <FiShare2 size={20} />
        </BigMustardButton>
      </div>

      <div
        onClick={removeFavoritesItem}
        title="Remove"
      >
        <BigMustardButton className="p-[14px]">
          <RxCross1 size={20} />
        </BigMustardButton>
      </div>
    </div>
  )
}

