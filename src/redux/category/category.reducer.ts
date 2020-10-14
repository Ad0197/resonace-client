import DATA from './category.data';
import { CategoryActionsTypes, CategoryState } from './category.type';

const INITIAL_STATE = {
    categories: DATA,
};

const CategoryReducer = (state: CategoryState = INITIAL_STATE, action: CategoryActionsTypes) => {
    switch (action.type) {
        default:
            return state;
    }

}

export default CategoryReducer;
