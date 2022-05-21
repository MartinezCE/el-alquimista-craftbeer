import React from "react";
import useCartContext from "../store/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, clearCart, removeToCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <h4>No hay items en el carrito</h4>
        <Link to="/">Volver al catalogo</Link>
      </div>
    );
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        {cart.map((itemCart) => {
          return (
            <div key={itemCart.id} style={{ textAlign: "center" }}>
              <h2> {itemCart.title}</h2>
              <h2> {itemCart.type}</h2>
              <h2>{itemCart.cant}</h2>
              <h2>${itemCart.cant * itemCart.price}</h2>
              <button
                onClick={() => removeToCart(itemCart.id)}
                style={{ color: "red" }}
              >
                X
              </button>
            </div>
          );
        })}
        <button onClick={clearCart}>Vaciar Carrito</button>
      </div>
    );
  }
};

export default CartView;
