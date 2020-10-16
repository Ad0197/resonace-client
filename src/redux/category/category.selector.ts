import { createSelector } from 'reselect';
import  Furniture  from '../../models/furniture.model';
import { RootType } from '../root.reducer';
import { Setting } from './category.type';
import { filterSettingsByFurnitureUtils } from './category.utils'
const selectCategoryFromState = (state: RootType) => state.category;

export const getCategoriesFromState = createSelector(
    [selectCategoryFromState],
    (stateCategory) => stateCategory.categories
)

const getSettingsFromState = createSelector(
    [selectCategoryFromState],
    (stateCategory) => stateCategory.settings
)

export const filterSettingsFromFurniture = (furnitures: Furniture[]) => createSelector(
    [getSettingsFromState],
    (stateSettings) => stateSettings.filter((value: Setting) => filterSettingsByFurnitureUtils(value, furnitures))
)