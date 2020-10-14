import { Category, ADD_ALL, CategoryActionsTypes } from './category.type';

export const addAll = (categories: Category[]): CategoryActionsTypes => ({
    type: ADD_ALL,
    payload: categories,
})