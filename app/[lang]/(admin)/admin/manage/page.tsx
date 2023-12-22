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
      <header className="bg-bkg text-content border-content mx-auto grid max-w-[1700px] grid-cols-3 items-baseline border-b-[0.1rem] pb-1 pt-5">
        <div className="grid w-[35%] grid-cols-2 gap-1">
          <LayoutAddNew params={params} />
          <Products />
        </div>

        <Link href={`/${lang}/admin`} className="col-start-2 col-end-3 cursor-pointer self-baseline justify-self-center ">
          <Logo />
        </Link>

        <div className="flex items-baseline gap-2 justify-self-end">
          <IconAccount /> <span className="text-[0.75rem] font-semibold tracking-wider">ADMIN</span>
        </div>
      </header>

      <main className="mx-auto mt-6 flex w-full max-w-[1600px] flex-col items-center">
        <Manage uuid={uuid} />
        <div id="popup-root"></div>
      </main>


      <footer>
        <StatusBar>
          <StatusImages />
        </StatusBar>

      </footer>
    </>
  )
}

