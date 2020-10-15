import { GraphQLClient } from 'graphql-request';
import { Furniture } from '../../redux/furniture/furniture.types';
import getClientGraphql from '../client.graphql'
import { FIND_FURNITURE_BY_NAME, GET_ALL_FURNITURE } from './furniture.query'

const client: GraphQLClient = getClientGraphql();

type FurnitureGraphQLType = {
    getAllFurniture: Furniture[]
    findFurnitureByName: Furniture[]
}

export const getAllFurniture = async (): Promise<Furniture[]> => {
    return await (await client.request<FurnitureGraphQLType>(GET_ALL_FURNITURE)).getAllFurniture
}

export const findFurnitureByName = async (name: String): Promise<Furniture[]> => {
    return await (await client.request<FurnitureGraphQLType, { name: String }>(FIND_FURNITURE_BY_NAME, { name })).findFurnitureByName
}