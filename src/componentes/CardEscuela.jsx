
export const CardEscuela = ({ escuela }) => {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
        <div className="p-5">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {escuela.region?.nombre}
          </span>
  
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {escuela.nombre}
          </h3>
  
          <p className="text-gray-600 text-sm">
            Padrón: {escuela.padron}
          </p>
  
          <p className="text-gray-600 text-sm">
            {escuela.localidad}
          </p>
        </div>
      </div>
    );
  };