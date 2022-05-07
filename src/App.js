import "./App.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer";
/* import { BrowserRouter, Route, Routes } from "react-router-dom"; */
function App() {
  return (
    <>
      <div className="App">
        <NavBar>
          <CartWidget texto="CartWidget"></CartWidget>
        </NavBar>

        {/*  <ItemDetailContainer titulo="Detalle de nuestra cerveza" /> */}

        <div className="flex-wrap flex justify-center items-center">
          <ItemListContainer saludo="SALUDOS" />
        </div>
      </div>
    </>
  );
}

export default App;
