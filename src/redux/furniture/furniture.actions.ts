import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { findFurnitureByCategory, findFurnitureByName, getAllFurniture, requestMoreInfo } from "../../graphql/furniture/furniture.graphql";
import Furniture from "../../models/furniture.model";
import { RootType } from "../root.reducer";
import { AsyncFurnitureAction, END_LOADING, FurnitureActionType, LoadingActionType, SET_FURNITURE, START_LOADING } from "./furniture.types"

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

export const findFurnitureByNameAction = (name: String): AsyncFurnitureAction => async (dispatch: Dispatch) => {
    dispatch(startLoading())
    try {
        dispatch(setFurnitureAction([]))
        if (!name) return dispatch(setFurnitureAction([]))
        const furnituresFiltred = await findFurnitureByName(name);
        dispatch(setFurnitureAction(furnituresFiltred))
    } catch (error) {
        console.error(error)
    }
    dispatch(endLoading());
}

export const findFurnitureByCategoryAction = (category: String): AsyncFurnitureAction => async (dispatch: Dispatch) => {
    dispatch(startLoading())
    try {
        dispatch(setFurnitureAction([]))
        const furnituresFiltred = await findFurnitureByCategory(category);
        dispatch(setFurnitureAction(furnituresFiltred));
    } catch (error) {
        console.log(error);
    }
    dispatch(endLoading());
}

export const requestMoreInfoAction = (email: string, id: string, callback: (error: boolean) => void) => async (dispatch: Dispatch) => {
    dispatch(startLoading())
    try {
        const resp = await requestMoreInfo(email, id);
        dispatch(endLoading())
        if (resp) callback(false);
        callback(true);
    } catch (error) {
        console.log(error)
        dispatch(endLoading())
        callback(true)
    }
}