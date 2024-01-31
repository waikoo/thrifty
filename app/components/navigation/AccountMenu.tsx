"use client"
import { useThemeStore } from '@/state/'
import { getSvgColor } from '@/utils/theme'
import { MenuItem } from '.'
import { menuItems } from '@/app/components/data/navigation'
import { useSignOut, useUserSession } from '@/app/components/hooks'

const AccountMenu = () => {
  const color = useThemeStore((state) => getSvgColor(state.theme))
  const { signOutHook, loading } = useSignOut()
  const { session, error } = useUserSession()

  return (
    <nav className="bg-bkg absolute right-[-7rem] top-8 z-10 text-base">
      <div className="bg-faded w-full px-12 py-4 text-black">
        <h3 className="font-bold">Welcome,</h3>
        <span>{session?.user.email}</span>
      </div>

      <ul className="whitespace-no-wrap">
        {menuItems.map(({ content, Img }) => {
          const logOutBorder = content === 'Log Out' ? 'border-faded border-t-[0.1rem]' : ''

          return (
            <MenuItem
              color={color}
              className={`${logOutBorder} text-content bg-bkg hover:bg-content hover:text-bkg cursor-pointer px-12 pr-40`}
              key={content}
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
