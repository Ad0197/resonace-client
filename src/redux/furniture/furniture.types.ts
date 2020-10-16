import { Action } from "redux"
import { ThunkAction } from "redux-thunk"
import { RootType } from "../root.reducer"

export interface Furniture {
    id: string,
    name: string,
    materialsAndFinishes: string[]
    unitCost: string
    inStock: boolean
    settings: string[]
    picture: {
        url: string
    }[]
}

export interface FurnitureState {
    furnitures: Furniture[];
    loading: boolean;
}

export const SET_FURNITURE = 'SET_FURNITURE'
export const START_LOADING = 'START_LOADING'
export const END_LOADING = 'END_LOADING'

export interface SET_FURNITURE {
    type: typeof SET_FURNITURE,
    payload: Furniture[],
}

export interface START_LOADING {
    type: typeof START_LOADING
}

export interface END_LOADING {
    type: typeof END_LOADING
}

export type LoadingActionType = START_LOADING | END_LOADING
export type FurnitureActionType = SET_FURNITURE

export type AsyncFurnitureAction = ThunkAction<void, RootType, unknown, Action<Furniture[]>>