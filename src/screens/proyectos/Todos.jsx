import React from "react";
import { Link } from "react-router-dom";
import { useEscuelaContext } from "../../contexto/Contexto";

export default function Todos() {
  const { proyectos } = useEscuelaContext();

  return (
    <div className="p-6">
      <Link
        to="/crear-proyecto"
        className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg"
      >
        Crear Proyecto
      </Link>
      <h2 className="text-3xl font-bold mb-6">Proyectos</h2>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((pr) => (
          <Link
            key={pr.id}
            to={`/proyectos/${pr.id}`}
            className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="p-5">
              <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {pr.categoria?.nombre}
              </span>

              <h3 className="text-xl font-bold text-gray-800">{pr.titulo}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
