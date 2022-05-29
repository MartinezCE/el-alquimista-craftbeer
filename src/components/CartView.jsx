import React from "react";
import useCartContext from "../store/CartContext";
import { Link } from "react-router-dom";
import { createBuyOrder } from "../API/Firebase/index";

const CartView = () => {
  const { cart, clearCart, removeToCart, amountTotal } = useCartContext();

  function handlerBuy() {
    const itemsToBuy = cart.map((item) => ({
      title: item.title,
      cant: item.cant,
      price: item.price,
      id: item.id,
    }));

    console.log("ITEM FILTRADOS", itemsToBuy);
    const buyOrder = {
      buyer: {
        name: "Cristian",
        phone: "1111111111",
        email: "eze.cmartinez@gmail.com",
      },
      items: [...cart],
      total: amountTotal(),
    };
    createBuyOrder(buyOrder);
    clearCart();
  }
  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="text-3xl">No hay items en el carrito</h1>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <Link to="/" className="text-3xl">
            Volver al catalogo
          </Link>
        </button>
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
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => removeToCart(itemCart.id)}
              >
                X
              </button>
            </div>
          );
        })}
        <div className="opcionesCompra">
          <button
            type="button"
            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
            onClick={() => clearCart()}
          >
            Vaciar Carrito
          </button>
          <button
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => handlerBuy()}
          >
            Comprar
          </button>
        </div>
      </div>
    );
  }
};

export default CartView;
