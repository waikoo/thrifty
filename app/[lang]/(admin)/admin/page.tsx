"use client"
import { LayoutAddNew, LayoutSearchId, PublishChanges, SelectProducts } from "@/app/components/admin";
import AdminContent from "@/app/components/admin/AdminContent";
import { Logo } from "@/app/components/navigation";
import { IconAccount } from "@/app/components/navigation/icons";
import Link from "next/link";

type PageParams = {
  params: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: PageParams) {
  const { lang } = params

  return (
    <section className="bg-bkg">
      <div id="popup-root"></div>
      <section className="bg-bkg text-content mx-auto flex h-[90vh] max-w-[1700px] flex-col items-center">

        <nav className="flex w-full items-center justify-between pt-6">
          <div className="w-[50%]">
            <LayoutAddNew params={params} />
          </div>

          <div className="flex w-[50%] items-center">
            <LayoutSearchId />

            <div className="ml-auto flex items-center gap-2">
              <IconAccount />
              <span>ADMIN</span>
            </div>

          </div>
        </nav>

        <main className="w-full">
          <AdminContent />
        </main>

      </section>

      <footer className="fixed bottom-0 left-0 right-0 w-screen p-6">
        <div className="mx-auto grid max-w-[1700px] grid-cols-3 items-baseline">
          <SelectProducts />
          <Link href={`/${lang}/admin`} className="col-start-2 col-end-3 cursor-pointer self-baseline justify-self-center ">
            <Logo />
          </Link>
          <PublishChanges
            publishSome
            className="text-[0.8125rem] font-semibold" />
        </div>
      </footer>
    </section>
  )
}
