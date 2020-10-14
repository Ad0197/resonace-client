import { SET_FURNITURE, FurnitureActionType, FurnitureState } from "./furniture.types";

const INITIAL_STATE: FurnitureState = {
    furnitures: []
}

export default (state: FurnitureState = INITIAL_STATE, action: FurnitureActionType) => {
    switch (action.type) {
        case SET_FURNITURE:
            return { ...state, furnitures: action.payload }
        default:
            return state;
    }
}