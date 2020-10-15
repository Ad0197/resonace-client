import React from "react";
import GridItem from "../grid-item/grid-item.component";
import "./grid-view.styles.scss";

type GridViewProps = {
  data: GridItem[];
};

const GridView = ({ data }: GridViewProps): JSX.Element => {
  return (
    <div className="grid-view">
      {data.map((gridItem, index) => (
        <GridItem key={gridItem.id} {...{data:gridItem, alter: !!(index %= 2) }} />
      ))}
    </div>
  );
};

export default GridView;
