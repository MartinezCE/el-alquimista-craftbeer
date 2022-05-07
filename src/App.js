import "./App.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar>
            <CartWidget texto="CartWidget"></CartWidget>
          </NavBar>
          <Routes>
            <Route
              path="/ofertas"
              element={<ItemListContainer saludo="OFERTAS" />}
            />
            <Route
              path="/type/:typeid"
              element={<ItemListContainer saludo="TIPO" />}
            />
            <Route
              path="/beer/:id"
              element={
                <ItemDetailContainer titulo="Detalle de nuestra cerveza" />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
