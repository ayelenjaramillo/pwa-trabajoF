import React from "react";
import { useState } from "react";

export const CrearEscuela = () => {
  const [nombre, setNombre] = useState("");
  const [region_id, setRegionId] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [padron, setPadron] = useState("");
  const [error, setError] = useState("");
  const [escuela, setEscuela] = useState({});
  const [image, setImage] = useState(null);

  const crearEscuela = () => {
    if (!nombre || !region_id || !localidad || !padron) {
      setError("Faltan datos");
      return;
    }

    if (!image) {
      setError("Falta la imagen");
      return;
    }

    setError("");

    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("padron", padron);
    formData.append("region_id", region_id);
    formData.append("localidad", localidad);
    formData.append("logo", image);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch(`${import.meta.env.VITE_API_URL}/escuelas`, requestOptions)
      .then((response) => response.json())
      .then((result) => setEscuela(result))
      .catch((error) => console.error(error));
  };

  const cargarArchivo = (e) => {
    const file = e.target.files?.[0];

    console.log(file);

    if (!file) {
      setError("No hay archivo");
      return;
    }

    setImage(file);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-4xl font-bold text-teal-700 mb-2">Crear Escuela</h2>

        <p className="text-gray-500 mb-8">
          Registrá una nueva escuela participante.
        </p>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre de la escuela"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="number"
            name="numero"
            placeholder="Número de padrón"
            value={padron}
            onChange={(e) => setPadron(e.target.value)}
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <select
            value={region_id}
            onChange={(e) => setRegionId(e.target.value)}
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Seleccione una región</option>
            <option value="1">Región I</option>
            <option value="2">Región II</option>
            <option value="3">Región III</option>
            <option value="4">Región IV</option>
          </select>

          <input
            type="text"
            name="localidad"
            placeholder="Localidad"
            value={localidad}
            onChange={(e) => setLocalidad(e.target.value)}
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <div className="border-2 border-dashed border-teal-300 rounded-2xl p-6 bg-teal-50">
            <p className="text-gray-600 text-sm mb-4">
              Subí el logo o imagen de la escuela
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => cargarArchivo(e)}
              className="w-full"
            />

            {image && (
              <div className="mt-4">
                <span className="bg-teal-100 text-teal-700 text-xs px-3 py-2 rounded-full">
                  {image.name}
                </span>
              </div>
            )}
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-xl text-sm">
              {error}
            </div>
          )}

          <button
            onClick={crearEscuela}
            className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-4 rounded-2xl transition"
          >
            Crear Escuela
          </button>
        </div>

        {escuela?.id && (
          <div className="mt-8 bg-green-100 text-green-700 p-4 rounded-2xl">
            Escuela creada correctamente
          </div>
        )}
      </div>
    </div>
  );
};
