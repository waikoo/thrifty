import AdminContent from "@/app/components/admin/AdminContent";
import AdminFooter from "@/app/components/admin/AdminFooter";
import AdminNav from "@/app/components/admin/AdminNav";

type PageParams = {
  params: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: PageParams) {
  const { lang } = params

  return (
    <section className="bg-t_admin_black">
      <div id="popup-root"></div>
      <section className="text-white mx-auto h-[90vh] flex max-w-[90vw] flex-col items-center">
        <AdminNav params={params} />

        <AdminContent />

      </section>

      <AdminFooter lang={lang as string} />
    </section>
  )
}
