import { Furniture } from "../../redux/furniture/furniture.types";
import GridItem from "./grid-item.component";

export const mapFromFurnitureToGridItem = ({ id, name, inStock, materialsAndFinishes, picture, unitCost }: Furniture): GridItem => ({
    id,
    materialsAndFinishes,
    inStock,
    name,
    unitCost,
    picture: picture[0].url,
})