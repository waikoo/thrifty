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
    <div className="text-content mx-auto flex min-w-[300px] max-w-[360px] sm:w-[80%] sm:max-w-[600px] xl:w-[1000px] flex-col xl:flex-row justify-center xl:gap-10 mb-[120px] px-6">
      <Preferences />
      <Notifications />
    </div>
  )
}
