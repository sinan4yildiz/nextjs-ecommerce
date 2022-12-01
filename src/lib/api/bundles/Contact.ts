import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface ContactI {
   submit: (args?: MethodArgsI) => Promise<any>,
}

const Contact: ContactI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY3Mw-submit-a-contact-form-message
   * */
   submit: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/contact-form',
            method: 'POST'
         }
      })
   }
}
export default Contact