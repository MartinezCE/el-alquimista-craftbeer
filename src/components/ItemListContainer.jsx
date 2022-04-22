import React from "react";

export const ItemListContainer = (props) => {
  const saludo = props.saludo;
  return (
    <div>
      <h1>{saludo}</h1>
    </div>
  );
};

export default ItemListContainer;
