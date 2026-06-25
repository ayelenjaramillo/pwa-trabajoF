import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(
    JSON.parse(localStorage.getItem("usuario")) || null
  );

  const login = (email, password) => {
    if (
      email === "admin@feria.com" &&
      password === "admin123"
    ) {
      const user = {
        nombre: "Administrador",
        email,
      };

      setUsuario(user);

      localStorage.setItem(
        "usuario",
        JSON.stringify(user)
      );

      return true;
    }

    return false;
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};