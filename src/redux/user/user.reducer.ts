import { ADD_USER, REFRESH_TOKEN, SET_USER_AND_ACCES_TOKEN, UserActionType, UserState } from "./user.types";

const INITIAL_STATE: UserState = {
    user: undefined,
    accessToken: "",
    showModalLogin: () => { },
    closeModalLogin: () => { }
}

export default (state: UserState = INITIAL_STATE, action: UserActionType): UserState => {
    switch (action.type) {
        case ADD_USER:
            return action.payload

        case SET_USER_AND_ACCES_TOKEN:
            return { ...state, user: action.payload?.user, accessToken: action.payload?.accessToken }

        case REFRESH_TOKEN:
            return { ...state, accessToken: action.payload.accessToken, }
        default:
            return state
    }
}