import React from "react";
import beer_data from "../API/beer_data";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function productoData(typeid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeid === undefined) resolve(beer_data);
      const productoRequested = beer_data.filter(
        (producto) => producto.type === typeid
      );
      resolve(productoRequested);
    }, 500);
  });
}

const ItemListContainer = (props) => {
  const { typeid } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    productoData(typeid).then((data) => {
      setProductos(data);
    });
  }, [typeid]);

  const saludo = props.saludo;
  return (
    <>
      <h1 className="ofertas-titulo">{saludo}</h1>
      <div className="ofertas-contenedor">
        <ItemList productos={productos} />
      </div>
    </>
  );
};

export default ItemListContainer;
