import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface ShippingMethodI {
   list: (args?: MethodArgsI) => Promise<any>,
}

const ShippingMethod: ShippingMethodI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY2OA-fetch-shipping-methods
   * */
   list: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/shipping-method',
            method: 'POST'
         }
      })
   }
}
export default ShippingMethod