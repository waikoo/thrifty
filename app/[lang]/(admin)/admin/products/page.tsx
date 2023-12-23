import AdminFooter from "@/app/components/admin/AdminFooter";
import AdminNav from "@/app/components/admin/AdminNav";
import { ProductsContent } from "@/app/components/admin/indexServer";

type PageParams = {
  params: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: PageParams) {
  const { lang } = params

  return (
    <section className="bg-bkg">
      <div id="popup-root"></div>
      <section className="bg-bkg text-content mx-auto flex h-[70vh] max-w-[1700px] flex-col items-center">

        <AdminNav params={params} />

        <main className="w-full">
          <ProductsContent />
        </main>

      </section>

      <AdminFooter lang={lang as string} />
    </section>
  )
}
