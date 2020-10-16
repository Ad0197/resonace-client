import Furniture from "../../models/furniture.model";
import GridItem from "./grid-item.component";

export const mapFromFurnitureToGridItem = ({ id, name, inStock, materialsAndFinishes, picture, unitCost }: Furniture): GridItem => ({
    id,
    materialsAndFinishes,
    inStock,
    name,
    unitCost,
    picture: picture[0].url,
})