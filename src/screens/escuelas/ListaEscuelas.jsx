import { useEscuelaContext } from "../../contexto/Contexto";

export const ListaEscuelas = () => {
  const { escuelas } = useEscuelaContext();

  return (
    <div className="p-6">

      <h2 className="text-3xl font-bold mb-6">
        Escuelas
      </h2>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {escuelas.map((esc) => (
          
          <div
            key={esc.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >

            <div className="p-5">

              <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {esc.region?.nombre}
              </span>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {esc.nombre}
              </h3>

              <p className="text-gray-600 text-sm">
                Padrón: {esc.padron}
              </p>

              <p className="text-gray-600 text-sm">
                {esc.localidad}
              </p>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
};