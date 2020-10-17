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

export const FIND_FURNITURE_BY_ID = gql`
query FindFurnitureById($id: String!){
  findFurnitureById( id: $id){
    id
    name
    inStock
    totalUnitsSold
    settings
    designer
    unitCost
    materialsAndFinishes
    unitsInStore
    description
    size
    notes
    picture{
      url
    }
    vendor{
      name
      closestShowroomAddress
      logo{
        url
      }
      catalogLink
      salesContact{
        name
        email
      }
    }
    link
    grossSales
    orders
    schematic{
      url
    }
  }
}
`

export const REQUEST_MORE_INFO = gql`
query requestMoreInfo($email: String! $idProduct: String!){
  requestMoreInfo(email:$email, idProduct: $idProduct)
}
`;

export const FIND_FURNITURE_BY_CATEGORY = gql`
query FindFurnitureByCategory($category: String!){
  findFurnitureByCategory(
    category: $category
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