"use client"
import AccountMenuBarItem from "@/app/components/navigation/AccountMenuBarItem"
import IconProfile from "@/app/components/navigation/icons/IconProfile"
import IconAddresses from "@/app/components/navigation/icons/IconAddresses"
import IconOrders from "@/app/components/navigation/icons/IconOrders"
import IconReturns from "@/app/components/navigation/icons/IconReturns"
import IconSettings from "@/app/components/navigation/icons/IconSettings"

export default function AccountMenuBar() {

  return (
    <section className="*:text-bkg bg-content mt-8 flex w-screen justify-center gap-16 py-4">
      <AccountMenuBarItem Icon={IconProfile}>PROFILE</AccountMenuBarItem>
      <AccountMenuBarItem Icon={IconAddresses}>ADDRESSES</AccountMenuBarItem>
      <AccountMenuBarItem Icon={IconOrders}>ORDERS</AccountMenuBarItem>
      <AccountMenuBarItem Icon={IconReturns}>RETURNS</AccountMenuBarItem>
      <AccountMenuBarItem Icon={IconSettings}>SETTINGS</AccountMenuBarItem>
    </section>
  )
}
