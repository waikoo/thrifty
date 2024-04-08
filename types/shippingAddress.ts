export type TAddress = {
  firstName: string,
  lastName: string,
  address: string,
  city: string,
  zipcode: string,
  country: string,
  phone: number,
  isDefault: boolean,
  userId: string,
  addressId: string
  [key: string]: string | number | boolean
}
