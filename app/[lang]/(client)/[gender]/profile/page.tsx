import { Category, Locales } from "@/types/home"

type PageProps = {
  params: {
    lang: Locales,
    gender: Category['category']
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: any) {

  return (
    <div className="text-content">Profile Page</div>
  )
}