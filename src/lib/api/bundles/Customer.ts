import { MethodArgsI } from '@lib/api/types'
import APIRequest from '../request'

export interface CustomerI {
   fetch: (args?: MethodArgsI) => Promise<any>,
   update: (args?: MethodArgsI) => Promise<any>,
   changeEmailAddress: (args?: MethodArgsI) => Promise<any>,
   changePassword: (args?: MethodArgsI) => Promise<any>,
   changeDefaultPaymentMethod: (args?: MethodArgsI) => Promise<any>,
   recoveryPasswordEmail: (args?: MethodArgsI) => Promise<any>,
   resetPassword: (args?: MethodArgsI) => Promise<any>,
}

const Customer: CustomerI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY0Ng-get-information-about-current-customer
   * */
   fetch: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/customer',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY0MQ-change-the-customer-s-information
   * */
   update: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/change-profile',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY0Mg-change-the-customer-s-email-address
   * */
   changeEmailAddress: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/change-email',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY0Mw-change-the-customer-s-password
   * */
   changePassword: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/change-password',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY0NA-change-the-customer-s-default-payment-method
   * */
   changeDefaultPaymentMethod: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/change-payment-method/{paymentMethodId}',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY1OQ-send-a-password-recovery-mail
   * */
   recoveryPasswordEmail: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/recovery-password',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY1OA-reset-a-password-with-recovery-credentials
   * */
   resetPassword: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/recovery-password-confirm',
            method: 'POST'
         }
      })
   }
}
export default Customer