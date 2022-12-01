import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface ContentI {
   cmsPage: (args?: MethodArgsI) => Promise<any>,
   landingPage: (args?: MethodArgsI) => Promise<any>,
}

const Content: ContentI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY3Mg-fetch-and-resolve-a-cms-page
   * */
   cmsPage: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/cms/{id}',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY3NA-fetch-a-landing-page-with-the-resolved-cms-page
   * */
   landingPage: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/landing-page/{landingPageId}',
            method: 'POST'
         }
      })
   }
}

export default Content