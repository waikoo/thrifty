import AboutUs from "../help/AboutUs"
import Contact from "../help/Contact"
import Delivery from "../help/Delivery"
import FAQ from "../help/FAQ"

export const HELP_TITLES = [
  {
    name: 'ABOUT US',
    component: AboutUs as React.ComponentType<{ className?: string }>
  },
  {
    name: 'DELIVERY & RETURN INFO',
    component: Delivery as React.ComponentType<{ className?: string }>
  },
  {
    name: 'FAQ',
    component: FAQ as React.ComponentType<{ className?: string }>
  },
  {
    name: 'CONTACT',
    component: Contact as React.ComponentType<{ className?: string }>
  }
]

export const HELP_QUESTIONS = [
  "WHAT ITEMS ARE AVAILABLE ON YOUR WEBSHOP?",
  "HOW OFTEN DO YOU UPDATE YOUR INVENTORY?",
  "IS SHOPPING ONLINE AS SUSTAINABLE AS IN-STORE SHOPPING?",
  "WHAT SIZES ARE AVAILABLE FOR CLOTHING AND SHOES?",
  "HOW CAN I BE SURE OF THE QUALITY OF THE ITEMS I PURCHASE?",
  "DO YOU OFFER RETURNS OR EXCHANGES?",
  "WHAT PAYMENT METHODS DO YOU ACCEPT?",
  "CAN I TRACK MY ORDER?",
  "DO YOU SHIP INTERNATIONALLY?",
  "HOW CAN I CONTACT CUSTOMER SUPPORT?"
]

export const HELP_ANSWERS = [
  "Our webshop features a curated selection of men's, women's, and kids' shoes, clothing, and accessories. From vintage fashion to classic pieces, each item is handpicked for its uniqueness and quality.",
  "We strive to keep our inventory fresh and exciting. New items are added regularly, so be sure to check back frequently for the latest treasures.",
  "Absolutely! We are committed to sustainability, and our online platform extends our mission. By shopping with us online, you contribute to the reuse and repurposing of pre-loved items, reducing environmental impact.",
  "Our inventory includes a diverse range of sizes to accommodate various body types and preferences. Specific size details are provided in the product descriptions.",
  "We thoroughly inspect and accurately describe the condition of each item. Additionally, high-resolution images are provided to give you a detailed view. If you have any concerns, our customer support is here to assist you.",
  "Yes, we want you to be delighted with your purchase. Check our Returns and Exchanges policy for details on how to initiate a return or exchange.",
  "We accept various secure payment methods, including credit/debit cards and other online payment options. Your financial security is our priority.",
  "Yes, once your order is shipped, you will receive a confirmation email with tracking details. This allows you to monitor the delivery status of your items.",
  "At the moment, we primarily serve local customers. However, stay tuned for updates as we explore expanding our reach in the future.",
  "For any inquiries or assistance, our customer support team is ready to help. Reach out to [email@example.com] or visit our Contact Us page for more options."
]
