import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface SitemapI {
   list: (args?: MethodArgsI) => Promise<any>,
}

const Sitemap: SitemapI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY4OA-fetch-sitemaps
   * */
   list: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/sitemap',
            method: 'GET'
         }
      })
   }
}
export default Sitemap