import React, { useState } from "react";

export default function Crear() {
  const [proyecto, setProyecto] = useState({});
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [escuela, setEscuela] = useState(0);
  const [imagenes, setImagenes] = useState([]);

  const crearProyecto = () => {
    const formData = new FormData();

    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("categoria", categoria);
    formData.append("escuela", escuela);

    imagenes.forEach((imagen) => {
      formData.append("imagenes", imagen);
    });

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch("http://localhost:3000/proyectos", requestOptions)
      .then((response) => response.json())
      .then((result) => setProyecto(result))
      .catch((error) => console.log(error));
  };

  const cargarArchivo = (e) => {
    const files = Array.from(e.target.files || []);

    if (files.length === 0) {
      return;
    }

    console.log("files desde Crear:", files);

    setImagenes(files);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-4xl font-bold text-cyan-700 mb-2">
          Crear Proyecto
        </h2>

        <p className="text-gray-500 mb-8">
          Compartí un nuevo proyecto para la feria provincial.
        </p>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            name="titulo"
            placeholder="Título del proyecto"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <textarea
            name="descripcion"
            placeholder="Descripción del proyecto"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows="5"
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
          />

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="categoria"
              placeholder="Categoría"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <input
              type="number"
              name="escuela"
              placeholder="ID Escuela"
              value={escuela}
              onChange={(e) => setEscuela(e.target.value)}
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="border-2 border-dashed border-cyan-300 rounded-2xl p-6 bg-cyan-50">
            <p className="text-gray-600 text-sm mb-4">
              Subí imágenes del proyecto
            </p>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => cargarArchivo(e)}
              className="w-full"
            />

            {imagenes.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {imagenes.map((img, index) => (
                  <span
                    key={index}
                    className="bg-cyan-100 text-cyan-700 text-xs px-3 py-2 rounded-full"
                  >
                    {img.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={crearProyecto}
            className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-4 rounded-2xl transition"
          >
            Crear Proyecto
          </button>
        </div>

        {proyecto?.id && (
          <div className="mt-8 bg-green-100 text-green-700 p-4 rounded-2xl">
            Proyecto creado correctamente
          </div>
        )}
      </div>
    </div>
  );
}
