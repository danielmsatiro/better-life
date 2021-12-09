import { createContext, useContext, useState } from "react";

import { api } from "../../services/api";

import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const useAuth = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("@betterlife:token");
    const id = localStorage.getItem("@betterlife:id");

    if (token && id) {
      return { token, id };
    }

    return {};
  });

  const login = (info) => {
    // info é o que vem do formulário
    api.post("/sessions/", info).then((response) => {
      const { access } = response.data;

      localStorage.clear();
      localStorage.setItem("@betterlife:token", JSON.stringify(access));
      localStorage.setItem(
        "@betterlife:id",
        JSON.stringify(jwt_decode(access).user_id)
      );
    });
  };

  const logout = () => {
    localStorage.clear()
    setUser("")
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
