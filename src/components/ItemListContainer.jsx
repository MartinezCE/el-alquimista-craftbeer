import React from "react";
import beer_data from "../API/beer_data";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
/*
function productoData() {
  return new Promise((resolve, reject) => {
    resolve(beer_data);
  }, 500);
} */

const ItemListContainer = (props) => {
  /* const [productos, setProductos] = useState({});

  useEffect(() => {
    productoData().then((data) => {
      setProductos(data);
    });
  }, []); */

  const saludo = props.saludo;
  return (
    <>
      <h1>{saludo}</h1>
      <ItemList productos={beer_data} />
    </>
  );
};

export default ItemListContainer;
