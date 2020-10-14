import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findFurnitureByNameAction } from "../../redux/furniture/furniture.actions";
import "./search-field.styles.scss";

const SearchField = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string | null>("");
  const [fnTrigger, setFnTrigger] = useState<NodeJS.Timeout>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (fnTrigger) clearTimeout(fnTrigger);
    event.preventDefault();
    const text = event.target.value;
    setFnTrigger(
      setTimeout(() => {
        dispatch(findFurnitureByNameAction(text));
      }, 2000)
    );
    setValue(text);
  };

  return (
    <div className="search-field">
      <input
        type="search"
        placeholder="Type what you need..."
        value={value ? value : ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchField;
