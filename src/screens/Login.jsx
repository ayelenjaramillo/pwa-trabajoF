import { useState } from "react";
import { useAuth } from "../contexto/AuthContexto";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const ok = login(email, password);

    if (ok) {
      navigate("/");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-md rounded-xl p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Iniciar Sesión
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border rounded-lg p-2"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border rounded-lg p-2"
        />

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded-lg"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}