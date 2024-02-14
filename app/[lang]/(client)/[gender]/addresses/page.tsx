import { Category, Locales } from "@/types/home"

type PageProps = {
  params: {
    lang: Locales,
    gender: Category['category']
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: PageProps) {

  return (
    <div className="text-content">Addresses Page</div>
  )
}
