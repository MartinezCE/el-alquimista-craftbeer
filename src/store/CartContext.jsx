import { createContext } from "react";
import { useContext } from "react";
import Item from "../components/Item";

const CartContext = createContext();
const useCartContex = () => useContext(CartContext);
const { Provider } = CartContext;

export const CartContexProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (Item, cant) => {
    const newItem = { ...Item, cant };
    setCart([...cart, newItem]);
  };
  const context = () => {
    console.log("Contexto listo");
  };
  return <Provider value={{ context }}>{children}</Provider>;
};
export default useCartContex;
