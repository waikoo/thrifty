import { Manage } from "@/app/components/admin";
import { Logo } from "@/app/components/navigation";
import "@/styles/styles.css";
import { LayoutAddNew, LayoutSearchId, StatusBar } from '@/app/components/admin';
import { StatusImages } from '@/app/components/admin/indexServer';
import { IconAccount } from "@/app/components/navigation/icons";

type PageProps = {
  params: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: PageProps) {

  return (
    <>
      <header className="bg-bkg text-content border-content mx-auto grid max-w-[1700px] grid-cols-3 items-baseline border-b-[0.1rem] pt-5">
        <div className="grid w-[35%] grid-cols-2 gap-1">
          <LayoutAddNew params={params} />
          <LayoutSearchId />
        </div>

        <Logo />

        <div className="flex items-baseline gap-2 justify-self-end">
          <IconAccount /> <span>ADMIN</span>
        </div>
      </header>

      <main className="mx-auto mt-6 flex w-full max-w-[1600px] flex-col items-center">
        <Manage />
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

