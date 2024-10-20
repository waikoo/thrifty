import { Manage } from "@/app/components/admin/indexServer";
import { Logo } from "@/app/components/navigation";
import "@/styles/styles.css";
import { LayoutAddNew, Products, StatusBar } from '@/app/components/admin';
import { StatusImages } from '@/app/components/admin/indexServer';
import { IconAccount } from "@/app/components/navigation/icons";
import Link from "next/link";

type PageProps = {
  params: { [key: string]: string | string[] | undefined }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params, searchParams }: PageProps) {
  const { lang } = params
  const uuid = searchParams.uuid as string

  return (
    <>
      <header className="bg-t_admin_black text-white border-white mx-auto grid max-w-[1700px] grid-cols-3 items-baseline border-b-[0.1rem] pb-1 pt-5">
        <div className="flex w-[35%] gap-1">
          <LayoutAddNew params={params} />
          <Products params={params} />
        </div>

        <Link href={`/${lang}/admin`} className="col-start-2 col-end-3 row-start-1 row-end-2 cursor-pointer self-baseline justify-self-center">
          <Logo logoColor="white" width={'50%'} className="mx-auto" />
        </Link>

        <div className="flex items-baseline gap-2 justify-self-end">
          <IconAccount /> <span className="text-[0.75rem] font-semibold tracking-wider">ADMIN</span>
        </div>
      </header>

      <main className="bg-t_admin_black text-white mx-auto mt-6 flex w-full max-w-[90vw] flex-col items-center">
        <Manage uuid={uuid} />
        <div id="popup-root"></div>
      </main>


      <footer className="bg-white text-t_admin_black">
        <StatusBar>
          <StatusImages />
        </StatusBar>

      </footer>
    </>
  )
}

