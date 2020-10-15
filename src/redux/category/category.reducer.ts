import DATA_CATEGORIES from './category.data';
import DATA_SETTINGS from './settings.data';
import { CategoryActionsTypes, CategoryState } from './category.type';

const INITIAL_STATE = {
    categories: DATA_CATEGORIES,
    settings: DATA_SETTINGS,
};

const CategoryReducer = (state: CategoryState = INITIAL_STATE, action: CategoryActionsTypes) => {
    switch (action.type) {
        default:
            return state;
    }

}

export default CategoryReducer;
