import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.jpg";

export default function Index() {
  return (
    <>
      <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-150 md:h-auto">
          <img
            src={home}
            alt="Feria Provincial"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md flex flex-col gap-6 mt-5">
            <Link
              to="/escuelas"
              className="bg-teal-700 text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-3xl font-bold mb-2">Escuelas</h2>

              <p className="text-sm text-teal-100">
                Mirá escuelas participantes.
              </p>
            </Link>

            <Link
              to="/proyectos"
              className="bg-cyan-700 text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-3xl font-bold mb-2">Proyectos</h2>

              <p className="text-sm text-cyan-100">
                Descubrí los proyectos de la feria.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Link to="/categorias" className="block mt-16">
        <div className="w-full bg-gradient-to-r from-teal-700 to-cyan-700 text-white text-center text-2xl md:text-4xl font-bold py-10 px-6 shadow-lg hover:opacity-90 transition">
          Explorá los proyectos a través de las categorías
        </div>
      </Link>
    </>
  );
}
