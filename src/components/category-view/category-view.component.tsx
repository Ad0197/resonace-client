import React from "react";
import { useSelector } from "react-redux";
import { getCategoriesFromState } from "../../redux/category/category.selector";
import { Category } from "../../redux/category/category.type";
import CategoryItem from "../category-item/category-item.component";
import "./category-view.styles.scss";

const CategoryView = () => {
  const data: Category[] = useSelector(getCategoriesFromState);
  return (
    <div className="category-view">
      {data.map((value: any) => (
        <CategoryItem key={value?.id} {...value} />
      ))}
    </div>
  );
};

export default CategoryView;
