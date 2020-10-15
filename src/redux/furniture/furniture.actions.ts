import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { findFurnitureByName, getAllFurniture } from "../../graphql/furniture/furniture.graphql";
import { RootType } from "../root.reducer";
import { END_LOADING, Furniture, FurnitureActionType, LoadingActionType, SET_FURNITURE, START_LOADING } from "./furniture.types"

export const getAllFurnitureAction = (): ThunkAction<void, RootType, unknown, Action<Furniture[]>> => async (dispatch: Dispatch) => {
    const furnitures = await getAllFurniture();
    dispatch(setFurnitureAction(furnitures));
}

export const setFurnitureAction = (furnitures: Furniture[]): FurnitureActionType => ({
    type: SET_FURNITURE,
    payload: furnitures
})

export const startLoading = (): LoadingActionType => ({
    type: START_LOADING
})

export const endLoading = (): LoadingActionType => ({
    type: END_LOADING
})

export const findFurnitureByNameAction = (name: String): ThunkAction<void, RootType, unknown, Action<Furniture[]>> => async (dispatch: Dispatch) => {
    if (!name) return dispatch(setFurnitureAction([]))
    dispatch(startLoading())
    const furnituresFiltred = await findFurnitureByName(name);
    dispatch(setFurnitureAction(furnituresFiltred))
    dispatch(endLoading());
}