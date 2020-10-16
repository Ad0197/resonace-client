import React from "react";
import CategoryView from "../../components/category-view/category-view.component";
import "./home.styles.scss";

const HomePage = () => {
  return (
    <div>
      <div className="divider">Category</div>
      <CategoryView />
    </div>
  );
};

export default HomePage;
