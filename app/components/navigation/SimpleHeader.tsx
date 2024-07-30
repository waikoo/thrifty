import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { MdArrowBackIosNew } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'

import { Logo, WithHome } from '@/app/components/navigation/'
import { albert_800 } from '@/utils/fonts'

export default function SimpleHeader() {
  const router = useRouter()

  return (
    <nav className="bg-t_black w-screen">
      <div className="grid grid-cols-[auto_1fr_auto] p-4">
        <div onClick={() => router.back()}>
          <MdArrowBackIosNew
            color="white"
            className="cursor-pointer"
          />
        </div>

        <WithHome>
          <Logo
            logoColor="#d2d62e"
            width="8rem"
          />
        </WithHome>

        <Link
          href={`/`}
          className="cursor-pointer"
        >
          <RxCross1 color="white" />
        </Link>
      </div>

      <div className={`bg-t_mustard text-[17px] text-center p-1 ${albert_800.className}`}>
        CHECKOUT
      </div>
    </nav>
  )
}
