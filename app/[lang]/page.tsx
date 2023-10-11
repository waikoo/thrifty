import { PageProps } from "@/types/home";
import SharedPage from "@/app/page"

export default function Page({ params, searchParams }: PageProps) {
  return (
    <SharedPage params={params} searchParams={searchParams} />
  )
}
