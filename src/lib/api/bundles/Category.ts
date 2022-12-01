import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface CategoryI {
   fetch: (args?: MethodArgsI) => Promise<any>,
   list: (args?: MethodArgsI) => Promise<any>,
   navigation: (args?: MethodArgsI) => Promise<any>,
}

const Category: CategoryI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY3MA-fetch-a-single-category
   * */
   fetch: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/category/{categoryId}',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY2OQ-fetch-a-list-of-categories
   * */
   list: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/category',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY3MQ-fetch-a-navigation-menu
   * */
   navigation: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/navigation/{requestActiveId}/{requestRootId}',
            method: 'POST'
         }
      })
   }
}
export default Category