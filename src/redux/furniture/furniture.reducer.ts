import { SET_FURNITURE, FurnitureActionType, FurnitureState, START_LOADING, LoadingActionType, END_LOADING } from "./furniture.types";

const INITIAL_STATE: FurnitureState = {
    furnitures: [],
    loading: false,
}

export default (state: FurnitureState = INITIAL_STATE, action: FurnitureActionType | LoadingActionType) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, loading: true }
        case END_LOADING:
            return { ...state, loading: false }
        case SET_FURNITURE:
            return { ...state, furnitures: action.payload }
        default:
            return state;
    }
}