import React from "react";
import beer_data from "../API/beer_data";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

function productoData() {
  return new Promise((resolve, reject) => {
    resolve(beer_data[4]);
  }, 500);
}

const ItemDetailContainer = ({ titulo }) => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    productoData().then((data) => {
      setProducto(data);
    });
  }, []);

  return (
    <>
      <h1>{titulo}</h1>
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailContainer;
