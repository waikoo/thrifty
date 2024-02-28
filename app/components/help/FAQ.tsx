import HelpTitle from "@/app/components/help/HelpTitle"

type FAQProps = {
  children: React.ReactNode
}

export default function FAQ({ children }: FAQProps) {
  return (
    <>
      <HelpTitle>{children}</HelpTitle>
      <ol className="max-w-3xl text-[0.8125rem]">
        <li className="list-decimal font-black"> What items are available on your webshop? </li>
        <ul>
          <li className="ml-5 list-disc font-semibold"> Our webshop features a curated selection of men's, women's, and kids' shoes, clothing, and accessories. From vintage fashion to classic pieces, each item is handpicked for its uniqueness and quality. </li>
        </ul>
        <br />

        <li className="list-decimal font-black"> How often do you update your inventory? </li>
        <ul>
          <li className="ml-5 list-disc"> We strive to keep our inventory fresh and exciting. New items are added regularly, so be sure to check back frequently for the latest treasures. </li>
        </ul>
        <br />

        <li className="list-decimal font-black"> Is shopping online as sustainable as in-store shopping? </li>
        <ul>
          <li className="ml-5 list-disc"> Absolutely! We are committed to sustainability, and our online platform extends our mission. By shopping with us online, you contribute to the reuse and repurposing of pre-loved items, reducing environmental impact. </li>
        </ul>
        <br />

        <li className="list-decimal font-black"> What sizes are available for clothing and shoes? </li>
        <ul>
          <li className="ml-5 list-disc"> Our inventory includes a diverse range of sizes to accommodate various body types and preferences. Specific size details are provided in the product descriptions. </li>
        </ul>
        <br />

        <li className="list-decimal font-black"> How can I be sure of the quality of the items I purchase? </li>
        <ul>
          <li className="ml-5 list-disc"> We thoroughly inspect and accurately describe the condition of each item. Additionally, high-resolution images are provided to give you a detailed view. If you have any concerns, our customer support is here to assist you. </li>
        </ul>
        <br />

        <li className="list-decimal font-black"> Do you offer returns or exchanges? </li>
        <ul>
          <li className="ml-5 list-disc"> Yes, we want you to be delighted with your purchase. Check our Returns and Exchanges policy for details on how to initiate a return or exchange. </li>
        </ul>
        <br />

        <li className="list-decimal font-black"> What payment methods do you accept? </li>
        <ul>
          <li className="ml-5 list-disc"> We accept various secure payment methods, including credit/debit cards and other online payment options. Your financial security is our priority. </li>
        </ul>
        <br />

        <li className="list-decimal font-black"> Can I track my order? </li>
        <ul>
          <li className="ml-5 list-disc"> Yes, once your order is shipped, you will receive a confirmation email with tracking details. This allows you to monitor the delivery status of your items. </li>
        </ul>
        <br />

        <li className="list-decimal font-black"> Do you ship internationally? </li>
        <ul>
          <li className="ml-5 list-disc"> At the moment, we primarily serve local customers. However, stay tuned for updates as we explore expanding our reach in the future. </li>
        </ul>
        <br />

        <li className="list-decimal font-black"> How can I contact customer support? </li>
        <ul>
          <li className="ml-5 list-disc"> For any inquiries or assistance, our customer support team is ready to help. Reach out to [email@example.com] or visit our Contact Us page for more options. </li>
        </ul>

      </ol>
    </>
  )
}
