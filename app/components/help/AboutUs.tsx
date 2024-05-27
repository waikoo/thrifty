/* eslint-disable jsx-a11y/alt-text */
import { albert_500 } from "@/utils/fonts";

type AboutUsProps = {
  className?: string
}

export default function AboutUs({ className }: AboutUsProps) {

  return (
    <div className={`relative grid place-items-center ${className}`}>
      <p className={`max-w-[620px] mx-auto z-50 backdrop-blur-md absolute text-t_white p-4 text-center xl:text-[15px] ${albert_500.className}`}>
        FIVE YEARS AGO, WE EMBARKED ON A JOURNEY TO REDEFINE THRIFTING WITH A TOUCH OF ELEGANCE. HERE AT THRIFTSTUDIO, WE CURATE A TIMELESS COLLECTION OF MEN'S, WOMEN'S, AND KIDS' SHOES, CLOTHING, AND ACCESSORIES. OUR SPACE IS A REFLECTION OF OUR PASSION FOR SUSTAINABLE FASHION AND UNIQUE FINDS. AS A LOCAL TREASURE TROVE, WE TAKE PRIDE IN OFFERING CAREFULLY SELECTED ITEMS THAT TELL A STORY OF QUALITY AND INDIVIDUALITY.
      </p>

      <div className="">
        <img
          src="/images/help/about_us.jpg"
          alt="a half black half rose colored elegant women's coat and another in green that's longer on two mannequins in an environment with green leaves"
          className="z-10 object-cover"
        />
      </div>
    </div>
  )
}
