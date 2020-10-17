import { ADD_USER, REFRESH_TOKEN, UserActionType, UserState } from "./user.types";

const INITIAL_STATE: UserState = {
    user: undefined,
    accessToken: "",
}

export default (state: UserState = INITIAL_STATE, action: UserActionType) => {
    switch (action.type) {
        case ADD_USER:
            return { ...action.payload }

        case REFRESH_TOKEN:
            return { accessToken: action.payload.accessToken, ...state }
        default:
            return state
    }
}