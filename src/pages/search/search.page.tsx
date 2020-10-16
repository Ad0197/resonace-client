import React from "react";
import { useSelector } from "react-redux";

import SearchField from "../../components/search-field/search-field.component";
import GridView from "../../components/grid-view/grid-view.component";
import { mapFromFurnitureToGridItem } from "../../components/grid-item/grid-item.utils";
import { getAllFurnitureFromState } from "../../redux/furniture/furniture.selector";
import { findFurnitureByNameAction } from "../../redux/furniture/furniture.actions";

import "./search.styles.scss";
import Spinner from "../../components/spinner/spinner.component";
import useSearch from "../../hooks/useSearch";

const SearchPage = () => {
  const { value, typing, loading, handleChange } = useSearch(
    findFurnitureByNameAction
  );

  const data = useSelector(getAllFurnitureFromState);
  const Message = () => <p className="text-typing">Empty search field.</p>;
  let Component;
  if (typing && !loading)
    Component = () => <p className="text-typing">Typing...</p>;
  else if (value === "") Component = Message;
  else if (loading && !typing) Component = Spinner;
  else if (!loading && !typing && data.length === 0) Component = Message;
  else
    Component = () => <GridView data={data.map(mapFromFurnitureToGridItem)} />;
  return (
    <div className="search-page">
      <SearchField {...{ value, handleChange }} />
      <div className="content">
        <Component />
      </div>
    </div>
  );
};

export default SearchPage;
