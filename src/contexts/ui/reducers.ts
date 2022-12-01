import type { Action, State } from '@contexts/ui/types'
import { Actions } from '@contexts/ui/types'

export const uiReducer = (state: State, action: Action): State => {
   switch (action.type) {

      case Actions.TOGGLE_SIDEBAR: {
         return {
            ...state,
            displaySidebar: !!state.displaySidebar
         }
      }

      default:
         return state
   }
}