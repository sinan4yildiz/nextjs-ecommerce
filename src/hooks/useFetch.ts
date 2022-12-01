import { useEffect, useReducer, useRef } from 'react'

export interface State<T> {
   data?: T
   error?: Error
}

type Action<T> =
   | { status: 'fetching' }
   | { status: 'fetched', payload: T }
   | { status: 'error', payload: Error }

type Cache<T> = {
   [url: string]: T
}

function useFetch<T = unknown>(url: string, options?: RequestInit): State<T> {
   const cache = useRef<Cache<T>>({})

   // Set initial state
   const initialState: State<T> = {
      error: undefined,
      data: undefined
   }

   const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
      switch (action.status) {
         case 'fetching':
            return { ...initialState }
         case 'fetched':
            return { ...initialState, data: action.payload }
         case 'error':
            return { ...initialState, error: action.payload }
         default:
            return state
      }
   }

   const [state, dispatch] = useReducer(fetchReducer, initialState)

   useEffect(() => {
      if (!url)
         return

      const abortController = new AbortController()

      const req = async () => {
         dispatch({ status: 'fetching' })

         if (cache.current[url]) {
            dispatch({ status: 'fetched', payload: cache.current[url] })

            return
         }

         try {
            const res = await fetch(url, Object.assign(options ?? {}, abortController.signal))

            if (!res.ok) {
               throw new Error(res.statusText)
            }

            const data = await res.json()

            cache.current[url] = data

            dispatch({ status: 'fetched', payload: data })
         }
         catch (error) {
            dispatch({ status: 'error', payload: error as Error })
         }
      }

      void req()

      return () => {
         abortController.abort()
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [url])

   return state
}

export default useFetch