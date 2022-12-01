import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface AccountI {
   login: (args?: MethodArgsI) => Promise<any>,
   logout: (args?: MethodArgsI) => Promise<any>,
   register: (args?: MethodArgsI) => Promise<any>,
   registrationSettings: (args?: MethodArgsI) => Promise<any>,
   confirm: (args?: MethodArgsI) => Promise<any>,
}

const Account: AccountI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY1Mg-log-in-a-customer
   * */
   login: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/login',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY1Mw-log-out-a-customer
   * */
   logout: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/logout',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY1Ng-register-a-customer
   * */
   register: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/register',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY0NQ-fetch-registration-settings-for-customer-group
   * */
   registrationSettings: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/customer-group-registration/config/{customerGroupId}',
            method: 'GET'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY1NQ-confirm-a-customer-registration
   * */
   confirm: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/account/register-confirm',
            method: 'POST'
         }
      })
   }
}
export default Account