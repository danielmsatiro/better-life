import { createContext, useState } from "react";

import { api } from "../../services/api";

import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [decoded, setDecoded] = useState(null);
  const [userID, setUserID] = useState({});

  const login = (info) => {
    // info é o que vem do formulário
    api.post("/sessions/", info).then((response) => {
      const { access } = response.data;
      setDecoded(jwt_decode(access));
      setUserID(decoded.user_id);
    });
  };

  return (
    <UserContext.Provider value={{ userID, login }}>
      {children}
    </UserContext.Provider>
  );
};
