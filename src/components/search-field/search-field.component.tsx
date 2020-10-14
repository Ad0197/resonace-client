import React, { useState } from "react";
import "./search-field.styles.scss";

const SearchField = () => {
  const [value, setValue] = useState<string | null>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const text = event.target.value;
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
