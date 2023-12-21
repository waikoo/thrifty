import AdminFooter from "@/app/components/admin/AdminFooter";
import AdminNav from "@/app/components/admin/AdminNav";

type PageParams = {
  params: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: PageParams) {
  const { lang } = params

  return (
    <section className="bg-bkg">
      <div id="popup-root"></div>
      <section className="bg-bkg text-content mx-auto flex h-[90vh] max-w-[1700px] flex-col items-center">

        <AdminNav params={params} />

        <main className="w-full">
          {/* <AdminContent /> */}
        </main>

      </section>

      <AdminFooter lang={lang as string} />
    </section>
  )
}
