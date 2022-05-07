import React from "react";
import beer_data from "../API/beer_data";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function productoData(idRequested) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productoRequested = beer_data.find(
        (producto) => producto.id === Number(idRequested)
      );
      resolve(productoRequested);
    }, 500);
  });
}

const ItemDetailContainer = ({ titulo }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    productoData(id).then((data) => {
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
