import Furniture from "../../models/furniture.model"
import { Setting } from "../category/category.type"

export const filterFurnitureBySettingsUtils = (furniture: Furniture, settings: Setting[]) => {
    for (let setting of settings) {
        return furniture.settings.includes(setting.name)
    }

} 