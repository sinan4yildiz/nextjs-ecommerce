import {ReactNode} from 'react'

export enum Actions {
    TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR',
}

export interface State {
    displaySidebar: boolean
}

export type Action = {
    type: Actions
}

export type UIContextType = State & {
    toggleSidebar: () => any
}

export type UIProviderProps = {
    children: ReactNode;
}