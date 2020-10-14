import React from "react";
import CategoryView from "../../components/category-view/category-view.component";
import SliderImage from "../../components/slider-image/slider-image.component";
import "./home.styles.scss";

const HomePage = () => {
  return (
    <div>
      <SliderImage />
      <div className="divider">Category</div>
      <CategoryView />
    </div>
  );
};

export default HomePage;
