"use client"
import { MenuItem } from '.'
import { menuItems } from '@/app/components/data/navigation'
import { useSignOut, useUserSession } from '@/app/components/hooks'

const AccountMenu = () => {
  const { signOutHook, loading } = useSignOut()
  const { session, error } = useUserSession()

  return (
    <nav className="bg-bkg absolute right-[-7rem] top-8 z-10 text-base">
      <div className="bg-bkg text-content border-faded flex w-full flex-col gap-2 border-b-[0.1rem] px-12 py-6">
        <h3 className="text-[0.75rem] font-semibold">Welcome,</h3>
        <span className="text-[0.75rem] font-semibold">{session?.user.email}</span>
      </div>

      <ul className="whitespace-no-wrap">
        {menuItems.map(({ content, href, Img }) => {
          const logOutBorder = content === 'Log Out' ? 'border-faded border-t-[0.1rem]' : ''

          return (
            <MenuItem
              className={`${logOutBorder} text-content bg-bkg hover:bg-content hover:text-bkg cursor-pointer px-12 pr-40`}
              key={content}
              href={href}
              Img={Img}
              loading={loading}
              onClick={content === 'Log Out' ? signOutHook : () => { }}
            >
              {content}
            </MenuItem>
          )
        })}
      </ul>
    </nav>
  )
}

export default AccountMenu
