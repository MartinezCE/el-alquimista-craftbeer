import React from "react";
import {
  getAllItems as getProducs,
  getItemsByCategory as getBeer,
} from "../API/Firebase/index";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ titulo }) => {
  const { typeid } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (typeid === undefined) {
      getProducs().then((data) => {
        setProductos(data);
      });
    } else {
      getBeer(typeid).then((data) => {
        setProductos(data);
      });
    }
  }, [typeid]);

  return (
    <>
      <h1 className="ofertas-titulo text-4xl">{titulo}</h1>
      <div className="ofertas-contenedor">
        <ItemList productos={productos} />
      </div>
    </>
  );
};

export default ItemListContainer;
