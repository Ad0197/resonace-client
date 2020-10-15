import React from "react";
import "./search-field.styles.scss";

type SearchFieldProps = {
  value: string | null;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchField = ({ value, handleChange }: SearchFieldProps) => {
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
