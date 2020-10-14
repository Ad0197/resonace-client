export interface Category {
    id: number,
    name: string,
    path: string,
    img: string,
}

export interface CategoryState {
    categories: Category[]
}

export const ADD_ALL = 'ADD_ALL';

export interface addAllAction {
    type: typeof ADD_ALL,
    payload: Category[],
}

export type CategoryActionsTypes = addAllAction