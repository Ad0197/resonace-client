import { Dispatch } from "redux";
import { loginServer } from "../../graphql/user/user.graphql";
import { LoginResponse } from "../../graphql/user/user.query";
import { endLoading, startLoading } from "../furniture/furniture.actions";
import { ADD_USER, AsyncUserAction, UserActionType, UserState } from "./user.types";

export const AddUserState = (userState: UserState): UserActionType => ({
    type: ADD_USER,
    payload: userState
})

export const RefreshToken = (userState: UserState): UserActionType => ({
    type: ADD_USER,
    payload: userState,
})

export const login = (email: string, password: string, showModalLogin: () => void, closeModalLogin: ()=> void): AsyncUserAction => async (dispatch: Dispatch) => {
    dispatch(startLoading());
    const { accessToken, user }: LoginResponse = await loginServer(email, password);
    dispatch(AddUserState({ accessToken, user, showModalLogin, closeModalLogin }))
    dispatch(endLoading());
}