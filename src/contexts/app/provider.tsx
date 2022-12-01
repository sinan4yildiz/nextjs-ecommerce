import { appReducer } from '@contexts/app/reducers'
import type { AppProviderProps, State } from '@contexts/app/types'
import { Actions } from '@contexts/app/types'
import React, { createContext, useCallback, useMemo, useReducer } from 'react'

const initialState: State = {
   storeContext: {}
}

const AppContext = createContext<State | any>(initialState)

const AppProvider = (props: AppProviderProps) => {
   const [state, dispatch] = useReducer(appReducer, initialState)

   const getStoreContext = useCallback(
      () => dispatch({ type: Actions.GET_STORE_CONTEXT }),
      [dispatch]
   )

   const value = useMemo(() => ({
      ...state,
      getStoreContext
   }), [state])

   return <AppContext.Provider value={value} {...props} />
}

AppContext.displayName = 'AppContext'

export {
   AppContext, AppProvider
}