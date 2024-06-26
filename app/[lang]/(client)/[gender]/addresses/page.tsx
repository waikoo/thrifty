import AddNewAddress from "@/app/components/addresses/AddNewAddress"
import ConditionalAddress from "@/app/components/addresses/ConditionalAddress"
import useSupabaseServer from "@/app/components/hooks/useSupabaseServer"
import { Gender, Locales } from "@/types/link"

type PageProps = {
  params: {
    lang: Locales,
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({ params }: PageProps) {
  const supabase = useSupabaseServer()
  const { data: addresses, error } = await supabase
    .from('clients')
    .select('addresses')

  const flattenedAddresses = addresses?.flatMap((clientObj) => clientObj.addresses) ?? [];
  return (
    <main className="text-content">
      <AddNewAddress />
      <ConditionalAddress dbAddresses={flattenedAddresses} />
    </main>
  )
}
