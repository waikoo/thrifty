"use client"
import { useThemeStore, useUIStore } from '@/state/'
import { getSvgColor } from '@/utils/theme'
import { MenuItem } from '.'
import { Spinner } from '..'
import { useSignOut } from '../hooks'
import { IconMenuAccount, IconMenuContact, IconMenuHelp, IconMenuLogOut, IconMenuOrders, IconMenuReturns, IconMenuSettings } from './icons/menu'

const AccountMenu = () => {
  const color = useThemeStore((state) => getSvgColor(state.theme))
  const { signOutHook, loading } = useSignOut()
  // const menuItems = ['My Account', 'My Returns', 'My Orders', 'Settings', 'Help', 'Contact', 'Log Out']
  // const icons = [IconMenuAccount, IconMenuReturns, IconMenuOrders, IconMenuSettings, IconMenuHelp, IconMenuContact, IconMenuLogOut]

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
