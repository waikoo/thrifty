import { create } from 'zustand'

import { v4 as uuidv4 } from 'uuid'

import { supabase } from '@/app/supabase'
import { TAddress } from '@/types/shippingAddress'

type TAddressStore = {
  showAddAddress: boolean
  setShowAddAddress: (value: boolean) => void
  savedAddresses: TAddress[]
  firstName: string,
  setFirstName: (value: string) => void,
  lastName: string,
  setLastName: (value: string) => void,
  address: string,
  setAddress: (value: string) => void,
  city: string,
  setCity: (value: string) => void,
  country: string,
  setCountry: (value: string) => void,
  zipcode: string,
  setZipcode: (value: string) => void,
  phone: number,
  setPhone: (value: number) => void,
  isDefault: boolean
  setIsDefault: (value: boolean) => void
  setAsDefault: (addressId: string, userId: string) => void
  deleteAddress: (addressId: string, userId: string) => void
  showEditForm: boolean
  setShowEditForm: (value: boolean) => void
  onSubmitAddress: (addressBeingEdited: string) => Promise<void>
}

export const useAddressStore = create<TAddressStore>((set, get) => ({
  showAddAddress: false,
  setShowAddAddress: (value) => set({ showAddAddress: value }),
  savedAddresses: [],
  firstName: '',
  setFirstName: (value) => set({ firstName: value }),
  lastName: '',
  setLastName: (value) => set({ lastName: value }),
  address: '',
  setAddress: (value) => set({ address: value }),
  city: '',
  setCity: (value) => set({ city: value }),
  country: '',
  setCountry: (value) => set({ country: value }),
  zipcode: '',
  setZipcode: (value) => set({ zipcode: value }),
  phone: 0,
  setPhone: (value) => set({ phone: value }),
  isDefault: false,
  setIsDefault: (value) => set({ isDefault: value }),
  onSubmitAddress: async (addressBeingEdited: string) => {

    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const newAddress: TAddress = {
        firstName: get().firstName,
        lastName: get().lastName,
        address: get().address,
        city: get().city,
        zipcode: get().zipcode,
        country: get().country,
        phone: get().phone,
        isDefault: get().isDefault,
        userId: user.id,
        addressId: addressBeingEdited || uuidv4()
      }

      let { data: dbAddresses, error } = await supabase
        .from('clients')
        .select('addresses')
        .eq('client_id', user.id);

      if (dbAddresses && dbAddresses.length > 0) {
        const flattenedAddresses = dbAddresses?.flatMap((clientObj) => clientObj.addresses) ?? [];
        const existingAddress = flattenedAddresses.find((address) => address.addressId === newAddress.addressId);

        if (newAddress.isDefault) { // If new is default, reset existing ones to isDefault = false
          flattenedAddresses.forEach((address) => address.isDefault = false);
          supabase.from('clients').update({ addresses: flattenedAddresses }).eq('client_id', user.id);
        }

        if (existingAddress) { // Check if existing address is being updated
          const updateProperties = ["firstName", "lastName", "address", "city", "zipcode", "country", "phone", "isDefault"];

          for (const property of updateProperties) { // Overwrite existing address with new values
            if (newAddress[property] !== existingAddress[property]) {
              existingAddress[property] = newAddress[property];
            }
          }
          flattenedAddresses[flattenedAddresses.indexOf(existingAddress)] = existingAddress;

          const { data: updateData, error: updateError } = await supabase
            .from('clients')
            .update({ addresses: flattenedAddresses })
            .eq('client_id', user.id);
          if (updateError) console.error(updateError);

        } else { // Append new address to existing addresses
          const { data, error } = await supabase
            .from('clients')
            .update({ addresses: [...flattenedAddresses, newAddress] })
            .eq('client_id', user.id);
          if (error) console.error(error);
        }
      } else {
        const { data: updateData, error: updateError } = await supabase
          .from('clients')
          .insert({
            client_id: user.id,
            addresses: [newAddress],
            email: user.email,
          });
        if (error) console.error(error);
      }
    }

    // Reset values
    set({ firstName: '', lastName: '', address: '', city: '', zipcode: '', country: '', phone: 0, isDefault: false })
    set({ showAddAddress: false })
    set({ showEditForm: false })
    location.reload()
  },
  setAsDefault: async (addressId, userId) => {
    const { data: dbAddresses, error: dbError } = await supabase
      .from('clients')
      .select('addresses')
    if (dbError) console.error(dbError);
    const flattenedAddresses = dbAddresses?.flatMap((clientObj) => clientObj.addresses) ?? [];
    const mappedAddresses = flattenedAddresses.map((address) => {
      address.isDefault = address.addressId === addressId ? true : false
      return address
    })
    const { data: updateData, error: updateError } = await supabase
      .from('clients')
      .update({ addresses: mappedAddresses })
      .eq('client_id', userId)
    if (updateError) console.error(updateError);

  },
  deleteAddress: async (addressId, userId) => {
    const { data: dbAddresses, error: dbError } = await supabase
      .from('clients')
      .select('addresses')
    if (dbError) console.error(dbError);
    const flattenedAddresses = dbAddresses?.flatMap((clientObj) => clientObj.addresses) ?? [];
    const filteredAddresses = flattenedAddresses.filter((address) => address.addressId !== addressId)

    const { data: updateData, error: updateError } = await supabase
      .from('clients')
      .update({ addresses: filteredAddresses })
      .eq('client_id', userId)
    if (updateError) console.error(updateError);
  },
  showEditForm: false,
  setShowEditForm: (value) => set({ showEditForm: value }),
}))
