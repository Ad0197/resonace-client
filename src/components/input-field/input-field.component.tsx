import React from "react";
import "./input-field.styles.scss";

type InputFieldProps = {
  value: string;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disable: boolean;
  className?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  value,
  placeholder,
  handleChange,
  disable,
  className,
}) => (
  <div className={`input-field ${disable ? "disable" : ""} ${className}`}>
    <input
      disabled={disable}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

export default InputField;
