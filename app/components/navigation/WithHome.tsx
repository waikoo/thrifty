import Link from "next/link";
import { usePathname } from "next/navigation";

type withHomeProps = {
  children: React.ReactNode
}

export default function WithHome({ children }: withHomeProps) {
  const [, locale, category] = usePathname().split('/')

  return (
    <Link href={`/${locale}/${category}`} className="flex justify-center">
      {children}
    </Link>
  )
}
