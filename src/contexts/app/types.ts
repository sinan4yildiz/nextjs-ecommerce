import { ReactNode } from 'react'

export enum Actions {
   GET_STORE_CONTEXT = 'GET_STORE_CONTEXT',
}

export interface State {
   storeContext: object
}

export type Action = {
   type: Actions
}

export type AppContextType = State & {
   getStoreContext: () => {},
}

export type AppProviderProps = {
   children: ReactNode;
}