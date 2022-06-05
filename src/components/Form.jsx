import React from "react";

const Form = () => {
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen ">
        <div class="fondo2 w-full px-6 py-16 bg-white rounded-lg shadow-2xl lg:w-2/5">
          <h2 class="mb-4 text-xl antialiased font-semibold text-center text-gray-800">
            Envie su consulta
          </h2>
          <form class="mx-8 space-y-8">
            <div>
              <input
                type="text"
                class="w-full p-2 text-sm border-b-2 text-black border-gray-400 outline-none  focus:border-blue-400"
                placeholder="Nombre y Apellido"
              />
            </div>
            <div>
              <input
                type="text"
                class="w-full p-2 text-sm border-b-2 text-black border-gray-400 outline-none  focus:border-blue-400"
                placeholder="Email"
              />
              <span class="text-xs text-red-600">
                El email es un campo requerido
              </span>
            </div>
            <div>
              <input
                type="text"
                class="w-full p-2 text-sm border-b-2 text-black border-gray-400 outline-none  focus:border-blue-400"
                placeholder="Asunto"
              />
            </div>
            <div>
              <textarea
                name="message"
                class="w-full p-6 text-sm border-b-2 text-black border-gray-400 rounded-lg outline-none  focus:border-blue-400"
                placeholder="Escriba su mensaje"
              ></textarea>
            </div>

            <button class="block w-full px-2 py-4 mt-2 text-white bg-black rounded-full">
              Enviar fomrulario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
