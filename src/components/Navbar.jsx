import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <nav class="menu">
        <label class="logo"> El Alquimista Craft Beer </label>
        <CartWidget texto="CartWidget"></CartWidget>
        <ul class="menu_items" id="otroModo">
          <li>
            <a href="#inicio"> inicio</a>
          </li>
          <li>
            <a href="#Ofrtyas"> ofertas</a>
          </li>
          <li>
            <a href="#Sobre nosotros">Sobre nosotros</a>
          </li>
          <li>
            <a href="#contacto">contacto</a>
          </li>
        </ul>
        <span class="btn_menu" onclick="showmenu()">
          <i class="fa fa-bars"></i>
        </span>
      </nav>
    </>
  );
};

export default Navbar;
