import { createContext, useState } from "react";

import { api } from "../../services/api";

import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const login = (info) => {
    // info é o que vem do formulário
    api.post("/sessions/", info).then((response) => {
      const { access } = response.data;
      setUser(jwt_decode(access));
    });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
