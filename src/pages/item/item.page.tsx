import React from "react";
import { useRouteMatch } from "react-router";
import Spinner from "../../components/spinner/spinner.component";
import { findFurnitureById } from "../../graphql/furniture/furniture.graphql";
import useFetch from "../../hooks/useFetch";
import "./item.styles.scss";

interface ItemPageMatchParams {
  category: string;
  id: string;
}

const ItemPage = (): JSX.Element => {
  const { id, category } = useRouteMatch<ItemPageMatchParams>().params;
  const { data, error, loading } = useFetch(findFurnitureById(id));
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <p>{category}</p>
      <p>{id}</p>
    </div>
  );
};

export default ItemPage;
