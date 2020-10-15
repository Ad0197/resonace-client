import { Setting } from "../category/category.type"
import { Furniture } from "./furniture.types"

export const filterFurnitureBySettingsUtils = (furniture: Furniture, settings: Setting[]) => {
    for (let setting of settings) {
        return furniture.settings.includes(setting.name)
    }

} 