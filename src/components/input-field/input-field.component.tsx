import React from "react";
import "./input-field.styles.scss";

type InputFieldProps = {
  value: string;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disable?: boolean;
  className?: string;
  type?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  value,
  placeholder,
  handleChange,
  disable,
  className,
  type = "text",
}) => (
  <div className={`input-field ${disable ? "disable" : ""} ${className}`}>
    <input
      disabled={disable}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

export function handleChangeGen(fn: Function) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;
    fn(value);
  };
}
export default InputField;
