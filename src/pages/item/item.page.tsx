import React from "react";
import { useRouteMatch } from "react-router";
import "./item.styles.scss";

interface ItemPageMatchParams {
  category: string;
  id: string;
}

const ItemPage = (): JSX.Element => {
  const match = useRouteMatch<ItemPageMatchParams>();
  const route = {
    category: match.params.category,
    id: match.params.id,
  };
  return (
    <div>
      <p>{route.category}</p>
      <p>{route.id}</p>
    </div>
  );
};

export default ItemPage;
