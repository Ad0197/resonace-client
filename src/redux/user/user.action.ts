import { Dispatch } from "redux";
import { loginServer, logoutServer } from "../../graphql/user/user.graphql";
import { LoginResponse } from "../../graphql/user/user.query";
import { endLoading, startLoading } from "../furniture/furniture.actions";
import { ADD_USER, AsyncUserAction, SET_USER_AND_ACCES_TOKEN, UserActionType, UserState } from "./user.types";

export const AddUserStateAction = (userState: UserState): UserActionType => ({
    type: ADD_USER,
    payload: userState
})

export const RefreshTokenAction = (userState: UserState): UserActionType => ({
    type: ADD_USER,
    payload: userState,
})

export const setUserAndAccessTokenAction = (userState: UserState): UserActionType => ({
    type: SET_USER_AND_ACCES_TOKEN,
    payload: userState
})

export const logout = (callback?: () => void) => async (dispatch: Dispatch) => {
    dispatch(startLoading());
    await logoutServer();
    dispatch(setUserAndAccessTokenAction({user: undefined, accessToken: ""}))
    dispatch(endLoading());
    if (callback) callback()
}

export const login = (email: string, password: string, callback?: () => void): AsyncUserAction => async (dispatch: Dispatch) => {
    dispatch(startLoading());
    const { accessToken, user }: LoginResponse = await loginServer(email, password);
    dispatch(setUserAndAccessTokenAction({ accessToken, user }))
    dispatch(endLoading());
    if (callback) callback()
}