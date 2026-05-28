import React, { useEffect, useState } from "react";

const TodasCategorias = () => {
  const [categorias, setCategorias] = useState(
    JSON.parse(localStorage.getItem("categorias")) || []
  );

  useEffect(() => {
    fetch("http://localhost:3000/categorias")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        localStorage.setItem("categorias", JSON.stringify(result));
        setCategorias(result);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-6 bg-slate-100 min-h-screen">

      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Todas las Categorías
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        {categorias.map((cat) => (

          <div
            key={cat.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition text-center"
          >

            <h3 className="text-lg font-bold text-teal-700">
              {cat.nombre}
            </h3>

          </div>

        ))}

      </div>
    </div>
  );
};

export default TodasCategorias;