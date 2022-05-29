import Item from "./Item";

const ItemList = ({ productos }) => {
  console.log("item list", productos);
  return (
    <>
      {productos.map((producto) => (
        <Item className="textoCard" key={producto.id} producto={producto} />
      ))}
    </>
  );
};
export default ItemList;
