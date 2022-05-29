//import react from "react";
import porter from "../img/porter.jpeg";
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
    <h1> Cargando . . .</h1>;
  }
  return (
    <>
      <div className="detalle">
        <img className="detalle-img" src={porter} alt="Porter" />
        <div className="w-60 p-4  rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <h2 className="font-bold text-lg mb-2 text-center text-6xl text-orange-400">
            {producto.title}
          </h2>
          <p className="textoCard text-center font-light text-lg font-medium text-2xl">
            Descripcion de la cerveza, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
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
