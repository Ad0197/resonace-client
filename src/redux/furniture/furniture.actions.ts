import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { findFurnitureByName, getAllFurniture } from "../../graphql/furniture/furniture.graphql";
import { RootType } from "../root.reducer";
import { Furniture, SET_FURNITURE } from "./furniture.types"

export const getAllFurnitureAction = (): ThunkAction<void, RootType, unknown, Action<Furniture[]>> => async (dispatch: Dispatch) => {
    const furnitures = await getAllFurniture();
    dispatch(setFurnitureAction(furnitures));
}

export const setFurnitureAction = (furnitures: Furniture[]) => ({
    type: SET_FURNITURE,
    payload: furnitures
})

export const findFurnitureByNameAction = (name: String): ThunkAction<void, RootType, unknown, Action<Furniture[]>> => async (dispatch: Dispatch) => {
    if (!name) return dispatch(setFurnitureAction([]))
    const furnituresFiltred = await findFurnitureByName(name);
    dispatch(setFurnitureAction(furnituresFiltred))
}