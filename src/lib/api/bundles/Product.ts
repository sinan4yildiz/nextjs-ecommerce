import APIRequest from '@lib/api/request'
import { MethodArgsI } from '@lib/api/types'

export interface ProductI {
   fetch: (args?: MethodArgsI) => Promise<any>,
   list: (args?: MethodArgsI) => Promise<any>,
   listByCategory: (args?: MethodArgsI) => Promise<any>,
   crossSelling: (args?: MethodArgsI) => Promise<any>,
   reviews: (args?: MethodArgsI) => Promise<any>,
   submitReview: (args?: MethodArgsI) => Promise<any>,
   search: (args?: MethodArgsI) => Promise<any>,
   searchSuggestions: (args?: MethodArgsI) => Promise<any>,
}

const Product: ProductI = {
   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY3OQ-fetch-a-single-product
   * */
   fetch: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/product/{productId}',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY4MQ-fetch-a-list-of-products
   * */
   list: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/product',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY4MA-fetch-a-product-listing-by-category
   * */
   listByCategory: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/product-listing/{categoryId}',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY3OA-fetch-cross-selling-groups-of-a-product
   * */
   crossSelling: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/product/{productId}/cross-selling',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY4Mg-fetch-product-reviews
   * */
   reviews: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/product/{productId}/reviews',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI2NTY4Mw-save-a-product-review
   * */
   submitReview: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/product/{productId}/review',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6MTE0OTQwMzg-search-for-products
   * */
   search: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/search',
            method: 'POST'
         }
      })
   },

   /*
   * https://shopware.stoplight.io/docs/store-api/b3A6ODI4OTM0MA-search-for-products-suggest
   * */
   searchSuggestions: async (args?: MethodArgsI) => {
      return await APIRequest({
         ...args,
         endpoint: {
            url: '/search-suggest',
            method: 'POST'
         }
      })
   }
}

export default Product