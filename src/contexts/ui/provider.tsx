import { uiReducer } from '@contexts/ui/reducers'
import { Actions } from '@contexts/ui/types'
import type { State, UIProviderProps } from '@contexts/ui/types'
import React, { createContext, useCallback, useMemo, useReducer } from 'react'

const initialState: State = {
   displaySidebar: false
}

const UIContext = createContext<State | any>(initialState)

const UIProvider = (props: UIProviderProps) => {
   const [state, dispatch] = useReducer(uiReducer, initialState)

   const toggleSidebar = useCallback(
      () => dispatch({ type: Actions.TOGGLE_SIDEBAR }),
      [dispatch, state.displaySidebar]
   )

   const value = useMemo(() => ({
      ...state,
      toggleSidebar
   }), [state])

   return <UIContext.Provider value={value} {...props} />
}

UIContext.displayName = 'UIContext'

export {
   UIContext, UIProvider
}