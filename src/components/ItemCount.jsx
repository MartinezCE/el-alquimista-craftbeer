import React from "react";
import { useState } from "react";

export const ItemCount = (props) => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    if (contador < props.stock) setContador(contador + 1);
  };
  const disminuir = () => {
    if (contador > 1) setContador(contador - 1);
  };

  return (
    <div className="itemCount">
      <div>
        <button className="btnCount" onClick={disminuir}>
          -
        </button>
        {contador}
        <button className="btnCount" onClick={aumentar}>
          +
        </button>
      </div>
      <button onClick={() => props.onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};
