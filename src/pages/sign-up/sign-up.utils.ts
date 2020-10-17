import { ErrorOption } from "react-hook-form";
import { isStoredInDB } from "../../graphql/user/user.graphql";
import User from "../../models/user.model";

export const PASSWORD_NOT_EQUAL = "PASSWORD_NOT_EQUAL";
export const NOT_AVIABLE = "NOT_AVIABLE";

export const RegExpForUsername = /^[a-zA-Z0-9]+([_ -.]?[a-zA-Z0-9])*$/;
// eslint-disable-next-line no-useless-escape
export const RegExpForEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export type SetErroFn = (
    name:
        | "confirmPassword"
        | "firstName"
        | "lastName"
        | "username"
        | "email"
        | "password",
    error: ErrorOption
) => void;


export type SignUpFormData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};


export const handleSignUp = (
    setError: SetErroFn,
    callbackFn?: (user: User) => void
) => async (data: SignUpFormData) => {
        const response = await isStoredInDB(data.email, data.username);
        if (response.email)
            setError("email", { type: NOT_AVIABLE });
        if (response.username)
            setError("username", { type: NOT_AVIABLE });
        if (response.username || response.email)
            return;
        if (data.password !== data.confirmPassword)
            return setError("confirmPassword", { type: PASSWORD_NOT_EQUAL });
        const user = {
            username: data.username,
            password: data.password,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
        } as User;
        if (callbackFn)
            return callbackFn(user);
        return;
    };