import React, { useContext } from "react";
import ProductContext from "../../context/product.context";
import ProductImg from "../product-img/product-img.component";
import ProductInfo from "../product-info/product-info.component";
import "./product-view.styles.scss";

const ProductView: React.FC = () => {
  const { item } = useContext(ProductContext);
  return (
    <div className="product-view">
      <div>
        <p>
          {item?.type?.toUpperCase() || "CATEGORY"} -{" "}
          {item?.settings.map((value) => `${value?.toUpperCase()} \t`)}
        </p>
      </div>
      <div className="product-details">
        <ProductImg />
        <ProductInfo />
      </div>
    </div>
  );
};

export default ProductView;
