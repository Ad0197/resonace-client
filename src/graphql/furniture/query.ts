import { gql } from 'graphql-request'

export const GET_ALL_FURNITURE = gql`
query getAllFurniture{
    getAllFurniture{
        id
        name
        materialsAndFinishes
        unitCost
        inStock
        picture{
          url
        }
    }
}
`;