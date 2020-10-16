import React from "react";
import { useHistory } from "react-router";
import "./grid-item.styles.scss";

type GridItem = {
  id: string;
  name: string;
  unitCost: string;
  inStock: boolean;
  picture: string;
  materialsAndFinishes: string[];
};

type GridItemProps = {
  data: GridItem;
  alter: boolean;
};

const GridItem = ({
  alter,
  data: { id, name, picture, unitCost },
}: GridItemProps): JSX.Element => {
  const history = useHistory();
  const changeRoute = () => history.push(`/furniture/${id}`);
  return (
    <div onClick={changeRoute} className={`grid-item ${alter ? "alter" : ""}`}>
      <div className="item">
        <img className="img-item" src={picture} alt="Item On Sell" />
        <div className="info-item">
          <p className="name-item">{name}</p>
          <p className="unit-cost-item">$ {unitCost}</p>
        </div>
        <div className="grid-item-hover">
          <div className="button-hover">Check more details.</div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
