import { IconMenuAccount, IconMenuContact, IconMenuHelp, IconMenuLogOut, IconMenuOrders, IconMenuReturns, IconMenuSettings } from "../navigation/icons/menu";


export const menuItems = [
  {
    content: "My Account",
    href: "#",
    Img: IconMenuAccount,
  },
  {
    content: "My Returns",
    href: "#",
    Img: IconMenuReturns,
  },
  {
    content: "My Orders",
    href: "#",
    Img: IconMenuOrders,
  },
  {
    content: "Settings",
    href: "#",
    Img: IconMenuSettings,
  },
  {
    content: "Help",
    href: "#",
    Img: IconMenuHelp,
  },
  {
    content: "Contact",
    href: "#",
    Img: IconMenuContact,
  },
  {
    content: "Log Out",
    href: "#",
    Img: () => null,
    // Img: IconMenuLogOut,
  }
]
