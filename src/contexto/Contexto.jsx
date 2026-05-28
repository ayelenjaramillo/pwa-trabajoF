import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";

export const Escuelacontexto = createContext();
export const useEscuelaContext = () => useContext(Escuelacontexto);

export const Provider = ({ children }) => {
  const [escuelas, setEscuelas] = useState(
    JSON.parse(localStorage.getItem("escuelas")) || []
  );
  const [proyectos, setProyectos] = useState(
    JSON.parse(localStorage.getItem("proyectos")) || []
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/escuelas`)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        // localStorage.setItem("escuelas", JSON.stringify(result.escuela))
        // setEscuelas(result.escuela);

        localStorage.setItem("escuelas", JSON.stringify(result));
        setEscuelas(result);
      })

      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/proyectos`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // localStorage.setItem("proyectos", JSON.stringify(data));
        // setProyectos(data);

        localStorage.setItem("proyectos", JSON.stringify(data));
        setProyectos(data);
      })

      .catch((error) => console.error(error));
  }, []);

  return (
    <Escuelacontexto.Provider value={{ escuelas, proyectos }}>
      {children}
    </Escuelacontexto.Provider>
  );
};

//CREO EL CONTEXTO
//HAGO UN CUSTOM HOOK PARA USAR ESE CONTEXTO
//CREO EL PROVIDER
