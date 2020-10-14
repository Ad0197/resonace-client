import React from "react";
import "./category-item.styles.scss";

type CategoryItemsProps = {
  name: string;
  img: string;
  path: string;
  size: string;
};

const CategoryItem = (props: CategoryItemsProps): JSX.Element => {
  const { name, img, size } = props;
  return (
    <div
      className={`category-item ${!!size ? size : ""}`}
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="text">{name.toUpperCase()}</div>
    </div>
  );
};

export default CategoryItem;
