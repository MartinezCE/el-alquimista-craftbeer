import CartWidget from "./CartWidget";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="logo-container">
        <Link to="/">
          <img className="logo-img" src={logo} alt="logo" />
        </Link>
        <div className="titulo-container">
          <h1 className="titulo text-6xl">El Alquimista</h1>
          <h2 className="subititulo text-4xl">Craft Beer</h2>
        </div>
      </div>
      <nav className="menu ">
        <ul className="menu_items text-3xl" id="otroModo">
          <li>
            <Link
              to="/"
              className="flex px-4py-2 rounded-md font-medium text-white
  hover:bg-orange-400"
            >
              {" "}
              Ofertas{" "}
            </Link>
          </li>

          <li>
            <Link
              to="/ofertas"
              className="flex px-4py-2 rounded-md font-medium text-white
  hover:bg-orange-400"
            >
              {" "}
              Tipo{" "}
            </Link>

            <ul className="submenu">
              <li>
                <Link
                  to="/type/blonde"
                  className="flex px-4py-2 rounded-md font-medium text-white
  hover:bg-orange-400"
                >
                  {" "}
                  Rubia{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/type/red"
                  className="flex px-4py-2 rounded-md font-medium text-white
  hover:bg-orange-400"
                >
                  {" "}
                  Roja{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/type/black"
                  className="flex px-4py-2 rounded-md font-medium text-white
  hover:bg-orange-400"
                >
                  {" "}
                  Negra{" "}
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/sobreNosotros"
              className="flex px-4py-2 rounded-md font-medium text-white
  hover:bg-orange-400"
            >
              {" "}
              Sobre Nosotros{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="flex px-4py-2 rounded-md font-medium text-white
  hover:bg-orange-400"
            >
              {" "}
              contacto{" "}
            </Link>
          </li>
        </ul>
        <CartWidget />
      </nav>
      <hr></hr>
    </>
  );
};

export default Navbar;
