import { useEscuelaContext } from "../../contexto/Contexto";
import { Link } from "react-router-dom";
import { CardEscuela } from "../../componentes/CardEscuela";

export const ListaEscuelas = () => {
  const { escuelas } = useEscuelaContext();

  return (
    <div className="p-6">
   <Link
        to="/crear-escuela"
        className="inline-block mb-6 bg-teal-600 text-white px-4 py-2 rounded-lg"
      >
        Crear Escuela
      </Link>
      <h2 className="text-3xl font-bold mb-6">
        Escuelas
      </h2>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

      {escuelas.map((esc) => (
  <CardEscuela
    key={esc.id}
    escuela={esc}
  />
))}

      </div>
    </div>
  );
};