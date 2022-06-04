import { Spinner } from "./Spinner.jsx";
import React from "react";
const { Link } = require("react-router-dom");

const Item = ({ producto }) => {
  if (!producto) {
    return <Spinner />;
  }
  return (
    <>
      <div className=" card w-60 p-2  rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <h2 className="font-bold text-lg mb-2 text-center ">
          {producto.title}
        </h2>
        <div>
          <img className="oferta_img" src={producto.img} alt="img de cerveza" />
        </div>
        <p class="textoCard text-sm text-gray-600 text-center">
          {producto.description}
        </p>
        <h3 className="text-center">$ {producto.price}</h3>
        <hr></hr>
        <h3 className="text-center">Stock {producto.stock}</h3>
        <Link to={`/beer/${producto.id}`}>
          <button className="text-indigo-500 inline-flex items-center mt-3">
            ver mas
          </button>
        </Link>
      </div>
    </>
  );
};
export default Item;
