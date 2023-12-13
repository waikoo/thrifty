"use client"
import { LayoutAddNew, LayoutSearchId, PublishChanges } from "@/app/components/admin";
import AdminContent from "@/app/components/admin/AdminContent";
import { useDraftTable } from "@/app/components/hooks";
import { Banner, Logo } from "@/app/components/navigation";
import { IconAccount } from "@/app/components/navigation/icons";

type PageParams = {
  params: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: PageParams) {

  return (
    <section className="bg-bkg">
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
          <span className="text-bold text-content underline underline-offset-2">SELECT</span>
          <Logo />
          <PublishChanges className="border-content border-2" />
        </div>
      </footer>
    </section>
  )
}
