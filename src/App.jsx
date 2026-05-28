import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CrearEscuela } from "./screens/escuelas/CrearEscuela";
import { ListaEscuelas } from "./screens/escuelas/ListaEscuelas";
import { Provider } from "./contexto/Contexto";
import Index from "./screens/Index";
import Todos from "./screens/proyectos/Todos";
import Crear from "./screens/proyectos/Crear";
import { Navbar } from "./screens/Navbar";
import TodasCategorias from "./screens/categorias/TodasCategorias";
import Proyecto from "./screens/proyectos/Proyecto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/crear-escuela" element={<CrearEscuela />} />
            <Route path="/crear-proyecto" element={<Crear />} />
            <Route path="/escuelas" element={<ListaEscuelas />} />
            <Route path="/proyectos" element={<Todos />} />
            <Route path="/categorias" element={<TodasCategorias />} />
            <Route path="/proyectos/:id" element={<Proyecto />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
