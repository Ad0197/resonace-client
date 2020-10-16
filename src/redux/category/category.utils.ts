import Furniture from "../../models/furniture.model"
import { Setting } from "./category.type"

export const filterSettingsByFurnitureUtils = (setting: Setting, furnitures: Furniture[]) => {
    for (let furniture of furnitures) {
        return furniture.settings.includes(setting.name)
    }
}
