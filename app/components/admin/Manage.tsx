import { Button, ProductImage, ProductState, StatusBar } from "@/app/components/admin"
import { StatusImages } from "@/app/components/admin"

export default async function Manage() {
  // const { data: { user } } = await supabase.auth.getUser()
  // console.log('Manage: user: ' + user)

  return (
    <section className="flex flex-col gap-12">

      <div className="flex h-[60vh] gap-10">
        <ProductState />

        <ProductImage />
      </div>

      <Button />

      <StatusBar>
        {/* <StatusImages /> */}
      </StatusBar>
    </section>

  )
}
