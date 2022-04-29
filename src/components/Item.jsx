import react from "react";

const Item = ({ producto }) => {
  return (
    <>
      <h3>{producto.title}</h3>
      <small>$ {producto.price}</small>
      <hr />
    </>
  );
};
export default Item;
