import "./App.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContexProvider } from "./store/CartContext";
import CartView from "../src/components/CartView";
import Foother from "./components/Foother";
import AboutUsView from "./components/AboutUsView";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="App">
        <CartContexProvider>
          <BrowserRouter>
            <NavBar>
              <CartWidget texto="CartWidget"></CartWidget>
            </NavBar>
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer titulo="OFERTAS" />}
              />
              <Route
                path="/ofertas"
                element={<ItemListContainer titulo="OFERTAS" />}
              />
              <Route
                path="/type/:typeid"
                element={<ItemListContainer titulo="TIPO" />}
              />
              <Route
                path="/beer/:id"
                element={
                  <ItemDetailContainer titulo="Detalle de nuestra cerveza" />
                }
              />
              <Route
                path="/sobreNosotros"
                element={<AboutUsView titulo="SOBRE NOSOTROS" />}
              />
              <Route path="/contacto" element={<Contact titulo="CONTACTO" />} />
              <Route path="/cart" element={<CartView />} />
            </Routes>
            <Foother />
          </BrowserRouter>{" "}
        </CartContexProvider>
      </div>
    </>
  );
}

export default App;
