import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexto/AuthContexto";

export const Navbar = () => {

  const [open, setOpen] = useState(false);
  const { usuario, logout } = useAuth();

  return (
    <nav className="bg-teal-700 text-white shadow-md">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Feria Provincial
        </h2>

        {/* Botón mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">

          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/escuelas">Escuelas</Link>
          </li>

          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>

          {usuario ? (
  <>
    <li>
      Hola, {usuario.nombre}
    </li>

    <li>
      <button
        onClick={logout}
        className="bg-white text-teal-700 px-4 py-2 rounded-xl"
      >
        Cerrar sesión
      </button>
    </li>
  </>
) : (
  <li>
    <Link
      className="bg-white text-teal-700 px-4 py-2 rounded-xl"
      to="/login"
    >
      Iniciar sesión
    </Link>
  </li>
)}

        </ul>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm font-medium">

          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/escuelas">Escuelas</Link>
          </li>

          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>

          <li>
            <Link
              className="bg-white text-teal-700 px-4 py-2 rounded-xl inline-block"
              to="/login"
            >
              Iniciar sesión
            </Link>
          </li>

        </ul>
      )}

    </nav>
  );
};