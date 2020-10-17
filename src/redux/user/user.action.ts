import { Dispatch } from "redux";
import { loginServer } from "../../graphql/user/user.graphql";
import { LoginResponse } from "../../graphql/user/user.query";
import { endLoading, startLoading } from "../furniture/furniture.actions";
import { ADD_USER, AsyncUserAction, UserActionType, UserState } from "./user.types";

export const AddUser = (userState: UserState): UserActionType => ({
    type: ADD_USER,
    payload: userState
})

export const RefreshToken = (userState: UserState): UserActionType => ({
    type: ADD_USER,
    payload: userState,
})

export const login = (email: string, password: string): AsyncUserAction => async (dispatch: Dispatch) => {
    dispatch(startLoading());
    const { accessToken, user }: LoginResponse = await loginServer(email, password);
    dispatch(AddUser({ accessToken, user }))
    dispatch(endLoading());
}