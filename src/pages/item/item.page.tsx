import React from "react";
import { useRouteMatch } from "react-router";
import Spinner from "../../components/spinner/spinner.component";
import { ProductProvider } from "../../context/product.context";
import { findFurnitureById } from "../../graphql/furniture/furniture.graphql";
import useFetch from "../../hooks/useFetch";
import Furniture from "../../models/furniture.model";
import ItemView from "../item-view/item-view.component";
import "./item.styles.scss";

interface ItemPageMatchParams {
  category: string;
  id: string;
}

const ItemPage = (): JSX.Element => {
  const { id } = useRouteMatch<ItemPageMatchParams>().params;
  const { data, loading } = useFetch<Furniture>(findFurnitureById(id));
  return loading ? (
    <Spinner />
  ) : (
    <div className="item-page">
      <ProductProvider>
        <ItemView item={data || undefined} />
      </ProductProvider>
    </div>
  );
};

export default ItemPage;
