import { GraphQLClient } from 'graphql-request';
import { Furniture } from '../../redux/furniture/furniture.types';
import getClientGraphql from '../client.graphql'
import { FIND_FURNITURE_BY_NAME, GET_ALL_FURNITURE } from './furniture.query'

const client: GraphQLClient = getClientGraphql();


export const getAllFurniture = async (): Promise<Furniture[]> => {
    return await client.request<Furniture[]>(GET_ALL_FURNITURE)
}

export const findFurnitureByName = async (name: String): Promise<Furniture[]> => {
    return await client.request<Furniture[]>(FIND_FURNITURE_BY_NAME, { name })
}