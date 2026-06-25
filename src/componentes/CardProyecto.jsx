import { Link } from "react-router-dom";

export const CardProyecto = ({ proyecto }) => {
  return (
    <Link
      to={`/proyectos/${proyecto.id}`}
      className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
    >
      <div className="p-5">
        <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {proyecto.categoria?.nombre}
        </span>

        <h3 className="text-xl font-bold text-gray-800">
          {proyecto.titulo}
        </h3>
      </div>
    </Link>
  );
};