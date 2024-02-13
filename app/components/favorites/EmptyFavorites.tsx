import { Category, Locales } from "@/types/home"

export default function EmptyFavorites() {

  return (
    <div>
      <div className="text-content w-screen py-20 text-center tracking-wider">
        <h4 className="mb-[1.375rem] font-extrabold">No favorites yet!</h4>
        <span className="font-semibold">Tap or click the heart icon to keep track of the items you love.</span>
      </div>

    </div>
  )
}
