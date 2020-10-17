import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import User from "../../models/user.model";
import { RootType } from "../root.reducer";

export type UserState = {
    user?: User;
    accessToken?: string
}

export const ADD_USER = "ADD_USER";
export const REFRESH_TOKEN = "REFRESH_TOKEN";

export type AddUserAction = {
    type: typeof ADD_USER
    payload: UserState
}

export type RefreshTokenAction = {
    type: typeof REFRESH_TOKEN
    payload: UserState
}

export type AsyncUserAction = ThunkAction<void, RootType, unknown, Action<UserState>>

export type UserActionType = AddUserAction | RefreshTokenAction
