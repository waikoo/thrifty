import { useCheckoutStore } from "@/state/uiState"

type CheckoutContactProps = {
  type: string
  text: string
  id: 'firstname' | 'lastname' | 'phone' | 'email' | 'address' | 'city' | 'country' | 'zipcode'
  activeBg: string
}

export default function CheckoutContact({ type, text, id, activeBg }: CheckoutContactProps) {
  const { firstName, setFirstName, lastName, setLastName, phone, setPhone, email, setEmail, address, setAddress, city, setCity, country, setCountry, zipcode, setZipcode, isShippingCompleted } = useCheckoutStore()

  const handleOnChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    if (id === "firstname") setFirstName(target.value)
    if (id === "lastname") setLastName(target.value)
    if (id === "phone") setPhone(target.value)
    if (id === "email") setEmail(target.value)
    if (id === "address") setAddress(target.value)
    if (id === "city") setCity(target.value)
    if (id === "country") setCountry(target.value)
    if (id === "zipcode") setZipcode(target.value)
  }
  const values = {
    firstname: firstName,
    lastname: lastName,
    phone: phone,
    email: email,
    address: address,
    city: city,
    country: country,
    zipcode: zipcode
  }

  return (
    <div className="relative flex w-full flex-col">
      <input className={`${activeBg} bg-bkg border-b-content peer border-x-0 border-b-[0.1rem] border-t-0 border-solid pl-0 placeholder-transparent focus:ring-0`} id={id} type={type} placeholder={text} value={values[id]} onChange={handleOnChange} />
      <label className="absolute -top-3.5 left-0 text-gray-600 transition-all  peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-100" htmlFor={id}>{text}</label>
    </div>
  )
}
