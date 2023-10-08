"use client"
import { useThemeStore } from '@/state/'
import { getSvgColor } from '@/utils/theme'
import { MenuItem } from '.'
import { menuItems } from '../data/navigation'
import { useSignOut } from '../hooks'

const AccountMenu = () => {
  const color = useThemeStore((state) => getSvgColor(state.theme))
  const { signOutHook, loading } = useSignOut()

  return (
    <nav className="absolute bg-bkg px-12 py-4 z-10 top-8 right-[-7rem] text-base">
      <ul className="whitespace-no-wrap">
        {menuItems.map(({ content, Img }) => (
          <MenuItem
            color={color}
            className="cursor-pointer text-content bg-bkg hover:bg-content hover:text-bkg pr-40"
            key={content}
            Img={Img}
            loading={loading}
            onClick={content === 'Log Out' ? signOutHook : () => { }}
          >
            {content}</MenuItem>
        ))}
      </ul>
    </nav>
  )
}

export default AccountMenu
