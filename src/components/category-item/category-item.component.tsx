import React from "react";
import { useHistory } from "react-router";
import "./category-item.styles.scss";

type CategoryItemsProps = {
  name: string;
  img: string;
  path: string;
};

const CategoryItem = (props: CategoryItemsProps): JSX.Element => {
  const { name, img } = props;
  const history = useHistory();
  const openCategory = () => history.push(`/category/${name}`);
  return (
    <div
      className="category-item "
      style={{
        backgroundImage: `url("${img}")`,
      }}
      onClick={openCategory}
    >
      <div className="text">{name.toUpperCase()}</div>
    </div>
  );
};

export default CategoryItem;
