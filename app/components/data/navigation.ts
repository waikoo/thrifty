import IconAddresses from "../navigation/icons/IconAddresses";
import IconHelp from "../navigation/icons/IconHelp";
import IconProfile from "../navigation/icons/IconProfile";
import IconReturns from "../navigation/icons/IconReturns";
import { IconMenuOrders, IconMenuSettings } from "../navigation/icons/menu";

export const menuItems = [
  {
    content: "PROFILE",
    href: "profile",
    Img: IconProfile,
  },
  {
    content: "ADDRESSES",
    href: "addresses",
    Img: IconAddresses,
  },
  {
    content: "ORDERS",
    href: "orders",
    Img: IconMenuOrders,
  },
  {
    content: "RETURNS",
    href: "returns",
    Img: IconReturns,
  },
  {
    content: "SETTINGS",
    href: "settings",
    Img: IconMenuSettings,
  },
  {
    content: "HELP",
    href: "help",
    Img: IconHelp,
  },
  {
    content: "Log Out",
    href: "",
    Img: () => null,
  }
]
