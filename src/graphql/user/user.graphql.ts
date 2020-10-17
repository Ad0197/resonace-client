import { GraphQLClient } from "graphql-request";
import getClientGraphql from '../client.graphql'
import { LoginResponse, LOGIN_GRAPHQL, LOGOUT_GRAPHQL } from './user.query'

type UserGraphQlType = {
    login: LoginResponse;
    logout: boolean;
}


export const loginServer = async (email: string, password: string): Promise<LoginResponse> => {
    const client: GraphQLClient = getClientGraphql({ credentials: "include" })
    const resp = (await client.request<UserGraphQlType, { email: string, password: string }>(LOGIN_GRAPHQL, { email, password })).login
    return resp;
}

export const logoutServer = async (): Promise<boolean> => {
    const client: GraphQLClient = getClientGraphql()
    return (await client.request<UserGraphQlType>(LOGOUT_GRAPHQL)).logout
}