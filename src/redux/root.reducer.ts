import { combineReducers } from 'redux'
import CategoryReducer from './category/category.reducer'
import { CategoryState } from './category/category.type'

export default combineReducers(
    {
        category: CategoryReducer,
    }
)


export interface RootType {
    category: CategoryState,
}