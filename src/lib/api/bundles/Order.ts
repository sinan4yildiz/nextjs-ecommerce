import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface OrderI {
   list: (args?: MethodArgsI) => Promise<any>,
   create: (args?: MethodArgsI) => Promise<any>,
   updatePaymentMethod: (args?: MethodArgsI) => Promise<any>,
   cancel: (args?: MethodArgsI) => Promise<any>,
}

const Order: OrderI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY2NA-fetch-a-list-of-orders
   * */
   list: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/order',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTYzOQ-create-an-order-from-a-cart
   * */
   create: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/checkout/order',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY2NQ-update-the-payment-method-of-an-order
   * */
   updatePaymentMethod: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/order/payment',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY2Mw-cancel-an-order
   * */
   cancel: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/order/state/cancel',
            method: 'POST'
         }
      })
   }
}

export default Order