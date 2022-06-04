import Item from "./Item";
import React from "react";
const ItemList = ({ productos }) => {
  console.log("item list", productos);
  return (
    <>
      {productos.map((producto) => (
        <Item className="textoCard" key={producto.id} producto={producto} />
      ))}
    </>
  );
};
export default ItemList;
