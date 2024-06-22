import HelpTitle from "@/app/components/help/HelpTitle"
import { albert, albert_600, albert_800 } from "@/utils/fonts"

export default function HelpReturns() {

  return (
    <div className="mt-10 text-left">
      <HelpTitle>RETURN</HelpTitle>

      <p className={`${albert_600.className} mt-10 text-[13px] sm:text-[17px] xl:text-[14px]`}>We want you to be completely satisfied with your purchase. If you are not happy with your items for any reason, you can return them within 30 days of receipt for a full refund, provided they are in their original condition.</p>

      <span className={`${albert_800.className} mt-12 text-[13px] sm:text-[17px] xl:text-[15px] block`}>HOW TO RETURN AN ITEM</span>

      <div className="mt-3 flex flex-col xl:flex-row gap-4">
        <div className="rounded-[40px] bg-[#f2f2f2] p-6 xl:max-w-[350px] flex gap-2">
          <span className={`${albert_600.className} text-[13px] sm:text-[17px] xl:text-[14px]`}>Online: </span>
          <p className={`${albert.className} text-[13px] sm:text-[17px] xl:text-[14px]`}>Log in to your account and go to the 'Orders' section. Select the order you wish to return and follow the instructions to generate a return. Pack the items you want to return with all tags attached. A courier will pick them up from the address you specified within 2-4 business days.</p>
        </div>

        <div className="rounded-[40px] bg-[#f2f2f2] p-6 xl:max-w-[350px] flex gap-2">
          <span className={`${albert_600.className} text-[13px] sm:text-[17px] xl:text-[14px] whitespace-nowrap`}>In-store: </span>
          <p className={`${albert.className} text-[13px] sm:text-[17px] xl:text-[14px]`}>Bring the items with all tags attached to our store along with the receipt or order confirmation email. Our staff will assist you with the return process.</p>
        </div>
      </div>

      <div className="mt-10">
        <span className={`${albert_800.className} text-[13px] sm:text-[17px] xl:text-[15px]`}>REFUNDS</span>
        <p className={`${albert_600.className} text-[13px] sm:text-[17px] xl:text-[14px]`}>Refunds will be processed within 5-7 business days after we receive and inspect your return. The refund will be credited to your original payment method.</p>
      </div>

      <div className="mt-10">
        <span className={`${albert_800.className} text-[13px] sm:text-[17px] xl:text-[15px]`}>CONDITIONS</span>
        <p className={`${albert_600.className} text-[13px] sm:text-[17px] xl:text-[14px]`}>Items must be returned in their original condition, unworn, and with all tags attached.</p>
        <p className={`${albert_600.className} text-[13px] sm:text-[17px] xl:text-[14px]`}>
          For further assistance, please contact our Customer Service team at
          <a href="mailto:thriftstudio@shop.com">thriftstudio@shop.com</a>
          or call
          <a href="tel:1234567890">1234567890</a>
          . We are here to help you with any questions or concerns you may have."
        </p>
      </div>

      <p className={`${albert_600.className} mt-10 text-[13px] sm:text-[17px] xl:text-[14px]`}>Thank you for shopping with us!</p>
    </div>
  )
}

