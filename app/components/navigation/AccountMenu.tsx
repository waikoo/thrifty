"use client"
import { useThemeStore, useUserStore } from '@/state/'
import { MenuItem } from '.'
import { IconMenuAccount, IconMenuContact, IconMenuHelp, IconMenuLogOut, IconMenuOrders, IconMenuReturns, IconMenuSettings } from './icons/menu'
import { getSvgColor } from '@/utils/theme'
import { useSignOut } from '../hooks'
import { Spinner } from '..'

type AccountMenuProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const AccountMenu = ({ setShow }: AccountMenuProps) => {
  const logout = useUserStore((state) => state.signOut)
  const color = useThemeStore((state) => getSvgColor(state.theme))
  // const menuItems = ['My Account', 'My Returns', 'My Orders', 'Settings', 'Help', 'Contact', 'Log Out']
  // const icons = [IconMenuAccount, IconMenuReturns, IconMenuOrders, IconMenuSettings, IconMenuHelp, IconMenuContact, IconMenuLogOut]
  const { signOutHook, loading } = useSignOut(setShow)
  return (
    <nav className="absolute bg-bkg p-5 z-10 top-35">
      <ul className="whitespace-no-wrap pr-10">
        <MenuItem color={color} className="" onClick={() => { }} Img={IconMenuAccount}>My Account</MenuItem>
        <MenuItem color={color} className="" onClick={() => { }} Img={IconMenuReturns}>My Returns</MenuItem>
        <MenuItem color={color} className="" onClick={() => { }} Img={IconMenuOrders}>My Orders</MenuItem>
        <MenuItem color={color} className="" onClick={() => { }} Img={IconMenuSettings}>Settings</MenuItem>
        <MenuItem color={color} className="" onClick={() => { }} Img={IconMenuHelp}>Help</MenuItem>
        <MenuItem color={color} className="" onClick={() => { }} Img={IconMenuContact}>Contact</MenuItem>

        {loading ? <Spinner /> : null}
        <MenuItem color={color} className="cursor-pointer" onClick={signOutHook} Img={IconMenuLogOut}>Log Out</MenuItem>
      </ul>
    </nav>
  )
}

export default AccountMenu
