import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface NewsletterI {
   subscribe: (args?: MethodArgsI) => Promise<any>,
   unsubscribe: (args?: MethodArgsI) => Promise<any>,
   confirm: (args?: MethodArgsI) => Promise<any>,
}

const Newsletter: NewsletterI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY3Ng-create-or-remove-a-newsletter-subscription
   * */
   subscribe: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/newsletter/subscribe',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY3Nw-remove-a-newsletter-subscription
   * */
   unsubscribe: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/newsletter/confirm',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY3NQ-confirm-a-newsletter-registration
   * */
   confirm: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/newsletter/unsubscribe',
            method: 'POST'
         }
      })
   }
}
export default Newsletter