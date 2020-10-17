import React from "react";
import "./materials-and-finishes.styles.scss";

type MaterialsAndFinshesProps = {
  material: string;
};

const MaterialsAndFinishes: React.FC<MaterialsAndFinshesProps> = ({
  material,
}) => {
  return (
    <div className={`material ${material.replace(" ", "-").replace(",", "")}`}>
      {material}
    </div>
  );
};

export default MaterialsAndFinishes;
