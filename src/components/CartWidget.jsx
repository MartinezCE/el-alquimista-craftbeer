import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import useCartContext from "../store/CartContext";
import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { quantityInCart } = useCartContext();

  return (
    <div>
      <Link to="/cart">
        <div className=" carrito">
          {quantityInCart() > 0 && (
            <div className=" countCarrito">
              <div className="count">{quantityInCart()}</div>
            </div>
          )}
          {quantityInCart() < 1 ? (
            <FontAwesomeIcon icon={faBeer} size="2x" color="white" />
          ) : (
            <FontAwesomeIcon icon={faBeer} size="2x" color="#eab841" />
          )}
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
