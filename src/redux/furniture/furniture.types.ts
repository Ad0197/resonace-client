export interface Furniture {
    id: string,
    name: string,
    materialsAndFinishes: string[]
    unitCost: string
    inStock: boolean
    settings: string[]
    picture: {
        url: string
    }
}

export interface FurnitureState {
    furnitures: Furniture[],
}

export const SET_FURNITURE = 'SET_FURNITURE'


export interface SET_FURNITURE {
    type: typeof SET_FURNITURE,
    payload: Furniture[],
}

export type FurnitureActionType = SET_FURNITURE