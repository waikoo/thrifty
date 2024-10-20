import Link from "next/link";
import { PublishChanges, SelectProducts } from ".";
import { Logo } from "../navigation";

type AdminFooterProps = {
  lang: string
}

export default function AdminFooter({ lang }: AdminFooterProps) {

  return (
    <footer className="bg-t_admin_black text-white fixed bottom-0 left-0 right-0 w-screen p-6">
      <div className="mx-auto grid max-w-[90vw] grid-cols-3 items-baseline">
        <SelectProducts />
        <Link href={`/${lang}/admin`} className="col-start-2 col-end-3 cursor-pointer self-baseline justify-self-center ">
          <Logo />
        </Link>
        <PublishChanges
          publishSome
          className="text-[0.8125rem] font-semibold" />
      </div>
    </footer>
  )
}
