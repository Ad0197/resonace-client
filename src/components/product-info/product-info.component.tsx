import React, { useContext } from "react";
import ProductContext from "../../context/product.context";
import InputField from "../input-field/input-field.component";
import MaterialsAndFinishes from "../materials-and-finishes/materials-and-finishes.component";
import "./product-info.styles.scss";

const ProductInfo: React.FC = () => {
  const { item, amount, handleChange } = useContext(ProductContext);
  return (
    <div className="product-info">
      <div className="product-title">
        <h2>{item?.name}</h2>
        <p>by {item?.vendor?.name}</p>
      </div>
      <div className="product-stock">
        <p className={`${item?.inStock ? "in-stock" : "out-stock"} `}>
          {item?.inStock ? "IN STOCK" : "OUT STOCK"}
        </p>{" "}
      </div>
      <p className="title">MATERIALS AND FINISHES</p>
      <div className="row">
        {item?.materialsAndFinishes.map((matireal, index) => (
          <MaterialsAndFinishes key={index} material={matireal} />
        ))}
      </div>
      <div className="product-row">
        <div className="column">
          <p className="title">SETTINGS</p>
          <div className="column">
            {item?.settings.map((setting, index) => (
              <p className="product-setting" key={index}>
                {setting?.toUpperCase()}
              </p>
            ))}
          </div>
        </div>
        <div className="column">
          <p className="title">SIZE(WxLxH)</p>
          <p className="product-setting">{item?.size}</p>
        </div>
      </div>
      <div className="row">
        <h1>$ {item?.unitCost}</h1>
        <div className="row">
          <InputField
            disable={item?.inStock ? false : true}
            value={amount.toString()}
            handleChange={handleChange}
          />
          <p className="title">AMT</p>
        </div>
      </div>
      <div className="product-row">
        <div className=" btn order-now">ORDER NOW</div>
        <div className=" btn add-to-cart">ADD TO CART</div>
      </div>
    </div>
  );
};

export default ProductInfo;
