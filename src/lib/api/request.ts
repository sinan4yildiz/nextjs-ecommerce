import ENV from '@constants/env'
import { APIRequestI } from '@lib/api/types'
import { replaceByObject } from '@lib/utils'

const APIRequest: APIRequestI = async ({ endpoint, segments, options = {} }) => {
   if (segments)
      endpoint.url = replaceByObject(endpoint.url, segments)

   if (typeof options?.body === 'object') {
      options.body = JSON.stringify(options.body)
   }

   options = Object.assign(options, {
      headers: {
         'Content-Type': 'application/json',
         'sw-access-key': ENV.API_ACCESS_KEY,
         /*'sw-language-id': '3959ec369d71458b812f7c6c099f1154'*/
      },
      method: endpoint.method
   })

   const req = async () => {
      const res = await fetch(ENV.API_BASE + endpoint.url, options as RequestInit)

      if (!res.ok) {
         // @todo
         /*throw new Error(res.statusText)*/
      }

      return await res.json()
   }

   return await req()
}

export default APIRequest