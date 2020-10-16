import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { mapFromFurnitureToGridItem } from "../../components/grid-item/grid-item.utils";
import GridView from "../../components/grid-view/grid-view.component";
import SettingsView from "../../components/settings-view/settings-view.component";
import Spinner from "../../components/spinner/spinner.component";
import { findFurnitureByCategoryAction } from "../../redux/furniture/furniture.actions";
import {
  filterFurniteInStateBySetting,
  isLoading,
} from "../../redux/furniture/furniture.selector";
import "./category.styles.scss";

interface CategoryMatchParams {
  category: string;
  setting?: string;
}

const CategoryPage: React.FC = () => {
  const { category, setting } = useRouteMatch<CategoryMatchParams>().params;
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const furnitures = useSelector(filterFurniteInStateBySetting(setting));

  useEffect(() => {
    dispatch(findFurnitureByCategoryAction(category));
  }, [dispatch, category]);

  const data = furnitures.map(mapFromFurnitureToGridItem);
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <SettingsView data={furnitures} current={setting} category={category} />
      <GridView data={data} />
    </div>
  );
};

export default CategoryPage;
