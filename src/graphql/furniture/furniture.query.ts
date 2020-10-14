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

export const FIND_FURNITURE_BY_NAME = gql`
  query FindFurnitureByName($name: String!){
    findFurnitureByName(
      name: $name
    ){
      id
      name
      materialsAndFinishes
      unitCost
      inStock
      settings
      picture{
       url
      }
    }
  }
`