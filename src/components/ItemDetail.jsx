import react from "react";
import porter from "../img/porter.jpeg";

const ItemDetail = (props) => {
  const producto = props.producto;
  return (
    <>
      <div className="detalle">
        <img className="detalle-img" src={porter} alt="Porter" />
        <div className="w-60 p-4  rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <h2 className="font-bold text-lg mb-2 text-center">
            {producto.title}
          </h2>
          <p class="text-xl text-gray-100 text-center font-light">
            Descripcion de la cerveza, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
          <h3 className="text-center">$ {producto.price}</h3>
          <hr />
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
