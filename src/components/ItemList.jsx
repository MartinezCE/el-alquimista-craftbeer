import Item from "./Item";
import react from "react";
const ItemList = ({ productosArray }) => {
  return (
    <>
      {productosArray.map((producto) => (
        <Item producto={producto} />
      ))}
    </>
  );
};
export default ItemList;
