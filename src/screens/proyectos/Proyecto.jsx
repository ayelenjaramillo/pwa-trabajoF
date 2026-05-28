import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEscuelaContext } from "../../contexto/Contexto";

export default function Proyecto() {
  const { id } = useParams();

  const { proyectos } = useEscuelaContext();

  const proyecto = proyectos.find((pr) => pr.id == id);

  if (!proyecto) {
    return <p>Cargando proyecto...</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <Link
        to={`/categorias/${proyecto.categoria?.id}`}
        className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 hover:bg-teal-200 transition"
      >
        {proyecto.categoria?.nombre}
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {proyecto.titulo}
      </h1>

      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        {proyecto.descripcion}
      </p>

      <div className="flex items-center gap-2 text-sm text-gray-500 border-t pt-4">
        <span className="font-medium">
          Escuela:
        </span>

        <span>
          {proyecto.escuela?.nombre}
        </span>
      </div>

    </div>
  );
}