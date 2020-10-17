import React, { useContext, useState } from "react";
import ProductContext from "../../context/product.context";
import "./product-img.styles.scss";

const ProductImg: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { item } = useContext(ProductContext);
  const images = item?.picture || [];
  return (
    <div className="product-img">
      <div className="img-current">
        <img src={images[current]?.url} alt="current-item" />
      </div>
      <div className="img-show">
        {images.map((image, index) => (
          <img
            onClick={() => {
              setCurrent(index);
            }}
            key={index}
            className="img-option"
            src={image.url}
            alt="item"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImg;
