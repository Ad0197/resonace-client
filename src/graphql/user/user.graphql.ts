import { GraphQLClient } from "graphql-request";
import User from "../../models/user.model";
import getClientGraphql from '../client.graphql'
import { CREATE_USER, isStoredResponse, IS_STORED, LoginResponse, LOGIN_GRAPHQL, LOGOUT_GRAPHQL } from './user.query'

type UserGraphQlType = {
    login: LoginResponse;
    logout: boolean;
    isStored: isStoredResponse;
    createClientUser: LoginResponse;
}

const client: GraphQLClient = getClientGraphql({ credentials: "include" })

export const loginServer = async (email: string, password: string): Promise<LoginResponse> => {
    const resp = (await client.request<UserGraphQlType, { email: string, password: string }>(LOGIN_GRAPHQL, { email, password })).login
    return resp;
}

export const logoutServer = async (): Promise<boolean> => {
    return (await client.request<UserGraphQlType>(LOGOUT_GRAPHQL)).logout
}

export const isStoredInDB = async (email: string, username: string): Promise<isStoredResponse> => {
    return (await client.request<UserGraphQlType, { email: string, username: string }>(IS_STORED, { email: email, username: username })).isStored
}

export const createUser = async (user: User): Promise<LoginResponse> => {
    return (await client.request<UserGraphQlType, { user: User }>(CREATE_USER, { user: user })).createClientUser
}