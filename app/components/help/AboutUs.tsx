import HelpTitle from "@/app/components/help/HelpTitle"

type AboutUsProps = {
  children: React.ReactNode
}

export default function AboutUs({ children }: AboutUsProps) {

  return (
    <>
      <HelpTitle>{children}</HelpTitle>
      <p className="w-2/6 text-[0.8125rem] font-semibold leading-5">Five years ago, we embarked on a journey to redefine thrifting with a touch of elegance. Here at THRIFTSTUDIO, we curate a timeless collection of men's, women's, and kids' shoes, clothing, and accessories. Our space is a reflection of our passion for sustainable fashion and unique finds. As a local treasure trove, we take pride in offering carefully selected items that tell a story of quality and individuality.</p>
    </>
  )
}
