import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface RouteI {
   urls: (args?: MethodArgsI) => Promise<any>,
}

const Route: RouteI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY4Nw-fetch-seo-routes
   * */
   urls: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/seo-url',
            method: 'POST'
         }
      })
   }
}
export default Route