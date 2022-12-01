import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface SystemI {
   countries: (args?: MethodArgsI) => Promise<any>,
   currencies: (args?: MethodArgsI) => Promise<any>,
   languages: (args?: MethodArgsI) => Promise<any>,
   context: (args?: MethodArgsI) => Promise<any>,
   updateContext: (args?: MethodArgsI) => Promise<any>,
   salutations: (args?: MethodArgsI) => Promise<any>,
}

const System: SystemI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY4OQ-fetch-countries
   * */
   countries: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/country',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY5MA-fetch-currencies
   * */
   currencies: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/currency',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY5MQ-fetch-languages
   * */
   languages: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/language',
            method: 'GET'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY5Mg-fetch-the-current-context
   * */
   context: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/context',
            method: 'GET'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY5Mw-modify-the-current-context
   * */
   updateContext: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/context',
            method: 'PATCH'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY5NA-fetch-salutations
   * */
   salutations: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/salutation',
            method: 'POST'
         }
      })
   }
}
export default System