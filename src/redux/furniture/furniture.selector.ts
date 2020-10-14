import { createSelector } from "reselect";
import { RootType } from "../root.reducer";
import { FurnitureState } from "./furniture.types";

const selectorFurnituresFromState = (state: RootType) => state.furniture;

export const getAllFurnitureFromState = createSelector(
    [selectorFurnituresFromState],
    (furnitureState: FurnitureState) => furnitureState.furnitures,
)