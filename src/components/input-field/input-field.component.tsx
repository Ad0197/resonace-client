import React, { Ref } from "react";
import "./input-field.styles.scss";

type InputFieldProps = {
  fowardRef?: Ref<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disable?: boolean;
  className?: string;
  type?: string;
  name?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  value,
  placeholder,
  handleChange,
  disable,
  className,
  type = "text",
  fowardRef,
  name,
}) => (
  <div className={`input-field ${disable ? "disable" : ""} ${className}`}>
    <input
      name={name}
      ref={fowardRef}
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
