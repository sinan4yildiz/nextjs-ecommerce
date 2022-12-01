import { Action, Actions, State } from '@contexts/app/types'

export const appReducer = (state: State, action: Action): State => {
   switch (action.type) {

      case Actions.GET_STORE_CONTEXT: {
         return {
            ...state,
            storeContext: { context: 'store' }
         }
      }

      default:
         return state
   }
}