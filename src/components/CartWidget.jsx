import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import useCartContext from "../store/CartContext";
import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { quantityInCart, contador } = useCartContext();
  return (
    <div className=" carrito">
      <Link to="/cart">
        {quantityInCart()}
        <FontAwesomeIcon icon={faBeer} size="2x" color="white" />
      </Link>
    </div>
  );
};

export default CartWidget;
