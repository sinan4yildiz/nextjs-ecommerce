import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface AddressI {
   list: (args?: MethodArgsI) => Promise<any>,
   create: (args?: MethodArgsI) => Promise<any>,
   update: (args?: MethodArgsI) => Promise<any>,
   changeDefaultBillingAddress: (args?: MethodArgsI) => Promise<any>,
   changeDefaultShippingAddress: (args?: MethodArgsI) => Promise<any>,
   delete: (args?: MethodArgsI) => Promise<any>,
}

const Address: AddressI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY1MA-fetch-addresses-of-a-customer
   * */
   list: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/list-address',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY2Mg-create-a-new-address-for-a-customer
   * */
   create: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/address',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY0OQ-modify-an-address-of-a-customer
   * */
   update: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/address/{addressId}',
            method: 'PATCH'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY2MQ-change-a-customer-s-default-billing-address
   * */
   changeDefaultBillingAddress: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/address/default-billing/{addressId}',
            method: 'PATCH'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY2MA-change-a-customer-s-default-shipping-address
   * */
   changeDefaultShippingAddress: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/address/default-shipping/{addressId}',
            method: 'PATCH'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY0OA-delete-an-address-of-a-customer
   * */
   delete: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/address/{addressId}',
            method: 'DELETE'
         }
      })
   }
}
export default Address