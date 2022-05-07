import CartWidget from "./CartWidget";
import logo from "../img/logo.png";

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
            <a href="#inicio"> inicio </a>
          </li>
          <li>
            <a href="#ofertas"> ofertas </a>
          </li>
          <li>
            <a href="#sobreNosotros"> Sobre Nosotros </a>
          </li>
          <li>
            <a href="#contacto"> contacto </a>
          </li>
        </ul>
        <CartWidget />
      </nav>
      <hr></hr>
    </>
  );
};

export default Navbar;
