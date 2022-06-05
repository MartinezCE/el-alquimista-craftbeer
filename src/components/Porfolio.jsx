import React from "react";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <>
      <main className="profile-page">
        <section className="relative block" style={{ height: "300px" }}>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          ></div>
        </section>
        <section className="relative py-16 ">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("../img/lupulos.jpeg")}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-orange-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <Link to="/contacto">Contactar </Link>
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          180
                        </span>
                        <span className="text-sm text-gray-500">
                          Vendidas en 2020
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          269
                        </span>
                        <span className="text-sm text-gray-500">
                          Vendidas en 2021
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          220
                        </span>
                        <span className="text-sm text-gray-500">
                          Vendidas hasta el 03/22
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Alquimista Craft Beer
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Hurlingham, Buenos Aires.
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Cerveza artesanal
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    desde 2020
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Somo un grupo de amigos que decidimos crear de forma
                        artesal, la bebida mas rica y antigua de la historia. No
                        existe un "inventor" de la cerveza, tampoco un pueblo,
                        un pais que pueda afirmar quien fue primero al empeza a
                        producirla, por lo que no hay una receta base para la
                        misma.
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Esto nos da la posibilidad de crear y de darle nuestro
                        "toque" unico de cada productor artesal. Desde el 2020,
                        desde el corazon de Hurlingham, comenzamos a crear una
                        de las cervezas mas ricas de buenos aires.
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Si quieren saber mas de nosotros buscanos en las redes
                        sociales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
