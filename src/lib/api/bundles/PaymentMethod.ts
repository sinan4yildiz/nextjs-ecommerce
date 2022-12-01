import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface PaymentMethodI {
   list: (args?: MethodArgsI) => Promise<any>,
}

const PaymentMethod: PaymentMethodI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY2Nw-loads-all-available-payment-methods
   * */
   list: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/payment-method',
            method: 'POST'
         }
      })
   }
}
export default PaymentMethod