import "./App.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";

function App() {
  return (
    <>
      <div className="App">
        <NavBar>
          <CartWidget texto="CartWidget"></CartWidget>
        </NavBar>
        <ItemListContainer saludo="" />
      </div>
    </>
  );
}

export default App;
