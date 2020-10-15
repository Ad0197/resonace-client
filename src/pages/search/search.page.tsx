import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchField from "../../components/search-field/search-field.component";
import GridView from "../../components/grid-view/grid-view.component";
import { mapFromFurnitureToGridItem } from "../../components/grid-item/grid-item.utils";
import {
  getAllFurnitureFromState,
  isLoading,
} from "../../redux/furniture/furniture.selector";
import { findFurnitureByNameAction } from "../../redux/furniture/furniture.actions";

import "./search.styles.scss";

const SearchPage = () => {
  const [typing, setTyping] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>("");
  const [fnTrigger, setFnTrigger] = useState<NodeJS.Timeout>();
  const dispatch = useDispatch();

  const isTyping = () => setTyping(true);
  const isNotTyping = () => setTyping(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isTyping();
    if (fnTrigger) clearTimeout(fnTrigger);
    event.preventDefault();
    const text = event.target.value;
    setFnTrigger(
      setTimeout(() => {
        dispatch(findFurnitureByNameAction(text));
        isNotTyping();
      }, 500)
    );
    setValue(text);
  };

  const data = useSelector(getAllFurnitureFromState);
  const loading = useSelector(isLoading);
  const Message = () => <p className="text-typing">Empty search field.</p>;
  return (
    <div className="search-page">
      <SearchField {...{ value, handleChange }} />
      <div>
        {typing ? <p className="text-typing">Typing...</p> : ""}
        {loading ? <p className="text-typing">Searching for your items</p> : ""}
        {typing || loading ? (
          ""
        ) : data.length !== 0 ? (
          <GridView data={data.map(mapFromFurnitureToGridItem)} />
        ) : (
          <p className="text-typing"></p>
        )}
        {!typing && !loading && data.length === 0 ? <Message /> : ""}
      </div>
    </div>
  );
};

export default SearchPage;
