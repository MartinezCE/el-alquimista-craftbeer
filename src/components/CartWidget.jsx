import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const CartWidget = () => {
  return (
    <div className="">
      <FontAwesomeIcon icon={faBeer} size="2x" color="white" />
    </div>
  );
};

export default CartWidget;
