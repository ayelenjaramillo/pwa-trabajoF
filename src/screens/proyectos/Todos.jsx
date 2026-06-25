import React from "react";
import { Link } from "react-router-dom";
import { useEscuelaContext } from "../../contexto/Contexto";
import { CardProyecto } from "../../componentes/CardProyecto";

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

      <h2 className="text-3xl font-bold mb-6">
        Proyectos
      </h2>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((pr) => (
          <CardProyecto
            key={pr.id}
            proyecto={pr}
          />
        ))}
      </div>
    </div>
  );
}