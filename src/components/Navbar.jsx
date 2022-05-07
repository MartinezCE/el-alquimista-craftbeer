import CartWidget from "./CartWidget";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="logo-container">
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <nav className="menu">
        {/* <label className="logo"> El Alquimista Craft Beer </label>
         */}
        <ul className="menu_items" id="otroModo">
          <li>
            <Link to="/"> inicio </Link>
          </li>
          <li>
            <Link to="/type/blonde"> Rubia </Link>
          </li>
          <li>
            <Link to="/type/red"> Roja </Link>
          </li>
          <li>
            <Link to="/type/black"> Negra </Link>
          </li>
          <li>
            <Link to="/ofertas"> ofertas </Link>
          </li>
          <li>
            <Link to="#sobreNosotros"> Sobre Nosotros </Link>
          </li>
          <li>
            <Link to="#contacto"> contacto </Link>
          </li>
        </ul>
        <CartWidget />
      </nav>
      <hr></hr>
    </>
  );
};

export default Navbar;
