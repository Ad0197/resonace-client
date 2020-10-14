import { createSelector } from 'reselect';
import { RootType } from '../root.reducer';

const selectCategoryFromState = (state: RootType) => state.category;

export const getCategoriesFromState = createSelector(
    [selectCategoryFromState],
    (stateCategory) => stateCategory.categories
)
