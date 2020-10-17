import React, { createContext, useState } from "react";
import Furniture from "../models/furniture.model";
import Vendor from "../models/vendor.model";

export type ProductContextType = {
  item?: Furniture;
  amount: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setItem: Function;
  setVendor: Function;
  vendor?: Vendor;
};

const INITIAL_STATE = {
  item: undefined,
  amount: 1,
  vendor: undefined,
  handleChange: () => {},
  setItem: () => {},
  setVendor: () => {},
};

const ProductContext = createContext<ProductContextType>(INITIAL_STATE);

export const ProductProvider: React.FC = ({ children }) => {
  const [item, setItem] = useState<Furniture | undefined>(undefined);
  const [vendor, setVendor] = useState<Vendor | undefined>(undefined);
  const [amount, setAmount] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setAmount(parseInt(value ? value : "0"));
  };

  return (
    <ProductContext.Provider
      value={{ item, vendor, setVendor, amount, handleChange, setItem }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
