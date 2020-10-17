import React, { createContext, useState } from "react";
import useModal from "../hooks/useModal";
import Furniture from "../models/furniture.model";
import Vendor from "../models/vendor.model";

export type ProductContextType = {
  item?: Furniture;
  amount: number;
  request?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setItem: Function;
  setVendor: Function;
  vendor?: Vendor;
  isRequestCorrectly: () => void;
  isRequestNotCorrectly: () => void;
  openModal: () => void;
  closeModa: () => void;
  Modal?: React.FC;
};

const INITIAL_STATE: ProductContextType = {
  item: undefined,
  amount: 1,
  vendor: undefined,
  handleChange: () => {},
  setItem: () => {},
  setVendor: () => {},
  request: false,
  isRequestCorrectly: () => {},
  isRequestNotCorrectly: () => {},
  openModal: () => {},
  closeModa: () => {},
  Modal: undefined,
};

const ProductContext = createContext<ProductContextType>(INITIAL_STATE);

export const ProductProvider: React.FC = ({ children }) => {
  const [item, setItem] = useState<Furniture | undefined>(undefined);
  const [vendor, setVendor] = useState<Vendor | undefined>(undefined);
  const [amount, setAmount] = useState<number>(1);
  const [request, setRequest] = useState<boolean>(false);
  const isRequestCorrectly = () => setRequest(true);
  const isRequestNotCorrectly = () => setRequest(false);
  const { Modal, activeModal, disableModal } = useModal();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setAmount(parseInt(value ? value : "0"));
  };

  return (
    <ProductContext.Provider
      value={{
        item,
        vendor,
        setVendor,
        amount,
        handleChange,
        setItem,
        isRequestCorrectly,
        isRequestNotCorrectly,
        request,
        Modal,
        closeModa: disableModal,
        openModal: activeModal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
