import { GraphQLClient } from 'graphql-request';
import Furniture from '../../models/furniture.model';
import getClientGraphql from '../client.graphql'
import { FIND_FURNITURE_BY_CATEGORY, FIND_FURNITURE_BY_ID, FIND_FURNITURE_BY_NAME, GET_ALL_FURNITURE } from './furniture.query'

const client: GraphQLClient = getClientGraphql();

type FurnitureGraphQLType = {
    getAllFurniture?: Furniture[];
    findFurnitureByName?: Furniture[];
    findFurnitureByCategory?: Furniture[];
    findFurnitureById?: Furniture;
}

export const getAllFurniture = async (): Promise<Furniture[]> => {
    const resp = (await client.request<FurnitureGraphQLType>(GET_ALL_FURNITURE))?.getAllFurniture
    return (resp) ? resp : [];
}

export const findFurnitureByName = async (name: String): Promise<Furniture[]> => {
    const resp = (await client.request<FurnitureGraphQLType, { name: String }>(FIND_FURNITURE_BY_NAME, { name }))?.findFurnitureByName
    return (resp) ? resp : [];
}

export const findFurnitureByCategory = async (category: String): Promise<Furniture[]> => {
    const resp = (await client.request<FurnitureGraphQLType, { category: String }>(FIND_FURNITURE_BY_CATEGORY, { category }))?.findFurnitureByCategory
    return (resp) ? resp : [];
}

export const findFurnitureById = async (id: String): Promise<Furniture | undefined> => {
    return (await client.request<FurnitureGraphQLType, { id: String }>(FIND_FURNITURE_BY_ID, { id }))?.findFurnitureById;
}