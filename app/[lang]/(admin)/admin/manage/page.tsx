import { Manage } from "@/app/components/admin";

import { Banner, NavBar } from "@/app/components/navigation";
import { themeSettings } from '@/app/components/data';
import "@/styles/styles.css";
import { LayoutAddNew, LayoutMenu, LayoutSearchId, StatusBar } from '@/app/components/admin';
import { StatusImages } from '@/app/components/admin/indexServer';

type PageProps = {
  params: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: PageProps) {

  return (
    <>
      <section className="bg-bkg text-content mx-auto flex h-screen max-w-[1600px] flex-col items-center px-20 lg:max-w-[1500px]">
        <NavBar isAdmin params={params} />

        <main className="mt-6 flex w-full flex-col items-center">
          <Manage />
          <div id="popup-root"></div>
        </main>

      </section>

      <footer>
        <StatusBar>
          <StatusImages />
        </StatusBar>

      </footer>
    </>
  )
}

