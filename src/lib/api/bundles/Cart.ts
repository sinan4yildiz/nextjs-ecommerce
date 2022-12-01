import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface CartI {
   fetch: (args?: MethodArgsI) => Promise<any>,
   addItems: (args?: MethodArgsI) => Promise<any>,
   updateItems: (args?: MethodArgsI) => Promise<any>,
   removeItems: (args?: MethodArgsI) => Promise<any>,
   delete: (args?: MethodArgsI) => Promise<any>,
}

const Cart: CartI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTYzNA-fetch-or-create-a-cart
   * */
   fetch: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/checkout/cart',
            method: 'GET'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTYzNg-add-items-to-the-cart
   * */
   addItems: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/checkout/cart/line-item',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTYzNw-remove-items-from-the-cart
   * */
   updateItems: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/checkout/cart/line-item',
            method: 'PATCH'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTYzNw-remove-items-from-the-cart
   * */
   removeItems: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/checkout/cart/line-item',
            method: 'DELETE'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTYzNQ-delete-a-cart
   * */
   delete: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/checkout/cart',
            method: 'DELETE'
         }
      })
   }
}

export default Cart