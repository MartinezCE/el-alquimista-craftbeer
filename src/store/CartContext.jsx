import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const useCartContex = () => useContext(CartContext);
const { Provider } = CartContext;

export const CartContexProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    if (checkIsProductInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const copiarItem = { ...cartItem };
          copiarItem.cant += cant;
          return copiarItem;
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      const newItem = { ...item, cant };
      setCart([...cart, newItem]);
    }
  };
  const removeToCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter((item) => {
      return item.id !== id;
    });
    setCart(cartFilter);
  };
  const clearCart = () => {
    setCart([]);
  };
  const checkIsProductInCart = (id) => cart.some((valor) => valor.id === id);
  const quantityInCart = () => {
    let cant = 0;
    for (let i = 0; i < cart.length; i++) {
      cant += cart[i].cant;
    }
    return cant;
  };
  /*  amountTotalForItem = () => {}; */
  const amountTotal = () => {
    let amount = 0;
    for (let i = 0; i < cart.length; i++) {
      amount += cart[i].price * cart[i].cant;
    }
    return amount;
  };

  const context = () => {
    console.log("Contexto listo");
  };

  return (
    <Provider
      value={{
        context,
        cart,
        addToCart,
        removeToCart,
        clearCart,
        quantityInCart,
        amountTotal,
      }}
    >
      {children}
    </Provider>
  );
};
export default useCartContex;
