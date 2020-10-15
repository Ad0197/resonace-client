import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { mapFromFurnitureToGridItem } from "../../components/grid-item/grid-item.utils";
import GridView from "../../components/grid-view/grid-view.component";
import SettingsView from "../../components/settings-view/settings-view.component";
import { findFurnitureByCategoryAction } from "../../redux/furniture/furniture.actions";
import {
  getAllFurnitureFromState,
  isLoading,
} from "../../redux/furniture/furniture.selector";
import { Furniture } from "../../redux/furniture/furniture.types";
import "./category.styles.scss";

interface CategoryMatchParams {
  category: string;
  setting?: string;
}

const CategoryPage: React.FC = () => {
  const match = useRouteMatch<CategoryMatchParams>();
  const category = match.params.category;
  const dispatch = useDispatch();
  const setting = match.params.setting;

  useEffect(() => {
    dispatch(findFurnitureByCategoryAction(category));
  }, [category, dispatch]);

  const loading: boolean = useSelector(isLoading);
  const furnitures: Furniture[] = useSelector(getAllFurnitureFromState).filter(
    filterFurnitureBySetting(setting)
  );

  const data = furnitures.map(mapFromFurnitureToGridItem);
  return (
    <div>
      <SettingsView data={furnitures} current={setting} category={category} />
      {!loading ? <GridView data={data} /> : ""}
    </div>
  );
};



function filterFurnitureBySetting(setting?: string) {
  return (furniture: Furniture) =>
    setting ? furniture.settings.includes(setting) : true;
}

export default CategoryPage;
