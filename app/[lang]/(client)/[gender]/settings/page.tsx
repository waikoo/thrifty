import Notifications from "@/app/components/settings/Notifications"
import Preferences from "@/app/components/settings/Preferences"
import { Gender, Locales } from "@/types/link"

type PageProps = {
  params: {
    lang: Locales,
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: PageProps) {

  return (
    <div className="text-content mx-auto flex w-[1500px] justify-center gap-20">
      <Preferences />
      <Notifications />
    </div>
  )
}
