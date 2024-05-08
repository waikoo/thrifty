import AccountMenuBarItem from "@/app/components/navigation/AccountMenuBarItem"

export default function AccountMenuBar() {

  return (
    <section className="*:text-t_black bg-t_mustard mt-8 w-screen justify-center gap-16">
      <div className="grid grid-cols-6 justify-items-center max-w-[700px] mx-auto">
        <AccountMenuBarItem>PROFILE</AccountMenuBarItem>
        <AccountMenuBarItem>ADDRESSES</AccountMenuBarItem>
        <AccountMenuBarItem>ORDERS</AccountMenuBarItem>
        <AccountMenuBarItem>RETURNS</AccountMenuBarItem>
        <AccountMenuBarItem>SETTINGS</AccountMenuBarItem>
        <AccountMenuBarItem>HELP</AccountMenuBarItem>
      </div>
    </section>
  )
}
