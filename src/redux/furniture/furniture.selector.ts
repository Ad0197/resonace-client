import { createSelector } from "reselect";
import Furniture from "../../models/furniture.model";
import { RootType } from "../root.reducer";
import { FurnitureState } from "./furniture.types";

const selectorFurnituresFromState = (state: RootType) => state.furniture;

export const getAllFurnitureFromState = createSelector(
    [selectorFurnituresFromState],
    (furnitureState: FurnitureState) => furnitureState.furnitures,
)

export const filterFurniteInStateBySetting = (setting?: string) => createSelector(
    [getAllFurnitureFromState],
    (furnituresInState: Furniture[]): Furniture[] => furnituresInState
        .filter(furniture =>
            setting ? furniture.settings.includes(setting) : true)
)

export const isLoading = createSelector(
    [selectorFurnituresFromState],
    (furnitureState: FurnitureState) => furnitureState.loading,
)