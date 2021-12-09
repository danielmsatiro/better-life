import { createContext, useContext, useState } from "react";

import { api } from "../../services/api";

import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const useAuth = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const login = (info) => {
    // info é o que vem do formulário
    api.post("/sessions/", info).then((response) => {
      const { access } = response.data;

      setUser({ id: jwt_decode(access).user_id, token: access });

      localStorage.clear();
      localStorage.setItem("@betterlife:token", JSON.stringify(access));
      localStorage.setItem(
        "@betterlife:user",
        JSON.stringify(jwt_decode(access).user_id)
      );
    });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
