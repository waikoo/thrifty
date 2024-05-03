"use client"
import { MenuItem } from '@/app/components/navigation'
import { menuItems } from '@/app/components/data/navigation'
import { useSignOut, useUserSession } from '@/app/components/hooks'
import { useUIStore } from '@/state/client/uiState';
import { albert_500, albert_600, albert_900 } from '@/utils/fonts';

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
    <nav className="fixed right-[10.5rem] top-[5.3rem] z-50 text-base w-[300px]"
      onMouseLeave={closeMenu}
    >
      <div className="bg-t_mustard text-t_black border-faded flex w-full flex-col gap-2 border-b-[0.1rem] px-8 py-6">
        <span className={`text-[0.875rem] ${albert_600.className}`}>Hi, {session?.user.email}!</span>
      </div>

      <ul className="whitespace-no-wrap">
        {menuItems.map(({ content, href }) => {
          const isLogout = content === 'Log out'

          const logOutStyles = isLogout ? `border-faded border-t-[0.1rem] px-8 py-4 ${albert_600.className} text-[0.875rem]` : 'px-12 py-1'
          const bgMustard = isLogout ? 'bg-t_mustard' : 'bg-t_white dark:bg-t_black'
          const onClick = isLogout ? signOut : closeMenu

          return (
            <MenuItem
              className={`${logOutStyles} text-[0.75rem] text-t_black dark:text-t_white ${bgMustard} hover:bg-t_mustard ${albert_500.className} cursor-pointer pr-20`}
              key={content}
              href={href}
              loading={loading}
              onClick={onClick}
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
