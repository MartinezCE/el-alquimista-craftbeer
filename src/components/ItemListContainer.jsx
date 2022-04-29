import React from "react";
import beer_data from "../API/beer_data.json";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

/*   const fetchData = async () => {
    try {
      const respuesta = await fetch(
        "rutaDeMiApiLocal"
      );
      console.log(respuesta.status);
      console.log(respuesta.text);
      const dato = await respuesta.json();
      console.log(dato);
    } catch (error) {
      console.log(error);
    }
  }; */

function productoData() {
  return new Promise((resolve, reject) => {
    resolve(beer_data);
  }, 1000);
}

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    productoData().then((data) => {
      setProductos(data);
    });
  }, []);

  const saludo = props.saludo;
  return (
    <>
      <h1>{saludo}</h1>
      <ItemList productosArray={productos} />
    </>
  );
};

export default ItemListContainer;
