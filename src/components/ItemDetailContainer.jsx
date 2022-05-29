import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItem as productoData } from "../API/Firebase/index";

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
      <h1 className="text-center text-3xl text-orange-400 ">{titulo}</h1>
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailContainer;
