import React from "react";

const CartWidget = (props) => {
  const textoDeBoton = props.texto;
  return (
    <div>
      <button className="button">{textoDeBoton}</button>
    </div>
  );
};

export default CartWidget;
