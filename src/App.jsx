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
import { AuthProvider } from "./contexto/AuthContexto";
import Login from "./screens/Login";


function App() {
  return (
    <>
      <BrowserRouter>
      <AuthProvider>
        <Provider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/crear-escuela" element={<CrearEscuela />} />
            <Route path="/crear-proyecto" element={<Crear />} />
            <Route path="/escuelas" element={<ListaEscuelas />} />
            <Route path="/proyectos" element={<Todos />} />
            <Route path="/categorias" element={<TodasCategorias />} />
            <Route path="/proyectos/:id" element={<Proyecto />} />
          </Routes>
        </Provider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
