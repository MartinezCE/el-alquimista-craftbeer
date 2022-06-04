import React from "react";
import { Spinner } from "./Spinner";
import { ItemCount } from "./ItemCount";
import { useState } from "react";
import useCartContext from "../store/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const [isInCart, setisInCart] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (contador) => {
    setisInCart(true);
    addToCart(producto, contador);
  };

  if (!producto) {
    return <Spinner></Spinner>;
  }
  return (
    <>
      <div className="detalle">
        <img className="detalle-img" src={producto.img} alt="cerveza" />
        <div className="w-60 p-4  rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <h2 className="font-bold text-lg mb-2 text-center text-6xl text-orange-400">
            {producto.title}
          </h2>
          <p className="textoCard text-center font-light text-lg font-medium text-2xl">
            {producto.description}
          </p>
          <h3 className="text-center">$ {producto.price}</h3>
          <hr />
          {isInCart ? (
            <Link to="/cart">Ver tu carrito</Link>
          ) : (
            <ItemCount onAdd={onAdd} stock={producto.stock} initial={1} />
          )}
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
