import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface WishlistI {
   fetch: (args?: MethodArgsI) => Promise<any>,
   add: (args?: MethodArgsI) => Promise<any>,
   create: (args?: MethodArgsI) => Promise<any>,
   delete: (args?: MethodArgsI) => Promise<any>,
}

const Wishlist: WishlistI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY1MQ-fetch-a-wishlist
   * */
   fetch: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/customer/wishlist',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY0MA-add-a-product-to-a-wishlist
   * */
   add: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/customer/wishlist/add/{productId}',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY1NA-create-a-wishlist-for-a-customer
   * */
   create: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/customer/wishlist/merge',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY1Nw-remove-a-product-from-a-wishlist
   * */
   delete: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/customer/wishlist/delete/{productId}',
            method: 'DELETE'
         }
      })
   }
}

export default Wishlist