import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import User from "../../models/user.model";
import { RootType } from "../root.reducer";

export type UserState = {
    user?: User;
    accessToken?: string;
    showModalLogin?: () => void;
    closeModalLogin?: () => void;
}

export const ADD_USER = "ADD_USER";
export const REFRESH_TOKEN = "REFRESH_TOKEN";
export const SET_USER_AND_ACCES_TOKEN = "SET_USER_AND_ACCES_TOKEN";

export type AddUserActionType = {
    type: typeof ADD_USER
    payload: UserState
}

export type RefreshTokenActionType = {
    type: typeof REFRESH_TOKEN
    payload: UserState
}

export type SetUserAndAccesTokenActionType = {
    type: typeof SET_USER_AND_ACCES_TOKEN
    payload: UserState
}

export type AsyncUserAction = ThunkAction<void, RootType, unknown, Action<UserState>>

export type UserActionType = AddUserActionType | RefreshTokenActionType | SetUserAndAccesTokenActionType
