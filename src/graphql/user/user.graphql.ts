import { GraphQLClient } from "graphql-request";
import getClientGraphql from '../client.graphql'
import { LoginResponse, LOGIN_GRAPHQL } from './user.query'

type UserGraphQlType = {
    login: LoginResponse;
}

const client: GraphQLClient = getClientGraphql({ credentials: "same-origin" })

export const loginServer = async (email: string, password: string): Promise<LoginResponse> => {
    const resp = (await client.request<UserGraphQlType, { email: string, password: string }>(LOGIN_GRAPHQL, { email, password })).login
    return resp;
}