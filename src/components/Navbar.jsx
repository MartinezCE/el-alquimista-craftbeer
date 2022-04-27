import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <nav class="menu">
        <label class="logo"> El Alquimista Craft Beer </label>
        <CartWidget> </CartWidget>
        <ul class="menu_items" id="otroModo">
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
      </nav>
    </>
  );
};

export default Navbar;
