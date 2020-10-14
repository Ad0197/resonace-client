import React from "react";
import "./slider-image.styles.scss";

const SliderImage = () => {
  return (
    <div className="slider-image">
      <img
        width="100%"
        src="https://berkowitz.com.au/wp-content/uploads/2019/01/02_Charles_Sofa_Updated.jpg"
        style={{
          objectFit: "cover",
          objectPosition: "top",
          opacity: 0.6
        }}
        alt="Sofa Img"
      />
    </div>
  );
};

export default SliderImage;
