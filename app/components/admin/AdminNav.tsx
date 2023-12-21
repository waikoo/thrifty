import { LayoutAddNew, Products } from "."
import { IconAccount } from "../navigation/icons"

type AdminNavProps = {
  params: { [key: string]: string | string[] | undefined }
}

export default function AdminNav({ params }: AdminNavProps) {

  return (
    <nav className="flex w-full items-center gap-2 pt-6">
      <LayoutAddNew params={params} />

      <Products />

      <div className="ml-auto flex items-center gap-2">
        <IconAccount />
        <span>ADMIN</span>
      </div>

    </nav>

  )
}

