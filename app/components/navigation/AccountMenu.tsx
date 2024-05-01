"use client"
import { MenuItem } from '@/app/components/navigation'
import { menuItems } from '@/app/components/data/navigation'
import { useSignOut, useUserSession } from '@/app/components/hooks'
import { useUIStore } from '@/state/client/uiState';

const AccountMenu = () => {
  const { signOutHook, loading } = useSignOut()
  const { session, error } = useUserSession()
  const { setShowMyAccount } = useUIStore()

  function signOut(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void {
    signOutHook(e)
    closeMenu()
    window.location.reload()
  }

  function closeMenu() {
    setShowMyAccount(false)
  }

  return (
    <nav className="bg-t_white fixed right-[10rem] top-[6rem] z-50 text-base">
      <div className="bg-t_white text-t_black border-faded flex w-full flex-col gap-2 border-b-[0.1rem] px-12 py-6">
        <h3 className="text-[0.75rem] font-semibold">Welcome,</h3>
        <span className="text-[0.75rem] font-semibold">{session?.user.email}</span>
      </div>

      <ul className="whitespace-no-wrap">
        {menuItems.map(({ content, href, Img }) => {
          const logOutBorder = content === 'Log Out' ? 'border-faded border-t-[0.1rem]' : ''

          return (
            <MenuItem
              className={`${logOutBorder} text-t_black bg-bkg hover:bg-content hover:text-bkg cursor-pointer px-12 pr-40`}
              key={content}
              href={href}
              Img={Img}
              loading={loading}
              onClick={content === 'Log Out' ? signOut : closeMenu}
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
