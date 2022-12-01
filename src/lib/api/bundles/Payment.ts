import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface PaymentI {
   initiatePayment: (args?: MethodArgsI) => Promise<any>,
}

const Payment: PaymentI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY2Ng-initiate-a-payment-for-an-order
   * */
   initiatePayment: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/handle-payment',
            method: 'POST'
         }
      })
   }
}

export default Payment