import HelpTitle from "@/app/components/help/HelpTitle"

type ReturnsProps = {
  children: React.ReactNode
}

export default function Returns({ children }: ReturnsProps) {
  return (
    <>
      <HelpTitle>{children}</HelpTitle>
      <p className="text-[0.8125rem] font-semibold">FREE 30-day return policy</p>
    </>
  )
}
