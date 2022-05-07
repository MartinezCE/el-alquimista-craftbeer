import Item from "./Item";

const ItemList = ({ productos }) => {
  console.log("item list", productos);
  return (
    <>
      {/* <Item></Item> */}
      {productos.map((producto) => (
        <Item producto={producto} />
      ))}
    </>
  );
};
export default ItemList;
