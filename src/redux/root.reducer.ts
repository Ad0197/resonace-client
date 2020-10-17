import { combineReducers } from 'redux'
import CategoryReducer from './category/category.reducer'
import FurnitureReducer from './furniture/furniture.reducer';
import UserReducer from './user/user.reducer';
import { CategoryState } from './category/category.type'
import { FurnitureState } from './furniture/furniture.types';
import { UserState } from './user/user.types';

export default combineReducers(
    {
        category: CategoryReducer,
        furniture: FurnitureReducer,
        user: UserReducer,
    }
)


export interface RootType {
    category: CategoryState,
    furniture: FurnitureState,
    user: UserState,
}