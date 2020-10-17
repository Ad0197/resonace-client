import { gql } from "graphql-request"
import User from "../../models/user.model"

export interface LoginResponse {
    accessToken: string,
    user: User;
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