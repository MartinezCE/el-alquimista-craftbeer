import React from "react";
import beer_data from "../API/beer_data.json";

const ItemListContainer = (props) => {
  console.log(BEER_DATA);
  const saludo = props.saludo;
  return (
    <div>
      <h1>{saludo}</h1>
    </div>
  );
};

export default ItemListContainer;
