import { gql } from "graphql-request"
import User from "../../models/user.model"

export interface LoginResponse {
  accessToken: string,
  user: User;
}

export interface isStoredResponse {
  email: boolean,
  username: boolean,
}

export interface RefreshTokenResponse {
  accessTokne: string,
  ok: boolean;
}

export const LOGIN_GRAPHQL = gql`
query loginToServer($email: String! $password: String!){
	login(
    email: $email
    password: $password
  ){
    accessToken
    user{
      username
      email
      firstName
      lastName
      id
    }
  }
}
`

export const LOGOUT_GRAPHQL = gql`
query Logout{
  logout
}
`

export const IS_STORED = gql`
query IsStorea($email: String! $username: String!){
  isStored(email: $email username: $username ){
    email
    username
  }
}
`

export const CREATE_USER = gql`
mutation CreateUserClient($user: UserInput!){
createClientUser(user:$user){
  accessToken
  user{
    username
    email
    lastName
    firstName
    id
  }
}
}
`